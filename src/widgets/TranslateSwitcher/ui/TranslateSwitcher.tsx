import React from 'react'
import {classNames} from '@/shared/lib/classNames/classNames'
import {useTranslation} from 'react-i18next'
import {Button} from '@/shared/ui/Button'

interface TranslateSwitcherProps {
    className?: string
    short?: boolean
}

export const TranslateSwitcher = ({className, short = false}: TranslateSwitcherProps) => {
    const {t, i18n} = useTranslation(['translation', 'about', 'main'])
    const toggle = () => {
        void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button
            onClick={toggle}
            className={classNames('', {}, [className])}
        >
            {short ? t('Короткий язык') : t('Язык')}
        </Button>
    )
}
