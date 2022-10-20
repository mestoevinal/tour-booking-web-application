import React from 'react';
import styled from "styled-components";
<<<<<<< HEAD
import {NavLink} from "react-router-dom";
=======
>>>>>>> c8b62bc75b904543e2d22533d581b41d98a42242

const DopInfoH3 = styled.h3`
  text-align: left;
  box-sizing: border-box;
  margin: 24px 0;
  line-height: 1.1;
  margin-bottom: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-top: 18px;
  position: relative;
  letter-spacing: 0;
  text-transform: none;
  color: #2f3235;
  font-family: PT Sans, Arial, sans-serif;
  font-size: 21px;
  font-weight: 700;
`
const Header = styled.header`
  font-size: 16px;
  font-family: PT Serif, Georgia, Times New Roman, Times, serif;
  box-sizing: border-box;
  line-height: 20px;
  text-align: left;
  color: #2f3235;
`
const Content = styled.dl`
  font-size: 16px;
  color: #2f3235;
  font-family: PT Serif, Georgia, Times New Roman, Times, serif;
  box-sizing: border-box;
  list-style: none;
  padding: 0;
  margin: 0;
  line-height: 20px;
`
const WrapperContainer = styled.div`
  font-size: 16px;
  color: #2f3235;
  font-family: PT Serif, Georgia, Times New Roman, Times, serif;
  list-style: none;
  line-height: 20px;
  box-sizing: border-box;
  position: relative;
  height: 172px;
`
const GeneralContainer = styled.div`
  color: #2f3235;
  list-style: none;
  line-height: 20px;
  margin: 0;
  padding: 3px 20px 7px 0;
  font-size: 16px;
  font-family: PT Serif, Georgia, Times New Roman, Times, serif;
  max-width: 100%;
  clear: both;
  word-wrap: break-word;
  position: absolute;
  box-sizing: border-box;
  width: 431px;
  min-width: 0px;
  top: 0px;
  left: 0px;
`



const TypeExhibition = styled.dd`
  color: #2f3235;
  list-style: none;
  line-height: 20px;
  margin: 0;
  padding: 3px 20px 7px 0;
  font-size: 16px;
  font-family: PT Serif, Georgia, Times New Roman, Times, serif;
  max-width: 100%;
  clear: both;
  word-wrap: break-word;
  position: absolute;
  box-sizing: border-box;
  width: 431px;
  min-width: 0px;
  top: 0px;
  left: 0px;
`
const Title = styled.div`
  list-style: none;
  line-height: 20px;
  word-wrap: break-word;
  box-sizing: border-box;
  margin-top: 15px;
  font-size: 14px;
  color: #a6a8aa;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
  font-family: PT Sans, Arial, sans-serif;
`
const EvenPriceSpan = styled.span`
  color: #2f3235;
  list-style: none;
  line-height: 20px;
  font-size: 16px;
  font-family: PT Serif, Georgia, Times New Roman, Times, serif;
  word-wrap: break-word;
  box-sizing: border-box;
`
const ExhibitionDescription = styled.ul`
  line-height: 20px;
  font-size: 16px;
  font-family: PT Serif, Georgia, Times New Roman, Times, serif;
  word-wrap: break-word;
  box-sizing: border-box;
  color: #2f3235;
  margin: 0;
  list-style: none;
  padding: 0;
`
<<<<<<< HEAD
const CastomNavLink = styled(NavLink)`
=======
const CastomNavLink = styled.a`
>>>>>>> c8b62bc75b904543e2d22533d581b41d98a42242
  list-style: none;
  line-height: 20px;
  font-size: 16px;
  font-family: PT Serif, Georgia, Times New Roman, Times, serif;
  word-wrap: break-word;
  box-sizing: border-box;
  color: #2f3235;
  cursor: pointer;
  text-decoration: none;
  outline: none;
  border-bottom: 1px solid rgba(47, 50, 53, .25);
`
const Wrapper = styled.div`
  font-size: 16px;
  color: #2f3235;
  line-height: 1.5;
  font-family: PT Serif, Georgia, Times New Roman, Times, serif;
  box-sizing: border-box;
  display: inline-block;
  border-bottom: 1px dotted #bdc2c1;
  border-top: 1px dotted #bdc2c1;
<<<<<<< HEAD
  width: 100%;
`

=======
  padding-bottom: 25px;
  width: 100%;
`



>>>>>>> c8b62bc75b904543e2d22533d581b41d98a42242
const TitlePhone = styled.div`
  list-style: none;
  line-height: 20px;
  word-wrap: break-word;
  box-sizing: border-box;
  margin-top: 15px;
  font-size: 14px;
  color: #a6a8aa;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
  font-family: PT Sans, Arial, sans-serif;
`

const Info = styled.div`
  color: #2f3235;
  list-style: none;
  line-height: 20px;
  font-size: 16px;
  font-family: PT Serif,Georgia,Times New Roman,Times,serif;
  word-wrap: break-word;
  box-sizing: border-box;
`

const PhoneContainer =styled.div`
  color: #2f3235;
  list-style: none;
  line-height: 20px;
  font-size: 16px;
  font-family: PT Serif,Georgia,Times New Roman,Times,serif;
  word-wrap: break-word;
  box-sizing: border-box;
`

const HeaderPhone = styled.div`
  list-style: none;
  word-wrap: break-word;
  box-sizing: border-box;
  position: relative;
  cursor: pointer;
  text-align: center;
  padding: 8px 10px;
  z-index: 1;
  font-size: 13px;
  line-height: 1.3;
  color: #fff;
  border-radius: 1px;
  font-family: PT Sans,Arial,sans-serif;
  font-weight: 700;
  background: #ee3942;
  display: none!important;
`
const PhoneDescription = styled.div`
  color: #2f3235;
  list-style: none;
  line-height: 20px;
  font-size: 16px;
  font-family: PT Serif,Georgia,Times New Roman,Times,serif;
  word-wrap: break-word;
  box-sizing: border-box;
  display: inline-block;
`

const Note = styled.div`
  list-style: none;
  line-height: 20px;
  word-wrap: break-word;
  box-sizing: border-box;
  font-family: PT Sans,Arial,sans-serif;
  color: #a6a8aa;
  font-size: .7em;
  font-weight: 400;
`

const DopInfo = ({cost}) => {
    return (
        <Wrapper>
            <Header>
                <DopInfoH3>
                    Дополнительная информация
                </DopInfoH3>
            </Header>
            <Content>
                <WrapperContainer>

                    <TypeExhibition>
                        <Title>
                            <big>Вид выставки</big>
                        </Title>
                        <ExhibitionDescription>
<<<<<<< HEAD
                            <li> История и личности, картины, живопись, графика</li>
=======
                            <li> История и личности, Картины, живопись, графика</li>
>>>>>>> c8b62bc75b904543e2d22533d581b41d98a42242
                        </ExhibitionDescription>
                    </TypeExhibition>

                    <GeneralContainer style={{left: "431px", width: "431px"}}>
                        <Title>
                            <div>Цена</div>
                        </Title>
                        <EvenPriceSpan>
                            {cost}
                        </EvenPriceSpan>
                    </GeneralContainer>

                    <GeneralContainer style={{width: "431px", top: "80px", left: "431px"}}>
                        <Title>
                            <div>Сайт</div>
                        </Title>
<<<<<<< HEAD
                        <CastomNavLink to="http://localhost:3000/">
                            localhost
=======
                        <CastomNavLink>
                            kudago.ru
>>>>>>> c8b62bc75b904543e2d22533d581b41d98a42242
                        </CastomNavLink>
                    </GeneralContainer>

                    <GeneralContainer style={{top: "66px"}}>
                        <Title>
                            <TitlePhone>
                                <big>Телефон</big>
                            </TitlePhone>
                            <Info>
                                <PhoneContainer>
                                    <HeaderPhone>
                                        <div>Телефон</div>
                                    </HeaderPhone>
                                    <PhoneDescription>
                                        +7 (495) 134-59-69 <br/>
<<<<<<< HEAD
                                        {/*<Note>*/}
                                        {/*    Пожалуйста, скажите организаторам события, что нашли его на KudaGo*/}
                                        {/*</Note>*/}
=======
                                        <Note>
                                            Пожалуйста, скажите организаторам события, что нашли его на KudaGo
                                        </Note>
>>>>>>> c8b62bc75b904543e2d22533d581b41d98a42242
                                    </PhoneDescription>
                                </PhoneContainer>
                            </Info>
                        </Title>
                    </GeneralContainer>
<<<<<<< HEAD
=======

>>>>>>> c8b62bc75b904543e2d22533d581b41d98a42242
                </WrapperContainer>
            </Content>
        </Wrapper>
    );
};

export default DopInfo;