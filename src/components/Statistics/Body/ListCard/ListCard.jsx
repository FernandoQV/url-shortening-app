import React from 'react'
import {ContainerListCards as Container} from './StylesCards'
import Data from '../../data.json'
import Card from '../Card/Card';
const ListCard = () => {
    const Datos=Data;
    return (
        <Container>
            {
                Datos.map(card=>(
                          <Card key={card.id} statistics={card}/>
                ))
            }
        </Container>
    )
}

export default ListCard
