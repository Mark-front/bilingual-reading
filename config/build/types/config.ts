export type BuildMode = 'production' | 'development'

export interface BuildPaths {
    entry: string;
    build: string;
    html: string;
    src: string;
    locales: string;
    buildLocales: string;
}

export interface BuildOptions {
    mode: BuildMode
    paths: BuildPaths
    isDev: boolean
    isAnalyze: boolean
    port: number
    apiUrl: string
    project: 'storybook' | 'frontend' | 'jest'
}

export interface BuildEnv {
    mode: BuildMode
    port: number
    analyze: boolean
    apiUrl: string
}
