import React from 'react';
// import update from 'react-addons-update';
import WalletActions from '../actions/walletActions';
import WalletStore from '../stores/walletStore';

class AddNewItem extends React.Component {

    constructor(props) {
        super(props);

        this._getFreshItem = this._getFreshItem.bind(this);

        this.state = {
            item: this._getFreshItem()
        };
    }

    _getFreshItem() {
        return {
            description: '',
            amount: ''
        };
    }

    _updateState(event) {
        let field = event.target.name;
        let value = event.target.value;

        // If the amount is changed and it's not a float, return.
        if (value && field === 'amount' && !value.match(/^[a-z0-9.+-]+$/g)) {
            return;
        }

        const items = this.state.item;
        items[field] = value;

        this.setState({items});
        this.setState({ item : this.state.item });
    }

    _addNewItem(event) {
        event.preventDefault();
        const items = this.state.item;
        items.description = this.state.item.description || '-';
        items.amount = this.state.item.amount || '0';

        this.setState({items});
        WalletActions.addNewItem(this.state.item);
        this.setState({ item : this._getFreshItem() });
    }

    render() {
        return (
            <div>
                <h3 className="total-budget">${WalletStore.getTotalBudget()}</h3>
                <form className="form-inline add-item" onSubmit={this._addNewItem.bind(this)}>
                    <input type="text" className="form-control description" name="description" value={this.state.item.description} placeholder="Description" onChange={this._updateState.bind(this)} />
                    <div className="input-group amount">
                        <div className="input-group-addon">$</div>
                        <input type="text" className="form-control" name="amount" value={this.state.item.amount} placeholder="Amount" onChange={this._updateState.bind(this)} />
                    </div>
                    <button type="submit" className="btn btn-primary add">Add</button>
                </form>
            </div>
        )
    }
}

export default AddNewItem;