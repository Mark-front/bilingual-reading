import React, { HTMLAttributeAnchorTarget, memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticleListItem.module.scss';
import { Text } from '@/shared/ui/Text';
import { ArticleView, IArticle, IArticleBlockText, TArticleView, TypeBlock } from '../../model/types/article';
import { Card } from '@/shared/ui/Card';
import { Avatar } from '@/shared/ui/Avatar';
import { Icon } from '@/shared/ui/Icon';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import { Button, ButtonSize, ThemeButton } from '@/shared/ui/Button';
import { ArticleBlockText } from '../../ui/ArticleBlockText/ArticleBlockText';
import { useNavigate } from 'react-router-dom';
import { AppLink } from '@/shared/ui/AppLink';
import { getRouteArticleDetail } from '@/shared/const/router';

interface IArticleListItemProps {
    className?: string;
    article: IArticle;
    view: TArticleView;
    target: HTMLAttributeAnchorTarget;

}

export const ArticleListItem = memo((props: IArticleListItemProps) => {
    const {
        className = '',
        article,
        view,
        target,
    } = props;

    const { t } = useTranslation()
    const navigate = useNavigate()

    const onOpenArticle = useCallback(() => {
        navigate(getRouteArticleDetail(article.id))
    }, [ article.id, navigate ])

    const types = <Text text={article.type.join(', ')} className={cls.types}/>
    const views = (
        <div className={cls.views}>
            <Text text={String(article.views)}/>
            <Icon Svg={EyeIcon} className={cls.eye}/>
        </div>
    )

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find((block) => {
            return block.type === TypeBlock.TEXT;
        }) as IArticleBlockText;

        return (
            <div
                className={classNames(cls.ArticleListItem, {}, [ className, cls[view] ])}
                data-testid='ArticleListItem'
            >
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Avatar size={30} src={article.user.avatar || ''}/>
                        <Text text={article.user.username} className={cls.username}/>
                        <Text text={article.createdAt} className={cls.data}/>
                    </div>
                    <Text title={article.title} className={cls.title}/>
                    {types}
                    <img src={article.img} alt={article.title} className={cls.img}/>
                    {textBlock && (
                        <ArticleBlockText
                            block={textBlock}
                            className={cls.textBlock}
                        />
                    )}
                    <div className={cls.footer}>
                        <AppLink to={getRouteArticleDetail(article.id)}
                            target={target}>
                            <Button theme={ThemeButton.OUTLINE} size={ButtonSize.XL} onClick={onOpenArticle}>
                                {t('Читать далее')}
                            </Button>
                        </AppLink>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <AppLink
            to={getRouteArticleDetail(article.id)}
            className={classNames(cls.ArticleListItem, {}, [ className, cls[view] ])}
            target={target}
            data-testid='ArticleListItem'
        >
            <Card className={cls.card} onClick={onOpenArticle}>
                <div className={cls.imageWrapper}>
                    <img src={article.img} alt={article.title}/>
                    <Text text={article.createdAt} className={cls.data}/>
                </div>
                <div className={cls.infoWrapper}>
                    {types}
                    {views}
                </div>
                <Text text={article.title} className={cls.title}/>
            </Card>
        </AppLink>
    );
})

ArticleListItem.displayName = 'ArticleListItem'