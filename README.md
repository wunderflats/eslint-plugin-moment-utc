# eslint-plugin-moment-utc

[![Travis Build](http://img.shields.io/travis/wunderflats/eslint-plugin-moment-utc.svg?style=flat)](https://travis-ci.org/wunderflats/eslint-plugin-moment-utc) [![npm](https://img.shields.io/npm/dm/eslint-plugin-moment-utc.svg)](https://www.npmjs.com/package/eslint-plugin-moment-utc)

This is an ESLint plugin to prevent the usage of localtime.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-moment-utc`:

```sh
npm install eslint-plugin-moment-utc --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must
also install `eslint-plugin-moment-utc` globally.

## Usage

Add `utc` to the plugins section of your `.eslintrc` configuration file. You can
omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "moment-utc"
    ]
}
```

Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "moment-utc/no-moment-without-utc": 2
    }
}
```

## Supported Rules

*   [no-moment-without-utc](./docs/rules/no-moment-without-utc.md)
