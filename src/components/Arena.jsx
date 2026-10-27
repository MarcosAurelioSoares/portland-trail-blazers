import React, { useState } from 'react';
import './Arena.css';

const photos = [
  { file: 'arena-exterior.png', alt: 'Fachada do Moda Center' },
  { file: 'arena-game.png', alt: 'Arquibancadas cheias durante um jogo no Moda Center' },
  { file: 'arena-court.png', alt: 'Quadra do Portland Trail Blazers no Moda Center' },
  { file: 'arena-entrance.png', alt: 'Entrada do Moda Center' },
  { file: 'arena-store.png', alt: 'Loja de produtos do Portland Trail Blazers' },
  { file: 'arena-audience.png', alt: 'Torcedores acompanhando um evento na arena' },
  { file: 'arena-fans.png', alt: 'Torcida comemorando no Moda Center' },
];

function Photo({ photo }) {
  return <span className="arena-photo-crop"><img src={`/assets/${photo.file}`} alt={photo.alt} loading="lazy" /></span>;
}

export default function Arena() {
  const [selected, setSelected] = useState(1);
  const move = (direction) => setSelected((current) => (current + direction + photos.length) % photos.length);
  return (
    <section className="arena-section" aria-label="Conheça o Moda Center">
      <div className="arena-brand"><img src="/assets/moda-center.svg" alt="Moda Center" /></div>
      <div className="arena-content">
        <div className="arena-gallery" role="group" aria-roledescription="carrossel" aria-label="Fotos da arena" onKeyDown={(event) => { if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') { event.preventDefault(); move(event.key === 'ArrowLeft' ? -1 : 1); } }}>
          <div className="arena-main-photo"><Photo photo={photos[selected]} /><button className="arena-arrow arena-arrow-left" type="button" aria-label="Foto anterior" onClick={() => move(-1)}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 12H4m7-7-7 7 7 7" /></svg></button><button className="arena-arrow arena-arrow-right" type="button" aria-label="Próxima foto" onClick={() => move(1)}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h16m-7-7 7 7-7 7" /></svg></button></div>
          <div className="arena-thumbnails" aria-label="Selecionar foto">{photos.map((photo, index) => <button type="button" className="arena-thumbnail" key={photo.file} aria-label={`Mostrar foto ${index + 1}: ${photo.alt}`} aria-pressed={index === selected} onClick={() => setSelected(index)}><Photo photo={photo} /></button>)}</div>
          <p className="sr-only" aria-live="polite">Foto {selected + 1} de {photos.length}: {photos[selected].alt}</p>
        </div>
        <div className="arena-description"><p>A Arena do Portland Trail Blazers é um marco icônico na cidade de Portland, Oregon, e é conhecida por seu ambiente vibrante e energético. Também é chamada de Moda Center, devido a um patrocínio, mas muitos fãs ainda se referem a ela pelo seu nome original.</p><p>Localizada no distrito de Lloyd, a Arena do Trail Blazers é o lar da equipe de basquete profissional da NBA, o Portland Trail Blazers. Com capacidade para mais de 19.000 espectadores, possui um design moderno, assentos confortáveis e excelente visibilidade. Além dos jogos de basquete da NBA, a Arena recebe uma variedade de eventos esportivos e shows de renome. Os torcedores apaixonados e a atmosfera vibrante tornam cada visita uma experiência emocionante.</p></div>
      </div>
    </section>
  );
}
