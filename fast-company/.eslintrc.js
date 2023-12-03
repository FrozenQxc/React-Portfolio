module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ["plugin:react/recommended", "standard"],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12,
        sourceType: "module"
    },
    plugins: ["react"],
    rules: {
        semi: ["error", "always"],
        indent: ["error", 4],

        "space-before-function-paren": [
            "error",
            {
                anonymous: "always",
                named: "always",
                asyncArrow: "always"
            }
        ],

        quotes: [
            "error",
            "double",
            {
                allowTemplateLiterals: true
            }
        ]
    }
}
