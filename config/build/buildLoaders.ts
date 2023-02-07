import {RuleSetRule} from "webpack"
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildLoaders(options: BuildOptions): RuleSetRule[] {
    const { isDev } = options;
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const cssLoader = {
        test: /\.(sa|sc|c)ss$/,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                options: {
                    loader: "css-loader",
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: isDev
                            ? '[path][name]__[local]--[hash:base64:5]'
                            : '[hash:base64:8]'
                    },
                }
            },
            "sass-loader",
        ],

    }

    return [
        typescriptLoader,
        cssLoader
    ]
}