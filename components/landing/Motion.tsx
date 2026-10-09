"use client";

import { useEffect } from "react";

// Scroll motion for the marketing pages (Framer-style):
// - [data-reveal] blocks fade up out of a blur as they enter the screen
// - [data-count] numbers count up once
// - .tilt hero frame flattens from a 3D tilt as you scroll
// - a bottom CTA bar shows on phones after the hero
// The page renders fully without this script; the motion only adds polish.
export function Motion() {
  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const reveal = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const counters = Array.from(document.querySelectorAll<HTMLElement>("[data-count]"));

    const count = (el: HTMLElement) => {
      const target = Number(el.dataset.count);
      const prefix = el.dataset.prefix || "";
      const suffix = el.dataset.suffix || "";
      const decimals = Number(el.dataset.decimals || 0);
      const final = el.textContent;
      if (!Number.isFinite(target) || reduce) return;
      const start = performance.now();
      const dur = 1400;
      const step = (t: number) => {
        const p = Math.min(1, (t - start) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = p < 1 ? `${prefix}${(target * eased).toFixed(decimals)}${suffix}` : final;
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const el = e.target as HTMLElement;
          el.classList.add("is-in");
          if (el.dataset.count) count(el);
          io.unobserve(el);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    reveal.forEach((el) => io.observe(el));
    counters.forEach((el) => io.observe(el));

    // Hero frame: tilted at the top, flat once scrolled into view.
    const tilt = document.querySelector<HTMLElement>("[data-tilt]");
    const bar = document.querySelector<HTMLElement>("[data-mobile-cta]");
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        if (tilt && !reduce) {
          const p = Math.min(1, Math.max(0, y / (window.innerHeight * 0.55)));
          tilt.style.setProperty("--tilt", String(1 - p));
        }
        if (bar) bar.classList.toggle("is-in", y > window.innerHeight * 0.9);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    root.classList.add("sd-motion-ready");
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);
  return null;
}
