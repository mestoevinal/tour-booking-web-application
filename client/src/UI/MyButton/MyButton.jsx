import React from 'react';
import styled from 'styled-components'


const StyledButton = styled.button`
  box-sizing: border-box;
  display: inline-block;
  cursor: pointer;
  text-align: center;
  padding: 8px 14px;
  color: #fff !important;
  text-decoration: none;
  border: none;
  vertical-align: middle;
  outline: none;
  margin: 5px 0;
  font-family: PT Sans, Arial, sans-serif;
  font-weight: 700;
  font-size: 14px;
  background: #827ffe;
  text-shadow: none;
  border-radius:5px;
  :hover {
    filter: brightness(0.7);
  }
`
const MyButton = ({children, ...props}) => {
    return (
        <StyledButton {...props}>
            {children}
        </StyledButton>
    );
};

export default MyButton;