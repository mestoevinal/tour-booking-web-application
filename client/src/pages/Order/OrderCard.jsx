import React, {useContext, useEffect, useState} from 'react';
import moment from "moment";
import {Context} from "../../index";
import styled from "styled-components";
import {fetchExursionId} from "../../http/exursionAPI";
import {observer} from "mobx-react-lite";

const Description = styled.div`
  font-family: PT Sans, Arial, sans-serif;
  font-size: 15px;
  width: 600px;
  color: #2f3235;
  margin-top: 8px;
  padding: 0;
  height: auto;
  overflow: hidden;
  position: relative;
  margin-right: 0px;
`

const Date = styled.div`
  font-family: PT Sans, Arial, sans-serif;
  font-size: 15px;
  width: 600px;
  color: #2f3235;
  margin-top: 8px;
  padding: 0;
  height: auto;
  overflow: hidden;
  position: relative;
  margin-right: 0px;
  text-decoration: underline;
`


const OrderCard = ({exid ,i}) => {
    const [object, setObject] = useState({})
    useEffect(() => {
      fetchExursionId(exid).then(data => setObject(data))
    }, [])
    return (
        <div>
            <strong>{object.name}</strong>
            <Description>{object.description}</Description>
            <Date>{moment(object.date).format('DD MMMM  в HH:mm')}</Date>
        </div>
    );
};

export default OrderCard;