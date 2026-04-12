import React from 'react';
import { Search, Microscope, Heart, Flame } from 'lucide-react';

const Themes: React.FC = () => {
  const themes = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Jakten på sannhet",
      description: "Finnes sannheten, eller er den bare et språk vi bruker for å skape orden i kaos? Boken følger Gustavs søken etter noe fast i en tid preget av relativisme, støy og mistillit."
    },
    {
      icon: <Microscope className="w-8 h-8" />,
      title: "Vitenskap og tro i dialog",
      description: "Må vitenskap og tro stå mot hverandre, eller er konflikten ofte mindre nødvendig enn vi tror? Samtalene på toget undersøker spenningen mellom naturforklaring, menneskesyn og skapertro."
    },
    {
      icon: <Flame className="w-8 h-8 text-orange-500" />,
      title: "Troens kriser og nihilismens mørke",
      description: "Hva skjer når gamle sannheter bryter sammen, og ingenting lenger virker å bære? Boken går inn i tvil, tap, meningsløshet og den moderne erfaringen av å stå uten fast grunn."
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Kjærlighet som erkjennelse",
      description: "Kan kjærlighet være mer enn følelse? Kan den også være knyttet til sannhet, tillit og virkelighet? Ett av bokens dypeste spørsmål er om et menneske kan leve godt uten å stole på noe større enn seg selv."
    }
  ];

  return (
    <section id="temaer" className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Temaene i boken</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            På reisen møter Gustav ikke bare nye mennesker, men også ideer som utfordrer ham på hva sannhet, frihet, moral og kjærlighet egentlig betyr.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {themes.map((theme, index) => (
            <div key={index} className="bg-slate-700 rounded-xl p-6 hover:bg-slate-600 transition-colors">
              <div className="text-amber-400 mb-4">
                {theme.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">
                {theme.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {theme.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Themes;
