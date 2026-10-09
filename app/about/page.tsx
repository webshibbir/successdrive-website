import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand, SiteFooter, SiteNav } from "@/components/landing/SiteChrome";
import { APP_URL, OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/site";
import { landingFonts } from "@/components/landing/fonts";
import s from "@/components/landing/landing.module.css";

const DESCRIPTION = "Success Drive is built in Bangladesh by co-founders Shibbir Ahmed and Shahriar Hossain, for online shops that want orders, couriers and profit in one place.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "About us — Success Drive",
  description: DESCRIPTION,
  alternates: { canonical: "/about" },
  openGraph: { type: "website", url: `${SITE_URL}/about`, siteName: SITE_NAME, title: "About Success Drive", description: DESCRIPTION, images: [OG_IMAGE] },
  twitter: { card: "summary_large_image", title: "About Success Drive", description: DESCRIPTION, images: [OG_IMAGE.url] },
};

// The founders. Titles in one place — swap here if you change roles.
const FOUNDERS = [
  { name: "Shibbir Ahmed", photo: "/landing/team/shibbir-ahmed.webp", title: "Co-Founder & CEO", focus: "Developer and co-founder. Leads product direction, merchant partnerships and the business side of Success Drive." },
  { name: "Shahriar Hossain", photo: "/landing/team/shahriar-hossain.webp", title: "Co-Founder & CTO", focus: "Developer and co-founder. Leads engineering, infrastructure and the integrations with stores, couriers and ads." },
];

const VALUES = [
  ["Built for Bangladesh", "Bangla SMS, local couriers, Taka everywhere and support in Bangla — made for how shops here really work."],
  ["Automatic by default", "Orders, stock, ad spend and courier history sync by themselves. You should never have to press a sync button."],
  ["Your data stays yours", "Every store is kept separate, keys are encrypted and Success AI can only read your data — never change it."],
  ["Fair, simple pricing", "Every plan has every feature. You only pick how many orders and stores you run."],
];

export default function AboutPage() {
  const appUrl = APP_URL;
  return (
    <div className={`${s.page} ${landingFonts}`}>
      <SiteNav appUrl={appUrl} />
      <main>
        <section className={s.hero}>
          <div className={s.heroGlow} aria-hidden="true" />
          <div className={s.wrap}>
            <span className={s.eyebrow}>About us</span>
            <h1 className={s.h1}>
              {"Built in Bangladesh, for".split(" ").map((w, i) => (
                <span key={i} className={s.word} style={{ animationDelay: `${80 + i * 70}ms` }}>
                  {w}
                  {" "}
                </span>
              ))}
              {"Bangladeshi online shops".split(" ").map((w, i) => (
                <span key={`g${i}`} className={`${s.word} ${s.grad}`} style={{ animationDelay: `${400 + i * 70}ms` }}>
                  {w}
                  {" "}
                </span>
              ))}
            </h1>
            <p className={s.lead}>
              Success Drive started with a simple problem: orders spread across Facebook, Shopify, WordPress, courier panels and spreadsheets. We built one dashboard where an online shop can confirm orders, stop fake ones, ship with any courier and see real profit — automatically.
            </p>
          </div>
        </section>

        <section className={s.section} style={{ paddingTop: 40 }}>
          <div className={s.wrap}>
            <div className={s.head} data-reveal>
              <span className={s.eyebrow}>The founders</span>
              <h2 className={s.h2}>Two developers, one product</h2>
              <p className={s.sub}>Success Drive is built by two equal partners. We design, code and ship every feature together — and we talk to the shops that use it every week.</p>
            </div>
            <div className={s.founders}>
              {FOUNDERS.map((f, i) => (
                <article key={f.name} className={s.member} data-reveal style={{ transitionDelay: `${i * 140}ms` }}>
                  <div className={s.memberPhoto}>
                    <Image src={f.photo} alt={`${f.name}, ${f.title}`} width={840} height={880} sizes="(max-width: 680px) 100vw, 440px" />
                  </div>
                  <h3>{f.name}</h3>
                  <span className={s.memberTitle}>{f.title}</span>
                  <p>{f.focus}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${s.section} ${s.tint}`}>
          <div className={s.wrap}>
            <div className={s.head} data-reveal>
              <span className={s.eyebrow}>What we believe</span>
              <h2 className={s.h2}>How we build Success Drive</h2>
            </div>
            <div className={s.values}>
              {VALUES.map(([t, d], i) => (
                <div key={t} className={s.value} data-reveal style={{ transitionDelay: `${i * 100}ms` }}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={s.section}>
          <div className={`${s.wrap} ${s.company}`} data-reveal>
            <span className={s.eyebrow}>The company</span>
            <h2 className={s.h2}>
              A product of <span className={s.grad}>Success IT</span>
            </h2>
            <p className={s.sub}>Success Drive is designed, built and supported by Success IT in Bangladesh.</p>
          </div>
        </section>

        <CtaBand appUrl={appUrl} title="Run your shop with us" text="Bring your orders, couriers and ads into one place — set up takes about five minutes." />
      </main>
      <SiteFooter appUrl={appUrl} />
    </div>
  );
}
