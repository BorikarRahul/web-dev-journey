# CSS tutorial

basic Syntax css

```css CSS Property use in External file
h1 {
  color: red;
}
```

<pre>
h1 = selector
color = property
red = value
</pre>

#### CSS property to apply style in html page

| Type     | Description                                    | How to Use Example                                                                                      |
| -------- | ---------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| Inline   | CSS written directly in the HTML element       | `<h1 style="color: red;">Hello</h1>`                                                                    |
| Internal | CSS written inside a `<style>` tag in `<head>` | `<style> h1 { color: red; } </style>` in the `<head>` section of your HTML file                         |
| External | CSS written in a separate `.css` file          | Link CSS file: `<link rel="stylesheet" href="style.css">` and write `h1 { color: red; }` in `style.css` |

#### Color System

| System | Description                     | Example Usage                     | Example Value           |
| ------ | ------------------------------- | --------------------------------- | ----------------------- |
| Name   | Predefined color names          | `color: red;`                     | red, blue, green        |
| RGB    | Red, Green, Blue values (0-255) | `color: rgb(255,0,0);`            | rgb(255,0,0)            |
| HEX    | Hexadecimal color codes         | `color: #ff0000;`                 | #ff0000, #00ff00        |
| RGBA   | RGB with Alpha (opacity, 0-1)   | `color: rgba(255,0,0,0.5);`       | rgba(255,0,0,0.5)       |
| HSL    | Hue, Saturation, Lightness      | `color: hsl(0, 100%, 50%);`       | hsl(0, 100%, 50%)       |
| HSLA   | HSL with Alpha (opacity, 0-1)   | `color: hsla(0, 100%, 50%, 0.5);` | hsla(0, 100%, 50%, 0.5) |

HEX value = hexadecimal value for color

hex = 6
de = 10
== 15 value for color

###### like

| System | R     | G     | B     |
| ------ | ----- | ----- | ----- |
| RGB    | 0-255 | 0-255 | 0-255 |
| HEX    | 00-ff | 00-ff | 00-ff |

[Visit Coolors.co for color combinations](https://coolors.co/)

#### Selectors

<!-- | Selector Type      | Syntax Example          | Description                                      |
| ------------------ | ----------------------- | ------------------------------------------------ |
| Universal Selector | `* { ... }`             | Selects all elements                             |
| Element Selector   | `h1 { ... }`            | Selects all `<h1>` elements                      |
| ID Selector        | `#myId { ... }`         | Selects element with a specific `id` attribute   |
| Class Selector     | `.myClass { ... }`      | Selects all elements with a specific class       |
| Attribute Selector | `[type="text"] { ... }` | Selects elements with a specific attribute/value | -->

| Selector Type      | Syntax Example          | Description                                      | Priority (Specificity) |
| ------------------ | ----------------------- | ------------------------------------------------ | ---------------------- |
| Universal Selector | `* { ... }`             | Selects all elements                             | Lowest                 |
| Element Selector   | `h1 { ... }`            | Selects all `<h1>` elements                      | Low                    |
| Class Selector     | `.myClass { ... }`      | Selects all elements with a specific class       | Medium                 |
| Attribute Selector | `[type="text"] { ... }` | Selects elements with a specific attribute/value | Medium                 |
| ID Selector        | `#myId { ... }`         | Selects element with a specific `id` attribute   | High                   |

---

<pre>     
</pre>

#### Text Property

<pre>     
text-align : left/ right / Center;
in CSS3    : start / end  ( is added in CSS 3)
</pre>

Text-decoration : Underline / Overline / line-through;
best usecase for Text-decoration : none ; ( in Anchor tag for removing Underline of link )

font-weight : normal / bold / bolder / lighter / 100-900 ;

font-family : arial , roboto , timesnewroman ;[ This are Generic Font Families = Serif, Sans-Serif, Cursive, Fantasy, Monospace ; (<- those font are mostly available in all the browser's ) ( fall Back Mechanisum = If this is not available apply next it apply for all )]

Line-height : 2px ;
Line-height : normal;

Text-transform: uppercase / lowercase / capitalize / none;

#### Units in CSS

<pre>     
Absolute 
Pixels (px) = 96px = 1 inch = 2.54cm
              font-size: 2px;
              ( Font-size == Text size )
</pre>

## CSS Box Model

> The CSS Box Model is a fundamental concept that describes how elements are rendered and how spacing works in CSS. Every element is considered as a rectangular box, which consists of the following parts:

```
+-------------------------------+
|           Margin              |
|  +-------------------------+  |
|  |        Border           |  |
|  |  +-------------------+  |  |
|  |  |    Padding        |  |  |
|  |  |  +-------------+  |  |  |
|  |  |  |  Content    |  |  |  |
|  |  |  +-------------+  |  |  |
|  |  +-------------------+  |  |
|  +-------------------------+  |
+-------------------------------+
```

- **Content**: The actual content of the box (text, image, etc.)
- **Padding**: Space between the content and the border
- **Border**: Surrounds the padding (if any) and content
- **Margin**: Space outside the border, separating the element from others

**Example CSS:**

```css
.box {
  height: 200px;
  width: 200px;
  padding: 20px;
  border: 5px solid #333;
  margin: 15px;
}
```

| Part    | Description                        | Example CSS               |
| ------- | ---------------------------------- | ------------------------- |
| Content | Actual content (text, image, etc.) | `width: 200px;`           |
| Padding | Space between content and border   | `padding: 20px;`          |
| Border  | Surrounds padding and content      | `border: 5px solid #333;` |
| Margin  | Space outside the border           | `margin: 15px;`           |

> **Tip:** You can use the `box-sizing` property to control how the total width and height of the element are calculated. `box-sizing: border-box;` includes padding and border in the element's total width and height.

**Border :**
Used to set an Element's border

- border-width: 2px;
- border-style: solid/ dotted/ dashed;
- border-color: black;

- **_Border Shorthand :_** border : 2px solid black;
<pre>                        :width style color</pre>

border-radius : 10px; (it change the border corner pointed to rounded using border-radius property)

**_<br> is use to break the line _**

**Padding**
space between border & content

- padding-top
- padding-right
- padding-bottom
- padding-left

padding: 1px 2px 3px 4px;
padding shorthand start from the == top - right - bottom - left; its Clockwise term

>

**Margin**

Space between the two item/box

- margin-top
- margin-right
- margin-bottom
- margin-left

margin: 1px 2px 3px 4px;
margin shorthand start from the == top - right - bottom - left; its Clockwise term

> BOX Model
> Display Property

#### Display Property

The `display` property in CSS controls how an element is rendered and how it interacts with other elements in the document flow. Here are the most common values:

| Value          | Description                                                                                                   | Example Usage               |
| -------------- | ------------------------------------------------------------------------------------------------------------- | --------------------------- |
| `inline`       | Element only takes up as much width as its content. Margin and padding only apply horizontally.               | `<span>`, `<a>`, `<strong>` |
| `block`        | Element takes up the full width available, starting on a new line. Margin and padding apply on all sides.     | `<div>`, `<h1>`, `<p>`      |
| `inline-block` | Behaves like `inline` (does not start on a new line) but allows width, height, margin, and padding to be set. | `<img>`, custom buttons     |
| `none`         | The element is completely removed from the document flow and not displayed at all.                            | Hide elements dynamically   |

**Summary:**

- `inline`: Flows with text, no line break, cannot set width/height. [Takes only the space required by the element. (no Margin/ Padding)]
- `block`: Starts on a new line, stretches to full width, can set width/height. [Takes full space available in width. ]
- `inline-block`: Flows with text, no line break, but can set width/height. [Similar to inline but we can set margin & padding. ]
- `none`: Element is hidden and does not take up any space. [ To remove element from document flow. ]

**Tip :** Use `display` to control layout and visibility of elements for responsive and accessible web design.

**Tip :** If you change a block-level element's `display` property to `inline`, the top and bottom margins will not be applied same for height and width also. To allow top and bottom margins, use `inline-block` instead.

**_Visibility_**

visibility:hidden;

note: When `visibility` is set to none, space from the element is reserved. But from `display` set to none, no space is reserved or blocked for the element.

**Alpha Channel**

Opacity(0 to 1)

- RGBA
- color: rgba(255, 0, 0, 0.5);
- color: rgba(255, 0, 0, 1);

---

#### Units in CSS

Relative Units = %, em, rem;

- **Percentage(%)**
  - it is often used to define a size as relative to an element's parent Object.
    - width: 33%
    - margin-left: 50%;
- **em**
  - Relative to font size of the parent, in the case of typographical properties like `font-size`, and font size of the element itself, in the case of other properties like `width`.
  - **_tips_** = 2 time of parent font size
- **RootEm (rem)**
  - Font size of the root element.
  - Besic/Normal font size.
- **Vh**
  - relative to 1% viewport height
- **vw**
  - relative to 1% viewport width

#### Units in CSS

CSS units define the measurement for properties like width, height, margin, padding, font-size, etc. There are two main types: **absolute** and **relative** units.

| Unit | Type     | Description                                               | Example Usage        |
| ---- | -------- | --------------------------------------------------------- | -------------------- |
| px   | Absolute | Pixels. Fixed size, not responsive.                       | `width: 100px;`      |
| %    | Relative | Percentage of the parent element’s size.                  | `width: 50%;`        |
| em   | Relative | Relative to the font-size of the parent element.          | `font-size: 2em;`    |
| rem  | Relative | Relative to the font-size of the root (`<html>`) element. | `font-size: 1.5rem;` |
| vw   | Relative | 1% of the viewport’s width.                               | `width: 50vw;`       |
| vh   | Relative | 1% of the viewport’s height.                              | `height: 100vh;`     |

**Examples:**

```css
.container {
  width: 80%; /* 80% of parent width */
  font-size: 1.2em; /* 1.2 times the parent font size */
  padding: 2rem; /* 2 times the root font size */
  height: 50vh; /* 50% of viewport height */
}
```

**Tips:**

- Use `rem` for consistent sizing across your site.
- Use `%` for responsive layouts.
- Use `vw` and `vh` for full-screen sections or elements.

---

#### Position

- The position CSS property sets `how an element is positioned` in a document.

  - position : static / relative / absolute / fixed / sticky ;

- `static` - default positon ( the top, right, bottom, left, and z-index properties have no effect )
- `relative` - element is relative to itself. (The top, right, bottom, left, and z-index will work )
- `absolute` - positioned relative to its closest positioned(non-static) ancestor. (removed from the flow )
- `fixed` - positioned relative to browser. ( removed from flow).
- `sticky` - positioned based on user's scroll position.

The `position` property specifies how an element is positioned in the document. It affects the element’s placement and stacking.

| Value    | Description                                                                                  | Example Usage                    |
| -------- | -------------------------------------------------------------------------------------------- | -------------------------------- |
| static   | Default. Element is positioned according to the normal flow of the document.                 | `position: static;`              |
| relative | Element is positioned relative to its normal position. Use `top`, `right`, `bottom`, `left`. | `position: relative; top: 10px;` |
| absolute | Element is positioned absolutely to its nearest positioned ancestor.                         | `position: absolute; left: 0;`   |
| fixed    | Element is positioned relative to the browser window. Stays in place when scrolling.         | `position: fixed; bottom: 0;`    |
| sticky   | Element toggles between relative and fixed, depending on scroll position.                    | `position: sticky; top: 0;`      |

**Examples:**

```css
.box1 {
  position: relative;
  top: 20px;
}

.box2 {
  position: absolute;
  right: 10px;
}

.header {
  position: fixed;
  top: 0;
  width: 100%;
}

.menu {
  position: sticky;
  top: 50px;
}
```

**Summary:**

- `static`: Default, no special positioning.
- `relative`: Moves element relative to its normal spot.
- `absolute`: Removes from flow, positions to ancestor.
- `fixed`: Stays fixed in viewport.
- `sticky`: Scrolls until a threshold, then sticks.

Use these properties to create layouts, overlays, sticky headers, and more!

#### z-index

The `z-index` property in CSS controls the **stacking order** of positioned elements (elements with `position` set to `relative`, `absolute`, `fixed`, or `sticky`). An element with a higher `z-index` will appear in front of an element with a lower `z-index`.
[

- It decides the `stack level` of elements
- Overlapping elements with a larger z-index cover those with a smaller one.
  - z-index : auto(0);
  - z-index : 1 / 2 / ...;
  - z-index : -1 / -2 / ...;
    ]

**Usage:**

```css
.box1 {
  position: absolute;
  z-index: 1;
}

.box2 {
  position: absolute;
  z-index: 2; /* This will appear above .box1 */
}
```

**Key Points:**

- `z-index` only works on positioned elements (not `static`).
- The default value is `auto`.
- Higher values are displayed in front of lower values.
- `z-index` can be negative.

| Value  | Description                                  |
| ------ | -------------------------------------------- |
| auto   | Default. Stacks according to order in HTML.  |
| number | Stacks according to the integer value given. |

**Tip:** Use `z-index` to manage overlapping elements, such as modals, dropdowns, and tooltips.
