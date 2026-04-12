import React from 'react';
import LazyImage from './LazyImage';

const AuthorSection: React.FC = () => {
  return (
    <section id="forfatter" className="py-20 bg-gradient-to-br from-gray-50 to-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <LazyImage 
              src="https://d64gsuwffb70l.cloudfront.net/6817c130d4a982ff397560a1_1774188273226_14fe6800.png"
              alt="Bjørnulf Hafstad"
              className="w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
          </div>
          
          <div>
            <h2 className="text-4xl font-bold text-slate-800 mb-8">Om forfatteren</h2>
            
            <h3 className="text-2xl font-semibold text-amber-600 mb-4">Bjørnulf Hafstad</h3>
            
            <div className="prose prose-lg text-slate-700 space-y-4">
              <p>
                Med bakgrunn fra både ledelsesfag, filosofi og idéhistorie skriver Bjørnulf Hafstad fram en fortelling der de store spørsmålene ikke bare forklares, men leves.
              </p>

              
              <div className="mt-8">
                <h4 className="text-xl font-semibold text-slate-800 mb-4">Intervju med forfatteren på kanal 10</h4>
                <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/vUKl3PsPkQ8"
                    title="Intervju med Bjørnulf Hafstad"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;