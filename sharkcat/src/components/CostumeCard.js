import styled from 'styled-components'
import catshark from '../media/catshark.jpg'

const MainStyledComponent = styled.main`
    display: flex;
    flex-direction: row;
`

const ImageComponent = styled.img`
    max-height: 300px;
    max-width: 300px;
`

const InfoSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const CostumeCard = () => {
    return (
        <MainStyledComponent>
            <section>
                <ImageComponent src={catshark} alt='Cat wearing a shark costume.'/>
            </section>
            <InfoSection>
                <p><strong>Name: </strong>Shark Costume for Cats</p>
                <p><strong>Item Number: </strong> 654464</p>
                <p><strong>Price: </strong> U$30.00</p>
            </InfoSection>

        </MainStyledComponent>
    )
}

export default CostumeCard