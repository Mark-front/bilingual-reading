export const Currency = {
    'RUB': 'RUB',
    'EUR': 'EUR',
    'USD': 'USD',
} as const;

export type TCurrency = (typeof Currency)[keyof typeof Currency];
