import path from 'path';
import {type Configuration, type RuleSetRule} from 'webpack';
import {type BuildPaths} from '../build/types/config';
import buildCssLoader from '../build/loaders/buildCssLoader';

export default ({config}: { config: Configuration }) => {
    const paths: BuildPaths = {
        entry: '',
        build: '',
        html: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    config.module.rules.push(
        buildCssLoader(true)
    )
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore

    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return {...rule, exclude: /\.svg$/i}
        }
        return rule
    })
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore

    config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    })
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore

    config.resolve.modules.push(paths.src)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore

    config.resolve.extensions.push('.tsx', '.ts', '.js')
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore

    config.resolve.alias = {'@': paths.src}

    return config;
}
