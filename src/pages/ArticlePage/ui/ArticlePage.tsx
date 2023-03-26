import React, {memo} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import cls from './ArticlePage.module.scss';

interface IArticlePageProps {
    className?: string;
}

const ArticlePage = (props: IArticlePageProps) => {
    const {
        className = '',
    } = props;

    const {t} = useTranslation()

    return (
        <div className={classNames(cls.ArticlePage, {}, [className])}>
            {t('ARTICLE PAGE')}
        </div>
    );
}

export default memo(ArticlePage)