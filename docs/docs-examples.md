## Using the dest option

### HTML and LESS

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

### Rendered HTML and CSS

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
