"use client";

import Link from "next/link";
import { ArrowLeft, ShoppingCart } from 'lucide-react';
import { useCart } from "@/context/cart-context";
import CartItemRow from "@/components/cart-item";
import OrderSummary from "@/components/order-summary";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useState } from "react";

export default function CartPage() {
  const { items } = useCart();
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar searchQuery={search} onSearchChange={setSearch} />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-indigo-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Continue Shopping
          </Link>
          <span className="text-slate-300">/</span>
          <span className="text-sm font-semibold text-slate-900">Shopping Cart</span>
        </div>

        <h1 className="text-3xl font-extrabold text-slate-900 mb-8 flex items-center gap-3">
          <ShoppingCart className="w-7 h-7 text-indigo-600" />
          Your Cart
          {items.length > 0 && (
            <span className="text-base font-normal text-slate-400">
              ({items.length} {items.length === 1 ? "item" : "items"})
            </span>
          )}
        </h1>

        {items.length === 0 ? (
          /* Empty state */
          <div className="flex flex-col items-center justify-center py-24 gap-6 text-center">
            <div className="w-24 h-24 bg-indigo-50 rounded-full flex items-center justify-center">
              <ShoppingCart className="w-10 h-10 text-indigo-300" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">Your cart is empty</h2>
              <p className="text-slate-500 text-sm max-w-xs">
                Looks like you haven&apos;t added anything yet. Explore our products and find something you love!
              </p>
            </div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-full transition-colors shadow-lg shadow-indigo-200"
            >
              <ArrowLeft className="w-4 h-4" />
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Cart items */}
            <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
              <h2 className="text-base font-bold text-slate-900 mb-2 pb-4 border-b border-slate-100">
                Cart Items
              </h2>
              <div>
                {items.map((item) => (
                  <CartItemRow key={item.id} item={item} />
                ))}
              </div>
            </div>

            {/* Order summary */}
            <div className="lg:col-span-1">
              <OrderSummary />
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
