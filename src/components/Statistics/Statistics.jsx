import React from 'react'
import Header from './Header/HeaderStatistics'
import ListCards from './Body/ListCard/ListCard'
import {ContainerStatistics as Container} from './StylesStatistics'
const Statistics = () => {
    return (
        <Container>
            <Header/>
            <ListCards/>
        </Container>
    )
}

export default Statistics
