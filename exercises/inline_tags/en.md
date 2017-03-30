You know how to create an paragraph of text, so it's enough to write your own book using HTML! Sometimes we meet highlighted words in books, like definitions or something. Unfortunately, you don't know how to highlight words in HTML. However, you're here, so that's easy to fix.

### Font faces

If you need to make a part of text **bolder**, then don't forget about `<strong>` or `<b>` tags. Use them as in following example:

```html
<p>Here are few <strong>important</strong> words</p>
```

This HTML markup will produce this result:

**|>** Here are few **important** words.

In case with _italic_ highlighting, use `<em>` or `<i>` tags:

```html
<p>Here are few <em>important</em> words</p>
```

Preview:

**|>** Here are few _important_ words.

`<b>` and `<strong>`, as well as `<i>` and `<em>` produce similar results in browsers. However, they aren't equivalents and interchangeable. `<b>` means just **bold text**, at the same time `<strong>` is a tag of logical markup and highlights the tagged text. Here again with `<i>` which means _italic_ text and `<em>` for _emotional_ highlighted words.

### Upper and lower indexes

An index relative to a text is the shift (up or down) of characters relative to the baseline. Depending on shifting, the index is called, upper index or lower index. They are actively used in mathematics, physics, chemistry and to designate units of measurement. Obviously, there are corresponding tags in HTML for lower and upper indexes:

* `<sup>` - upper index
* `<sub>` - lower index

The text placed in one of these containers is designated by a smaller size than the base text and shifted relative to the horizontal. Consider an example:

```html
<p><b>The formula of sulfuric acid:</b> <i>H<sub>2</sub>SO<sub>4</sub></i></p>

<p><b>Pythagoras's theorem:</b> a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup></p>
```

Preview:

**|>** **The formula of sulfuric acid:** H₂SO₄

**|>** **Pythagoras's theorem:** a² + b² = c²

### Grouping inline elements

Sometimes you need to wrap some text or other elements in a tag which which does not inherently represent anything, for example, for styling purposes. `<span>` tag is exactly for this purpose. It is a generic inline container for phrasing content, which does not inherently represent anything. It can be used to group elements for styling purposes, or because they share attribute values. It should be used only when no other semantic element is appropriate.

Use `<span>` like this:

```html
<p>Lorem ipsum <span>dolor sit amet</span>, consectetur adipisicing elit.</p>
```

For now, `<span>` may seem useless for you, but believe it's one of the most common usable tag in HTML.

### Pitfalls

Any number of spaces are displayed as one in the browser. These three paragraphs will look exactly the same in the browser:

```html
<p>one. two. three<p>
<p>one.    two.    three<p>
<p>one.        two.        three<p>
```

HTML doesn't support hyphenation in words, as text editors do, in other words, all words are written entirely without splitting them.

Text takes up the whole width of the browser window. If you just write one long line in the HTML code, then in the browser it will be formatted, so that text will fit whole width of the window. If this text is wider than the browser's window, then a horizontal scroll bar would appear.

You can use a special character entity references. You can define them like this: `&name;`, where `name` - is a name of entity reference. Here is a few of them:

* `&&#x200b;quot;` - double quotation mark (`"`)
* `&&#x200b;amp;` - ampersand (`&`)
* `&&#x200b;apos;` - apostrophe (apostrophe-quote) (`'`)
* `&&#x200b;lt;` - less-than sign (`<`)
* `&&#x200b;gt;` - greater-than sign (`>`)

Read more about these entities here: https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references

## THE CHALLENGE

In this exercise you need to create 5 paragraphs of any text and use `<strong>`, `<em>`, `<sup>`, `<sub>` and `<span>` tag in these paragraphs, one tag per paragraph.

If you did this, check your solution with `learnyouhtml verify`.

---
