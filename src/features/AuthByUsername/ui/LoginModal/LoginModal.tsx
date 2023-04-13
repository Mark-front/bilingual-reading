import { classNames } from '@/shared/lib/classNames/classNames';
import { Modal } from '@/shared/ui/Modal';
import { LoginFormAsync as LoginForm } from '../LoginForm/LoginForm.async';
import { memo, Suspense } from 'react';
import { Loader } from '@/shared/ui/Loader';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;

}

export const LoginModal = memo((props: LoginModalProps) => {
    const {
        className = '',
        onClose,
        isOpen,
    } = props;

    return (
        <Modal
            className={classNames('', {}, [ className ])}
            isOpen={isOpen}
            onClose={onClose}
            lazy={true}
        >
            <Suspense fallback={<Loader/>}>
                <LoginForm onSuccess={onClose}/>
            </Suspense>
        </Modal>
    );
})