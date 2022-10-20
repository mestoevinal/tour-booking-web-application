import React, {useContext, useState} from 'react';
import styled from "styled-components";
import MyButton from "../../../UI/MyButton/MyButton";
import {useHistory} from "react-router-dom";
import Modal from "../../../UI/MyModal/Modal";
import CreateOrder from "../../Order/CreateOrder";
import {createOrder} from "../../../http/orderAPI";
import {Context} from "../../../index";

const Wrapper = styled.div`
  text-align: center;
  box-sizing: border-box;
  //padding-left: 20px;
  //padding-right: 20px;
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
<<<<<<< HEAD
  
  width: 700px;
  margin: 5px auto;
=======
>>>>>>> c8b62bc75b904543e2d22533d581b41d98a42242
`
const Button = styled(MyButton)`
  background: #827ffe;

  :hover {
    filter: brightness(0.6);
  }
`

const Title = ({title, exursionId}) => {
<<<<<<< HEAD
    const history = useHistory()
=======
    const router = useHistory()
>>>>>>> c8b62bc75b904543e2d22533d581b41d98a42242
    const [modalActive, setModalActive] = useState(false)
    const {user} = useContext(Context)

    const orderExur = async (e) => {
        e.preventDefault()
        await createOrder({email:user.User.email, userId: user.User.id, exursionId: exursionId, username: user.User.username})
            .then(data => {
                alert("Ваш заказ успешно оформлен")
<<<<<<< HEAD
                history.push("/CityList")
=======
                window.location.reload()
>>>>>>> c8b62bc75b904543e2d22533d581b41d98a42242
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
<<<<<<< HEAD
=======

>>>>>>> c8b62bc75b904543e2d22533d581b41d98a42242
        </Wrapper>
    );
};

export default Title;