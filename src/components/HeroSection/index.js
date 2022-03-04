import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import {Button} from '../ButtonElements'

import {HeroContainer,HeroBg,VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements'


const HeroSection = () => {
    const [hover,setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);

    }
     

    return (
        <HeroContainer id='Home'>
            <HeroBg>
            <div dangerouslySetInnerHTML={{ __html: ``}}></div>
                <VideoBg autoPlay loop muted playsinline src={Video} type='video/mp4' />

            </HeroBg>

            
            <HeroContent>

           
                <HeroH1>
                    COLD CARS
                </HeroH1>
                <HeroP>
                    Plaats hier je tekst.

                </HeroP>
                <HeroBtnWrapper>
                    <Button to='wallet' onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true"  >
                        Start Miting {hover ? <ArrowForward/> : <ArrowRight
                        />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;
