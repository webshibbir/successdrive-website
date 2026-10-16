import Image from "next/image";
import Link from "next/link";
import { BrandIcon, brandTitle, type Brand } from "./BrandIcon";
import { IPhone } from "./IPhone";
import { Pricing } from "./Pricing";
import { Arrow, CtaBand, SiteFooter, SiteNav } from "./SiteChrome";
import { landingFonts } from "./fonts";
import s from "./landing.module.css";
import { SITE_URL } from "@/lib/site";

const BRANDS: Brand[] = ["shopify", "woocommerce", "wordpress", "facebook", "messenger", "instagram", "whatsapp", "meta", "tiktok", "gemini", "claude"];
const COURIERS = ["Steadfast", "Pathao", "RedX", "Paperfly", "CarryBee", "Parceldex", "CourierFast"];

const STATS: { text: string; count?: { to: number; prefix?: string; suffix?: string; decimals?: number }; label: string }[] = [
  { text: "8+", count: { to: 8, suffix: "+" }, label: "couriers checked for every customer, in one click" },
  { text: "30 sec", count: { to: 30, suffix: " sec" }, label: "Shopify & WordPress orders arrive by themselves" },
  { text: "৳0.25", count: { to: 0.25, prefix: "৳", decimals: 2 }, label: "per Bangla order-confirmation SMS" },
  { text: "24/7", label: "Success AI answers about your store" },
];

const FAQ = [
  ["What is Success Drive?", "Success Drive is one dashboard for online shops in Bangladesh. Orders from Shopify, WordPress/WooCommerce, Facebook and phone calls come into one place, where you confirm them, check the customer's courier history, send them to a courier, print invoices and see real profit after ad spend."],
  ["How does the fraud / courier check work?", "When an order comes in, Success Drive looks up the customer's phone number across Steadfast, Pathao, RedX, Paperfly and other couriers and shows how many parcels they received and returned — so you can call or cancel risky orders before shipping."],
  ["Do I need a developer to connect my website?", "No. For Shopify you connect with a few clicks. For WordPress you install our plugin, type your Merchant ID and tick Auto sync — orders, products, stock and incomplete checkouts start syncing within seconds."],
  ["What is Success AI?", "An assistant inside Success Drive. Ask in Bangla or English — “how many orders today?”, “which product sold most this month?”, “which courier returns most?” — and it answers from your own store data. It runs on your own Google Gemini, ChatGPT or Claude account."],
  ["Is my data safe?", "Every store's data is kept separate and only your team can see it. Passwords and API keys are encrypted, and Success AI can only read your data — it can't change anything."],
  ["How much does it cost?", "Plans start at ৳399 a month for 300 orders and 1 store, up to ৳2,999 for 5,000 orders and 5 stores. Every plan includes every feature — Success AI, courier fraud check, profit dashboard, inventory and more."],
];

function Check() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function Shot({ src, alt, w, h, className = "", priority = false }: { src: string; alt: string; w: number; h: number; className?: string; priority?: boolean }) {
  return <Image src={src} alt={alt} width={w} height={h} className={`${s.shot} ${className}`} priority={priority} sizes="(max-width: 900px) 100vw, 1200px" />;
}

/** Headline whose words rise in one after another. */
function Words({ text, start = 0, className = "" }: { text: string; start?: number; className?: string }) {
  return (
    <>
      {text.split(" ").map((w, i) => (
        <span key={i} className={`${s.word} ${className}`} style={{ animationDelay: `${start + i * 70}ms` }}>
          {w}
          {" "}
        </span>
      ))}
    </>
  );
}

function InlineCta({ appUrl, label = "Get started", secondary }: { appUrl: string; label?: string; secondary?: [string, string] }) {
  return (
    <div className={s.inlineCta} data-reveal>
      <a href={`${appUrl}/signup`} className={s.btnPrimary}>
        {label} <Arrow />
      </a>
      {secondary ? (
        <Link href={secondary[1]} className={s.btnGhost}>
          {secondary[0]}
        </Link>
      ) : null}
    </div>
  );
}

function SideCta({ appUrl, label }: { appUrl: string; label: string }) {
  return (
    <div className={s.inlineCtaLeft}>
      <a href={`${appUrl}/signup`} className={s.btnPrimary}>
        {label} <Arrow />
      </a>
    </div>
  );
}

// appUrl: where the app lives (login / sign-up), e.g. https://app.thesuccessdrive.com. Empty = same site.
export function Landing({ appUrl = "" }: { appUrl?: string }) {
  return (
    <div className={`${s.page} ${landingFonts}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Success Drive",
              url: SITE_URL,
              logo: `${SITE_URL}/favicon-v2-512.png`,
              parentOrganization: { "@type": "Organization", name: "Success IT" },
              founder: [
                { "@type": "Person", name: "Shibbir Ahmed" },
                { "@type": "Person", name: "Shahriar Hossain" },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Success Drive",
              url: SITE_URL,
              image: `${SITE_URL}/og/success-drive.jpg`,
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              description: "Order, courier fraud check and profit dashboard with Success AI for online shops in Bangladesh.",
              offers: { "@type": "AggregateOffer", priceCurrency: "BDT", lowPrice: "399", highPrice: "2999", offerCount: 4 },
            },
          ]),
        }}
      />
      <SiteNav appUrl={appUrl} />

      <main>
        {/* ---------------- Hero ---------------- */}
        <section className={s.hero}>
          <div className={s.heroGlow} aria-hidden="true" />
          <div className={s.wrap}>
            <a href="#ai" className={s.pill}>
              <span className={s.pillTag}>New</span>
              Success AI — ask your store anything, in Bangla
              <Arrow />
            </a>
            <h1 className={s.h1}>
              <Words text="Run your online shop" start={80} />
              <br />
              <Words text="from" start={360} />
              <Words text="one smart dashboard" start={430} className={s.grad} />
            </h1>
            <p className={s.lead}>
              Orders from Shopify, WordPress and Facebook in one place. Check every customer&apos;s courier history before you ship, book couriers in one click and see your real profit after ad spend — all automatic.
            </p>
            <div className={s.heroCta}>
              <a href={`${appUrl}/signup`} className={s.btnPrimary}>
                Get started <Arrow />
              </a>
              <a href="#features" className={s.btnGhost}>
                See how it works
              </a>
            </div>
            <ul className={s.heroNotes}>
              <li>
                <Check /> From ৳399 / month
              </li>
              <li>
                <Check /> Setup in 5 minutes
              </li>
              <li>
                <Check /> বাংলায় support
              </li>
            </ul>

            <div className={s.heroVisual}>
              <div className={s.heroPhone}>
                <IPhone priority />
                <div className={`${s.mFloat} ${s.mFloatLeft}`}>
                  <Shot src="/landing/courier-report.webp" alt="Courier fraud check" w={700} h={658} />
                </div>
                <div className={`${s.mFloat} ${s.mFloatRight}`}>
                  <Shot src="/landing/profit.webp" alt="Net profit and delivery success" w={700} h={712} />
                </div>
              </div>
              <div className={s.tiltStage}>
                <div className={s.browser} data-tilt>
                  <div className={s.browserBar}>
                    <i />
                    <i />
                    <i />
                    <span>{(appUrl || "https://app.thesuccessdrive.com").replace(/^https?:\/\//, "")}/dashboard</span>
                  </div>
                  <Shot src="/landing/dashboard.webp" alt="Success Drive dashboard with sales, cancel, ROI, ad spend and delivery success" w={1800} h={1125} priority />
                </div>
              </div>
              <div className={`${s.float} ${s.floatLeft}`}>
                <Shot src="/landing/courier-report.webp" alt="Courier report showing a customer's delivery and return history" w={700} h={658} />
              </div>
              <div className={`${s.float} ${s.floatRight}`}>
                <Shot src="/landing/ai-chat.webp" alt="Success AI answering a sales question in Bangla" w={1100} h={1033} />
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- Logos ---------------- */}
        <section className={s.logos}>
          <div className={s.wrap}>
            <p className={s.logosTitle} data-reveal>
              Works with the tools Bangladeshi shops already use
            </p>
            <div className={s.marquee} data-reveal>
              <div className={s.marqueeTrack}>
                {[...BRANDS, ...BRANDS].map((b, i) => (
                  <span key={i} className={s.brand} aria-hidden={i >= BRANDS.length}>
                    <BrandIcon brand={b} size={28} />
                    {brandTitle(b)}
                  </span>
                ))}
              </div>
            </div>
            <p className={s.couriers} data-reveal>
              Couriers:{" "}
              {COURIERS.map((c) => (
                <span key={c}>{c}</span>
              ))}
            </p>
          </div>
        </section>

        {/* ---------------- Stats ---------------- */}
        <section className={s.stats}>
          <div className={`${s.wrap} ${s.statsGrid}`} data-reveal>
            {STATS.map((st) => (
              <div key={st.text} className={s.stat}>
                <b data-count={st.count?.to} data-prefix={st.count?.prefix} data-suffix={st.count?.suffix} data-decimals={st.count?.decimals}>
                  {st.text}
                </b>
                <span>{st.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ---------------- Features (bento) ---------------- */}
        <section className={s.section} id="features">
          <div className={s.wrap}>
            <div className={s.head} data-reveal>
              <span className={s.eyebrow}>Features</span>
              <h2 className={s.h2}>Everything to run orders. Nothing you don&apos;t need.</h2>
              <p className={s.sub}>From the first order notification to cash collected — Success Drive handles the busy work so your team can focus on selling.</p>
            </div>
            <div className={s.bento}>
              <article className={`${s.card} ${s.cardWide}`} data-reveal>
                <div className={s.cardText}>
                  <h3>Every order, one inbox</h3>
                  <p>Shopify, WordPress, Facebook and phone orders land in one list. Confirm, hold or cancel with one click and filter by status, source, courier or date.</p>
                </div>
                <div className={s.cardImg}>
                  <Shot src="/landing/orders.webp" alt="Orders list with status tabs and filters" w={1500} h={1075} />
                </div>
              </article>
              <article className={s.card} data-reveal style={{ transitionDelay: "120ms" }}>
                <div className={s.cardText}>
                  <h3>Stop fake orders before you ship</h3>
                  <p>See each customer&apos;s delivered vs returned parcels across every courier — right on the order.</p>
                </div>
                <div className={`${s.cardImg} ${s.cardImgPad}`}>
                  <Shot src="/landing/courier-report.webp" alt="Courier fraud check" w={700} h={658} />
                </div>
              </article>
              <article className={s.card} data-reveal>
                <div className={s.cardText}>
                  <h3>Real profit, not just sales</h3>
                  <p>Meta ad spend syncs by itself, so you see ROI, ROAS and cost per purchase every day.</p>
                </div>
                <div className={`${s.cardImg} ${s.cardImgPad}`}>
                  <Shot src="/landing/profit.webp" alt="Net profit and delivery success rate cards" w={700} h={712} />
                </div>
              </article>
              <article className={s.card} data-reveal style={{ transitionDelay: "120ms" }}>
                <div className={s.cardText}>
                  <h3>Find anything in a second</h3>
                  <p>One search for orders, customers, products with photos, and every setting.</p>
                </div>
                <div className={`${s.cardImg} ${s.cardImgPad}`}>
                  <Shot src="/landing/search.webp" alt="Global search showing products with price and stock" w={900} h={748} />
                </div>
              </article>
              <article className={s.card} data-reveal style={{ transitionDelay: "240ms" }}>
                <div className={s.cardText}>
                  <h3>Bangla confirmation SMS</h3>
                  <p>Every new order gets a friendly Bangla SMS with the order details — automatically, ৳0.25 each.</p>
                </div>
                <div className={`${s.cardImg} ${s.cardImgPad}`}>
                  <Shot src="/landing/sms-preview.webp" alt="Bangla order confirmation SMS preview" w={640} h={687} />
                </div>
              </article>
              <article className={`${s.card} ${s.cardFull}`} data-reveal>
                <div className={s.cardText}>
                  <h3>Stock that keeps itself right</h3>
                  <p>Products, variants and stock sync from your website. Get low-stock alerts, move stock between branches and know your stock value at cost.</p>
                </div>
                <div className={s.cardImg}>
                  <Shot src="/landing/inventory.webp" alt="Products with stock, price and low-stock status" w={1400} h={917} />
                </div>
              </article>
            </div>
            <InlineCta appUrl={appUrl} label="Start using Success Drive" secondary={["See pricing", "#pricing"]} />
          </div>
        </section>

        {/* ---------------- Success AI ---------------- */}
        <section className={`${s.section} ${s.tint}`} id="ai">
          <div className={`${s.wrap} ${s.split}`}>
            <div className={s.splitText} data-reveal>
              <span className={s.eyebrow}>Success AI</span>
              <h2 className={s.h2}>Ask your store anything. Get the answer in seconds.</h2>
              <p className={s.sub}>“আজকে কয়টা অর্ডার এসেছে?” “Which product sold most this month?” Success AI reads your orders, ads, stock and couriers and answers in Bangla or English — with tables and advice.</p>
              <ul className={s.ticks}>
                <li>
                  <Check /> Sales, profit, ROAS and cancel rate for any date
                </li>
                <li>
                  <Check /> Top products, low stock and best customers
                </li>
                <li>
                  <Check /> Courier-wise delivery and return analysis
                </li>
                <li>
                  <Check /> Read-only and private to your store
                </li>
              </ul>
              <div className={s.aiProviders}>
                <span>Runs on your own</span>
                <span className={s.provider}>
                  <BrandIcon brand="gemini" size={22} /> Gemini
                </span>
                <span className={s.provider}>
                  <BrandIcon brand="claude" size={22} /> Claude
                </span>
                <span className={s.provider}>ChatGPT</span>
              </div>
              <SideCta appUrl={appUrl} label="Try Success AI" />
            </div>
            <div className={s.splitImg} data-reveal style={{ transitionDelay: "150ms" }}>
              <Shot src="/landing/ai-chat.webp" alt="Success AI chat answering with a sales table" w={1100} h={1033} />
            </div>
          </div>
        </section>

        {/* ---------------- WordPress / integrations ---------------- */}
        <section className={s.section} id="integrations">
          <div className={`${s.wrap} ${s.split} ${s.splitReverse}`}>
            <div className={s.splitText} data-reveal>
              <span className={s.eyebrow}>Integrations</span>
              <h2 className={s.h2}>Connect your website in two minutes</h2>
              <p className={s.sub}>Install the Success Drive plugin on WordPress, or connect Shopify. Orders, products, stock and even incomplete checkouts sync every 30 seconds — and status changes go back to your website.</p>
              <ol className={s.steps}>
                <li>
                  <b>1</b>
                  <span>
                    Download the plugin from <strong>Integrations</strong>
                  </span>
                </li>
                <li>
                  <b>2</b>
                  <span>
                    Enter your <strong>Merchant ID</strong> in WordPress
                  </span>
                </li>
                <li>
                  <b>3</b>
                  <span>
                    Tick <strong>Auto sync</strong> — done
                  </span>
                </li>
              </ol>
              <div className={s.brandRow}>
                {(["wordpress", "shopify", "facebook", "messenger", "meta"] as Brand[]).map((b) => (
                  <span key={b} className={s.brandChip} title={brandTitle(b)}>
                    <BrandIcon brand={b} size={24} />
                  </span>
                ))}
              </div>
              <SideCta appUrl={appUrl} label="Connect your store" />
            </div>
            <div className={s.splitImg} data-reveal style={{ transitionDelay: "150ms" }}>
              <Shot src="/landing/wordpress.webp" alt="Success Drive plugin for WordPress, connected" w={1400} h={531} />
            </div>
          </div>
        </section>

        {/* ---------------- How it works ---------------- */}
        <section className={`${s.section} ${s.tint}`}>
          <div className={s.wrap}>
            <div className={s.head} data-reveal>
              <span className={s.eyebrow}>How it works</span>
              <h2 className={s.h2}>Up and running before your next order</h2>
            </div>
            <div className={s.how}>
              <div className={s.howSteps}>
                {[
                  ["Create your account", "Sign up with email or Google. Your Merchant ID is ready instantly."],
                  ["Connect your store & couriers", "Shopify, WordPress, Facebook ads and your courier accounts — past orders import by themselves."],
                  ["Confirm, ship and grow", "Check each customer, book couriers in one click and watch real profit on your dashboard."],
                ].map(([t, d], i) => (
                  <div key={t} className={s.howStep} data-reveal style={{ transitionDelay: `${i * 120}ms` }}>
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <h3>{t}</h3>
                      <p>{d}</p>
                    </div>
                  </div>
                ))}
                <div data-reveal>
                  <SideCta appUrl={appUrl} label="Create your account" />
                </div>
              </div>
              <div className={s.phoneWrap} data-reveal>
                <IPhone />
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- Pricing ---------------- */}
        <section className={s.section} id="pricing">
          <div className={s.wrap}>
            <div className={s.head} data-reveal>
              <span className={s.eyebrow}>Pricing</span>
              <h2 className={s.h2}>Simple plans that grow with your shop</h2>
              <p className={s.sub}>Every plan includes every feature. Pick by how many orders and stores you run. No setup fee.</p>
            </div>
            <div data-reveal>
              <Pricing appUrl={appUrl} />
            </div>
          </div>
        </section>

        {/* ---------------- FAQ ---------------- */}
        <section className={`${s.section} ${s.tint}`} id="faq">
          <div className={`${s.wrap} ${s.faqWrap}`}>
            <div className={s.head} data-reveal>
              <span className={s.eyebrow}>FAQ</span>
              <h2 className={s.h2}>Questions, answered</h2>
            </div>
            <div className={s.faq} data-reveal>
              {FAQ.map(([q, a], i) => (
                <details key={q} open={i === 0}>
                  <summary>{q}</summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <CtaBand appUrl={appUrl} />
      </main>

      <SiteFooter appUrl={appUrl} />
    </div>
  );
}
