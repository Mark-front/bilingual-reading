import React, {memo, useCallback} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import {useTranslation} from 'react-i18next';
import {Button, ThemeButton} from '@/shared/ui/Button';
import {Input} from '@/shared/ui/Input';
import {useSelector} from 'react-redux';
import {loginActions, loginReducer} from '../../model/slice/loginSlice';
import {loginByUsername} from '../../model/services/loginByUsername/loginByUsername';
import {Text} from '@/shared/ui/Text';
import {ThemeText} from '@/shared/ui/Text/ui/Text';
import {getLoginPassword} from '../../model/selectors/getLoginPassword/getLoginPassword';
import {getLoginUsername} from '../../model/selectors/getLoginUsername/getLoginUsermane';
import {getLoginError} from '../../model/selectors/getLoginError/getLoginError';
import {getLoginIsLoading} from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import {DynamicModuleLoader, ReducersList} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {useAppDispatch} from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

export interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
}

const LoginForm = memo(({className = '', onSuccess}: LoginFormProps) => {
    const {t} = useTranslation();
    const dispatch = useAppDispatch();

    const password = useSelector(getLoginPassword);
    const username = useSelector(getLoginUsername);
    const error = useSelector(getLoginError);
    const isLoading = useSelector(getLoginIsLoading);

    const onChangeUsername = useCallback((value: string | undefined) => {
        dispatch(loginActions.setUsername(value || ''));
    }, [dispatch])

    const onChangePassword = useCallback((value: string | undefined) => {
        dispatch(loginActions.setPassword(value || ''));
    }, [dispatch])

    const onLoginClick = useCallback(async () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const result = await dispatch(loginByUsername({password, username}));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess()
        }
    }, [onSuccess, dispatch, username, password])

    return (
        <DynamicModuleLoader key={'loginForm'} reducers={initialReducers}>
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <Text title={'?????????? ??????????????????????'}/>
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
                    {t('??????????')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default LoginForm;