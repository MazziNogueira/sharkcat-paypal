import { styled } from "styled-components"

const HeaderStyledComponent = styled.header`
    text-align: center;
`

const Header = () => {

    return (
        <HeaderStyledComponent>
            <h1>
                Shark Cat
            </h1>
            <h2>
                Your feline's favorite costume!
            </h2>
        </HeaderStyledComponent>
    )
}

export default Header