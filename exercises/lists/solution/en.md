# Great!

Nice to see you're get how to write lists in HTML.

Additionally, there is no limitation to the depth and alternation of nested lists defined with the `<ol>` and `<ul>` elements. This markup will work as well:

```html
<ol>
  <li>first item</li>
  <li>second item  <!-- closing </li> tag not here! -->
    <ul>
      <li>second item first subitem</li>
      <li>second item second subitem</li>
      <li>second item third subitem</li>
    </ul>
  </li>            <!-- Here's the closing </li> tag -->
  <li>third item</li>
</ol>
```

There are cases when it's not enough to summarize information in a simple list, that's where tables come. In following exercise we're going to take a look at tables in HTML.
