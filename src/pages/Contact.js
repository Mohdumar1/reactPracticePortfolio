import React from 'react'
import styled from 'styled-components';

const Contact = () => {
  return (
   <Wrapper className='section'>
      <h2 className="common-heading">Contact Me</h2>
      <div className="container">
        <div className="contact-form">
          <form action='https://formspree.io/f/mgeqapry' className='contact-inputs' method='POST'>
            <input type="text" name='username' placeholder='enter your name' autoComplete='off' required  />
            <input type="email" name='email' placeholder='enter your emai' autoComplete='off' required  />
            <textArea name="message" cols="30" rows="6" autoComplete="off" required>
            </textArea>
            <input type="submit" value="Submit"/>

          </form>

        </div>
      </div>


   </Wrapper>
  )
}

const Wrapper = styled.section`

  padding: 9rem 0 5rem 0;

  container{
    margin-top:6rem;
    text-align:center;
  }
    .contact-form{
      max-width:50rem;
      margin:auto;
    }
      .contact-inputs{
        display:flex;
        flex-direction:column;
        gap:3rem;
      }
        input[type="submit"]{
          cursor:pointer;
          transition:all 0.2s;
        }
        input[type="submit"]:hover{
            background-color: ${({theme})=>theme.colors.white};
            border: 1px solid ${({theme})=>theme.colors.btn}
            color: ${({theme})=>theme.colors.btn}
            transform:scale(0.9);
    }
`;

export default Contact