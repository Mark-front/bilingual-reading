import path from 'path';
import { type Configuration, DefinePlugin, type RuleSetRule } from 'webpack';
import { type BuildPaths } from '../build/types/config';
import buildCssLoader from '../build/loaders/buildCssLoader';

export default ({ config }: { config: Configuration }) => {
    const paths: BuildPaths = {
        entry: '',
        build: '',
        html: '',
        buildLocales: '',
        locales: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };
    config!.module!.rules!.push(
        buildCssLoader(true)
    )

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    config!.module!.rules = config!.module!.rules!.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i }
        }
        return rule
    })

    config!.module!.rules!.push({
        test: /\.svg$/,
        use: [ '@svgr/webpack' ],
    })

    config!.plugins!.push(
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(true),
            __API__: JSON.stringify('http://testapi.ru'),
            __PROJECT__: JSON.stringify('storybook'),
        }))

    config!.resolve!.modules!.push(paths.src)

    config!.resolve!.extensions!.push('.tsx', '.ts', '.js')

    config!.resolve!.alias = { '@': paths.src }

    return config;
}
