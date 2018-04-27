import React, { Component } from 'react';
import posActions from "../actions/posActions";
import ProductItemList from "./ProductItemList";
import jQuery from 'jquery/dist/jquery.min';
window.jQuery = jQuery;
require('jQuery-Scanner-Detection/jquery.scannerdetection');

class RightContent extends Component{

    constructor(props){
        super(props);

        this._getFreshItem = this._getFreshItem.bind(this);

        this.state = {
            item: this._getFreshItem()
        };
    }

    _addNewItem(event){
        event.preventDefault();
        posActions.addNewItem(this.state.item);
        this.setState({ item : this._getFreshItem() });
    }

    _updateStateManual(value){
        const items = this.state.item;
        items.code = value;
        items.name = "Luar Biasa";
        items.item.amount = "RP. 13.000,00";

        this.setState({ items });
        this.setState({ item: this.state.item });
    }

    _updateState(event){
        let field = event.target.name;
        let value = event.target.value;

        const items = this.state.item;
        items[field] = value;
        items.name = "Luar Biasa";
        items.amount = "RP. 13.000,00";

        this.setState({items});
        this.setState({ item: this.state.item });
    }

    componentDidMount(){
        this._renderAction()
    }

    _renderAction(){
        var _ = this;
        jQuery(document).ready(function(){
            jQuery(document).scannerDetection({
                onComplete: function(barcode){
                    // jQuery('#serialInput').val(barcode).change();
                    _._updateStateManual(barcode);
                    jQuery('#submit_serial').click();
                }
            });
        });
    }

    _getFreshItem(){
        return{
            code: '',
            name: '',
            amount: ''
        };
    }

    render(){
        return(
            <div className="col-md-4 order-md-2">
                <h4 className="d-flex justify-content-between align-items-center mb-3">
                    <span className="text-muted">Your cart</span>
                    <span className="badge badge-pill badge-secondary">3</span>
                </h4>
                <form id="formSerial" className="card p-2" onSubmit={this._addNewItem.bind(this)}>
                    <div className="input-group">
                        <input type="text" id="serialInput" className="form-control" name="code" placeholder="Scan Code" value={this.state.item.code}
                        onChange={this._updateState.bind(this)}/>
                        <div className="input-group-append">
                            <button type="submit" className="btn btn-secondary" id="submit_serial">Add</button>
                        </div>
                    </div>
                </form>
                <ProductItemList/>
                <form className="card p-2">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Promo code"/>
                            <div className="input-group-append">
                                <button type="submit" className="btn btn-secondary">Redeem</button>
                            </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default RightContent;