import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main className="landing" aria-label="Portland Trail Blazers"><Hero /></main>
    </>
  );
}
