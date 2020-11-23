import React from 'react'
import {SubTitle3} from '../../../atoms/Atoms'
import {ContainerLink as Container,TitleLink} from './StylesLink'

const Link = (props) => {
    const title=props.title;
    const links=props.links;

    return (
        <Container>
            <TitleLink>
                {title}
            </TitleLink>
            {
                links.map(link=>(
                    <SubTitle3 key={link}>
                            {link}
                    </SubTitle3>
                ))
            }
        </Container>
    )
}

export default Link
