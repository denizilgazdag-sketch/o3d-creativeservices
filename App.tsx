import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Portfolio from './components/Portfolio';
import QuoteForm from './components/QuoteForm';
import Footer from './components/Footer';
import Legal from './components/Legal';
import ArtworksPage from './components/ArtworksPage';
import ArtistDream from './components/ArtistDream';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'legal' | 'artworks'>('home');

  const navigate = (page: 'home' | 'legal' | 'artworks', anchor?: string) => {
    const isSamePage = currentPage === page;
    
    if (!anchor && !isSamePage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    setCurrentPage(page);
    
    if (page === 'home') window.location.hash = anchor ? `#${anchor}` : '';
    else window.location.hash = page;

    if (anchor) {
      setTimeout(() => {
        const element = document.getElementById(anchor);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, isSamePage ? 0 : 300);
    }
  };

  const handleOrder = () => navigate('home', 'quote');

  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'legal') setCurrentPage('legal');
      else if (hash === 'artworks') setCurrentPage('artworks');
      else if (hash === 'quote') {
        setCurrentPage('home');
        setTimeout(() => document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' }), 300);
      }
      else setCurrentPage('home');
    };
    window.addEventListener('popstate', handlePopState);
    handlePopState();
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar onNavigate={navigate} onOrder={handleOrder} />
      <main key={currentPage} className="animate-fade-in transition-opacity duration-500">
        {currentPage === 'home' && (
          <>
            <Hero onOrder={handleOrder} />
            <Features />
            <Portfolio onSelectWork={(id) => id === 3 ? navigate('artworks') : null} />
            <ArtistDream />
            <QuoteForm />
          </>
        )}
        {currentPage === 'legal' && <Legal />}
        {currentPage === 'artworks' && <ArtworksPage onBack={() => navigate('home')} onOrder={handleOrder} />}
      </main>
      <Footer onNavigate={navigate} onOrder={handleOrder} />
    </div>
  );
};

export default App;