/* eslint-disable quote-props -- Because I prefer here consistency over pure rule. */
/* eslint-disable no-magic-numbers, @typescript-eslint/no-magic-numbers -- They are needed for some rules. */
/* eslint-disable @typescript-eslint/no-var-requires, @typescript-eslint/no-unsafe-call -- Consistent with exports. */

const { allowedMagicNumbers, noUnusedVariables } = require('./eslint.settings');

// Rules from possible errors, best practices, and so on. EcmaScript
// Some are stylistic (eg. naming conventions) but out of the scope of formatters.
module.exports =
{
	rules:
	{
		// # Possible Errors

		// disallow template literal placeholder syntax in regular strings
		'no-template-curly-in-string': 'error',
		// disallow assignments that can lead to race conditions due to usage of `await` or `yield`
		'require-atomic-updates': 'error',

		// # Best Practices

		// enforce the use of variables within the scope they are defined
		'block-scoped-var': 'warn',
		// enforce a maximum cyclomatic complexity allowed in a program
		'complexity': [ 'warn', 12 ],
		// Require default case in switch statements
		'default-case': 'off',
		// require the use of `===` and `!==`
		'eqeqeq': 'error',
		// require `for-in` loops to include an `if` statement
		'guard-for-in': 'warn',
		// specify a deny list of disallowed identifier names
		'id-blacklist': 'off', // Part of defaults, we don't want it.
		// enforce a maximum number of lines per file
		'max-lines': 'off',
		// disallow the use of `alert`, `confirm`, and `prompt`
		'no-alert': 'error',
		// disallow the use of `arguments.caller` or `arguments.callee`
		'no-caller': 'error',
		// disallow the use of console
		'no-console': [ 'warn', { allow: [ 'info', 'warn', 'error' ] } ],
		// disallow returning value from constructor
		'no-constructor-return': 'error',
		// disallow `else` blocks after `return` statements in `if` statements
		'no-else-return': 'warn',
		// disallow `null` comparisons without type-checking operators
		'no-eq-null': 'warn',
		// disallow the use of `eval()`
		'no-eval': 'error',
		// disallow extending native types
		'no-extend-native': 'error',
		// disallow unnecessary calls to `.bind()`
		'no-extra-bind': 'error',
		// disallow declarations in the global scope
		'no-implicit-globals': 'error',
		// disallow the use of `eval()`-like methods
		'no-implied-eval': 'error',
		// disallow the use of the `__iterator__` property
		'no-iterator': 'error',
		// disallow labeled statements
		'no-labels': 'warn',
		// disallow multiline strings
		'no-multi-str': 'error',
		// disallow `new` operators outside of assignments or comparisons
		'no-new': 'error',
		// disallow `new` operators with the `Function` object
		'no-new-func': 'error',
		// disallow `new` operators with the `String`, `Number`, and `Boolean` objects
		'no-new-wrappers': 'error',
		// disallow octal escape sequences in string literals
		'no-octal-escape': 'warn',
		// disallow the use of the `__proto__` property
		'no-proto': 'error',
		// disallow assignment operators in `return` statements
		'no-return-assign': [ 'warn', 'except-parens' ],
		// disallow `javascript:` urls
		'no-script-url': 'error',
		// disallow comparisons where both sides are exactly the same
		'no-self-compare': 'warn',
		// disallow comma operators
		'no-sequences': 'error',
		// disallow unmodified loop conditions
		'no-unmodified-loop-condition': 'warn',
		// disallow unnecessary calls to `.call()` and `.apply()`
		'no-useless-call': 'error',
		// disallow unnecessary concatenation of literals or template literals
		'no-useless-concat': 'warn',
		// disallow `void` operators
		'no-void': [ 'error', { allowAsStatement: true } ],
		// disallow specified warning terms in comments
		'no-warning-comments': 'warn',
		// enforce the consistent use of the radix argument when using `parseInt()`
		'radix': 'warn',
		// require `var` declarations be placed at the top of their containing scope
		'vars-on-top': 'warn',
		// require parentheses around immediate `function` invocations
		'wrap-iife': [ 'error', 'inside' ],
		// require or disallow "Yoda" conditions
		'yoda': 'warn',

		// # Variables

		// disallow identifiers from shadowing restricted names
		'no-shadow-restricted-names': 'error',
		// disallow initializing variables to `undefined`
		'no-undef-init': 'warn',

		// # Stylistic Issues

		// enforce consistent naming when capturing the current execution context
		'consistent-this': [ 'warn', 'that' ],
		// require constructor names to begin with a capital letter
		'new-cap': [ 'warn' ],
		// disallow bitwise operators
		'no-bitwise': 'warn',
		// disallow `if` statements as the only statement in `else` blocks
		'no-lonely-if': 'warn',
		// disallow nested ternary expressions
		'no-nested-ternary': 'warn',
		// disallow `Object` constructors
		'no-new-object': 'warn',
		// disallows dangling underscores in identifiers (mostly for the accessors, and some naming conflicts)
		'no-underscore-dangle': 'off',
		// disallow ternary operators when simpler alternatives exist
		'no-unneeded-ternary': 'warn',
		// enforce variables to be declared either together or separately in functions
		'one-var': [ 'warn', 'never' ],

		// # ECMAScript 6

		// disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead
		'prefer-object-spread': 'warn',
		// disallow arrow functions where they could be confused with comparisons
		'no-confusing-arrow': 'off', // [ 'warn', { allowParens: true } ],
		// disallow unnecessary computed property keys in objects and classes
		'no-useless-computed-key': 'warn',
		// require `let` or `const` instead of `var`
		'no-var': 'warn',
		// require or disallow method and property shorthand syntax for object literals
		'object-shorthand': 'warn',
		// require `const` declarations for variables that are never reassigned after declared
		'prefer-const': 'warn',
		// require rest parameters instead of `arguments`
		'prefer-rest-params': 'warn',
		// require spread operators instead of `.apply()`
		'prefer-spread': 'warn',

		// These will be overridden by TypeScript rules if TS is used in the project

		// Enforces naming conventions for everything across a codebase
		'camelcase': 'warn',
		// Enforce default parameters to be last
		'default-param-last': 'error',
		// enforce dot notation whenever possible
		'dot-notation': 'warn',
		// require or disallow initialization in variable declarations
		'init-declarations': 'off',
		// Require or disallow an empty line between class members
		'lines-between-class-members': 'off',
		// Disallow generic Array constructors (part of recommended)
		// 'no-array-constructor': [],
		// Disallow duplicate class members
		'no-dupe-class-members': 'error',
		// Disallow duplicate imports
		'no-duplicate-imports': 'error',
		// Disallow empty functions
		'no-empty-function': [ 'warn', { allow: [ 'arrowFunctions', 'constructors' ] } ],
		// Disallow the use of eval()-like methods (part of recommended)
		// 'no-implied-eval': [],
		// Disallow this keywords outside of classes or class-like objects
		'no-invalid-this': 'off',
		// Disallow function declarations that contain unsafe references inside loop statements
		'no-loop-func': 'error',
		// Disallow literal numbers that lose precision
		'no-loss-of-precision': 'off',
		// Disallow magic numbers
		'no-magic-numbers': [ 'warn', { ignore: allowedMagicNumbers } ],
		// Disallow variable redeclaration
		'no-redeclare': 'error',
		// Disallow variable declarations from shadowing variables declared in the outer scope
		'no-shadow': 'off',
		// Disallow throwing literals as exceptions
		'no-throw-literal': 'error',
		// Disallow unused expressions
		'no-unused-expressions': [ 'error',
			{
				allowShortCircuit: true,
				allowTernary: true,
				allowTaggedTemplates: true,
			},
		],
		// Disallow unused variables (part of recommended)
		'no-unused-vars': [ 'warn', noUnusedVariables ],
		// Disallow the use of variables before they are defined
		'no-use-before-define': [ 'error', 'nofunc' ],
		// Disallow unnecessary constructors
		'no-useless-constructor': 'warn',
		// Disallow async functions which have no await expression (part of recommended)
		// 'require-await': [],
		// Enforces consistent returning of awaited values
		'no-return-await': 'error',
	},
};
