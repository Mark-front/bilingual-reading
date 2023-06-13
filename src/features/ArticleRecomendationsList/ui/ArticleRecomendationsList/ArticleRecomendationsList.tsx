import cls from './ArticleRecomendationsList.module.scss';
import React, { memo } from 'react';
import { ArticleList, ArticleView } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsListApi';
import { t } from 'i18next';
import { Text, TextSize } from '@/shared/ui/Text';
import { VStack } from '@/shared/ui/Stack';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecomendationsList = memo((props: ArticleRecommendationsListProps) => {
    const {
        className,
    } = props;

    const { isLoading, data } = useArticleRecommendationsList(4)

    return (
        <VStack data-testid='ArticleRecomendationsList' align={'start'} gap={'16'}>
            <Text className={cls.Comments} size={TextSize.L} title={t('Рекоммендации') || 'Рекоммендации'}/>
            <ArticleList
                target={'_blank'}
                className={classNames(cls.ArticleRecomendationsList, {}, [ className ])}
                articles={data} isLoading={isLoading}
                withoutVirtual={true}
                view={ArticleView.SMALL}
            />
        </VStack>
    );
});