const calcVw = (width, px) => `${(px / width) * 100}vw`;

const calcRem = (pxSize) => `${pxSize / 16}rem`;

const flexSet = (just = 'center', align = 'center') => {
  return `display: flex;
  justify-content: ${just};
  align-items: ${align};`;
};

const flexColumnSet = (just = 'center', align = 'center') => {
  return `display: flex;
  flex-direction: column;
  justify-content: ${just};
  align-items: ${align};`;
};

const posCenterX = (type = 'absolute') => {
  return `
  position: ${type};
  left:50%;
  transform:translateX(-50%);
  `;
};

const posCenterY = (type = 'absolute') => {
  return `
  position: ${type};
  top: 50%;
  transform: translateY(-50%);
  `;
};

const posCenter = (type = 'absolute') => {
  return `
  position: ${type};
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  `;
};

// 컬러 변수명의 의미가 무의미함.. 재정의 필요
const colors = {
  white: '#fff',
  secondary_bgc: '#fafafa',
  tertiary_bgc: '#f3f3f3',
  payment_bgc: '#f5f5f5',
  bgc: '#f7f7f7',
  withHost_bgc: '#f8f8f8',
  app_dark_bgc: '#f0f0f0',
  primary_bgc: '#e8e8e8',
  border2: '#ebebeb',
  border: '#dbdbdb',
  divider: '#dbdbdb',
  border3: '#c1c1c1',
  sub_text: '#a7a7a7',
  complete_btn: '#aaaaaa',
  secondary_btn: '#999999',
  menu: '#8d8d8d',
  secondary_text: '#888888',
  cancle: '#777',
  feed: '#707070',
  th: '#555555',
  link: '#333',
  black: '#252525',
  back: '#eeeeee',
  // btn: '#ff7c00',
  primary: '#743bbc',
};

const theme = {
  calcRem,
  colors,
  calcVw,
  flexSet,
  flexColumnSet,
  posCenterX,
  posCenterY,
  posCenter,
};

export default theme;
