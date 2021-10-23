import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import Head from 'next/head';

const Home = () => {
  return (
    
    <Layout>

      <Head>
        <title>Blanky Dev | Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Section grid>
        <Hero />

      </Section>
      <Projects />
      {/*<Technologies />
      <Timeline />
      <Acomplishments />*/}
    </Layout>
  );
};

export default Home;
