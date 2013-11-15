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

## dest
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


## destdir
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