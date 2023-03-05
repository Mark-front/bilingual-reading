import React from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import cls from './ProfileCard.module.scss';
import {useSelector} from 'react-redux';
import {getProfileData} from '../../model/selectors/getProfileData/getProfileData';
import {getProfileIsLoading} from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import {getProfileError} from '../../model/selectors/getProfileError/getProfileError';
import {Text} from '@/shared/ui/Text';
import {Button, ThemeButton} from '@/shared/ui/Button';
import {Input} from '@/shared/ui/Input';

interface IProfileCartProps {
    className?: string;
}

export const ProfileCard = (props: IProfileCartProps) => {
    const {
        className = '',
    } = props;

    const {t} = useTranslation()

    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div>
                <Text title={t('Проофиль пользователя') || 'Проофиль пользователя'}/>
                <Button theme={ThemeButton.BACKGROUND_INVERTED}>
                    {t('Редактировать')}
                </Button>
                <div className={cls.data}>
                    <Input
                        placeholder={t('Ваше имя') || 'Ваше имя'}
                        value={data?.first}
                        className={cls.input}
                    />
                    <Input
                        placeholder={t('Ваше фамилия') || 'Ваше фамилия'}
                        value={data?.lastname}
                        className={cls.input}
                    />
                </div>
            </div>
        </div>
    );
}