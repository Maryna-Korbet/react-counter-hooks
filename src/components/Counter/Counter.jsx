import css from 'components/Counter/Counter.module.css';
import { Component } from 'react';

class Counter extends Component {

    static defaultProps = {
        initialValue: 0,
    };

    state = {
        value: this.props.initialValue,
    };

    handleIncrement = () => {
        this.setState(prevState => ({
            value: prevState.value + 1,
        }));
    };

    handleDecrement = () => {
        this.setState(prevState => ({
            value: prevState.value - 1,
        }));
    };


    render() {
        return (
            <div className={css.counter}>
                <span className={css.value}>{this.state.value}</span>
                <div>
                    <button type="button" className={css.button} onClick={this.handleIncrement}>Increment by 1</button>
                    <button type="button" className={css.button} onClick={this.handleDecrement}>Decrement by 1</button>
                </div>
            </div>
    )  
    }
}

export default Counter;