// import stripe from "stripe";
// const stripeFunc=stripe(process.env.STRIPE_SECRET_KEY)
// // const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
// import { v4 as uuidv4 } from 'uuid';

// const stripeChargeCallback = (res) => (stripeErr, stripeRes) => {
//   if (stripeErr) {
//       console.log("Here is the error ")
//     res.status(500).send({ error: stripeErr });
//   } else {
//     res.status(200).send({ success: stripeRes });
//   }
// };

// const paymentApi = (app) => {
//   app.get("/", (req, res) => {
//     res.send({
//       message: "Hello Stripe checkout server!",
//       timestamp: new Date().toISOString(),
//     });
//   });

//   app.post("/", (req, res) => {
//     const body = {
//       source: req.body.token.id,
//       amount: req.body.amount,
//       currency: "usd",
//     };
//     stripeFunc.charges.create(body, stripeChargeCallback(res));
//   });

//   return app;
// };

// export default paymentApi;

// -------------------------------------------------------//
// import express from "express";
// import paymentApi from "../controllers/paymentController.js";
// import { protect } from "../middleware/authMiddleware.js";

// const router = express.Router();

// router.route("/api/payment" , paymentApi);

// export default router;

// --------------------------------------------------------------
// import express from "express";
import { getPaymentResponse, payAmount } from "../controllers/paymentController.js";
// import { protect } from "../middleware/authMiddleware.js";

import express from "express";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// const router = express.Router();

// router.get("/", getPaymentResponse);
// router.post("/pay", payAmount);

router.route("/").get(getPaymentResponse);
router.route("/pay").post(payAmount);


export default router;
