import React, {useContext} from 'react';
import {Context} from "../../index";
import {useHistory, useLocation} from "react-router-dom";
import {LOGIN_ROUTE} from "../../utils/consts";
import useInput from "../../hooks/useInput";
import Button from "react-bootstrap/Button";
import {login, registration} from "../../http/userAPI";
import {observer} from "mobx-react-lite";
import styled from 'styled-components'
import * as uuid from "uuid";


const CastomInput = styled.input`
  box-sizing: border-box;
  width: 80%;
  background-color: #e6e6e6;
  border: 1px solid transparent;
  border-radius: 10px;
  color: black;
  font-size: 15px;
  height: 50px;
  padding: 0px 20px;
  outline: none;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  width: 390px;
  height: 400px;
  padding-top: 90px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.3);
  border-radius: 30px;
  background-color: white;
`
const Title = styled.div`
  font-size: 27px;
  font-weight: 100;
  padding-bottom: 35px;
  text-transform: uppercase;
  text-align: center;
  width: 100%;
`
const CastomButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  outline: none !important;
  border: none;
  margin-top: 0px;
  width: 80%;
  height: 50px;
  background-color: #827ffe;
  border-radius: 10px;
  font-size: 15px;
  :hover {
    filter: brightness(0.7);
  }
`
const ErrorText = styled.div`
  margin-bottom: 10px;
`

const Login = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const history = useHistory()
    const isLogin = location.pathname === LOGIN_ROUTE
    const email = useInput('', {isEmpty: true, emailError: true})
    const username = useInput('', {isEmpty: true, maxLength: 100})
    const password = useInput('', {isEmpty: true, minLength: 4})

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email.value, password.value)
            } else {
                data = await registration(email.value, password.value, username.value, uuid.v1())
            }
            user.setUser(data)
            user.setIsAuth(true)
            email.value = ""
            password.value = ""
            username.value = ""
            history.push('/CityList')
        } catch (e) {
            alert(e)
        }
    }


    return (
        <Form>
            <Title>{isLogin ? 'АВТОРИЗАЦИЯ' : "РЕГИСТРАЦИЯ"}</Title>
            {!isLogin &&
                <CastomInput
                    type="text"
                    placeholder="Имя пользователя"
                    onChange={e => username.onChange(e)}
                    onBlur={e => {
                        username.onBlur(e)
                    }}
                    style={{marginBottom: "17px"}}
                />
            }
            <CastomInput
                type="text"
                placeholder="Электронная почта"
                value={email.value}
                onChange={e => email.onChange(e)}
                onBlur={e => {
                    email.onBlur(e)
                }}
            />
            <ErrorText>{(email.isDirty && email.isEmpty) &&
                <div style={{color: "red"}}>{email.errorMessage}</div>}</ErrorText>

            <CastomInput
                placeholder="Пароль"
                type="password"
                value={password.value}
                onChange={e => password.onChange(e)}
                onBlur={e => password.onBlur(e)}
            />
            <ErrorText>{(password.isDirty && password.isEmpty) &&
                <div style={{color: "red"}}>{password.errorMessage}</div>}
            </ErrorText>

            <CastomButton
                variant={"outline-success"}
                onClick={click}
            >
                {isLogin ? 'Войти' : 'Зарегистрироваться'}
            </CastomButton>
        </Form>
    )
})

export default Login