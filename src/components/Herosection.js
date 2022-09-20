import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from './Button';


const Herosection = (props) => {
  return (
   <>
   <Wrapper>
    <div className="container grid grid-two-col">
        <div className="section-hero-data">
            <p className='hero-top-data'>This is me</p>
            <h1 className='hero-heading'>{props.name}</h1>
            <p className='hero-para'>{props.para}</p>
             <Button className='btn contact-btn'>
               <Link to="/contact">Contact Me</Link>
              </Button>
        </div>
        <div className="section-hero-img">
            <picture>
                <img src={props.img} className='hero-img' alt="hero img" />
            </picture>
        </div>
    </div>
   </Wrapper>
   </>
  )
}

const Wrapper = styled.section`
    padding: 9rem 0;

    .section-hero-data{
        display:flex;
        flex-direction:column;
        justify-content:center;
    }

    .btn{
        max-width:16rem;
    }

    .hero-top-data{
        text-trasform:uppercase;
        font-weight:500;
        font-size:1.5rem
        color: ${({theme})=>theme.colors.helper}
    }

    .hero-heading{
        text-transform:uppercase;
        font-size:6.4rem;
    }

    .hero-para{
        margin-top:1.5rem;
        margin-bottom:3.4rem;
        max-width:60rem;
        font-size:1.7rem;
        line-height:2.7rem

    }
    .section-hero-img{
        display:flex;
        justify-content:center;
        align-items:center;
    }

    picture{
        text-align:center;
    }

    .hero-img{
        max-width:80%;
    }

    @media (max-width: ${({theme})=> theme.media.mobile}){
        grid{
            gap:4.2rem;
        }
    }
`;

export default Herosection