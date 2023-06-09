import { Page } from '@/widgets/Page'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'

const UnavailablePage = memo(() => {
    const { t } = useTranslation()
    return (
        <Page data-testid='UnavailablePage'>
            <div>
                {t('Недостаточно прав для перехода на страницу')}
            </div>
        </Page>
    )
})
export default UnavailablePage
