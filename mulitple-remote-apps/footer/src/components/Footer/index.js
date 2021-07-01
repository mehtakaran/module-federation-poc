import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 3em 0;
  border-top: 1px solid #666;
`;

const Select = styled.select`
  line-height: 1em;
  background-color: transparent;
  border-style: none;
`;

function Footer() {
  return (
    <Wrapper>
      <section>
        {'This is a dummy app to try micro apps'}
      </section>
      <section>
        <Select>
          <option>Page 1</option>
          <option>Page 2</option>
        </Select>
      </section>
      <section>
        {'Made for poc'}
      </section>
    </Wrapper>
  );
}

export default Footer;
