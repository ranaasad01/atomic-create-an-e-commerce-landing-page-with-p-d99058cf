"use client";

import { useCart } from "@/context/cart-context";
import { ArrowRight, ShoppingCart } from 'lucide-react';
import Link from "next/link";

export default function OrderSummary() {
  const { subtotal, totalItems } = useCart();
  const shipping = subtotal >= 50 ? 0 : 5.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="bg-slate-50 rounded-2xl p-6 space-y-4 sticky top-24">
      <h2 className="text-lg font-bold text-slate-900">Order Summary</h2>

      <div className="space-y-3 text-sm">
        <div className="flex justify-between text-slate-600">
          <span>Subtotal ({totalItems} {totalItems === 1 ? "item" : "items"})</span>
          <span className="font-medium text-slate-900">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-slate-600">
          <span>Shipping</span>
          {shipping === 0 ? (
            <span className="text-emerald-600 font-semibold">Free</span>
          ) : (
            <span className="font-medium text-slate-900">${shipping.toFixed(2)}</span>
          )}
        </div>
        <div className="flex justify-between text-slate-600">
          <span>Estimated Tax (8%)</span>
          <span className="font-medium text-slate-900">${tax.toFixed(2)}</span>
        </div>
        {subtotal > 0 && subtotal < 50 && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-700">
            Add <strong>${(50 - subtotal).toFixed(2)}</strong> more for free shipping!
          </div>
        )}
        <div className="border-t border-slate-200 pt-3 flex justify-between font-bold text-base text-slate-900">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      <button
        className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition-colors shadow-lg shadow-indigo-200"
        aria-label="Proceed to checkout"
      >
        Checkout
        <ArrowRight className="w-4 h-4" />
      </button>

      <Link
        href="/"
        className="w-full flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-700 font-semibold py-3 rounded-xl border border-slate-200 transition-colors text-sm"
      >
        <ShoppingCart className="w-4 h-4" />
        Continue Shopping
      </Link>

      <div className="flex items-center justify-center gap-4 pt-2">
        {["Visa", "Mastercard", "PayPal"].map((m) => (
          <span key={m} className="text-xs bg-white text-slate-400 px-2 py-1 rounded border border-slate-200">
            {m}
          </span>
        ))}
      </div>
    </div>
  );
}
