module.exports =
{
	extends:
	[
		// In package.json, have the following devDependency:
		// "ts-eslintrc": "PhiLhoSoft/ts-eslintrc#master",
		// If need to update, have to remove it in node_modules and do npm i again.
		'./node_modules/ts-eslintrc/eslint.ts.js',
		// Or in a pure JS project:
		'./node_modules/ts-eslintrc/eslint.es.js',
	],
	// For TypeScript plugin
	parserOptions:
	{
		tsconfigRootDir: __dirname,
		project: [ './tsconfig.eslint.json' ],
	},
	// Add what is needed for your project
	env:
	{
		jquery: true,
		jasmine: true,
	},
};
