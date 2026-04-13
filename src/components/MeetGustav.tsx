import React from 'react';
import LazyImage from './LazyImage';

const MeetGustav: React.FC = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-800 via-[#1a2332] to-slate-900">
      {/* Subtle decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl bg-amber-500/5" />
        <div className="absolute bottom-0 right-0 w-96 h-96 translate-x-1/3 translate-y-1/3 rounded-full blur-3xl bg-blue-500/5" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <div className="relative group">
              {/* Warm glow behind image */}
              <div className="absolute -inset-4 rounded-2xl rotate-2 group-hover:rotate-1 transition-transform duration-500 bg-gradient-to-br from-amber-500/20 to-orange-500/10" />
              <div className="absolute -inset-4 rounded-2xl -rotate-1 bg-gradient-to-tl from-slate-600/30 to-slate-700/20" />
              <LazyImage
                src="https://d64gsuwffb70l.cloudfront.net/6817c130d4a982ff397560a1_1756732988010_96fa0d36.webp"
                alt="Gustav Hipnes"
                className="relative w-72 h-72 md:w-80 md:h-80 rounded-2xl object-cover shadow-2xl border border-white/10"
              />
            </div>
          </div>

          {/* Text */}
          <div>
            <h2 className="text-4xl font-bold mb-6 text-white">
              Møt Gustav
            </h2>
            <p className="text-lg leading-relaxed text-slate-300">
              Gustav er doktorgradsstipendiat ved NHH i Bergen. Han søker sannhet og orden, men bærer også på tap, uro og en frykt for å gjøre seg sårbar igjen. Togreisen blir for ham mer enn en ferd gjennom Norge. Den blir en prøvelse på hva han faktisk tror på, og hva han egentlig frykter.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetGustav;
