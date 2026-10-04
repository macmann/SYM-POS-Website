import { Button } from "@/components/product";
import type { Locale } from "@/lib/locale";
export function CloudDemo({ locale = "en" }: { locale?: Locale }) {
  const my = locale === "my";
  return (
    <div className="page-guide cloud-demo">
      <p className="eyebrow">
        {my ? "CLOUD DEMO ကို ကိုယ်တိုင်စမ်းသပ်ပါ" : "TRY THE CLOUD DEMO"}
      </p>
      <h2>
        {my
          ? "ဘရောက်ဇာမှ SYM POS ကို စမ်းသပ်ပါ။"
          : "Try SYM POS in your browser."}
      </h2>
      <p>
        {my
          ? "Cloud demo သို့ ဝင်ပြီး အော်ဒါ၊ မီးဖိုချောင်၊ ငွေရှင်းခြင်းနှင့် report များကို ကိုယ်တိုင်လေ့လာပါ။ အောက်ပါ demo အကောင့်ဖြင့် ဝင်ရောက်နိုင်သည်။"
          : "Open our cloud demo and explore ordering, kitchen workflows, billing and reports. Sign in with the demo account below to try the application yourself."}
      </p>
      <p>
        <a className="text-link" href="https://demo.sympos.site/">
          demo.sympos.site
        </a>
      </p>
      <dl className="demo-credentials">
        <div>
          <dt>{my ? "အသုံးပြုသူအမည်" : "Username"}</dt>
          <dd>
            <code>superadmin</code>
          </dd>
        </div>
        <div>
          <dt>{my ? "စကားဝှက်" : "Password"}</dt>
          <dd>
            <code>password123</code>
          </dd>
        </div>
      </dl>
      <div className="hero-actions">
        <Button href="https://demo.sympos.site/">
          {my ? "Cloud demo ဖွင့်ရန်" : "Try the Cloud Demo"}
        </Button>
      </div>
      <p>
        {my
          ? "အများသုံး demo ဖြစ်သောကြောင့် စမ်းသပ်ဒေတာကိုသာ အသုံးပြုပါ။"
          : "This is a public demo. Use sample data when exploring the workflows."}
      </p>
    </div>
  );
}
