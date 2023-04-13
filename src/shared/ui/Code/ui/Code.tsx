import React, { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Code.module.scss';
import { Button } from '@/shared/ui/Button';
import Copy from '@/shared/assets/icons/copy.svg'
import { Icon } from '@/shared/ui/Icon';

interface ICodeProps {
    className?: string;
    text: string;
}

export const Code = memo((props: ICodeProps) => {
    const {
        className = '',
        text,
    } = props;

    const { t } = useTranslation()

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text)
    }, [ text ])

    return (
        <pre className={classNames(cls.Code, {}, [ className ])}>
            <Button className={cls.copyBtn} onClick={onCopy}>
                <Icon Svg={Copy}/>
            </Button>
            <code>
                {text}
            </code>
        </pre>
    );
})

Code.displayName = 'Code'