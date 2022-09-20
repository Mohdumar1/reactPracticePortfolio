import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Work sans', sans-serif;
}
html{
    font-size: 62.5%;
    overflow-x: hidden;
    scroll-behavior: smooth;
}
body{
    overflow-x: hidden;
}
::-webkit-scrollbar{
    width:.8rem;
}
::-webkit-scrollbar-track{
    background-color: rgb(24 24 29);

}
::-webkit-scrollbar-thumb{
    background-color: #ffffff;
    border:5px solid transparent;
    border-radius:9px;
}
h1{
    color: ${({theme}) => theme.colors.heading};
    font-size: 6rem;
    font-weight: 900;
}
h2{
    color: ${({theme}) => theme.colors.heading};
    font-size: 4.4rem;
    font-weight: 300;
    white-space:normal;
    text-align:center 
}
h3{
    font-size:1.8rem;
    font-weight:400;
}
p{
    color: ${({theme})=> theme.colors.text};
    opacity:.7;
    line-height:1.65rem;
    margin-top:1rem;
    font-weight:400;
}
a{
    text-decoration:none;
}
li{
    list-style: none;
}

.container{
    max-width:120rem;
    margin: 0  auto;
}
.grid{
    display:grid;
    gap:9rem;
}
.grid-two-col{
    grid-template-columns: repeat(2, 1fr);
}
.grid-three-col{
    grid-template-columns:repeat(3, 1fr);
}
.grid-four-col{
    grid-template-columns: 1fr 1.2fr 0.5fr 0.8fr;
}
.common-heading{
    font-size:3.8rem;
    font-weight:600;
    margin-bottom:6rem;
    text-transform:uppercase;
}
input, textarea{
    max-width:50rem;
    color: ${({theme})=>theme.colors.black};
    padding:1.6rem 2.4rem;
    border: 1px solid ${({theme})=>theme.colors.border};
    box-shadow: ${({theme})=>theme.colors.shadowSupport};
}
input[type="submit"]{
    max-width:16rem;
    margin-top:2rem;
    background-color: ${({theme})=>theme.colors.btn};
    padding:1.4rem 2.2rem;
    border-style:solid;
    border-width:.1rem;
    text-transform:uppercase;
    font-size:1.8rem;
    cursor:pointer;
}

@media (max-width: ${({theme})=> theme.media.tab}){
    .container{
        padding: 0 3rem;
    }
    .grid-three-col{
        grid-template-columns: 1fr  1fr;
      }
}

@media (max-width: ${({theme})=> theme.media.mobile}){

    html{
        font-size: 50%;
    }
    .grid{
        gap:3rem;
    }
    .grid-two-col,
    .grid-three-col,
    .grid-four-col{
        grid-template-columns:1fr;
    }
}

`