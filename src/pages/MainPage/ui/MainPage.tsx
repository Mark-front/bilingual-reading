import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Counter } from '@/entities/Counter';
import { Page } from '@/shared/ui/Page';

const MainPage = memo(() => {
    const { t } = useTranslation()
    return (
        <Page>
            <div>
                {t('Главная')}
                <br/>
                <Counter/>
            </div>
        </Page>
    )
})

export default MainPage
