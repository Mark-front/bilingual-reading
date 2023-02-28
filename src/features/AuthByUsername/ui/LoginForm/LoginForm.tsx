import React, {memo, useCallback} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import {useTranslation} from 'react-i18next';
import {Button, ThemeButton} from '@/shared/ui/Button';
import {Input} from '@/shared/ui/Input';
import {useDispatch, useSelector} from 'react-redux';
import {loginActions} from '../../modal/slice/loginSlice';
import {getLoginState} from '../../modal/selectors/getLoginState/getLoginState';
import {loginByUsername} from '../../modal/services/loginByUsername/loginByUsername';
import {Text} from '@/shared/ui/Text';
import {ThemeText} from '@/shared/ui/Text/ui/Text';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo(({className = ''}: LoginFormProps) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();

    const {
        password,
        error,
        username,
        isLoading,
    } = useSelector(getLoginState);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch])

    const onLoginClick = useCallback(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        dispatch(loginByUsername({password, username}))
    }, [dispatch, username, password])

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={'Форма авторизации'}/>
            {error && <Text theme={ThemeText.ERROR} text={error}/>}
            <Input
                type="text"
                name='username'
                onChange={onChangeUsername}
                placeholder={'username'}
                value={username}
            />
            <Input
                type="text"
                name='password'
                onChange={onChangePassword}
                placeholder={'password'}
                value={password}
            />
            <Button
                theme={ThemeButton.BACKGROUND_INVERTED}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t('Войти')}
            </Button>
        </div>
    );
});