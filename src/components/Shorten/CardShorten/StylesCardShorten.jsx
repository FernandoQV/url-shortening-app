import styled from 'styled-components'
export const Container=styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:flex-start;
`;
export const UserLink=styled.h5`
color:hsl(257, 27%, 26%);
font-size:1.2rem;
font-weight:500;
padding:.5rem;
`;
export const LinkShorten=styled(UserLink)`
color:hsl(180, 66%, 49%);
`;