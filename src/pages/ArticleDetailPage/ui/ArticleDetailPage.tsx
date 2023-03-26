import React, {memo} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import cls from './ArticleDetailPage.module.scss';
import {ArticleDetails} from '@/entities/Article';
import {useParams} from 'react-router-dom';
import {Text, ThemeText} from '../../../shared/ui/Text';

interface IArticleDetailPageProps {
    className?: string;
}

const ArticleDetailPage = (props: IArticleDetailPageProps) => {
    const {
        className = '',
    } = props;

    const {t} = useTranslation()

    const {id} = useParams()
    if (!id) {
        return (
            <Text
                className={classNames(cls.Error, {}, [className])}
                theme={ThemeText.ERROR}
                text={t('Статья не найдена') || 'Статья не найдена'}
            />
        )
    }
    return (
        <div className={classNames(cls.ArticleDetailPage, {}, [className])}>
            <ArticleDetails id={id}/>
        </div>
    );
}

export default memo(ArticleDetailPage)