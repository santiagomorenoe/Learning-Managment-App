import Stripe from "stripe";
import type { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error("STRIPE_SECRET_KEY is not set");
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const createStripePaymentIntent = async (req: Request, res: Response): Promise<void> => {
    let { amount } = req.body;

    if (!amount || amount <= 0) {
        amount = 50;
    }

    try {

        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            curreny: "mxn",
            automatic_payment_methods: {
                enabled: true,
                allow_redirects: "never",
            },
        })

        res.json({
            message: paymentIntent.client_secret,
            data: {
                clientSecret: paymentIntent.client_secret,
            }

        })


    } catch (error) {


        console.error("Error creating Stripe payment intent:", error);
        res.status(500).json({
            message: "Error creating Stripe payment intent",
            error: (error as Error).message,
        });
    }
}