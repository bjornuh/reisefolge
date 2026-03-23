import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowLeft, Mail, Globe, Server, Cookie, UserCheck, Clock, FileText } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  const sections = [
    {
      id: 'behandlingsansvarlig',
      icon: UserCheck,
      title: '1. Behandlingsansvarlig',
      content: (
        <>
          <p>
            Bjørnulf Hafstad er behandlingsansvarlig for behandlingen av personopplysninger på denne nettsiden.
          </p>
          <p className="mt-3">
            Dersom du har spørsmål om vår behandling av personopplysninger, kan du kontakte oss via 
            forlagets nettside:{' '}
            <a
              href="https://venturaforlag.no"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline underline-offset-2"
            >
              venturaforlag.no
            </a>
          </p>
        </>
      ),
    },
    {
      id: 'personopplysninger',
      icon: FileText,
      title: '2. Hvilke personopplysninger behandles',
      content: (
        <>
          <p>Vi behandler minimalt med personopplysninger. Følgende data kan bli behandlet:</p>
          <ul className="list-disc ml-6 mt-3 space-y-2">
            <li>
              <strong>IP-adresse:</strong> Behandles automatisk av Cloudflare for sikkerhet og ytelsesoptimalisering. 
              IP-adresser lagres ikke permanent av oss.
            </li>
            <li>
              <strong>Cookie-preferanser:</strong> Dine valg for informasjonskapsler lagres lokalt i nettleseren din (localStorage).
            </li>
            <li>
              <strong>Teknisk informasjon:</strong> Nettlesertype, operativsystem og skjermoppløsning kan samles 
              inn anonymisert for å forbedre brukeropplevelsen.
            </li>
          </ul>
          <p className="mt-3">
            Vi samler <strong>ikke</strong> inn navn, e-postadresser, telefonnumre eller annen direkte 
            identifiserbar informasjon gjennom denne nettsiden.
          </p>
        </>
      ),
    },
    {
      id: 'formal',
      icon: Globe,
      title: '3. Formål med behandlingen',
      content: (
        <>
          <p>Personopplysninger behandles for følgende formål:</p>
          <ul className="list-disc ml-6 mt-3 space-y-2">
            <li>
              <strong>Sikkerhet:</strong> Beskytte nettsiden mot angrep og misbruk (via Cloudflare).
            </li>
            <li>
              <strong>Ytelse:</strong> Optimalisere lastetider og leveranse av innhold (via Cloudflare CDN).
            </li>
            <li>
              <strong>Funksjonalitet:</strong> Huske dine cookie-preferanser og sideinnstillinger.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 'rettslig-grunnlag',
      icon: Shield,
      title: '4. Rettslig grunnlag',
      content: (
        <>
          <p>Behandlingen av personopplysninger skjer på følgende rettslige grunnlag:</p>
          <ul className="list-disc ml-6 mt-3 space-y-2">
            <li>
              <strong>Berettiget interesse (GDPR art. 6(1)(f)):</strong> For nødvendige sikkerhetstiltak 
              og grunnleggende funksjonalitet.
            </li>
            <li>
              <strong>Samtykke (GDPR art. 6(1)(a)):</strong> For analyse- og markedsføringscookies, 
              dersom du velger å godta disse.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 'cookies',
      icon: Cookie,
      title: '5. Informasjonskapsler (cookies)',
      content: (
        <>
          <p>Denne nettsiden bruker følgende typer informasjonskapsler:</p>

          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left p-3 font-semibold border border-slate-200 rounded-tl-lg">Type</th>
                  <th className="text-left p-3 font-semibold border border-slate-200">Formål</th>
                  <th className="text-left p-3 font-semibold border border-slate-200">Varighet</th>
                  <th className="text-left p-3 font-semibold border border-slate-200 rounded-tr-lg">Samtykke</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-slate-200 font-medium">Nødvendige</td>
                  <td className="p-3 border border-slate-200">Cookie-samtykke, sideinnstillinger</td>
                  <td className="p-3 border border-slate-200">Permanent (localStorage)</td>
                  <td className="p-3 border border-slate-200">
                    <span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded-full">
                      Ikke påkrevd
                    </span>
                  </td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3 border border-slate-200 font-medium">Cloudflare</td>
                  <td className="p-3 border border-slate-200">Sikkerhet, DDoS-beskyttelse, CDN</td>
                  <td className="p-3 border border-slate-200">Opptil 24 timer</td>
                  <td className="p-3 border border-slate-200">
                    <span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded-full">
                      Berettiget interesse
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="p-3 border border-slate-200 font-medium">Analyse</td>
                  <td className="p-3 border border-slate-200">Anonymisert besøksstatistikk</td>
                  <td className="p-3 border border-slate-200">Varierer</td>
                  <td className="p-3 border border-slate-200">
                    <span className="bg-amber-100 text-amber-700 text-xs font-medium px-2 py-1 rounded-full">
                      Krever samtykke
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4">
            Du kan når som helst slette informasjonskapsler i nettleserens innstillinger. For å endre 
            dine cookie-preferanser, slett nettleserdata og besøk siden på nytt.
          </p>
        </>
      ),
    },
    {
      id: 'cloudflare',
      icon: Server,
      title: '6. Cloudflare som databehandler',
      content: (
        <>
          <p>
            Denne nettsiden bruker Cloudflare for DNS, CDN og sikkerhet. Cloudflare behandler 
            visse data på våre vegne:
          </p>
          <ul className="list-disc ml-6 mt-3 space-y-2">
            <li>IP-adresser for sikkerhet og ruting av trafikk</li>
            <li>HTTP-forespørsler for caching og ytelsesoptimalisering</li>
            <li>Sikkerhetsrelaterte data for DDoS-beskyttelse</li>
          </ul>
          <p className="mt-3">
            Cloudflare er sertifisert under EU-US Data Privacy Framework og har en 
            databehandleravtale (DPA) som sikrer GDPR-etterlevelse.{' '}
            <a
              href="https://www.cloudflare.com/privacypolicy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline underline-offset-2"
            >
              Les Cloudflares personvernerklæring
            </a>
          </p>
        </>
      ),
    },
    {
      id: 'rettigheter',
      icon: UserCheck,
      title: '7. Dine rettigheter',
      content: (
        <>
          <p>I henhold til GDPR og norsk personvernlovgivning har du følgende rettigheter:</p>
          <div className="grid sm:grid-cols-2 gap-3 mt-4">
            {[
              { title: 'Innsyn', desc: 'Rett til å få vite hvilke opplysninger vi har om deg.' },
              { title: 'Retting', desc: 'Rett til å få rettet uriktige opplysninger.' },
              { title: 'Sletting', desc: 'Rett til å få slettet dine personopplysninger.' },
              { title: 'Begrensning', desc: 'Rett til å begrense behandlingen av dine data.' },
              { title: 'Dataportabilitet', desc: 'Rett til å motta dine data i et strukturert format.' },
              { title: 'Innsigelse', desc: 'Rett til å protestere mot behandling basert på berettiget interesse.' },
            ].map((right) => (
              <div key={right.title} className="bg-blue-50 border border-blue-100 rounded-xl p-4">
                <h4 className="font-semibold text-slate-800 text-sm">{right.title}</h4>
                <p className="text-xs text-slate-600 mt-1">{right.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-4">
            For å utøve dine rettigheter, kontakt oss via forlagets nettside. Du har også rett til å 
            klage til{' '}
            <a
              href="https://www.datatilsynet.no"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline underline-offset-2"
            >
              Datatilsynet
            </a>{' '}
            dersom du mener at behandlingen av dine personopplysninger er i strid med regelverket.
          </p>
        </>
      ),
    },
    {
      id: 'sikkerhet',
      icon: Shield,
      title: '8. Sikkerhet',
      content: (
        <p>
          Vi tar personvern på alvor og har implementert passende tekniske og organisatoriske tiltak 
          for å beskytte dine personopplysninger. Nettsiden benytter HTTPS-kryptering, og Cloudflare 
          gir ytterligere beskyttelse mot ondsinnede angrep.
        </p>
      ),
    },
    {
      id: 'endringer',
      icon: Clock,
      title: '9. Endringer i personvernerklæringen',
      content: (
        <p>
          Vi forbeholder oss retten til å oppdatere denne personvernerklæringen ved behov. 
          Eventuelle vesentlige endringer vil bli kommunisert på nettsiden. Vi anbefaler at du 
          jevnlig gjennomgår denne erklæringen for å holde deg oppdatert.
        </p>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium text-sm">Tilbake til forsiden</span>
          </Link>
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <Clock className="w-4 h-4" />
            <span>Sist oppdatert: 21. mars 2026</span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-400/20 rounded-2xl mb-6">
            <Shield className="w-8 h-8 text-amber-400" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Personvernerklæring
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Vi er forpliktet til å beskytte ditt personvern. Her forklarer vi hvordan vi behandler 
            dine personopplysninger i samsvar med GDPR og norsk personvernlovgivning.
          </p>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="max-w-4xl mx-auto px-6 -mt-8">
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
          <h2 className="font-semibold text-slate-800 mb-3 text-sm uppercase tracking-wide">Innhold</h2>
          <nav className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="text-sm text-blue-600 hover:text-blue-800 hover:bg-blue-50 px-3 py-2 rounded-lg transition-colors"
              >
                {section.title}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-10">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-24 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center">
                    <Icon className="w-5 h-5 text-slate-600" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-800 pt-1">
                    {section.title}
                  </h2>
                </div>
                <div className="text-slate-600 leading-relaxed pl-14">
                  {section.content}
                </div>
              </section>
            );
          })}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="w-5 h-5 text-amber-400" />
            <span className="font-semibold">Personvern er viktig for oss</span>
          </div>
          <p className="text-slate-400 text-sm mb-6 max-w-lg mx-auto">
            Har du spørsmål om hvordan vi behandler dine personopplysninger? 
            Kontakt oss gjerne via forlagets nettside.
          </p>
          <div className="flex items-center justify-center gap-6 text-sm">
            <Link to="/" className="text-slate-400 hover:text-white transition-colors">
              Tilbake til forsiden
            </Link>
            <a
              href="https://www.datatilsynet.no"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Datatilsynet
            </a>
            <a
              href="https://www.cloudflare.com/privacypolicy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Cloudflare Privacy
            </a>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-6 text-slate-500 text-xs">
            &copy; 2025 Bjørnulf Hafstad. Alle rettigheter reservert.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
