import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import Market from "./components/Market";

@inject("item", "inventory")
@observer
class App extends Component {

  render() {
    return (
      <div className="App">
        <Market />
      </div>
    );
  }
}

export default App;
