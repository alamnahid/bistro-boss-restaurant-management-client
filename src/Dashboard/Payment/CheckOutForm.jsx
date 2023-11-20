import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import usecart from "../../Hooks/usecart";
import useAuth from "../../Hooks/useAuth";

// 1. install stripe and stripe React
// 2. create card element
// 3. create stripe acccount and get publishable key
// 4. use publisable key and use stripe to get card information and error
// 5. create payment intent post on the server. and return client secret. install stripe on the server side and get client secret. make sure you used the payment method types: ['card']
// 6. from client side get the client secret and save it
// 7. use confirm card payment and pass user information, card and client secret
// 8. display transaction id


const CheckOutForm = () => {
  const [error, setError] = useState('');
  const [clientSecret, setClientSecret] = useState('')
  const [transactionId, setTransactionId] = useState('')
  const {user} = useAuth();
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure()
    const [cart] = usecart();
    const totalPrice = cart.reduce((total, item)=>total + item.price, 0)

    useEffect(()=>{
      axiosSecure.post('/create-payment-intent', {price: totalPrice})
      .then(res=>{
        console.log(res.data.clientSecret)
        setClientSecret(res.data.clientSecret)
      })
    }, [axiosSecure, totalPrice])



    const handleSubmit = async (event)=>{
        event.preventDefault();
        if(!stripe || !elements){
            return;
        }
        const card = elements.getElement(CardElement)

        if(card === null){
            return;
        }
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if(error){
            console.log('payment error', error)
            setError(error.message)
        }
        else{
            console.log('payment method', paymentMethod)
            setError('')
        }

        // confirm payment
        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: card,
            billing_details: {
              email: user?.email || 'anonymous',
              name: user?.displayName || 'anonymous'
            }

          }
        })
        if(confirmError){
          console.log('confirm error')
        }
        else{
          console.log('payment intent', paymentIntent)
          if(paymentIntent.status==='succeeded'){
            console.log('transaction id', paymentIntent.id);
            setTransactionId(paymentIntent.id)
          }
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
      <p className="text-red-700">{error}</p>
      {
        transactionId && <p className="text-green-500">Your transaction ID: {transactionId}</p>
      }


        </form>
    );
};

export default CheckOutForm;