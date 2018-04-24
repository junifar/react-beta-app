import React, { Component } from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

class Pos extends Component {
    render() {
        return (
            <div className="py-5">
                <div className="container">
                    <div className="row">
                        <RightContent/>
                        <LeftContent/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Pos;