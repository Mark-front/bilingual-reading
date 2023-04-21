import { ArticleDetailsPageSchema } from './model/types'
import { IArticleDetailCommentsSchema } from './model/types/articleDetailCommentsSchema'
import { IArticleDetailRecommendationsSchema } from './model/types/articleDetailRecommendationsSchema'
import { ArticleDetailPageAsync } from './ui/ArticleDetailPage/ArticleDetailPage.async'

export {
    ArticleDetailPageAsync as ArticleDetailPage,
    IArticleDetailCommentsSchema,
    IArticleDetailRecommendationsSchema,
    ArticleDetailsPageSchema,
}