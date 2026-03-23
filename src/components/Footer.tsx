import React from 'react';
import { Train, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <Train className="w-8 h-8 text-amber-400 mr-3" />
              <h3 className="text-2xl font-bold">På sporet av sannheten</h3>
            </div>
            <p className="text-slate-300 mb-6 max-w-md">
              En filosofisk reise med Bergensbanen som utforsker sannhet, tro og kjærlighet 
              gjennom samtaler og refleksjoner.
            </p>

          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Snarveier</h4>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#om-boken" className="hover:text-white transition-colors">Om boken</a></li>
              <li><a href="#personer" className="hover:text-white transition-colors">Personene</a></li>
              <li><a href="#temaer" className="hover:text-white transition-colors">Temaer</a></li>
              <li><a href="#anbefalinger" className="hover:text-white transition-colors">Anbefalinger</a></li>
            </ul>
          </div>
          
          {/* Contact & Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt & Juridisk</h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <a 
                  href="https://venturaforlag.no/produkt/17863/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Ventura Forlag
                </a>
              </li>
              <li>
                <a 
                  href="https://www.yumpu.com/no/document/read/70581271/pa-sporet-av-sannhet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Les utdrag
                </a>
              </li>
              <li>
                <Link 
                  to="/personvern" 
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <Shield className="w-4 h-4 text-amber-400" />
                  Personvernerklæring
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400">
          <p>&copy; 2025 Bjørnulf Hafstad. Alle rettigheter reservert.</p>
          <Link 
            to="/personvern" 
            className="text-sm hover:text-white transition-colors underline underline-offset-2"
          >
            Personvern & cookies
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
