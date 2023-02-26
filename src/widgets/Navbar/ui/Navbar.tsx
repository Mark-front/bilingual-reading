import React, {useCallback, useState} from 'react'
import {classNames} from '@/shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import {useTranslation} from 'react-i18next';
import {Modal} from '@/shared/ui/Modal';
import {Button, ThemeButton} from '@/shared/ui/Button';

interface NavbarProps {
    className?: string
}

export const Navbar = ({className = ''}: NavbarProps) => {
    const {t} = useTranslation()
    const [isAuthModal, setIsAuthModal] = useState(false)

    const onToggleModal = useCallback(() => {
        setIsAuthModal(prevState => !prevState)
    }, [])

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button
                theme={ThemeButton.CLEAR}
                className={cls.links}
                onClick={onToggleModal}
            >
                {t('Войти')}
            </Button>
            <Modal
                onClose={onToggleModal}
                isOpen={isAuthModal}
            >
                {'12345'}
            </Modal>
        </div>
    )
}
