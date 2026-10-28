import assert from 'node:assert/strict';
import { readFile, readdir, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { createServer } from 'vite';

const root = fileURLToPath(new URL('../', import.meta.url));
const server = await createServer({
  root,
  logLevel: 'error',
  server: { middlewareMode: true, hmr: false },
  appType: 'custom',
  optimizeDeps: { noDiscovery: true, include: [] },
});

try {
  const { default: App } = await server.ssrLoadModule('/src/App.jsx');
  const html = renderToStaticMarkup(React.createElement(App));
  assert.equal((html.match(/<main\b/g) || []).length, 1, 'A página precisa de um conteúdo principal.');
  assert.equal((html.match(/<h1\b/g) || []).length, 1, 'A página precisa de um título principal.');
  assert.equal((html.match(/<footer\b/g) || []).length, 1, 'Rodapé ausente ou duplicado.');

  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
  const uniqueIds = new Set(ids);
  assert.equal(uniqueIds.size, ids.length, 'Há IDs duplicados na página.');
  for (const match of html.matchAll(/\b(?:aria-controls|aria-labelledby)="([^"]+)"/g)) {
    for (const id of match[1].split(/\s+/)) assert.ok(uniqueIds.has(id), `Referência de acessibilidade inexistente: ${id}`);
  }
  for (const match of html.matchAll(/href="#([^"]+)"/g)) assert.ok(uniqueIds.has(match[1]), `Âncora inexistente: ${match[1]}`);
  assert.ok(html.includes('Início') && html.includes('Notícias'), 'Verifique a codificação UTF-8 dos textos.');

  const assets = new Set([...html.matchAll(/\/assets\/[a-zA-Z0-9-]+\.(?:png|svg|jpg)/g)].map((match) => match[0]));
  async function inspectSources(directory) {
    for (const entry of await readdir(directory, { withFileTypes: true })) {
      const file = path.join(directory, entry.name);
      if (entry.isDirectory()) await inspectSources(file);
      else if (/\.(?:jsx|css)$/.test(entry.name)) {
        const source = await readFile(file, 'utf8');
        for (const match of source.matchAll(/\/assets\/[a-zA-Z0-9-]+\.(?:png|svg|jpg)/g)) assets.add(match[0]);
        for (const match of source.matchAll(/\b(?:file|image):\s*['"]([^'"]+\.(?:png|svg|jpg))['"]/g)) assets.add(`/assets/${match[1]}`);
      }
    }
  }
  await inspectSources(path.join(root, 'src'));
  for (const asset of assets) await access(path.join(root, 'public', asset.slice(1)));
  console.log(`React renderizado sem erros; IDs, referências acessíveis e ${assets.size} assets locais verificados.`);
} finally {
  await server.close();
}
