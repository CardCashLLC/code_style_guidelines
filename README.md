# code_style_guidelines

## ESLint Setup
1. Create a file `.eslintrc.json` in the root directory with the following contents:
```javascript
{
    "extends": "standard",
    "rules": {
        "semi": 0,
        "one-var": 0
    },
    "globals": {
        "process":false,
        "__dirname":false,
        "module": false,
        "require": false,
        "define": false,
        "describe": false,
        "sinon": false,
        "expect": false,
        "should": false,
        "before": false,
        "beforeEach": false,
        "after": false,
        "afterEach": false,
        "it": false
    }
}
```

2. install ESLint and all its dependencies from npm:
`npm install --save eslint eslint-config-standard eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard gulp-eslint`

**IMPORTANT**: If you enable `autoFixOnSave` please be careful when editing and commiting old files. Do not include full file syntax updates in your functional code change commits.

## Logging Levels
The log levels in bunyan are as follows. The level descriptions are best
practice *opinions* of the author.

- "fatal": The service/app is going to stop or become unusable now.
  An operator should definitely look into this soon.
- "error": Fatal for a particular request, but the service/app continues
  servicing other requests. An operator should look at this soon(ish).
- "warn": A note on something that should probably be looked at by an
  operator eventually.
- "info": Detail on regular operation. Information that will be useful to debug errors *post mortem*
- "debug": Anything else, i.e. too verbose to be included in "info" level. **Should be used sparingly.**
- "trace": Logging from external libraries used by your app or *very*
  detailed application logging.

Setting a logger instance (or one of its streams) to a particular level implies
that all log records *at that level and above* are logged. E.g. a logger set to
level "info" will log records at level info and above (warn, error, fatal). For more info see [node-bunyan](https://github.com/trentm/node-bunyan/blob/master/README.md#levels)

