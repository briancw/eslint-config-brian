module.exports = {
    extends: ['eslint-config-xo'],
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
    },
}
