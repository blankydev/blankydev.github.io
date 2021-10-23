import React from 'react';

import { Section, SectionText, SectionTitle, SectionDivider } from '../styles/GlobalComponents';
import Button from '../styles/GlobalComponents/Button';
import { LeftSection } from '../components/Hero/HeroStyles';
import { Layout } from '../layout/Layout';
import { NavLink } from '../components/Header/HeaderStyles';
import Link from 'next/link';
import Head from 'next/head';

const About = () => {
  return (
    <Layout>

        <Head>
            <title>Blanky Dev | Contact</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
      <Section grid id="about">

        <Section nopadding>
          <SectionTitle main>
            Contact
          </SectionTitle>
          <SectionText>
          You can send me a message in Discord for any help or business inquiries.<br/>Discord: Blanky#3517
          </SectionText>



        </Section>

      </Section>
    </Layout>
  );
};

export default About;
