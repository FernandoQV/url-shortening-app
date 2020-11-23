import React from 'react'
import { Container,TextBox,ButtonShorten } from './StylesShorten'
const Shorten = () => {
    return (
        <Container>
            <TextBox defaultValue='Shorten a link here'></TextBox>
            <ButtonShorten>Shorten It!</ButtonShorten>
        </Container>
    )
}

export default Shorten
