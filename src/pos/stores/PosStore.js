import { EventEmitter } from 'events';
import Dispatcher from "../../global/dispatcher";
import ActionTypes from "../../global/constants";

const CHANGE = 'CHANGE';
let _walletState = [];

class PosStore extends EventEmitter{
    constructor() {
        super();

        // Registers action handler with the Dispatcher.
        Dispatcher.register(this._registerToActions.bind(this));
    }

    _registerToActions(action) {
        switch(action.actionType) {
            case ActionTypes.ADD_NEW_ITEM:
                this._addNewItem(action.payload);
                break;
            default:
                break;
        }
    }

    // Adds a new item to the list and emits a CHANGED event.
    _addNewItem(item) {
        item.id = _walletState.length;
        _walletState.push(item);
        this.emit(CHANGE);
    }

    // Returns the current store's state.
    getAllItems() {
        return _walletState;
    }

    // Hooks a React component's callback to the CHANGE event.
    addChangeListener(callback) {
        this.on(CHANGE, callback);
    }

    // Removes the listener from the CHANGED event.
    removeChangeListener(callback) {
        this.removeListener(CHANGE, callback);
    }

}

export default new PosStore();