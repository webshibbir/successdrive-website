# Success Drive website (thesuccessdrive.com)

Static marketing site: home page and About us. Built with Next.js as plain
HTML/CSS/JS so it runs on any shared hosting (GreenGeeks / cPanel).

## Change things
- Prices and plans: `components/landing/Pricing.tsx`
- Founders and About text: `app/about/page.tsx`
- Site / app links: `lib/site.ts`
- Images: `public/landing/`, share image `public/og/success-drive.jpg`

## Build
    npm install
    npm run build      # writes the site to out/

Zip the contents of out/ (including .htaccess), upload to
cPanel → File Manager → public_html and Extract.
