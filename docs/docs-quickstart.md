In the root of your project, run the following in the command line:

```bash
npm i handlebars-helper-{%= shortname %} --save-dev
```

## Registering the helper

If you use [Assemble](http://assemble.io) choose one of the following approaches to register the helper:

### Option #1: Gruntfile

Define paths to any helpers in the `helpers` option of your project's [Gruntfile](http://gruntjs.com/):

```javascript
grunt.initConfig({
  assemble: {
    options: {
      helpers: ['handlebars-helper-less']
    },
    files: {}
  }
});
```

### Option #2: Add to devDependencies and keywords

Or, add the helper to the `devDependencies` of your project's package.json, and then add the name of the module, `handlebars-helper-{%= shortname %}`, to the keywords:

```json
{
  "name": "foo",
  "dependencies": {
    "handlebars-helper-{%= shortname %}": "*"
  },
  "keywords": [
    "handlebars-helper-{%= shortname %}"
  ]
}
```

Assemble will automatically register any helpers found when matching names are defined in both `keywords` and `devDependencies`. It just works.