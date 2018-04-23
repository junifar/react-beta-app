import React, { Component } from "react";
import AddNewItem from "./AddNewItem";
import ItemsList from "./ItemsList";

class ToDo extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="app-title">Flux Wallet</h1>
                <AddNewItem />
                <ItemsList />
            </div>
        )
    }
}

export default ToDo;