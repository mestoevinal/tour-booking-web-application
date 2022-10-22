import React from 'react';
import {observer} from "mobx-react-lite";
import CreateEx from "../Exursion/CreateExursion";
import CreateCity from "../City/CreateCity";
import DeleteCity from "../City/DeleteCity";
import styled from 'styled-components'
import {useHistory} from "react-router-dom";
import MyButton from "../../UI/MyButton/MyButton";


const AdminStyle = styled.div`
  margin-bottom: 30px;
  display: grid;
  grid-template-columns: 1fr;
  font-size: 20px;
`

const AdminPanel = observer(() => {
    const router = useHistory()
    return (
        <AdminStyle>
            <h1>Панель Администратора</h1>
            <h3>Просмотр заказов</h3>
            <MyButton
                onClick={() => router.push('/allOrder')}
            >
                Открыть список всех заказов
            </MyButton>
            <CreateEx/>
            <CreateCity/>
            <DeleteCity/>
        </AdminStyle>
    );
});

export default AdminPanel;