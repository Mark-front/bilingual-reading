import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import { SidebarItemType } from '../types/items';
import AboutIcon from '@/shared/assets/icons/about.svg'
import HomeIcon from '@/shared/assets/icons/home.svg'
import ProfileIcon from '@/shared/assets/icons/profile.svg'
import ArticlesIcon from '@/shared/assets/icons/articles.svg'
import {
    getRouteAbout,
    getRouteAdminPanel,
    getRouteArticles,
    getRouteMain,
    getRouteProfile,
} from '@/shared/const/router';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const SidebarItemsList: SidebarItemType[] = [
            {
                path: getRouteMain(),
                Icon: HomeIcon,
                text: 'Главная',
            },
            {
                path: getRouteAbout(),
                Icon: AboutIcon,
                text: 'О нас',
            },
        ]


        if (userData) {
            SidebarItemsList.push({
                path: getRouteProfile(userData.id),
                Icon: ProfileIcon,
                text: 'Профиль',
                authOnly: true,
            },
            {
                path: getRouteArticles(),
                Icon: ArticlesIcon,
                text: 'Статьи',
                authOnly: true,
            },
            {
                path: getRouteAdminPanel(),
                Icon: ArticlesIcon,
                text: 'Админка',
                authOnly: true,
            })
        }

        return SidebarItemsList
    }
)