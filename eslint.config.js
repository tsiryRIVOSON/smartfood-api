const js = require('@eslint/js');

module.exports = [
    js.configs.recommended,
    {
        languageOptions: {
            ecmaVersion: 12,
            sourceType: 'script',
            globals: {
                require: 'readonly',
                module: 'readonly',
                process: 'readonly',
                __dirname: 'readonly',
                console: 'readonly',
                exports: 'readonly'
            }
        },
        rules: {
            'complexity': ['error', 5]
        }
    }
];