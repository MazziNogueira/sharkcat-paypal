import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import MainPage from './pages/MainPage'
import ThankYouPage from './pages/ThankYouPage'

function App() {
  return (
    <PayPalScriptProvider options={{ 'clientId': process.env.REACT_APP_PAYPAL_CLIENT_ID }}>
      <MainPage />
      <ThankYouPage />
    </PayPalScriptProvider>
  )
}

export default App
