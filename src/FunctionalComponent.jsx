import React from "react";

const FunctionalComponent = (props) => {

    const [state, setState] = React.useState({ count: props.initialCount });

    const increment = (count) => {
        setState({ ...state, count: count });
    }

    return <div>
        <p>My Initial Count: {props.initialCount}</p>
        <p>My Count: {state.count}</p>
        <button onClick={(e) => increment(state.count + 1)} >Increment</button>
    </div>
}

export default FunctionalComponent;