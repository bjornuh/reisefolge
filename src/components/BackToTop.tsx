import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 h-12 w-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-white flex items-center justify-center"
      style={{ backgroundColor: '#111827' }}
      onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#1f2937'; }}
      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#111827'; }}
      aria-label="Tilbake til toppen"
    >
      <ChevronUp className="h-6 w-6" />
    </button>
  );
};

export default BackToTop;
