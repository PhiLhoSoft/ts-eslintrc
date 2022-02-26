# ts-eslintrc

[![Version](https://img.shields.io/npm/v/@philhosoft/ts-eslintrc)](https://www.npmjs.com/package/@philhosoft/ts-eslintrc)

This is just a repository for my ESLint settings, with TypeScript (TSLint) plugin.
I separated ES and TS, in case I need to make a pure JS project someday…
I also separated semantics (possible errors, best practices, etc.) from style (formatting) rules.
The latter has only rules that can be fixed by a formatter like Prettier.
I deeply dislike these (I am used to do finicky formatting myself, and formatters can lead to inconsistent formatting because of line length), but I might work on a project where one is needed, and maybe these files can be useful as a base for people liking formatters too.

## Installation

You can install it by putting in package.json something like:
```json
    "@philhosoft/ts-eslintrc": "^1.1.0",
```

## Usage

Take .eslintrc.js, which is just an example of usage, customize it as needed.
It extends the files from node_modules, and thus can work out of the box.
Further customizations of rules can be done too (I have a personal taste for [ 'spaced arrays' ] and Allman brace style).

## History

v. 1.1.0 - Adjust rules, factor out some settings.<br>
v. 1.0.1 - Remove initial dot for included files.<br>
v. 1.0.0 - Initial implementation.
