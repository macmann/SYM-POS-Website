import Link from "next/link";
import { ArrowUpRight, Check, Github, Star } from "lucide-react";
import { burmeseFAQ, burmesePages } from "@/content/burmese";
import { ProductScreenshot, Button } from "@/components/product";
import { ContactForm } from "@/components/contact-form";
import { contactEmail } from "@/lib/contact";
import { safeUrl } from "@/lib/env";
import { site } from "@/content/site";
import { localizedHref } from "@/lib/locale";

const caption = "SYM POS ၏ တကယ့်စခရင် · စမ်းသပ်ဒေတာ";
const guideLabels = [
  "အသုံးပြုသူလမ်းညွှန်",
  "စနစ်ဖွဲ့စည်းပုံ",
  "LAN တပ်ဆင်မှု",
  "Cloud မီနူးညှိနှိုင်းမှု",
  "မီနူးအများအပြား ထည့်သွင်းမှု",
  "Bill တွက်ချက်မှု၊ အခွန်နှင့် လျှော့စျေး",
  "အခန်းကဏ္ဍနှင့် လုပ်ပိုင်ခွင့်",
];
const guides = [
  "userguide.md",
  "docs/architecture.md",
  "docs/deployment-lan.md",
  "docs/cloud-sync-configuration.md",
  "docs/menu-bulk-import.md",
  "docs/pricing-rules.md",
  "docs/rbac-matrix.md",
];
const gallery = [
  ["pos-ordering", "အော်ဒါထည့်ခြင်း"],
  ["tables", "စားပွဲမြင်ကွင်း"],
  ["waiter", "ဝန်ထမ်း၏ အော်ဒါမြင်ကွင်း"],
  ["waiter-progress", "ဝန်ထမ်း၏ ပြင်ဆင်မှုအခြေအနေ"],
  ["table-layout", "စားပွဲဖွဲ့စည်းပုံ"],
  ["kitchen-display", "မီးဖိုချောင်အော်ဒါ"],
  ["kitchen-preparing", "ပြင်ဆင်ဆဲအော်ဒါ"],
  ["kitchen-history", "မီးဖိုချောင်မှတ်တမ်း"],
  ["bar-display", "ဘားအော်ဒါ"],
  ["billing", "ငွေတောင်းခံလွှာ"],
  ["billing-paid", "ငွေပေးချေမှုမှတ်တမ်း"],
  ["billing-receipt", "Receipt နမူနာ"],
  ["inventory", "ကုန်ပစ္စည်းစာရင်း"],
  ["inventory-movements", "ပစ္စည်းဝင်ထွက်မှတ်တမ်း"],
  ["menu-admin", "မီနူးပြင်ဆင်မှု"],
  ["reports", "အစီရင်ခံစာမြင်ကွင်း"],
  ["report-daily-summary", "နေ့စဉ်အကျဉ်းချုပ်"],
  ["report-product-mix", "မီနူးရောင်းအား"],
  ["report-operations", "လုပ်ငန်းဆိုင်ရာအစီရင်ခံစာ"],
  ["report-inventory", "ပစ္စည်းအစီရင်ခံစာ"],
  ["users", "အသုံးပြုသူအကောင့်"],
  ["audit", "Audit မှတ်တမ်း"],
  ["settings", "စနစ်ပြင်ဆင်မှု"],
  ["localization", "ဘာသာစကားနှင့် ဖောင့်"],
  ["printers", "ပရင်တာပြင်ဆင်မှု"],
  ["cloud-sync", "Cloud ချိတ်ဆက်မှု"],
];
export function BurmeseCommunity() {
  return (
    <section className="section community-section">
      <div>
        <p className="eyebrow">အများပြည်သူ ပူးပေါင်းနိုင်သော PROJECT</p>
        <h2>လေ့လာပါ။ ကိုယ်တိုင်တပ်ဆင်ပါ။ ပိုမိုကောင်းမွန်အောင် ပူးပေါင်းပါ။</h2>
        <p className="lede">
          SYM POS ၏ source နှင့် documentation ကို GitHub တွင် လေ့လာနိုင်သည်။
          သင့်အတွက် အသုံးဝင်ပါက Star ပေးခြင်းဖြင့်
          အခြားစားသောက်ဆိုင်လုပ်ငန်းရှင်များနှင့် developer များ
          ရှာဖွေတွေ့ရှိနိုင်အောင် ကူညီပါ။
        </p>
        <div className="hero-actions">
          <a className="button button-dark github-button" href={site.github}>
            <Github size={18} />
            GitHub တွင် Star ပေးရန်
            <Star size={16} />
          </a>
          <Button href="/my/docs" secondary>
            လမ်းညွှန်ဖတ်ရန်
          </Button>
        </div>
      </div>
      <div className="community-actions">
        {[
          [
            "Source ကို လေ့လာရန်",
            "အဓိကလုပ်ငန်းစဉ်များကို code တွင် စစ်ဆေးပါ။",
            site.github,
          ],
          [
            "Issue တင်ရန်",
            "Version နှင့် ပြန်ဖြစ်စေသောအဆင့်များကို ဖော်ပြပါ။",
            `${site.github}/issues`,
          ],
          [
            "ပူးပေါင်းပြင်ဆင်ရန်",
            "တိုးတက်မှုများကို ဆွေးနွေးပြီး PR ဖြင့် ပါဝင်ပါ။",
            `${site.github}/pulls`,
          ],
        ].map(([title, text, href]) => (
          <a key={title} href={href}>
            <Github size={20} />
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
            <ArrowUpRight size={16} />
          </a>
        ))}
      </div>
    </section>
  );
}
export function BurmesePage({ path }: { path: string }) {
  const content = burmesePages[path];
  const webhook =
    path === "/contact" ? safeUrl(process.env.CONTACT_WEBHOOK_URL) : undefined;
  const home = path === "/";
  return (
    <>
      <section className={home ? "page-hero my-home-hero" : "page-hero"}>
        <div className={home ? "my-hero-copy" : undefined}>
          {!home && (
            <nav className="breadcrumbs" aria-label="စာမျက်နှာလမ်းကြောင်း">
              <Link href="/my">ပင်မစာမျက်နှာ</Link>
              <span>/</span>
              <span>{content.eyebrow}</span>
            </nav>
          )}
          <p className="eyebrow">
            <span />
            {content.eyebrow}
          </p>
          <h1>{content.title}</h1>
          <p className="lede">{content.description}</p>
          <div className="hero-actions">
            <Button href={home ? "/my/features" : site.github}>
              {home ? "SYM POS ကို လေ့လာရန်" : "GitHub တွင် လေ့လာရန်"}
            </Button>
            <Button
              href={
                path === "/contact" ? "#inquiry" : "/my/contact?intent=support"
              }
              secondary
            >
              {path === "/contact" ? "မေးမြန်းစာပေးပို့ရန်" : "ဆက်သွယ်ရန်"}
            </Button>
          </div>
          {home && (
            <p className="hero-source-note">
              ကိုယ်တိုင်တပ်ဆင်နိုင်သော source project ဖြစ်သည်။{" "}
              <a href={site.github}>GitHub တွင် SYM POS ကို Star ပေးပါ။</a>
            </p>
          )}
        </div>
        {home && (
          <div className="my-home-preview">
            <ProductScreenshot
              src="/product/pos-ordering.webp"
              alt="စားပွဲအော်ဒါ၊ မီနူးနှင့် စမ်းသပ်ဒေတာပြထားသော SYM POS မြင်ကွင်း"
              caption={caption}
              locale="my"
              priority
              sizes="(max-width: 767px) 90vw, 50vw"
            />
          </div>
        )}
      </section>
      {path === "/demo" && (
        <section className="section">
          <div className="callout">
            <h2>
              {site.demo
                ? "Live demo ကို စမ်းသပ်ပါ"
                : "လမ်းညွှန်သရုပ်ပြမှု တောင်းဆိုပါ"}
            </h2>
            <p>
              {site.demo
                ? "Live demo သည် ပြင်ပ deployment ဖြစ်သည်။ ဖောက်သည်ဒေတာအမှန်နှင့် လျှို့ဝှက်အချက်အလက်ကို မထည့်ပါနှင့်။"
                : "လက်ရှိ hosted demo လင့်ခ်ကို မပြင်ဆင်ထားပါ။ လမ်းညွှန်သရုပ်ပြရန် တောင်းဆိုနိုင်သလို GitHub မှ ကိုယ်တိုင် စမ်းသပ်တပ်ဆင်နိုင်သည်။"}
            </p>
            <Button href={site.demo || "/my/contact?intent=demo"}>
              {site.demo ? "Live demo ဖွင့်ရန်" : "သရုပ်ပြရန် တောင်းဆိုခြင်း"}
            </Button>
          </div>
        </section>
      )}
      <section className="section">
        {content.sections.map((block, i) => (
          <article
            id={block.id}
            className={
              block.screen ? "detail-block enriched-block" : "enriched-block"
            }
            key={block.title}
          >
            <div className="section-copy">
              <p className="eyebrow">
                {(i + 1).toLocaleString("my-MM", { minimumIntegerDigits: 2 })} —{" "}
                {content.eyebrow}
              </p>
              <h2>{block.title}</h2>
              {block.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
              {block.bullets && (
                <ul className="check-list">
                  {block.bullets.map((b) => (
                    <li key={b}>
                      <Check />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
              {block.href && (
                <Link
                  className="text-link"
                  href={localizedHref(block.href, "my")}
                >
                  ဆက်လက်လေ့လာရန်
                  <ArrowUpRight size={16} />
                </Link>
              )}
            </div>
            {block.screen && (
              <ProductScreenshot
                src={`/product/${block.screen}.webp`}
                alt={`${block.title} အတွက် SYM POS ၏ စမ်းသပ်ဒေတာပါသော မြင်ကွင်း`}
                caption={caption}
                locale="my"
              />
            )}
          </article>
        ))}
      </section>
      {path === "/contact" && (
        <section id="inquiry" className="section contact-layout">
          <aside>
            <h2>သင့်လိုအပ်ချက်ကို ပြောပြပါ။</h2>
            <p>
              ဆိုင်ခွဲအရေအတွက်၊ အရောင်းစက်၊ ပရင်တာနှင့် လိုအပ်သောလုပ်ငန်းစဉ်ကို
              ဖော်ပြပါ။ ဆက်သွယ်ရေးပေးပို့မှုကို မပြင်ဆင်ရသေးပါက ဖောင်က
              ပေးပို့ပြီးဟု မပြသပါ။
            </p>
            <p>
              ကိုယ်ရေးအချက်အလက်အသိပေးချက်ကို ဖတ်ပြီး လုပ်ငန်းဆိုင်ရာ
              အချက်အလက်များကိုသာ ပေးပါ။
            </p>
          </aside>
          <ContactForm
            locale="my"
            configured={!!webhook && new URL(webhook).protocol === "https:"}
            email={contactEmail()}
          />
        </section>
      )}
      {path === "/docs" && (
        <section className="section">
          <p className="eyebrow">ထုတ်ကုန်၏ လက်ရှိလမ်းညွှန်များ</p>
          <h2>GitHub မှ Documentation</h2>
          <p className="lede">
            အောက်ပါလင့်ခ်များသည် ထုတ်ကုန် repository ၏ လက်ရှိလမ်းညွှန်များသို့
            ရောက်ရှိသည်။ လမ်းညွှန်ဖိုင်များသည် အင်္ဂလိပ်ဘာသာဖြင့် ဖြစ်နိုင်သည်။
          </p>
          <div className="article-grid my-docs-grid">
            {guides.map((guide, i) => (
              <a
                className="info-card"
                key={guide}
                href={`${site.github}/blob/main/${guide}`}
              >
                <h3>{guideLabels[i]}</h3>
                <p>
                  ထုတ်ကုန်၏ လက်ရှိအကြောင်းအရာကို ဖတ်ရန်{" "}
                  <ArrowUpRight size={16} />
                </p>
              </a>
            ))}
          </div>
        </section>
      )}
      {home && (
        <>
          <section className="section">
            <p className="eyebrow">လုပ်ငန်းအလိုက် အသုံးပြုမှု</p>
            <h2>သင့်လုပ်ငန်းအတွက် ဆက်လက်လေ့လာပါ။</h2>
            <div className="article-grid my-docs-grid">
              {[
                "/solutions/restaurants",
                "/solutions/cafes",
                "/solutions/multi-location",
                "/inventory",
                "/reports",
                "/security",
              ].map((route) => (
                <Link
                  key={route}
                  href={localizedHref(route, "my")}
                  className="info-card"
                >
                  <h3>{burmesePages[route].eyebrow}</h3>
                  <p>{burmesePages[route].description}</p>
                  <ArrowUpRight size={16} />
                </Link>
              ))}
            </div>
          </section>
          <section className="section">
            <p className="eyebrow">တကယ့်ထုတ်ကုန်မှ မြင်ကွင်းများ</p>
            <h2>လုပ်ငန်းစဉ်တစ်ခုချင်းကို လေ့လာပါ။</h2>
            <p className="lede">
              ပုံများအားလုံးသည် SYM POS မှ စမ်းသပ်ဒေတာဖြင့် ဖမ်းယူထားသည်။
              ပုံထဲရှိ interface ဘာသာစကားသည် မူရင်းဖမ်းယူထားသည့်အတိုင်း ဖြစ်သည်။
              ပုံကို နှိပ်၍ အရွယ်အစားအပြည့် ကြည့်နိုင်သည်။
            </p>
            <div className="my-screenshot-grid">
              {gallery.map(([screen, title]) => (
                <div key={screen}>
                  <h3>{title}</h3>
                  <ProductScreenshot
                    src={`/product/${screen}.webp`}
                    alt={`${title} — SYM POS ၏ စမ်းသပ်ဒေတာပါသော စခရင်`}
                    caption={caption}
                    locale="my"
                  />
                </div>
              ))}
            </div>
          </section>
          <section className="section faq-layout">
            <div>
              <p className="eyebrow">မေးလေ့ရှိသော မေးခွန်းများ</p>
              <h2>မတပ်ဆင်မီ သိထားသင့်သည်များ။</h2>
            </div>
            <div className="faq">
              {burmeseFAQ.map(([q, a]) => (
                <details key={q}>
                  <summary>
                    {q}
                    <span aria-hidden="true">+</span>
                  </summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </section>
        </>
      )}
      <BurmeseCommunity />
      <section className="cta-section">
        <div>
          <p className="eyebrow">လိုအပ်ချက်အလိုက် အကူအညီ</p>
          <h2>သင့်ဆိုင်အတွက် လိုအပ်သောအကူအညီကို ဆွေးနွေးပါ။</h2>
          <p>
            တပ်ဆင်မှု၊ စက်ပစ္စည်း၊ workflow configuration နှင့် custom
            development လိုအပ်ချက်များကို ဆက်သွယ်နိုင်သည်။
          </p>
        </div>
        <div className="hero-actions">
          <Button href="/my/contact?intent=support">ဆက်သွယ်ရန်</Button>
          <Button href={site.github} secondary>
            GitHub တွင် လေ့လာရန်
          </Button>
        </div>
      </section>
    </>
  );
}
