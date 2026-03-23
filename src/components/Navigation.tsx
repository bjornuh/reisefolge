import React, { useState } from 'react';
import { Train, Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Om boken', href: '#om-boken' },
    { name: 'Personene', href: '#personer' },
    { name: 'Temaer', href: '#temaer' },
    { name: 'Anbefalinger', href: '#anbefalinger' },
    { name: 'Om forfatteren', href: '#forfatter' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Train className="w-8 h-8 text-amber-600 mr-3" />
            <span className="text-xl font-bold text-slate-800">På sporet av sannheten</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-700 hover:text-amber-600 transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
            <a 
              href="https://venturaforlag.no/produkt/17863/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg transition-colors font-medium"
            >
              Kjøp boken
            </a>
          </div>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-slate-700 hover:text-amber-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a 
              href="https://venturaforlag.no/produkt/17863/"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg transition-colors text-center font-medium"
            >
              Kjøp boken
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;