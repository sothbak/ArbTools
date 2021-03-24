import React, { Component } from 'react';
import Aux from '../../../hoc/Auxil';
import { render } from 'react-dom';

class AFLarb extends Component {

    test = () => {
        alert("submitted");
    };
    
    render() {
        return (
            <form onSubmit={this.test}>
                <h1>YOYOYO</h1>
                <label>
                    Back stake
                    <input type="number" value={this.props.inputValue} onChange={this.props.whenChanged} />
                </label>
                <label>
                    Back odds
                    <input type="number" value={this.props.inputValue} onChange={this.props.whenChanged} />
                </label>
                <label>
                    Lay odds
                    <input type="number" value={this.props.inputValue} onChange={this.props.whenChanged} />
                </label>
                <input type="submit" value="Calculate" />
            </form>
        );
    };
};

export default AFLarb;