import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import OrderGroup from '../../components/orderList/OrderGroup';
import OrderPreviewInfo from '../../components/orderList/OrderPreviewInfo';

const OrderListPage = () => {
  const [orderList, setOrderList] = useState();
  const getOrderList = () => {
    axios({
      url: 'https://coding-test.snackfor.com/order-groups',
      params: {
        user: 'test@snackfor.com',
        limit: 3,
      },
    }).then((res) => setOrderList(res.data.results));
  };

  useEffect(() => {
    getOrderList();
  }, []);

  return (
    <Wrapper>
      <OrderPreviewInfo />
      <Title>주문 / 배송 조회</Title>
      {orderList?.map((el) => (
        <OrderGroup key={el.uuid} data={el} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 1rem 2rem 2rem;
`;

const Title = styled.h1`
  padding: 2rem 0.4rem 0;
  font-size: 1.4rem;
  font-weight: 600;
`;

export default OrderListPage;
