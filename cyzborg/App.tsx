import React, { useEffect } from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Philosophy from './components/sections/Philosophy';
import WhatsComing from './components/sections/WhatsComing';
import Newsletter from './components/sections/Newsletter';
import Footer from './components/layout/Footer';

const App: React.FC = () => {
  
  // Optional: Add simple scroll reveal effect logic here or keep it pure CSS
  useEffect(() => {
    // Console signature
    console.log(
      "%c CYZBORG SYSTEMS %c REFRESHED ",
      "background: #000; color: #fff; border: 1px solid #fff; padding: 4px; font-family: monospace;",
      "background: #00F0FF; color: #000; padding: 4px; font-family: monospace; font-weight: bold;"
    );
  }, []);

  return (
    <main className="w-full bg-cyzborg-black text-white selection:bg-cyzborg-blue selection:text-black">
      <Header />
      <Hero />
      <Philosophy />
      <WhatsComing />
      <Newsletter />
      <Footer />
    </main>
  );
};

export default App;