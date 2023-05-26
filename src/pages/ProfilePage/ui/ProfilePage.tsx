import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/Stack/VStack/VStack';
import { EditableProfileCard, profileReducer } from '@/features/EditableProfileCard';


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

    return (
        <Page>
            <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
                <VStack align={'start'} gap={'32'} className={classNames('', {}, [ className ])}>
                    <ProfilePageHeader/>
                    <EditableProfileCard/>
                </VStack>
            </DynamicModuleLoader>
        </Page>
    );
})
export default ProfilePage;