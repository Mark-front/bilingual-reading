import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import {
    DefinePlugin,
    HotModuleReplacementPlugin,
    ProgressPlugin,
    type WebpackPluginInstance,
} from 'webpack'
import {type BuildOptions} from './types/config'
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer'

export function buildPlugins(options: BuildOptions): WebpackPluginInstance[] {
    const {paths, isDev, isAnalyze} = options

    const plugins = [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
        }),
    ]
    if (isDev) {
        plugins.push(new HotModuleReplacementPlugin());
        plugins.push(new ReactRefreshWebpackPlugin());
        plugins.push(new BundleAnalyzerPlugin({
            analyzerMode: isAnalyze ? 'server' : 'disabled',
        }));
    }

    return plugins
}
