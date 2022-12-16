# Floating Text

floatingText is a Jquery plugin that can float any characters that was type in input form

## How To Use

1. Using NPM / Yarn

```
npm install simple-floating-text
```

or

```
yarn add simple-floating-text
```

2. Clone this repository
3. Load the `floating-text.js` in your \*.html
4. Call function with Jquery and add your tags/class/id

```
$(document).ready(function () {
  $("class/id/tags").floatingText({
    option
  });
});
```

Note:

* > Don't forget to add [Jquery](https://code.jquery.com/jquery-3.6.2.min.js) from CDN or manually into your code/hmtl
* > This is not included the CSS style of your color, position, and display. You must input the style CSS manually for the floating text
* > I recommend to style the tag ```span``` manually because that will call by default in JS to create a floating text
* > If you are using ```absolute``` position in ```span``` tag, don't forget to add ```relative``` position into the parent of ```span``` tag.

This is an example of simple style for Floating Text:

```
span {
  display: none; // to hide the floating text, so it when it shows up, the animation of transition is looking better
  color: #fff; // color of your floating text
  position: absolute; // to set the position
  bottom: 50%; // to set the position
  transition: margin 0.8s; // adding transition time from hide to show up
  opacity: 0.8; // opacity of the floating text
  margin: 0; // reset margin of the floating text
  left: 50%; // to set the position
  font-weight: 100;
}
```

## Parameters

### duration

Integer (number). 1 by default. A value to define speed of fading out the floating characters.

### upperLimit

Interger (number). 150 by default. A value to define maximum of how far the floating text is floating by adding margin bottom in CSS.

### sizeInterval

Array Integer (number). [15, 80] by default. A value to define font-size of floating text and randomize by getRandomInt from this Array number.
