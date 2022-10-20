import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../../index";
import {deleteOrder, fetchMyOrder, fetchOrder} from "../../http/orderAPI";
import {observer} from "mobx-react-lite";
import styled from "styled-components"
import Modal from "../../UI/MyModal/Modal";
import Order from "./Order";
import MyButton from "../../UI/MyButton/MyButton";

const OrderStyle = styled.div`
  width: 1180px;
  padding: 15px;
  font-size: 23px;
  margin-top: 15px;
`

const OrderList = observer(() => {
    const {orderStore} = useContext(Context)
    const {user} = useContext(Context)
    const [modalActive, setModalActive] = useState(false)

    useEffect(() => {
        if (user.Role == "ADMIN")
            fetchOrder().then(data => orderStore.setOrder(data))
        else
            fetchMyOrder(user.Id).then(data => orderStore.setOrder(data))
    }, [orderStore.ArrayOrder])

    return (
        <div>
            {orderStore.ArrayOrder.map((order, i) =>
                <OrderStyle key={order.id}>
                    <strong>{i + 1}. {order.email}</strong>
                    <div>{order.fio}</div>
                    <Modal
                        active={modalActive}
                        setActive={setModalActive}
                    >
                        <Order
                            exursionId={order.exursionId}
                            order={order}
                        />
                    </Modal>
                    <MyButton

                        onClick={() => setModalActive(true)}
                    >
                        Развернуть
                    </MyButton>
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