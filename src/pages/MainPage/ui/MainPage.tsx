import React from 'react'
import {useTranslation} from 'react-i18next'
import {Counter} from '../../../entities/Counter';
import {Input} from '../../../shared/ui/Input';

const MainPage = () => {
    const {t} = useTranslation()
    return (
        <div>
            {t('Главная')}
            <br/>
            <Counter/>
            <Input
                type="text"
                name='password'
            />
        </div>
    )
}

export default MainPage
