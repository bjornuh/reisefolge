import React from 'react';
import LazyImage from './LazyImage';

const MeetGustav: React.FC = () => {
  return (
    <section id="mot-gustav" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-slate-200 to-blue-100 rounded-2xl rotate-2"></div>
              <LazyImage
                src="https://d64gsuwffb70l.cloudfront.net/6817c130d4a982ff397560a1_1756732988010_96fa0d36.webp"
                alt="Gustav Hipnes"
                className="relative w-72 h-72 md:w-80 md:h-80 rounded-2xl object-cover shadow-lg"
              />
            </div>
          </div>

          {/* Text */}
          <div>
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Møt Gustav</h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              Gustav er doktorgradsstipendiat ved NHH i Bergen. Han søker sannhet og orden, men bærer også på tap, uro og en frykt for å gjøre seg sårbar igjen. Togreisen blir for ham mer enn en ferd gjennom Norge. Den blir en prøvelse på hva han faktisk tror på, og hva han egentlig frykter.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetGustav;
