import styled from 'styled-components'
export const ContainerCardStatistics=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
padding:4rem 2rem 2rem;
position: relative;
background:#fff;
border-radius:15px;
`;

export const ContainerImage=styled.div`
width: 100px;
height: 100px;
border-radius:50%;
background:hsl(257, 27%, 26%);
position: absolute;
top:-50px;
left:calc(50% - 50px);
display:flex;justify-content:center;align-items:center;
`;