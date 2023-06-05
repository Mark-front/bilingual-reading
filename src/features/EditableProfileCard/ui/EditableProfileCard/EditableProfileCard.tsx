import { useTranslation } from 'react-i18next';
import React, { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Text, ThemeText } from '@/shared/ui/Text';
import { TCountry } from '@/entities/Country';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { TCurrency } from '@/entities/Currency';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { profileActions, profileReducer } from '../../model/slices/profileSlice';
import { ProfileCard } from '@/entities/Profile';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { getProfileValidateErrors } from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { EditableProfileHeader } from '../EditableProfileHeader/EditableProfileHeader';
import { ValidateProfileError } from '../../model/types/editableProfileCardSchema';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { VStack } from '@/shared/ui/Stack';
import { classNames } from '@/shared/lib/classNames/classNames';

interface EditableProfileCardProps {
    className?: string;
}

const reducers: ReducersList = {
    profile: profileReducer,
}

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
    const {
        className,
    } = props;

    const dispatch = useAppDispatch()
    const { t } = useTranslation()

    const form = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const validateErrors = useSelector(getProfileValidateErrors);
    const readonly = useSelector(getProfileReadonly);

    const { id } = useParams();

    const validateErrorsTranslate = {
        [ValidateProfileError.SERVER_NOT_RESPONSE]: t('Сервер не отвечает'),
        [ValidateProfileError.DATA_NOT_FOUND]: t('Нет данных о пользователе'),
        [ValidateProfileError.INCORRECT_COUNTRY]: t('Страна указана неверно'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t('Неверные данные о пользователе'),
        [ValidateProfileError.INCORRECT_AGE]: t('Возраст указан неверно'),
    }

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            if (id) {
                dispatch(fetchProfileData(id));
            }
        }
    }, [ dispatch, id ])

    const onChangeFirstName = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ first: value || '' }))
    }, [ dispatch ])

    const onChangeLastName = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ lastname: value || '' }))
    }, [ dispatch ])

    const onChangeNickname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ username: value || '' }))
    }, [ dispatch ])

    const onChangeCountry = useCallback((value?: TCountry) => {
        dispatch(profileActions.updateProfile({ country: value }))
    }, [ dispatch ])

    const onChangeCity = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ city: value || '' }))
    }, [ dispatch ])

    const onChangeAge = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ age: Number(value) }))
    }, [ dispatch ])

    const onChangeCurrency = useCallback((value?: TCurrency) => {
        dispatch(profileActions.updateProfile({ currency: value }))
    }, [ dispatch ])

    const onChangeAvatar = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ avatar: value || '' }))
    }, [ dispatch ])


    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <VStack align={'start'} gap={'32'} className={classNames('', {}, [ className ])}>

                <EditableProfileHeader/>
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
            </VStack>
        </DynamicModuleLoader>
    );
});