import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
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
    <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Hvem kan ha glede av denne boken?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Denne boken er skrevet for lesere som ikke er redde for store spørsmål, men som heller ikke ønsker tørre foredrag i romanform.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => {
            const IconComponent = audience.icon;
            return (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {audience.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {audience.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
