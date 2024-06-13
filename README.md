# pwix:blaze-layout

## Preliminary notes

This package is a fork from [kadira:blaze-layout v 2.3.0](https://github.com/kadirahq/blaze-layout/):
- because I use it and like it (that's fine ;))
- unfortunately, it seems no more maintained
- and the [#83](https://github.com/kadirahq/blaze-layout/pull/83) issue prevented me to be able to upgrade my Meteor environments
- so one fix later this package is born.

_This project was earlier known as **meteorhacks:flow-layout**. This was an exact copy of FlowLayout but with a different name._

## What is it ?

This is a layout manager designed for [Blaze](https://www.blazejs.org/). This is built to use with FlowRouter but, this can be used without FlowRouter too. This is a very simple layout manager. It will does following:

- Allow you to render a layout template to the UI
- Allow you to pass data to the layout
- Only re-render when necessary parts of the layout
- Can be used with multiple layouts.

## Installation

This Meteor package is installable with the usual command:

```sh
    meteor add pwix:blaze-layout
```

## Usage

First [install](#installation) BlazeLayout.

Then create following few templates, Say, for example:

```html
    <template name="layout1">
      {{> Template.dynamic template=top}}
      {{> Template.dynamic template=main}}
    </template>

    <template name="header">
      <h1>This is the header</h1>
    </template>

    <template name="postList">
      <h2>This is the postList area.</h2>
    </template>

    <template name="singlePost">
      <h2>This is the singlePost area.</h2>
    </template>
```

Now you can render the layout with:

```js
    BlazeLayout.render('layout1', { top: "header", main: "postList" });
```

Then you will get output like below:

```html
    <h1>This is the header</h1>
    <h2>This is the postList area.</h2>
```

Sometimes later, you can render the layout again:

```js
    BlazeLayout.render('layout1', { top: "header", main: "singlePost" });
```

Since only the `main` is changed, `top` section won't get re-rendered. Here's the HTML you'll get:

```html
    <h1>This is the header</h1>
    <h2>This is the singlePost area.</h2>
```

### Rendering Multiple Templates

Likewise you can create multiple templates and switch between each other.
But when you are changing the layout, whole UI will get re-rendered again.

So, it's a good idea to use as few layouts as possible.

### Set Different Root Node

By default, BlazeLayout render layouts into a DOM element with the id `__blaze-root`. Sometimes, you may need to change it or just render layouts into the body. If so, here's how to do it.

Add following code inside on the top of one of your client side JS file:

```js
    BlazeLayout.setRoot('body');
```

You can set any CSS selector, DOM Node, or jQuery object as the root.

## Provides

### `BlazeLayout`

The exported `BlazeLayout` global object provides following items:

#### Functions

##### `BlazeLayout.render( layout, region )`

Render the `layout` template, dynamically updating `regions` sub-templates.

##### `BlazeLayout.reset()`

Reset (and remove) the Blaze previously rendered layout.

##### `BlazeLayout.setRoot( root )`

Set a new root node, default being `#__blaze-root`.

## Configuration

None at the moment.

## NPM peer dependencies

None at the moment.

## Translations

None at the moment.

## Cookies and comparable technologies

None at the moment.

## Issues & help

In case of support or error, please report your issue request to our [Issues tracker](https://github.com/trychlos/pwix-blaze-layout/issues).

## Original documentation

The documentation was originally from **kadira**. See also [the Github original repository](https://github.com/kadirahq/blaze-layout/).

It has been since rewritten for completion and homogenization.

<!--
# BlazeLayout (kadira:blaze-layout) [![Build Status](https://travis-ci.org/kadirahq/blaze-layout.svg?branch=master)](https://travis-ci.org/kadirahq/blaze-layout)
-->

----
P. Wieser
- Last updated on 2023, June 20th
