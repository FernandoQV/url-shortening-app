import styled from 'styled-components'
import getPalette from '../../helpers/getPalette'
const palette=getPalette();

export const Image=styled.img`
max-width:100%;
`;
export const Title1=styled.h1`
font-size:2rem;
font-weight:700;
color:${palette.DarkViolet};
margin-bottom:.5rem;
text-align:center;
`;
export const Paragraph=styled.p`
font-size:1rem;
font-weight:500;
color:${palette.GrayishViolet};
margin-bottom:.8rem;
text-align:center;
`;
export const Button=styled.button`
color:#fff;
background:${palette.Cyan};
font-size:1.2rem;
font-weight:500;
padding:.5rem 1.5rem;
border-radius:15px;
border:none;
cursor:pointer;
`;
