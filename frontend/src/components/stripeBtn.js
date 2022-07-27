// import React, { Fragment } from "react";
// import StripeCheckout from "react-stripe-checkout";
// import axios from "axios";

// const StripeBtn = () => {
//   const publishableKey =
//     "pk_test_51LIVpCDhPef6TX7PY8FHrpoUTd33IPPsyw5pKhP6luOa6MqcuhEv8rJpFebXhYBbkEAppnxpu3bn0AAUFszTHTkp00Ts7mUOW0";

//   const onToken = (token) => {
//     const body = { amount: 999, token: token };

//     axios
//       .post("http://localhost:5000/payment", body)
//       .then((response) => {
//         console.log(response);
//         alert("Payment Success");
//       })
//       .catch((error) => {
//         console.log("Payment Error: ", error);
//         alert("Payment Error");
//       });
//   };

//   return (
//     <StripeCheckout
//     // label="Go Premium"
//     // Component button textname="Business LLC"
//     // Modal Headerdescription="Upgrade to a premium account today." panelLabel="Go Premium"
//     // Submit button in modalamount={999}
//     //Amount in cents $9.99
//     token={onToken}
//     stripeKey={publishableKey}
//     // image="https://www.vidhub.co"
//     // Pop-in header
//     imagebillingAddress={true}
//     />
//   );
// };

// export default StripeBtn;

// import React, { Fragment } from "react";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
import Stripe from "react-stripe-checkout";

const StripeBtn = ({amount}) => {
  const totalAmount = amount;
  console.log(totalAmount)
  const handleToken = (totalAmount, token) => {
    try {
      axios.post("http://localhost:5000/api/stripe/pay", {
        token:token.id,
        amount:totalAmount
      });
      console.log('token.id' + token.id + ' totalAmount ' + totalAmount)
    } catch (error) {
      console.log("Error here");

      alert("Payment Error");
      console.log(error);
    }
  };
  const tokenHandler = (token) => {
    handleToken(totalAmount, token);
  };

  return (
    <StripeCheckout
      stripeKey="pk_test_51LIVpCDhPef6TX7PY8FHrpoUTd33IPPsyw5pKhP6luOa6MqcuhEv8rJpFebXhYBbkEAppnxpu3bn0AAUFszTHTkp00Ts7mUOW0"
      token={tokenHandler}
      amount = {totalAmount}
      name="payment"
    />
  );
};

export default StripeBtn;
