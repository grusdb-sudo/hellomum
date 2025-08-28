import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Hello Mum — Brighten up their day",
  description: "Small comforts and thoughtful surprises delivered to residents in Singapore care homes.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
          <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-brand-pink" />
              <span className="font-semibold tracking-tight text-brand-pink">Hello Mum</span>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <Link className="hover:opacity-70" href="#how">How it works</Link>
              <Link className="hover:opacity-70" href="#menu">Menu</Link>
              <Link className="hover:opacity-70" href="#subscriptions">Subscriptions</Link>
              <Link className="px-3 py-1.5 rounded-xl bg-brand-pink text-white no-underline" href="#signup">Sign in</Link>
            </nav>
          </div>
        </header>
        {children}
        <footer className="border-t bg-pink-50">
          <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6 items-start text-sm">
            <div>
              <div className="font-medium text-brand-pink">Hello Mum</div>
              <p className="mt-2 text-gray-600">Brighten their day with small comforts. Trusted by care homes — powered by Hello Mum.</p>
            </div>
            <div>
              <div className="font-medium">Trust & Security</div>
              <ul className="mt-2 space-y-1 text-gray-600">
                <li>Secure payments (Card, Apple Pay, Google Pay, PayNow)</li>
                <li>Data minimised to resident ID and room</li>
                <li>Delivery confirmed by staff</li>
              </ul>
            </div>
            <div>
              <div className="font-medium">Contact</div>
              <ul className="mt-2 space-y-1 text-gray-600">
                <li>Email: hello@hellomum.example</li>
                <li>Singapore</li>
              </ul>
            </div>
          </div>
          <div className="text-center text-xs text-gray-500 py-6">© {new Date().getFullYear()} Hello Mum — Powered by Hello Mum</div>
        </footer>
      </body>
    </html>
  );
}
