import React, { Component } from 'react';
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

class Contoh extends Component {
	render() {
		return (
            <div className="py-5">
                <div className="container">
                    <div className="row">
						{/*<div className="col-md-4 order-md-2">*/}
							{/*<Header />*/}
							<RightContent/>
							{/*<h1>Contoh</h1>*/}
						{/*</div>*/}
						{/*<div className="col-md-8 order-md-1">*/}
							{/*<Content />*/}
							<LeftContent/>
							{/*<h1>Contoh</h1>*/}
						{/*</div>*/}
					</div>
				</div>
			</div>
		);
	}
}

export default Contoh;