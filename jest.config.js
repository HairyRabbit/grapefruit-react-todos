module.exports = {
    "verbose": true,
    "moduleNameMapper": {
        "^lib/(.*)$": "<rootDir>/src/lib/$1",
        "^style/(.*)$": "<rootDir>/src/lib/styles/$1",
        "^view/(.*)$": "<rootDir>/src/view/$1",
        "^component/(.*)$": "<rootDir>/src/component/$1",
        "^core/(.*)$": "<rootDir>/src/core/$1",
        "\\.css$": "identity-obj-proxy",
        "\\.(webp|jpg|png|svg)$": "<rootDir>/builder/mocks/fileTransformer.js"
    }
}
