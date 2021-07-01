import React from 'react';

const Header = React.lazy(() => import('app1/Header'));

export default () => (
  <div style={{margin: '20px'}}>
    <h1>Header app 2</h1>
    <React.Suspense fallback='Loading header'>
      <Header>Header from App 1 loaded in app 2</Header>
    </React.Suspense>
  </div>
);