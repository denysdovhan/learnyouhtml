You can attach a special resources to your page, like styles or scripts.

### Styles

A web page may be stylized using CSS stylesheets.

> CSS or Cascading Style Sheets  is a style sheet language used for describing the presentation of a document written in HTML.

You can include CSS on your page with `<style>` tag, which is used to contain style information for a document, or part of a document. By default, the style instructions written inside that element are expected to be CSS.

Here is an example of using `<style>` tag:

```html
<style type="text/css">
body {
  color: red;
}
</style>
```

The other way to inject styles in your page is to link a styles file using `<link>` tag. The `<link>` element specifies relationships between the current document and an external resource.

The important attributes are:

* `href` - an attribute specifies the URL of the linked resource. A URL might be absolute or relative.
* `rel` - an attribute names a relationship of the linked document to the current document.

To include a stylesheet in a page, use the following syntax:

```html
<link href="style.css" rel="stylesheet">
```

**Note:** It's better to include styles in `<head>` element.

### Scripts

Besides styles, you are up to include some JavaScript logic in an HTML document. Here's where `<script>` tag comes to help us.

The `<script>` element is used to embed or reference an executable script. It has few important attributes:

* `src` - this attribute specifies the URI of an external script; this can be used as an alternative to embedding a script directly within a document. If a script element has a src attribute specified, it should not have a script embedded inside its tags.
* `type` - this attribute identifies the scripting language of code embedded within a script element or referenced via the element’s src attribute.
* `async` - set this Boolean attribute to indicate that the browser should, if possible, execute the script asynchronously.
* `defer` - this Boolean attribute is set to indicate to a browser that the script is meant to be executed after the document has been parsed.

Here is an example of inline script:

```html
<script>
  console.log('Hello, world!');
</script>
```

Reference script in external file:

```html
<script src="javascript.js"></script>
```

**Note:** It's better to include scripts before closing of `<body>` element.

## THE CHALLENGE

Create a web page with one inline style, one linked stylesheet and one inline script or one referenced script.

After all, verify your document with `learnyouhtml verify` when you get a solution.

---
