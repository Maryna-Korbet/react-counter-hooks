import { Component } from 'react';
import Controls from 'components/Counter/Controls';
import Value from 'components/Counter/Value';
import css from 'components/Counter/Counter.module.css';


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

                <Value
                    value={this.state.value}
                /> 

                <Controls
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                />
                
            </div>
    )  
    }
}

export default Counter;