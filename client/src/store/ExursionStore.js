import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._exursion = []
        this._oneExursion = {}
        this._orderarrexur = []
        makeAutoObservable(this)
    }
    setExursion(exur) {
        this._exursion = exur
    }

    get ArrayExursion(){
        return this._exursion
    }

    setOrderArr(exur) {
        this._orderarrexur.push(exur)
    }

    get OrderArr(){
        return this._orderarrexur
    }


    setIdExursion(exur) {
        this._oneExursion = exur
    }

    get IdExursion(){
        return this._oneExursion
    }
}
