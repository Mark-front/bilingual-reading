import {classNames} from '@/shared/lib/classNames/classNames'
import React, {memo} from 'react'
import cls from './Loader.module.scss'

interface LoaderProps {
    className?: string
}

export const Loader = memo(({className}: LoaderProps) => {
    return (
        <div className={classNames(cls.Loader, {}, [cls.ldsRoller])}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
})
