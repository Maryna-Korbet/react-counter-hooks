import css from 'components/Counter/Counter.module.css';

const Value = ({ value }) =>
    <span className={css.value}>{value}</span>;


export default Value;