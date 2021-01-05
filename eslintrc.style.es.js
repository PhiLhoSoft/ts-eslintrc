/* eslint-disable quote-props -- Because I prefer here consistency over pure rule. */
/* eslint-disable @typescript-eslint/no-magic-numbers -- They are needed for some rules. */

// Style rules that can be applied by a formatter. EcmaScript
// Note: recommended rules are generally not there
module.exports =
{
	rules:
	{
		// # Best Practices

		// enforce consistent brace style for all control statements
		'curly': [ 'warn', 'all' ],
		// enforce consistent newlines before and after dots
		'dot-location': [ 'warn', 'property' ],
		// disallow unnecessary nested blocks
		'no-lone-blocks': 'warn',
		// disallow multiple spaces
		'no-multi-spaces': 'warn',

		// # Stylistic Issues

		// Common choice…
		// 'array-bracket-spacing': [ 'warn', 'never' ],
		// My choice…
		'array-bracket-spacing': [ 'warn', 'always' ],
		// disallow or enforce spaces inside of blocks after opening block and before closing block
		'block-spacing': [ 'warn', 'always' ],
		// enforce consistent comma style
		'comma-style': [ 'warn', 'last' ],
		// enforce consistent spacing inside computed property brackets
		'computed-property-spacing': [ 'warn', 'never' ],
		// require or disallow newline at the end of files
		'eol-last': 'warn',
		// enforce consistent spacing between keys and values in object literal properties
		'key-spacing': [ 'warn', { beforeColon: false, afterColon: true } ],
		// enforce consistent linebreak style
		'linebreak-style': [ 'warn', 'unix' ],
		// enforce a maximum line length
		'max-len': [ 'warn', 160, 4, { ignoreComments: false, ignoreUrls: true } ],
		// enforce or disallow parentheses when invoking a constructor with no arguments
		'new-parens': 'warn',
		// require a newline after each call in a method chain
		'newline-per-chained-call': [ 'warn', { ignoreChainWithDepth: 4 } ],
		// disallow floating decimals (.2 or 2.)
		'no-floating-decimal': 'warn',
		// disallow multiple empty lines
		'no-multiple-empty-lines': [ 'warn', { max: 1 } ],
		// disallow trailing whitespace at the end of lines
		'no-trailing-spaces': 'warn',
		// disallow whitespace before properties
		'no-whitespace-before-property': 'warn',
		// enforce consistent spacing inside braces
		'object-curly-spacing': [ 'warn', 'always' ],
		// require or disallow newlines around variable declarations
		'one-var-declaration-per-line': 'warn',
		// enforce consistent linebreak style for operators
		'operator-linebreak': [ 'warn', 'after' ],
		// require or disallow padding within blocks
		'padded-blocks': [ 'warn', 'never' ],
		// require quotes around object literal property names
		'quote-props': [ 'warn', 'as-needed' ],
		// enforce consistent spacing before and after semicolons
		'semi-spacing': [ 'warn', { before: false, after: true } ],
		// enforce consistent spacing before blocks
		'space-before-blocks': 'warn',
		// enforce consistent spacing inside parentheses
		'space-in-parens': [ 'warn', 'never' ],
		// enforce consistent spacing before or after unary operators
		'space-unary-ops': [ 'warn', { words: true, nonwords: false } ],
		// enforce consistent spacing after the `//` or `/*` in a comment
		'spaced-comment': [ 'warn', 'always',
			{
				exceptions: [ '-', '=', '#' ], // For lines of separators
				line:
				{
					markers: [ '/' ],
				},
				block:
				{
					markers: [ '*' ],
					balanced: true,
				},
			},
		],
		// require or disallow Unicode byte order mark (BOM)
		'unicode-bom': [ 'warn', 'never' ],

		// # ECMAScript 6

		// require braces around arrow function bodies
		'arrow-body-style': [ 'warn', 'as-needed' ],
		// require parentheses around arrow function arguments
		'arrow-parens': 'warn',
		// enforce consistent spacing before and after the arrow in arrow functions
		'arrow-spacing': 'warn',
		// enforce consistent spacing around `*` operators in generator functions
		'generator-star-spacing': [ 'warn', 'after' ],
		// require or disallow spacing around the `*` in `yield*` expressions
		'yield-star-spacing': [ 'warn', 'after' ],
		// enforce spacing between rest and spread operators and their expressions
		'rest-spread-spacing': 'warn',
		// require or disallow spacing around embedded expressions of template strings
		'template-curly-spacing': 'warn',

		// These will be overridden by TypeScript rules if TS is used in the project

		// Enforce consistent brace style for blocks
		// Common choice…
		// 'brace-style': [ 'warn', '1tbs', { allowSingleLine: true } ],
		// My choice…
		'brace-style': [ 'warn', 'allman', { allowSingleLine: true } ],
		// Require or disallow trailing comma
		'comma-dangle': [ 'warn', 'always-multiline' ],
		// Enforces consistent spacing before and after commas
		'comma-spacing': [ 'warn', { before: false, after: true } ],
		// Require or disallow spacing between function identifiers and their invocations
		'func-call-spacing': [ 'warn', 'never' ],
		// Disallow unnecessary parentheses
		'no-extra-parens': 'warn',
		// Disallow unnecessary semicolons (part of recommended)
		// 'no-extra-semi': [],
		// Enforce the consistent use of either backticks, double, or single quotes
		'quotes': [ 'warn', 'single', { avoidEscape: true, allowTemplateLiterals: true } ],
		// Require or disallow semicolons instead of ASI
		'semi': [ 'warn', 'always' ],
		// Enforces consistent spacing before function parenthesis
		'space-before-function-paren': [ 'warn', { anonymous: 'always', named: 'never', asyncArrow: 'always' } ],
		// This rule is aimed at ensuring there are spaces around infix operators.
		'space-infix-ops': [ 'warn', { 'int32Hint': false } ],
	},
};
