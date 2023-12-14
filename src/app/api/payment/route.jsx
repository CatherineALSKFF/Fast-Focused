import Stripe from "stripe";
import { NextResponse, NextRequest } from "next/server";
import { getSession } from '@auth0/nextjs-auth0';

export async function POST(request) {

    const { user } = await getSession(request);
    const userEmail = user ? user.email : null;

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    let data = await request.json();
    let priceId = data.priceId


    // const customer = await stripe.customers.create({
    //     email: userEmail,
    //     description: 'Customer for subscription',
    // });



    // Check if a customer with the email already exists
    const existingCustomers = await stripe.customers.list({
        email: userEmail,
        limit: 1, // Set a limit to 1 as you only need to check for existence
    });

    let customer;

    if (existingCustomers.data.length > 0) {
        // Customer already exists
        customer = existingCustomers.data[0];
        console.log('Customer already exists:', customer.id);
    } else {
        // Create a new customer if not found
        customer = await stripe.customers.create({
            email: userEmail,
            description: 'Customer for subscription',
        });
        console.log('New customer created:', customer.id);
    }


    




    
    

    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price: priceId,
                quantity: 1
            }
        ],
      mode: 'subscription',
      success_url: `http://localhost:3000/myaccount`, // Include session ID in the success URL
      cancel_url: 'http://localhost:3000',
      customer_email: userEmail, 
    })








  







    return NextResponse.json(session.url)
}







































// OLD CODE
// import Stripe from "stripe";
// import { NextResponse, NextRequest } from "next/server";
// import { getSession } from '@auth0/nextjs-auth0';

// export async function POST (request) {

//     const { user } = await getSession(request);
//     const userEmail = user ? user.email : null;

//     const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
//     let data = await request.json();
//     let priceId = data.priceId
//     const session = await stripe.checkout.sessions.create({
//         line_items: [
//             {
//                 price: priceId,
//                 quantity: 1
//             }
//         ],
//       mode: 'subscription',
//       success_url: 'http://localhost:3000',
//       cancel_url: 'http://localhost:3000',
//       customer_email: userEmail, 
//     })

//     return NextResponse.json(session.url)
// }