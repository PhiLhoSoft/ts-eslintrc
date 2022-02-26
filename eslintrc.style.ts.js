/* eslint-disable quote-props -- Because I prefer here consistency over pure rule. */
/* eslint-disable @typescript-eslint/no-magic-numbers -- They are needed for some rules. */

// Style rules that can be applied by a formatter. TypeScript
module.exports =
{
	extends:
	[
		'./eslintrc.style.es.js',
	],
	rules:
	{
		// Require a specific member delimiter style for interfaces and type literals
		'@typescript-eslint/member-delimiter-style': [ 'warn',
			{
				multiline:
				{
					delimiter: 'semi',
					requireLast: true,
				},
				singleline:
				{
					delimiter: 'semi',
					requireLast: false,
				},
				multilineDetection: 'brackets',
			},
		],
		// Standardize the way class declarations, class expressions, interfaces and type literals are structured and ordered
		'@typescript-eslint/member-ordering': 'off',

		// Override ESLint rules for TS

		// Enforce consistent brace style for blocks
		'brace-style': 'off',
		// Common choice…
		// '@typescript-eslint/brace-style': [ 'warn', '1tbs', { allowSingleLine: true } ],
		// My choice…
		'@typescript-eslint/brace-style': [ 'warn', 'allman', { allowSingleLine: true } ],
		// Require or disallow trailing comma
		'comma-dangle': 'off',
		'@typescript-eslint/comma-dangle': [ 'warn', 'always-multiline' ],
		// Enforces consistent spacing before and after commas
		'comma-spacing': 'off',
		'@typescript-eslint/comma-spacing': [ 'warn', { before: false, after: true } ],
		// Require or disallow spacing between function identifiers and their invocations
		'func-call-spacing': 'off',
		'@typescript-eslint/func-call-spacing': [ 'warn', 'never' ],
		// Disallow unnecessary parentheses
		'no-extra-parens': 'off',
		'@typescript-eslint/no-extra-parens': 'warn',
		// Disallow unnecessary semicolons (part of recommended)
		// 'no-extra-semi': 'off',
		// '@typescript-eslint/no-extra-semi': [],
		// Enforce the consistent use of either backticks, double, or single quotes
		'quotes': 'off',
		'@typescript-eslint/quotes': [ 'warn', 'single', { avoidEscape: true, allowTemplateLiterals: true } ],
		// Require or disallow semicolons instead of ASI
		'semi': 'off',
		'@typescript-eslint/semi': [ 'warn', 'always' ],
		// Enforces consistent spacing before function parenthesis
		'space-before-function-paren': 'off',
		'@typescript-eslint/space-before-function-paren': [ 'warn', { anonymous: 'always', named: 'never', asyncArrow: 'always' } ],
		// This rule is aimed at ensuring there are spaces around infix operators.
		'space-infix-ops': 'off',
		'@typescript-eslint/space-infix-ops': [ 'warn', { 'int32Hint': false } ],
	},
};
