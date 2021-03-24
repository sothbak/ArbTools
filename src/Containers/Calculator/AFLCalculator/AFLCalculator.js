import React, { Component } from 'react';

import Aux from '../../../hoc/Auxil';
import Racing from '../../../Components/ArbForms/Racing/Racing';

import axios from 'axios';

const COMMISIONS = {
    vicHorse : 0.06,
    nswHorse : 0.10,
    saHorse : 0.05,
    waHorse : 0.08,
    qldHorse : 0.06,
    afl: 0.025,
    nrl: 0.10,
    otherSport: 0.05,
};

class AFLCalculator extends Component {

    state = {
        backStake: 0,
        backOdds: 2,
        layOdds: 2,
        layAmount: 0,
        layLiability: 0,
        raceCommision: 0.06,
        isBonus: "bonus",
    };

    test = () => {
        alert("submitted");
    };

    handleChange = this.handleChange.bind(this);
    
    handleChange(event) {
        this.setState({[event.target.name]: event.target.value}, () => {
            this.setState({layAmount: this.layAmountCalculator()[0], layLiability: this.layAmountCalculator()[1]}, () => {
                // console.log(this.state);
            });
        });
    };

    layAmountCalculator = () => {
        const backOdds = this.state.isBonus === "regular" ? this.state.backOdds : (this.state.backOdds - 1);
        const layAmount = (this.state.backStake * backOdds)/(this.state.layOdds - this.state.raceCommision);
        const liabilityAmount = layAmount * (this.state.layOdds - 1);
        return [layAmount, liabilityAmount];
    };
    
    render() {
        return (
            <div>
                <p>wassup</p>
            </div>
        );
    };
};

export default AFLCalculator;