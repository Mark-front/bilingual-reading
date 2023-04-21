import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticleEditPage.module.scss';
import { Page } from '@/widgets/Page';
import { useParams } from 'react-router-dom';

interface IArticleEditPageProps {
    className?: string;
}

const ArticleEditPage = memo((props: IArticleEditPageProps) => {
    const {
        className = '',
    } = props;
    const { t } = useTranslation();

    const { id } = useParams<{ id: string }>();

    const isEdit = Boolean(id);

    return (
        <Page className={classNames(cls.ArticleEditPage, {}, [ className ])}>
            {isEdit ? 'ArticleEditPage id = ' + id : 'ArticleCreatePage'}
        </Page>
    );
})

ArticleEditPage.displayName = 'ArticleEditPage';

export default ArticleEditPage;