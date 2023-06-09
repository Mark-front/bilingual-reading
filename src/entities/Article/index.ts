import {
    ArticleSortField,
    ArticleType,
    ArticleView,
    IArticle,
    TArticleSortField,
    TArticleType,
    TArticleView,
    TTypeBlock,
    TypeBlock,
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
    ArticleList,
    ArticleView,
    ArticleViewSelector,
    ArticleSortSelector,
    ArticleType,
    ArticleSortField,
    ArticleTypeTabs,
    getArticleData,
    TypeBlock,
}

export type {
    IArticle,
    IArticleSchema,
    TArticleView,
    TArticleType,
    TArticleSortField,
    TTypeBlock,
}
