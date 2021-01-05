module.exports =
{
	root: true,
	plugins:
	[
		'@typescript-eslint',
	],
	parser: '@typescript-eslint/parser',
	parserOptions:
	{
		ecmaVersion: 12,
		sourceType: 'module',
	},
	extends:
	[
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'./eslintrc.semantics.es.js',
		'./eslintrc.style.es.js',
		'./eslintrc.semantics.ts.js',
		'./eslintrc.style.ts.js',
	],
	env:
	{
		browser: true,
		node: true,
		jest: true,
		es2021: true,
	},
};
