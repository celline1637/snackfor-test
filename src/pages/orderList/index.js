import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from '../../components/Button';
import OrderGroup from '../../components/orderList/OrderGroup';
import OrderPreviewInfo from '../../components/orderList/OrderPreviewInfo';

const OrderListPage = () => {
  const [orderList, setOrderList] = useState();
  const [offset, setOffset] = useState(0);

  const getOrderList = () => {
    axios({
      url: 'https://coding-test.snackfor.com/order-groups',
      params: {
        user: 'test@snackfor.com',
        limit: 3,
        offset,
      },
    }).then((res) => setOrderList(res.data));
  };

  const setOffsetCount = (e) => {
    const { value } = e.target;
    value === 'prev' && setOffset((prev) => prev - 3);
    value === 'next' && setOffset((prev) => prev + 3);
  };

  useEffect(() => {
    getOrderList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset]);

  return (
    <Wrapper>
      <OrderPreviewInfo />
      <Title>주문 / 배송 조회</Title>
      {orderList && (
        <>
          {orderList.results.map((el) => (
            <OrderGroup key={el.uuid} data={el} />
          ))}
          <PagingBtnGroup>
            <Button
              outline
              color={orderList.previous ? 'primary' : 'disabled'}
              onClick={setOffsetCount}
              disabled={!orderList.previous}
              value="prev"
            >
              이전
            </Button>
            <Button
              outline
              color={orderList.next ? 'primary' : 'disabled'}
              onClick={setOffsetCount}
              disabled={!orderList.next}
              value="next"
            >
              다음
            </Button>
          </PagingBtnGroup>
        </>
      )}
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

const PagingBtnGroup = styled.section`
  ${({ theme }) => theme.flexSet()};
  margin-bottom: 4rem;
  & > button {
    padding: 1rem 2rem;
    &:first-of-type {
      border-right: none;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    &:last-of-type {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
`;

export default OrderListPage;
