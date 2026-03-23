import React from 'react';
import { Search, Microscope, Heart, BookOpen, Scale, Flame, Sun, Compass } from 'lucide-react';

const Themes: React.FC = () => {
  const themes = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Jakten på sannhet",
      description: "Vi lever i en tid der sannheten virker flytende – mellom fake news, post-truth og akademisk skepsis. Boken spør: Finnes sannhet, og hvorfor betyr den noe?"
    },
    {
      icon: <Microscope className="w-8 h-8" />,
      title: "Vitenskap og tro i dialog",
      description: "Er Darwin og Gud på kollisjonskurs – eller kan de stå på samme spor? Reisen viser at konflikten ofte er misforstått, og åpner for nye perspektiver på hvordan vitenskap og tro kan berike hverandre."
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Filosofi som livskompass",
      description: "Fra Platon til Nietzsche og Wittgenstein – boken gjør store tenkere tilgjengelige og viser hvordan ideene deres fortsatt preger måten vi forstår oss selv og verden på."
    },
    {
      icon: <Scale className="w-8 h-8" />,
      title: "Moral uten Gud?",
      description: "Hva skjer med rett og galt hvis Gud er død? Humanisme, utilitarisme og sekulære alternativer granskes – og vi blir minnet om at våre verdier har røtter vi sjelden tenker over."
    },
    {
      icon: <Flame className="w-8 h-8 text-orange-500" />,
      title: "Troens kriser og nihilismens mørke",
      description: "Nietzsches «Gud er død» og den moderne meningsløsheten settes i spill – både filosofisk og eksistensielt. Hva fyller tomrommet når de store fortellingene rakner?"
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Kjærlighet som erkjennelse",
      description: "«Jeg elskes, derfor er jeg.» Boken utforsker tanken om at sannhet ikke først og fremst er et regnestykke, men en relasjon – at kjærlighet og sannhet hører sammen."
    },
    {
      icon: <Compass className="w-8 h-8" />,
      title: "Det ondes problem",
      description: "Hvordan kan en god Gud tillate lidelse? Med Plantinga og Levinas som samtalepartnere drøftes både filosofiske svar og de eksistensielle erfaringene av smerte og tap."
    },
    {
      icon: <Sun className="w-8 h-8 text-yellow-500" />,
      title: "Kulturens skjulte arv",
      description: "Mye av vår frihet, rettferdighet og demokrati springer ut av kristen tradisjon – men lever i dag som om Gud ikke fantes. Hva betyr denne spenningen for oss nå?"
    }
  ];

  return (
    <section id="temaer" className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Temaene i boken</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Bergensbanen og toget blir en metafor for livets reise. Underveis møter Gustav både mennesker og ideer som speiler hans egen søken etter mening, fellesskap og mot til å tro.
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