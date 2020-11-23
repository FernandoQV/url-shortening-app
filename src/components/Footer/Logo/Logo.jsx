import React from 'react'
import styled from 'styled-components'
import {Image} from '../../atoms/Atoms'
import LogoFooter from '../../../images/logo-footer.svg'
const Container=styled.div`
display:flex;
justify-content:center;
align-items:center;
padding:2rem;
`;
const Logo = () => {
    return (
        <Container>
            <Image src={LogoFooter}/>
        </Container>
    )
}

export default Logo
