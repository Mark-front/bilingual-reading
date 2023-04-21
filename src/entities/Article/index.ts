import {
    ArticleSortField,
    ArticleType,
    ArticleView,
    IArticle,
    TArticleSortField,
    TArticleType,
    TArticleView,
} from './model/types/article'
import { IArticleSchema } from './model/types/articleDetailShema'
import { ArticleDetails } from './ui/ArticleDetails/ArticleDetails'
import { ArticleList } from './ui/ArticleList/ArticleList'
import { ArticleViewSelector } from './ui/ArticleViewSelector/ArticleViewSelector'
import { ArticleSortSelector } from './ui/ArticleSortSelector/ArticleSortSelector'
import { ArticleTypeTabs } from './ui/ArticleTypeTabs/ArticleTypeTabs'
import { getArticleData } from './model/selectors/articleDetails'

export {
    ArticleDetails,
    IArticle,
    IArticleSchema,
    ArticleList,
    ArticleView,
    TArticleView,
    ArticleViewSelector,
    ArticleSortSelector,
    ArticleType,
    TArticleType,
    ArticleSortField,
    TArticleSortField,
    ArticleTypeTabs,
    getArticleData,
}
