export default {

    clearMocks: true,
    testEnvironment: 'jsdom',
    coveragePathIgnorePatterns: [
        '\\\\node_modules\\\\'
    ],
    moduleFileExtensions: [
        'js',
        'mjs',
        'cjs',
        'jsx',
        'ts',
        'tsx',
        'json',
        'node'
    ],
    moduleDirectories: [
        'node_modules',
        'src'
    ],
    rootDir: '../../',
    testMatch: [
        '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'
    ],
    setupFilesAfterEnv: ['<rootDir>/config/jest/jest-setup.ts'],
    moduleNameMapper: {
        '^.+\\.s?css$': 'identity-obj-proxy',
        '^~(.*)$': '<rootDir>/src/$1'
    },
    transform: {
        '^.+\\.ts?$': 'ts-jest',
        '^.+\\.tsx?$': 'ts-jest'
    }
}
