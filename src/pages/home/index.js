import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Like } from '../../assets/3643770-favorite-heart-like-likes-love-loved_113432.svg';

const List = [
  {
    img: 'http://service.gilbut.co.kr/blog-eztok/wp-content/uploads/sites/9/2016/01/Goldfish.jpg',
  },
  {
    img: 'http://service.gilbut.co.kr/blog-eztok/wp-content/uploads/sites/9/2016/01/gardetto%E2%80%99s.jpg',
  },
  {
    img: 'http://service.gilbut.co.kr/blog-eztok/wp-content/uploads/sites/9/2016/01/Nilla.jpg',
  },
  {
    img: 'http://service.gilbut.co.kr/blog-eztok/wp-content/uploads/sites/9/2016/01/Snack-pack-pudding.jpg',
  },
  {
    img: 'http://service.gilbut.co.kr/blog-eztok/wp-content/uploads/sites/9/2016/01/Twizzlers.jpg',
  },
  {
    img: 'http://service.gilbut.co.kr/blog-eztok/wp-content/uploads/sites/9/2016/01/Popped.jpg',
  },
];

const Item = ({ data }) => {
  return (
    <ItemCard>
      <Thumbnail>
        <LikeBtn>
          <Like width="60%" height="60%" fill="none" stroke="white" />
        </LikeBtn>
        <img alt="과자" src={data.img} />
      </Thumbnail>
    </ItemCard>
  );
};

const Home = () => {
  return (
    <Wrapper>
      {List.map((el) => (
        <Item data={el} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 1rem 2rem 2rem;
  ${({ theme }) => theme.flexSet('stretch')};
  flex-wrap: wrap;
  gap: 1rem;
`;

const ItemCard = styled.div`
  ${({ theme }) => theme.flexColumnSet()};
  width: 100%;
  flex-basis: calc(50% - 0.5rem);
  overflow: hidden;
  box-shadow: 3px 0px 17px #e7eaf7;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;

  @media screen and (min-width: 600px) {
    flex-basis: calc(32.9% - 0.5rem);
    flex-shrink: 0;
  }

  @media screen and (min-width: 900px) {
    flex-basis: calc(24.6% - 0.5rem);
    flex-shrink: 0;
  }
`;

const Thumbnail = styled.div`
  width: 100%;
  padding-bottom: 100%;
  position: relative;

  & > img {
    padding: 10%;
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: contain;
    &:hover {
      transform: scale(1.06);
      transition: transform 0.2s ease;
    }
  }
`;

const LikeBtn = styled.button`
  ${({ theme }) => theme.flexSet()};
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 15%;
  height: 15%;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 50%;
  z-index: 1;
`;

export default Home;
