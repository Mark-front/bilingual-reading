import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './RatingCard.module.scss';
import { memo, useCallback, useState } from 'react';
import { Card } from '@/shared/ui/Card';
import { VStack } from '@/shared/ui/Stack/VStack/VStack';
import { Text, TextSize } from '@/shared/ui/Text';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { Modal } from '@/shared/ui/Modal';
import { Input } from '@/shared/ui/Input';
import { useTranslation } from 'react-i18next';
import { HStack } from '@/shared/ui/Stack/HStack/HStack';
import { Button, ButtonSize, ThemeButton } from '@/shared/ui/Button';
import { BrowserView, MobileView } from 'react-device-detect';
import { Drawer } from '@/shared/ui/Drawer/Drawer';

interface RatingCardProps {
    className?: string;
    title?: string
    feedbackTitle?: string
    hasFeedback?: boolean
    onCancel?: (starsCount: number) => void
    onAccept?: (starsCount: number, feedback?: string) => void
}

export const RatingCard = memo((props: RatingCardProps) => {
    const {
        className,
        onCancel,
        feedbackTitle,
        onAccept,
        hasFeedback,
        title,
    } = props;

    const { t } = useTranslation()

    const [ isModalOpen, setIsModalOpen ] = useState(false);
    const [ startCount, setStartCount ] = useState(0);
    const [ feedback, setFeedback ] = useState('false');

    const onModalClose = useCallback(() => {
        setIsModalOpen(false)
    }, [])

    const onSelectStars = useCallback((selectedStarsCount: number) => {
        if (hasFeedback) {
            setIsModalOpen(true)
        } else {
            onAccept?.(selectedStarsCount)
        }
    }, [ hasFeedback, onAccept ])

    const acceptHandle = useCallback(() => {
        setIsModalOpen(false)
        onAccept?.(startCount, feedback)
    }, [ feedback, onAccept, startCount ])

    const cancelHandle = useCallback(() => {
        setIsModalOpen(false)
        onCancel?.(startCount)
    }, [ onCancel, startCount ])

    const modalContent = (
        <VStack gap={'16'} align={'center'}>
            <Text title={feedbackTitle}/>
            <Input placeholder={t('Ваш отзыв') || 'Ваш отзыв'} value={''}/>
            <HStack gap={'16'}>
                <Button
                    theme={ThemeButton.OUTLINE}
                    size={ButtonSize.M}
                    onClick={cancelHandle}
                >
                    {t('Закрыть')}
                </Button>
                <Button
                    theme={ThemeButton.OUTLINE}
                    size={ButtonSize.M}
                    onClick={acceptHandle}
                >
                    {t('Отправить')}
                </Button>
            </HStack>
        </VStack>
    )

    return (
        <Card className={classNames(cls.RatingCard, {}, [ className ])}>
            <VStack align={'center'} gap={'8'}>
                <Text text={title} size={TextSize.L}/>
                <StarRating size={40} onSelect={onSelectStars}/>
            </VStack>
            <BrowserView>
                <Modal isOpen={isModalOpen} onClose={onModalClose} lazy>
                    {modalContent}
                </Modal>
            </BrowserView>
            <MobileView>
                <Drawer isOpen={isModalOpen} onClose={onModalClose} lazy>
                    {modalContent}
                </Drawer>
            </MobileView>
        </Card>
    );
});