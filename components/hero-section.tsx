import Link from "next/link";
import { ArrowRight, Star } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-amber-50">
      {/* Decorative blobs */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-100 rounded-full opacity-50 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-72 h-72 bg-amber-100 rounded-full opacity-60 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-700 text-sm font-semibold px-4 py-1.5 rounded-full border border-amber-300">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              Summer Sale — Up to 40% Off
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight">
              Discover Products{" "}
              <span className="text-indigo-600">You&apos;ll Love</span>
            </h1>
            <p className="text-lg text-slate-500 max-w-md leading-relaxed">
              Curated collections across electronics, fashion, home goods, and more — all at prices that make sense.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#products"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-200 shadow-lg shadow-indigo-200 hover:shadow-indigo-300 hover:-translate-y-0.5"
              >
                Shop Now
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/cart"
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-semibold px-6 py-3 rounded-full border border-slate-200 transition-all duration-200 hover:-translate-y-0.5"
              >
                View Cart
              </Link>
            </div>
            {/* Social proof */}
            <div className="flex items-center gap-6 pt-2">
              <div className="text-center">
                <p className="text-2xl font-bold text-slate-900">50K+</p>
                <p className="text-xs text-slate-500">Happy Customers</p>
              </div>
              <div className="w-px h-10 bg-slate-200" />
              <div className="text-center">
                <p className="text-2xl font-bold text-slate-900">4.9★</p>
                <p className="text-xs text-slate-500">Average Rating</p>
              </div>
              <div className="w-px h-10 bg-slate-200" />
              <div className="text-center">
                <p className="text-2xl font-bold text-slate-900">Free</p>
                <p className="text-xs text-slate-500">Shipping $50+</p>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-200 to-amber-200 rounded-3xl rotate-3 opacity-40" />
              <img
                src="https://sweetsandsnacks.com/wordpress/wp-content/uploads/2023/10/featured-products-showcase-2.png"
                alt="Featured products showcase"
                className="relative rounded-3xl object-cover w-full aspect-[4/3] shadow-2xl"
              />
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Top Rated</p>
                  <p className="text-sm font-bold text-slate-900">4.9 / 5.0</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-indigo-600 text-white rounded-2xl shadow-xl px-4 py-3">
                <p className="text-xs font-medium opacity-80">Limited Offer</p>
                <p className="text-lg font-extrabold">40% OFF</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
