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
    <section
      className="relative py-20 overflow-hidden c-bg-dark-gradient"
      style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)' }}
    >
      {/* Subtle decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute rounded-full blur-3xl"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '600px',
            height: '600px',
            background: 'rgba(245, 158, 11, 0.03)',
          }}
        />
        <div
          className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl"
          style={{
            background: 'rgba(99, 102, 241, 0.05)',
            transform: 'translate(50%, -50%)',
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl"
          style={{
            background: 'rgba(16, 185, 129, 0.05)',
            transform: 'translate(-33%, 33%)',
          }}
        />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="text-center mb-14">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 c-text-white"
            style={{ color: '#ffffff' }}
          >
            Hvem kan ha glede av denne boken?
          </h2>
          <p
            className="text-lg max-w-3xl mx-auto leading-relaxed c-text-slate-400"
            style={{ color: '#94a3b8' }}
          >
            Denne boken er skrevet for lesere som ikke er redde for store spørsmål, men som heller ikke ønsker tørre foredrag i romanform.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {audiences.map((audience, index) => {
            const IconComponent = audience.icon;
            return (
              <div
                key={index}
                className="group relative rounded-2xl p-8 text-center transition-all duration-300 c-bg-card-dark c-border-card-dark"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                }}
              >
                {/* Icon */}
                <div className="mb-5 flex justify-center">
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300 c-bg-amber-icon c-border-amber-icon"
                    style={{
                      background: 'rgba(245, 158, 11, 0.1)',
                      border: '1px solid rgba(245, 158, 11, 0.2)',
                    }}
                  >
                    <IconComponent className="w-8 h-8 c-text-amber-400" style={{ color: '#fbbf24' }} />
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="text-xl font-semibold mb-4 c-text-white"
                  style={{ color: '#ffffff' }}
                >
                  {audience.title}
                </h3>

                {/* Description */}
                <p
                  className="leading-relaxed c-text-slate-400"
                  style={{ color: '#94a3b8' }}
                >
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
