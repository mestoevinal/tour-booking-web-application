import React from 'react';
import styled from "styled-components";

const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  background-color: #e6e6e6;
  border: 1px solid transparent;
  border-radius: 3px;
  color: black;
  height: 40px;
  padding: 0px 20px;
  font-size: 16px;
`

const MyInput = React.forwardRef((props, ref) => {
    return (
        <Input ref={ref} {...props}>

        </Input>
    );
});

export default MyInput;