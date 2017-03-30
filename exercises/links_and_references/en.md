Links are the basis of hypertext documents and allow you to move from one web page to another. The link can lead not only to HTML-files, but also to a file of any type, and this file can be placed even on another site. The main thing is to have access to the document to which the link is made.

To create a link, you need to tell the browser what is the link, and also specify the address of the document to which you want to link. Both actions are performed using the `<a>` (_**a**nchor_) tag:

```html
<a href="https://google.com/">Google</a>
```

An `href` attribute contains a URL or a URL fragment that the hyperlink points to.

Besides `href`, links also have a lot of useful attributes. Here are the most important of them:

* `download` - this attribute instructs browsers to download a URL instead of navigating to it.
* `target` - specifies where to display the linked URL. It is a name of, or keyword for, a browsing context: a tab, window, etc.

Moreover, you also can put an image inside of link, so you'll get an clickable image, like this:

```html
<a href="https://google.com" target="_blank">
  <img src="path/to/google-logo.png"
       alt="Google logo" />
</a>
```

In example above, we are defining the link to Google's main page using image. By the way, we've specified a `target="_blank"`, which means this link will be opened in new browser window.

It's common to create links that open in the user's email program to allow them to send a new message. This is done with a `mailto:` link. Here's a simple example:

```html
<a href="mailto:email@someone.com">Send email to someone</a>
```

## THE CHALLENGE

In this exercise you have to create a clickable image (link with image). Use any image and any link you like.

Verify your document with `learnyouhtml verify` as soon as you solve the task.

---
