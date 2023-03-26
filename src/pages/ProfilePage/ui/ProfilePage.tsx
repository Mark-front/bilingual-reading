import React, {memo, useCallback, useEffect} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {DynamicModuleLoader, ReducersList} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadonly,
    getProfileValidateErrors,
    profileActions,
    ProfileCard,
    profileReducer,
    ValidateProfileError,
} from '@/entities/Profile';
import {useAppDispatch} from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {useSelector} from 'react-redux';
import {ProfilePageHeader} from './ProfilePageHeader/ProfilePageHeader';
import {TCurrency} from '@/entities/Currency';
import {TCountry} from '@/entities/Country';
import {Text, ThemeText} from '@/shared/ui/Text';

// import cls from './ProfilePage.module.scss';

const reducers: ReducersList = {
    profile: profileReducer,
}

interface IProfilePageProps {
    className?: string;
}

const ProfilePage = memo((props: IProfilePageProps) => {
    const {
        className = '',
    } = props;

    const dispatch = useAppDispatch()
    const {t} = useTranslation()

    const form = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const validateErrors = useSelector(getProfileValidateErrors);
    const readonly = useSelector(getProfileReadonly);

    const validateErrorsTranslate = {
        [ValidateProfileError.SERVER_NOT_RESPONSE]: t('Сервер не отвечает'),
        [ValidateProfileError.DATA_NOT_FOUND]: t('Нет данных о пользователе'),
        [ValidateProfileError.INCORRECT_COUNTRY]: t('Страна указана неверно'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t('Неверные данные о пользователе'),
        [ValidateProfileError.INCORRECT_AGE]: t('Возраст указан неверно'),
    }

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            dispatch(fetchProfileData());
        }
    }, [dispatch])

    const onChangeFirstName = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({first: value || ''}))
    }, [dispatch])

    const onChangeLastName = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({lastname: value || ''}))
    }, [dispatch])

    const onChangeNickname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({username: value || ''}))
    }, [dispatch])

    const onChangeCountry = useCallback((value?: TCountry) => {
        dispatch(profileActions.updateProfile({country: value}))
    }, [dispatch])

    const onChangeCity = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({city: value || ''}))
    }, [dispatch])

    const onChangeAge = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({age: Number(value)}))
    }, [dispatch])

    const onChangeCurrency = useCallback((value?: TCurrency) => {
        dispatch(profileActions.updateProfile({currency: value}))
    }, [dispatch])

    const onChangeAvatar = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({avatar: value || ''}))
    }, [dispatch])


    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('cls.ProfilePage', {}, [className])}>
                <ProfilePageHeader/>
                {validateErrors?.length &&
                    validateErrors.map(err =>
                        <Text
                            key={err}
                            theme={ThemeText.ERROR}
                            text={validateErrorsTranslate[err]}
                        />
                    )
                }
                <ProfileCard
                    data={form}
                    error={error}
                    isLoading={isLoading}
                    readonly={readonly}
                    onChangeFirstName={onChangeFirstName}
                    onChangeLastName={onChangeLastName}
                    onChangeAge={onChangeAge}
                    onChangeCountry={onChangeCountry}
                    onChangeCity={onChangeCity}
                    onChangeCurrency={onChangeCurrency}
                    onChangeNickname={onChangeNickname}
                    onChangeAvatar={onChangeAvatar}
                />
            </div>
        </DynamicModuleLoader>
    );
})
export default ProfilePage;