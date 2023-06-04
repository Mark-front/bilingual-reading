import { lazy, Suspense } from 'react'
import { ArticleRatingProps } from './ArticleRating';
import { Skeleton } from '@/shared/ui/Skeleton';

export const ArticleRatingAsync = lazy(async () => await import('./ArticleRating'))

export const ArticleRatingSuspense = (props: ArticleRatingProps) => (
    <Suspense fallback={<Skeleton width={'100%'} height={250}/>}>
        <ArticleRatingAsync {...props}/>
    </Suspense>
)
