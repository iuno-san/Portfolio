import React from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, CVButton, ButtonContainer, MobileIcon, MobileMenu, MobileNavLogo, MobileLink, ModalBackground, ModalContent, ModalHeader, ModalTitle, ModalCloseButton, ModalBody, ModalButton } from './NavbarStyledComponent'
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { Close, CloseRounded } from '@mui/icons-material';
import { useTheme } from 'styled-components';
import AnimatedText from '../Navbar/AnimatedText';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isCVModalOpen, setCVModalOpen] = React.useState(false);
  const downloadCV = (version) => {
    const link = version === 'pl' ? Bio.resume : Bio.resumeEn;
    window.open(link, '_blank');
    setCVModalOpen(false); // Zamknij modal po pobraniu
  };
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
          <CVButton onClick={() => setCVModalOpen(true)}>Download CV</CVButton>
        </ButtonContainer>
        {isCVModalOpen && (
        <ModalBackground onClick={() => setCVModalOpen(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <ModalTitle>Select CV version</ModalTitle>
              <ModalCloseButton onClick={() => setCVModalOpen(false)}>&times;</ModalCloseButton>
            </ModalHeader>
            <ModalBody>
              <ModalButton onClick={() => window.open(Bio.resume, '_blank')}>Polish </ModalButton>
              <ModalButton onClick={() => window.open(Bio.resumeEn, '_blank')}>English</ModalButton>
            </ModalBody>
          </ModalContent>
        </ModalBackground>
      )}
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
            <CVButton onClick={() => { setCVModalOpen(true); setIsOpen(false);}} style={{padding: '10px 16px',background: `${theme.text_primary}`, color: 'white',width: 'max-content'}}>Download CV</CVButton>
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar