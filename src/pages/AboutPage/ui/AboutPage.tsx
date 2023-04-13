import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Page } from '@/shared/ui/Page';

const AboutPage = memo(() => {
    const { t } = useTranslation()
    return (
        <Page>
            <div>
                {t('О нас')}
            </div>
        </Page>
    )
})

export default AboutPage
