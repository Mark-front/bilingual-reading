import React, { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { profileActions } from '../../model/slices/profileSlice';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { HStack } from '@/shared/ui/Stack/HStack/HStack';
import { getUserAuthData } from '@/entities/User';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { Text } from '@/shared/ui/Text';

interface IProfilePageHeaderProps {
    className?: string;
}


export const EditableProfileHeader = memo((props: IProfilePageHeaderProps) => {
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
        <HStack justify={'between'} max className={classNames('', {}, [ className ])}>
            <Text title={t('Профиль пользователя') || 'Профиль пользователя'}/>

            {
                readonly ?
                    (
                        <Button
                            onClick={onEdit}
                            theme={ThemeButton.BACKGROUND_INVERTED}
                            data-testid={'EditableProfileHeader.EditButton'}
                        >
                            {t('Редактировать')}
                        </Button>
                    )

                    : (
                        <HStack gap={'8'} justify={'end'}>
                            <Button
                                onClick={onCancelEdit}
                                theme={ThemeButton.OUTLINE}
                                data-testid={'EditableProfileHeader.CancelButton'}
                            >
                                {t('Отменить')}
                            </Button>
                            <Button
                                onClick={onSaveEdit}
                                theme={ThemeButton.BACKGROUND_INVERTED}
                                data-testid={'EditableProfileHeader.SaveButton'}
                            >
                                {t('Сохранить')}
                            </Button>
                        </HStack>
                    )
            }
        </HStack>
    );
})

EditableProfileHeader.displayName = 'EditableProfileHeader'