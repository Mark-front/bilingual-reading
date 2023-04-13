import React, { memo, useCallback, useState } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { LoginModal } from '@/features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from '@/entities/User';
import { Text } from '@/shared/ui/Text';

interface NavbarProps {
    className?: string
}

export const Navbar = memo(({ className = '' }: NavbarProps) => {
    const { t } = useTranslation()
    const authUserData = useSelector(getUserAuthData);
    const dispatch = useDispatch();
    const [ isAuthModal, setIsAuthModal ] = useState(false)

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false)
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true)
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
    }, [ dispatch ]);

    if (authUserData) {
        return (
            <div className={classNames(cls.navbar, {}, [ className ])}>
                <div className={cls.userLogin}>
                    <Text text={authUserData.username}/>
                    <Button
                        theme={ThemeButton.CLEAR}
                        className={cls.links}
                        onClick={onLogout}
                    >
                        {t('Выйти')}
                    </Button>
                </div>
            </div>
        )
    }

    return (
        <div className={classNames(cls.navbar, {}, [ className ])}>
            <Button
                theme={ThemeButton.CLEAR}
                className={cls.links}
                onClick={onShowModal}
            >
                {t('Войти')}
            </Button>
            <LoginModal
                isOpen={isAuthModal}
                onClose={onCloseModal}
            />
        </div>
    )
})
