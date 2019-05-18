import { observable, action, computed } from 'mobx'
import { Item } from './Item'


export class Inventory {
    @observable items = []

    @action addItem = (name) =>{
        let item = this.items.find(i => i.name === name)
        if(item){
            item.quantity++ 
        }else{
            this.items.push(new Item(name))
    }
 } 

    @action buyItem = name => {
        let index = this.items.findIndex(i => i.name === name)
        this.items[index].quantity--
        if(this.items[index].quantity === 0){
            this.items.splice(index ,1)
        }
    }

    @action changePrice = (name, upPrice) => {
        let index = this.items.findIndex(i => i.name === name)
        this.items[index].price = upPrice
    }

    @computed get numItems() {
       let numItems =  this.items.map(i => i.quantity)
       .reduce((a, b) => a + b, 0)
            return numItems
    }
}

