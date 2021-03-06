import { React, useState } from 'react'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight, MobileIcon } from './HomeElements'
import { ButtonLink } from '../ButtonElements'
import {AiOutlineDown} from 'react-icons/ai' 

const Home = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
       <HeroContainer id="home">
            <HeroBg>
                <VideoBg  autoPlay={true} loop={true} controls={false} playsInline muted  src="https://reys-portfolio.s3.us-east-2.amazonaws.com/Truck-Intro.mp4" type="video/mp4" ></VideoBg>
            </HeroBg>
            <HeroContent>
                <HeroH1> Experienced Reliable Professional </HeroH1>
                <HeroP> Let us serve you </HeroP>
                <HeroBtnWrapper>
                    <ButtonLink to="contact" onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                        Contact Us
                    </ButtonLink>
                    <MobileIcon>
                        <AiOutlineDown color="white"/>
                        <AiOutlineDown color="white"/>
                        <AiOutlineDown color="white"/>
                    </MobileIcon>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default Home



// Button with arrow on it

{/* <ButtonLink to="contact" onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
    Contact Us{hover ? <ArrowForward /> : <ArrowRight/> }
</ButtonLink> */}