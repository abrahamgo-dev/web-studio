export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function gtagPageview(url: string) {
  if (!GA_MEASUREMENT_ID || typeof window === "undefined" || !window.gtag) {
    return;
  }

  window.gtag("event", "page_view", {
    page_path: url,
    send_to: GA_MEASUREMENT_ID,
  });
}

interface GtagEventParams {
  action: string;
  category?: string;
  label?: string;
  value?: number;
}

export function gtagEvent({ action, category, label, value }: GtagEventParams) {
  if (typeof window === "undefined" || !window.gtag) {
    return;
  }

  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
}
