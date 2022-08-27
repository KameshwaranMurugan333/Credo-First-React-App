import React from "react";

class ClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: this.props.initialCount
        }
    }

    increment = (count) => {
        this.setState({
            count: count
        });
    }

    render() {
        return <div>
            <p>My Initial Count : {this.props.initialCount}</p>
            <p>My Count : {this.state.count}</p>
            <button onClick={(e) => this.increment(this.state.count + 1)} >Increment</button>
        </div>
    }
}

export default ClassComponent;