import React from 'react';
import {observer} from "mobx-react-lite";
import styled from "styled-components"
import MyInput from "../../../UI/MyInput/MyInput";

const SearchCss = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
  background-color: green;
  justify-content: space-between;
  font-size: 18px;
  margin: 40px 0px 40px 0px;
  
`
const CastomInput = styled(MyInput)`
  border-radius: 1px;
`

const Search = observer(({filter, setFilter}) => {
    return (
        <SearchCss>
                <CastomInput
                    value={filter.query}
                    onChange={e => setFilter({...filter, query: e.target.value})}
                    placeholder="Поиск..."
                />
                <CastomInput
                    type="number"
                    onChange={e => setFilter({...filter, price: e.target.value})}
                    placeholder="Цена от"
                />
                <CastomInput
                    type="number"
                    onChange={e => setFilter({...filter, priceBefore: e.target.value})}
                    placeholder="Цена до"
                />
                <CastomInput
                    value={filter.fio}
                    onChange={e => setFilter({...filter, fio: e.target.value})}
                    placeholder="имя фамилия экскурсовода..."
                />
                <CastomInput
                    value={filter.address}
                    onChange={e => setFilter({...filter, address: e.target.value})}
                    placeholder="адрес..."
                />
        </SearchCss>
    );
});

export default Search;