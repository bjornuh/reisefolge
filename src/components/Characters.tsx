import React from 'react';
import LazyImage from './LazyImage';

const Characters: React.FC = () => {
  const characters = [
    {
      name: "Emma Blindås",
      role: "Filosofistudent",
      description: "Emma er Gustavs kusine og masterstudent i filosofi. Hun er skarp, varm og mer åpen for tvetydighet enn han er. Der Gustav søker kontroll og klarhet, åpner Emma rom for spørsmål, spenning og menneskelig erfaring.",
      image: "https://d64gsuwffb70l.cloudfront.net/6817c130d4a982ff397560a1_1756732986989_e6c8c08c.webp"
    },
    {
      name: "Kristine Sandrud",
      role: "Den analytiske logiker",
      description: "Kristine er matematikklærer fra Drammen med sans for logikk, struktur og de grunnleggende spørsmålene som oppstår når systemene ikke holder. Hun gir Gustav et første møte med grensen for det sikre.",
      image: "https://d64gsuwffb70l.cloudfront.net/6817c130d4a982ff397560a1_1756732988628_3026f7dc.webp"
    },
    {
      name: "Rikke Doksrud",
      role: "Den rasjonelle skeptikeren",
      description: "Rikke er biolog og tydelig skeptiker. Hun presser samtalene mot naturalisme, vitenskap og det som kan forklares uten Gud. Hun er intelligent, direkte og vanskelig å avfeie.",
      image: "https://d64gsuwffb70l.cloudfront.net/6817c130d4a982ff397560a1_1756733747474_bf3725f4.webp"
    },
    {
      name: "Jon Møllebrekk",
      role: "Den troende historikeren",
      description: "Jon er historiker og kristen tenker. Han er rolig, reflektert og mer krevende å møte enn Gustav først aner. Han svarer ikke med slagord, men med tyngde, historie og alvor.",
      image: "https://d64gsuwffb70l.cloudfront.net/6817c130d4a982ff397560a1_1756733642628_acb564bb.webp"
    }
  ];

  return (
    <section
      id="personer"
      className="py-20"
      style={{ background: 'linear-gradient(to bottom right, #faf5ff, #fce7f3)' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#1e293b' }}>
            Menneskene på reisen
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#475569' }}>
            På reisen møter Gustav mennesker som ikke bare representerer ulike synspunkter, men som også presser ham til å se seg selv klarere. Noen utfordrer ham med argumenter. Andre med nærvær. Alle blir en del av reisen.
          </p>
        </div>

        <h3 className="text-2xl font-semibold text-center mb-10" style={{ color: '#334155' }}>
          Her er noen eksempler
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {characters.map((character, index) => (
            <div
              key={index}
              className="rounded-xl p-6 hover:shadow-lg transition-shadow"
              style={{ backgroundColor: '#f8fafc' }}
            >
              <LazyImage 
                src={character.image}
                alt={character.name}
                className="w-56 h-56 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-center mb-2" style={{ color: '#1e293b' }}>
                {character.name}
              </h3>
              <p className="font-medium text-center mb-3" style={{ color: '#d97706' }}>
                {character.role}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: '#475569' }}>
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
