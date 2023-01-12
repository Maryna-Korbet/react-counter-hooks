import { useState, useEffect } from 'react';
import css from 'components/Counter/Counter.module.css';


export default function Counter() {

    const [counterA, setCounterA] = useState(0);
    const [counterB, setCounterB] = useState(0); 

    const handleCounterAIncrement = () => {
        setCounterA(state => state + 1);
    };

    const handleCounterBIncrement = () => {
        setCounterB(state => state + 1);
    };

    useEffect(() => {
        const totalClicks = counterA + counterB;
        document.title ='${totalClicks} clicks';
    }, [counterA, counterB]);

    return (
        <>
            <button
                type="button"
                className={css.button}
                onClick={handleCounterAIncrement}>
                Clicked counterA ${counterA} times
            </button>

            <button
                type="button"
                className={css.button}
                onClick={handleCounterBIncrement}>
                Clicked counterB ${counterB} times
            </button>
        </>
)  
};

