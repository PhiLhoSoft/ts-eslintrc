# ts-eslintrc

This is just a repository for my ESLint settings, with TypeScript (TSLint) plugin.
I separated ES and TS, in case I need to make a pure JS project…
I also separated semantics (possible errors, best practices, etc.) from style (formatting) rules.
The latter has only rules that can be fixed by a formatter like Prettier.
I deeply dislike these (I am used to do finicky formatting myself, and formatters can lead to inconsistent formatting because of line length), but I might work on a project where one is needed, and maybe these files can be useful as a base for people liking formatters too.

## Installation

I don't put it on npm, it is just personal files.
I can install them by putting in package.json something like:
```json
    "ts-eslintrc": "PhiLhoSoft/ts-eslintrc#master",
```
If there is a need to update, you have to remove it in node_modules and do `npm i` again.

## Usage

Take .eslintrc.example.js, rename it to .eslintrc.js, customize it as needed.
It extends the files from node_modules, and thus can work out of the box.
Further customizations of rules can be done too (I have a personal taste for [ 'spaced arrays' ] and Allman brace style).

## History

v. 1.0.0 - Initial implementation
