import React, { useState } from 'react';
import OptimizedHeroImage from './OptimizedHeroImage';

const HeroSection: React.FC = () => {
  const [showCredits, setShowCredits] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Optimized Background Image */}
      <OptimizedHeroImage />
      
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          På sporet av sannheten
        </h1>
        <h2 className="text-2xl md:text-3xl font-light mb-8" style={{ opacity: 0.9 }}>
          En filosofisk reise med Bergensbanen
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed" style={{ opacity: 0.85 }}>
          Gustav går om bord på toget fra Oslo til Bergen med mer enn bagasje. Han er intelligent, ambisiøs og rastløs, og bærer på spørsmål han ikke lenger klarer å holde på avstand. Reisen blir en konfrontasjon med sannhet, mening og det ubehagelige spørsmålet om hva et menneske egentlig kan stole på.
        </p>


        {/* Featured Quote */}
        <div className="mb-12 max-w-2xl mx-auto">
          <blockquote className="italic text-lg md:text-xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.9)' }}>
            "Samtalene på denne togreisen gir rett og slett lyst til å lytte"
          </blockquote>
          <p className="mt-2 text-sm md:text-base font-medium" style={{ color: '#fcd34d' }}>
            — Bjørn Are Davidsen, forfatter og foredragsholder
          </p>
        </div>


        <a 
          href="https://venturaforlag.no/produkt/17863/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          style={{ backgroundColor: '#d97706' }}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#b45309'; }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#d97706'; }}
        >
          Kjøp boken
        </a>
      </div>

      {/* Photo Credits Info Button */}
      <button
        onClick={() => setShowCredits(true)}
        className="absolute bottom-4 right-4 z-20 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300"
        style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.7)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.5)'; }}
        title="Bildekreditering"
      >
        i
      </button>

      {/* Photo Credits Popup */}
      {showCredits && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
        >
          <div className="bg-white rounded-lg p-6 max-w-md mx-4 shadow-xl">
            <h3 className="text-lg font-bold mb-4" style={{ color: '#111827' }}>Bildekreditering</h3>
            <div className="space-y-2" style={{ color: '#374151' }}>
              <p><strong>Fotograf:</strong> David Gubler</p>
              <p><strong>Lisens:</strong> Creative Commons Attribution-NonCommercial-ShareAlike (CC BY-NC-SA)</p>
              <p><strong>Dato:</strong> 25. juni 2024</p>
              <p><strong>Kilde:</strong> <a href="https://bahnbilder.ch/54276" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: '#2563eb' }}>bahnbilder.ch/54276</a></p>
              <p><strong>Tillatelse:</strong> Særskilt tillatelse gitt for denne bruken utover lisensens bestemmelser</p>
              <p><strong>Tilgjengelig under lisens:</strong> <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: '#2563eb' }}>https://creativecommons.org/licenses/by-nc-sa/4.0/</a></p>
            </div>
            <button
              onClick={() => setShowCredits(false)}
              className="mt-4 text-white px-4 py-2 rounded transition-colors"
              style={{ backgroundColor: '#d97706' }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#b45309'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#d97706'; }}
            >
              Lukk
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
