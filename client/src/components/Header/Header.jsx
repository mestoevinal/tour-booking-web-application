import React, {useContext} from 'react';
import styled from 'styled-components'
import {NavLink, useHistory} from "react-router-dom";
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {GiHamburgerMenu} from "react-icons/gi";


const HeaderStyle = styled.div`
  display: flex;
  justify-content: center;
  background-color: #E6E6FA;
  border-bottom: 1px solid #E6E6FA;
  box-shadow: 0 20px 20px -20px #333;
  font-size: 24px;
`
const NavItem = styled.div`
  display: inline-flex;
  justify-content: ${props => props.justify || "flex-start"};
  align-items: center;
`

const Nav = styled(NavLink)`
  white-space: nowrap;
  color: black;
  padding: 13px 25px;
  text-decoration: none;
  margin-left: ${props => props.size || "0px"};
  :hover {
    opacity: 0.6;
    text-decoration: none;
  }
  @media (max-width: 800px) {
    display: none;
  }
`

const Icon = styled(GiHamburgerMenu)`
  display: none;
  @media (max-width: 800px) {
    display: inline;
    width: 30px;
    border-radius: 30px;
    margin: 0px 10px 0px 0px;
    height: 55px;
  }
`

const LogoImg = styled.img`
  margin-right: 40px;
  margin-left: 20px;
  width: 200px;
  height: 55px;
  mix-blend-mode: multiply;
`

const WrapperHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1200px;
`

const Header = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()
    let logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.clear()
        history.push('/login')
    }
    return (
        <HeaderStyle>
            <WrapperHeader>
                <NavItem>
                    {/*<LogoImg src={logo2} alt={"logo"}></LogoImg>*/}
                    <Nav to="/CityList"> Главная</Nav>
                    <Nav to="/InfoProject">О проекте</Nav>
                    {user.User.role === "ADMIN" ?
                        <Nav to="/AdminPanel">Админ Панель</Nav>
                        : user.isAuth &&
                        <Nav to="/allOrder">
                            Мои заказы
                        </Nav>
                    }
                </NavItem>
                {!user.isAuth ?
                    <NavItem justify="flex-end">
                        <Nav to="/login">Вход</Nav>
                        <Nav to="/registration" size="-15px">Регистрация</Nav>
                        <Icon/>
                    </NavItem>
                    :
                    <NavItem justify="flex-end">
                        <Nav to="" onClick={() => logOut()}>
                            Выйти
                        </Nav>
                        <Icon/>
                    </NavItem>
                }
            </WrapperHeader>
        </HeaderStyle>
    )
})

export default Header;

