import Link from "next/link";
import { z } from "zod";
import { productListSchema } from "../lib/schema";
import {
  ProductListThumbnail,
  ProductListThumbnailSkeleton,
} from "./ProductListThumbnail";

export function ProductList({
  list,
}: {
  list: z.infer<typeof productListSchema>;
}) {
  return (
    <div className="relative mb-8 flex flex-col items-center gap-8">
      
      {list.data.length > 0 ? (
        <>
          
          <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            
            {list.data.map((product) => (
              <ProductListThumbnail key={product.id} product={product} />
            ))}
          </div>
          <Link
            href="#"
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            
            View all products
          </Link>
        </>
      ) : (
        <>
          
          <div className="grid w-full grid-cols-1 gap-8 opacity-40 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            
            {Array.from({ length: 3 }).map((_, index) => (
              <ProductListThumbnailSkeleton key={index} />
            ))}
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 text-center text-sm">
            
            <div className="font-medium">No products found.</div>
            <div className="text-gray-500 mb-4">
              
              Add products to your store to get started.
            </div>
            <a
              href="https://dashboard.stripe.com/test/products"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              
              Add Product
            </a>
          </div>
        </>
      )}
    </div>
  );
}
