import { type RuleSetRule } from 'webpack'
import { type BuildOptions } from './types/config'
import buildCssLoader from './loaders/buildCssLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export function buildLoaders(options: BuildOptions): RuleSetRule[] {
    const { isDev } = options

    const svgLoader = {
        test: /\.svg$/,
        use: [ '@svgr/webpack' ],
    }

    const cssLoader = buildCssLoader(isDev)

    const jsLoader = buildBabelLoader({ ...options, isTsx: false });
    const withTsxLoader = buildBabelLoader({ ...options, isTsx: true });

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    }

    return [
        fileLoader,
        svgLoader,
        jsLoader,
        withTsxLoader,
        cssLoader,
    ]
}
