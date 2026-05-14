"use client";

import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from "@/context/cart-context";
import type { CartItem } from "@/context/cart-context";

export default function CartItemRow({ item }: { item: CartItem }) {
  const { increment, decrement, removeItem } = useCart();

  return (
    <div className="flex gap-4 py-5 border-b border-slate-100 last:border-0">
      {/* Image */}
      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-slate-50 shrink-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Details */}
      <div className="flex-1 min-w-0 flex flex-col gap-1">
        <span className="text-xs font-medium text-indigo-500 uppercase tracking-wider">
          {item.category}
        </span>
        <h3 className="text-sm font-semibold text-slate-900 line-clamp-2 leading-snug">
          {item.name}
        </h3>
        <p className="text-sm font-bold text-slate-900 mt-auto">
          ${(item.price * item.quantity).toFixed(2)}
          {item.quantity > 1 && (
            <span className="text-xs font-normal text-slate-400 ml-1">
              (${item.price.toFixed(2)} each)
            </span>
          )}
        </p>
      </div>

      {/* Quantity + Remove */}
      <div className="flex flex-col items-end justify-between gap-2 shrink-0">
        <button
          onClick={() => removeItem(item.id)}
          aria-label={"Remove " + item.name}
          className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
        >
          <Trash2 className="w-4 h-4" />
        </button>
        <div className="flex items-center gap-2 bg-slate-100 rounded-xl p-1">
          <button
            onClick={() => decrement(item.id)}
            aria-label="Decrease quantity"
            className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-white transition-colors text-slate-600"
          >
            <Minus className="w-3.5 h-3.5" />
          </button>
          <span className="w-6 text-center text-sm font-semibold text-slate-900">
            {item.quantity}
          </span>
          <button
            onClick={() => increment(item.id)}
            aria-label="Increase quantity"
            className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-white transition-colors text-slate-600"
          >
            <Plus className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
