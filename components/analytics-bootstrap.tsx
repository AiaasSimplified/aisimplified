import Script from "next/script";

type AnalyticsBootstrapProps = {
  gaId?: string;
};

export function AnalyticsBootstrap({ gaId }: AnalyticsBootstrapProps) {
  if (!gaId) return null;

  const initScript = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = gtag;
    gtag('consent', 'default', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied'
    });
    var consent = null;
    try { consent = localStorage.getItem('cookie_consent'); } catch (e) {}
    if (consent === 'accepted') {
      gtag('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied'
      });
    }
    gtag('js', new Date());
    gtag('config', '${gaId}', { anonymize_ip: true });
  `;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
      <Script id="ga4-consent-init" strategy="afterInteractive">
        {initScript}
      </Script>
    </>
  );
}
