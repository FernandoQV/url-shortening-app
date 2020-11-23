import styled from 'styled-components'
import BgMobile from '../../images/bg-shorten-mobile.svg'
import BgDesktop from '../../images/bg-shorten-desktop.svg'
import getPalette from '../../helpers/getPalette'
import {Button} from '../atoms/Atoms'
const palette=getPalette();
export const TextBox=styled.input.attrs({type:'text'})`
color:${palette.GrayishViolet};
padding:.5rem;
font-size:1.2rem;
cursor: pointer;
background:#fff;
border:none;
border-radius:5px;
width:100%;
:hover{
    color:${palette.Red};
    border:1px solid ${palette.Red};
}
`;
export const ButtonShorten=styled(Button)`
padding:.5rem 2rem;
width:100%;
margin-top:1rem;
`;
export const Container=styled.div`
background-image:url(${BgMobile});
background-repeat:no-repeat;
background-size:contain;
background-position:100% -25px;
background-color:hsl(257, 27%, 26%);
height: 150px;
display:flex;
flex-wrap:wrap;
justify-content:center;
align-items:center;
padding:2rem;
`;
export const SubtitleShorten=styled.h4`
color:hsl(0, 87%, 67%);
font-size:.8rem;
margin-top:.5rem;
`;