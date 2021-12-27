import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const OrderItemCard = ({ data, statusInfo }) => {
  const { delivery_status, status } = statusInfo;
  const [detailList, setDetailList] = useState();

  console.log(detailList, data.id);

  const parseStatus = (status) => {
    switch (status) {
      case 'ORDER_READY':
        return '배송준비중';
      case 'PAID':
        return '결제완료';
      case 'CANCELLED':
        return '주문취소';
      case 'PARTIAL_CANCELLATION':
        return '부분취소';
      case 'READY':
        return '결제완료';
      default:
        return status;
    }
  };

  const getDetailOrderList = (id) => {
    axios({
      url: 'https://coding-test.snackfor.com/order-mappings',
      params: {
        limit: 12,
        order__in: id,
      },
    }).then((res) => setDetailList(res.data.results));
  };

  useEffect(() => {
    getDetailOrderList(data.id);
  }, []);

  return (
    <Wrapper>
      {detailList && (
        <>
          <img alt={data.product_name} src={data.product_thumbnail} />
          <ProductInfoSection>
            <p> {data.product_name}</p>
            <p>
              {detailList[0]?.option_wms_name}
              {detailList.length > 1 && `외 ${detailList.length - 1}건`}
            </p>
            <p>{data.price}</p>
            <p>수량 {detailList.length}</p>
          </ProductInfoSection>
          <DeliverInfoSection>
            <span> {parseStatus(delivery_status)}</span>
            <span> {parseStatus(status)}</span>
          </DeliverInfoSection>
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${({ theme }) => theme.flexSet('flex-start')};
  width: 100%;
  height: 100px;
  border-radius: 10px;
  border: 1px solid #dbdbdb;

  & > img {
    /* width: 100%; */
    height: 100%;
  }
`;

const ProductInfoSection = styled.div`
  padding: 1rem;
  ${({ theme }) => theme.flexColumnSet('flex-start', 'flex-start')};
  gap: 0.5rem;
`;
const DeliverInfoSection = styled.div`
  margin-left: auto;
  & > span {
    padding: 1rem;
  }
`;

export default OrderItemCard;
