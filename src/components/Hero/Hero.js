import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import Link from 'next/link';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, I am Blanky!
      </SectionTitle>
      <SectionText>
        I am a full stack software developer. I usually work on Javascript projects and UI based scripts for FiveM Client.
      </SectionText>
      <Button><Link href='/about'><a style={{color: 'white'}}>Learn More</a></Link></Button>
    </LeftSection>
  </Section>
);

export default Hero;