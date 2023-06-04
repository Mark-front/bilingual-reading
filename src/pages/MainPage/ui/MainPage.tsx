import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Counter } from '@/entities/Counter';
import { Page } from '@/widgets/Page';
import { RatingCard } from '@/entities/Rating';

const MainPage = memo(() => {
    const { t } = useTranslation()
    return (
        <Page>
            <div>
                {t('Главная')}
                <br/>
                <Counter/>
                <RatingCard title={'asdfasdf'} hasFeedback={true}/>

            </div>
        </Page>
    )
})

export default MainPage
