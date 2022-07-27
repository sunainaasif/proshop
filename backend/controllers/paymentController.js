// import stripe from "stripe";
// const stripeFunc=stripe(process.env.STRIPE_SECRET_KEY)
// // const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

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
// ----------------------------------------------------

import Stripe from "stripe";
import dotenv from 'dotenv'
dotenv.config();
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
import { v4 as uuidv4 } from "uuid";
// const router = express.Router();

const getPaymentResponse =
  ("/",
  (req, res) => {
    console.log(req.body);
    console.log("HIIIIIII");

    console.log("GET response from researcher");
    res.json({ message: "It works" });
  });

const payAmount =
  ("/pay",
  (req, res) => {
    const { token, amount } = req.body;
    console.log(req.body)
    //   console.log('/pay req.body ' + req.body);
    //   console.log('/pay req.body token and totalPrice' + token + ' and ' + amount );

    // res.json({ message: "/pay worked" });

    //   const { token, amount } = req.body;
    const idempotencyKey = uuidv4();

    return stripe.customers.create({
        // email: token.email,
        source: token,
  //       email: 'customer@example.com',
  // source: req.body.stripeToken,
      })
      .then( customer => {
        stripe.charges.create(
          {
            amount: amount * 100,
            currency: "usd",
            customer: customer.id,
            //   receipt_email: token.email,
          }
          ,
          { idempotencyKey }
        );
      })
      .then((result) => res.status(200).json(result))
      .catch((err) => {
        console.log("Payment Controller Error : " + err);
        console.error(err)
      });
  });

// test
// const payAmount = ('/pay' , async(req,res)=>{
//   const { token, amount } = req.body;
//  const session = await stripe.checkout.sessions.create({
//       line_items: [
//         {
//           // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
//            price: amount,
//           quantity: 1,
//         },
//       ],
//       mode: 'payment',
//       success_url: `http://localhost:3000/success.html`,
//       cancel_url: `http://localhost:3000/cancel.html`,
//     });
  
//     res.redirect(303, session.url);


  


// })
export { getPaymentResponse, payAmount };

