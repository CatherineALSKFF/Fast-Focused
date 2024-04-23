import Stripe from "stripe";
import { NextResponse } from "next/server";
import { getSession } from '@auth0/nextjs-auth0';

export async function POST(request) {
    const { user } = await getSession(request);
    const userEmail = user ? user.email : null;

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    let data = await request.json();
    let priceId = data.priceId;

    // Check if a customer with the email already exists
    const existingCustomers = await stripe.customers.list({
        email: userEmail,
        limit: 1, // Set a limit to 1 as you only need to check for existence
    });

    let customer;

    if (existingCustomers.data.length > 0) {
        // Customer already exists
        customer = existingCustomers.data[0];
    } else {
        // Create a new customer if not found
        customer = await stripe.customers.create({
            email: userEmail,
            description: 'Customer for one-time payment',
        });
    }

    // Create a checkout session for a one-time payment
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [{
            price: priceId,
            quantity: 1
        }],
        mode: 'payment', // Change mode to 'payment' for one-time charges
        success_url: `https://fastingfocused.com/success?session_id={CHECKOUT_SESSION_ID}`, // Include session ID in the success URL
        cancel_url: 'https://fastingfocused.com/cancel',
        customer: customer.id, // Attach the customer ID
    });

    return NextResponse.json({ url: session.url });
}
