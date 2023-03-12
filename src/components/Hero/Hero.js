import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import Link from 'next/link';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          SNGIST IEDC
        </SectionTitle>
        <SectionText>
        The purpose of IEDC is to inculcate a culture of innovation driven entrepreneurship through student projects and ideas.
        </SectionText>
        <Link href="#about">
          {/* <NavLink>About</NavLink> */}
        <Button>Learn More</Button>
        </Link>
      </LeftSection>
    </Section>
  </>
);

export default Hero;