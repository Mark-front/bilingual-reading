import {RoutePath} from '@/shared/config/routeConfig/routeConfig';
import {SVGProps, VFC} from 'react';
import AboutIcon from '@/shared/assets/icons/about.svg'
import HomeIcon from '@/shared/assets/icons/home.svg'
import ProfileIcon from '@/shared/assets/icons/profile.svg'

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: VFC<SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        Icon: HomeIcon,
        text: 'Главная',
    },
    {
        path: RoutePath.main,
        Icon: AboutIcon,
        text: 'О нас',
    },
    {
        path: RoutePath.profile,
        Icon: ProfileIcon,
        text: 'Профиль',
        authOnly: true,
    },
]