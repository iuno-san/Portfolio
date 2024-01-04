import React from 'react'
import { HeroContainer, HeroBg, Line, GitHubImg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle,SocialMediaIcons,SocialMediaIcon, ResumeButton } from './HeroStyle'
import HeroImg from '../../images/HeroImage.png'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import githubLogo from '../../images/github.png'
import linkedinLogo from '../../images/linkedin.png'

const HeroSection = () => {
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                </HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                    <div className='section__text'>
                        <p className='section__text__p1'>Hello, I'm</p>
                        <h1 className='title'>Ignacy Starczynski</h1>
                        <TextLoop>
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <div id="socials-container">
                        <a href="https://www.linkedin.com/in/ignacy-starczynski-8030b2284/" target='new'><img
                            src={linkedinLogo}
                            alt="My LinkedIn profile"
                            className='icon'
                        /></a>
                        <a href="https://github.com/iuno-san" target='new'><img
                            src={githubLogo}
                            alt="My Github profile"
                            className='icon'
                        /></a>
                        </div>
                    </div>
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">
                        <Img src={HeroImg} alt="hero-image" />
                    </HeroRightContainer>
                </HeroInnerContainer>
            </HeroContainer>
            <div className='line'></div>
        </div>
    )
}

export default HeroSection