import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Count.css';

let style = {
    width: '100%',
    overflow: 'hidden',
    margin: '20px'
}

export default class Count extends Component {
    constructor(props) {
        super(props)

        this.onMinusClick = this.onMinusClick.bind(this)
        this.onPlusClick = this.onPlusClick.bind(this)
        this.updateCount = this.updateCount.bind(this)

        this.state = {
            count: props.initialCount
        }
    }

    onMinusClick() {
        this.updateCount(false)
    }

    onPlusClick() {
        this.updateCount(true)
    }

    updateCount(isAdd) {
        let oldCount = this.state.count
        let newCount = isAdd ? this.state.count + 1 : this.state.count - 1

        this.setState({
            count: newCount
        })

        // 调用父组件的方法
        this.props.onUpdataCount(newCount, oldCount)

        // 这里的this.state.count还没有更新
        // console.log(this.state.count);
    }

    componentDidUpdate() {
        // 这里的this.state.count是更新过的值
        // console.log(this.state.count);
    }

    render() {
        const { caption } = this.props
        return (
            <div className="count" style={style}>
                <div className="caption">{caption}</div>
                <div className="minus" onClick={this.onMinusClick}>-</div>
                <div className="count">{this.state.count}</div>
                <div className="plus" onClick={this.onPlusClick}>+</div>
            </div>
        )
    }
}

// 规定prop的类型
Count.propTypes = {
    initialCount: PropTypes.number,
    caption: PropTypes.string.isRequired,
    onUpdataCount: PropTypes.func
}

// 规定prop的默认值
Count.defaultProps = {
    initialCount: 0,
    onUpdataCount: f => f // 什么都不做
}
