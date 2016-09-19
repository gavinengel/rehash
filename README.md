# rehash.js

Add the URL hash to the HTML-tag, so we can use CSS more effectively.  Allows you to avoid complex routing systems for single-page applications.

## Example

Here are a few URLs in a sample page:

1. http://localhost.meow/todomvc/#/
2. http://localhost.meow/todomvc/#/active
3. http://localhost.meow/todomvc/#/completed
4. http://localhost.meow/todomvc/#/ignore/non\alpha*numeric!

And this is the resultant html-tag in those cases:

1. `<html hash="">`
2. `<html hash="active">`
3. `<html hash="completed">`
4. `<html hash="ignorenonalphanumeric">`

This can be useful for (one example) showing/hiding elements.  Here is a snippet of CSS that I have used with the above code:

```
html[hash="active"] .todoapp .todo-list li.completed {
  display: none;
}

html[hash="completed"] .todoapp .todo-list li {
  display: none;
}

html[hash="completed"] .todoapp .todo-list li.completed {
  display: block;
}
```

## Usage

Include somewhere on your page, we ain't fancy here:

`	<script src="http://rawgit.com/gavinengel/rehash/master/rehash.js" type="text/javascript"></script>`
