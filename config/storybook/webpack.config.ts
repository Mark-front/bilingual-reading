import path from 'path';
import { type Configuration, type RuleSetRule } from 'webpack';
import { type BuildPaths } from '../build/types/config';
import buildCssLoader from '../build/loaders/buildCssLoader';

export default ({ config }: { config: Configuration }) => {
    const paths: BuildPaths = {
        entry: '',
        build: '',
        html: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };
    config.module.rules.push(
        buildCssLoader(true)
    )
    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i }
        }
        return rule
    })
    config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    })
    config.resolve.modules.push(paths.src)
    config.resolve.extensions.push('.tsx', '.ts', '.js')
    config.resolve.alias = { '@': paths.src }

    return config;
}
