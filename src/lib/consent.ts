export type ConsentLevel = 'unset' | 'essential' | 'all';
export const CONSENT_KEY = 'consentLevel'; // Key-Name für local storage

export function readConsent(): ConsentLevel {
  const v = (typeof window !== 'undefined' && localStorage.getItem(CONSENT_KEY)) || 'unset';
  return (v === 'essential' || v === 'all') ? v : 'unset';
}

export function writeConsent(level: ConsentLevel) {
  localStorage.setItem(CONSENT_KEY, level);
  // andere Tabs informieren
  window.dispatchEvent(new StorageEvent('storage', { key: CONSENT_KEY, newValue: level }));
}