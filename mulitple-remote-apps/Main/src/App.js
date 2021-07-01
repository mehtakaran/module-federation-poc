import React from 'react';

const Header = React.lazy(() => import('header/HeaderApp'));
const Features = React.lazy(() => import('features/FeaturesApp'));
const Footer = React.lazy(() => import('footer/FooterApp'));

export default () => (
  <div style={{margin: '20px'}}>
    <React.Suspense fallback='Header is loading'>
      <Header />
    </React.Suspense>
    <React.Suspense fallback='Features are loading'>
      <Features />
    </React.Suspense>
    <React.Suspense fallback='Footer is loading'>
      <Footer />
    </React.Suspense>
  </div>
);