import type { Metadata } from "next";
import { Landing } from "@/components/landing/Landing";
import { APP_URL, OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/site";

const TITLE = "Success Drive — Order, courier & profit dashboard for online shops in Bangladesh";
const DESCRIPTION =
  "One dashboard for Shopify, WordPress and Facebook orders. Courier fraud check, one-click courier booking, Bangla confirmation SMS, real profit after ad spend and Success AI. From ৳399/month.";
const SHARE = "Orders, courier fraud check, real profit and Success AI for online shops in Bangladesh.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: { type: "website", url: SITE_URL, siteName: SITE_NAME, title: "Success Drive — Run your online shop from one smart dashboard", description: SHARE, images: [OG_IMAGE], locale: "en_US" },
  twitter: { card: "summary_large_image", title: "Success Drive — Run your online shop from one smart dashboard", description: SHARE, images: [OG_IMAGE.url] },
  robots: { index: true, follow: true },
};

export default function Home() {
  return <Landing appUrl={APP_URL} />;
}
