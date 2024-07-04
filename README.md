# svg-mask-icon

This is a Web Component that uses [CSS mask-image](https://developer.mozilla.org/docs/Web/CSS/mask-image). It allows you to specify the color of local SVG icons using CSS, similar to icon fonts.

<br />

## Features
- Bundle size is about 1kb.
- Ability to change color and size using CSS

<br />

## Preview
[Demo Page.](https://psephopaiktes.github.io/svg-mask-icon/)

<br />

## Comparison

### Matrix

 \ | &lt;svg-mask-icon&gt; | &lt;img&gt; | Icon Font | &lt;svg&gt; | SVG Sprite 
--:|:--:|:--:|:--:|:--:|:--:
 **CSS Color**         | ✅ | - | ✅ | ✅ | ✅ 
 **load `.svg` files** | ✅ | ✅ | - | - | -
 **no build process**  | ✅ | ✅ | - | ✅ | -
 **simple HTML**       | ✅ | ✅ | ✅ | - | -
 **browser translate** | ✅ | ✅ | - | ✅ | ✅
 **A11y label**        | ✅ | ✅ | ✅ | - | -

### 🏞️ &lt;img src="icon.svg" /&gt;
When using the `img` tag, you cannot change the color of the icon using CSS.

### 🅰️ Icon Font
This method uses font data like [Material Symbol](https://fonts.google.com/icons) or [Font Awesome](https://fontawesome.com/). It has a complex build process and may cause display issues when using browser translation.

### 🖋️ &lt;svg /&gt;...&lt;/svg&gt;
This is the method of directly writing the `svg` tag. It can make the HTML complex and inconvenient. Also, it cannot be managed in the form of `.svg` files.

### 📁 SVG Sprite
This is the method of creating an SVG sprite and specifying it using `<use>`. It has a complicated build process and is difficult to handle accessibility features like `aria-label`.

<br />

## Installation
```bash
npm i svg-mask-icon
```

```js
import "svg-mask-icon";
```

### or

download [./dist/svg-mask-icon.js](./dist/svg-mask-icon.js).

```html
<script type="module" src="svg-mask-icon.js"></script>
```

<br />

## Usage

### basic:
```html
<svg-mask-icon src="icon.svg" />
```

### Used as a decorative image:
```html
<svg-mask-icon
    src="icon.svg"
    role="presentation"
    aria-hiden="true"
></svg-mask-icon>
```

### Used as an image with alt text:
```html
<svg-mask-icon
    src="icon.svg"
    role="img"
    aria-label="Text Label"
></svg-mask-icon>
```
or
```html
<svg-mask-icon
    src="icon.svg"
    role="img"
>Text Label(hidden)</svg-mask-icon>
```
