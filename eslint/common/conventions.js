const breaking = require('../utils/breaking');
const extensions = require('../consts/extensions');

module.exports = {
    plugins: ['import'],
    settings: {
        'import/extensions': extensions.all,
        'import/parsers': {
            '@typescript-eslint/parser': extensions.ts,
        },
        'import/resolver': {
            node: {
                extensions: extensions.all,
            },
        },
    },
    rules: {
        '@typescript-eslint/class-name-casing': 'error',
        '@typescript-eslint/camelcase': breaking({since: 2}),
        'no-bitwise': 'error',
        'no-console': [
            breaking({since: 2}), // Was'nt worked on tslint
            {
                allow: ['warn', 'clear', 'error'],
            },
        ],
        'no-empty': ['warn', {allowEmptyCatch: true}],
        radix: 'error',
        'import/no-default-export': 'error',
        'no-else-return': [breaking({since: 2}), {allowElseIf: false}],
        'no-lonely-if': breaking({since: 2}),
        'prefer-destructuring': [
            breaking({since: 2}),
            {
                array: false,
                object: true,
            },
            {enforceForRenamedProperties: false},
        ],
        'object-shorthand': [breaking({since: 2}), 'properties'],
        'multiline-ternary': ['error', 'always-multiline'], // replaces "condition-breaks"
        'operator-linebreak': [
            'error',
            'before',
            {
                overrides: {
                    '=': 'none',
                    '==': 'none',
                    '===': 'none',
                },
            },
        ],
        'no-unused-vars': [
            breaking({since: 2}),
            {
                vars: 'local',
                args: 'none',
                ignoreRestSiblings: true,
                argsIgnorePattern: '^_',
                caughtErrors: 'none',
            },
        ],
        'no-use-before-define': breaking({
            since: 2,
            before: 'off',
            after: 'warn',
        }),
    },
};
