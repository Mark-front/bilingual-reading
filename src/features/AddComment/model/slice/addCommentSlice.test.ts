import {IAddCommentSchema} from '../types/addCommentSchema';
import {addCommentActions, addCommentReducer} from '../slice/addCommentSlice';

describe('addCommentSlice.test', () => {
    test('edit text', () => {
        const state: IAddCommentSchema = {text: ''}
        expect(addCommentReducer(state, addCommentActions.setText('qwrqwerqwer'))).toEqual({
            ...state,
            text: 'qwrqwerqwer',
        })
    });
})