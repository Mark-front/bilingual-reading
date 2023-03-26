import path from 'path'
import {type Configuration} from 'webpack'
import {type BuildEnv, type BuildPaths} from './config/build/types/config'
import {buildWebpackConfig} from './config/build/buildWebpackConfig'

export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'dist'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    }

    const mode = env.mode || 'development'
    const isDev = mode === 'development'
    const PORT = env.port || 3000
    const isAnalyze = env.analyze ? env.analyze : false
    const apiUrl = env.apiUrl || 'http://localhost:8000'

    const config: Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        isAnalyze,
        port: PORT,
        apiUrl,
        project: 'frontend',
    })

    return config
}
