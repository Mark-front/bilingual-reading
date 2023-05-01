import React, { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from '@/shared/ui/Text';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getProfileData, getProfileReadonly, profileActions, updateProfileData } from '@/entities/Profile';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { HStack } from '@/shared/ui/Stack/HStack/HStack';

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
        <HStack justify={'between'} className={classNames('', {}, [ className ])}>
            <Text title={t('Профиль пользователя') || 'Профиль пользователя'}/>
        </HStack>
    )

    return (
        <HStack justify={'between'} className={classNames('', {}, [ className ])}>
            <Text title={t('Профиль пользователя') || 'Профиль пользователя'}/>

            {
                readonly ?
                    (
                        <Button
                            onClick={onEdit}
                            theme={ThemeButton.BACKGROUND_INVERTED}
                        >
                            {t('Редактировать')}
                        </Button>
                    )

                    : (
                        <HStack gap={'8'}>
                            <Button
                                onClick={onCancelEdit}
                                theme={ThemeButton.OUTLINE}
                            >
                                {t('Отменить')}
                            </Button>
                            <Button
                                onClick={onSaveEdit}
                                theme={ThemeButton.BACKGROUND_INVERTED}
                            >
                                {t('Сохранить')}
                            </Button>
                        </HStack>
                    )
            }
        </HStack>
    );
})