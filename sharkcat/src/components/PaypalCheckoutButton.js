
import { PayPalButtons } from "@paypal/react-paypal-js"
import { useState } from "react"

const PaypalCheckoutButton = (props) => {
    const [ paidFor, setPaidFor ] = useState(false)
    const [ error, setError ] = useState(null)

    const { product } = props

    const handleApprove = (orderId) => {
        //call backend function to fullfill the order
        // if the response is succesfull
        setPaidFor(true)

        // refresh user's account or subscription status


        // if the response is error
        // setError('Your payment was processed successfully. However, we are unable to fulfill your purchase. Please contact us at support@designcode.io for assistance.")
    }

    if(paidFor){
        // display success message, modal or redirect the user to the success page

        // alert('Thank you for your purchase!')
    }

    if(error){
        // display error message, modal or redirect the user to the error page
        // alert(error)
    }

    return (
        <section>
            <PayPalButtons style={{ color: 'gold', shape:'pill'}} 
            
            onClick={(data, actions) => {
                // validate on button click, client or server side
                const hasAlreadyBoughtCourse = false

                if(hasAlreadyBoughtCourse) {
                    setError('You alreday bought this course. Go to your account to view yous list of courses')

                    return actions.reject()
                } else {
                    return actions.resolve()
                }
            }}

            createOrder={(data, actions) => {
                return actions.order.create({
                    purchase_units: [
                        {
                            description: product.description,
                            amount: {
                                value: product.price
                            }
                        }
                    ]
                })
            }}
        onApprove={ async(data, actions) => {
            const order = await actions.order.capture()
            console.log('order', order)

            handleApprove(data.orderID)
        }}

        onCancel={() => {
            // display cancel message, modal or redirect the user to cancel page or back to cart
        }}

        onError={(err) => {
            setError(err)
            console.log('Paypal error', err)
        }}
        
        />
        </section>
    )
}

export default PaypalCheckoutButton