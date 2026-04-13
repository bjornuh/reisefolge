import React from 'react';
import { Lightbulb, Compass, Cross } from 'lucide-react';

const TargetAudience: React.FC = () => {
  const audiences = [
    {
      icon: Lightbulb,
      title: "For tenkende lesere",
      description: "For deg som liker bøker som utfordrer, åpner spørsmål og gir motstand uten å miste fortellingens driv."
    },
    {
      icon: Compass,
      title: "For søkende lesere",
      description: "For deg som er opptatt av sannhet, mening, tro, tvil og hvilke ideer som faktisk bærer et menneskeliv."
    },
    {
      icon: Cross,
      title: "For kristne som vil gå dypere",
      description: "For kristne som ønsker et rikere språk for å møte samtidens spørsmål om vitenskap, moral, frihet og tro."
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Subtle decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl bg-amber-500/[0.03]" />
        <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-3xl bg-indigo-500/5" />
        <div className="absolute bottom-0 left-0 -translate-x-1/3 translate-y-1/3 w-64 h-64 rounded-full blur-3xl bg-emerald-500/5" />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Hvem kan ha glede av denne boken?
          </h2>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed text-slate-400">
            Denne boken er skrevet for lesere som ikke er redde for store spørsmål, men som heller ikke ønsker tørre foredrag i romanform.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {audiences.map((audience, index) => {
            const IconComponent = audience.icon;
            return (
              <div
                key={index}
                className="group relative rounded-2xl p-8 text-center transition-all duration-300 bg-white/5 backdrop-blur-sm border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/15"
              >
                {/* Icon */}
                <div className="mb-5 flex justify-center">
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300 bg-amber-500/10 border border-amber-500/20">
                    <IconComponent className="w-8 h-8 text-amber-400" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-4 text-white">
                  {audience.title}
                </h3>

                {/* Description */}
                <p className="leading-relaxed text-slate-400">
                  {audience.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
