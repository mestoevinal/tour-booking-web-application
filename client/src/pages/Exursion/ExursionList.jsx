import React, {useState, useEffect} from 'react'
import styled from "styled-components"
import {useParams} from "react-router-dom"
import {fetchExursioncityId} from "../../http/exursionAPI"
import Card from "./Card"

const StyleExur = styled.div`
  display: flex;
  flex-direction: column;
`

const ExListСss = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 15px;
`

const ExursionList = () => {
    const [ExurList, setExurList] = useState([])
    const params = useParams()
    useEffect(() => {
        fetchExursioncityId(params.id)
            .then(data => setExurList(data))
    }, [])

    return (
        <StyleExur>
            <ExListСss>
                {ExurList.map((exur,i) =>
                    <Card
                        key={i}
                        ex={exur}
                    />
                )}
            </ExListСss>

        </StyleExur>
    )
}

export default ExursionList