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
import { HStack, VStack } from '@/shared/ui/Stack';

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
            <HStack justify={'center'} className={classNames(cls.ProfileCard, {}, [ cls.isLoading ])}>
                <Loader/>
            </HStack>
        )
    }
    if (error) {

        return (
            <HStack justify={'center'} className={classNames(cls.ProfileCard, {}, [ cls.isError ])}>
                <Text text={error} theme={ThemeText.ERROR} data-testid={'ProfileCard.Error'}/>
            </HStack>
        )
    }
    return (
        <VStack gap={'16'} max align={'start'} className={classNames(cls.ProfileCard, {}, [ className ])}>
            {
                data?.avatar &&
                <div className={cls.avatarWrapper}>
                    <Avatar src={data?.avatar} alt={t('аватар') || 'аватар'}/>
                </div>
            }
            <Input
                placeholder={t('Ваше имя') || 'Ваше имя'}
                value={data?.first || ''}
                readOnly={readonly}
                onChange={onChangeFirstName}
                data-testid={'ProfileCard.firstname'}
            />
            <Input
                placeholder={t('Ваше фамилия') || 'Ваше фамилия'}
                value={data?.lastname || ''}
                readOnly={readonly}
                onChange={onChangeLastName}
                data-testid={'ProfileCard.lastname'}
            />
            <Input
                placeholder={t('Возраст') || 'Возраст'}
                value={data?.age || ''}
                readOnly={readonly}
                onChange={onChangeAge}
                data-testid={'ProfileCard.age'}
            />
            <Input
                placeholder={t('Никнейм') || 'Никнейм'}
                value={data?.username || ''}
                readOnly={readonly}
                onChange={onChangeNickname}
                data-testid={'ProfileCard.username'}
            />
            <CountrySelect
                value={data?.country}
                onChange={onChangeCountry}
                readonly={readonly}
            />
            <Input
                placeholder={t('Город') || 'Город'}
                value={data?.city || ''}
                readOnly={readonly}
                onChange={onChangeCity}
                data-testid={'ProfileCard.city'}
            />
            <CurrencySelect
                value={data?.currency}
                onChange={onChangeCurrency}
                readonly={readonly}
            />
            <Input
                placeholder={t('Фото') || 'Фото'}
                value={data?.avatar || ''}
                readOnly={readonly}
                onChange={onChangeAvatar}
                data-testid={'ProfileCard.avatar'}
            />
        </VStack>
    );
}