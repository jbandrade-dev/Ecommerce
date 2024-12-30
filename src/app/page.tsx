
import { Hero } from '@/components/Hero'
import { ProductList } from '@/components/ProductList'
import { getProducts } from '@/lib/products'

export default async function Page() {
  const products = await getProducts()

  return (
    <div className="mx-auto flex max-w-screen-xl flex-col gap-8 px-4">
      <Hero />
      <ProductList list={products} />
    </div>
  )
}