import { siClaude, siFacebook, siGooglegemini, siInstagram, siMessenger, siMeta, siShopify, siTiktok, siWhatsapp, siWoocommerce, siWordpress } from "simple-icons";

// Official brand marks from Simple Icons (CC0 data, trademarks belong to their owners).
const ICONS = {
  shopify: siShopify,
  woocommerce: siWoocommerce,
  wordpress: siWordpress,
  facebook: siFacebook,
  meta: siMeta,
  messenger: siMessenger,
  instagram: siInstagram,
  tiktok: siTiktok,
  whatsapp: siWhatsapp,
  gemini: siGooglegemini,
  claude: siClaude,
} as const;

export type Brand = keyof typeof ICONS;

export function BrandIcon({ brand, size = 26, mono = false }: { brand: Brand; size?: number; mono?: boolean }) {
  const icon = ICONS[brand];
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" role="img" aria-label={icon.title} fill={mono ? "currentColor" : `#${icon.hex}`}>
      <path d={icon.path} />
    </svg>
  );
}

export const brandTitle = (brand: Brand) => ICONS[brand].title;
