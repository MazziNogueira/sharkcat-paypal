import { styled } from "styled-components"
import BuyersForm from "./components/BuyersForm"
import CostumeCard from "./components/CostumeCard"
import Header from "./components/Header"

const AppMainComponent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`

function App() {
  return (
    <AppMainComponent>
      <Header />
      <CostumeCard />
      <BuyersForm />
    </AppMainComponent>
  )
}

export default App
