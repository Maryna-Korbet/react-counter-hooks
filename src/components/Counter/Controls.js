import css from 'components/Counter/Counter.module.css';

const Controls = ({ onIncrement, onDecrement }) => (
    <div>
        <button type="button" className={css.button} onClick={onIncrement}>Increment by 1</button>
        <button type="button" className={css.button} onClick={onDecrement}>Decrement by 1</button>
    </div>
)

export default Controls;