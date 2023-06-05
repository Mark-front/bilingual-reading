import React, { memo } from 'react';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = memo(() => {

    const dispatch = useDispatch();
    const count = useSelector(getCounterValue)
    const increment = () => {
        dispatch(counterActions.increment())
    }
    const decrement = () => {
        dispatch(counterActions.decrement())
    }
    return (
        <div>
            <Button
                square={true}
                theme={ThemeButton.BACKGROUND_INVERTED}
                onClick={increment}
                data-testid="btn-increment"
            >
                {'+'}
            </Button>
            <h1 data-testid="count-title">{count}</h1>
            <Button
                square={true}
                theme={ThemeButton.BACKGROUND_INVERTED}
                onClick={decrement}
                data-testid="btn-decrement"
            >
                {'-'}
            </Button>
        </div>
    );
})