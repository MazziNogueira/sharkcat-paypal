import BuyersForm from "../components/BuyersForm"
import CostumeCard from "../components/CostumeCard"
import Header from "../components/Header"
import PaypalCheckoutButton from "../components/PaypalCheckoutButton"
import styled from 'styled-components'

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

const MainPage = () => {
    const product = {
        description: 'Shark Costume for Cats',
        price: 30
    }

    return (
        <AppMainComponent>
            <Header />
            <CostumeCard />
            <FormAndButtonsSection>
                <BuyersForm />
                <PaypalCheckoutButton product={product} />
            </FormAndButtonsSection>
        </AppMainComponent>

    )
}

export default MainPage