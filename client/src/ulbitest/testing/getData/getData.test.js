<<<<<<< HEAD
import {fetchExursionId} from "../../../http/exursionAPI";
import {$authHost} from "../../../http";

jest.mock("../../../http")
=======
import {fetchExursionId} from "../../http/exursionAPI";
import {$authHost} from "../../http";


jest.mock("../../http")


>>>>>>> c8b62bc75b904543e2d22533d581b41d98a42242

describe('Проверка запросов к бд', () => {
    let response
    beforeAll(() => {
        response = {
            data: [
                {
                    address: "Компания «Сила ветра»",
                    cityId: 10,
                    cost: 1500,
                    createdAt: "2022-09-03T18:01:29.173Z",
                    date: "2022-09-30T09:00:00.000Z",
                    description: "Шум воды, отблеск заката, атмосфера приключений и лучшие друзья рядом — водная прогулка на красивой яхте подарит массу незабываемых эмоций.",
                    fullDescription: "Водная прогулка от компании «Сила ветра» — это целый час безмятежного отдыха под белоснежным парусом. Вместе с опытным капитаном вы отправитесь навстречу новым впечатлениям, оставив на берегу все тревоги и суету большого города. Прогулки рассчитаны на компании до 5 человек, за бронирование яхты целиком вы получите скидку 10%.* На красивом судне вы сможете сделать множество ярких фотографий, пообщаться с друзьями и насладиться атмосферой яхтенного спорта. Желающие смогут обратиться к капитану и обучиться базовым приёмам управления судном. Если вы хотите бороздить водные просторы подольше, то заранее оформите бронь сразу двух часовых прогулок подряд. Перед отправлением вас ждёт обязательный вводный инструктаж по технике безопасности. На борт не допускаются дети младше 14 лет, но для них предусмотрен отдельный Детский клуб «Силы ветра».",
                    id: 154,
                    img: "2b60f891-63aa-416f-8136-9107d8b22729.jpg",
                    name: "Прогулки на парусных яхтах от компании «Сила ветра»",
                    updatedAt: "2022-09-03T18:01:29.173Z",
                }
            ]
        }
    })

    test('Запрос для получения одного города', async () => {
        $authHost.get.mockReturnValue(response)
        const data = await fetchExursionId(149)
        expect($authHost.get).toBeCalledTimes(1)
        expect(data).toEqual(response.data)
    })
<<<<<<< HEAD

=======
>>>>>>> c8b62bc75b904543e2d22533d581b41d98a42242
})
