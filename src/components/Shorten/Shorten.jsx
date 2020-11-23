import React,{useState} from 'react'
import Card from './card/Card'
import {ContainerShorten} from './StylesShorten'
import ListShorten from './ListShorten/ListShortens'
import Data from '../../Data/DataShorten.json'
const Shorten = () => {
    const [shortens, setShortens] = useState(Data);
    const addShorten=(newShorten)=>{
        let elemento={}
        elemento.id=shortens.length+1
        elemento.link=newShorten
        elemento.shorten="https://"+newShorten
        const newList=[...shortens,elemento]
         setShortens(newList)
    }

    return (
        <ContainerShorten >
            <Card addShorten={addShorten}/>
            <ListShorten list={shortens}/>
        </ContainerShorten>
    )
}

export default Shorten
