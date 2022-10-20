import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const createOtziv = async (otziv) => {
    const {data} = await $authHost.post('api/otzivi', otziv)
    return data
}


export const fetchOtzivsOneExursion = async (exursionId) => {
    const {data} = await $host.get('api/otzivi', {params: {
            exursionId
        }})
    return data
}

export const deleteOtziv = async (id) => {
    await $authHost.delete('api/otzivi',{
        params: {
            id
        }
    })
}





