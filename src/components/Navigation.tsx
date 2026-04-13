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
    <nav
      className="fixed top-0 left-0 right-0 z-50 shadow-sm"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Train className="w-8 h-8 mr-3" style={{ color: '#d97706' }} />
            <span className="text-xl font-bold" style={{ color: '#1e293b' }}>På sporet av sannheten</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-medium transition-colors"
                style={{ color: '#334155' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#d97706'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#334155'; }}
              >
                {item.name}
              </a>
            ))}
            <a 
              href="https://venturaforlag.no/produkt/17863/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white px-4 py-2 rounded-lg transition-colors font-medium"
              style={{ backgroundColor: '#d97706' }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#b45309'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#d97706'; }}
            >
              Kjøp boken
            </a>
          </div>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg"
            style={{ color: '#334155' }}
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
                className="block py-2 transition-colors"
                style={{ color: '#334155' }}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a 
              href="https://venturaforlag.no/produkt/17863/"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 text-white px-4 py-2 rounded-lg transition-colors text-center font-medium"
              style={{ backgroundColor: '#d97706' }}
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
