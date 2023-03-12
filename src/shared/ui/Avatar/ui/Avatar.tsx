import React, {CSSProperties, useMemo} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {Mods} from '../../../lib/classNames/classNames';
import cls from './Avatar.module.scss';

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

    const {t} = useTranslation()

    const styles = useMemo<CSSProperties>(() => {
        return {
            width: size || 100,
            height: size || 100,
        }
    }, [size])
    const mods: Mods = {}

    return (
        <img
            style={styles}
            src={src}
            alt={alt}
            className={classNames(cls.Avatar, mods, [className])}/>
    );
}