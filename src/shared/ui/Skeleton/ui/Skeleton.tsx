import React, { CSSProperties, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Skeleton.module.scss';

export const ThemeSkeleton = {
    AVATAR: 'avatar',
    TITLE: 'title',
    PARAGRAPH: 'paragraph',
} as const;

export type TTypeSkeleton = (typeof ThemeSkeleton)[keyof typeof ThemeSkeleton];

interface ISkeletonProps {
    className?: string;
    theme?: TTypeSkeleton;
    height?: string | number
    width?: string | number
    radius?: string
}

export const Skeleton = memo((props: ISkeletonProps) => {
    const {
        className = '',
        theme = ThemeSkeleton.PARAGRAPH,
        height, width, radius,
    } = props;

    const { t } = useTranslation()

    const styles: CSSProperties = {
        width: width,
        height: height,
        borderRadius: radius,
    }

    return (
        <div
            className={classNames(cls.Skeleton, {}, [ className, cls[theme] ])}
            style={styles}
        />
    );
})

Skeleton.displayName = 'Skeleton'