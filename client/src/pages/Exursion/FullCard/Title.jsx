import React, {useContext, useState} from 'react';
import styled from "styled-components";
import MyButton from "../../../UI/MyButton/MyButton";
import {useHistory} from "react-router-dom";
import {createOrder} from "../../../http/orderAPI";
import {Context} from "../../../index";

const Wrapper = styled.div`
  text-align: center;
  box-sizing: border-box;
  font-size: 20px;
  font-family: PT Serif, Georgia, Times New Roman, Times, serif;
  height: auto;
  font-weight: 400;
  color: #2f3235;
`
const MyTitle = styled.div`
  text-align: center;
  font-size: 20px;
  font-family: PT Serif, Georgia, Times New Roman, Times, serif;
  color: #2f3235;
  box-sizing: border-box;
`
const P = styled.p`
  text-align: center;
  font-size: 20px;
  font-family: PT Serif, Georgia, Times New Roman, Times, serif;
  font-weight: 400;
  color: #2f3235;
  box-sizing: border-box;
  margin-top: 5px;
  margin-bottom: 5px;
  width: 700px;
  margin: 5px auto; 
`
const Button = styled(MyButton)`
  background: #827ffe;
  :hover {
    filter: brightness(0.6);
  }
`

const Title = ({title, exursionId}) => {
    const history = useHistory()
    const {user} = useContext(Context)

    const orderExur = async (e) => {
        e.preventDefault()
        await createOrder({
            email: user.User.email,
            userId: user.User.id,
            exursionId: exursionId,
            username: user.User.username
        })
            .then(() => {
                alert("Ваш заказ успешно оформлен")
                history.push("/CityList")
            })
    }
    return (
        <Wrapper>
            <MyTitle>
                <P>
                    {title}
                </P>
            </MyTitle>
            <Button
                onClick={orderExur}
            >
                Забронировать
            </Button>
        </Wrapper>
    );
};

export default Title;