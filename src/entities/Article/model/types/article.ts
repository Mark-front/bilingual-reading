import { IUser } from '@/entities/User';

export const TypeBlock = {
    TEXT: 'TEXT',
    CODE: 'CODE',
    IMAGE: 'IMAGE',
} as const;

export type TTypeBlock = (typeof TypeBlock)[keyof typeof TypeBlock];

export interface IArticleBaseBlock {
    id: string;
    title?: string;

}

export interface IArticleBlockImage extends IArticleBaseBlock {
    type: typeof TypeBlock.IMAGE;

    src: string;
}

export interface IArticleBlockCode extends IArticleBaseBlock {
    type: typeof TypeBlock.CODE;

    code: string;
}

export interface IArticleBlockText extends IArticleBaseBlock {
    type: typeof TypeBlock.TEXT;

    paragraphs: string[];
}

export type TArticleBlock = IArticleBlockText | IArticleBlockCode | IArticleBlockImage;

export const ArticleType = {
    IT: 'IT',
    SCIENCE: 'SCIENCE',
    ECONOMICS: 'ECONOMICS',
} as const;

export type TArticleType = (typeof ArticleType)[keyof typeof ArticleType];

export const ArticleSortField = {
    VIEWS: 'views',
    TITLE: 'title',
    CREATED: 'createdAt',
} as const;

export type TArticleSortField = (typeof ArticleSortField)[keyof typeof ArticleSortField];
export const ArticleView = {
    BIG: 'BIG',
    SMALL: 'SMALL',
} as const;

export type TArticleView = (typeof ArticleView)[keyof typeof ArticleView];

export interface IArticle {
    id: string;
    user: IUser;
    title: string;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    type: TArticleType[];
    blocks: TArticleBlock[]
}