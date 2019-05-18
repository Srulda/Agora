import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import Item from "./Item";
import "../App.css"


@inject("item", "inventory")
@observer
class Market extends Component {
  handleChange = e => {
    this.setState({
      newItem: e.target.value
    });
  };

  addItem = () => {
    this.props.inventory.addItem(this.state.newItem);
  };

  render() {
    let inventory = this.props.inventory;
    return (
      <div>
       <h2>What Do You Want To Sell ? </h2>
        <input onChange={this.handleChange} />
        <button className = "rotate-center" onClick={this.addItem}>Add</button>
        <div id ="numItems">
          There is{" "}
          {this.props.inventory.numItems === 0
            ? "no"
            : this.props.inventory.numItems}{" "}
          items available in the store !
        </div>
        {inventory.items.map(i => (
          <Item item={i} store={this.props.store} key={i.name + i.price} />
        ))}{" "}
        
      </div>
    );
  }
}

export default Market;
