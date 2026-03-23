import React from 'react';
import { ExternalLink, ShoppingCart } from 'lucide-react';
import LazyImage from './LazyImage';

const PurchaseSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">
            Kjøp boken
          </h2>
          <p className="text-xl opacity-90">
            Begynn din egen filosofiske reise med Bergensbanen
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Book Image */}
          <div className="flex-shrink-0">
            <LazyImage 
              src="https://d64gsuwffb70l.cloudfront.net/6817c130d4a982ff397560a1_1756729247792_3ca84be3.png"
              alt="På sporet av sannheten - bokcover"
              className="w-80 h-auto shadow-2xl rounded-lg"
            />
          </div>
          
          {/* Book Details */}
          <div className="flex-1 text-center lg:text-left">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-3xl font-bold mb-4">
                På sporet av sannheten
              </h3>
              <p className="text-xl opacity-90 mb-2">
                En filosofisk reise med Bergensbanen
              </p>
              <p className="text-lg opacity-80 mb-8">
                av Bjørnulf Hafstad
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a 
                  href="https://venturaforlag.no/produkt/17863/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-white text-amber-700 px-8 py-4 text-lg font-semibold rounded-lg hover:bg-slate-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 min-h-[60px] touch-manipulation"
                  aria-label="Kjøp boken hos Ventura Forlag - åpnes i nytt vindu"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Kjøp hos Ventura Forlag
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
                
                <a 
                  href="https://www.yumpu.com/no/document/read/70581271/pa-sporet-av-sannhet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 text-lg font-semibold rounded-lg hover:bg-white hover:text-amber-700 transition-all duration-300 min-h-[60px] touch-manipulation transform hover:scale-105"
                  aria-label="Les utdrag av boken - åpnes i nytt vindu"
                >
                  Les utdrag
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
            
            <p className="text-sm opacity-75 mt-6 text-center lg:text-left">
              Tilgjengelig som fysisk bok og e-bok
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurchaseSection;