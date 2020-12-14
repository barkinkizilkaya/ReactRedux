import react from 'react';
import classes from '../CounterOutput/CounterOutput.module.css';

const CounterOutput = (props) => {

    return (
        <div className={classes.CounterOutput}>
            Current Counter: {props.value}
        </div>
    );

}

export default CounterOutput;
