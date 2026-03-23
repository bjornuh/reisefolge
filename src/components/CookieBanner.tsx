import React, { useState, useEffect } from 'react';
import { Shield, X, Settings, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const COOKIE_CONSENT_KEY = 'cookie-consent';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const CookieBanner: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Small delay so the page loads first
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const saveConsent = (prefs: CookiePreferences) => {
    localStorage.setItem(
      COOKIE_CONSENT_KEY,
      JSON.stringify({ ...prefs, timestamp: new Date().toISOString() })
    );
    setVisible(false);
  };

  const acceptAll = () => {
    const allAccepted = { necessary: true, analytics: true, marketing: true };
    setPreferences(allAccepted);
    saveConsent(allAccepted);
  };

  const acceptNecessary = () => {
    const onlyNecessary = { necessary: true, analytics: false, marketing: false };
    setPreferences(onlyNecessary);
    saveConsent(onlyNecessary);
  };

  const saveSelected = () => {
    saveConsent(preferences);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm pointer-events-auto" />

      {/* Banner */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-auto">
        <div
          className="mx-auto max-w-4xl mb-4 sm:mb-6 mx-4 sm:mx-auto bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in slide-in-from-bottom duration-500"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-amber-400/20 p-2 rounded-lg">
                <Shield className="w-5 h-5 text-amber-400" />
              </div>
              <h3 className="text-white font-semibold text-lg">Vi respekterer ditt personvern</h3>
            </div>
            <button
              onClick={acceptNecessary}
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="Lukk"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="px-6 py-5">
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Vi bruker informasjonskapsler (cookies) for å sikre at nettsiden fungerer optimalt. 
              Nødvendige cookies er påkrevd for grunnleggende funksjonalitet. Du kan velge å godta 
              alle cookies eller tilpasse dine preferanser.{' '}
              <Link
                to="/personvern"
                className="text-blue-600 hover:text-blue-800 underline underline-offset-2 font-medium"
              >
                Les vår personvernerklæring
              </Link>
            </p>

            {/* Expandable details */}
            {showDetails && (
              <div className="mb-5 space-y-3 animate-in fade-in duration-300">
                {/* Necessary */}
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-xl border border-green-100">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-slate-800 text-sm">Nødvendige</span>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">
                        Alltid aktiv
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">
                      Påkrevd for at nettsiden skal fungere. Inkluderer innstillinger og sikkerhet.
                    </p>
                  </div>
                  <div className="ml-4">
                    <div className="w-11 h-6 bg-green-500 rounded-full flex items-center justify-end px-0.5 cursor-not-allowed">
                      <div className="w-5 h-5 bg-white rounded-full shadow flex items-center justify-center">
                        <Check className="w-3 h-3 text-green-500" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Analytics */}
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="flex-1">
                    <span className="font-medium text-slate-800 text-sm">Analyse</span>
                    <p className="text-xs text-slate-500 mt-1">
                      Hjelper oss å forstå hvordan besøkende bruker nettsiden (f.eks. Cloudflare Web Analytics).
                    </p>
                  </div>
                  <div className="ml-4">
                    <button
                      onClick={() =>
                        setPreferences((p) => ({ ...p, analytics: !p.analytics }))
                      }
                      className={`w-11 h-6 rounded-full flex items-center px-0.5 transition-colors duration-200 ${
                        preferences.analytics ? 'bg-blue-500 justify-end' : 'bg-slate-300 justify-start'
                      }`}
                      aria-label="Veksle analyse-cookies"
                    >
                      <div className="w-5 h-5 bg-white rounded-full shadow" />
                    </button>
                  </div>
                </div>

                {/* Marketing */}
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="flex-1">
                    <span className="font-medium text-slate-800 text-sm">Markedsføring</span>
                    <p className="text-xs text-slate-500 mt-1">
                      Brukes for å vise relevante annonser og måle effekten av kampanjer.
                    </p>
                  </div>
                  <div className="ml-4">
                    <button
                      onClick={() =>
                        setPreferences((p) => ({ ...p, marketing: !p.marketing }))
                      }
                      className={`w-11 h-6 rounded-full flex items-center px-0.5 transition-colors duration-200 ${
                        preferences.marketing ? 'bg-blue-500 justify-end' : 'bg-slate-300 justify-start'
                      }`}
                      aria-label="Veksle markedsførings-cookies"
                    >
                      <div className="w-5 h-5 bg-white rounded-full shadow" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={acceptAll}
                className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-2.5 px-6 rounded-xl transition-all duration-200 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 text-sm"
              >
                Godta alle
              </button>

              {showDetails ? (
                <button
                  onClick={saveSelected}
                  className="flex-1 bg-slate-800 hover:bg-slate-900 text-white font-semibold py-2.5 px-6 rounded-xl transition-all duration-200 text-sm"
                >
                  Lagre valg
                </button>
              ) : (
                <button
                  onClick={() => setShowDetails(true)}
                  className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-2.5 px-6 rounded-xl transition-all duration-200 text-sm flex items-center justify-center gap-2"
                >
                  <Settings className="w-4 h-4" />
                  Tilpass
                </button>
              )}

              <button
                onClick={acceptNecessary}
                className="flex-1 border border-slate-300 hover:border-slate-400 text-slate-600 hover:text-slate-800 font-medium py-2.5 px-6 rounded-xl transition-all duration-200 text-sm"
              >
                Kun nødvendige
              </button>
            </div>
          </div>

          {/* Footer note */}
          <div className="px-6 py-3 bg-slate-50 border-t border-slate-100">
            <p className="text-xs text-slate-400 text-center">
              Du kan når som helst endre dine preferanser. Vi bruker Cloudflare for hosting og sikkerhet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
