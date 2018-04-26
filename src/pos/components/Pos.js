import React, { Component } from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";
import jQuery from 'jquery/dist/jquery.min';
window.jQuery = jQuery;
require('jQuery-Scanner-Detection/jquery.scannerdetection');

class Pos extends Component {

    componentDidMount(){
        window.addEventListener('load', this.handleLoad);
    }

    handleLoad(){
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.innerHTML = "jQuery(document).scannerDetection({" +
            "onComplete: function(barcode){" +
            "alert(barcode);" +
            "}" +
            "});";
        document.body.appendChild(script);
    }

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