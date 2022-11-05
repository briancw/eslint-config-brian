module.exports = {
    extends: [
        'eslint-config-xo',
        'plugin:unicorn/recommended',
        'plugin:import/recommended',
        'plugin:jsdoc/recommended',
    ],
    plugins: [
        'unicorn',
        'import',
        'jsdoc',
    ],
    rules: {
        'indent': ['error', 4, {MemberExpression: 0}],
        'camelcase': ['error'],
        'brace-style': ['error', 'stroustrup', {
            allowSingleLine: false,
        }],
        'semi': ['error', 'never'],
        // This is actually in XO config, but I want to be extra sure
        'comma-dangle': ['error', 'always-multiline'],
        'quote-props': ['error', 'consistent-as-needed'],
        'quotes': ['error', 'single', {
            allowTemplateLiterals: true,
        }],
        'arrow-parens': ['error', 'always'],
        // This rule is identical to XO's except for anonymous functions
        'space-before-function-paren': ['error', {
            anonymous: 'never',
            named: 'never',
            asyncArrow: 'always',
        }],
        'no-warning-comments': ['off'],
        'capitalized-comments': ['off'],
        
        // JSDoc
        'jsdoc/check-indentation': 1,
        'jsdoc/check-line-alignment': ['error', 'always'],
        
        // Unicorn Rules
        'unicorn/no-for-loop': ['off'],
        'unicorn/no-array-for-each': ['off'],
        'unicorn/filename-case': ['error', {
            cases: {camelCase: true},
        }],
        'padding-line-between-statements': ['off'],
        // If "dev" is good enough for chrome devtools its good enough for me
        'unicorn/prevent-abbreviations': ['error', {
            allowList: {
                dev: true,
            },
        }],
    },
}
