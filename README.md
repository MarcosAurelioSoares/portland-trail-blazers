# Portland Trail Blazers — Landing Page

Landing page de estudo desenvolvida em React a partir de um layout no Figma, com foco em fidelidade visual e adaptação para diferentes tamanhos de tela.

**Site publicado:** [portland-trail-blazers.vercel.app](https://portland-trail-blazers.vercel.app)

## Estado atual

- Header com logo SVG sobreposto, navegação demonstrativa e menu expansível no celular.
- Ícones sociais com transição para a cor `#C8102E` no hover e foco pelo teclado.
- Hero com três destaques e carrossel manual, sem rotação automática.
- Miniatura de melhores momentos e painel de próximos jogos.
- Seção de notícias com três cards e tabela de classificação ilustrativa.
- Grade responsiva de principais vídeos, com quatro miniaturas do Figma e destaque do treino de Shaedon Sharpe.
- Galeria da arena com setas, miniaturas e navegação por teclado.
- Faixa horizontal com seis artes de fãs e créditos dos autores.
- FAQ com respostas completas, animação e apenas um item aberto por vez.
- Rodapé com quatro colunas, lojas de aplicativos e redes sociais.
- Layout em duas colunas no desktop, reorganizado no tablet e celular.

## Tecnologias

React 19, Vite 6, CSS, React Icons e fontes Inter, Space Grotesk e Sora instaladas localmente pelo Fontsource.

## Executar localmente

Requer Node.js 22.12+ ou uma versão LTS mais recente.

```sh
npm ci
npm run dev
```

Abra o endereço local informado pelo Vite.

```sh
npm run build
npm run preview
```

O build de produção é gerado em `dist/`.

## Verificações

```sh
npm run check
npm run build
```

A checagem renderiza a aplicação em React, verifica IDs e referências de acessibilidade e confirma a existência dos assets locais. O build valida os módulos, estilos e fontes. Essas verificações não substituem a inspeção visual em navegadores e dispositivos.

O layout adapta as margens, grades, menu e áreas de toque para celulares a partir de 320 px, tablets e desktops. A galeria e a faixa de artes mantêm sua rolagem dentro da seção; o FAQ preserva uma resposta aberta por vez e respeita a preferência por movimento reduzido.

## Estrutura

```text
public/assets/           # Assets usados na página
src/components/          # Seções da landing page e seus estilos
scripts/check.mjs        # Checagem de renderização, acessibilidade e assets
src/App.jsx              # Composição da página
src/main.jsx             # Entrada e fontes
src/styles.css           # Estilos globais e header responsivo
```

## Escopo e próximos passos

A página inclui arena com galeria manual, faixa de artes dos fãs, FAQ com abertura exclusiva animada e rodapé responsivo em quatro colunas. A tabela de classificação utiliza os cinco escudos exportados do Figma. Links, lojas de aplicativos, busca, reprodução dos vídeos e botões de jogos e classificação são demonstrativos. As datas dos jogos e a classificação reproduzem o desenho e não representam dados atualizados.

Os destaques do hero utilizam exportações compostas do Figma, com texto e controles incorporados à imagem. Fotos sem sobreposições permitirão refinar a tipografia e o recorte no celular. O layout mobile é uma adaptação da implementação, sem referência específica de Figma.

## Sobre o projeto

Projeto de portfólio não oficial, sem vínculo com o Portland Trail Blazers ou a NBA. Marcas e imagens pertencem aos respectivos titulares.
