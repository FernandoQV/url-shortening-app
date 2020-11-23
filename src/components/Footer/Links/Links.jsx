import React from 'react'
import Link from './Link/Link'
import {ContainerLinks} from './StylesLinks'
const Links = () => {
    const dataFeature=['Link Shortening','Branded Links','Analytics'];
    const dataResources=['Blog','Developers','Support'];
    const dataCompany=['About','Our Team','Careers','Contact'];
    return (
        <ContainerLinks>
            <Link title='Features' links={dataFeature}/>
            <Link title='Resources' links={dataResources}/>
            <Link title='Company' links={dataCompany}/>
        </ContainerLinks>
    )
}

export default Links
