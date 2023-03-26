import React, {memo} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import cls from './ArticleBlockImage.module.scss';
import {Text, TextAlign, TextSize} from '@/shared/ui/Text';
import {IArticleBlockImage} from '../../model/types/article';

interface IArticleBlockImageProps {
    className?: string;
    block: IArticleBlockImage;
}

export const ArticleBlockImage = memo((props: IArticleBlockImageProps) => {
    const {
        className = '',
        block,
    } = props;

    const {t} = useTranslation()

    return (
        <div className={classNames(cls.ArticleBlockImage, {}, [className])}>
            <img src={block.src} alt={block.title || 'Картинка'} className={cls.img}/>
            {block.title && <Text size={TextSize.M} text={block.title} align={TextAlign.CENTER}/>}
        </div>
    );
})

ArticleBlockImage.displayName = 'ArticleBlockImage'