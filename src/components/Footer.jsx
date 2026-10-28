import React from 'react';
import { FaApple, FaGooglePlay, FaTwitter, FaTiktok, FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const institute = ['Apresentação', 'GM', 'Conselho', 'Instituto Blazers', 'Política de privacidade'];
const basketball = ['Títulos', 'Elenco', 'Comissão Técnica', 'Calendário de jogos', 'Ídolos', 'Patrocínios'];
const socials = [['Twitter', FaTwitter], ['TikTok', FaTiktok], ['Facebook', FaFacebookF], ['YouTube', FaYoutube], ['Instagram', FaInstagram]];

function FooterLinks({ title, items }) {
  return <div className="footer-column"><h2>{title}</h2><ul className="footer-links">{items.map((item) => <li key={item}><button type="button" aria-label={`${item} (demonstrativo)`}>{item}</button></li>)}</ul></div>;
}

export default function Footer() {
  return (
    <footer className="footer" aria-label="Rodapé do Portland Trail Blazers">
      <img className="footer-logo" src="/assets/blazers-logo.svg" alt="Portland Trail Blazers" />
      <div className="footer-columns">
        <div className="footer-column footer-address"><h2>Portland Trail Blazers</h2><address><span>Moda Center</span><span>Oregon</span><span>1 N Center Ct St, Portland</span><span>OR 97227, EUA</span></address></div>
        <FooterLinks title="INSTITUTO" items={institute} />
        <FooterLinks title="Basquete" items={basketball} />
        <div className="footer-column footer-app"><h2>Baixe nosso App</h2><div className="footer-stores"><button type="button" className="store-button" aria-label="App Store (demonstrativo)"><FaApple aria-hidden="true" /><span>App Store</span></button><button type="button" className="store-button" aria-label="Google Play (demonstrativo)"><FaGooglePlay aria-hidden="true" /><span>Google Play</span></button></div>
          <div className="socials footer-socials" role="group" aria-label="Redes sociais demonstrativas">{socials.map(([name, Icon]) => <button type="button" key={name} className="icon-button" aria-label={`${name} (demonstrativo)`}><span className="social-circle"><Icon aria-hidden="true" /></span></button>)}</div>
        </div>
      </div>
    </footer>
  );
}
