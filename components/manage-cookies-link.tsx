"use client";

export function ManageCookiesLink() {
  function openCookieManager() {
    window.dispatchEvent(new Event("open-cookie-consent"));
  }

  return (
    <button
      type="button"
      onClick={openCookieManager}
      className="text-sm text-slate-600 underline-offset-4 hover:underline dark:text-slate-300"
    >
      Manage Cookies
    </button>
  );
}
