import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
// import { SectionDivider, SectionTitle } from '../../styles/GlobalComponents';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';
const Footer = () => {
  return (
<section  nopadding id="contact">
  <SectionTitle style={{paddingLeft:"120px", paddingTop:"30px" }}>Contact</SectionTitle>
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+914842887000">+91 484 2887000</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:iedcsngist@gmail.com">
          iedcsngist@gmail.com
          </LinkItem>
        </LinkColumn>
        
        <LinkColumn>
        <img 
          style={{height: "100%", width:"100%"}} 
      src="https://startupreporter.in/wp-content/uploads/2022/07/WhatsApp-Image-2022-07-29-at-6.25.20-PM.jpeg"
      alt="new"/>
      

        </LinkColumn>

        <LinkColumn>
        <img 
          style={{height: "100%", width:"100%"}} 
      src="https://sngistasc.org/wp-content/themes/sngistasc18/assets/img/logo.jpg"
      alt="new"/>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          {/* <Slogan></Slogan> */}
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons>
          {/* <img 
          style={{height: "10%", width:"20%"}} 
      src="https://startupreporter.in/wp-content/uploads/2022/07/WhatsApp-Image-2022-07-29-at-6.25.20-PM.jpeg"
      alt="new"

      /> */}
          </SocialIcons>
          {/* <SocialIcons href="https://google.com">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://google.com">
            <AiFillInstagram size="3rem" />
          </SocialIcons> */}
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
    </section>
  );
};

export default Footer;
