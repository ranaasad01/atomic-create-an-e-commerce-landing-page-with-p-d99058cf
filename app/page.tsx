"use client";

import { useState, useMemo } from "react";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import CategoryTabs from "@/components/category-tabs";
import ProductGrid from "@/components/product-grid";
import Footer from "@/components/footer";
import { PRODUCTS } from "@/lib/mock-products";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchesCategory = activeCategory === "All" || p.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      <main className="flex-1">
        <HeroSection />

        {/* Products section */}
        <section id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          {/* Section header */}
          <div className="mb-8">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-1">
              Our Products
            </h2>
            <p className="text-slate-500 text-sm">
              Browse our curated selection across all categories.
            </p>
          </div>

          {/* Category filter */}
          <div className="mb-8">
            <CategoryTabs active={activeCategory} onChange={setActiveCategory} />
          </div>

          {/* Grid */}
          <ProductGrid products={filtered} total={PRODUCTS.length} />
        </section>

        {/* Promo banner */}
        <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Limited Time
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Free Shipping on Orders Over $50
            </h2>
            <p className="text-indigo-200 text-base max-w-xl mx-auto">
              Stock up on your favorites and enjoy free delivery straight to your door. No code needed.
            </p>
            <a
              href="#products"
              className="inline-block bg-amber-400 hover:bg-amber-300 text-amber-900 font-bold px-8 py-3 rounded-full transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-amber-900/20"
            >
              Shop the Sale
            </a>
          </div>
        </section>

        {/* Trust badges */}
        <section className="bg-white border-y border-slate-100 py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { emoji: "🚚", title: "Free Shipping", desc: "On orders over $50" },
                { emoji: "🔄", title: "Easy Returns", desc: "30-day hassle-free returns" },
                { emoji: "🔒", title: "Secure Checkout", desc: "256-bit SSL encryption" },
                { emoji: "⭐", title: "Top Rated", desc: "4.9/5 from 50K+ reviews" },
              ].map(({ emoji, title, desc }) => (
                <div key={title} className="flex flex-col items-center gap-2 p-4">
                  <span className="text-3xl">{emoji}</span>
                  <h3 className="font-bold text-slate-900 text-sm">{title}</h3>
                  <p className="text-xs text-slate-500">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
