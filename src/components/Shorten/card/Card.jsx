import React from 'react'
import { Container,TextBox,ButtonShorten } from './StylesCard'
const Card = () => {
    return (
        <Container>
            <TextBox defaultValue='Shorten a link here'></TextBox>
            <ButtonShorten>Shorten It!</ButtonShorten>
        </Container>
    )
}

export default Card
