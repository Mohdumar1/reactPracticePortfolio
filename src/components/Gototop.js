import React, {useEffect, useState} from 'react'
import { FaArrowAltCircleUp } from 'react-icons/fa';
import styled from 'styled-components';

const Gototop = () => {
     const [btnvisibe, setbtnvisibe] = useState(false);

    const gotobtn = () =>{
        window.scrollTo({top:0, left:0, behavior:"smooth"});
    };


    const listentoScroll=()=>{
        let hiddenHeight = 150;
        const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
        // console.log(windowScroll);

        if(windowScroll > hiddenHeight){
            setbtnvisibe(true)
        }else{
            setbtnvisibe(false)
        }
    }


    useEffect(() => {
        window.addEventListener("scroll", listentoScroll);
        return () => window.removeEventListener("scroll", listentoScroll)
    }, []);
  return (
    <Wrapper>
    {btnvisibe &&
    <div className="top-btn" onClick={gotobtn}>
    <FaArrowAltCircleUp/>
    </div>
    }
    </Wrapper>
    
  )
}

const Wrapper = styled.section`
     display:flex;
     justify-content: center;
     align-items:center;

     .top-btn{
        font-size: 2.4rem;
        width:4rem;
        height:4rem;
        color:#fff;
        background-color: ${({theme})=>theme.colors.btn};
        box-shadow: ${({theme})=> theme.colors.shadow};
        border-radius:50%;
        position:fixed;
        bottom:5rem;
        right:5rem;
        z-index:999;
        display:flex;
        justify-content:center;
        align-items:center;
        cursor:pointer;

        &--icon {
            animation: gototop 1.2s linear infinite alternative-reverse;
        }
        @keyframes gototop {
            0%{
                transform: translateY(-0.5rem);
            }
            100%{
                transform: translateY(1rem);
            }
        }
     }

 @media (max-width: ${({theme})=> theme.media.mobile}){
        .top-btn{
            left: 40%;
            right: 0;
        }
     }
`;
export default Gototop