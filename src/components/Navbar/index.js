import React from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, CVButton, ButtonContainer, MobileIcon, MobileMenu, MobileNavLogo, MobileLink } from './NavbarStyledComponent'
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { Close, CloseRounded } from '@mui/icons-material';
import { useTheme } from 'styled-components';
import AnimatedText from '../Navbar/AnimatedText';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme()
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: "#1C1C27", marginBottom: '20;', cursor: 'pointer' }}>
            <Span><AnimatedText /></Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </MobileIcon>
        <NavItems className='custom'>
          <NavLink href="#about">About</NavLink>
          <NavLink href='#skills'>Technology</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#contact'>Contact</NavLink>
        </NavItems>
        <ButtonContainer>
          <CVButton href={Bio.resume} target="_blank">Download CV</CVButton>
        </ButtonContainer>
        {
          isOpen &&
          <MobileMenu isOpen={isOpen} className='custom'>
            <MobileLink href="#about" onClick={() => {
              setIsOpen(!isOpen)
            }}>About</MobileLink>
            <MobileLink href='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>Technology</MobileLink>
            <MobileLink href='#experience' onClick={() => {
              setIsOpen(!isOpen)
            }}>Experience</MobileLink>
            <MobileLink href='#projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>Projects</MobileLink>
            <MobileLink href='#contact' onClick={() => {
              setIsOpen(!isOpen)
            }}>Contact</MobileLink>
            <CVButton style={{padding: '10px 16px',background: `${theme.text_primary}`, color: 'white',width: 'max-content'}} href={Bio.resume} target="_blank">Download CV</CVButton>
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar