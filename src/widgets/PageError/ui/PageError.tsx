import React, {type FC, memo} from 'react'
import {classNames} from '@/shared/lib/classNames/classNames'
import cls from './PageError.module.scss'
import {useTranslation} from 'react-i18next'
import {Button} from '@/shared/ui/Button'

export const PageError: FC = memo((props) => {
    const {t} = useTranslation()

    const reloadPage = () => {
        location.reload()
    }

    return (
        <div className={classNames(cls.PageError, {}, [])}>
            <p className={cls.text}>
                {t('Произошла непредвиденная ошибка')}
            </p>
            <Button onClick={reloadPage} className={cls.btn}>
                {t('Обновить страницу')}
            </Button>
        </div>
    )
}
)