import React from 'react';
import Features from './components/Features';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 50px;
`;

export default () => (
  <Wrapper>
    <Features />
  </Wrapper>
);