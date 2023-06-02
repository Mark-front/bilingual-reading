import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IIconProps {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    inverted?: boolean;
}

export const Icon = memo((props: IIconProps) => {
    const {
        className = '',
        Svg,
        inverted,
    } = props;


    const mods: Record<string, boolean> = {
        [cls.inverted]: Boolean(inverted),
    }
    return (
        <Svg className={classNames(cls.Icon, mods, [ className ])}/>
    );
})

Icon.displayName = 'Icon'