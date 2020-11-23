import React from 'react'
import {Image} from '../../atoms/Atoms'
import {Container} from './StylesNavBar'
import Logo from '../../../images/logo.svg'
import Hamburger from '../../../images/icon-hamburger.svg'
const NavBar = () => {
    return (
        <Container>
            <Image src={Logo}/>
            <Image src={Hamburger}/>
        </Container>
    )
}

export default NavBar
