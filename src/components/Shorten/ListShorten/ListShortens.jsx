import React from 'react'
import CardShorten from '../CardShorten/CardShorten'
import { Container } from './StylesLitsShortens'
const ListShortens = (props) => {
    const Datos=props.list
    return (
        <Container>
            {
                Datos.map((dato)=>(
                    <CardShorten 
                    key={dato.id} LinkShorten={dato}>

                    </CardShorten>
                ))
            }
        </Container>
    )
}

export default ListShortens
