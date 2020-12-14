import react, { useState } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/action';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

const Counter = (props) => {

    return (<div>
        <CounterOutput value={props.ctr} />
        <CounterControl label="Increment" clicked={props.onIncrementCounter} />
        <CounterControl label="Decrement" clicked={props.onDecrementCounter} />
        <CounterControl label="Add 5" clicked={props.onAddCounter} />
        <CounterControl label="Subtract 5" clicked={props.onSubtractCounter} />
        <hr></hr>
        <button onClick={() => props.onStoreResult(props.ctr)}>Store Result</button>
        <ul>
            {props.storedResult.map(strResult =>(
            <li key={strResult.id} onClick={() => props.onDeleteResult(strResult.id)}>{strResult.value}</li>
            ))}
        </ul>


    </div>)

}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResult :state.res.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({
            type: actionTypes.INCREMENT
        }),
        onDecrementCounter: () => dispatch({
            type: actionTypes.DECREMENT
        }),
        onAddCounter: () => dispatch({
            type: actionTypes.ADD,
            value: 10
        }),
        onSubtractCounter: () => dispatch({
            type: actionTypes.SUBTRACT,
            value: 15
        }),
        onStoreResult: (result) => dispatch({
            type: actionTypes.STORE_RESULT,
            result:result
        }),
        onDeleteResult: (id) => dispatch({
            type: actionTypes.DELETE_RESULT,
            resultElId :id
        }),

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);