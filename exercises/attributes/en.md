In this exercise we are going to take a look at tag's attributes.

Tag's attributes extend ability of tags and let us flexible control over different options of displaying of elements or their behavior. There is a lot of attributes for different purposes like color, size, address and so on.

You can specify attributes like this:

```html
<tag attribute1="value1" attribute2="value2">some text</tag>
<!-- or for self-closing tag -->
<tag attribute1="value1" attribute2="value2">
```

In according to HTML specification, all values of attributes should be defined between double quotes (`attribute="value"`) or single quotes (`attribute='value'`). Omitting these quotes wouldn't cause an error, because browsers, in most of cases, will handle this code correctly. However, you can get a problem if you try to define value with spaces and don't wrap this value in quotes. Consider this example:

```html
<!-- with double quotes -->
<tag attribute="value with spaces"></tag>
<!-- with single quotes -->
<tag attribute='value with spaces'></tag>
<!-- without quotes -->
<tag attribute=value with spaces></tag>
```

In third example above, we have got a problem. Only `value` would be used as an value of `attribute`, so `with` and `spaces` would be ignored as invalid attributes. That's why we suggest you to wrap values of attributes in quotes.

There are few important things you need to remember: if you didn't specify an attribute, browser will use default values for that attribute; order of attributes isn't matter, each attribute belongs to specific type (text, number, path to file, etc).

## THE CHALLENGE

You're already familiar with `<img>` tag from previous exercise. This tag embeds an image on page. This tag has few important attributes:

* `src` - the image URL. This attribute is mandatory for the `<img>` element.
* `alt` - this attribute defines the alternative text describing the image. Users will see this text displayed if the image URL is wrong or if the image is not yet downloaded.
* `height` - the intrinsic height of the image in pixels.
* `width` - the intrinsic width of the image in pixels.

You need create an HTML document with an image. Feel free to set any values for `src` and `alt` attributes.

If you did this, check your solution with `learnyouhtml verify`.

---
