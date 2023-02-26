import {screen} from '@testing-library/react'
import {componentRender} from '@/shared/lib/tests/componentRender/componentRender';
import {Counter} from './Counter'
import {userEvent} from '@storybook/testing-library';

describe('Counter', () => {
    test('Test counter render', () => {
        componentRender(<Counter/>, {
            initialState: {counter: {value: 10}},
        })
        expect(screen.getByTestId('count-title')).toHaveTextContent('10')
    })
    test('Test counter render increment', () => {
        componentRender(<Counter/>, {
            initialState: {counter: {value: 10}},
        })
        userEvent.click(screen.getByTestId('btn-increment'))
        expect(screen.getByTestId('count-title')).toHaveTextContent('11')
    })
    test('Test counter decrement', () => {
        componentRender(<Counter/>, {
            initialState: {counter: {value: 10}},
        })
        userEvent.click(screen.getByTestId('btn-decrement'))
        expect(screen.getByTestId('count-title')).toHaveTextContent('9')
    })
})
