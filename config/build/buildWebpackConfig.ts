import {Configuration} from "webpack";
import {BuildOptions} from "./types/config";
import {buildPlugins} from "./buildPlugins";
import {buildResolvers} from "./buildResolvers";
import {buildLoaders} from "./buildLoaders";

export function buildWebpackConfig(options: BuildOptions): Configuration {
    const { mode, paths} = options;
    return {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true
        },
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        plugins: buildPlugins(options)
    }
}