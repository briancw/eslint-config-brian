module.exports = {
    extends: [
        'eslint-config-xo',
        'plugin:unicorn/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
    ],
    plugins: [
        'unicorn',
        'import',
        'no-autofix',
    ],
    rules: {
        // Personal Rules
        'camelcase': ['error'],
        'func-style': ['error', 'expression'],

        // XO overrides
        'padding-line-between-statements': 'off',
        'no-warning-comments': 'off',
        'capitalized-comments': 'off',
        'no-await-in-loop': 'off',

        // Unicorn Rules Overrides
        'unicorn/no-for-loop': 'off',
        'unicorn/no-array-for-each': 'off',
        'unicorn/filename-case': 'off',
        'unicorn/prevent-abbreviations': 'off',
        'unicorn/prefer-ternary': 'off',
        'unicorn/prefer-switch': 'off',

        // Warn about prefer-const, but don't autofix it
        'prefer-const': 'off',
        'no-autofix/prefer-const': 'warn',
    },
    // TODO this doesn't seem necessary anymore, but the docs recommend it
    // Check up in a few months and see if it's still strictly necessary
    settings: {
        'import/resolver': {
            typescript: true,
        },
    },
}
