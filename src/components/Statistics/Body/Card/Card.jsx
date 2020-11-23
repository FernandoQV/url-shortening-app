import React from 'react'
import {ContainerCardStatistics as Container,ContainerImage} from './StylesCard'
import {Title3,Paragraph,Image} from '../../../atoms/Atoms'
const Card = (props) => {
    const {title,image,description}=props.statistics
    return (
        <Container>
            <ContainerImage>
                <Image src={image}/>
            </ContainerImage>
            <Title3>
                {title}
            </Title3>
            <Paragraph>
                {description}
            </Paragraph>
        </Container>
    )
}

export default Card
