import Image from "next/image";
import s from "./landing.module.css";

// Pro Max style phone with a deep maroon titanium frame, showing the
// Success Drive mobile dashboard.
export function IPhone({ priority = false, className = "" }: { priority?: boolean; className?: string }) {
  return (
    <div className={`${s.iphone} ${className}`}>
      <span className={`${s.iphoneKey} ${s.keyAction}`} aria-hidden="true" />
      <span className={`${s.iphoneKey} ${s.keyUp}`} aria-hidden="true" />
      <span className={`${s.iphoneKey} ${s.keyDown}`} aria-hidden="true" />
      <span className={`${s.iphoneKey} ${s.keyPower}`} aria-hidden="true" />
      <div className={s.iphoneBezel}>
        <div className={s.iphoneScreen}>
          <div className={s.iphoneStatus} aria-hidden="true">
            <b>9:41</b>
            <span className={s.island} />
            <span className={s.statusIcons}>
              <svg width="18" height="12" viewBox="0 0 18 12" fill="currentColor">
                <rect x="0" y="8" width="3" height="4" rx="1" />
                <rect x="5" y="5.5" width="3" height="6.5" rx="1" />
                <rect x="10" y="3" width="3" height="9" rx="1" />
                <rect x="15" y="0" width="3" height="12" rx="1" />
              </svg>
              <svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor">
                <path d="M8 2.2c2.3 0 4.4.9 6 2.4l1.3-1.4A10.6 10.6 0 0 0 8 .3 10.6 10.6 0 0 0 .7 3.2L2 4.6a8.7 8.7 0 0 1 6-2.4Zm0 3.6c1.3 0 2.5.5 3.4 1.3l1.3-1.4A6.8 6.8 0 0 0 8 3.9a6.8 6.8 0 0 0-4.7 1.8l1.3 1.4C5.5 6.3 6.7 5.8 8 5.8Zm0 3.5c-.6 0-1.1.2-1.5.6L8 11.6l1.5-1.7c-.4-.4-.9-.6-1.5-.6Z" />
              </svg>
              <svg width="27" height="13" viewBox="0 0 27 13" fill="none">
                <rect x=".5" y=".5" width="22" height="12" rx="3.5" stroke="currentColor" opacity=".45" />
                <rect x="2.5" y="2.5" width="18" height="8" rx="2" fill="currentColor" />
                <path d="M24.5 4.5v4c.8-.3 1.5-1 1.5-2s-.7-1.7-1.5-2Z" fill="currentColor" opacity=".45" />
              </svg>
            </span>
          </div>
          <Image src="/landing/mobile.webp" alt="Success Drive dashboard on a phone" width={600} height={1298} className={s.iphoneShot} priority={priority} sizes="320px" />
          <span className={s.homeBar} aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
