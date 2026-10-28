import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import News from './components/News.jsx';
import Videos from './components/Videos.jsx';
import Arena from './components/Arena.jsx';
import FanArt from './components/FanArt.jsx';
import Faq from './components/Faq.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Pular para o conteúdo</a>
      <Header />
      <div className="landing">
        <main id="main-content" tabIndex={-1} aria-label="Portland Trail Blazers"><Hero /><News /><Videos /><Arena /><FanArt /><Faq /></main>
        <Footer />
      </div>
    </>
  );
}
