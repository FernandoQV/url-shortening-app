import styled from 'styled-components'
import BgMobile from '../../images/bg-boost-mobile.svg'
/* import BgDesktop from '../../images/bg-boots-desktop.svg' */
export const ContainerBoots=styled.div`
background-image:url(${BgMobile});
background-repeat:no-repeat;
background-size:cover;
background-color:hsl(257, 27%, 26%);
height: 200px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
padding:0 2rem;
`;
export const TitleBoots=styled.h2`
font-size:1.5rem;
font-weight:700;
text-align:center;
color:#fff;
margin-bottom:1rem;
`;