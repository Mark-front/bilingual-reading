import React, { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './AddCommentForm.module.scss';
import { Input, ThemeInput } from '@/shared/ui/Input';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { addCommentActions, addCommentReducer } from '../../model/slice/addCommentSlice';
import { getAddCommentText } from '../../model/selectors/addCommetnSelector';
import { useSelector } from 'react-redux';
import { Button, ButtonSize, ThemeButton } from '@/shared/ui/Button';

export interface IAddCommentFormProps {
    className?: string;
    onSendComment: (value: string) => void;
}

const reducers: ReducersList = {
    addComment: addCommentReducer,
}

const AddCommentForm = memo((props: IAddCommentFormProps) => {
    const {
        className = '',
        onSendComment,
    } = props;

    const { t } = useTranslation()

    const dispatch = useAppDispatch()
    const text = useSelector(getAddCommentText)

    const onChangeText = useCallback((value: string) => {
        dispatch(addCommentActions.setText(value))
    }, [ dispatch ])

    const onSend = useCallback(() => {
        onSendComment(text)
        dispatch(addCommentActions.setText(''))
    }, [ onSendComment, text, dispatch ])
    return (
        <DynamicModuleLoader reducers={reducers}>
            <div data-testid='AddCommentForm' className={classNames(cls.AddCommentForm, {}, [ className ])}>
                <Input
                    type={'text'}
                    onChange={onChangeText}
                    value={text}
                    placeholder={'Напишите что-нибудь...'}
                    theme={ThemeInput.OUTLINE}
                    data-testid='AddCommentForm.Input'
                />
                <Button
                    className={cls.btn}
                    theme={ThemeButton.OUTLINE}
                    size={ButtonSize.L}
                    onClick={onSend}
                    data-testid='AddCommentForm.BtnSend'
                >
                    {t('Отправить')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
})

AddCommentForm.displayName = 'AddCommentForm'

export default AddCommentForm