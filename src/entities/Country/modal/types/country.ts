export const Country = {
    Russia: 'Russia',
    Belarus: 'Belarus',
    Ukraine: 'Ukraine',
    Kazakhstan: 'Kazakhstan',
    Armenia: 'Armenia',
} as const;

export type TCountry = (typeof Country)[keyof typeof Country];