import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import useAxiossecure, { axiosSecure } from "../../../hooks/useAxiossecure";
import { useEffect } from "react";
import usecart from "../../../hooks/usecart";
import { useContext } from "react";
import { authcontext } from "../../../provider/Authprovider";
import Swal from "sweetalert2";

const Checkoutfrom = () => {
  const { user } = useContext(authcontext);
  const [clientSecret, setClientSecret] = useState("");
  const [error, seterror] = useState("");
  const [transectionid, settransectionid] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiousecure = useAxiossecure();
  const [cart,refetch] = usecart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  useEffect(() => {
    if (totalPrice > 0) {
      axiousecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiousecure, totalPrice]);

  const handlesubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("payment error", error);
    } else {
      console.log("payment method", paymentMethod);
    }

    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("confirm error");
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status == "succeeded") {
        console.log(paymentIntent.id);
        settransectionid(paymentIntent.id);
        const payment = {
          email: user.email,
          transectionid:paymentIntent.id,
          price: totalPrice,
          date: new Date(),
          cartIds: cart.map((item) => item._id),
          menuIds: cart.map((item) => item.menuId),
          status:'pending'
        };
        const res= await  axiosSecure.post('/payment',payment)
        console.log('payment saved',res.data)
        refetch()
        Swal.fire({
          icon:'success',
          timer:1200,
          title:'success'
        })
      }
    }
  };
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-sm btn-success mt-7"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
        <p className="text-red-700">{error}</p>
        {transectionid && (
          <p className="text-green-600">
            {" "}
            your transsection id {transectionid}
          </p>
        )}
      </form>
    </div>
  );
};

export default Checkoutfrom;
