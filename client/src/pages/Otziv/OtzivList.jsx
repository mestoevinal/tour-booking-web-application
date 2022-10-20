import React, {useContext} from 'react';
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import OtzivCard from "./OtzivCard";

<<<<<<< HEAD
const OtzivList = observer(() => {
=======
const OtzivListTwo = observer(() => {
>>>>>>> c8b62bc75b904543e2d22533d581b41d98a42242
    const {otzivStore} = useContext(Context)
    return (
        <div>
            {otzivStore.OtzivsOneExursion.map(otziv =>
                    <OtzivCard key={otziv.id} otziv={otziv}/>
            )}
        </div>
    );
});

<<<<<<< HEAD
export default OtzivList;
=======
export default OtzivListTwo;
>>>>>>> c8b62bc75b904543e2d22533d581b41d98a42242
