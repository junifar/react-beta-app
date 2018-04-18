import React, { Component } from 'react';
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

class Contoh extends Component {
	constructor(){
        super();
	}

    // load = ()=>{
    //     this.setState({isLoading: true});
    //     fetch().then(()=>{
    //         // deal with data fetched
    //         this.setState({isLoading: false})
    //     })
    // };

	render() {
		return (
            <div className="py-5">
                {/*{this.state.isLoading ? <Pace color="#27ae60"/> : null}*/}
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