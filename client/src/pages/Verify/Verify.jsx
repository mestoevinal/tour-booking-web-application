<<<<<<< HEAD
import React, {useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {useParams} from "react-router-dom";
import {activateAccount} from "../../http/userAPI";

const Verify = observer(() => {
    const param = useParams()
    useEffect(()=>{
        activateAccount(param.id)
    },[])
    return (
        <div>
            {/*<h1>Ваш ИД {param.id}</h1>*/}
            <h1>Подтверждение выполнено успешно!</h1>
=======
import React from 'react';
import {observer} from "mobx-react-lite";
import {useParams} from "react-router-dom";

const Verify = observer(() => {
    const param = useParams()
    return (
        <div>
            <h1>Ваш ИД {param.id}</h1>
>>>>>>> c8b62bc75b904543e2d22533d581b41d98a42242
        </div>
    );
});

export default Verify;