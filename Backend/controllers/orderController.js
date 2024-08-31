import dotenv from 'dotenv';
dotenv.config();

import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";

// Log the Stripe secret key to ensure it's set correctly (REMOVE in production)
console.log("Stripe Secret Key:", process.env.STRIPE_SECRET_KEY);

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const placeOrder = async (req, res) => {
  const frontend_url = "http://localhost:5173/";

  try {
    const { userId, items, amount, address, paymentMethod } = req.body;

    // Log request body for debugging
    console.log("Place Order Request Body:", { userId, items, amount, address, paymentMethod });

    // Create a new order
    const newOrder = new orderModel({
      userId,
      items,
      amount,
      address,
      paymentMethod, // Add payment method to the order
      paymentStatus: paymentMethod === 'cod' ? 'pending' : 'paid', // Set payment status based on payment method
    });
    await newOrder.save();

    // Clear user's cart
    await userModel.findByIdAndUpdate(userId, { cartData: {} });

    if (paymentMethod === 'stripe') {
      // Prepare line items for Stripe
      const line_items = items.map((item) => ({
        price_data: {
          currency: "INR",
          product_data: {
            name: item.name,
          },
          unit_amount: item.price * 100 * 83, // Ensure this conversion factor is correct
        },
        quantity: item.quantity,
      }));

      line_items.push({
        price_data: {
          currency: "INR",
          product_data: {
            name: "Delivery Charges",
          },
          unit_amount: 2 * 100 * 83, // Ensure this conversion factor is correct
        },
        quantity: 1,
      });

      // Log line items for debugging
      console.log("Stripe Line Items:", line_items);

      // Create a Stripe checkout session
      const session = await stripe.checkout.sessions.create({
        line_items: line_items,
        mode: 'payment',
        success_url: `${frontend_url}/verify?success=true&order_id=${newOrder._id}`,
        cancel_url: `${frontend_url}/verify?success=false&order_id=${newOrder._id}`,
      });

      // Log session URL for debugging
      console.log("Stripe Checkout Session URL:", session.url);

      res.json({ success: true, success_url: session.url });
    } else if (paymentMethod === 'cod') {
      // For COD, simply confirm order placement
      res.json({ success: true, message: 'Order placed successfully. Thank you for choosing Cash on Delivery!' });
    } else {
      res.status(400).json({ success: false, message: 'Invalid payment method' });
    }
  } catch (error) {
    console.error("Error placing order:", {
      message: error.message,
      stack: error.stack,
      requestBody: req.body,
    });
    res.json({ success: false, message: "Error placing order" });
  }
};

const verifyOrder = async (req, res) => {
  const { orderId, success } = req.body;

  try {
    // Log incoming request data
    console.log("Verify Order Request:", { orderId, success });

    if (success === "true") {
      await orderModel.findByIdAndUpdate(orderId, { paymentStatus: 'paid' }); // Update paymentStatus for successful payment
      res.json({ success: true, message: "Paid" });
    } else {
      await orderModel.findByIdAndDelete(orderId);
      res.json({ success: false, message: "Not Paid" });
    }
  } catch (error) {
    // Detailed error logging
    console.error("Error verifying order:", {
      message: error.message,
      stack: error.stack,
      requestBody: req.body,
    });
    res.json({ success: false, message: "Error verifying order" });
  }
};

export { placeOrder, verifyOrder };
