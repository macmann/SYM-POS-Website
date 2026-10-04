import { SiteLayout, metadata as base } from "@/components/site-layout";
export const metadata = {
  ...base,
  title: {
    default: "SYM POS — စားသောက်ဆိုင်လုပ်ငန်းများအတွက် ဒေသတွင်းကွန်ရက်စနစ်",
    template: "%s | SYM POS",
  },
  description:
    "မှာယူမှု၊ မီးဖိုချောင်၊ ငွေတောင်းခံမှု၊ ကုန်ပစ္စည်းနှင့် အစီရင်ခံစာများကို ဆိုင်၏ဒေသတွင်းကွန်ရက်ဖြင့် စီမံနိုင်သော အများပြည်သူလေ့လာပြင်ဆင်နိုင်သည့် SYM POS စနစ်။",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <SiteLayout locale="my">{children}</SiteLayout>;
}
