import React, {Component} from 'react';

class LeftContent extends  Component{
    constructor(props){
        super(props);

        this.state = {
            data: 0
        }

        this.setNewNumber = this.setNewNumber.bind(this);
    };

    setNewNumber(){
        this.setState({ data: this.state.data + 1 })
    }
    render(){
        return(
            <div className="col-md-8 order-md-1">

                <h4 className="mb-3">Billing address</h4>
                <form className="needs-validation" noValidate="">
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="firstName">First name</label>
                            <input type="text" className="form-control" id="firstName" placeholder="" value="" required=""/>
                            <div className="invalid-feedback"> Valid first name is required. </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="lastName">Last name</label>
                            <input type="text" className="form-control" id="lastName" placeholder="" value="" required=""/>
                            <div className="invalid-feedback"> Valid last name is required. </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="username">Username</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">@</span>
                            </div>
                            <input type="text" className="form-control" id="username" placeholder="Username" required=""/>
                                <div className="invalid-feedback"> Your username is required. </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="cc-name">Name on card</label>
                            <input type="text" className="form-control" id="cc-name" placeholder="" required=""/>
                                <small className="text-muted">Full name as displayed on card</small>
                                <div className="invalid-feedback"> Name on card is required </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="cc-number">Credit card number</label>
                            <input type="text" className="form-control" id="cc-number" placeholder="" required=""/>
                                <div className="invalid-feedback"> Credit card number is required </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 mb-3">
                            <label htmlFor="cc-expiration">Expiration</label>
                            <input type="text" className="form-control" id="cc-expiration" placeholder="" required=""/>
                                <div className="invalid-feedback"> Expiration date required </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <label htmlFor="cc-expiration">CVV</label>
                            <input type="text" className="form-control" id="cc-cvv" placeholder="" required="" value={this.state.data}/>
                                <div className="invalid-feedback"> Security code required </div>
                        </div>
                    </div>
                    <hr className="mb-4"/>
                    <button className="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>
                </form>
                <br/>
                <button className="btn btn-primary btn-lg btn-block" onClick = {this.setNewNumber}>INCREMENT</button>
            </div>
        );
    }
}

export default LeftContent;