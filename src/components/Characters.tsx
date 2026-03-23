import React from 'react';
import LazyImage from './LazyImage';

const Characters: React.FC = () => {
  const characters = [
    {
      name: "Gustav Hipnes",
      role: "Hovedperson",
      description: "En 29 år gammel doktor-stipendiat ved NHH, preget av uro og søken. Han representerer en rastløs sjel på jakt etter sannhet og mening i livet.",
      image: "https://d64gsuwffb70l.cloudfront.net/6817c130d4a982ff397560a1_1756732988010_96fa0d36.webp"
    },
    {
      name: "Emma Blindås",
      role: "Filosofistudent",
      description: "Filosofistudent fra Fredrikstad. En analytisk og empatisk sjel som utfordrer Gustav med sitt postmoderne syn på sannhet.",
      image: "https://d64gsuwffb70l.cloudfront.net/6817c130d4a982ff397560a1_1756732986989_e6c8c08c.webp"
    },
    {
      name: "Kristine Sandrud",
      role: "Den analytiske logiker",
      description: "Matematikklærer som søker struktur og orden, men utfordres av paradokser hun ikke kan forklare.",
      image: "https://d64gsuwffb70l.cloudfront.net/6817c130d4a982ff397560a1_1756732988628_3026f7dc.webp"
    },
    {
      name: "Rikke Doksrud",
      role: "Den rasjonelle skeptikeren",
      description: "Biolog og naturfagslærer som setter sin lit til vitenskap og evolusjon.",
      image: "https://d64gsuwffb70l.cloudfront.net/6817c130d4a982ff397560a1_1756733747474_bf3725f4.webp"
    },
    {
      name: "Jon Møllebrekk",
      role: "Den troende historikeren",
      description: "En reflektert samtalepartner med dyp kjennskap til teologi og idéhistorie.",
      image: "https://d64gsuwffb70l.cloudfront.net/6817c130d4a982ff397560a1_1756733642628_acb564bb.webp"
    },
    {
      name: "Pål Utseter",
      role: "Filosofen og veilederen",
      description: "En akademiker som kobler frihet, determinisme og livssyn i sine refleksjoner.",
      image: "https://d64gsuwffb70l.cloudfront.net/6817c130d4a982ff397560a1_1756733745658_a40f7478.webp"
    },
    {
      name: "Fader Vitali",
      role: "Prest og spirituell veileder",
      description: "Gir samtalene en åndelig dybde og utfordrer med spørsmål om tro og mening.",
      image: "https://d64gsuwffb70l.cloudfront.net/6817c130d4a982ff397560a1_1756732990048_1511e643.webp"
    },
    {
      name: "Ambjørn Miland",
      role: "Den tålmodige mentor",
      description: "Gustavs tidligere norsklærer, som minner ham på livets litterære og eksistensielle røtter.",
      image: "https://d64gsuwffb70l.cloudfront.net/6817c130d4a982ff397560a1_1756805076976_889faf81.webp"
    }
  ];


  return (
    <section id="personer" className="py-20 bg-gradient-to-br from-purple-50 to-pink-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Noen personer du møter
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            På reisen møter Gustav mennesker som representerer ulike perspektiver på tro, vitenskap, filosofi og livssyn.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {characters.map((character, index) => (
            <div key={index} className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <LazyImage 
                src={character.image}
                alt={character.name}
                className="w-56 h-56 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-slate-800 text-center mb-2">
                {character.name}
              </h3>
              <p className="text-amber-600 font-medium text-center mb-3">
                {character.role}
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                {character.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Characters;