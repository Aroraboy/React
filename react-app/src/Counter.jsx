import React, {useState} from 'react';

function Counter () {

    const [count, seCount] = useState(0);

    const incrememnt = () => {
        seCount(count+1);
    }

    const decrement = () => {
        seCount(count-1);
    }

    const reset = () => {
        seCount(0);
    }

    return (
        <div className="counter-container">
            <h2 className="count-display">Counter : {count} </h2>

            <button className="counter-button" onClick={incrememnt}>Increment</button>
            <button className="counter-button" onClick={decrement}>Decrement</button>
            <button className="counter-button" onClick={reset}>Reset</button>
        </div>
    )
};
export default Counter