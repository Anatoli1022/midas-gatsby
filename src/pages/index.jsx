import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import Hero from 'components/pages/home/hero';
import TokenMetrics from 'components/pages/home/tokenMetrics';
import StakeMidas from 'components/pages/home/stakeMidas';
import MidasToken from 'components/pages/home/midasToken';
import Support from 'components/pages/home/support';
import BuyMidas from 'components/pages/home/buyMidas';
import Questions from 'components/pages/home/questions';

const HomePage = () => (
  <ParallaxProvider>
    <Layout>
      <Hero />
      <TokenMetrics />
      <StakeMidas />
      <MidasToken />
      <Support />
      <BuyMidas />
      <Questions />
    </Layout>
  </ParallaxProvider>
);

export default HomePage;

/* eslint-disable-next-line react/prop-types */
export const Head = ({ location: { pathname } }) => <SEO pathname={pathname} />;
