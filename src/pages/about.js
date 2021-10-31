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
            <title>Blanky Dev | About</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

      <Section grid id="about">

        <Section nopadding>
          <SectionTitle main>
            About Me
          </SectionTitle>
          <SectionText>
          I am a full stack software developer. I usually work on Javascript projects and UI based scripts for FiveM Client. My favorite programming language is Javascript, but I work with other languages as well!
          </SectionText>

          <SectionDivider/>

          {/*<SectionTitle main>
            My First Steps
          </SectionTitle>
          <SectionText>
            I have been writing code since <strong>2017</strong>.My first contact with <strong>Code</strong> was when I tried to make a <strong>Discord Application</strong> with <strong>Node.js</strong>. Thereafter I just wanted to learn more things about <strong>Node.js</strong>. When I found out that <strong>Javascript</strong> has so many different <strong>libraries and frameworks</strong> it took my attention. After a lot of <strong>studying and practising</strong>, I started creating <strong>applications</strong> with no help from any guide at all. Now I am pretty sure that this is what I <strong>want</strong> to do in my <strong>life</strong>.
          </SectionText>

          <SectionDivider/>*/}

          <SectionTitle main>
          Blaze Z Community
          </SectionTitle >

          <SectionText>
            Currently I am part of a team called "Blaze Z Community". We work on FiveM Client scripts, Designs and Discord Bots as well. You can join our Discord Server by clicking <Link href='https://discord.gg/blazezcommunity'>here</Link>.
          </SectionText>


        </Section>

      </Section>
    </Layout>
  );
};

export default About;
