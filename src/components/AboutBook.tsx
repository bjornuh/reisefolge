import React from 'react';
import LazyImage from './LazyImage';

const AboutBook: React.FC = () => {
  return (
    <section
      id="om-boken"
      className="py-20"
      style={{ background: 'linear-gradient(to bottom right, #eff6ff, #e0e7ff)' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <LazyImage 
              src="https://d64gsuwffb70l.cloudfront.net/6817c130d4a982ff397560a1_1756729247792_3ca84be3.png"
              alt="På sporet av sannheten - bokcover"
              className="w-full max-w-md mx-auto rounded-lg shadow-xl"
            />
          </div>
          
          <div>
            <h2 className="text-4xl font-bold mb-8" style={{ color: '#1e293b' }}>Om boken</h2>
            
            <div className="prose prose-lg mb-8" style={{ color: '#334155' }}>
               <p>
                 På sporet av sannheten følger Gustav på togreisen fra Oslo til Bergen. Underveis møter han mennesker som utfordrer ham på tro, vitenskap, filosofi og livssyn. Det som begynner som en samtale om sannhet, utvikler seg til en reise gjennom tap, kjærlighet, mening og spørsmålet om hva et menneske egentlig kan bygge livet sitt på.
               </p>
            </div>
            
            <div className="mt-8 flex gap-4">
              <a 
                href="https://venturaforlag.no/produkt/17863/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-white px-6 py-3 rounded-lg transition-colors"
                style={{ backgroundColor: '#1e293b' }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#0f172a'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#1e293b'; }}
              >
                Kjøp boken
              </a>
              <a 
                href="https://www.yumpu.com/no/document/read/70581271/pa-sporet-av-sannhet"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-white px-6 py-3 rounded-lg transition-colors"
                style={{ backgroundColor: '#2563eb' }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#1d4ed8'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#2563eb'; }}
              >
                Les utdrag
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBook;
