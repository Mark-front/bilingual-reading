import React from 'react'
import { useTranslation } from 'react-i18next'

const NotFoundPage = () => {
    const { t } = useTranslation()
    return (
        <div>
            {t('Страница не найдена')}
        </div>
    )
}

export default NotFoundPage
