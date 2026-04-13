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
      <div
        className="absolute inset-0 pointer-events-auto"
        style={{ backgroundColor: 'rgba(0,0,0,0.2)', backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)' }}
      />

      {/* Banner */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-auto">
        <div className="mx-auto max-w-4xl mb-4 sm:mb-6 mx-4 sm:mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden" style={{ border: '1px solid #e2e8f0' }}>
          {/* Header */}
          <div className="px-6 py-4 flex items-center justify-between" style={{ background: 'linear-gradient(to right, #1e293b, #0f172a)' }}>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg" style={{ backgroundColor: 'rgba(251, 191, 36, 0.2)' }}>
                <Shield className="w-5 h-5" style={{ color: '#fbbf24' }} />
              </div>
              <h3 className="text-white font-semibold text-lg">Vi respekterer ditt personvern</h3>
            </div>
            <button onClick={acceptNecessary} className="transition-colors" style={{ color: '#94a3b8' }} aria-label="Lukk">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="px-6 py-5">
            <p className="text-sm leading-relaxed mb-4" style={{ color: '#475569' }}>
              Vi bruker informasjonskapsler (cookies) for å sikre at nettsiden fungerer optimalt. 
              Nødvendige cookies er påkrevd for grunnleggende funksjonalitet. Du kan velge å godta 
              alle cookies eller tilpasse dine preferanser.{' '}
              <Link to="/personvern" className="underline underline-offset-2 font-medium" style={{ color: '#2563eb' }}>
                Les vår personvernerklæring
              </Link>
            </p>

            {showDetails && (
              <div className="mb-5 space-y-3">
                <div className="flex items-center justify-between p-3 rounded-xl" style={{ backgroundColor: '#f0fdf4', border: '1px solid #dcfce7' }}>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-sm" style={{ color: '#1e293b' }}>Nødvendige</span>
                      <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ backgroundColor: '#dcfce7', color: '#15803d' }}>Alltid aktiv</span>
                    </div>
                    <p className="text-xs mt-1" style={{ color: '#64748b' }}>Påkrevd for at nettsiden skal fungere.</p>
                  </div>
                  <div className="ml-4">
                    <div className="w-11 h-6 rounded-full flex items-center justify-end px-0.5 cursor-not-allowed" style={{ backgroundColor: '#22c55e' }}>
                      <div className="w-5 h-5 bg-white rounded-full shadow flex items-center justify-center">
                        <Check className="w-3 h-3" style={{ color: '#22c55e' }} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl" style={{ backgroundColor: '#f8fafc', border: '1px solid #f1f5f9' }}>
                  <div className="flex-1">
                    <span className="font-medium text-sm" style={{ color: '#1e293b' }}>Analyse</span>
                    <p className="text-xs mt-1" style={{ color: '#64748b' }}>Hjelper oss å forstå hvordan besøkende bruker nettsiden.</p>
                  </div>
                  <div className="ml-4">
                    <button
                      onClick={() => setPreferences((p) => ({ ...p, analytics: !p.analytics }))}
                      className="w-11 h-6 rounded-full flex items-center px-0.5 transition-colors duration-200"
                      style={{ backgroundColor: preferences.analytics ? '#3b82f6' : '#cbd5e1', justifyContent: preferences.analytics ? 'flex-end' : 'flex-start' }}
                      aria-label="Veksle analyse-cookies"
                    >
                      <div className="w-5 h-5 bg-white rounded-full shadow" />
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl" style={{ backgroundColor: '#f8fafc', border: '1px solid #f1f5f9' }}>
                  <div className="flex-1">
                    <span className="font-medium text-sm" style={{ color: '#1e293b' }}>Markedsføring</span>
                    <p className="text-xs mt-1" style={{ color: '#64748b' }}>Brukes for å vise relevante annonser.</p>
                  </div>
                  <div className="ml-4">
                    <button
                      onClick={() => setPreferences((p) => ({ ...p, marketing: !p.marketing }))}
                      className="w-11 h-6 rounded-full flex items-center px-0.5 transition-colors duration-200"
                      style={{ backgroundColor: preferences.marketing ? '#3b82f6' : '#cbd5e1', justifyContent: preferences.marketing ? 'flex-end' : 'flex-start' }}
                      aria-label="Veksle markedsførings-cookies"
                    >
                      <div className="w-5 h-5 bg-white rounded-full shadow" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={acceptAll}
                className="flex-1 text-white font-semibold py-2.5 px-6 rounded-xl transition-all duration-200 text-sm"
                style={{ background: 'linear-gradient(to right, #2563eb, #1d4ed8)', boxShadow: '0 4px 14px rgba(37,99,235,0.25)' }}
              >
                Godta alle
              </button>

              {showDetails ? (
                <button
                  onClick={saveSelected}
                  className="flex-1 text-white font-semibold py-2.5 px-6 rounded-xl transition-all duration-200 text-sm"
                  style={{ backgroundColor: '#1e293b' }}
                >
                  Lagre valg
                </button>
              ) : (
                <button
                  onClick={() => setShowDetails(true)}
                  className="flex-1 font-semibold py-2.5 px-6 rounded-xl transition-all duration-200 text-sm flex items-center justify-center gap-2"
                  style={{ backgroundColor: '#f1f5f9', color: '#334155' }}
                >
                  <Settings className="w-4 h-4" />
                  Tilpass
                </button>
              )}

              <button
                onClick={acceptNecessary}
                className="flex-1 font-medium py-2.5 px-6 rounded-xl transition-all duration-200 text-sm"
                style={{ border: '1px solid #cbd5e1', color: '#475569' }}
              >
                Kun nødvendige
              </button>
            </div>
          </div>

          <div className="px-6 py-3" style={{ backgroundColor: '#f8fafc', borderTop: '1px solid #f1f5f9' }}>
            <p className="text-xs text-center" style={{ color: '#94a3b8' }}>
              Du kan når som helst endre dine preferanser. Vi bruker Cloudflare for hosting og sikkerhet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
