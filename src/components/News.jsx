import React, { useState } from 'react';
import './News.css';

const articles = [
  { category: 'Twitter', title: 'Damian Lillard desafia fãs sobre uma possível troca', image: 'news-lillard.png', alt: 'Damian Lillard em quadra' },
  { category: 'Loteria do draft', title: 'Trail Blazers aguardam a loteria para fortalecer a equipe', image: 'news-draft.png', alt: 'Loteria do draft da NBA' },
  { category: 'NBA', title: 'Anfernee Simons se lesiona contra o Houston', image: 'news-simons.png', alt: 'Anfernee Simons em quadra' },
];
const standings = [
  { name: 'Nuggets', short: 'DEN', image: 'nuggets.svg', wins: 35, losses: 11 },
  { name: 'Warriors', short: 'GSW', image: 'warriors.svg', wins: 33, losses: 13 },
  { name: 'Hawks', short: 'ATL', image: 'hawks.svg', wins: 30, losses: 16 },
  { name: 'Kings', short: 'SAC', image: 'kings.svg', wins: 30, losses: 16 },
  { name: 'Trail Blazers', short: 'POR', image: 'blazers-logo.svg', wins: 29, losses: 17 },
];

function NewsImage({ file, alt, team }) {
  const [missing, setMissing] = useState(false);
  return missing ? <span className={team ? 'standing-logo-placeholder' : 'news-image-placeholder'}>{team || 'Imagem aguardando exportação do Figma'}</span> : <img src={`/assets/${file}`} alt={alt} onError={() => setMissing(true)} loading="lazy" />;
}

export default function News() {
  return (
    <section className="news-section" aria-labelledby="news-title">
      <div className="news-heading"><h2 id="news-title">Notícias</h2><button type="button" className="more-news" disabled aria-label="Mais notícias (demonstrativo)"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 3v10M3 8h10" /></svg>NOTÍCIAS</button></div>
      <div className="news-grid">
        {articles.map((article) => <article className="news-card" key={article.image}>
          <div className="news-image"><NewsImage file={article.image} alt={article.alt} /></div>
          <p className="news-category">{article.category}</p>
          <h3>{article.title}</h3>
        </article>)}
        <aside className="standings" aria-labelledby="standings-title">
          <h3 id="standings-title">CLASSIFICAÇÃO</h3>
          <table aria-label="Classificação ilustrativa do layout, sem atualização em tempo real">
            <thead><tr><th scope="col" colSpan="2">Posição</th><th scope="col" abbr="Vitórias">V</th><th scope="col" abbr="Derrotas">D</th></tr></thead>
            <tbody>{standings.map((team, index) => <tr key={team.short} className={team.short === 'POR' ? 'standings-highlight' : ''}><td className="standing-position">{index + 1}</td><th scope="row"><span className="standing-team"><NewsImage file={team.image} alt="" team={team.short} /><span>{team.name}</span></span></th><td>{team.wins}</td><td>{team.losses}</td></tr>)}</tbody>
          </table>
          <button type="button" className="standings-button" disabled aria-label="Classificação completa (demonstrativa)">Classificação completa</button>
        </aside>
      </div>
    </section>
  );
}
