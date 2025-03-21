import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
    try {
        const { price } = await req.json(); // Διαβάζουμε το JSON request body

        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    price_data: {
                        currency: "eur",
                        product_data: { name: "Payment" },
                        unit_amount: price * 100, // Μετατροπή σε cents
                    },
                    quantity: 1,
                },
            ],
            mode: "payment",
            success_url: "http://localhost:3000/confirmation",
            cancel_url: "http://localhost:3000/",
        });

        return NextResponse.json(session);
    } catch (error) {
        console.error("Stripe error:", error);
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
}
