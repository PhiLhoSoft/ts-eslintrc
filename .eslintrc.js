// This is an example file for .eslintrc.js
// You have to adapt it to your project…
// You can include a .eslintignore file too.
module.exports =
{
	extends:
	[
		// For a TS project:
		// './node_modules/ts-eslintrc/eslintrc.ts.js',
		// Or in a pure JS project:
		// './node_modules/ts-eslintrc/eslintrc.es.js',
		// To test here…
		'./eslintrc.ts.js',
	],
	// For TypeScript plugin
	parserOptions:
	{
		tsconfigRootDir: __dirname, // eslint-disable-line @typescript-eslint/no-unsafe-assignment
		project: [ './tsconfig.eslint.json' ],
	},
	// Add what is needed for your project
	env:
	{
		jquery: true,
		jasmine: true,
	},
};
