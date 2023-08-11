import { PayPalScriptProvider } from '@paypal/react-paypal-js'

import { styled } from "styled-components"
import BuyersForm from "./components/BuyersForm"
import CostumeCard from "./components/CostumeCard"
import Header from "./components/Header"
import PaypalCheckoutButton from "./components/PaypalCheckoutButton"

const AppMainComponent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const FormAndButtonsSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 90vw;
  margin-top: 16px;
`

function App() {
  const product = {
    description: 'Shark Costume for Cats',
    price: 30
  }

  return (
    <PayPalScriptProvider options={{ 'clientId': process.env.REACT_APP_PAYPAL_CLIENT_ID }}>
    <AppMainComponent>
      <Header />
      <CostumeCard />
      <FormAndButtonsSection>
        <BuyersForm />
        <PaypalCheckoutButton product={product}/>
      </FormAndButtonsSection>
    </AppMainComponent>
    </PayPalScriptProvider>
  )
}

export default App
