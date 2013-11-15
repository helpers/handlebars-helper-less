# {{less}} [![NPM version](https://badge.fury.io/js/handlebars-helper-less.png)](http://badge.fury.io/js/handlebars-helper-less) 

> {{less}} handlebars helper. This helper allows you to use LESS inside style tags in your HTML. By default, the resulting CSS will be rendered inside the `<style>...</style>` tags of the rendered HTML, but you may alternatively define a destination path using the `dest` hash option of the helper.

## Quickstart
In the root of your project, run the following in the command line:

```bash
npm i handlebars-helper-less --save-dev
```
Example:

```handlebars
{{#less}}
<style>
@foo-border-color: #eee;

// Foo
.foo {
  margin: 20px 0;
  padding: 20px;
  border-left: 3px solid @foo-border-color;
}
</style>
{{/less}}
```

Compiles to:

```html
<style>
.foo {
  margin: 20px 0;
  padding: 20px;
  border-left: 3px solid #eee;
}
</style>
```



## Options
In addition to native Less.js options, the following helper options may be defined on the `less` object in the assemble options, e.g:

```js
assemble: {
  options: {
    less: {
      // less options here
    }
  }
}
```

### dest
Type: `String`
Default: `undefined`

Optionally define a destination path for the compiled CSS. The filename will be appended to either a `destdir` defined in the `less` options, or to the `assets` path, if defined. When no `dest` is defined in the hash, the resulting CSS will be rendered inside `<style>...</style>` tags in the output HTML.

For example, give the following expression: `{{#less dest="foo.css"}}...{{/less}}`, and the following defined in the Gruntfile:

```js
assemble: {
  options: {
    assets: 'dist/assets/css'
  }
}
```

The compiled CSS will be saved to: `dist/assets/css/foo.css`.


### destdir
Type: `String`
Default: `undefined`

Optionally define a destination directory to prepend to any dest used in the options hash of the helper.

For example, give the following expression: `{{#less dest="foo.css"}}...{{/less}}`, and the following defined in the Gruntfile:

```js
assemble: {
  options: {
    assets: 'dist/assets/css',
    less: {
      destdir: 'css'
    }
  }
}
```
The compiled CSS will be saved to: `css/foo.css`.


## Usage Examples
### Using the dest option

#### HTML and LESS

Given that we have `component.hbs`:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Document</title>
  </head>
  <body>

    {{#less dest="component.css"}}
      <style>
      @component-border-color: #eee;
      .component {
        margin: 20px 0;
        padding: 20px;
        border-left: 3px solid @component-border-color;
      }
      </style>
    {{/less}}

    <!-- The component -->
    <div class="component">This is an awesome component!</div>

  </body>
</html>
```

And we have this config in the Gruntfile:

```js
assemble: {
  options: {
    assets: 'dist/assets/css'
  }
}
```

#### Rendered HTML and CSS

It would render to: `dist/component.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Document</title>
  </head>
  <body>

    <!-- The component -->
    <div class="component">This is an awesome component!</div>

  </body>
</html>
```

and `dist/assets/css/component.css`

```css
.foo {
  margin: 20px 0;
  padding: 20px;
  border-left: 3px solid #eee;
}
```



## Register the Helper
> If you use [Assemble](http://assemble.io) choose one of the following approaches to register the helper:

#### Option #1: Gruntfile

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

#### Option #2: Add to devDependencies and keywords

Or, add the helper to the `devDependencies` of your project's package.json, and then add the name of the module, `handlebars-helper-less`, to the keywords:

```json
{
  "name": "foo",
  "dependencies": {
    "handlebars-helper-less": "*"
  },
  "keywords": [
    "handlebars-helper-less"
  ]
}
```

Assemble will automatically register any helpers found when matching names are defined in both `keywords` and `devDependencies`. It just works.


## Contributing
Please see the [Contributing to Assemble](http://assemble.io/contributing) guide for information on contributing to this project.

## Author

**Jon Schlinkert**

+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)
+ [github/jonschlinkert](http://github.com/jonschlinkert)

## Related Projects and Links

+ [handlebars-helpers](https://github.com/assemble/handlebars-helpers)
+ [helpers](https://github.com/helpers): some great handlebars helpers that we decided not to include in the [handlebars-helpers](https://github.com/assemble/handlebars-helpers) project, most likely because the code footprint was too big or the helper wasn't generic enough.

## License
Copyright (c) 2013 Jon Schlinkert, contributors.
Released under the MIT license

***

_This file was generated on Fri Nov 15 2013 01:00:52._
