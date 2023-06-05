import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import { SidebarItemType } from '../types/items';
import AboutIcon from '@/shared/assets/icons/about.svg'
import HomeIcon from '@/shared/assets/icons/home.svg'
import ProfileIcon from '@/shared/assets/icons/profile.svg'
import ArticlesIcon from '@/shared/assets/icons/articles.svg'
import { RoutePath } from '@/shared/const/router';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const SidebarItemsList: SidebarItemType[] = [
            {
                path: RoutePath.main,
                Icon: HomeIcon,
                text: 'Главная',
            },
            {
                path: RoutePath.about,
                Icon: AboutIcon,
                text: 'О нас',
            },
        ]


        if (userData) {
            SidebarItemsList.push({
                path: RoutePath.profile + '/' + userData.id,
                Icon: ProfileIcon,
                text: 'Профиль',
                authOnly: true,
            },
            {
                path: RoutePath.articles,
                Icon: ArticlesIcon,
                text: 'Статьи',
                authOnly: true,
            },
            {
                path: RoutePath.admin_panel,
                Icon: ArticlesIcon,
                text: 'Админка',
                authOnly: true,
            })
        }

        return SidebarItemsList
    }
)