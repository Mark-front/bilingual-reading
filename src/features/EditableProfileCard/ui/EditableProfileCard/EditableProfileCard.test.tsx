import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { EditableProfileCard } from './EditableProfileCard';
import { IProfile } from '@/entities/Profile';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { profileReducer } from '../../model/slices/profileSlice';
import { screen } from '@testing-library/react'
import { userEvent } from '@storybook/testing-library';
import { $api } from '../../../../shared/api/api';

const profile: IProfile = {
    id: '1',
    first: 'admin',
    lastname: 'admin',
    age: 234,
    username: 'admin123',
    currency: Currency.USD,
    city: 'Москва',
    country: Country.Armenia,
}

const options = {
    initialState: {
        profile: {
            readonly: true,
            isLoading: false,
            data: profile,
            form: profile,
        },
        user: {
            authData: {
                id: '1',
                username: 'admin',
            },
        },
    },
    asyncReducers: {
        profile: profileReducer,
    },
}
describe('features/EditableProfileCard', () => {
    test('Переключение режима рид онли', async () => {
        componentRender(<EditableProfileCard/>, options)
        await userEvent.click(screen.getByTestId('EditableProfileHeader.EditButton'))
        expect(screen.getByTestId('EditableProfileHeader.CancelButton')).toBeInTheDocument()
    })

    test('При отмене значение обнуляется', async () => {
        componentRender(<EditableProfileCard/>, options)
        await userEvent.click(screen.getByTestId('EditableProfileHeader.EditButton'))

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'))
        await userEvent.clear(screen.getByTestId('ProfileCard.lastname'))

        await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'poo')
        await userEvent.type(screen.getByTestId('ProfileCard.lastname'), 'poo')

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('poo')
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('poo')

        await userEvent.click(screen.getByTestId('EditableProfileHeader.CancelButton'))

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue(profile.first)
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue(profile.lastname)
    })
    /** TODO пофиксить тест */
    test('Должна появиться ошибка', async () => {
        componentRender(<EditableProfileCard/>, options)
        await userEvent.click(screen.getByTestId('EditableProfileHeader.EditButton'))

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'))

        await userEvent.click(screen.getByTestId('EditableProfileHeader.SaveButton'))

        expect(screen.getByTestId('ProfileCard.Error.Paragraph')).toBeInTheDocument()
    })

    test('Если нет ошибки на сервер должен уйти PUT запрос', async () => {
        const mockPutReq = jest.spyOn($api, 'put')
        componentRender(<EditableProfileCard/>, options)
        await userEvent.click(screen.getByTestId('EditableProfileHeader.EditButton'))

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'))
        await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'poo')

        await userEvent.click(screen.getByTestId('EditableProfileHeader.SaveButton'))

        expect(mockPutReq).toHaveBeenCalled()
    })
})
