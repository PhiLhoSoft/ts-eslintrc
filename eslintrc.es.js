module.exports =
{
	root: true,
	parserOptions:
	{
		ecmaVersion: 12,
		sourceType: 'module',
	},
	extends:
	[
		'eslint:recommended',
		'./eslintrc.semantics.es.js',
		'./eslintrc.style.es.js',
	],
	env:
	{
		browser: true,
		node: true,
		jest: true,
		es2021: true,
	},
};
