Often it's better to show data in form of list with items. HTML gives you tags for this case. There are three types of lists in HTML:

1. Ordered list
2. Unordered list
3. Definitions list

Let's consider them in this exercise.

### Ordered lists

If you need to create a list with numbered items, you should use `<ol>` tag. A `<ol>` is stands for _**o**rdered **l**ist_ and represents an ordered list of items, typically rendered as a numbered list.

A list item can be described using `<li>` tag, which stands for _**l**ist **i**tem_. Consider this example with ordered list markup:

```html
<ol>
  <li>first item</li>
  <li>second item</li>
  <li>third item</li>
</ol>
```

Preview:

1. first item
2. second item
3. third item

Typically, ordered-list items are displayed with a preceding numbering, which can be of any form, like numerals, letters or Romans numerals or even simple bullets.

A `<ol>` tag have useful attributes:

1. `type` - indicates the numbering type, may has one of these values:
  - `1` indicates numbers _(default)_;
  - `a` indicates lowercase letters;
  - `A` indicates uppercase letters;
  - `i` indicates lowercase Roman numerals;
  - `I` indicates uppercase Roman numerals.
2. `start` - this integer attribute specifies the start value for numbering the individual list items. Although the ordering type of list elements might be Roman numerals, such as XXXI, or letters, the value of start is always represented as a number.
3. `reversed` - a boolean attribute specifies that the items of the list are specified in reversed order.

### Unordered lists

Unordered lists look similar to ordered ones. Describing of list items remains the same, keep using `<li>` tag. The main difference is that you need to wrap all list items in `<ul>` tag, which stands for _**u**nordered **l**ist_. `<ul>` tag represents an unordered list of items, typically rendered as a bulleted list.

The <ul> element is for grouping a collection of items that do not have a numerical ordering, and their order in the list is meaningless.

Example:

```html
<ul>
  <li>first item</li>
  <li>second item</li>
  <li>third item</li>
</ul>
```

Preview:

* first item
* second item
* third item

Typically, unordered-list items are displayed with a bullet, which can be of several forms, like a dot, a circle or a squared.

If you need to set the bullet style for the list, take a look at `type` attribute. It can take these values:

* `circle`
* `disc`
* `square`

### Definitions lists

In some cases you need to implement glossary or to display a list of key-value pairs. There is `<dl>` tag for such needs. `<dl>` stands for _**d**efinitions **l**ist_ and is used to encloses a list of groups of terms and descriptions.

Terms are enclosed in `<dt>` tag, which means _**d**efinition **t**erm_. Definitions are wrapped in `<dd>` tags.

Example with single term and description:

```html
<dl>
  <dt>HTML</dt>
  <dd>
    The standard markup language for
    creating web pages and web applications.
  </dd>

  <!-- Other terms and descriptions -->
</dl>
```

Also, you can write multiple terms with single definition, single term with my multiple definitions or multiple terms with multiple definitions.

## THE CHALLENGE

In your HTML document create three lists:

1. ordered list with 3 items
2. unordered list with 3 items
3. definition list with 2 pairs of term and definition

The content of list items is up to you.

If you've already solved this task, just check your solution with `learnyouhtml verify`.

---
