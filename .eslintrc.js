module.exports = {
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint/eslint-plugin"],
	extends: ["plugin:@typescript-eslint/recommended", "prettier/@typescript-eslint", "plugin:prettier/recommended","plugin:playwright/playwright-test"],
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: "module"
	},
	rules: {}
};
