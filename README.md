# eslint-plugin-cardcash-frontend

Style Guide used ad CardCash

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-cardcash-frontend`:

```
$ npm install eslint-plugin-cardcash-frontend --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-cardcash-frontend` globally.

## Usage

Add `cardcash-frontend` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "cardcash-frontend"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "cardcash-frontend/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





