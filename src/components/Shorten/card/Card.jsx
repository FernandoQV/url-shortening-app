import React, { useState } from 'react'
import { Container,TextBox,ButtonShorten } from './StylesCard'
const Card = (props) => {
    const addShorten=props.addShorten;
    const [newShorten,setNewShorten]=useState("")
    const updateLink=(e)=>{
        let link=e.target.value
        setNewShorten(link)
    }
    return (
        <Container>
            <TextBox 
            onChange={updateLink}
            defaultValue='Shorten a link here' 
            ></TextBox>
            <ButtonShorten onClick={()=>addShorten(newShorten)}
            >Shorten It!
            </ButtonShorten>
        </Container>
    )
}

export default Card
