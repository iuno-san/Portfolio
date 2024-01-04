import React from 'react'
import styled from 'styled-components'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Snackbar } from '@mui/material';
import mailLogoImg from '../../images/email.png'
import phoneLogoImg from '../../images/phone.png'

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
@media (max-width: 960px) {
    padding: 0px;
}
background: ${({ theme }) => theme.white};
`

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1350px;
padding: 0px 1rem 80px 1rem;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`

const Title = styled.div`
font-size: 3rem;
text-align: center;
font-weight: 600;
  color: ${({ theme }) => theme.dark};
  @media (max-width: 768px) {
      font-size: 32px;
  }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    margin-top: 60px;
    color: ${({ theme }) => theme.dark};
    @media (max-width: 768px) {
        margin-top: 30px;
        font-size: 16px;
        padding: 0 1rem;
    }
`;




const Contact = () => {

  //hooks
  const [open, setOpen] = React.useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_tox7kqs', 'template_nv7k7mj', form.current, 'SybVGsYS52j2TfLbi')
      .then((result) => {
        setOpen(true);
        form.current.reset();
      }, (error) => {
        console.log(error.text);
      });
  }



  return (
    <Container id="contact">
      <div className='line'></div>
      <Wrapper>
        <Desc>Get in Touch</Desc>
        <Title>Contact Me</Title>
        <div className='contact-info-upper-container'>
        <div className='contact-info-container custom'>
          <img
            src={mailLogoImg}
            alt="Email icon"
            className='icon contact-icon email-icon'
          />
          <p><a href="mailto:ignacysan27@gmail.com">ignacysan27@gmail.com</a></p>
        </div>
        <div className='contact-info-container custom'>
          <img
            src={phoneLogoImg}
            alt="Phone icon"
            className='icon contact-icon'
          />
          <p><a href="tel:+506219780">+48 | 506219780</a></p>
        </div>
      </div>
      </Wrapper>
    </Container>
  )
}

export default Contact