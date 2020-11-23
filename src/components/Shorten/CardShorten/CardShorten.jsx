import React from 'react'
import { Button } from '../../atoms/Atoms'
import {UserLink,LinkShorten,Container} from './StylesCardShorten'
const CardShorten = (props) => {
    const {link,shorten}=props.LinkShorten
    return (
        <Container>
            <UserLink>
                {link}
            </UserLink>
            <hr style={{height:'2px'}}/>
            <LinkShorten>
                {shorten}
            </LinkShorten>
            <Button>Copy</Button>
        </Container>
    )
}

export default CardShorten
