import React, {useContext, useEffect, useState} from 'react';
import styled from "styled-components";
<<<<<<< HEAD
import {useParams} from "react-router-dom";
import {fetchExursioncityId} from "../../http/exursionAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import Card from "./Card";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const ExList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 15px;
  
=======
import {useHistory, useParams} from "react-router-dom";
import {fetchExursioncityId} from "../../http/exursionAPI";
import {observer} from "mobx-react-lite";
import moment from 'moment';
import OldCard from "./OldCard";
import {Context} from "../../index";
import {usePosts} from "../../hooks/usePosts";
import Search from "./Search";
import Card from "./Card";
import {ExurList} from "./database/base";

const StyleExur = styled.div`
  display: flex;
  flex-direction: column;
`

const City = styled.div`
  margin-left: 5px;
  width: 22%;
  margin-top: 10px;
  font-size: 150%;
  margin-bottom: 10px;


`
const Hr = styled.hr`
  border-width: 1px;
  margin-bottom: 5px;
  border: 0;
  border-top: 3px solid #000000;

`

const H4 = styled.h4`
  margin-bottom: 12px;
`

const ExListСss = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 15px;
>>>>>>> c8b62bc75b904543e2d22533d581b41d98a42242
`

const ExursionList = observer((props) => {
    const {exursionStore} = useContext(Context)
    const params = useParams()
<<<<<<< HEAD
    useEffect(() => {
        fetchExursioncityId(params.id).then(data => exursionStore.setExursion(data))
    }, [])
    return (
        <Container>
            <ExList>
                {exursionStore.ArrayExursion.map(ex =>
                    <Card key={ex.id} exursion={ex}/>
                )}
            </ExList>
        </Container>
=======
    const router = useHistory()
    const [filter, setFilter] = useState({sort: '', query: '', price: 0, priceBefore: 0, fio: '', address: ''})
    let ArrayDate
    useEffect(() => {
        fetchExursioncityId(params.id).then(data => exursionStore.setExursion(data))
    }, [ArrayDate])

    const sortedAndSearchedPosts = usePosts(
        exursionStore.ArrayExursion,
        filter.sort,
        filter.query,
        filter.price,
        filter.priceBefore,
        filter.fio,
        filter.address
    );
    ArrayDate = exursionStore.ArrayExursion.map(e => moment(e.date).format('YYYYMMDD')).sort()
    ArrayDate = [...new Set(ArrayDate)]

    return (
        <StyleExur>
            {/*<Search*/}
            {/*    filter={filter}*/}
            {/*    setFilter={setFilter}*/}
            {/*/>*/}
            {/*<div>*/}
            {/*    {ArrayDate.map((date, i) =>*/}
            {/*        <City key={i}>*/}
            {/*            <H4>{moment(date).locale('ru').format('DD MMMM,dd')}</H4>*/}
            {/*            <Hr/>*/}
            {/*            <OldCard*/}
            {/*                date={date}*/}
            {/*                posts={sortedAndSearchedPosts}*/}
            {/*            />*/}
            {/*        </City>*/}
            {/*    )}*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    {ArrayDate.map((date, i) =>*/}
            {/*        <MyCard*/}
            {/*            key={i}*/}
            {/*            date={date}*/}
            {/*            posts={sortedAndSearchedPosts}*/}
            {/*        />*/}
            {/*    )}*/}
            {/*</div>*/}
            <ExListСss>
                {ExurList.map((exur,i) =>
                    <Card
                        key={i}
                        ex={exur}
                    />
                )}
            </ExListСss>

        </StyleExur>
>>>>>>> c8b62bc75b904543e2d22533d581b41d98a42242
    );
});

export default ExursionList;