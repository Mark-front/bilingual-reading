import React, {memo} from 'react'
import {useTranslation} from 'react-i18next'

const NotFoundPage = memo(() => {
    const {t} = useTranslation()
    return (
        <div>
            {t('Страница не найдена')}
        </div>
    )
})
export default NotFoundPage
