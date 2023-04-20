import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageSchema } from '../types';
import { articleDetailCommentsReducer } from './articleDetailCommentsSlice';
import { articleRecommendationsReducer } from './articleRecommendationsSlice';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
    recommendations: articleRecommendationsReducer,
    comments: articleDetailCommentsReducer,
})