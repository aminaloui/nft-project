import React from 'react';
import {
    FooterContainer,FooterWrap,FooterLinksContainer,
    FooterLinksWrapper,FooterLinkItems,FooterLink,FooterLinkTitle,SocialMedia,SocialMediaWrap,
    SocialLogo,WebsiteRights,SocialIcons,SocialIconLink} from './FooterElements';
import { FaInstagram,FaTwitter,FaDiscord } from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll';


const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    
      };

    return (
        <FooterContainer> 
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle> About us </FooterLinkTitle>
                            <FooterLink to="/wallet"> Hoe het werkt</FooterLink>
                            <FooterLink to="/wallet"> Nieuws</FooterLink>
                            <FooterLink to="/wallet"> Bedrijfsgegevens</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                        <FooterLinkTitle> About us </FooterLinkTitle>
                        <FooterLink to="/wallet"> Hoe het werkt</FooterLink>
                            <FooterLink to="/wallet"> Nieuws</FooterLink>
                            <FooterLink to="/wallet"> Bedrijfsgegevens</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle> About us </FooterLinkTitle>
                        <FooterLink to="/wallet"> Hoe het werkt</FooterLink>
                            <FooterLink to="/wallet"> Nieuws</FooterLink>
                            <FooterLink to="/wallet"> Bedrijfsgegevens</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                        <FooterLinkTitle> Social media</FooterLinkTitle>
                        <FooterLink to="/wallet"> Instagram</FooterLink>
                            <FooterLink to="/wallet"> Twitter</FooterLink>
                            <FooterLink to="/wallet"> Discord</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}>
                            NFT
                        </SocialLogo>
                            <WebsiteRights>NFT  {new Date().getFullYear()}&nbsp;
                             </WebsiteRights>
                   
                    <SocialIcons>
                        <SocialIconLink href="/" target="_blank" aria-label="Discord">
                            <FaDiscord/>
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                            <FaInstagram/>
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                            <FaTwitter/>
                        </SocialIconLink>
                    </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>

        </FooterContainer>
            
    
    )
}

export default Footer