"use client";

import { useState } from "react";
import { Star, ShoppingCart, Check } from 'lucide-react';
import { useCart } from "@/context/cart-context";
import type { Product } from "@/lib/mock-products";

const BADGE_STYLES: Record<string, string> = {
  Featured: "bg-indigo-600 text-white",
  Sale: "bg-amber-400 text-amber-900",
  New: "bg-emerald-500 text-white",
};

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  function handleAdd() {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  const discount =
    product.originalPrice
      ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
      : null;

  const badgeClass = product.badge ? BADGE_STYLES[product.badge] ?? "" : "";

  const btnClass = added
    ? "bg-emerald-500 text-white scale-95"
    : "bg-indigo-600 hover:bg-indigo-700 text-white hover:shadow-md hover:shadow-indigo-200";

  return (
    <article className="group relative bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
      {/* Image */}
      <div className="relative overflow-hidden bg-slate-50 aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {product.badge && (
          <span className={"absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full " + badgeClass}>
            {product.badge === "Sale" && discount ? "-" + discount + "%" : product.badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 gap-3">
        <span className="text-xs font-medium text-indigo-500 uppercase tracking-wider">
          {product.category}
        </span>

        <h3 className="text-sm font-semibold text-slate-900 leading-snug line-clamp-2 group-hover:text-indigo-600 transition-colors">
          {product.name}
        </h3>

        <div className="flex items-center gap-1.5">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={
                  "w-3.5 h-3.5 " +
                  (i < Math.floor(product.rating)
                    ? "fill-amber-400 text-amber-400"
                    : "fill-slate-200 text-slate-200")
                }
              />
            ))}
          </div>
          <span className="text-xs text-slate-500">
            {product.rating} ({product.reviewCount.toLocaleString()})
          </span>
        </div>

        <div className="flex items-baseline gap-2 mt-auto">
          <span className="text-lg font-extrabold text-slate-900">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-slate-400 line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        <button
          onClick={handleAdd}
          aria-label={"Add " + product.name + " to cart"}
          className={"mt-1 w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 " + btnClass}
        >
          {added ? (
            <>
              <Check className="w-4 h-4" />
              Added!
            </>
          ) : (
            <>
              <ShoppingCart className="w-4 h-4" />
              Add to Cart
            </>
          )}
        </button>
      </div>
    </article>
  );
}
