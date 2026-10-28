import React, { useState } from 'react';
import './Hero.css';

function Asset({ src, alt, className = '', fallback }) {
  const [missing, setMissing] = useState(false);
  return missing ? <span className={`asset-fallback ${className}`}>{fallback}</span> : <img className={className} src={src} alt={alt} onError={() => setMissing(true)} />;
}

function Arrow({ direction }) {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d={direction === 'left' ? 'M19 12H5m6-6-6 6 6 6' : 'M5 12h14m-6-6 6 6-6 6'} /></svg>;
}

function Team({ code, name, file }) {
  return <div className="team"><Asset src={`/assets/${file}`} alt={name} fallback={code} className="team-logo" /><span>{code}</span></div>;
}

export default function Hero() {
  const slides = [
    { file: 'hero-lillard.png', title: 'Damian Lillard faz 71 pontos e se torna o 8º jogador na história da NBA a passar a marca dos 70' },
    { file: 'hero-grant.png', title: 'Jerami Grant vive expectativa de um novo contrato maior no Portland Trail Blazers' },
    { file: 'hero-nurkic.png', title: 'Após 5 jogos, Nurkić está listado para jogar contra os Warriors no próximo jogo' },
  ];
  const [active, setActive] = useState(1);
  const slide = slides[active];
  const changeSlide = (step) => setActive((current) => (current + step + slides.length) % slides.length);
  return (
    <section className="hero" aria-label="Destaques do Portland Trail Blazers">
      <article className="hero-feature hero-feature-composite" aria-labelledby="feature-title" aria-roledescription="carrossel" onKeyDown={(event) => { if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') { event.preventDefault(); changeSlide(event.key === 'ArrowLeft' ? -1 : 1); } }}>
        <div className="composite-image" style={{ backgroundImage: `url(/assets/${slide.file})` }} aria-hidden="true" />
        <div className="feature-shade" />
        <button type="button" className="feature-arrow feature-arrow-left" aria-label="Destaque anterior" onClick={() => changeSlide(-1)}><Arrow direction="left" /></button>
        <button type="button" className="feature-arrow feature-arrow-right" aria-label="Próximo destaque" onClick={() => changeSlide(1)}><Arrow direction="right" /></button>
        <div className="feature-content" aria-live="polite"><span className="feature-tag">NBA</span><h1 id="feature-title">{slide.title}</h1></div>
        <div className="feature-indicators" aria-label="Selecionar destaque">{slides.map((item, index) => <button key={item.file} type="button" aria-label={`Destaque ${index + 1}: ${item.title}`} aria-pressed={index === active} onClick={() => setActive(index)} />)}</div>
      </article>
      <aside className="hero-sidebar" aria-label="Vídeo e próximos jogos">
        <article className="hero-video">
          <div className="video-thumbnail">
            <Asset src="/assets/blazers-rockets.png" alt="Melhores momentos de Portland Trail Blazers contra Houston Rockets" fallback="Miniatura indisponível" />
          </div>
          <h2>Portland Trail Blazers vs Houston Rockets Melhores momentos | Feb 26 | 2023 NBA</h2>
        </article>
        <section className="upcoming-games" aria-labelledby="games-title">
          <h2 id="games-title">PRÓXIMOS JOGOS</h2>
          <ul className="games-list">
            <li><div className="game-match"><Team code="GSW" name="Golden State Warriors" file="warriors.svg" /><span className="match-cross">×</span><Team code="POR" name="Portland Trail Blazers" file="blazers-logo.svg" /></div><p>NBA 01/03 ÀS 23:00 | CHASE CENTER</p></li>
            <li><div className="game-match"><Team code="ATL" name="Atlanta Hawks" file="hawks.svg" /><span className="match-cross">×</span><Team code="POR" name="Portland Trail Blazers" file="blazers-logo.svg" /></div><p>NBA 02/03 ÀS 21:00 | STATE FARM</p></li>
          </ul>
          <button type="button" className="all-games" aria-label="Ver todos os jogos (demonstrativo)" disabled>Ver todos os jogos</button>
        </section>
      </aside>
    </section>
  );
}
