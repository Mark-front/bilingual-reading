import React, {memo, useCallback} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import {useTranslation} from 'react-i18next';
import {Button, ThemeButton} from '@/shared/ui/Button';
import {Input} from '@/shared/ui/Input';
import {useDispatch, useSelector} from 'react-redux';
import {loginActions, loginReducers} from '../../model/slice/loginSlice';
import {loginByUsername} from '../../model/services/loginByUsername/loginByUsername';
import {Text} from '@/shared/ui/Text';
import {ThemeText} from '@/shared/ui/Text/ui/Text';
import {getLoginPassword} from '../../model/selectors/getLoginPassword/getLoginPassword';
import {getLoginUsername} from '../../model/selectors/getLoginUsername/getLoginUsermane';
import {getLoginError} from '../../model/selectors/getLoginError/getLoginError';
import {getLoginIsLoading} from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import {DynamicModuleLoader, ReducersList} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

export interface LoginFormProps {
    className?: string;
}
const initialReducers: ReducersList = {
    loginForm: loginReducers,
}

const LoginForm = memo(({className = ''}: LoginFormProps) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();

    const password = useSelector(getLoginPassword);
    const username = useSelector(getLoginUsername);
    const error = useSelector(getLoginError);
    const isLoading = useSelector(getLoginIsLoading);

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
        <DynamicModuleLoader key={'loginForm'} reducers={initialReducers}>
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
        </DynamicModuleLoader>
    );
});

export default LoginForm;