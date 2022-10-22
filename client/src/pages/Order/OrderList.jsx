import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../../index";
import {deleteOrder, fetchMyOrder, fetchOrder} from "../../http/orderAPI";
import {observer} from "mobx-react-lite";
import styled from "styled-components"
import MyButton from "../../UI/MyButton/MyButton";
import OrderCard from "./OrderCard";

const OrderStyle = styled.div`
  width: 1180px;
  padding: 15px;
  font-size: 23px;
  margin-top: 15px;
`

const Div = styled.div`
  font-family: PT Sans, Arial, sans-serif;
  font-size: 15px;
  color: #2f3235;
`

const OrderList = observer(() => {
    const {user} = useContext(Context)
    const [orderList, setOrderList] = useState([])

    useEffect(() => {
        if (user.Role == "ADMIN") {
            fetchOrder().then(data => setOrderList(data))
        }
        else {
            fetchMyOrder(user.User.id).then(data => setOrderList(data))
        }
    }, [])


    return (
        <div>
            {orderList.map((order, i) =>
                    <OrderStyle>
                        <OrderCard order={order} exid={order.exursionId} key={order.id} />
                        <MyButton
                            style={{marginLeft:"10px"}}
                            onClick={async () => await deleteOrder(order.id)}
                        >
                            Удалить заказ
                        </MyButton>
                    </OrderStyle>
            )}
        </div>
    );
});

export default OrderList;