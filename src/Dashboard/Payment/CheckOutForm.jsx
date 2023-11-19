import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

// 1. install stripe and stripe React
// 2. create card element
// 3. create stripe acccount and get publishable key
// 4. use publisable key and use stripe to get card information and error


const CheckOutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
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
        }
        else{
            console.log('payment method', paymentMethod)
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


        </form>
    );
};

export default CheckOutForm;