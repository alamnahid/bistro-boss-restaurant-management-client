import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)
const Payment = () => {
    return (
        <div className="flex flex-col mx-[10%] justify-center h-full">

            <h1 className="text-black text-center text-[2.5rem]">PAYMENT</h1>

            <div className="mt-16">
                <Elements stripe={stripePromise}>
                    <CheckOutForm/>
                </Elements>
            </div>
            
        </div>
    );
};

export default Payment;