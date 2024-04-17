const { fileURLToPath } = require("url");
const { dirname } = require("path");
const { FlatCompat } = require("@eslint/eslintrc");
const pluginJs = require("@eslint/js");

const __filename = fileURLToPath(__dirname);
const __dirname = dirname(__filename);

module.exports = {
    env: {
        node: true,
        es6: true,
    },
    extends: ["eslint:recommended", "plugin:node/recommended", "prettier"],
    plugins: ["jsdoc", "import", "prettier"],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
    },
    settings: {
        node: {
            tryExtensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
            version: "18.18.2",
        },
    },
    rules: {
        "node/no-unsupported-features/es-syntax": "off",
        "rest-spread-spacing": ["error", "never"],
        "no-console":
            process.env.MODE === "development"
                ? "off"
                : ["error", { allow: ["info", "error"] }],
        "no-debugger": process.env.MODE === "development" ? "off" : "error",
        strict: ["error", "global"],
        "node/no-unsupported-features/es-syntax": [
            "error",
            { ignores: ["modules"] },
        ],
        "jsdoc/check-alignment": "error",
        "jsdoc/check-syntax": "error",
        "import/order": "error",
        "import/first": "error",
        "import/no-duplicates": "error",
        "node/file-extension-in-import": ["error", "always"],
        "space-before-blocks": ["error", "always"],
        indent: ["error", 4],
        "node/no-unpublished-import": [
            "error",
            {
                allowModules: ["morgan", "swagger-ui-express", "swagger-jsdoc"],
            },
        ],
        camelcase: ["error", { properties: "always" }],
    },
};

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: pluginJs.configs.recommended,
});

module.exports = [
    {
        ...module.exports,
        ...compat.extends("standard"),
    },
];
