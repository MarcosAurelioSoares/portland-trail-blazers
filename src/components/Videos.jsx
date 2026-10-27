import React, { useState } from 'react';
import './Videos.css';

const videos = [
  { file: 'video-training.png', title: 'Conheça "Shaedon Sharpe: A principal promessa do Portland Trail Blazers pronta para brilhar na NBA."', featured: true },
  { file: 'video-lillard-55.png', title: 'Incrível atuação de Damian Lillard no game 5 contra o Denver nos playoffs de 2021.' },
  { file: 'video-champions-1977.png', title: 'Conquistando as Chamas da Glória: Portland Trail Blazers, Campeões da NBA em 1977!' },
  { file: 'video-oh-lillard.png', title: 'Vivendo o Sonho de Todo Fã: All Access com os Incríveis Jogadores dos Portland Trail Blazers' },
  { file: 'video-carmelo.png', title: 'O Fim de uma Era: Carmelo Anthony, uma Despedida Lendária da NBA!' },
];

function VideoCard({ video }) {
  const [missing, setMissing] = useState(false);
  return (
    <figure className={`video-card${video.featured ? ' video-card-featured' : ''}`} tabIndex={0} aria-label={`${video.title} — prévia demonstrativa`}>
      {!missing ? <img src={`/assets/${video.file}`} alt={video.title} loading="lazy" onError={() => setMissing(true)} /> : <>
        <span className="video-asset-placeholder">Imagem do treino aguardando exportação do Figma</span>
        <span className="video-card-play" aria-hidden="true"><svg viewBox="0 0 64 64"><path d="M21 10 55 32 21 54Z" /></svg></span>
      </>}
      <figcaption className="video-hover-caption">{video.title}</figcaption>
    </figure>
  );
}

export default function Videos() {
  return (
    <section className="videos-section" aria-labelledby="videos-title">
      <div className="videos-background" aria-hidden="true"><span className="videos-background-mark" /></div>
      <header className="videos-heading"><span className="section-eyebrow">ESSA SEMANA</span><h2 id="videos-title">Principais vídeos</h2></header>
      <div className="videos-grid">{videos.map((video) => <VideoCard key={video.file} video={video} />)}</div>
    </section>
  );
}
