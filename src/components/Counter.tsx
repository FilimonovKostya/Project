import React, {useState} from 'react';
import './style.scss'

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const countHandler = () => setCounter(counter + 1)

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={countHandler}>Click</button>

        </div>
    );
};

export default Counter;
