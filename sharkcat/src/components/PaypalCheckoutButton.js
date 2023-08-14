
import { PayPalButtons } from "@paypal/react-paypal-js"
import { useState } from "react"

const PaypalCheckoutButton = () => {
    const [message, setMessage] = useState(false)
    const [orderId, setOrderId] = useState('')

    const serverUrl = 'http://localhost:8888'

    const createOrder = async (data) => {
        return fetch(`${serverUrl}/my-server/create-paypal-order`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                product: {
                    description: 'Shark Fantasy For Cats',
                    cost: '30.00'
                }
            }),
        })
            .then((response) => response.json())
            .then((order) => order.id)

    }

    const onApprove = async (data) => {
        return fetch(`${serverUrl}/my-server/capture-paypal-order`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                orderID: data.orderID
            })
        })
            .then((response) => {
                const order = response.json()
                return order
            })
            .then((order) => {
                setOrderId(order.id)
                setMessage(true)
            })
    }


    return (
        <section>
            <PayPalButtons 
                style={{ color: 'gold', shape: 'pill' }}
                createOrder={(data, actions) => createOrder(data, actions)}
                onApprove={(data, actions) => onApprove(data, actions)}
            />
            {message ? <h3>Payment successful! Your order ID is {orderId}</h3> : <></>}
        </section>
    )
}

export default PaypalCheckoutButton