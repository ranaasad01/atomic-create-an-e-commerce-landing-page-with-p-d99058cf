import ProductCard from "./product-card";
import type { Product } from "@/lib/mock-products";
import { Search } from 'lucide-react';

type Props = {
  products: Product[];
  total: number;
};

export default function ProductGrid({ products, total }: Props) {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <p className="text-sm text-slate-500">
          Showing <span className="font-semibold text-slate-900">{products.length}</span> of{" "}
          <span className="font-semibold text-slate-900">{total}</span> products
        </p>
      </div>

      {products.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 gap-4 text-center">
          <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center">
            <Search className="w-7 h-7 text-slate-400" />
          </div>
          <h3 className="text-lg font-semibold text-slate-700">No products found</h3>
          <p className="text-sm text-slate-400 max-w-xs">
            Try adjusting your search or selecting a different category.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
