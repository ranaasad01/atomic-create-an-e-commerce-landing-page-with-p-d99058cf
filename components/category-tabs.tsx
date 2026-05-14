"use client";

import { CATEGORIES } from "@/lib/mock-products";

type Props = {
  active: string;
  onChange: (cat: string) => void;
};

export default function CategoryTabs({ active, onChange }: Props) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide" role="tablist" aria-label="Product categories">
      {CATEGORIES.map((cat) => (
        <button
          key={cat}
          role="tab"
          aria-selected={active === cat}
          onClick={() => onChange(cat)}
          className={
            "shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 " +
            (active === cat
              ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
              : "bg-slate-100 text-slate-600 hover:bg-slate-200")
          }
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
