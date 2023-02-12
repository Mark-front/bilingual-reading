import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import  {DefinePlugin, HotModuleReplacementPlugin, ProgressPlugin, WebpackPluginInstance } from "webpack";
import {BuildOptions} from "./types/config";

export function buildPlugins(options: BuildOptions): WebpackPluginInstance[] {

    const {paths, isDev} = options;

    return [
        new HtmlWebpackPlugin({
            template: paths.html
        }),
        new ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev)
        }),
        isDev ? new HotModuleReplacementPlugin() : undefined,
        isDev ? new ReactRefreshWebpackPlugin() : undefined,
    ]
}