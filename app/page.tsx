import Image from "next/image";

const products = [
  { name: "Framed photo print", desc: "Upload a photo, we print & frame", price: 20, img: "/images/frame.png" },
  { name: "Chocolate treat pack", desc: "Two artisanal chocolates", price: 12, img: "/images/choc.png" },
  { name: "Tea & biscuit duo", desc: "Tea bag + biscuit pack", price: 10, img: "/images/tea.png" },
  { name: "Nuts & dried fruit cup", desc: "Resealable pack", price: 10, img: "/images/nuts.png" },
  { name: "Scented hand cream", desc: "Travel-size, pastel wrapped", price: 15, img: "/images/cream.png" },
  { name: "Aromatherapy sachet", desc: "Lavender or citrus", price: 12, img: "/images/sachet.png" },
  { name: "Cozy pastel socks", desc: "Soft cotton socks", price: 18, img: "/images/socks.png" },
];

const subs = [
  { tier: "Birthday & Milestones", fee: "$30/event or $150/year", points: ["Auto-send on birthdays", "Customise notes & photos"] },
  { tier: "Seasonal Celebrations", fee: "$35/month or $350/year", points: ["Valentine’s, Mother’s/Father’s Day", "Christmas & New Year"] },
  { tier: "Monthly Treat", fee: "$18/month or $180/year", points: ["One comfort item each month", "Rotating surprise or your choice"] },
  { tier: "Weekly Note Plan", fee: "$15/month or $150/year", points: ["Note & small treat every week", "Always stay connected"] },
  { tier: "Siblings Together", fee: "Shared wallet", points: ["Multiple family members contribute", "All-in-one login"] },
  { tier: "All-Inclusive", fee: "$35/month or $350/year", points: ["Covers birthdays + holidays", "Monthly treat included"] },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-r from-peach via-mint to-lavender">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-4 py-20">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-brand-pink">Brighten up their day</h1>
            <p className="mt-4 text-lg text-gray-700">
              Thoughtful gifts and small comforts delivered directly to residents — with ease, trust, and love.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#menu" className="px-5 py-3 rounded-2xl bg-brand-pink text-white no-underline">Browse Menu</a>
              <a href="#subscriptions" className="px-5 py-3 rounded-2xl border border-pink-300 text-brand-pink no-underline">See Subscriptions</a>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3 text-sm text-gray-600">
              <div>Premium but accessible</div>
              <div>Secure payments</div>
              <div>Trusted by homes</div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="rounded-3xl border bg-white p-6 shadow-sm">
              <div className="grid grid-cols-3 gap-3 text-center text-sm">
                {products.slice(0,6).map((p, i) => (
                  <div key={i} className="rounded-2xl border bg-white p-4">
                    <div className="h-20 grid place-items-center mb-2 bg-gray-50">IMG</div>
                    <div className="font-medium">{p.name}</div>
                    <div className="text-gray-500">${p.price}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-brand-pink">How it works</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              { title: "Choose an item", text: "Select from our curated menu of treats, wellness comforts, or keepsakes." },
              { title: "Add a message", text: "Write a personal note. It prints on a branded Hello Mum card." },
              { title: "Delivered with care", text: "Staff deliver to the resident’s room, and you receive a delivery confirmation." },
            ].map((card, idx) => (
              <div key={idx} className="rounded-3xl border p-6 bg-white shadow-sm">
                <div className="font-medium">{card.title}</div>
                <p className="text-sm text-gray-600 mt-2">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="border-t bg-pink-50">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h3 className="text-2xl font-semibold text-brand-pink">Our Menu</h3>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <div key={i} className="rounded-3xl border bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="font-medium text-gray-900">{p.name}</div>
                  <div className="text-brand-pink font-semibold">${p.price}</div>
                </div>
                <p className="text-sm text-gray-600 mt-2">{p.desc}</p>
                <button className="mt-4 px-4 py-2 rounded-xl bg-brand-pink text-white">Add to cart</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscriptions */}
      <section id="subscriptions" className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h3 className="text-2xl font-semibold text-brand-pink">Subscriptions</h3>
          <p className="mt-2 text-gray-700">Never miss a birthday, milestone, or holiday. Choose a plan that fits your family.</p>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {subs.map((card, i) => (
              <div key={i} className="rounded-3xl border bg-white p-6 shadow-sm">
                <div className="text-sm text-gray-600">{card.tier}</div>
                <div className="text-lg font-semibold mt-1 text-brand-pink">{card.fee}</div>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  {card.points.map((p, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="mt-0.5">•</span><span>{p}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-4 px-4 py-2 rounded-xl bg-brand-pink text-white">Choose plan</button>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
