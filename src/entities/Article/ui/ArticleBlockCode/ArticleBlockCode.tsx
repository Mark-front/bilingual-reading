import React, {memo} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import cls from './ArticleBlockCode.module.scss';
import {Code} from '@/shared/ui/Code';
import {IArticleBlockCode} from '../../model/types/article';

interface IArticleBlockCodeProps {
    className?: string;
    block: IArticleBlockCode
}

export const ArticleBlockCode = memo((props: IArticleBlockCodeProps) => {
    const {
        className = '',
        block,
    } = props;

    const {t} = useTranslation()

    return (
        <Code text={block.code} className={classNames(cls.ArticleBlockCode, {}, [className])}/>
    );
})

ArticleBlockCode.displayName = 'ArticleBlockCode'