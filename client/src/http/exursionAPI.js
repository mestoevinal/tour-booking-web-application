import {$authHost, $host} from "./index";


export const createExursion = async (Exursion) => {
    const {data} = await $authHost.post('api/exursion', Exursion)
    return data
}

export const fetchExursioncityId = async (cityId) => {
    const {data} = await $authHost.get('api/exursion', {
        params: {
            cityId
        }
    })
    return data
}

export const fetchExursionId = async (id) => {
    const {data} = await $authHost.get('api/exursion', {
        params: {
            id
        }
    })
    return data
}

export const deleteExursion = async (id, date = 0) => {
    if (id) {
        await $authHost.delete('api/exursion', {
            params: {
                id
            }
        })
    }
    if (date){
        await $authHost.delete('api/exursion', {})
    }
}
