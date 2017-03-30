Now you know the basic of styling and composing text in HTML. The problem is that you can't create a web page with UI elements you used to see on real sites and web-applications. That's because you can't compose everything in self-sufficient blocks. This exercise aimed to explain you how to do this.

### HTML <div> element

Before we start, let's became a friends with `div` tag. The `<div>` element is the generic container for flow content and does not inherently represent anything. Use it to group elements for purposes such as styling, marking a section of a document in a different language, and so on.

Here is an example of usage:

```html
<div>
  <p>Any kind of content here. Such as
  &lt;p&gt;, &lt;table&gt;. You name it!</p>
</div>
```

Preview:

**|>** Any kind of content here. Such as <p>, <table>. You name it!

### Semantic elements

Consider this page layout:

```
╔═════════════════════════════════════════════════════════╗
║ <header>        ┌─────────────────────────────────────┐ ║
║                 │ <nav>                               │ ║
║                 │                      (3 menu items) │ ║
║                 └─────────────────────────────────────┘ ║
╠═════════════════════════════════════════════════════════╣
║ <main>                                                  ║
║┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓┏━━━━━━━━━━━━━━━━┓║
║┃ <article>                           ┃┃ <aside>        ┃║
║┃┌───────────────────────────────────┐┃┃                ┃║
║┃│ <section>                         │┃┃ (3 menu items) ┃║
║┃│                                   │┃┃                ┃║
║┃│ (Heading 1)                       │┃┃                ┃║
║┃│                                   │┃┃                ┃║
║┃│ (A paragraph of text.)            │┃┃                ┃║
║┃└───────────────────────────────────┘┃┃                ┃║
║┃┌───────────────────────────────────┐┃┃                ┃║
║┃│ <section>                         │┃┃                ┃║
║┃│                                   │┃┃                ┃║
║┃│ (Heading 2)                       │┃┃                ┃║
║┃│                                   │┃┃                ┃║
║┃│ (A paragraph of text.)            │┃┃                ┃║
║┃│                                   │┃┃                ┃║
║┃└───────────────────────────────────┘┃┃                ┃║
║┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛┗━━━━━━━━━━━━━━━━┛║
╠═════════════════════════════════════════════════════════╣
║ <footer>                                                ║
║ (A paragraph with copyright message.)                   ║
╚═════════════════════════════════════════════════════════╝
```

This looks more like real site, doesn't it? This can be done with new fancy HTML5 tags: `main`, `header`, `nav`, `footer`, `section`, `aside` and `article`.

#### HTML <main> element

The `<main>` tag represents the main content of the `<body>` of a document or application. The main content area consists of content that is directly related to, or expands upon the central topic of a document or the central functionality of an application.

The content of a `<main>` element should be unique to the document, excluding any content that is repeated across a set of documents such as sidebars, navigation links, copyright information, site logos and so on.

Example:

```html
<main>
  <h1>Important article about something</h1>

  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  <p>Ut enim ad minim veniam, nisi ut aliquip ex ea commodo consequat.</p>
  <p>Duis aute irure dolor eu fugiat nulla pariatur.</p>
</main>
```

#### HTML <header> element

The `<header>` tag represents a group of introductory or navigational aids. It may contain some heading elements but also other elements like a logo, a search form, and so on.

Example:

```html
<header>
  <h1>Main Page Title</h1>
  <img src="site-log.png" alt="Site logo">
</header>
```

#### HTML <nav> element

The `<nav>` tag represents a section of a page that links to other pages or to parts within the page: a section with navigation links. A document may have several `<nav>` elements, for example, one for site navigation and one for intra-page navigation.

```html
<nav>
  <ul>
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
  </ul>
</nav>
```

#### HTML <footer> element

The `<footer>` tag represents a footer for its nearest sectioning content or sectioning root element. A footer typically contains information about the author of the section, copyright data or links to related documents.

```html
<footer>
  Some copyright info or perhaps some author
  info for an &lt;article&gt;?
</footer>
```

#### HTML <section> element

The `<section>` element represents a generic section of a document, i.e., a thematic grouping of content, typically with a heading. Each `<section>` should be identified, typically by including a heading (`<h1>`-`<h6>` element) as a child of the `<section>` element.

Example:

```html
<section>
  <h1>Heading</h1>
  <p>Bunch of awesome content</p>
</section>
```

#### HTML <aside> element

The `<aside>` element represents a section of a document with content connected tangentially to the main content of the document (often presented as a sidebar).

```html
<aside>
  <!-- aside content -->
</aside>
```

#### HTML <article> element

The `<article>` tag represents a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable: a forum post, a magazine or newspaper article, or a blog entry.

Example:

```html
<article>
  <!-- content of article goes here -->
</article>
```

## THE CHALLENGE

Here you have a layout:

```
╔═════════════════════════════════════════════════════════╗
║ <header>        ┌─────────────────────────────────────┐ ║
║                 │ <nav>                               │ ║
║                 │                      (3 menu items) │ ║
║                 └─────────────────────────────────────┘ ║
╠═════════════════════════════════════════════════════════╣
║ <main>                                                  ║
║┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓┏━━━━━━━━━━━━━━━━┓║
║┃ <article>                           ┃┃ <aside>        ┃║
║┃┌───────────────────────────────────┐┃┃                ┃║
║┃│ <section>                         │┃┃ (3 menu items) ┃║
║┃│                                   │┃┃                ┃║
║┃│ (Heading 1)                       │┃┃                ┃║
║┃│                                   │┃┃                ┃║
║┃│ (A paragraph of text)             │┃┃                ┃║
║┃└───────────────────────────────────┘┃┃                ┃║
║┃┌───────────────────────────────────┐┃┃                ┃║
║┃│ <section>                         │┃┃                ┃║
║┃│                                   │┃┃                ┃║
║┃│ (Heading 2)                       │┃┃                ┃║
║┃│                                   │┃┃                ┃║
║┃│ (A paragraph of text)             │┃┃                ┃║
║┃│                                   │┃┃                ┃║
║┃└───────────────────────────────────┘┃┃                ┃║
║┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛┗━━━━━━━━━━━━━━━━┛║
╠═════════════════════════════════════════════════════════╣
║ <footer>                                                ║
║ (A paragraph with copyright message.)                   ║
╚═════════════════════════════════════════════════════════╝
```

Please, write corresponding markup for this layout and check your document with `learnyouhtml verify`.

---
