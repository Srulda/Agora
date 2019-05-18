import React, { Component } from "react";
import { observer, inject} from "mobx-react";

@inject("item", "inventory")
@observer
class Item extends Component {
  buyItem = () => {
    this.props.inventory.buyItem(this.props.item.name);
  };

  changePrice = () => {
    let name = this.props.item.name;
    let price = prompt("Please Edit The Item Price");
    this.props.inventory.changePrice(name, price);
  };

  render() {
    let item = this.props.item;
    return (
      <div>
        <li>
          <span id ="item">{item.quantity} {item.name}</span> <br></br> available at{" "}
        <span id = "item" onClick = {this.changePrice}>{item.price} </span> per item
          <button onClick={this.buyItem}>Buy</button>
        </li>
      </div>
    );
  }
}

export default Item;
