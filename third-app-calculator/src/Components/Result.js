import React, { Component } from 'react';
import './Result.css';

class Result extends Component {

    render() {
        return (
            <div className="Result">
                <p>{this.props.result}</p>
            </div>
        );
    }
}

export default Result;