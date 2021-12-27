import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import OrderItemCard from './OrderItemCard';
import Button from '../Button';

const OrderGroup = ({ data }) => {
  const [list, setList] = useState();
  const getOrderList = () => {
    axios({
      url: 'https://coding-test.snackfor.com/orders',
      params: {
        limit: 12,
        order_group__in: data.uuid,
      },
    }).then((res) => setList(res.data.results));
  };

  useEffect(() => {
    getOrderList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      <Header>
        <p>
          주문일자 {data.registration_date.replace('T', ' ').substring(0, 16)}
          <span>(주문번호 {data.uuid})</span>
        </p>
        <Button color="primary" outline>
          상세보기
        </Button>
      </Header>

      {list?.map((el) => (
        <OrderItemCard
          key={el.id}
          data={el}
          statusInfo={{
            delivery_status: data.delivery_status,
            status: data.status,
          }}
        />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  ${({ theme }) => theme.flexColumnSet()};
  gap: 1rem;
  padding: 2rem 0.4rem;
  &:not(:last-child) {
    border-bottom: 1px solid gray;
  }
`;
const Header = styled.div`
  width: 100%;

  ${({ theme }) => theme.flexSet('space-between')};
`;

export default OrderGroup;
