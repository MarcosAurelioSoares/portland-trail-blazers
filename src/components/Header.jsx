import React, { useRef, useState } from 'react';
import { FaTwitter, FaTiktok, FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa';

const menu = ['Início', 'Elenco', 'História', 'Eventos', 'Loja'];
const socials = [
  ['Twitter', FaTwitter], ['TikTok', FaTiktok], ['Facebook', FaFacebookF],
  ['YouTube', FaYoutube], ['Instagram', FaInstagram],
];

function Logo() {
  return (
    <div className="header-logo" aria-label="Portland Trail Blazers">
      <img src="/assets/blazers-logo.svg" alt="Portland Trail Blazers" width="81" height="96" />
    </div>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef(null);
  return (
    <header className="header" onKeyDown={(event) => { if (event.key === 'Escape' && menuOpen) { setMenuOpen(false); toggleRef.current?.focus(); } }}>
      <div className="header-inner">
        <div className="header-brand-menu">
          <Logo />
          <button ref={toggleRef} type="button" className="mobile-menu-toggle" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(!menuOpen)}><svg viewBox="0 0 24 24" aria-hidden="true"><path d={menuOpen ? 'm6 6 12 12M6 18 18 6' : 'M4 6h16M4 12h16M4 18h16'} /></svg></button>
          <nav id="main-navigation" className={menuOpen ? 'navigation is-open' : 'navigation'} aria-label="Menu principal demonstrativo">
            <ul className="main-menu">
              {menu.map((label, index) => (
                <li key={label}><button type="button" className="menu-item">
                  {label}{index < 4 && <svg className="chevron" viewBox="0 0 24 24" aria-hidden="true"><path d="m8 10 4 4 4-4" /></svg>}
                </button></li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="header-tools" role="group" aria-label="Redes sociais e busca demonstrativas">
          <div className="socials">
            {socials.map(([name, Icon]) => <button key={name} className="icon-button" type="button" aria-label={`${name} (demonstrativo)`}><span className="social-circle"><Icon aria-hidden="true" /></span></button>)}
          </div>
          <span className="tools-divider" aria-hidden="true" />
          <button type="button" className="icon-button search-button" aria-label="Busca (demonstrativa)"><svg viewBox="0 0 28 28" aria-hidden="true"><circle cx="11.8" cy="11.8" r="7.5" /><path d="m17.4 17.4 6.3 6.3" /></svg></button>
        </div>
      </div>
    </header>
  );
}
