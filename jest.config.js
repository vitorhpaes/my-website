/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
const {
    compilerOptions
} = require('./tsconfig.json')

function makeModuleNameMapper(paths) {
    const pathSrc = '<rootDir>/';
    const aliases = {};

    // Iterate over paths and convert them into moduleNameMapper format
    Object.keys(paths).forEach((item) => {
        const key = item.replace('/*', '/(.*)');
        const path = paths[item][0].replace('/*', '/$1');
        aliases[key] = pathSrc + '/' + path;
    });
    return aliases;
}

module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testEnvironment: 'jsdom',
    moduleDirectories: ['node_modules', 'src'],
    transform: {
        "^.+\\.js$": "babel-jest",
        ".+\\.(svg|css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub"
    },
    testMatch: [
        '<rootDir>/src/**/*.(test).{js,jsx,ts,tsx}',
        '<rootDir>/src/**/?(*.)(spec|test).{js,jsx,ts,tsx}'
    ],
    moduleNameMapper: makeModuleNameMapper(compilerOptions.paths),
};