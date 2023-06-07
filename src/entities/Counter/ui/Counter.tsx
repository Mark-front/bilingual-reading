import React, { memo, useCallback } from 'react';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { useCounterActions } from '../model/slice/counterSlice';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = memo(() => {
    const count = useCounterValue()
    const { add, increment, decrement } = useCounterActions()

    const handleDecrement = () => {
        increment()
    }
    const handleIncrement = () => {
        decrement()
    }

    const handleAddFive = useCallback(() => {
        add(5)
    }, [ add ])
    return (
        <div>
            <Button
                square={true}
                theme={ThemeButton.BACKGROUND_INVERTED}
                onClick={handleIncrement}
                data-testid="btn-increment"
            >
                {'+'}
            </Button>
            <Button
                square={true}
                theme={ThemeButton.BACKGROUND_INVERTED}
                onClick={handleAddFive}
                data-testid="btn-increment"
            >
                {'++'}
            </Button>
            <h1 data-testid="count-title">{count}</h1>
            <Button
                square={true}
                theme={ThemeButton.BACKGROUND_INVERTED}
                onClick={handleDecrement}
                data-testid="btn-decrement"
            >
                {'-'}
            </Button>
        </div>
    );
})