import React from 'react';

import { Section, SectionText, SectionTitle, SectionDivider } from '../styles/GlobalComponents';
import Button from '../styles/GlobalComponents/Button';
import { LeftSection } from '../components/Hero/HeroStyles';
import { Layout } from '../layout/Layout';
import { NavLink } from '../components/Header/HeaderStyles';
import Link from 'next/link';
import Head from 'next/head';

const Medusa = () => {
  return (
    <Layout>

        <Head>
            <title>Blanky Dev | Project Medusa</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
      <Section grid id="about">

        <Section nopadding>
          <SectionTitle main>
            Project Medusa
          </SectionTitle>
          <SectionText>
            Project Medusa is currently under development. Stay tuned for more information that will be published here!          
          </SectionText>



        </Section>

      </Section>
    </Layout>
  );
};

export default Medusa;
