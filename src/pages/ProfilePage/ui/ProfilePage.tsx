import React, { memo } from 'react';
import { Page } from '@/widgets/Page';
import { EditableProfileCard } from '@/features/EditableProfileCard';


interface IProfilePageProps {
    className?: string;
}

const ProfilePage = memo((props: IProfilePageProps) => {
    const {
        className = '',
    } = props;

    return (
        <Page>
            <EditableProfileCard/>
        </Page>
    );
})
export default ProfilePage;