/* eslint-disable quote-props -- Because I prefer here consistency over pure rule. */
/* eslint-disable @typescript-eslint/no-magic-numbers -- They are needed for some rules. */

// Rules from possible errors, best practices, and so on. TypeScript
// Some are stylistic (eg. naming conventions) but out of the scope of formatters.
// Note: recommended rules are generally not there
module.exports =
{
	rules:
	{
		// Override recommended settings

		// Disallows non-null assertions using the ! postfix operator (TS fails sometime to see assertions, context, etc.)
		'@typescript-eslint/no-non-null-assertion': 'off',
		// Enforce template literal expressions to be of string type
		'@typescript-eslint/restrict-template-expressions': [ 'warn',
			{
				allowNumber: true,
				allowBoolean: true,
				allowAny: true,
				allowNullish: true,
			},
		],
		// Disallow unused variables
		'@typescript-eslint/no-unused-vars': [ 'warn',
			{
				varsIgnorePattern: '^_', // We can prefix a variable with _ to ignore it (probably temporarily)
				args: 'none',
				ignoreRestSiblings: true,
			},
		],

		// Override defaults from preferred

		// Requires Promise-like values to be handled appropriately
		'@typescript-eslint/no-floating-promises': 'error',
		// Disallow iterating over an array with a for-in loop
		'@typescript-eslint/no-for-in-array': 'error',
		// Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean
		'@typescript-eslint/no-inferrable-types': 'warn',
		// Enforce valid definition of new and constructor
		'@typescript-eslint/no-misused-new': 'error',
		// Avoid using promises in places not designed to handle them
		'@typescript-eslint/no-misused-promises': 'error',

		// Other settings

		// Requires using either T[] or Array<T> for arrays
		'@typescript-eslint/array-type': [ 'warn', { default: 'array-simple' } ],
		// Enforce or disallow the use of the record type (default to 'record')
		'@typescript-eslint/consistent-indexed-object-style': 'error',
		// Enforces consistent usage of type assertions
		'@typescript-eslint/consistent-type-assertions': [ 'error',
			{
				assertionStyle: 'as',
				objectLiteralTypeAssertions: 'never',
			},
		],
		// Consistent with type definition either interface or type
		'@typescript-eslint/consistent-type-definitions': [ 'error', 'type' ],
		// Require explicit return types on functions and class methods (want explict, except for void…)
		'@typescript-eslint/explicit-function-return-type': 'off',
		// Enforces using a particular method signature syntax.
		'@typescript-eslint/method-signature-style': [ 'warn', 'property' ],
		// Disallows usage of void type outside of generic or return types
		'@typescript-eslint/no-invalid-void-type': 'error',
		// Flags unnecessary equality comparisons against boolean literals
		'@typescript-eslint/no-unnecessary-boolean-literal-compare': 'warn',
		// Prevents conditionals where the type is always truthy or always falsy
		'@typescript-eslint/no-unnecessary-condition': 'warn',
		// Disallows unnecessary constraints on generic types
		'@typescript-eslint/no-unnecessary-type-constraint': 'warn',
		// Prefer a ‘for-of’ loop over a standard ‘for’ loop if the index is only used to access the array being iterated
		'@typescript-eslint/prefer-for-of': 'warn',
		// Enforce includes method over indexOf method
		'@typescript-eslint/prefer-includes': 'warn',
		// Enforce the usage of the nullish coalescing operator instead of logical chaining
		'@typescript-eslint/prefer-nullish-coalescing': 'warn',
		// Prefer using concise optional chain expressions instead of chained logical ands
		'@typescript-eslint/prefer-optional-chain': 'warn',
		// Requires that private members are marked as readonly if they're never modified outside of the constructor
		'@typescript-eslint/prefer-readonly': 'warn',
		// Requires that function parameters are typed as readonly to prevent accidental mutation of inputs
		'@typescript-eslint/prefer-readonly-parameter-types': 'off', // Better, but annoying
		// Prefer using type parameter when calling Array#reduce instead of casting
		'@typescript-eslint/prefer-reduce-type-parameter': 'warn',
		// Enforce the use of String#startsWith and String#endsWith instead of other equivalent methods of checking substrings
		'@typescript-eslint/prefer-string-starts-ends-with': 'warn',

		// Override ESLint rules for TS

		// Enforces naming conventions for everything across a codebase
		'camelcase': 'off',
		'@typescript-eslint/naming-convention': [ 'error',
			{
				selector: 'default',
				format: [ 'strictCamelCase' ],
			},

			{
				selector: 'variable',
				// UPPER_CASE only for module-level consts
				format: [ 'strictCamelCase', 'UPPER_CASE' ],
			},
			{
				selector: 'parameter',
				format: [ 'strictCamelCase' ],
				leadingUnderscore: 'allow',
			},
			{
				selector: [ 'classProperty', 'classMethod' ],
				format: [ 'strictCamelCase' ],
				// For properties with getter / setter or similar.
				// For methods, use sparringly…
				leadingUnderscore: 'allow',
			},

			// {
			// 	selector: 'memberLike',
			// 	modifiers: [ 'private' ],
			// 	format: [ 'camelCase' ],
			// 	leadingUnderscore: 'require'
			// },

			{
				selector: 'typeLike',
				format: [ 'PascalCase' ],
			},
		],
		// Enforce default parameters to be last
		'default-param-last': 'off',
		'@typescript-eslint/default-param-last': 'error',
		// enforce dot notation whenever possible
		'dot-notation': 'off',
		'@typescript-eslint/dot-notation': 'warn',
		// require or disallow initialization in variable declarations
		'init-declarations': 'off',
		'@typescript-eslint/init-declarations': 'off',
		// Require or disallow an empty line between class members
		'lines-between-class-members': 'off',
		'@typescript-eslint/lines-between-class-members': 'off',
		// Disallow generic Array constructors (part of recommended)
		// 'no-array-constructor': 'off',
		// '@typescript-eslint/no-array-constructor': [],
		// Disallow duplicate class members
		'no-dupe-class-members': 'off',
		'@typescript-eslint/no-dupe-class-members': 'error',
		// Disallow duplicate imports
		'no-duplicate-imports': 'off',
		'@typescript-eslint/no-duplicate-imports': 'error',
		// Disallow empty functions
		'no-empty-function': 'off',
		'@typescript-eslint/no-empty-function': [ 'error', { allow: [ 'arrowFunctions', 'constructors' ] } ],
		// Disallow the use of eval()-like methods (part of recommended)
		// 'no-implied-eval': 'off',
		// '@typescript-eslint/no-implied-eval': [],
		// Disallow this keywords outside of classes or class-like objects
		'no-invalid-this': 'off',
		'@typescript-eslint/no-invalid-this': 'off',
		// Disallow function declarations that contain unsafe references inside loop statements
		'no-loop-func': 'off',
		'@typescript-eslint/no-loop-func': 'error',
		// Disallow literal numbers that lose precision
		'no-loss-of-precision': 'off',
		'@typescript-eslint/no-loss-of-precision': 'off',
		// Disallow magic numbers
		'no-magic-numbers': 'off',
		'@typescript-eslint/no-magic-numbers': [ 'warn',
			{
				ignore:
				[
					-1,
					0,
					1,
					2,
					3,
					10,
					// Common timing values…
					100,
					500,
					1000,
				],
			},
		],
		// Disallow variable redeclaration
		'no-redeclare': 'off',
		'@typescript-eslint/no-redeclare': 'error',
		// Disallow variable declarations from shadowing variables declared in the outer scope
		'no-shadow': 'off',
		'@typescript-eslint/no-shadow': 'off',
		// Disallow throwing literals as exceptions
		'no-throw-literal': 'off',
		'@typescript-eslint/no-throw-literal': 'error',
		// Disallow unused expressions
		'no-unused-expressions': 'off',
		'@typescript-eslint/no-unused-expressions': [ 'error',
			{
				allowShortCircuit: true,
				allowTernary: true,
				allowTaggedTemplates: true,
			},
		],
		// Disallow unused variables (part of recommended)
		// 'no-unused-vars': 'off',
		// '@typescript-eslint/no-unused-vars': [],
		// Disallow the use of variables before they are defined
		'no-use-before-define': 'off',
		'@typescript-eslint/no-use-before-define': [ 'error', 'nofunc' ],
		// Disallow unnecessary constructors
		'no-useless-constructor': 'off',
		'@typescript-eslint/no-useless-constructor': 'warn',
		// Disallow async functions which have no await expression (part of recommended)
		// 'require-await': 'off',
		// '@typescript-eslint/require-await': [],
		// Enforces consistent returning of awaited values
		'no-return-await': 'off',
		'@typescript-eslint/return-await': [ 'error' ],
	},
};
