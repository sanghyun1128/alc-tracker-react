module.exports = {
  "parser": "typescript",
  "arrowParens": "avoid",
  "bracketSameLine": true,
  "bracketSpacing": true,
  "trailingComma": "all",
  "singleQuote": true,
  "semi": true,
  "useTabs": false,
  "tabWidth": 2,
  "printWidth": 120,
  "endOfLine": "auto",
  "plugins": [require.resolve("@trivago/prettier-plugin-sort-imports")],
  "importOrderCaseInsensitive": true,
  "importOrder": [
    "^react$",
    "^react-dom$",
    "<THIRD_PARTY_MODULES>",
    "^[./]"
  ],
  "importOrderSeparation": true
}