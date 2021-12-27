import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const OrderPreviewInfo = ({ data }) => {
  const [countInfo, SetCountInfo] = useState({
    orderCount: 0,
    cancleCount: 0,
  });

  const getData = async () => {
    await axios({
      url: 'https://coding-test.snackfor.com/order-groups',
      params: {
        user: 'test@snackfor.com',
      },
    }).then((res) =>
      SetCountInfo((prev) => {
        return { ...prev, orderCount: res.data.count };
      })
    );

    await axios({
      url: 'https://coding-test.snackfor.com/order-groups',
      params: {
        user: 'test@snackfor.com',
        status: 'CANCELLED',
      },
    }).then((res) =>
      SetCountInfo((prev) => {
        return {
          orderCount: prev.orderCount - res.data.count,
          cancleCount: res.data.count,
        };
      })
    );
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Wrapper>
      <div>스낵포님</div>
      <div>
        주문내역<span>{countInfo.orderCount}건</span>
      </div>
      <div>
        취소내역<span>{countInfo.cancleCount}건</span>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${({ theme }) => theme.flexSet()};
  padding: 0.4rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;

  & > div {
    ${({ theme }) => theme.flexSet()};
    gap: 3px;
    width: 33.3%;
    padding: 1rem;
    font-size: 1.4rem;
    text-align: center;

    &:not(:last-child) {
      border-right: 1px solid white;
    }
  }
`;

export default OrderPreviewInfo;
