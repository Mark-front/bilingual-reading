import React, { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { TabItem, Tabs } from '@/shared/ui/Tabs';
import { ArticleType, TArticleType } from '../../model/types/article';
import { classNames } from '@/shared/lib/classNames/classNames';

interface IArticleTypeTabsProps {
    className?: string;
    type: TArticleType;
    onChangeType: (type: TArticleType) => void;
}

export const ArticleTypeTabs = memo((props: IArticleTypeTabsProps) => {
    const {
        className = '',
        type,
        onChangeType,
    } = props;

    const { t } = useTranslation()
    const typeTabs = useMemo<TabItem[]>(() => [
        {
            value: ArticleType.IT,
            content: t('Айти'),
        },
        {
            value: ArticleType.SCIENCE,
            content: t('Наука'),
        },
        {
            value: ArticleType.ECONOMICS,
            content: t('Экономика'),
        },
        {
            value: ArticleType.ALL,
            content: t('Общее'),
        },
    ], [ t ])

    const onTabClick = useCallback((tab: TabItem) => {
        onChangeType(tab.value as TArticleType)
    }, [ onChangeType ]);

    return (
        <Tabs
            className={classNames('', {}, [ className ])}
            tabs={typeTabs}
            value={type}
            onTabClick={onTabClick}
        />
    );
})

ArticleTypeTabs.displayName = 'ArticleTypeTabs'