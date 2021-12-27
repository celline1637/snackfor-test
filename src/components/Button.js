import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components/macro';

function Button({
  type = 'button',
  children,
  color = 'white',
  fontWeight = '400',
  fullWidth,
  outline,
  ...rest
}) {
  return (
    <StyledButton
      type={type}
      color={color}
      outline={outline}
      fullWidth={fullWidth}
      fontWeight={fontWeight}
      {...rest}
    >
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  fontWeight: PropTypes.number,
  fullWidth: PropTypes.bool,
  outline: PropTypes.bool,
};

const colorStyles = css`
  ${({ theme, color }) => {
    const selected = theme.colors[color];
    return css`
      background: ${selected};
      color: ${selected === '#FFF' ? 'black' : 'white'};
      border: 1px solid ${selected};

      ${(props) =>
        props.outline &&
        css`
          color: ${selected};
          background: white;
          border: 1px solid ${selected};
          &:not(:disabled):active {
            background: ${selected};
            color: white;
          }
        `}
    `;
  }}
`;

const fontWeightStyles = css`
  ${({ fontWeight }) => {
    const selected = fontWeight;
    return css`
      font-weight: ${selected};
    `;
  }}
`;

const fullWidthStyle = css`
  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
      justify-content: center;
    `}
`;

const StyledButton = styled.button`
  ${({ theme }) => theme.flexSet()};
  outline: none;
  padding: 0.6rem 1rem;
  border-radius: ${({ theme }) => theme.calcVw(450, 5)};
  color: black;
  -webkit-tap-highlight-color: transparent;
  &:disabled {
    cursor: not-allowed !important;
  }
  ${fontWeightStyles}
  ${colorStyles}
  ${fullWidthStyle}
`;

export default Button;
