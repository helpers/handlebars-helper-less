In the root of your project, run the following in the command line:

```bash
npm i handlebars-helper-{%= shortname %} --save-dev
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
