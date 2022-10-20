import React, {useContext, useEffect} from 'react';
import styled from "styled-components";
import {useHistory} from "react-router-dom";
import {fetchCity} from "../../http/cityAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";

const GeoImg = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 5px 0px 5px 0px;
`
const ImageText = styled.div`
  width: 575px;
  height: 600px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  margin: 5px 0px 0px 5px;
  @media (max-width: 800px) {
    width: 400px;
    height: 400px;
  }
  cursor: pointer;

  background: linear-gradient(rgba(255, 255, 255, 0.1),
  rgba(0, 0, 0, 0.7)), url(${props => props.imgurl || ""}) center / cover no-repeat;

<<<<<<< HEAD:client/src/pages/City/CityList.jsx
    //background: url(${props => props.imgurl || ""}) center / cover no-repeat;
`

=======
>>>>>>> c8b62bc75b904543e2d22533d581b41d98a42242:client/src/pages/exursion/ExursionCity.jsx
const TextStyle = styled.div`
  :hover {
    filter: brightness(80%);
  }

  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: white;
  font-size: 36px;
  text-decoration: none;
`


<<<<<<< HEAD:client/src/pages/City/CityList.jsx
=======

>>>>>>> c8b62bc75b904543e2d22533d581b41d98a42242:client/src/pages/exursion/ExursionCity.jsx
const CityList = observer(() => {
    const {cityStore} = useContext(Context)
    const router = useHistory()
    useEffect(() => {
        fetchCity().then(data => cityStore.setCity(data))
<<<<<<< HEAD:client/src/pages/City/CityList.jsx
    }, [])


=======
        check().then(data => {
            user.setRole(data.role)
            user.setId(data.id)
            user.setUser(data)
            console.log(data)
        })
    }, [])

>>>>>>> c8b62bc75b904543e2d22533d581b41d98a42242:client/src/pages/exursion/ExursionCity.jsx
    return (<GeoImg>
            {cityStore.ArrayCity.map(city =>
                <div key={city.id}>
                    {city.img ?
                        <ImageText
                            key={city.id}
                            imgurl={process.env.REACT_APP_API_URL + city.img}
                            onClick={() => router.push(`/CityList/${city.id}`)}
                        >
                            <TextStyle>{city.name}</TextStyle>
                        </ImageText>
                        :
                        <ImageText
                            key={city.id}
                            onClick={() => router.push(`/CityList/${city.id}`)}
                        >
                            <TextStyle>{city.name}</TextStyle>
                        </ImageText>
                    }
                </div>
            )}
        </GeoImg>
    )
})

export default CityList;