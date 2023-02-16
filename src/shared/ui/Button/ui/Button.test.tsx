import { render, screen } from '@testing-library/react'
import { Button } from '@/shared/ui/Button'

describe('classNames', () => {
    test('test button render', () => {
        render(<Button>TEST</Button>)
        expect(screen.getByText('TEST')).toBeInTheDocument()
    })
})
