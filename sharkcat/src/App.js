import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import Header from './components/Header'
import CostumeCard from './components/CostumeCard'
import BuyersForm from './components/BuyersForm'
import PaypalCheckoutButton from './components/PaypalCheckoutButton'
import styled from 'styled-components'

const initialOptions = {
  clientId: "ARUxoknueTdb06Z36Qxnyi9SMOWgoYy6YAkGbcWaF9gMDLNhlxoAklhr82W1mNPh-WYO6h8K9XT2j9sP",
  currency: "USD",
  intent: "capture",
}

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
  return (
    <PayPalScriptProvider options={initialOptions}>
      <AppMainComponent>
            <Header />
            <CostumeCard />
            <FormAndButtonsSection>
                <BuyersForm />
                <PaypalCheckoutButton />
             </FormAndButtonsSection>
        </AppMainComponent>
    </PayPalScriptProvider>
  )
}

export default App
