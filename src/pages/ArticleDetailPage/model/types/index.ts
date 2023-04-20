import { IArticleDetailCommentsSchema } from './articleDetailCommentsSchema';
import { IArticleDetailRecommendationsSchema } from './articleDetailRecommendationsSchema';


export interface ArticleDetailsPageSchema {
    comments: IArticleDetailCommentsSchema;
    recommendations: IArticleDetailRecommendationsSchema;
}