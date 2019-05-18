import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Inventory } from "../src/stores/Inventory"
import { Item } from "../src/stores/Item"

const inventory = new Inventory()
const item = new Item()

const stores = {inventory,
                item}
ReactDOM.render(<Provider {... stores}>
    <App />
</Provider>, document.getElementById('root'));

serviceWorker.unregister();
