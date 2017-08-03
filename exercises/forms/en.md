Definitely you remember that sites often has a sign-up pages with input fields for email or username and password. In this exercise we're going to consider how you can create such HTML elements.

First of all, we need to start from `<form>` element which represents a document section that contains interactive controls to submit information to a web server.

A `<form>` element has a lot of attributes, here are the most important of them:

* `action` - the URI of a program that processes the form information.
* `method` - the HTTP method that the browser uses to submit the form. Possible values are: `post` — corresponds to the HTTP POST method;
`get` - corresponds to the HTTP GET method.
* `name` - The name of the form. It must be unique among the forms in a document.

Here is a more information about `<form>`'s attributes: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#Attributes

Second, knowing what is `<form>`, you need to know what is `<input>` — the element is used to create interactive controls for web-based forms in order to accept data from the user. How an `<input>` works varies considerably depending on the value of its `type` attribute.

Below there is a list of widely used `type` values:

* `text` - a single-line text field. Line-breaks are automatically removed from the input value. _(default)_
* `button` - a push button with no default behavior.
* `checkbox` - a check box. You must use the value attribute to define the value submitted by this item. Use the checked attribute to indicate whether this item is selected.
* `file` - a control that lets the user select a file.
* `password` - a single-line text field whose value is obscured.
* `radio` - a radio button. You must use the value attribute to define the value submitted by this item. Use the checked attribute to indicate whether this item is selected by default.
* `submit` - a button that submits the form.

Read more about other possible values here: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_<input>\_types

## THE CHALLENGE

Create a with two inputs (for login and password) and submit button.

Verify your document with `learnyouhtml verify` when you get a solution.

---
