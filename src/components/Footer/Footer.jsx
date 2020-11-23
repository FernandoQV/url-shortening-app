import React from 'react'
import styled from 'styled-components'
import Links from './Links/Links';
import Logo from './Logo/Logo'
import Redes from './Redes/Redes';
const Container=styled.div`
display:flex;
flex-direction:column;
align-items:center;
background:hsl(255, 11%, 22%);
padding:2rem;
@media screen and (min-width:560px){
    display:grid;
    grid-template-columns:1fr 3fr 1fr;
    gap:2rem;
}
`;
const Footer = () => {
    return (
        <Container>
            <Logo/>
            <Links/>
            <Redes/>
        </Container>
    )
}

export default Footer
