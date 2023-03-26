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

export interface IArticle {
    id: string;
    title: string;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    type: TArticleType[];
    blocks: TArticleBlock[]
}