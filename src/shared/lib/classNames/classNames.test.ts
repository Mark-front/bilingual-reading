import { classNames } from '@/shared/lib/classNames/classNames'
describe('classNames', () => {
    test('with only first params', () => {
        expect(classNames('someClass', {}, [])).toBe('someClass')
    })
    test('with additional params', () => {
        const expected = 'someClass lols'
        expect(classNames('someClass', {}, [ 'lols' ])).toBe(expected)
    })
    test('with mods', () => {
        const expected = 'someClass lols is-hovered'
        expect(classNames(
            'someClass',
            { 'is-hovered': true, 'visually-hidden': false },
            [ 'lols' ])).toBe(expected)
    })
})
