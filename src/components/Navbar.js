import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { CgFormatJustify, CgCloseR  } from "react-icons/cg";


const Navbar = () => {

  const [open, setopen] = useState(false);

  return (
   <Nav>
    <div className={open ? "menu-icon active" : "menu-icon"}>
      <ul className="navbar-list">
        <li>
          <Link className='navlink' onClick={()=> setopen(false)} to="/">Home</Link>
        </li>
        <li>
          <Link className='navlink' onClick={()=> setopen(false)} to="/about">About</Link>
        </li>
        <li>
          <Link className='navlink' onClick={()=> setopen(false)} to="/services">Services</Link>
        </li>
        <li>
          <Link className='navlink' onClick={()=> setopen(false)} to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="mobile-navbar-btns">
        <CgFormatJustify className='menu-btn mobile-nav-icon' onClick={()=> setopen(true)}/>
        <CgCloseR className='close-btn mobile-nav-icon' onClick={()=> setopen(false)}/>
      </div>
    </div>
   </Nav>
  )
}

const Nav = styled.nav`
  .navbar-list{
    list-style:none;
    display:flex;
    gap:4.6rem;
    
    .navlink{
      &:link,
      &:visited{
        display:inline-block;
        text-decoration:none;
        font-size:1.8rem;
        text-transformation:uppercase;
        color:${({theme})=>theme.colors.black};
        transition:color 0.3s linear;
      }
      &:hover,
      &:active{
        color:${({theme})=>theme.colors.helper}
      }
    }
  }
  .mobile-navbar-btns{
    display:none;
  }

  .close-btn{
    display:none;
  }

  @media (max-width: ${({theme})=>theme.media.mobile}) {
    .mobile-navbar-btns{
      display:inline-block;
      z-index:1000;
      border: ${({theme})=> theme.colors.black};

      .mobile-nav-icon{
        font-size: 4rem;
        color: ${({theme})=> theme.colors.black}
      }

    }

    .navbar-list{
      width: 100vw;
      height: 100vh;
      position: absolute;
      top:0;
      left:0;
      
      background-color: #fff;
      
      display:flex;
      justify-content: center;
      align-content: center;
      flex-direction: column;
      text-align: center;

      transform: translateX(100%)
    }

    .navbar-list .navlink{
      &:link,
      &:visited{
        font-size:3rem;
      }
      &:hover,
      &:active{
        color:${({theme})=>theme.colors.helper}
      }
    }

    .active .mobile-nav-icon{
      display: none;
      font-size: 3rem;
      position: absolute;
      right: 10%;
      color: ${({theme})=> theme.colors.black};
      z-index: 9999;
    }

    .active .close-btn{
      display: block;
    }

    .active .navbar-list{
      visibility: visible;
      opacity:1;
      transform: translateX(0);
      z-index: 999;
    }
  }
`;



export default Navbar;