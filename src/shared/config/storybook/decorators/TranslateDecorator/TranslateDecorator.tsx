import {type Story} from '@storybook/react';
import {I18nextProvider} from 'react-i18next';
import i18n from 'i18next';
import {Suspense, useEffect} from 'react';
import '../../../i18n/i18n'

export const globalTypes = {
    locale: {
        name: 'Locale',
        description: 'Internationalization locale',
        toolbar: {
            icon: 'globe',
            items: [
                {value: 'en', right: '🇺🇸', title: 'English'},
                {value: 'ru', right: 'ru', title: 'Russian'},
            ],
            showName: true,
        },
    },
};

i18n.on('languageChanged', (locale) => {
    const direction = i18n.dir(locale);
    document.dir = direction;
});

export const TranslateDecorator = (StoryComponent: Story) => {
    useEffect(() => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    }, []);

    return (
        <Suspense fallback={<div>loading translations...</div>}>
            <I18nextProvider i18n={i18n}>
                <StoryComponent/>
            </I18nextProvider>
        </Suspense>
    )
}
