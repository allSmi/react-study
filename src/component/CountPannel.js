import React, { Component } from 'react';
import Count from './Count.js';
import './ClickCounter.css';

export default class CountPannel extends Component {
    constructor(props) {
        super(props)

        this.onUpdataCount = this.onUpdataCount.bind(this)
        this.initialCount = [0, 3, 5]

        const total = this.initialCount.reduce((a, b) => {
            return a + b
        }, 0)

        this.state = {
            sum: total
        }
    }

    onUpdataCount(newCount, oldCount) {
        let total = this.state.sum + newCount - oldCount
        this.setState({
            sum: total
        })
    }

    render() {
        return (
            <div>
                <Count initialCount={this.initialCount[0]} caption="first" onUpdataCount={this.onUpdataCount}></Count>
                <Count initialCount={this.initialCount[1]} caption="second" onUpdataCount={this.onUpdataCount}></Count>
                <Count initialCount={this.initialCount[2]} caption="third" onUpdataCount={this.onUpdataCount}></Count>
                <div className="sum">{this.state.sum}</div>
            </div>
        )
    }
}
