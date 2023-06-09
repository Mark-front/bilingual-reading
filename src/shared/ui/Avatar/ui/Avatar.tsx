import React, { CSSProperties, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Mods } from '../../../lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { AppImg } from '@/shared/ui/AppImg';
import { Skeleton } from '@/shared/ui/Skeleton';
import IconAvatar from '../../../assets/icons/avatar.svg'
import { Icon } from '@/shared/ui/Icon';

interface IAvatarProps {
    className?: string;
    src: string;
    size?: number
    alt?: string
}

export const Avatar = (props: IAvatarProps) => {
    const {
        className = '',
        src,
        size,
        alt,
    } = props;

    const { t } = useTranslation()

    const styles = useMemo<CSSProperties>(() => {
        return {
            width: size || 100,
            height: size || 100,
        }
    }, [ size ])
    const mods: Mods = {}

    return (
        <AppImg
            style={styles}
            src={src}
            alt={alt ?? 'avatar'}
            fallback={<Skeleton width={size} height={size} theme={'avatar'}/>}
            fallbackError={<Icon Svg={IconAvatar}/>}
            className={classNames(cls.Avatar, mods, [ className ])}/>
    );
}