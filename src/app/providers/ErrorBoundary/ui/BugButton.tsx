import React, { useEffect, useState } from 'react'
import { Button } from '@/shared/ui/Button'
import { useTranslation } from 'react-i18next'

interface IBugButton {
    className?: string
}

// Компонент для тестирования
export const BugButton = ({ className }: IBugButton) => {
    const [error, setError] = useState(false)
    const { t } = useTranslation()
    const onThrow = () => {
        setError(true)
    }

    useEffect(() => {
        if (error) {
            throw undefined
        }
    }, [error])

    return (
        <Button
            onClick={onThrow}
        >
            {t('Выдать ошибку')}
        </Button>
    )
}
