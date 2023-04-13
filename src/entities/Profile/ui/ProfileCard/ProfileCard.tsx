import React from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ProfileCard.module.scss';
import { Text, ThemeText } from '@/shared/ui/Text';
import { Input } from '@/shared/ui/Input';
import { IProfile } from '../../model/types/profile';
import { Loader } from '@/shared/ui/Loader';
import { Avatar } from '@/shared/ui/Avatar';
import { CurrencySelect, TCurrency } from '@/entities/Currency';
import { CountrySelect, TCountry } from '@/entities/Country';

interface IProfileCartProps {
    className?: string;
    data?: IProfile;
    error?: string;
    isLoading?: boolean;
    readonly?: boolean;
    onChangeFirstName?: (value?: string) => void;
    onChangeLastName?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeNickname?: (value?: string) => void;
    onChangeCountry?: (value?: TCountry) => void;
    onChangeCity?: (value?: string) => void;
    onChangeCurrency?: (value?: TCurrency) => void;
    onChangeAvatar?: (value?: string) => void;
}

export const ProfileCard = (props: IProfileCartProps) => {
    const {
        className = '',
        data,
        isLoading = true,
        error,
        readonly = false,
        onChangeFirstName,
        onChangeLastName,
        onChangeCurrency,
        onChangeCity,
        onChangeAvatar,
        onChangeCountry,
        onChangeNickname,
        onChangeAge,
    } = props;

    const { t } = useTranslation()

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [ cls.isLoading ])}>
                <Loader/>
            </div>
        )
    }
    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [ cls.isError ])}>
                <Text text={error} theme={ThemeText.ERROR}/>
            </div>
        )
    }
    return (
        <div className={classNames(cls.ProfileCard, {}, [ className ])}>
            {
                data?.avatar &&
                <div className={cls.avatarWrapper}>
                    <Avatar src={data?.avatar} alt={t('аватар') || 'аватар'}/>
                </div>
            }
            <Input
                placeholder={t('Ваше имя') || 'Ваше имя'}
                value={data?.first || ''}
                className={cls.input}
                readOnly={readonly}
                onChange={onChangeFirstName}
            />
            <Input
                placeholder={t('Ваше фамилия') || 'Ваше фамилия'}
                value={data?.lastname || ''}
                className={cls.input}
                readOnly={readonly}
                onChange={onChangeLastName}
            />
            <Input
                placeholder={t('Возраст') || 'Возраст'}
                value={data?.age || ''}
                className={cls.input}
                readOnly={readonly}
                onChange={onChangeAge}
            />
            <Input
                placeholder={t('Никнейм') || 'Никнейм'}
                value={data?.username || ''}
                className={cls.input}
                readOnly={readonly}
                onChange={onChangeNickname}
            />
            <CountrySelect
                className={cls.input}
                value={data?.country}
                onChange={onChangeCountry}
                readonly={readonly}
            />
            <Input
                placeholder={t('Город') || 'Город'}
                value={data?.city || ''}
                className={cls.input}
                readOnly={readonly}
                onChange={onChangeCity}
            />
            <CurrencySelect
                className={cls.input}
                value={data?.currency}
                onChange={onChangeCurrency}
                readonly={readonly}
            />
            <Input
                placeholder={t('Фото') || 'Фото'}
                value={data?.avatar || ''}
                className={cls.input}
                readOnly={readonly}
                onChange={onChangeAvatar}
            />
        </div>
    );
}