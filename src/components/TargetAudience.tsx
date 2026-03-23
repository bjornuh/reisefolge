import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Search, Users, BookOpen } from 'lucide-react';

const TargetAudience: React.FC = () => {
  const audiences = [
    {
      icon: Search,
      title: "Søkere etter sannhet",
      description: "For alle som oppriktig leter etter mening og sannhet, og som ønsker å utforske hvordan kristen tro står seg i møte med de mest aktuelle alternativene i vestlig filosofi, vitenskap og kultur. En bok å gi til en tenkende målgruppe, der refleksjon og dialog åpner rom for nye perspektiver."
    },
    {
      icon: Users,
      title: "Kristne i møte med kulturens spørsmål",
      description: "Unge og voksne kristne som i hverdagen møter på spørsmål og ideer som utfordrer troen. Boken gir dem innsikt i de gode svarene og viser hvordan troen kan stå støtt i møte med samtidens kritiske blikk."
    },
    {
      icon: BookOpen,
      title: "Trygge troende som ønsker språk og dybde",
      description: "Kristne som allerede har en trygg tro, men som ønsker å gå dypere – å utforske kunnskap, argumenter og språk som kan gjøre dem bedre rustet til å snakke om tro på en måte som treffer vår tids tenkende mennesker."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Hvem er denne boken for?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            "På sporet av sannheten" henvender seg til alle som ønsker å utforske de store spørsmålene i livet med både intellektuell ærlighet og åndelig dybde.
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