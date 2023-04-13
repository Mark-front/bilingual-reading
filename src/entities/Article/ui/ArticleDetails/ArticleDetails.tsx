import React, { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

//import from module
import { getArticleData, getArticleError, getArticleIsLoading } from '../../model/selectors/articleDetails';
import { fetchArticleDataById } from '../../model/services/fetchArticleDataById/fetchArticleDataById';
import { ArticleBlockImage } from '../ArticleBlockImage/ArticleBlockImage';
import { ArticleBlockText } from '../ArticleBlockText/ArticleBlockText';
import { ArticleBlockCode } from '../ArticleBlockCode/ArticleBlockCode';
import { TArticleBlock, TypeBlock } from '../../model/types/article';
import { articleReducer } from '../../model/slice/articleSlise';
import cls from './ArticleDetails.module.scss';

//import outside module
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { classNames } from '@/shared/lib/classNames/classNames';
import CalendarIcon from '@/shared/assets/icons/calendar.svg'
import { Skeleton, ThemeSkeleton } from '@/shared/ui/Skeleton';
import { Text, TextSize, ThemeText } from '@/shared/ui/Text';
import EyeIcon from '@/shared/assets/icons/eye.svg'
import { Avatar } from '@/shared/ui/Avatar';
import { Icon } from '@/shared/ui/Icon';

interface IArticleDetailsProps {
    className?: string;
    id: string
}

const reducers: ReducersList = {
    article: articleReducer,
}
export const ArticleDetails = memo((props: IArticleDetailsProps) => {
    const {
        className = '',
        id,
    } = props;

    const { t } = useTranslation()
    const dispatch = useAppDispatch();

    const data = useSelector(getArticleData)
    const isLoading = useSelector(getArticleIsLoading)
    const error = useSelector(getArticleError)

    const renderBlock = useCallback((block: TArticleBlock) => {
        switch (block.type) {
            case TypeBlock.CODE:
                return (
                    <ArticleBlockCode
                        key={block.id}
                        block={block}
                    />
                )
            case TypeBlock.IMAGE:
                return (
                    <ArticleBlockImage
                        key={block.id}
                        block={block}
                    />
                )
            case TypeBlock.TEXT:
                return (
                    <ArticleBlockText
                        key={block.id}
                        block={block}
                    />
                )
            default:
                return null;
        }
    }, [])

    useEffect(() => {
        if (__PROJECT__ === 'storybook') return;
        dispatch(fetchArticleDataById(id))
    }, [ id, dispatch ])


    let content;

    if (isLoading) {
        content = (
            <>
                <Skeleton theme={ThemeSkeleton.AVATAR} className={cls.avatar}/>
                <Skeleton theme={ThemeSkeleton.TITLE} className={cls.skeleton}/>
                <Skeleton theme={ThemeSkeleton.PARAGRAPH} height={100} className={cls.skeleton}/>
                <Skeleton theme={ThemeSkeleton.PARAGRAPH} className={cls.skeleton}/>
                <Skeleton theme={ThemeSkeleton.PARAGRAPH} className={cls.skeleton}/>
                <Skeleton theme={ThemeSkeleton.PARAGRAPH} className={cls.skeleton}/>
            </>
        )
    }

    if (error) {
        content = (
            <Text
                className={classNames(cls.Error, {}, [ className ])}
                theme={ThemeText.ERROR}
                text={t('Произошла ошиюка при загрузке статьи') || 'Произошла ошиюка при загрузке статьи'}
            />
        )
    }

    if (data) {
        content = (
            <>
                <Avatar
                    size={150}
                    src={data.img || ''}
                    className={cls.avatar}
                />
                <Text
                    size={TextSize.L}
                    className={classNames(cls.Error, {}, [ className ])}
                    title={data.title}
                    text={data.subtitle}
                />
                <div className={cls.articleInfo}>
                    <Icon Svg={EyeIcon}/>
                    <Text
                        className={classNames(cls.Error, {}, [ className ])}
                        text={`${data.views}`}
                    />
                </div>
                <div className={cls.articleInfo}>
                    <Icon Svg={CalendarIcon}/>
                    <Text
                        className={classNames(cls.Error, {}, [ className ])}
                        text={`${data.createdAt}`}
                    />
                </div>
                <div>
                    {data.blocks.map(renderBlock)}
                </div>
            </>
        )
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
            <div className={classNames(cls.ArticleDetails, {}, [ className ])}>
                {content}
            </div>
        </DynamicModuleLoader>
    );
})

ArticleDetails.displayName = 'ArticleDetails'