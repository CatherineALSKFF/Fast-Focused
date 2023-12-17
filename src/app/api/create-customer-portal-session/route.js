import Stripe from "stripe";
import { NextResponse, NextRequest } from "next/server";
import { getSession } from '@auth0/nextjs-auth0';


export async function POST(request) {
    const { user } = await getSession(request);
    const userEmail = user ? user.email : null;


    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

   

    // Check if a customer with the email already exists
    const existingCustomers = await stripe.customers.list({
        email: userEmail,
        limit: 1,
    });

    let customerId;

    if (existingCustomers.data.length > 0) {
        // Customer already exists
        customerId = existingCustomers.data[0].id;
        console.log('Customer found with ID:', customerId);
    } else {
        console.log('No customer found with the email:', userEmail);
        // Handle the case where no customer is found if needed
        // For example, you might want to create a new customer here
    }

    // Use the customer ID to create a billing portal session
    const session = await stripe.billingPortal.sessions.create({
        customer: customerId,
        return_url: 'http://localhost:3000',
    });

    // Redirect the user to the billing portal URL
    // return NextResponse.redirect(session.url, { status: 303 });
    return new Response(JSON.stringify({ url: session.url }), {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        }
    });
  
}





