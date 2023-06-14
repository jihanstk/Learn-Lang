import { useLocation } from "react-router-dom";

import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";

// import RouteTitle from "../../../Common/RouteTitle";

// TODO: provide publishable Key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
  const data = useLocation();
  console.log(data);
  //   const [cart] = useCart();
  //   const total = cart.reduce((sum, item) => sum + item.price, 0);
  //   const price = parseFloat(total.toFixed(2));
  return (
    <div>
      {/* <RouteTitle ></RouteTitle> */}
      <Elements stripe={stripePromise}>
        <CheckoutForm
          data={data?.state}
          price={data?.state?.price}
        ></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
