import React from 'react';
import Header from './components/Header';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 50px;
`;

export default () => (
  <Wrapper>
    <Header />
  </Wrapper>
);