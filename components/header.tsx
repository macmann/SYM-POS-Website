"use client";
import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import { navigation } from "@/content/navigation";
import { site } from "@/content/site";
export function Header() {
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
        <Link className="brand" href="/" aria-label="SYM POS home">
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
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav
          id="main-navigation"
          className={open ? "navigation open" : "navigation"}
          aria-label="Main navigation"
        >
          {navigation.map((item) =>
            item.links ? (
              <details
                key={item.label}
                className="nav-menu"
                onKeyDown={(e) => {
                  if (e.key === "Escape") {
                    e.currentTarget.open = false;
                    e.currentTarget.querySelector("summary")?.focus();
                  }
                }}
              >
                <summary>
                  {item.label}
                  <ChevronDown size={13} />
                </summary>
                <div className="nav-dropdown">
                  {item.links.map(([label, href]) => (
                    <Link
                      key={label}
                      href={label === "GitHub" ? site.github : href}
                      onClick={(e) => {
                        setOpen(false);
                        const d = e.currentTarget.closest("details");
                        if (d) d.open = false;
                      }}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </details>
            ) : (
              <Link
                key={item.label}
                href={item.href!}
                aria-current={pathname === item.href ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ),
          )}
          <div className="header-actions">
            <Link
              href="/demo"
              className="demo-link"
              onClick={() => setOpen(false)}
            >
              View Demo <ArrowUpRight size={14} />
            </Link>
            <Link
              className="button button-dark small"
              href="/contact"
              onClick={() => setOpen(false)}
            >
              Contact Sales <ArrowUpRight size={14} />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
