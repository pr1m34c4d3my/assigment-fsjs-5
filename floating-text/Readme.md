# Floating Text

floatingText is a Jquery plugin that can float any characters that was type in input form

## How To Use

1. Using NPM / Yarn

```
npm install simple-floating-text
or
yarn add simple-floating-text
```

2. Clone this repository
3. Load the `floating-text.js` in your \*.html
4. Call function with Jquery and add your elements/class/id

```
$(document).ready(function () {
  $("input").floatingText({
    duration: 1,
    upperLimit: 200,
    sizeInterval: [15, 80],
  });
});

```

## Parameters

### duration

Integer (number). 1 by default. A value to define speed of fading out the floating characters.

### Upperlimit

Interger (number). 150 by default. A value to define maximum of how far the floating text is floating by adding margin bottom in CSS.

### sizeInterval

Array Integer (number). [15, 80] by default. A value to define font-size of floating text and randomize by getRandomInt from this Array number.
