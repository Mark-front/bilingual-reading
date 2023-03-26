import React, {memo} from 'react';
import {useTranslation} from 'react-i18next';
import {Text, TextSize} from '@/shared/ui/Text';
import cls from './ArticleBlockText.module.scss';
import {IArticleBlockText} from '@/entities/Article/model/types/article';

interface IArticleBlockTextProps {
    className?: string;
    block: IArticleBlockText;
}

export const ArticleBlockText = memo((props: IArticleBlockTextProps) => {
    const {
        className = '',
        block,
    } = props;

    const {t} = useTranslation()

    return (
        <>
            {block.title && <Text size={TextSize.L} title={block.title} className={cls.title}/>}
            {
                block.paragraphs.map(text =>
                    <Text
                        className={cls.paragraph}
                        key={text}
                        size={TextSize.L}
                        text={text}
                    />
                )
            }
        </>
    );
})

ArticleBlockText.displayName = 'ArticleBlockText'
