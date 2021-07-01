import React from 'react';
import styled from 'styled-components';

const NavBar = styled.div`
  text-align: center;
`;

const HeaderLink = styled.a`
  display: inline-flex;
  padding: 0.25em 2em;
  margin: 1em;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;
  border: 2px solid #41addd;
  color: #41addd;

  &:active {
    background: #41addd;
    color: #fff;
  }
`;

function Header() {
  return (
    <div>
      <NavBar>
        <HeaderLink href="/">
          Home
        </HeaderLink>
        <HeaderLink href="/link1">
          Link 1
        </HeaderLink>
        <HeaderLink href="/link2">
          Link 2
        </HeaderLink>
        <HeaderLink href="/link3">
          Link 3
        </HeaderLink>
      </NavBar>
    </div>
  );
}

export default Header;
