import React from 'react';
import ReactDOM from 'react-dom';
import {circleState} from '../action'
import {connect} from 'react-redux'; // 引入connect
class Circle extends React.Component {
    componentDidMount() {
        let a = "李钦";
        const {circleState} = this.props;
        circleState(a);
    }
    render() {
        return (
            <div>
                <h1>Circle</h1>
                <div>
                    {
                      this.props.circleStatenei.params.data
                    }
                </div>
            </div>
        )
    }
}
const propertys = state => {
    return {circleStatenei: state.rootData.circle}
}
Circle = connect(propertys, {circleState})(Circle);
module.exports = Circle;
