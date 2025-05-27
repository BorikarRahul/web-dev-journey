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
