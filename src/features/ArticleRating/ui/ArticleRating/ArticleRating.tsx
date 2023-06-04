import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { RatingCard } from '@/entities/Rating';
import { useGetArticleRating, useRateArticle } from '../../api/articleRatingApi';
import { Skeleton } from '@/shared/ui/Skeleton';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';

export interface ArticleRatingProps {
    className?: string;
    articleId: string;
}

const ArticleRating = memo((props: ArticleRatingProps) => {
    const {
        className,
        articleId,
    } = props;
    const { t } = useTranslation();

    const userData = useSelector(getUserAuthData);

    const { isLoading, data } = useGetArticleRating({ articleId, userId: userData?.id ?? '' });
    const [ rateArticleMutation ] = useRateArticle();

    const handleRateArticle = useCallback((starsCount: number, feedback?: string) => {
        try {
            rateArticleMutation({
                userId: userData?.id ?? '',
                rate: starsCount,
                articleId: articleId,
                feedback: feedback,
            })
        } catch (e) {
            // handle error
            console.error(e)
        }
    }, [ articleId, rateArticleMutation, userData?.id ]);

    const onCancel = useCallback((starsCount: number) => {
        handleRateArticle(starsCount)
        console.log('++')
    }, [ handleRateArticle ]);

    const onAccept = useCallback((starsCount: number, feedback?: string) => {
        handleRateArticle(starsCount, feedback)
    }, [ handleRateArticle ]);

    if (isLoading) {
        return (
            <Skeleton width={'100%'} height={250}/>
        );
    }

    const rating = data?.[0];

    return (
        <RatingCard
            onCancel={onCancel}
            onAccept={onAccept}
            className={classNames('', {}, [ className ])}
            title={t('Оцените статью') || 'Оцените статью'}
            feedbackTitle={t('Оставьте отзыв') || 'Оставьте отзыв'}
            rate={rating?.rate}
        />
    );
});

export default ArticleRating