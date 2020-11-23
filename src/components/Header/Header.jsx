import React from 'react'
import Hero from './Hero/Hero'
import NavBar from './NavBar/NavBar'
import styled from 'styled-components'
const Container=styled.div`
padding:2rem;
@media screen and (min-width:560px){
    
    padding:4rem;
}
`;
const Header = () => {
    return (
        <Container>
        <NavBar/>
        <Hero/>
        </Container>
    )
}

export default Header
