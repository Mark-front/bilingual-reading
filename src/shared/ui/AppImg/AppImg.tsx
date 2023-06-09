import React, { ImgHTMLAttributes, memo, ReactElement, useLayoutEffect, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

interface IAppImgProps extends ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
    src: string;
    alt: string;
    fallback?: ReactElement;
    fallbackError?: ReactElement;

}

export const AppImg = memo((props: IAppImgProps) => {
    const {
        className = '',
        src,
        alt,
        fallback,
        fallbackError,
        ...otherProps
    } = props;

    const [ isLoading, setIsLoading ] = useState(true)
    const [ hasError, setHasError ] = useState(false)


    useLayoutEffect(() => {
        const img = new Image()
        img.src = src ?? ''
        img.onload = () => {
            setIsLoading(false)
        }
        img.onerror = () => {
            setIsLoading(false)
            setHasError(true)
        }
    }, [ src ])

    if (isLoading && fallback) {
        return fallback
    }

    if (hasError && fallbackError) {
        return fallbackError
    }

    return (
        <img
            {...otherProps}
            alt={alt}
            src={src}
            className={classNames('', {}, [ className ])}
        />
    );
});

AppImg.displayName = 'AppImg';