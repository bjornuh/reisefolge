import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Samtalene på denne togreisen gir rett og slett lyst til å lytte, for ikke å si bestille billett til en tur med forfatteren. Boken utfordrer til å tenke, inspirerer til undring og gir nye perspektiver på tro og sannhet.",
      author: "Bjørn Are Davidsen",
      title: "forfatter og foredragsholder"
    },
    {
      quote: "Bjørnulf Hafstad lar oss få ta del i en lavmælt og god samtale på toget mellom Oslo og Bergen. Samtalen bidrar med visdom, noe som vår tid så sårt trenger.",
      author: "Sverre Holm",
      title: "emeritus professor i fysikk"
    },
    {
      quote: "Hafstad tar oss med på en spennende og lærerik reise inn i de store eksistensielle spørsmål. Boken anbefales både for de som ønsker hjelp til å reflektere, og for de som ønsker å forstå hvordan kristen tro kan være et aktuelt perspektiv for tenkende mennesker i dag.",
      author: "Bjørn Hinderaker",
      title: "høgskolelektor, NLA Høgskolen"
    },
    {
      quote: "Bli med på en reise rundt livets store spørsmål! Selv de som har lest mye apologetikk vil få nye perspektiver.",
      author: "Asbjørn Berland",
      title: "daglig leder i BioCosmos"
    },
    {
      quote: "En høyinteressant og svært betydningsfull bok som sikkert kan bli enda viktigere fremover når mennesker i økende grad vil søke et åndelig svar i en kaotisk tilværelse.",
      author: "Håvald Slåtten",
      title: "forfatter og journalist"
    },
    {
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      author: "Mr X",
      title: ""
    }
  ];

  return (
    <section id="anbefalinger" className="py-20 bg-gradient-to-br from-orange-50 to-yellow-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Anbefalinger</h2>
          <p className="text-xl text-slate-600">
            Hva andre sier om boken
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(0, -1).map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <Quote className="w-8 h-8 text-amber-600 mb-4" />
              <blockquote className="text-slate-700 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div className="border-t pt-4">
                <p className="font-bold text-slate-800">{testimonial.author}</p>
                <p className="text-slate-600 text-sm">{testimonial.title}</p>
              </div>
            </div>
          ))}
          
          {/* CTA Card replacing Mr X testimonial */}
          <div className="bg-gradient-to-br from-amber-600 to-orange-600 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all text-white">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Klar til å lese?</h3>
              <p className="mb-8 text-amber-100">
                Opplev denne fascinerende reisen gjennom livets store spørsmål
              </p>
              <div className="space-y-4">
                <a href="https://www.yumpu.com/no/document/read/70581271/pa-sporet-av-sannhet" target="_blank" rel="noopener noreferrer" className="block w-full bg-white text-amber-600 font-bold py-3 px-6 rounded-lg hover:bg-amber-50 transition-colors text-center">
                  Les uttdrag
                </a>
                <a href="https://venturaforlag.no/produkt/17863/" target="_blank" rel="noopener noreferrer" className="block w-full bg-amber-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-amber-800 transition-colors text-center">
                  Kjøp boken
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;