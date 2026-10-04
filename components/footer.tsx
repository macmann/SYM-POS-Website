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
export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div>
          <Link className="brand" href="/">
            <span className="brand-mark">
              <BrandMark />
            </span>
            SYM <span className="brand-light">POS</span>
          </Link>
          <p>
            Built around your restaurant.
            <br />
            Connected on your terms.
          </p>
          <a className="footer-star" href={site.github}>
            <Github size={16} /> Star SYM POS on GitHub <Star size={14} />
          </a>
          <span className="footer-local">
            <span className="status-dot" />
            Local-first. Restaurant-ready.
          </span>
        </div>
        {Object.entries(groups).map(([title, links]) => (
          <div key={title}>
            <h3>{title}</h3>
            {links.map(([label, href]) => (
              <Link href={href} key={label}>
                {label}
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
        <span>Restaurant operations, working together.</span>
        <span>
          English <span lang="my">/ မြန်မာ</span>
        </span>
      </div>
    </footer>
  );
}
