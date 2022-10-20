import React from 'react';
import styled from "styled-components";

const Select = styled.select`
  box-sizing: border-box;
  width: 100%;
  background-color: #e6e6e6;
  border: 1px solid transparent;
  border-radius: 3px;
  color: black;
  font-size: 18px;
  height: 40px;
  padding: 0px 15px;
`

const MySelect = ({options, defaultValue, value, onChange}) => {
    return (
        <Select
            value={value}
            onChange={event => onChange(event.target.value)}
        >
            <option disabled value="">{defaultValue}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.id}
                </option>
            )}
        </Select>
    );
};

export default MySelect;