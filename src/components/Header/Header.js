import Link from 'next/link';
import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
        <img 
          style={{height: "75%", width:"75%"}} 
      src="https://github.com/aadhib/iedclogo/blob/main/PHOTO-2022-12-21-10-57-24-removebg-preview.png?raw=true"
      alt="new"/>
      <span style={{fontsize:"20"}}>IEDC SNGIST</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#events">
          <NavLink>Events</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#contact">
          <NavLink>Contact</NavLink>
        </Link>
      </li>        
    </Div2>
      <Div3>
        <SocialIcons href="https://youtube.com/@iedcsngist">
          <AiFillYoutube size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://facebook.com/iedcsngist">
          <AiFillFacebook size="3rem" />
        </SocialIcons>
       <SocialIcons href="https://instagram.com/iedc_sngist">
          <AiFillInstagram size="3rem"/>
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
