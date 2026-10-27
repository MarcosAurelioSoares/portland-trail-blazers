# Portland Trail Blazers — Landing Page

Landing page de estudo desenvolvida em React a partir de um layout no Figma, com foco em fidelidade visual e adaptação para diferentes tamanhos de tela.

## Estado atual

- Header com logo SVG sobreposto, navegação demonstrativa e menu expansível no celular.
- Ícones sociais com transição para a cor `#C8102E` no hover e foco pelo teclado.
- Hero com três destaques e carrossel manual, sem rotação automática.
- Miniatura de melhores momentos e painel de próximos jogos.
- Seção de notícias com três cards e tabela de classificação ilustrativa.
- Grade responsiva de principais vídeos, com quatro miniaturas do Figma e destaque do treino de Shaedon Sharpe.
- Layout em duas colunas no desktop, reorganizado no tablet e celular.

## Tecnologias

React 19, Vite 6, CSS, React Icons e fontes Inter e Space Grotesk instaladas localmente pelo Fontsource.

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

## Estrutura

```text
public/assets/           # Assets usados na página
src/components/          # Header, Hero e estilos do Hero
src/App.jsx              # Composição da página
src/main.jsx             # Entrada e fontes
src/styles.css           # Estilos globais e header responsivo
```

## Escopo e próximos passos

Arena, artes dos fãs e rodapé serão implementados nas próximas etapas. Os escudos de Nuggets e Kings aguardam os assets do Figma. Links, busca, reprodução dos vídeos e botões de jogos e classificação são demonstrativos. As datas dos jogos e a classificação reproduzem o desenho e não representam dados atualizados.

Os destaques do hero utilizam exportações compostas do Figma, com texto e controles incorporados à imagem. Fotos sem sobreposições permitirão refinar a tipografia e o recorte no celular. O layout mobile é uma adaptação da implementação, sem referência específica de Figma.

## Sobre o projeto

Projeto de portfólio não oficial, sem vínculo com o Portland Trail Blazers ou a NBA. Marcas e imagens pertencem aos respectivos titulares.
