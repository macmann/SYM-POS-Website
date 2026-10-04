import { Button } from "@/components/product";
export default function NotFound() {
  return (
    <section className="not-found">
      <p className="eyebrow">စာမျက်နှာမတွေ့ပါ</p>
      <h1>ပင်မစာမျက်နှာသို့ ပြန်သွားပါ။</h1>
      <p>သင်တောင်းဆိုထားသော စာမျက်နှာကို မတွေ့ပါ။</p>
      <Button href="/my">SYM POS ပင်မစာမျက်နှာ</Button>
    </section>
  );
}
