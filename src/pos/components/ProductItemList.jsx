import React, { Component } from 'react';
import PosStore from "../stores/PosStore";

class ProductItemList extends Component{
    constructor(props) {
        super(props);

        this.state = {
            items: PosStore.getAllItems()
        }

        this._onChange = this._onChange.bind(this);
    }

    _onChange(){
        this.setState({ items: PosStore.getAllItems() });
    }

    componentWillMount(){
        PosStore.addChangeListener(this._onChange);
    }

    componentWillUnmount(){
        PosStore.removeChangeListener(this._onChange);
    }

    render() {

        let noItemsMessage;
        // Show a friendly message instead if there are no items.
        if (!this.state.items.length) {
            noItemsMessage = (
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                    <h6>No Item Listed</h6>
                </li>
            );
        }

        return(
            <ul className="list-group mb-3">
                {noItemsMessage}
                {this.state.items.map((itemDetails, i) => {
                    return (
                        <li className="list-group-item d-flex justify-content-between lh-condensed" key={i}>
                            <div>
                                <h6 className="my-0">{itemDetails.code}</h6>
                                <small className="text-muted">{itemDetails.name}</small>
                            </div>
                            <span className="text-muted">{}</span>
                        </li>
                    )
                })}
            </ul>
        );
    }
}

export default ProductItemList;