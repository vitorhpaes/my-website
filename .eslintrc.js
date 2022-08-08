module.exports = {
    settings: {
        react: {
            version: 'detect',
        },
    },
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'standard-with-typescript',
        'plugin:prettier/recommended',
    ],
    parserOptions: {
        project: './tsconfig.eslint.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'unused-imports', 'prettier'],
    rules: {
        'react/prop-types': 'off',
        'react/no-unescaped-entities': 0,

        // use prettier to return errors too
        'prettier/prettier': 'error',

        // no-used vars configuration
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error'],
        'unused-imports/no-unused-imports': ['error'],
        'unused-imports/no-unused-imports-ts': 2,
        'unused-imports/no-unused-vars': [
            'warn',
            {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_',
                caughtErrorsIgnorePattern: '^_',
            },
        ],

        '@typescript-eslint/no-use-before-define': 'off',
        'no-use-before-define': 'off',

        'node/handle-callback-err': 'off',

        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/restrict-template-expressions': 'off',
        '@typescript-eslint/consistent-type-assertions': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        // Allows the use of non-boolean types in expressions where a boolean is expected [https://github.com/typescript-eslint/typescript-eslint/blob/v4.28.1/packages/eslint-plugin/docs/rules/strict-boolean-expressions.md]
        '@typescript-eslint/strict-boolean-expressions': 'off',

        // Allows invalidating queries without returning anything [https://eslint.org/docs/rules/no-void]
        'no-void': [
            'error',
            {
                allowAsStatement: true,
            },
        ],

        // Allows to throw errors that are not an instance of the Error object [https://github.com/typescript-eslint/typescript-eslint/blob/v4.28.2/packages/eslint-plugin/docs/rules/no-throw-literal.md]
        '@typescript-eslint/no-throw-literal': 'off',
        'no-throw-literal': 'off',
    },
}
