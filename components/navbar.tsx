"use client";

import Link from "next/link";
import { ShoppingCart, Search, Sparkles, Menu, X } from 'lucide-react';
import { useCart } from "@/context/cart-context";
import { useState, useEffect } from "react";

type NavbarProps = {
  searchQuery: string;
  onSearchChange: (q: string) => void;
};

export default function Navbar({ searchQuery, onSearchChange }: NavbarProps) {
  const { totalItems } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [prevCount, setPrevCount] = useState(0);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    if (totalItems > prevCount) {
      setPulse(true);
      setTimeout(() => setPulse(false), 600);
    }
    setPrevCount(totalItems);
  }, [totalItems, prevCount]);

  return (
    <header
      className={
        "sticky top-0 z-50 w-full transition-all duration-300 " +
        (scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white")
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900 tracking-tight">
              Shop<span className="text-indigo-600">Wave</span>
            </span>
          </Link>

          {/* Search bar — desktop */}
          <div className="hidden sm:flex flex-1 max-w-xl relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search products…"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              aria-label="Search products"
            />
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <Link
              href="/cart"
              className="relative p-2 rounded-full hover:bg-slate-100 transition"
              aria-label="Shopping cart"
            >
              <ShoppingCart className="w-5 h-5 text-slate-700" />
              {totalItems > 0 && (
                <span
                  className={
                    "absolute -top-1 -right-1 min-w-[18px] h-[18px] bg-indigo-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center px-1 transition-transform " +
                    (pulse ? "scale-125" : "scale-100")
                  }
                >
                  {totalItems > 99 ? "99+" : totalItems}
                </span>
              )}
            </Link>
            <button
              className="sm:hidden p-2 rounded-full hover:bg-slate-100 transition"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile search */}
        {mobileOpen && (
          <div className="sm:hidden pb-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search products…"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-full border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                aria-label="Search products"
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
