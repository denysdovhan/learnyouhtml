HTML uses special bits of programming language called _tags_ to let the browser know how a webpage should look. The tags usually come in pairs: an opening tag to tell the browser when to start doing something, and an ending tag to tell the browser when to stop doing something. There are many different kinds of tags, and each one has a different purpose.

Let's think of tags like it's some kind of selection tool in text editors. In text editor, such as **Microsoft Office Word** or **Writer**, if you want to make text **bold** you _select_ a part of text and click corresponding button (**b**). In HTML, you have tags for that reason.

```
                ┌── a "selected" text ──┐
                ↓                       ↓
Lorem ipsum <tagname>dolor sit amet</tagname>, consectetur adipisicing elit.
```

Opening tags have a keyword, such as `p`, surrounded by angle brackets (`<` and `>`). For example, the tag `<p>` tells the browser the start a new paragraph. Ending tags look almost exactly the same, only they have a forward slash (`/`) added just before the keyword. For example, the tag `</p>` tells the browser to end a paragraph.

```html
<p>this is a paragraph</p>
```

A small number of tags, like `<br>`, `<img>` and `<hr>`, can be used without an ending tag. Here is what these tags do:

* `<br>` - produces a line break in text (carriage-return). It is useful for writing a poem or an address, where the division of lines is significant.
* `<img>` — represents an image in the document. We will consider this tag later.
* `<hr>` — represents a thematic break between paragraph-level elements. In previous versions of HTML, it represented a horizontal rule. It may still be displayed as a horizontal rule in visual browsers.

You could use them like this:

```html
<p>first paragraph</p>
<hr>
<p>second paragraph</p>
```

### Basic HTML document

In previous exercise you've created a document. Let's consider its content:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Hello, world!</title>
  </head>
  <body>
    here is a body
  </body>
</html>
```

Here we have a `<html>` tag which wrap whole document — this tag indicates where HTML document begins and where it ends.

HTML document had its own `<head>` and `<body>`. In the `<head>` tag we put all information about document, like meta-tags and `<title>`. The content of `<title>` tag will be shown in browser's tag of this document. In the `<body>` we put everything we want to be drawn in browser's window: headings, text, images, etc.

Probably, you still have a question: "What does `<meta charset="utf-8">` tag do?" Well, this is special tag — a _meta_-tag. Meta-tags are used for describing a document. It's a bit weird, but keep thinking about meta-tags as _an information about information_. Directly, this tag means that we want to use `utf-8` charset for our document.

## THE CHALLENGE

You already have an HTML-document. In `<body>` add two paragraphs (`<p>`) with any text you like. Please, separate these two tags with horizontal rule (`<hr>` tag).

Don't forget to check your solution, run `learnyouhtml verify` to verify.

---
