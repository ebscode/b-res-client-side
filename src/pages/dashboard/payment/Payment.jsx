import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import Checkoutfrom from "./Checkoutfrom";

const stripepromise = loadStripe(import.meta.env.VITE_PAYMENT);
const Payment = () => {
  return (
    <div className="mt-36">
      <h1 className="text-center font-semibold text-3xl">payment </h1>
      <div>
        <Elements stripe={stripepromise}>
          <Checkoutfrom></Checkoutfrom>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
