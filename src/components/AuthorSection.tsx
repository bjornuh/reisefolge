import React from 'react';
import LazyImage from './LazyImage';

const AuthorSection: React.FC = () => {
  return (
    <section
      id="forfatter"
      className="py-20"
      style={{ background: 'linear-gradient(to bottom right, #f9fafb, #f1f5f9)' }}
    >
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
            <h2 className="text-4xl font-bold mb-8" style={{ color: '#1e293b' }}>Om forfatteren</h2>
            
            <h3 className="text-2xl font-semibold mb-4" style={{ color: '#d97706' }}>Bjørnulf Hafstad</h3>
            
            <div className="prose prose-lg space-y-4" style={{ color: '#334155' }}>
              <p>
                Med bakgrunn fra både ledelsesfag, filosofi og idéhistorie skriver Bjørnulf Hafstad fram en fortelling der de store spørsmålene ikke bare forklares, men leves.
              </p>

              
              <div className="mt-8">
                <h4 className="text-xl font-semibold mb-4" style={{ color: '#1e293b' }}>Intervju med forfatteren på kanal 10</h4>
                <div className="aspect-video rounded-lg overflow-hidden shadow-lg" style={{ backgroundColor: '#f3f4f6' }}>
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
