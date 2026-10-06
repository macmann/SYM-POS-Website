export type Locale = "en" | "my";
export function localizedHref(href: string, locale: Locale) {
  if (
    locale === "en" ||
    !href.startsWith("/") ||
    href.startsWith("/my") ||
    href.startsWith("/product") ||
    href.startsWith("/api")
  )
    return href;
  return href === "/" ? "/my" : `/my${href}`;
}
export function englishPath(path: string) {
  return path === "/my" ? "/" : path.replace(/^\/my\//, "/");
}
export const labels: Record<string, string> = {
  Product: "ထုတ်ကုန်",
  "Point of Sale": "အရောင်းစနစ်",
  "Table Service": "စားပွဲဝန်ဆောင်မှု",
  "Kitchen & Bar": "မီးဖိုချောင်နှင့် ဘား",
  Billing: "ငွေတောင်းခံခြင်း",
  Inventory: "ကုန်ပစ္စည်းစာရင်း",
  Reports: "အစီရင်ခံစာများ",
  "Menu Management": "မီနူးစီမံခန့်ခွဲမှု",
  "Users & Roles": "အသုံးပြုသူနှင့် လုပ်ပိုင်ခွင့်",
  Solutions: "လုပ်ငန်းအလိုက် အသုံးပြုမှု",
  Restaurants: "စားသောက်ဆိုင်များ",
  Cafes: "ကော်ဖီဆိုင်များ",
  "Multi-location": "ဆိုင်ခွဲများ",
  "Offline-First": "ဒေသတွင်းကွန်ရက်ဖြင့် အသုံးပြုမှု",
  Hardware: "စက်ပစ္စည်းများ",
  Resources: "လေ့လာရန်",
  Download: "ဒေါင်းလုဒ်",
  Documentation: "အသုံးပြုလမ်းညွှန်",
  Architecture: "စနစ်ဖွဲ့စည်းပုံ",
  Company: "ဆက်သွယ်ရန်",
  "Contact Us": "ဆက်သွယ်ရန်",
  "Request Demo": "သရုပ်ပြရန် တောင်းဆိုခြင်း",
  "Custom Support": "လိုအပ်ချက်အလိုက် အကူအညီ",
  Privacy: "ကိုယ်ရေးအချက်အလက်",
  Terms: "အသုံးပြုမှုစည်းကမ်း",
  "View Demo": "သရုပ်ပြကြည့်ရန်",
  "Star on GitHub": "GitHub တွင် Star ပေးရန်",
  Name: "အမည်",
  "Restaurant / Company": "စားသောက်ဆိုင် / ကုမ္ပဏီ",
  Email: "အီးမေးလ်",
  "Phone (optional)": "ဖုန်းနံပါတ် (မဖြည့်လည်းရပါသည်)",
  Country: "နိုင်ငံ",
  "Number of Locations": "ဆိုင်ခွဲအရေအတွက်",
  "Approximate POS Terminals": "အရောင်းစက် အရေအတွက် (ခန့်မှန်း)",
};
export function translateLabel(text: string, locale: Locale) {
  return locale === "my" ? labels[text] || text : text;
}
export function contactTranslation(text: string, locale: Locale): string {
  if (locale === "en") return text;
  const messages: Record<string, string> = {
    "Please review the highlighted fields.":
      "အမှတ်အသားပြထားသော အကွက်များကို ပြန်လည်စစ်ဆေးပါ။",
    "Sending your request…": "သင့်တောင်းဆိုချက်ကို ပေးပို့နေပါသည်…",
    "Your request has been delivered. Thank you for sharing your restaurant plans.":
      "သင့်တောင်းဆိုချက်ကို ပေးပို့ပြီးပါပြီ။ သင့်ဆိုင်၏ လိုအပ်ချက်များကို မျှဝေပေးသည့်အတွက် ကျေးဇူးတင်ပါသည်။",
    "Your request could not be delivered. Please try again.":
      "တောင်းဆိုချက်ကို မပေးပို့နိုင်ပါ။ ပြန်လည်ကြိုးစားပါ။",
    "Could not deliver your request. Please try again.":
      "တောင်းဆိုချက်ကို မပေးပို့နိုင်ပါ။ ပြန်လည်ကြိုးစားပါ။",
    "Enter a valid email address.": "မှန်ကန်သော အီးမေးလ်လိပ်စာကို ဖြည့်ပါ။",
    "Enter a whole number between 1 and 10,000.":
      "၁ မှ ၁၀,၀၀၀ အတွင်း ကိန်းပြည့်တစ်ခု ဖြည့်ပါ။",
    "Use between 10 and 3,000 characters.":
      "စာလုံးရေ ၁၀ မှ ၃,၀၀၀ အတွင်း ဖြည့်ပါ။",
    "Please review your fields.": "ဖြည့်ထားသော အကွက်များကို ပြန်လည်စစ်ဆေးပါ။",
    "Web submissions are not configured yet. Use the contact email on this page if available. No message has been sent.":
      "ဝဘ်ဆိုက်မှ ပေးပို့မှုကို မပြင်ဆင်ရသေးပါ။ ဤစာမျက်နှာတွင် အီးမေးလ်ရှိပါက ထိုလိပ်စာသို့ ပေးပို့ပါ။ မည်သည့်စာမျှ မပေးပို့ရသေးပါ။",
    "Contact delivery is unavailable. Please use the contact email.":
      "ဆက်သွယ်ရေးပေးပို့မှုကို အသုံးမပြုနိုင်သေးပါ။ ဆက်သွယ်ရန် အီးမေးလ်ကို အသုံးပြုပါ။",
    "Please wait a minute before sending another request.":
      "နောက်ထပ်တောင်းဆိုချက် မပေးပို့မီ တစ်မိနစ်စောင့်ပါ။",
    "The delivery service did not accept your request. No delivery has been confirmed. Please try again or use the contact email.":
      "ပေးပို့ရေးဝန်ဆောင်မှုက သင့်တောင်းဆိုချက်ကို လက်မခံပါ။ ပေးပို့ပြီးကြောင်း အတည်မပြုနိုင်ပါ။ ပြန်လည်ကြိုးစားပါ သို့မဟုတ် ဆက်သွယ်ရန် အီးမေးလ်ကို အသုံးပြုပါ။",
    "This request must come from the website.":
      "ဤတောင်းဆိုချက်ကို ဝဘ်ဆိုက်မှသာ ပေးပို့ရပါမည်။",
    "Your request is too large.":
      "သင့်တောင်းဆိုချက်သည် သတ်မှတ်ထားသော အရွယ်အစားထက် ကြီးနေပါသည်။",
  };
  if (messages[text]) return messages[text];
  if (text.endsWith(" is required."))
    return `${translateLabel(text.replace(" is required.", ""), locale)} ဖြည့်ရန် လိုအပ်ပါသည်။`;
  const max = text.match(/^Use at most (\d+) characters\.$/);
  if (max)
    return `စာလုံးရေ ${Number(max[1]).toLocaleString("my-MM")} ထက် မပိုပါစေနှင့်။`;
  return "တောင်းဆိုချက်ကို မပေးပို့နိုင်ပါ။ ပြန်လည်ကြိုးစားပါ သို့မဟုတ် ဆက်သွယ်ရန် အီးမေးလ်ကို အသုံးပြုပါ။";
}
