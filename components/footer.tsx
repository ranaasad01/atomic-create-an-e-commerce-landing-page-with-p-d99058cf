"use client";

import Link from "next/link";
import { Sparkles, Mail, Code2 as Github, MessageCircle as Twitter, Briefcase as Linkedin, Globe as Facebook } from 'lucide-react';
import { useState } from "react";

const LINKS = {
  Shop: ["Electronics", "Clothing", "Home", "Sports", "Beauty"],
  Company: ["About Us", "Careers", "Press", "Blog"],
  Support: ["FAQ", "Shipping", "Returns", "Track Order", "Contact"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  }

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                Shop<span className="text-indigo-400">Wave</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Curated products, unbeatable prices. Your one-stop shop for everything you need.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: Twitter, label: "Twitter" },
                { icon: Facebook, label: "Facebook" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Github, label: "GitHub" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-8 h-8 bg-slate-800 hover:bg-indigo-600 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([heading, items]) => (
            <div key={heading}>
              <h4 className="text-white font-semibold text-sm mb-4">{heading}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="bg-slate-800 rounded-2xl p-6 sm:p-8 mb-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <Mail className="w-4 h-4 text-indigo-400" />
                <h4 className="text-white font-semibold">Stay in the loop</h4>
              </div>
              <p className="text-sm text-slate-400">
                Get exclusive deals, new arrivals, and style tips delivered to your inbox.
              </p>
            </div>
            {subscribed ? (
              <div className="bg-emerald-500/20 text-emerald-400 text-sm font-semibold px-6 py-3 rounded-xl border border-emerald-500/30">
                Thanks for subscribing! 🎉
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2 w-full sm:w-auto">
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 sm:w-56 px-4 py-2.5 rounded-xl bg-slate-700 border border-slate-600 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  aria-label="Email address for newsletter"
                />
                <button
                  type="submit"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors shrink-0"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-800">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} ShopWave. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {["Visa", "Mastercard", "PayPal", "Apple Pay"].map((method) => (
              <span
                key={method}
                className="text-xs bg-slate-800 text-slate-400 px-2.5 py-1 rounded-md border border-slate-700"
              >
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
