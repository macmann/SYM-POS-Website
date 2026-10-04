"use client";
import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import { navigation } from "@/content/navigation";
import { Github, Star } from "lucide-react";
import {
  englishPath,
  localizedHref,
  translateLabel,
  type Locale,
} from "@/lib/locale";
import { site } from "@/content/site";
export function Header({ locale = "en" }: { locale?: Locale }) {
  const t = (text: string) => translateLabel(text, locale);
  const href = (path: string) => localizedHref(path, locale);
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
      if (e.key === "Tab" && window.innerWidth < 1100) {
        const nodes =
          ref.current?.querySelectorAll<HTMLElement>("a,button,summary");
        const visible = Array.from(nodes || []).filter(
          (n) => n.offsetParent !== null,
        );
        const first = visible[0],
          last = visible[visible.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);
  return (
    <header className="header" ref={ref}>
      <div className="header-inner">
        <Link
          className="brand"
          href={href("/")}
          aria-label={
            locale === "my" ? "SYM POS ပင်မစာမျက်နှာ" : "SYM POS home"
          }
        >
          <span className="brand-mark">
            <BrandMark />
          </span>
          <span>
            SYM <span className="brand-light">POS</span>
          </span>
        </Link>
        <button
          ref={toggle}
          className="menu-toggle"
          aria-label={
            locale === "my"
              ? open
                ? "လမ်းညွှန်ပိတ်ရန်"
                : "လမ်းညွှန်ဖွင့်ရန်"
              : open
                ? "Close navigation"
                : "Open navigation"
          }
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav
          id="main-navigation"
          className={open ? "navigation open" : "navigation"}
          aria-label={locale === "my" ? "ပင်မလမ်းညွှန်" : "Main navigation"}
        >
          {navigation.map((item) =>
            item.links ? (
              <details
                key={t(item.label)}
                className="nav-menu"
                onKeyDown={(e) => {
                  if (e.key === "Escape") {
                    e.currentTarget.open = false;
                    e.currentTarget.querySelector("summary")?.focus();
                  }
                }}
              >
                <summary>
                  {t(item.label)}
                  <ChevronDown size={13} />
                </summary>
                <div className="nav-dropdown">
                  {item.links.map(([label, href]) => (
                    <Link
                      key={t(label)}
                      href={
                        label === "GitHub"
                          ? site.github
                          : localizedHref(href, locale)
                      }
                      onClick={(e) => {
                        setOpen(false);
                        const d = e.currentTarget.closest("details");
                        if (d) d.open = false;
                      }}
                    >
                      {t(label)}
                    </Link>
                  ))}
                </div>
              </details>
            ) : (
              <Link
                key={t(item.label)}
                href={href(item.href!)}
                aria-current={
                  pathname === href(item.href!) ? "page" : undefined
                }
                onClick={() => setOpen(false)}
              >
                {t(item.label)}
              </Link>
            ),
          )}
          <div className="header-actions">
            <a
              className="language-switch"
              onClick={(e) => {
                e.currentTarget.href +=
                  window.location.search + window.location.hash;
              }}
              href={
                locale === "en"
                  ? localizedHref(pathname, "my")
                  : englishPath(pathname)
              }
              hrefLang={locale === "en" ? "my" : "en"}
              lang={locale === "en" ? "my" : "en"}
              aria-label={
                locale === "en" ? "Switch to Burmese" : "Switch to English"
              }
            >
              {locale === "en" ? "မြန်မာ" : "English"}
            </a>
            <a className="github-link compact" href={site.github}>
              <Github size={16} />
              {t("Star on GitHub")}
              <Star size={14} />
            </a>
            <Link
              href={href("/demo")}
              className="demo-link"
              onClick={() => setOpen(false)}
            >
              {t("View Demo")} <ArrowUpRight size={14} />
            </Link>
            <Link
              className="button button-dark small"
              href={href("/contact")}
              onClick={() => setOpen(false)}
            >
              {t("Contact Us")} <ArrowUpRight size={14} />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
