import React, { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticleDetailPageHeader.module.scss';
import { Button, ButtonSize, ThemeButton } from '@/shared/ui/Button';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { getArticleData } from '@/entities/Article';
import { getCanEditArticle } from '../../model/selectors/article';
import { getRouteArticleEdit, getRouteArticles } from '@/shared/const/router';

interface IArticleDetailPageHeaderProps {
    className?: string;
}

export const ArticleDetailPageHeader = memo((props: IArticleDetailPageHeaderProps) => {
    const {
        className = '',
    } = props;

    const navigate = useNavigate();
    const userData = useSelector(getUserAuthData)
    const article = useSelector(getArticleData)
    const canEdit = useSelector(getCanEditArticle)


    const onBackToList = useCallback(() => {
        navigate(getRouteArticles())
    }, [ navigate ])

    const onEditArticle = useCallback(() => {
        navigate(getRouteArticleEdit(article?.id ?? ''))
    }, [ article, navigate ])

    const { t } = useTranslation()

    return (
        <div className={classNames(cls.ArticleDetailPageHeader, {}, [ className ])}>
            <Button theme={ThemeButton.CLEAR} size={ButtonSize.M} onClick={onBackToList}>
                {t('Назад к списку')}
            </Button>
            {canEdit &&
                <Button theme={ThemeButton.CLEAR} size={ButtonSize.M} onClick={onEditArticle}>
                    {t('Редактировать')}
                </Button>
            }

        </div>
    );
})

ArticleDetailPageHeader.displayName = 'ArticleDetailPageHeader'