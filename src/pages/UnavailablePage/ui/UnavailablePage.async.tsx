import { lazy } from 'react'

export const UnavailablePageAsync = lazy(async () => await import('./UnavailablePage'))
