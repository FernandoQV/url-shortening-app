import React from 'react'
import styled from 'styled-components';
import IconFacebook from '../../../images/icon-facebook.svg'
import IconPinterest from '../../../images/icon-pinterest.svg'
import IconTwitter from '../../../images/icon-twitter.svg'
import IconInstagram from '../../../images/icon-instagram.svg'
import { Image } from '../../atoms/Atoms';
const Container=styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
padding:2rem;
`;
const Redes = () => {
    return (
        <Container>
            <Image src={IconFacebook}/>
            <Image src={IconPinterest}/>
            <Image src={IconTwitter}/>
            <Image src={IconInstagram}/>
        </Container>
    )
}

export default Redes
