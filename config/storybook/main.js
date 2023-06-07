module.exports = {
    stories: [
        '../../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        'storybook-addon-mock',
        {
            name: '@storybook/addon-essentials',
            options: {
                backgrounds: false,
            },
        },
        'storybook-addon-themes',
    ],
    framework: '@storybook/react-webpack5',
    core: {
        builder: '@storybook/builder-webpack5',
    },
    staticDir: [ '../../public' ],
}
