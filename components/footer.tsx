import { localizedHref, translateLabel, type Locale } from "@/lib/locale";
import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";
import { Github, Star } from "lucide-react";
import { site } from "@/content/site";
const groups = {
  Product: [
    ["Point of Sale", "/features"],
    ["Kitchen & Bar", "/kitchen-display"],
    ["Inventory", "/inventory"],
    ["Reports", "/reports"],
    ["Hardware", "/hardware"],
  ],
  Solutions: [
    ["Restaurants", "/solutions/restaurants"],
    ["Cafes", "/solutions/cafes"],
    ["Multi-location", "/solutions/multi-location"],
    ["Offline-First", "/offline-first"],
  ],
  Resources: [
    ["Download", "/download"],
    ["Documentation", "/docs"],
    ["Architecture", "/offline-first"],
    ["GitHub", site.github],
  ],
  Company: [
    ["Contact Us", "/contact"],
    ["Request Demo", "/demo"],
    ["Custom Support", "/contact?intent=support"],
    ["Privacy", "/privacy"],
    ["Terms", "/terms"],
  ],
};
export function Footer({ locale = "en" }: { locale?: Locale }) {
  const t = (text: string) => translateLabel(text, locale);
  return (
    <footer className="footer">
      <div className="footer-main">
        <div>
          <Link className="brand" href={localizedHref("/", locale)}>
            <span className="brand-mark">
              <BrandMark />
            </span>
            SYM <span className="brand-light">POS</span>
          </Link>
          <p>
            {locale === "my"
              ? "သင့်စားသောက်ဆိုင်အတွက် တည်ဆောက်ထားသည်။"
              : "Built around your restaurant."}
            <br />
            {locale === "my"
              ? "သင့်လိုအပ်ချက်အတိုင်း ချိတ်ဆက်ပါ။"
              : "Connected on your terms."}
          </p>
          <a className="footer-star" href={site.github}>
            <Github size={16} />{" "}
            {locale === "my"
              ? "GitHub တွင် SYM POS ကို Star ပေးပါ"
              : "Star SYM POS on GitHub"}{" "}
            <Star size={14} />
          </a>
          <span className="footer-local">
            <span className="status-dot" />
            {locale === "my"
              ? "ဒေသတွင်းကွန်ရက်ကို အခြေခံသော စားသောက်ဆိုင်စနစ်။"
              : "Local-first. Restaurant-ready."}
          </span>
        </div>
        {Object.entries(groups).map(([title, links]) => (
          <div key={title}>
            <h3>{t(title)}</h3>
            {links.map(([label, href]) => (
              <Link href={localizedHref(href, locale)} key={t(label)}>
                {t(label)}
                {label === "GitHub" && <Github size={14} />}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} {site.company}.
        </span>
        <span>
          {locale === "my"
            ? "စားသောက်ဆိုင်လုပ်ငန်းများကို အတူတကွ ချိတ်ဆက်ပါ။"
            : "Restaurant operations, working together."}
        </span>
        <span>
          <Link href="/" lang="en" hrefLang="en">
            English
          </Link>{" "}
          /{" "}
          <Link href="/my" lang="my" hrefLang="my">
            မြန်မာ
          </Link>
        </span>
      </div>
    </footer>
  );
}
