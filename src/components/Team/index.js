import React from 'react'
import Icon1 from '../../images/cars.gif'
import Icon2 from '../../images/cars.gif'
import Icon3 from '../../images/cars.gif'
import {TeamContainer,TeamH1,TeamH2,TeamWrapper,TeamCard,TeamIcon,TeamP} from './TeamElements';
const Team = () => {
    return (
       <TeamContainer id="team">
           <TeamH1>Our Team</TeamH1>
               <TeamWrapper>
                   <TeamCard>
                       <TeamIcon src={Icon1}/>
                       <TeamH2> CEO</TeamH2>
                       <TeamP>Lorem Ipsum is simply dummy. Lorem Ipsum has been the 

                       </TeamP>

                   </TeamCard>
                   <TeamCard>
                       <TeamIcon src={Icon2}/>
                       <TeamH2> Designer </TeamH2>
                       <TeamP>Lorem Ipsum is sim 
                           Lorem Ipsum has been the industry's</TeamP>
                       
                   </TeamCard>
                   <TeamCard>
                       <TeamIcon src={Icon3}/>
                       <TeamH2> Developer</TeamH2>
                       <TeamP>Lorem Ipsum is simply dummy text of the printing and industry.
                            </TeamP>
                       
                   </TeamCard>
                   
               </TeamWrapper>
               
           
       </TeamContainer>
    )
}

export default Team
