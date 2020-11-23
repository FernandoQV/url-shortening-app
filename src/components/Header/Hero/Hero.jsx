import React from 'react'

import {Image,Title1,Paragraph, Button} from '../../atoms/Atoms'
import ImageHero from '../../../images/illustration-working.svg'
import {Container,ContainerText} from './StylesHero'
const Hero = (props) => {
    
    return (
        <Container>
            <div><Image src={ImageHero}/></div>
            <ContainerText>
                <Title1>More than just shorter links</Title1>
                <Paragraph>Build your brand's recognition and get detalled insights on how your links are perfonming</Paragraph>
                <Button>Get Started</Button>
            </ContainerText>
        </Container>
    )
}

export default Hero
