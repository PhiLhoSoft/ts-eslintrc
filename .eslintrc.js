// This is an example file for .eslintrc.js
// You have to adapt it to your project.
// You can include a .eslintignore file too.

// Note: Use this in your app.
// const PATH = './node_modules/@philhosoft/ts-eslintrc';
// Note: remove this, it is here to lint this projet.
const PATH = '.';

module.exports =
{
	root: true,
	overrides:
	[
		{
			files:
			[
				'*.js',
				'*.cjs',
			],
			parserOptions:
			{
				ecmaVersion: 2020,
				sourceType: 'module',
			},
			globals:
			{
				module: true,
			},
			env:
			{
				es2021: true,
				browser: true,
				node: true,
				jest: true,
			},
			extends:
			[
				'eslint:recommended',

				`${PATH}/eslintrc.semantics.es.js`,
				`${PATH}/eslintrc.style.es.js`,
			],
		},
		{
			files:
			[
				'*.ts',
			],
			parserOptions:
			{
				project:
				[
					// Note: Adapt to your project.
					// 'tsconfig.main.json',
					// 'tsconfig.spec.json',
					'tsconfig.eslint.json',
				],
			},
			extends:
			[
				'eslint:recommended',
				'plugin:@typescript-eslint/recommended',
				'plugin:@typescript-eslint/recommended-requiring-type-checking',

				`${PATH}/eslintrc.semantics.ts.js`,
				`${PATH}/eslintrc.style.ts.js`,
			],
		},
	],
};
