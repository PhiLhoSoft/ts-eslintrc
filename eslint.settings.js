// Export variables of some settings, allowing to easily extend these rules.
module.exports =
{
	allowedMagicNumbers:
	[
		// These are very common and often of obvious usage.
		-1,
		0,
		1,
		2,
		3,
		4,
		10,
		// Common timing values…
		100,
		500,
		1000,
	],

	noUnusedVariables:
	{
		vars: 'all',
		// We can prefix a variable with _ to ignore it (probably temporarily).
		// Note: might conflict with naming-convention!
		varsIgnorePattern: '^_',
		// It is OK to have ignored args, particularly when overriding a method, or to keep an old signature, etc.
		args: 'none',
		ignoreRestSiblings: true,
		caughtErrors: 'none',
	},

	namingConventions:
	[
		{
			selector: 'default',
			format: [ 'strictCamelCase' ],
		},

		{
			selector: 'variable',
			format: [ 'strictCamelCase' ],
		},
		{
			selector: 'variable',
			// UPPER_CASE only for module-level consts (but accepts camelCase too)
			modifiers: [ 'const', 'global' ],
			format: [ 'UPPER_CASE', 'camelCase' ],
		},
		{
			selector: 'parameter',
			format: [ 'strictCamelCase' ],
		},
		{
			selector: 'parameter',
			modifiers: [ 'unused' ],
			format: [ 'strictCamelCase' ],
			leadingUnderscore: 'allow',
		},
		{
			selector: [ 'classProperty', 'classMethod', 'accessor' ],
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
			// As these can come from backend, we allow anything
			selector: 'objectLiteralProperty',
			format: null,
		},
		{
			selector: 'typeLike',
			format: [ 'PascalCase' ],
		},
		{
			selector: 'typeParameter',
			format: [ 'UPPER_CASE' ],
		},
	],
};
