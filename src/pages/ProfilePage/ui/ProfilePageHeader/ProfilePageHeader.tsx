import React, { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from '@/shared/ui/Text';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getProfileReadonly, profileActions } from '@/entities/Profile';
import { useSelector } from 'react-redux';
import cls from './ProfilePageHeader.module.scss';
import { getProfileData, updateProfileData } from '../../../../entities/Profile';
import { getUserAuthData } from '../../../../entities/User';

interface IProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = memo((props: IProfilePageHeaderProps) => {
    const {
        className = '',
    } = props;

    const { t } = useTranslation();

    const dispatch = useAppDispatch();
    const readonly = useSelector(getProfileReadonly);
    const authData = useSelector(getUserAuthData)
    const profileData = useSelector(getProfileData)

    const canEdit = authData?.id === profileData?.id

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false))
    }, [ dispatch ]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit())
    }, [ dispatch ]);

    const onSaveEdit = useCallback(() => {
        dispatch(profileActions.saveProfile())
        dispatch(updateProfileData())
    }, [ dispatch ]);

    if (!canEdit) return (
        <div className={classNames(cls.ProfilePageHeader, {}, [ className ])}>
            <Text className={cls.title} title={t('Профиль пользователя') || 'Профиль пользователя'}/>
        </div>
    )

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [ className ])}>
            <Text className={cls.title} title={t('Профиль пользователя') || 'Профиль пользователя'}/>

            {
                readonly ?
                    (
                        <Button
                            onClick={onEdit}
                            className={cls.btnEdit}
                            theme={ThemeButton.BACKGROUND_INVERTED}
                        >
                            {t('Редактировать')}
                        </Button>
                    )

                    : (
                        <div className={cls.btns}>
                            <Button
                                onClick={onCancelEdit}
                                className={cls.btnSave}
                                theme={ThemeButton.OUTLINE}
                            >
                                {t('Отменить')}
                            </Button>
                            <Button
                                onClick={onSaveEdit}
                                className={cls.btnEdit}
                                theme={ThemeButton.BACKGROUND_INVERTED}
                            >
                                {t('Сохранить')}
                            </Button>
                        </div>
                    )
            }
        </div>
    );
})