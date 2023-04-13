import { FC, lazy } from 'react'
import { IAddCommentFormProps } from '../AddCommentForm/AddCommentForm';

export const AddCommentFormAsync = lazy<FC<IAddCommentFormProps>>(async () => await import('./AddCommentForm'))
