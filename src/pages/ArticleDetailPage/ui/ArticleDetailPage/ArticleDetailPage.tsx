import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticleDetailPage.module.scss';
import { ArticleDetails } from '@/entities/Article';
import { useParams } from 'react-router-dom';
import { Text, ThemeText } from '@/shared/ui/Text';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from '@/widgets/Page';
import { articleDetailsPageReducer } from '../../model/slices';
import { ArticleDetailPageHeader } from '../ArticleDetailPageHeader/ArticleDetailPageHeader';
import { ArticleRecomendationsList } from '@/features/ArticleRecomendationsList';
import { ArticleDetailComments } from '../ArticleDetailComments/ArticleDetailComments';
import { VStack } from '@/shared/ui/Stack';
import { ArticleRating } from '@/features/ArticleRating';

interface IArticleDetailPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
}
const ArticleDetailPage = (props: IArticleDetailPageProps) => {
    const {
        className = '',
    } = props;

    const { t } = useTranslation()
    const { id } = useParams()

    if (!id && __PROJECT__ !== 'storybook') {
        return (
            <Text
                className={classNames(cls.Error, {}, [ className ])}
                theme={ThemeText.ERROR}
                text={t('Статья не найдена') || 'Статья не найдена'}
            />
        )
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page>
                <VStack max gap={'32'} className={classNames(cls.ArticleDetailPage, {}, [ className ])}>
                    <ArticleDetailPageHeader/>
                    <ArticleDetails id={id as string}/>
                    <ArticleRecomendationsList/>
                    <ArticleRating articleId={id as string}/>
                    <ArticleDetailComments id={id as string}/>
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
}

export default memo(ArticleDetailPage)