import express from "express";
import { createStripePaymentIntent } from "../controllers/transactionController.js";
const router = express.Router();
router.post("/stripe/payment-intent", createStripePaymentIntent);
export default router;
//# sourceMappingURL=transactionRoutes.js.map