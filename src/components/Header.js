import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import styled from 'styled-components'

const Header = () => {
  return (
    <MainHeader>
        <Link to="/" >
           <img src='logo.png' className='logo' alt='logo'/>
        </Link>
        <Navbar/>
    </MainHeader>
  )
}

const MainHeader = styled.header`

  padding: 0 4.8rem;
  height:10rem;
  background-color:${({theme})=> theme.colors.bg} ;
  display:flex;
  justify-content: space-between;
  align-items:center;  
  img{
    heighr:auto;
    max-width:30%;
  }
  .logo{
  color:${({theme})=>theme.colors.heading}
  }
`;

export default Header