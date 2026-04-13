import React from 'react';
import LazyImage from './LazyImage';

const MeetGustav: React.FC = () => {
  return (
    <section
      id="mot-gustav"
      className="relative py-20 overflow-hidden c-bg-dark-gradient-135"
      style={{ background: 'linear-gradient(135deg, #1e293b 0%, #1a2332 50%, #0f172a 100%)' }}
    >
      {/* Subtle decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-0 w-72 h-72 rounded-full blur-3xl"
          style={{ background: 'rgba(245, 158, 11, 0.05)', transform: 'translate(-50%, -50%)' }}
        />
        <div
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'rgba(59, 130, 246, 0.05)', transform: 'translate(33%, 33%)' }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <div className="relative group">
              {/* Warm glow behind image */}
              <div
                className="absolute rounded-2xl rotate-2 group-hover:rotate-1 transition-transform duration-500"
                style={{
                  inset: '-1rem',
                  background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.2), rgba(249, 115, 22, 0.1))',
                }}
              />
              <div
                className="absolute rounded-2xl -rotate-1"
                style={{
                  inset: '-1rem',
                  background: 'linear-gradient(225deg, rgba(71, 85, 105, 0.3), rgba(51, 65, 85, 0.2))',
                }}
              />
              <LazyImage
                src="https://d64gsuwffb70l.cloudfront.net/6817c130d4a982ff397560a1_1756732988010_96fa0d36.webp"
                alt="Gustav Hipnes"
                className="relative w-72 h-72 md:w-80 md:h-80 rounded-2xl object-cover shadow-2xl"
                style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)', border: '1px solid rgba(255,255,255,0.1)' }}
              />
            </div>
          </div>

          {/* Text */}
          <div>
            <h2
              className="text-4xl font-bold mb-6 c-text-white"
              style={{ color: '#ffffff' }}
            >
              Møt Gustav
            </h2>
            <p
              className="text-lg leading-relaxed c-text-slate-300"
              style={{ color: '#cbd5e1' }}
            >
              Gustav er doktorgradsstipendiat ved NHH i Bergen. Han søker sannhet og orden, men bærer også på tap, uro og en frykt for å gjøre seg sårbar igjen. Togreisen blir for ham mer enn en ferd gjennom Norge. Den blir en prøvelse på hva han faktisk tror på, og hva han egentlig frykter.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetGustav;
