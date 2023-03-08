import React, {memo, useEffect} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {DynamicModuleLoader, ReducersList} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {fetchProfileData, profileReducer} from '@/entities/Profile';
import {useAppDispatch} from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {ProfileCard} from '../../../entities/Profile';

// import cls from './ProfilePage.module.scss';

const reducers: ReducersList = {
    profile: profileReducer,
}

interface IProfilePageProps {
    className?: string;
}

const ProfilePage = memo((props: IProfilePageProps) => {
    const {
        className = '',
    } = props;
    const dispatch = useAppDispatch()
    const {t} = useTranslation()

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        dispatch(fetchProfileData());
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('cls.ProfilePage', {}, [className])}>
                <ProfileCard/>
            </div>
        </DynamicModuleLoader>
    );
})
export default ProfilePage;