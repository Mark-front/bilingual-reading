import { Page } from '@/widgets/Page'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'

const NotFoundPage = memo(() => {
    const { t } = useTranslation()
    return (
        <Page>
            <div>
                {t('Страница не найдена')}
            </div>
        </Page>
    )
})
export default NotFoundPage
