import { React, useState } from 'react'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HomeElements'


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
                <HeroH1> Experience Reliable Professional </HeroH1>
                <HeroP> Let us serve you </HeroP>
                <HeroBtnWrapper>
                    {/* <ButtonLink to="contact" onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                        Get In Touch {hover ? <ArrowForward /> : <ArrowRight/> }
                    </ButtonLink> */}
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default Home



