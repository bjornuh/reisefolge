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
    }
  ];

  return (
    <section
      id="anbefalinger"
      className="py-20"
      style={{ background: 'linear-gradient(to bottom right, #fff7ed, #fef9c3)' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#1e293b' }}>Anbefalinger</h2>
          <p className="text-xl" style={{ color: '#475569' }}>
            Hva andre sier om boken
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <Quote className="w-8 h-8 mb-4" style={{ color: '#d97706' }} />
              <blockquote className="mb-6 leading-relaxed" style={{ color: '#334155' }}>
                "{testimonial.quote}"
              </blockquote>
              <div className="border-t pt-4">
                <p className="font-bold" style={{ color: '#1e293b' }}>{testimonial.author}</p>
                <p className="text-sm" style={{ color: '#475569' }}>{testimonial.title}</p>
              </div>
            </div>
          ))}
          
          {/* CTA Card */}
          <div
            className="rounded-xl p-8 shadow-lg hover:shadow-xl transition-all text-white"
            style={{ background: 'linear-gradient(to bottom right, #d97706, #ea580c)' }}
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Klar til å lese?</h3>
              <p className="mb-8" style={{ color: '#fef3c7' }}>
                Opplev denne fascinerende reisen gjennom livets store spørsmål
              </p>
              <div className="space-y-4">
                <a
                  href="https://www.yumpu.com/no/document/read/70581271/pa-sporet-av-sannhet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-white font-bold py-3 px-6 rounded-lg text-center transition-colors"
                  style={{ color: '#d97706' }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#fffbeb'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#ffffff'; }}
                >
                  Les uttdrag
                </a>
                <a
                  href="https://venturaforlag.no/produkt/17863/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-white font-bold py-3 px-6 rounded-lg text-center transition-colors"
                  style={{ backgroundColor: '#b45309' }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#92400e'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#b45309'; }}
                >
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
