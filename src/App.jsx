import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import News from './components/News.jsx';
import Videos from './components/Videos.jsx';
import Arena from './components/Arena.jsx';
import FanArt from './components/FanArt.jsx';
import Faq from './components/Faq.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main className="landing" aria-label="Portland Trail Blazers">
        <div className="background-curves" aria-hidden="true"><img src="/assets/background-morph-lines.png" alt="" draggable="false" /></div>
        <Hero /><News /><Videos /><Arena /><FanArt /><Faq />
      </main>
    </>
  );
}
