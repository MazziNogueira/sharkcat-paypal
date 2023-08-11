import { styled } from "styled-components"
import BuyersForm from "./components/BuyersForm"
import CostumeCard from "./components/CostumeCard"
import Header from "./components/Header"
import PaypalButtons from "./components/PaypalButtons"

const AppMainComponent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const FormAndButtonsSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid red;
`

function App() {
  return (
    <AppMainComponent>
      <Header />
      <CostumeCard />
      <FormAndButtonsSection>
        <BuyersForm />
        <PaypalButtons />
      </FormAndButtonsSection>
    </AppMainComponent>
  )
}

export default App
