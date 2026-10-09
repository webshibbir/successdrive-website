import Link from "next/link";
import s from "./landing.module.css";

// Plans and prices live here — change them in one place.
// Every plan has every feature; plans differ by monthly orders and stores.
const PLANS = [
  { name: "Starter", blurb: "For new shops getting their first orders in order.", price: 399, orders: 300, stores: 1 },
  { name: "Growth", blurb: "For growing shops running ads every day.", price: 999, orders: 1000, stores: 2, popular: true },
  { name: "Business", blurb: "For busy shops with a team handling orders.", price: 1999, orders: 3000, stores: 3 },
  { name: "Pro", blurb: "For high-volume brands with several stores.", price: 2999, orders: 5000, stores: 5 },
];

const INCLUDED = [
  "Shopify, WordPress & Facebook orders",
  "Courier fraud check & one-click booking",
  "Real profit, ROAS & cost per purchase",
  "Success AI with your own AI key",
  "Inventory, invoices & courier slips",
];

const tk = (n: number) => `৳${n.toLocaleString("en-IN")}`;

export function Pricing({ appUrl = "" }: { appUrl?: string }) {
  return (
    <div className={s.plans}>
      {PLANS.map((p) => (
        <article key={p.name} className={`${s.plan} ${p.popular ? s.planPopular : ""}`}>
          {p.popular ? <span className={s.planBadge}>Most popular</span> : null}
          <h3>{p.name}</h3>
          <p className={s.planBlurb}>{p.blurb}</p>
          <div className={s.price}>
            <b>{tk(p.price)}</b>
            <span>/ month</span>
          </div>
          <div className={s.planLimits}>
            <span>
              <b>{p.orders.toLocaleString("en-IN")}</b> orders / month
            </span>
            <span>
              <b>{p.stores}</b> {p.stores === 1 ? "store" : "stores"}
            </span>
          </div>
          <Link href={`${appUrl}/signup`} className={p.popular ? s.btnPrimary : s.btnGhost}>
            Get started
          </Link>
          <ul>
            {INCLUDED.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
