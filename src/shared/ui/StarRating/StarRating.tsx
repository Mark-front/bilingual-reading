import React, { memo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './StarRating.module.scss';
import { Icon } from '../Icon';
import Star from '../../assets/icons/star.svg'

interface IStarRatingProps {
    className?: string;
    onSelect?: (starCount: number) => void
    size?: number
    selectedStars?: number
}

const stars = [ 1, 2, 3, 4, 5 ]
export const StarRating = memo((props: IStarRatingProps) => {
    const {
        className = '',
        selectedStars = 0,
        size = 30,
        onSelect,
    } = props;

    const [ currenStarsCount, setCurrentStarsCount ] = useState(0)
    const [ isSelected, setIsSelected ] = useState(Boolean(selectedStars))

    const onHover = (starsCount: number) => () => {
        if (!isSelected) {
            setCurrentStarsCount(starsCount)
        }
    }

    const onLeave = () => {
        if (!isSelected) {
            setCurrentStarsCount(0)
        }
    }

    const onClick = (starsCount: number) => () => {
        if (!isSelected) {
            onSelect?.(starsCount)
            setCurrentStarsCount(starsCount)
            setIsSelected(true)
        }
    }

    return (
        <div className={classNames(cls.StarRating, {}, [ className ])}>
            {
                stars.map((starsNumber) => (
                    <Icon
                        id={`${starsNumber}-${currenStarsCount}-${selectedStars}`}
                        key={starsNumber}
                        className={
                            classNames(
                                cls.starIcon,
                                { [cls.selected]: isSelected },
                                [ currenStarsCount >= starsNumber ? cls.hovered : cls.normal ]
                            )
                        }
                        Svg={Star}
                        width={size}
                        height={size}
                        onMouseLeave={onLeave}
                        onMouseEnter={onHover(starsNumber)}
                        onClick={onClick(starsNumber)}
                    />

                ))
            }
        </div>
    );
})

StarRating.displayName = 'StarRating'