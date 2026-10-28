import React, { useEffect, useRef, useState } from 'react';
import './FanArt.css';

const artists = [
  { name: 'Jonas Silvestre', handle: '@JonasSnow', slug: 'jonas' },
  { name: 'Caleb Martin', handle: '@Caleb_trent', slug: 'caleb' },
  { name: 'Carlos Miguel', handle: '@Carlito68', slug: 'carlos' },
  { name: 'Trent Júnior', handle: '@Trent-Trent', slug: 'trent' },
  { name: 'Mia clover', handle: '@MiaLP', slug: 'mia' },
  { name: 'Jhenyy Slow', handle: '@Jhenyy_lia', slug: 'jhenyy' },
];

function ArtistImage({ artist, avatar = false }) {
  const [missing, setMissing] = useState(false);
  if (missing) return <span className={avatar ? 'fan-avatar-placeholder' : 'fan-art-placeholder'}>{avatar ? artist.name.split(' ').map((word) => word[0]).slice(0, 2).join('') : 'Arte aguardando exportação do Figma'}</span>;
  if (avatar) return <span className="fan-avatar-crop" style={{ backgroundImage: `url('/assets/fan-${artist.slug}.png')` }} aria-hidden="true" />;
  return <img src={`/assets/fan-${artist.slug}.png`} alt={`Arte de ${artist.name} dedicada ao Portland Trail Blazers`} loading="lazy" onError={() => setMissing(true)} />;
}

export default function FanArt() {
  const track = useRef(null);
  const [navigation, setNavigation] = useState({ previous: false, next: true });
  const updateNavigation = () => {
    const rail = track.current;
    if (!rail) return;
    const previous = rail.scrollLeft > 2;
    const next = rail.scrollLeft + rail.clientWidth < rail.scrollWidth - 2;
    setNavigation((current) => current.previous === previous && current.next === next ? current : { previous, next });
  };
  useEffect(() => {
    const rail = track.current;
    if (!rail) return;
    const observer = new ResizeObserver(updateNavigation);
    observer.observe(rail);
    updateNavigation();
    return () => observer.disconnect();
  }, []);
  const scroll = (direction) => {
    const card = track.current?.querySelector('.fan-art-card');
    if (!card) return;
    track.current.scrollBy({ left: (card.getBoundingClientRect().width + 24) * direction, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  };
  return (
    <section className="fan-art-section" aria-labelledby="fan-art-title">
      <header className="fan-art-heading"><span className="section-eyebrow">ESSA SEMANA</span><h2 id="fan-art-title">Artes dos fãs</h2></header>
      <ul id="fan-art-track" className="fan-art-track" ref={track} onScroll={updateNavigation} tabIndex={0} aria-label="Galeria com seis artes de fãs" onKeyDown={(event) => { if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') { event.preventDefault(); scroll(event.key === 'ArrowLeft' ? -1 : 1); } }}>
        {artists.map((artist) => <li className="fan-art-card" key={artist.slug}><div className="fan-art-image"><ArtistImage artist={artist} /></div><div className="fan-art-credit"><span className="fan-avatar"><ArtistImage artist={artist} avatar /></span><div className="fan-artist"><h3>{artist.name}</h3><p>{artist.handle}</p></div></div></li>)}
      </ul>
      <div className="fan-art-controls" role="group" aria-label="Navegação das artes"><button type="button" aria-label="Ver artes anteriores" aria-controls="fan-art-track" disabled={!navigation.previous} onClick={() => scroll(-1)}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 12H4m7-7-7 7 7 7" /></svg></button><button type="button" aria-label="Ver próximas artes" aria-controls="fan-art-track" disabled={!navigation.next} onClick={() => scroll(1)}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h16m-7-7 7 7-7 7" /></svg></button></div>
    </section>
  );
}
