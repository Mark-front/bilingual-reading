import React, {memo} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {DynamicModuleLoader, ReducersList} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {profileReducers} from '@/entities/Profile';

// import cls from './ProfilePage.module.scss';

const reducers: ReducersList = {
    profile: profileReducers,
}

interface IProfilePageProps {
    className?: string;
}

const ProfilePage = memo((props: IProfilePageProps) => {
    const {
        className = '',
    } = props;

    const {t} = useTranslation()

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('cls.ProfilePage', {}, [className])}>
                {t('Профиль')}
            </div>
        </DynamicModuleLoader>
    );
})
export default ProfilePage;