import styled from "styled-components";

export const Button = styled.button`
text-decoration: none;
max-width:auto;
background-color:rgb(98 84 243);
color:rgb(255 255 255);
padding:1.4rem 2.4rem;
border:none;
text-align:center;
cursor:pointer;
transition:all 0.6s ease;

    &:hover,
    &:active{
    box-shadow: ${({theme})=>theme.colors.shodowSupport};
    transform: scale(0.96);
}
a{
    text-decoration:none;
    color:rgb(255 255 255 );
    font-size:1.8rem;
}

`