import React, { memo } from 'react';
import { Icon } from '@/shared/ui/Icon';
import { useTranslation } from 'react-i18next';
import cls from './ArticleViewSelector.module.scss';
import ListIcon from '@/shared/assets/icons/list.svg';
import GridIcon from '@/shared/assets/icons/grid.svg';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { ArticleView, TArticleView } from '../../../Article';
import { classNames } from '@/shared/lib/classNames/classNames';

interface IArticleViewSelectorProps {
    className?: string;
    view: TArticleView;
    onViewClick?: (view: TArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: GridIcon,
    },
    {
        view: ArticleView.BIG,
        icon: ListIcon,
    },
]
export const ArticleViewSelector = memo((props: IArticleViewSelectorProps) => {
    const {
        className = '',
        view,
        onViewClick,
    } = props;

    const { t } = useTranslation()

    const onClick = (newView: TArticleView) => () => {
        onViewClick?.(newView)
    }

    return (
        <div className={classNames(cls.ArticleViewSelector, {}, [ className ])}>
            {viewTypes.map(viewType => (
                <Button
                    key={viewType.view}
                    theme={ThemeButton.CLEAR}
                    onClick={onClick(viewType.view)}
                    className={classNames('', { [cls.selected]: viewType.view === view }, [])}
                >
                    <Icon Svg={viewType.icon}/>
                </Button>
            ))}
        </div>
    );
})

ArticleViewSelector.displayName = 'ArticleViewSelector'