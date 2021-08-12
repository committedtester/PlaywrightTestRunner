module.exports = {
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint/eslint-plugin"],
	extends: ["plugin:@typescript-eslint/recommended", "prettier/@typescript-eslint", "plugin:prettier/recommended"],
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: "module"
	},
	rules: {}
};
