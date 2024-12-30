import Image from 'next/image'
import { z } from 'zod'
import { productSchema } from '../lib/schema'
import { ProductBuyForm } from './ProductBuyForm'

export function ProductListThumbnail({
  product,
}: {
  product: z.infer<typeof productSchema>
}) {
  return (
    <div className="bg-white">
      <div className="relative aspect-square overflow-hidden rounded-xl border border-gray-200">
        <Image
          src={product.images?.[0] ?? '/placeholder.svg'}
          alt={product.name}
          width={400}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex items-center gap-2 py-2">
        <div className="flex flex-col gap-1">
          <div className="font-medium">{product.name}</div>
          <div className="text-gray-500">
            {product.price.display_amount}
          </div>
        </div>
        <div className="ml-auto">
          <ProductBuyForm priceId={product.price.id} />
        </div>
      </div>
    </div>
  )
}

export function ProductListThumbnailSkeleton() {
  return <div className="bg-gray-200 aspect-square rounded-xl" />
}

