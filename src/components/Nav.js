import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Cart } from '../assets/bag_buy_cart_market_shop_shopping_tote_icon_123191.svg';

const Nav = () => {
  return (
    <Wrapper>
      <Link to="/">
        <img
          alt="logo"
          src="https://b2b-static.snackfor.com/static/images/background-main-color.svg"
        />
      </Link>
      <Link to="/cart">
        <Cart />
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  ${({ theme }) => theme.flexSet('space-between')};
  padding: 20px;
`;

export default Nav;
