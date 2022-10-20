import React from 'react';
import styled from 'styled-components'
import {observer} from "mobx-react-lite";
import DopInfo from "./DopInfo";
import CreateOtziv from "../../Otziv/CreateOtziv";
import Content from "./Content";
import Title from "./Title";
import Time from "./Time";
import {useLocation} from "react-router-dom/cjs/react-router-dom";
import {deleteExursion} from "../../../http/exursionAPI";
import OtzivList from "../../Otziv/OtzivList";

const H1 = styled.h1`
  text-align: center;
  box-sizing: border-box;
<<<<<<< HEAD
=======
  margin: 24px 0;
>>>>>>> c8b62bc75b904543e2d22533d581b41d98a42242
  line-height: 40px;
  font-size: 40px;
  padding-top: 0;
  padding-bottom: 0;
  padding-left: 40px;
<<<<<<< HEAD
=======
  margin-bottom: 6px;
>>>>>>> c8b62bc75b904543e2d22533d581b41d98a42242
  padding-right: 40px;
  font-weight: 500;
  color: #2f3235;
  font-family: RobotoSlabMedium, Georgia, Times New Roman, Times, sans-serif;
<<<<<<< HEAD
  
  width: 950px;
  margin: 0 auto;
  margin-bottom: 6px;
  margin-top:40px;

`

const Wrapper = styled.div`
  width: 1020px;
`
const SwiperImg = styled.div`
  border-radius: 5px;
=======
`

const Wrapper = styled.div`
  width: 1080px;
`
const SwiperImg = styled.div`
>>>>>>> c8b62bc75b904543e2d22533d581b41d98a42242
  margin: 20px auto;
  width: 900px;
  height: 500px;
  background: url(${props => props.imgurl || ""}) center/ cover no-repeat;
  background-size: 900px 600px;
`

const Exursion = observer(() => {
    const location = useLocation()
    const delExursion = async () => {
        deleteExursion(location.state.id)
        alert("Экскурсия успешно удалена")
        window.location.reload()
    }
    return (
        <Wrapper>
            <H1>{location.state.name}</H1>
            <Title title={location.state.description} exursionId={location.state.id}/>
            <SwiperImg imgurl={process.env.REACT_APP_API_URL + location.state.img}/>
            <Content fullDescription={location.state.fullDescription}/>
            <Time date={location.state.date}/>
            <DopInfo cost={location.state.cost}/>
            <CreateOtziv title={location.state.name} id={location.state.id}/>
            <OtzivList />
        </Wrapper>
    );
});

export default Exursion;