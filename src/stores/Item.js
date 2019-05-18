import { observable } from 'mobx'

export class Item {

    @observable name
    @observable price = 0
    @observable quantity = 1
    constructor(name){
        this.name = name
}
}