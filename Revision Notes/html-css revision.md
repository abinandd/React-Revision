HTML & CSS: A Complete Revision
HTML (HyperText Markup Language) and CSS (Cascading Style Sheets) are the foundational technologies for building web pages. HTML provides the structure and content, while CSS handles the presentation and styling. They work hand-in-hand to create the visual experiences you see on the web.   

Part 1: HTML - The Structure and Content
HTML is a markup language used to define the structure of content on the web. It uses a system of elements, which are represented by tags, to organize and describe various parts of a web page.

I. Core Concepts
Elements & Tags:

An HTML document is composed of elements.
Most elements consist of an opening tag (e.g., <h1>) and a closing tag (e.g., </h1>).
Some elements are self-closing or void elements (e.g., <br>, <img>, <input>).
Syntax: <tagname>Content</tagname>
Attributes:

Attributes provide additional information about an element.
They are placed within the opening tag.
Syntax: <tagname attribute="value">Content</tagname>
Common Attributes:
id: Unique identifier for an element (important for CSS and JavaScript).
class: Non-unique identifier for applying styles to multiple elements.
src: Specifies the source (URL) for media elements like images and videos.
href: Specifies the URL for hyperlinks.
alt: Provides alternative text for images (for accessibility and when the image fails to load).
style: Used for inline CSS styling (generally discouraged for larger projects).
lang: Specifies the language of the element's content.
Document Structure (Boilerplate):

Every HTML document starts with a basic structure:
HTML

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    </body>
</html>
<!DOCTYPE html>: Declares the document type and version of HTML (HTML5).
<html lang="en">: The root element, lang attribute specifies the document's language.
<head>: Contains meta-information about the HTML document (not displayed on the page).
<meta charset="UTF-8">: Specifies the character encoding.
<meta name="viewport" content="width=device-width, initial-scale=1.0">: Configures the viewport for responsive design.
<title>Page Title</title>: Sets the title displayed in the browser tab.
<link rel="stylesheet" href="style.css">: Links an external CSS file.
<body>: Contains all the visible content of the web page.
II. Common HTML Elements by Category
Headings:

<h1> to <h6>: Used for main headings (<h1>) down to sub-headings (<h6>). Semantic importance decreases with the number.
Paragraphs & Text Formatting:

<p>: Defines a paragraph.
<span>: An inline container for phrasing content, often used for styling a small part of text.
<strong>: Semantic strong importance, typically rendered as bold.
<b>: Bold text, without conveying semantic importance.
<em>: Semantic emphasis, typically rendered as italic.
<i>: Italic text, without conveying semantic importance.
<br>: Line break (self-closing).
<hr>: Horizontal rule (thematic break, self-closing).
<q>: Short inline quotation.
<blockquote>: Block-level quotation.
<cite>: Citation for a title of a work.
<code>: Represents a fragment of computer code.
<pre>: Preformatted text, preserving whitespace and line breaks.
Lists:

<ul>: Unordered list (bullet points).
<li>: List item.
<ol>: Ordered list (numbered).
<li>: List item.
<dl>: Description list.
<dt>: Description term.
<dd>: Description details.
Links (Hyperlinks):

<a>: Anchor element, used to create hyperlinks.
href: Specifies the destination URL.
target="_blank": Opens the link in a new tab.
title: Provides a tooltip when hovering over the link.
Relative paths: For links within the same website (e.g., about.html, /images/logo.png).
Absolute paths: For links to external websites (e.g., https://www.google.com).
Images:

<img>: Embeds an image (self-closing).
src: Path to the image file.
alt: Alternative text for the image (crucial for accessibility).
width, height: Specifies dimensions (best controlled with CSS).
<figure> and <figcaption>: For semantically grouping an image with its caption.
Tables:

<table>: Defines a table.
<thead>: Table header group.
<tbody>: Table body group.
<tfoot>: Table footer group.
<tr>: Table row.
<th>: Table header cell.
<td>: Table data cell.
colspan, rowspan: Attributes to merge cells.
Forms:

<form>: Defines an HTML form for user input.
action: URL to send the form data to.
method: HTTP method (GET or POST).
<input>: Input field (self-closing).
type: (text, password, email, number, checkbox, radio, submit, reset, file, date, etc.).
name: Name of the input field (for form submission).
value: Initial value.
placeholder: Hint text.
required: Makes the field mandatory.
<label>: Associates a text label with a form control (improves accessibility).
for attribute should match the input's id.
<textarea>: Multi-line text input.
<select>: Dropdown list.
<option>: Option within the dropdown.
<button>: Clickable button.
type: (submit, reset, button).
<fieldset> and <legend>: Groups related form controls with a caption.
Semantic HTML5 Elements:

These elements provide meaning to the structure of your page, improving SEO and accessibility.
<header>: Introduces content, typically contains navigation, logos, etc.
<nav>: Navigation links.
<main>: The dominant content of the <body>.
<article>: Independent, self-contained content (e.g., a blog post).
<section>: Generic standalone section of a document, often with a heading.
<aside>: Content related to the main content but separate (e.g., sidebar).
<footer>: Footer for a document or section.
<details> and <summary>: Creates an interactive disclosure widget.
<mark>: Highlighted text.
<time>: Represents a specific period in time.
Divisions & Spans (Non-Semantic):

<div>: A block-level container, used for grouping content for styling or scripting.
<span>: An inline-level container, used for styling a small part of text or inline content.
III. HTML Best Practices & Accessibility
Semantic HTML: Use elements for their intended meaning (e.g., <h1> for main headings, <nav> for navigation). This aids accessibility and SEO.
Accessibility (A11y):
Use alt attributes for images.
Use <label> with for attribute for form controls.
Ensure proper heading structure (<h1> once, then <h2>, <h3>, etc.).
Provide meaningful link text.
Use ARIA attributes when native HTML isn't sufficient (more advanced).
Validation: Use HTML validators (e.g., W3C Markup Validation Service) to ensure your HTML is well-formed and error-free.
Comments: Use `` to add notes to your code.
Part 2: CSS - The Style and Presentation
CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in HTML. CSS separates content from presentation, making web design more efficient and maintainable.   

I. Core Concepts
Syntax:

CSS consists of rule sets.
A rule set contains a selector and one or more declarations.
A declaration includes a property and a value, separated by a colon, and terminated by a semicolon.
Syntax:
CSS

selector {
    property: value;
    property-two: value-two;
}
How to Include CSS:

External Stylesheet (Recommended):
Link a .css file in the <head> of your HTML document.
acumen <link rel="stylesheet" href="path/to/your/style.css">
Benefits: Clean separation, reusability, caching by browser.
Internal Stylesheet:
Place CSS rules within a <style> tag in the <head> of your HTML document.
HTML

  <head>
      <style>
          h1 {
              color: blue;
          }
      </style>
  </head>
Benefits: Useful for small, single-page sites or specific page styles.
Inline Styles:
Apply CSS directly to an HTML element using the style attribute.
acumen <p style="color: red; font-size: 16px;">This is red text.</p>
Benefits: Quick fixes, specific one-off styles.
Drawbacks: Hard to maintain, overrides other styles, mixes content and presentation.
Selectors:

Selectors are used to target specific HTML elements to apply styles to.
Universal Selector: * (selects all elements).
Type (Element) Selector: p, h1, div (selects all elements of that type).
Class Selector: .my-class (selects elements with that class attribute).
ID Selector: #my-id (selects a single element with that unique ID).
Attribute Selector: [type="text"], [href^="https"] (selects elements based on attribute presence or value).
Descendant Selector: div p (selects all <p> elements that are descendants of a <div>).
Child Selector: ul > li (selects <li> elements that are direct children of a <ul>).
Adjacent Sibling Selector: h1 + p (selects the first <p> element immediately following an <h1>).
General Sibling Selector: h1 ~ p (selects all <p> elements that are siblings of an <h1>).
Pseudo-classes: Target elements based on their state or position.
:hover (when mouse hovers over an element)
:active (when element is being clicked)
:focus (when an input element is focused)
:visited, :link (for anchor tags)
:first-child, :last-child, :nth-child(n)
:not()
Pseudo-elements: Style specific parts of an element.
::before, ::after (insert content before/after an element)
::first-line, ::first-letter
::selection
Specificity:

Determines which CSS rule applies when multiple rules target the same element.
Order of Precedence (highest to lowest):
Inline styles
ID selectors
Class selectors, attribute selectors, pseudo-classes
Type (element) selectors, pseudo-elements
Universal selector
More specific selectors override less specific ones.
!important: Overrides all other styles (use sparingly, can lead to maintenance issues).
The Cascade:

CSS rules cascade down, meaning styles are inherited from parent elements to child elements unless explicitly overridden.
Browser default styles, user styles, and author styles all play a role.
II. Key CSS Properties
Box Model:

Every HTML element is a rectangular box.
Content: The actual content (text, image).
Padding: Space between the content and the border.
Border: The line surrounding the padding.
Margin: Space outside the border, separating the element from other elements.
width, height: Set the dimensions of the content area.
padding, padding-top, padding-right, padding-bottom, padding-left
border, border-width, border-style, border-color, border-radius   
margin, margin-top, margin-right, margin-bottom, margin-left
box-sizing: border-box;: Includes padding and border in the element's total width and height, simplifying layout calculations.   
Typography:

font-family: Specifies the font (e.g., Arial, sans-serif).
font-size: Text size (e.g., 16px, 1.2em, 1rem).
font-weight: Boldness of text (e.g., normal, bold, 400, 700).
font-style: Italic, normal.
color: Text color.
line-height: Spacing between lines of text.
text-align: left, right, center, justify.
text-decoration: none, underline, overline, line-through.
text-transform: uppercase, lowercase, capitalize.
letter-spacing: Spacing between characters.
word-spacing: Spacing between words.
Colors & Backgrounds:

color: For text.
background-color: Background color of an element.
background-image: Sets a background image.
background-repeat: no-repeat, repeat-x, repeat-y.
background-position: center, top left, 50% 50%.
background-size: cover, contain, specific dimensions.
background: Shorthand property for all background properties.
Color Formats:
Named colors: red, blue
Hexadecimal: #RRGGBB (e.g., #FF0000 for red)
RGB: rgb(R, G, B) (e.g., rgb(255, 0, 0))
RGBA: rgba(R, G, B, A) (A for alpha/transparency, 0-1)
HSL, HSLA (Hue, Saturation, Lightness, Alpha)
Display Property:

Controls how an element is rendered on the page.
block: Takes up the full width available, starts on a new line (e.g., div, p, h1).
inline: Takes up only the width it needs, does not start on a new line (e.g., span, a, img).
inline-block: Behaves like inline but allows setting width and height (useful for navigation items).
none: Hides the element completely (does not take up space).
flex: Enables Flexbox layout.
grid: Enables CSS Grid layout.
Positioning:

position: Controls the positioning scheme of an element.
static: Default position (elements flow normally).
relative: Positioned relative to its normal position. Can use top, bottom, left, right to offset it.
absolute: Positioned relative to its nearest positioned ancestor (non-static). Removed from the normal flow.
fixed: Positioned relative to the viewport (stays in place when scrolling).
sticky: Behaves like relative until a certain scroll point, then becomes fixed.
z-index: Controls the stacking order of elements (only works on positioned elements).
Layout (Flexbox & Grid):

Flexbox (One-dimensional layout):

Ideal for aligning items in a single row or column.
Flex Container Properties (applied to the parent):
display: flex;
flex-direction: row, column, row-reverse, column-reverse.
justify-content: How items are distributed along the main axis (flex-start, flex-end, center, space-between, space-around, space-evenly).
align-items: How items are distributed along the cross axis (flex-start, flex-end, center, stretch, baseline).
flex-wrap: nowrap, wrap, wrap-reverse.
gap: Space between flex items.
Flex Item Properties (applied to children):
flex-grow: Ability to grow if necessary.
flex-shrink: Ability to shrink if necessary.
flex-basis: Default size before remaining space is distributed.
flex: Shorthand for flex-grow, flex-shrink, flex-basis.
order: Controls the visual order of flex items.
align-self: Overrides align-items for individual flex items.
CSS Grid (Two-dimensional layout):

Ideal for complex, grid-based layouts with rows and columns.
Grid Container Properties (applied to the parent):
display: grid;
grid-template-columns: Defines column sizes (e.g., 1fr 1fr 1fr, 200px auto, repeat(3, 1fr)).
grid-template-rows: Defines row sizes.
grid-gap, grid-row-gap, grid-column-gap: Spacing between grid cells.
justify-items, align-items, place-items: Alignment of content within grid cells.
justify-content, align-content, place-content: Alignment of the entire grid within the container.
Grid Item Properties (applied to children):
grid-column-start, grid-column-end, grid-row-start, grid-row-end: Place items in specific grid lines.
grid-column, grid-row: Shorthand for start/end lines.
grid-area: Assigns a name to a grid item, then references it in grid-template-areas.
Transitions & Animations:

Transitions: Smooth changes between two states.
transition-property: Which property to transition (e.g., color, background-color, all).
transition-duration: How long the transition takes (e.g., 0.3s).
transition-timing-function: Speed curve (e.g., ease-in, linear, ease-out).
transition-delay: When the transition starts.
transition: Shorthand.
Animations: More complex, multi-state changes using @keyframes.
@keyframes myAnimation { from { ... } to { ... } } or { 0% { ... } 50% { ... } 100% { ... } }
animation-name: Name of the @keyframes rule.
animation-duration: How long one cycle takes.
animation-timing-function: Speed curve.
animation-delay: When the animation starts.
animation-iteration-count: infinite or a number.
animation-direction: normal, reverse, alternate.
animation-fill-mode: forwards, backwards, both.
Transformations:

transform: Applies 2D or 3D transformations.
translate(x, y): Move an element.
rotate(angle): Rotate an element.
scale(x, y): Scale an element.
skew(x-angle, y-angle): Skew an element.
Responsive Design (Media Queries):

Allows you to apply different styles based on screen size, device orientation, etc.
Syntax:
CSS

@media screen and (max-width: 768px) {
    /* Styles for screens up to 768px wide */
    body {
        font-size: 14px;
    }
    .container {
        flex-direction: column;
    }
}
@media print {
    /* Styles for printing */
    body {
        background-color: white;
    }
}
Common breakpoints: max-width, min-width.
Mobile-First Approach: Design for small screens first, then progressively enhance for larger screens.
III. CSS Best Practices & Advanced Concepts
Organization:
External Stylesheets: Always prefer external stylesheets for maintainability.
Modular CSS: Break down your CSS into smaller, manageable files or sections (e.g., using Sass/Less or CSS-in-JS).
Naming Conventions: BEM (Block Element Modifier), SMACSS, OOCSS help with consistency and scalability.
Performance:
Minify CSS: Remove unnecessary characters (whitespace, comments) for smaller file sizes.
Optimize Images: Compress images to reduce load times.
Reduce HTTP Requests: Combine CSS files where appropriate.
Avoid @import: Use <link> for better performance.
Browser Compatibility:
Vendor Prefixes: (e.g., -webkit-, -moz-, -ms-) for newer CSS features. Autoprefixer tools can automate this.
Can I use...: Check browser support for CSS properties on caniuse.com.
Variables (Custom Properties):
Define reusable values (colors, font sizes) with --variable-name: value;.
Use with var(--variable-name).
CSS

  :root {
      --primary-color: #007bff;
      --font-size-base: 16px;
  }
  body {
      color: var(--primary-color);
      font-size: var(--font-size-base);
  }
Sass/Less (CSS Preprocessors):
Extend CSS with features like variables, nesting, mixins, functions, and partials.
Require compilation to plain CSS.
CSS Frameworks:
Bootstrap, Tailwind CSS, Bulma, Foundation provide pre-built components and utility classes for faster development.
CSS Reset/Normalize:
CSS Reset: Strips all default browser styles.
CSS Normalize: Makes browser default styles consistent across browsers.
