import Image from "next/image";
import Link from "next/link";
import { Motion } from "./Motion";
import s from "./landing.module.css";

// Shared navbar, footer and motion for the marketing pages (/ and /about).

const NAV: [string, string][] = [
  ["Features", "/#features"],
  ["Success AI", "/#ai"],
  ["Pricing", "/#pricing"],
  ["About us", "/about"],
  ["FAQ", "/#faq"],
];

export function Arrow() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

/** Hides [data-reveal] blocks before first paint so they can animate in; shows everything if the script never starts. */
export function MotionBoot() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html:
            "(function(){var d=document.documentElement;d.classList.add('sd-motion');setTimeout(function(){if(!d.classList.contains('sd-motion-ready'))d.classList.remove('sd-motion')},4000)})();",
        }}
      />
      <Motion />
    </>
  );
}

export function SiteNav({ appUrl }: { appUrl: string }) {
  return (
    <header className={s.nav}>
      <div className={s.navInner}>
        <Link href="/" className={s.logo} aria-label="Success Drive home">
          <Image src="/success-drive-plane.png" alt="" width={34} height={34} />
          <span>Success Drive</span>
        </Link>
        <nav className={s.navLinks} aria-label="Main">
          {NAV.map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </nav>
        <div className={s.navCta}>
          <a href={`${appUrl}/login`} className={s.navLogin}>
            Log in
          </a>
          <a href={`${appUrl}/signup`} className={s.btnPrimarySm}>
            Get started
          </a>
        </div>
        <details className={s.menu}>
          <summary aria-label="Menu">
            <span />
            <span />
            <span />
          </summary>
          <div className={s.menuPanel}>
            {NAV.map(([label, href]) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
            <a href={`${appUrl}/login`}>Log in</a>
            <a href={`${appUrl}/signup`} className={s.btnPrimary}>
              Get started
            </a>
          </div>
        </details>
      </div>
    </header>
  );
}

export function CtaBand({ appUrl, title = "Ready to ship smarter?", text = "Join shops across Bangladesh that run their orders, couriers and profit from Success Drive." }: { appUrl: string; title?: string; text?: string }) {
  return (
    <section className={s.ctaSection}>
      <div className={s.wrap}>
        <div className={s.cta} data-reveal>
          <h2>{title}</h2>
          <p>{text}</p>
          <div className={s.heroCta}>
            <a href={`${appUrl}/signup`} className={s.btnLight}>
              Get started <Arrow />
            </a>
            <Link href="/#pricing" className={s.btnOutlineLight}>
              See pricing
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter({ appUrl }: { appUrl: string }) {
  return (
    <>
      <footer className={s.footer}>
        <div className={`${s.wrap} ${s.footGrid}`}>
          <div className={s.footBrand}>
            <Link href="/" className={s.logo}>
              <Image src="/success-drive-plane.png" alt="" width={34} height={34} />
              <span>Success Drive</span>
            </Link>
            <p>The all-in-one order, courier and profit dashboard for online shops in Bangladesh.</p>
            <a href={`${appUrl}/signup`} className={s.btnPrimarySm}>
              Get started <Arrow />
            </a>
          </div>
          <div>
            <h4>Product</h4>
            <Link href="/#features">Features</Link>
            <Link href="/#ai">Success AI</Link>
            <Link href="/#integrations">Integrations</Link>
            <Link href="/#pricing">Pricing</Link>
          </div>
          <div>
            <h4>Company</h4>
            <Link href="/about">About us</Link>
            <Link href="/#faq">FAQ</Link>
            <a href={`${appUrl}/signup`}>Create account</a>
            <a href={`${appUrl}/login`}>Log in</a>
          </div>
        </div>
        <div className={`${s.wrap} ${s.footBottom}`}>
          <span>© {new Date().getFullYear()} Success Drive · thesuccessdrive.com</span>
          <span className={s.powered}>
            Powered by <b>Success IT</b>
          </span>
        </div>
      </footer>
      <div className={s.mobileCta} data-mobile-cta>
        <span>
          From <b>৳399</b>/month
        </span>
        <a href={`${appUrl}/signup`} className={s.btnPrimarySm}>
          Get started <Arrow />
        </a>
      </div>
      <MotionBoot />
    </>
  );
}
