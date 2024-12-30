import { redirect } from 'next/navigation'
import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function createCheckoutSession({ priceId }: { priceId: string }) {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: 'http://localhost:3000',
  })

  redirect(session.url!)
}

