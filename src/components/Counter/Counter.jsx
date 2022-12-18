import css from 'components/Counter/Counter.module.css';
import { Component } from 'react';

class Counter extends Component {
    render() {
        return (
            <div className={css.counter}>
                <div className={css.value}>0</div>
                <div>
                    <button type="button" className={css.button}>Increment by 1</button>
                    <button type="button" className={css.button}>Decrement by 1</button>
                </div>
            </div>
    )  
    }
}

export default Counter;