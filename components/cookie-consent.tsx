"use client";

import { useEffect, useState } from "react";

type ConsentState = "accepted" | "declined" | null;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function CookieConsent() {
  const [consent, setConsent] = useState<ConsentState>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("cookie_consent") as ConsentState;
      setConsent(saved ?? null);
      setIsOpen(!saved);
    } catch {
      setConsent(null);
      setIsOpen(true);
    }

    const handler = () => setIsOpen(true);
    window.addEventListener("open-cookie-consent", handler);
    return () => window.removeEventListener("open-cookie-consent", handler);
  }, []);

  function applyConsent(next: Exclude<ConsentState, null>) {
    try {
      localStorage.setItem("cookie_consent", next);
    } catch {
      // no-op
    }

    if (window.gtag) {
      if (next === "accepted") {
        window.gtag("consent", "update", {
          analytics_storage: "granted",
          ad_storage: "denied",
          ad_user_data: "denied",
          ad_personalization: "denied"
        });
        window.gtag("event", "cookie_consent_accepted");
      } else {
        window.gtag("consent", "update", {
          analytics_storage: "denied",
          ad_storage: "denied",
          ad_user_data: "denied",
          ad_personalization: "denied"
        });
      }
    }

    setConsent(next);
    setIsOpen(false);
  }

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-4xl rounded-2xl border border-slate-300 bg-white p-4 shadow-soft dark:border-slate-700 dark:bg-slate-900">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-slate-700 dark:text-slate-200">
          We use analytics cookies to improve performance and experience. You can accept or decline non-essential cookies.
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => applyConsent("declined")}
            className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => applyConsent("accepted")}
            className="rounded-full bg-ai-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-ai-500"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
