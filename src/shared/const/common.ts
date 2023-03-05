export const Currency = {
    'RUB': 'RUB',
    'EUR': 'EUR',
    'USD': 'USD',
} as const;

export type TCurrency = (typeof Currency)[keyof typeof Currency];

export const Country = {
    Russia: 'Russia',
    Belarus: 'Belarus',
    Ukraine: 'Ukraine',
    Kazakhstan: 'Kazakhstan',
    Armenia: 'Armenia',
} as const;

export type TCountry = (typeof Country)[keyof typeof Country];