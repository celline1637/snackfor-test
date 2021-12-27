import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Nav />
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  @media screen and (min-width: 1080px) {
    max-width: 1000px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
`;

export default Layout;
