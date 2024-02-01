import React, { useState } from 'react';
import './ClickCounter.css'

export const ClickCounter = () => {
    const [ count, setCount ] = useState(0);
    const [ loading, setLoading ] = useState(false);

    const onClick = () => {
        setLoading(true);
        setTimeout(() => {
            setCount(count+1);
            setLoading(false);
        }, 500);
    };

    return (
        <div className='clickCounterContainer'>
            <div><button onClick={onClick} disabled={loading}>Click</button></div>
            <span>{count}</span>
        </div>
    );
};
