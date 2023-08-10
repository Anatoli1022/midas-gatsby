import React from 'react';

import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import Hero from 'components/pages/home/hero';
import StakeMidas from 'components/pages/home/stakeMidas';
import Questions from 'components/pages/home/questions';

const HomePage = () => (
  <Layout>
    <Hero />
    <StakeMidas />
    <Questions />
  </Layout>
);

export default HomePage;

/* eslint-disable-next-line react/prop-types */
export const Head = ({ location: { pathname } }) => <SEO pathname={pathname} />;
