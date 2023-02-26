import React, {useState} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import {useTranslation} from 'react-i18next';
import {Button, ThemeButton} from '@/shared/ui/Button';
import {Input} from '@/shared/ui/Input';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({className = ''}: LoginFormProps) => {
    const {t} = useTranslation();

    const [password, setPassword] = useState('');
    const handleChangePassword = (value: string) => {
        setPassword(value)
    }


    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input type="text"/>
            <Input
                type="text"
                name='password'
                onChange={handleChangePassword}
                value={password}
            />
            <Button theme={ThemeButton.BACKGROUND_INVERTED}>
                {t('Войти')}
            </Button>
        </div>
    );
};