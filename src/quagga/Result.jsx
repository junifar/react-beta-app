import React, {Component} from 'react';

class Result extends Component{
    // constructor(props){
    //     super(props);
    //
    //     this.state = {
    //         result: React.PropTypes.object
    //     }
    // }

    render() {
        const result = this.props.result;

        if (!result) {
            return null;
        }
        return (
            <li>
                {result.codeResult.code} [{result.codeResult.format}]
            </li>
        );
    }
}

export default Result;