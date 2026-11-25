# 04 — Typography

Primary sources: https://m3.material.io/styles/typography/overview · https://m3.material.io/styles/typography/fonts · https://m3.material.io/styles/typography/type-scale-tokens · https://m3.material.io/styles/typography/applying-type · https://m3.material.io/styles/typography/editorial-treatments
Token values: [tokens/system-typography.md](tokens/system-typography.md). Accessed 2026-10-09.

## Essentials
- "M3 type scale has 30 type styles: 15 baseline and 15 emphasized." "Material 3 has one type scale containing two sets of type styles… Both of these style sets follow the same scale from Display Large to Label Small. The emphasized styles were added in the expressive update." Emphasized styles "have a higher weight and other minor adjustments… best applied to bold, selection, and other areas of emphasis. Baseline and emphasized styles are meant to be used together." (type-scale-tokens)
- "No single product will use all the styles. Instead, select styles from the scale that are most appropriate."
- Five roles × three sizes (applying-type): **Display** ("reserved for short, important text or numerals. They work best on large screens"), **Headline** ("short, high-emphasis text on smaller screens"), **Title** ("medium-emphasis text that remains relatively short"; use caution with expressive fonts), **Body** ("longer passages"; "Avoid expressive or decorative fonts for body text"), **Label** ("smaller, utilitarian styles… Buttons, for example, use the label large style").
- Fonts (fonts): "Static fonts like Roboto are currently applied by default to all Material 3 components. Variable fonts like Roboto Flex… aren't yet part of the M3 typescale." Fallback order for Roboto Flex: Roboto Flex → Roboto → Noto Sans collection. Roboto Mono for code/aligned numbers.
- Editorial treatments (editorial-treatments) are "standalone, showcase moments driven by type"; best practices: keep similar editorial moments consistent (create tokens), match emotional tone, "Not mixing multiple or clashing styles in the same layout", "Not mimicking personalization theming"; "editorial treatments shouldn't be used in labels or just to give information." Cautions on very light weights for body text and excessive weight at small sizes.

### Baseline type scale (token data; default font Roboto in static-font context; units as stored = pt, shown on site as sp/pt)
| Style | Size | Line height | Weight | Tracking |
|---|---|---|---|---|
| Display large | 57 | 64 | 400 | -0.25 |
| Display medium | 45 | 52 | 400 | 0 |
| Display small | 36 | 44 | 400 | 0 |
| Headline large | 32 | 40 | 400 | 0 |
| Headline medium | 28 | 36 | 400 | 0 |
| Headline small | 24 | 32 | 400 | 0 |
| Title large | 22 | 28 | 400 | 0 |
| Title medium | 16 | 24 | 500 | 0.15 |
| Title small | 14 | 20 | 500 | 0.1 |
| Body large | 16 | 24 | 400 | 0.5 |
| Body medium | 14 | 20 | 400 | 0.25 |
| Body small | 12 | 16 | 400 | 0.4 |
| Label large | 14 | 20 | 500 | 0.1 |
| Label medium | 12 | 16 | 500 | 0.5 |
| Label small | 11 | 16 | 500 | 0.5 |

Emphasized styles keep the same sizes with heavier weights (e.g. emphasized display-large weight 500, emphasized body-large 500, emphasized label-large 700) — see tokens/system-typography.md for every value, plus the variable-font sets (`md.sys.typescale.variable*`).


---

## Source pages in scope

| Page | URL | Site content timestamp | Do | Don't | Caution |
|---|---|---|---|---|---|
| Typography — Overview | https://m3.material.io/styles/typography/overview | 2026-08-28T15:09:40.768Z | 0 | 0 | 0 |
| Typography — Fonts | https://m3.material.io/styles/typography/fonts | 2026-08-28T15:09:40.768Z | 0 | 0 | 0 |
| Typography — Type scale & tokens | https://m3.material.io/styles/typography/type-scale-tokens | 2026-08-28T15:09:40.768Z | 0 | 0 | 0 |
| Typography — Applying type | https://m3.material.io/styles/typography/applying-type | 2026-08-28T15:09:40.768Z | 2 | 0 | 0 |
| Typography — Editorial treatments | https://m3.material.io/styles/typography/editorial-treatments | 2026-08-28T15:09:40.768Z | 3 | 2 | 3 |

## Verbatim rule index (every Do / Don't / Caution caption on the pages above)


**Typography — Applying type** — https://m3.material.io/styles/typography/applying-type

- **[DO]** (fig) Use line-height, padding, and container measurements for setting typography on the web and iOS
- **[DO]** (fig) Android screens rely on distance to baselines for spacing

**Typography — Editorial treatments** — https://m3.material.io/styles/typography/editorial-treatments

- **[DO]** (fig) Create tokens for editorial treatments to apply them consistently in your product
- **[CAUTION]** (fig) Use caution when mixing different editorial treatments in the same layout. Try to keep them consistent.
- **[CAUTION]** (fig) Be careful when using very light weight for body text. Lower-resolution displays can struggle to show thin typography, especially at small sizes. Instead, consider lighter weights at larger font sizes, such as display type.
- **[CAUTION]** (fig) Excessive weight at smaller sizes can make text harder to read
- **[DO]** (fig) A thinner width can allow for more characters to fit at small sizes, such as in a label
- **[DON'T]** (fig) Since wider styles take up more space, avoid using them for areas with limited space, such as in a top app bar
- **[DO]** (fig) Use an optical size that matches your type size
- **[DON'T]** (fig) Don’t use large optical type sizes at small sizes. Instead use a smaller optical size, if available.

## Appendix — verbatim page text (digest: text, tables and figure captions; image-only content represented by captions)

### Typography — Overview

Source: https://m3.material.io/styles/typography/overview


- M3 type scale has 30 type styles: 15 baseline and 15 emphasized
- Use variable fonts for more control over expression in editorial treatments
- Use Material tokens to easily define font, line height, size, tracking, weight, and more

#### Availability & resources

This shows where the type scale is available and implemented into Material components.

| Type | Link | Status |
| --- | --- | --- |
| Design | [Design Kit](https://goo.gle/m3-design-kit) | Available |
| [Google Fonts](https://fonts.google.com/) | Available |
| Implementation | [Flutter](https://api.flutter.dev/flutter/material/Typography/Typography.material2021.html) | Available |
| [Jetpack Compose](https://developer.android.com/develop/ui/compose/designsystems/material3#typography) | Available |
| [Jetpack Compose: Expressive](https://developer.android.com/reference/kotlin/androidx/compose/material3/Typography) | Available |
| [Android Views (MDC-Android)](https://github.com/material-components/material-components-android/blob/master/docs/theming/Typography.md) | Available |
| [Android Views (MDC-Android): Expressive](https://github.com/material-components/material-components-android/blob/master/docs/theming/Typography.md) | Available |
| [Web](https://github.com/material-components/material-web/blob/main/docs/theming/typography.md) | Available |
| Web: Expressive | Unavailable |

#### Updates

**Aug 2026**

##### Language script height support

Material’s type scale can adapt line height automatically based on language script height category: small, medium, large, and extra large.

Components can then adapt their size based on these language heights.

[More on language height](https://m3.material.io/styles/typography/type-scale-tokens#fcae9063-6c70-4512-87f9-3b6e0d8aea04)

(fig) Line heights for styles like display large can automatically adapt to language height

#### M3 Expressive update

**May 2025**

##### Updated M3 type scale with emphasized styles

Material’s type scale includes fifteen **baseline** type styles, the same as before, and fifteen new **emphasized** type styles.

The emphasized type styles add more expression to highlighted moments.

Roboto Flex can be used on its own to show a range of emotional states, but is not yet part of the M3 typescale.

[More on how to use emphasized styles](https://m3.material.io/styles/typography/type-scale-tokens#0020d4d9-4f5b-4666-b3ce-c26db849bd73)

[More on M3 Expressive](https://m3.material.io/blog/building-with-m3-expressive)

(fig) The expressive type scale includes fifteen baseline type styles and fifteen emphasized type styles

##### Emphasized type style tokens

Design tokens offer an improved way to define typography in products by assigning an element's type style by a configurable value, rather than a set value.

Emphasized tokens allow for clearer hierarchies and prioritized components within a layout.

Type roles describe size—such as small, medium, and large—enabling them to adapt and respond to the device or context.

(fig) Typography tokens describe scalable size that adapts to devices or settings, including updating the style on boldness

##### Google Design: Making Google Sans Flex

Learn how seven design problems shaped Google’s iconic typeface — from inception to going open-source.  
  
[Read the article on design.google](https://design.google/library/google-sans-flex-font)

(fig) Google Sans Flex can morph into an impressive range of styles, powered by its six variable axes

#### Previous updates

##### Variable fonts

**Roboto Flex, Roboto Serif, & Roboto Mono**

Updated considerations for using variable fonts and different combinations of their customizable axes, including grade, width, weight, slant, and optical size.

(fig) Roboto Flex, Roboto Serif, and Roboto Mono have a fluid range of axes, like weight, across all optical sizes

##### Style roles

Type styles are defined by five roles: display, headline, title, body, and label.

These names are more descriptive, allowing for easier matching of type style to use case.

(fig) M3 has five distinct type styles: display, headline, title, body, and label

### Typography — Fonts

Source: https://m3.material.io/styles/typography/fonts


Static fonts like [Roboto](https://fonts.google.com/specimen/Roboto) are currently applied by default to all Material 3 components. [Variable fonts](https://fonts.google.com/knowledge/introducing_type/introducing_variable_fonts) like [Roboto Flex](https://fonts.google.com/specimen/Roboto+Flex) have many more axes for expression, but aren't yet part of the M3 typescale.

#### Default typefaces

##### Roboto

[Roboto](https://fonts.google.com/specimen/Roboto) is the default typeface for Android, and is used in the [M3 typescale](https://m3.material.io/styles/typography/type-scale-tokens#6a9f9f26-99bb-4185-82fc-a49725da0d01).

Roboto includes over 3,300 glyphs for representing hundreds of languages around the world.

(fig) Roboto is the default typeface in Android and Material 3

##### Roboto Flex

[Roboto Flex](https://fonts.google.com/specimen/Roboto+Flex) is a variable font which adds more flexibility to typography. It has an extended range of weights, widths, and additional customizable attributes (like size-specific designs), and includes over 900 glyphs with support for Latin, Greek, and Cyrillic.

[Roboto Flex is available](https://fonts.google.com/specimen/Roboto+Flex) as a standalone font.

(fig) Roboto Flex includes the styles of Roboto plus many more weights and widths optimized for larger and smaller sizes

##### Roboto Serif

[Roboto Serif](https://fonts.google.com/specimen/Roboto+Serif) is another variable font family, designed to create a comfortable reading experience. Minimal and highly functional, it can be used anywhere (even in app interfaces) due to its extensive set of weights and widths across a broad range of sizes.

(fig) Roboto Serif offers a functional set of weights and widths

##### Roboto Mono

[Roboto Mono](https://fonts.google.com/specimen/Roboto+Mono?query=roboto) is a monospaced version of the classic Roboto design. Being monospaced means each letter has equal space, and letterforms are adjusted to properly fill the space.

Monospaced fonts are easier to scan vertically, so are particularly useful for code and keeping numbers aligned. [Learn more about monospaced numbers](https://m3.material.io/styles/typography/applying-type#f0f79df7-3174-4012-871e-93ce9a89d08b)

(fig) Equal sizing for each character keeps uniformity of spacing

##### Noto Sans

[Noto Sans](https://fonts.google.com/noto/specimen/Noto+Sans) is a global font collection for all modern and ancient languages.

Each Noto Sans family is compatible with Roboto and Noto Sans supports more than 150 scripts and thousands of languages. It is used as a “fallback” font, when a language is unsupported.

[Learn more about typography language considerations](https://m2.material.io/design/typography/language-support.html#language-considerations)

(fig) Several Noto Sans fonts for different writing systems

| Variable font | Available axes |
| --- | --- |
| Roboto Flex | Slant, Width, Weight, Grade, Optical Size.  **Advanced axes****:**Thick stroke (XOPQ), thin stroke (YOPQ), counter width (XTRA), uppercase height (YTUC), lowercase height (YTLC), ascender height (YTAS), descender depth (YTDE), figure height (YTFI) |
| Roboto Mono | Weight, Italic |
| Noto Sans | Width, Weight, Italic |

#### Fallback protection with variable fonts

Font fallback is when a similar font is used as a replacement when the current font doesn't support the text's characters.

For example, products using the variable font Roboto Flex should apply font fallback in the following order:

1. Roboto Flex
2. Roboto
3. Noto Sans font collection

This ensures that text will have a consistent visual style regardless of font support. Designers should connect with their product and engineering partners to confirm that font fallback is available.

(fig) Font branding is preserved when moving from Roboto Flex to Roboto to Noto Sans Japanese

### Typography — Type scale & tokens

Source: https://m3.material.io/styles/typography/type-scale-tokens


#### Type scale

A **type scale** is a selection of type styles used across a product to ensure consistency.

##### M3 type scale

Material 3 has one **type scale** containing two sets of **type styles: 15 baseline** and **15 emphasized**. Both of these style sets follow the same scale from Display Large to Label Small.

The **emphasized** styles were added in the expressive update. They have a higher weight and other minor adjustments compared to the baseline styles, and are best applied to bold, selection, and other areas of emphasis. Baseline and emphasized styles are meant to be used together.

(fig) The scale is a range of contrasting styles that support the needs of various product contexts and content. No single product will use all the styles. Instead, select styles from the scale that are most appropriate.

#### Type scale tokens

Each of the 30 styles has a single token that captures all the default properties. Tokens are separated into the **baseline** and **emphasized** sets. Each axis and property, such as font, line height, size, tracking, and weight, also has an individual token for greater customization. [Learn more about design tokens](https://m3.material.io/foundations/design-tokens/overview)

##### Baseline type style tokens

_[Interactive TYPOGRAPHY module: resource `designSystems/20543ce18892f7d9`; token sets: Type scale. Resolved values are in the tokens/ folder of this guide.]_

#### Emphasized type styles

The M3 type scale has 15 emphasized type styles. Use both baseline and emphasized type styles together to achieve expressive experiences. Material recommends using emphasized styles for selection, actions, headlines, and other [editorial treatments](https://m3.material.io/styles/typography/editorial-treatments#19e5796e-9db8-4687-b20c-c6cee77e7df8).

##### Emphasized type style tokens

_[Interactive TYPOGRAPHY module: resource `designSystems/20543ce18892f7d9`; token sets: Type scale - Emphasized . Resolved values are in the tokens/ folder of this guide.]_

#### Where emphasized styles can be used

##### Components

When used in components, emphasized type styles can communicate hierarchy or importance, such as an active or selected component, or an unread message. The emphasized styles work well with:

- Badges
- Buttons (for primary actions)
- Extended FAB
- Selected list items
- Selected menu items

Material components don’t use emphasized type styles by default. To use an emphasized type style, swap the baseline token for the emphasized token of the same style. For example:

- Baseline: md.sys.typescale.display-large
- Emphasized: md.sys.typescale.**emphasized**.display-large

##### Weight

Use the emphasized styles on text that already uses weight (such as medium, bold) to communicate hierarchy.

##### Context

Use emphasized styles to draw attention to specifics aspects of components, such as selected states, unread messages, or key interactions.

Emphasized context and weight can be used at the same time.

(fig) 1. Weight: Apply emphasized styles to text already bolded for an expressive style
2. Context: Apply emphasized styles to text in selective places to better communicate hierarchy or state

#### Customize the typeface

The M3 type scale has the option to set different typefaces at different sizes.

- The **brand** typeface is used for larger type styles, like Headline and Display, to focus on expression.
- The **plain** typeface is used for smaller type styles, like Body and Label, to focus on readability.
- Roboto is the default for both typefaces.

Consider replacing Roboto with different typefaces to boost brand expression in your product. On emphasized styles, this can help important text stand out even more.

(fig) Roboto can be replaced with another font, like Roboto Flex

##### Brand and plain typeface tokens

_[Interactive TYPOGRAPHY module: resource `designSystems/20543ce18892f7d9`; token sets: Fonts & weights. Resolved values are in the tokens/ folder of this guide.]_

#### Language height support

The type scale can adapt line height automatically based on language height category: small, medium, large, and extra large.

Development considerations:

- It’s recommended to default to **medium language height**, as most languages fall in that category, and switch to other sizes based on detected language.
- Material components that use **vertical padding** should adapt to language height automatically. Components with fixed heights are built for **small** values and may not adapt by default.
- Ignoring language height can lead to overlapping text and broken UI elements, leading to major internationalization issues and failing readability standards.

(fig) Line heights for styles like **display large** can automatically adapt to language height category

##### Language script categories

- **Small (base)**: Cyrillic, Greek, Hebrew, Latin-based languages (except Vietnamese)
- **Medium (~7% taller)**: Amharic, Arabic, Armenian, Bangla, Chinese, Gujarati, Hindi, Japanese, Kannada, Khmer, Korean, Lao, Malayalam, Odia, Punjabi, Sinhala, Tamil, Thai, Vietnamese, most other languages.
- **Large (~30% taller)**: Burmese, Telugu
- **Extra large (~100% taller)**: Nastaliq

##### Language height tokens

To view the language height tokens:

- Open the line height folder (Note: Other tokens like fonts and weights are in the same token set)
- Change the language height context at the top of the token module

_[Interactive TYPOGRAPHY module: resource `designSystems/20543ce18892f7d9`; token sets: Fonts & weights. Resolved values are in the tokens/ folder of this guide.]_

#### Customizing type styles

To customize existing type styles, follow these steps:

1. If using a different typeface, change the **brand** and **plain** typeface tokens.
2. Adjust properties like line height and letter spacing to refine the appearance. Avoid changing the type size; this can affect how components render and reflow.
3. Repeat for both baseline and emphasized type styles. Try to keep emphasized styles visually consistent, like all wider than baseline.

Heavier fonts may require wider letter spacing, while fonts with long ascenders and descenders will require different line heights. Axes can be further adjusted as necessary.

**Note:** Customizing the M3 type scale or individual styles may prevent you from receiving typography token updates from Material.

(fig) Adjust variable axes, like weight and width, to customize fonts like Roboto Flex

Different typefaces can be used for baseline and emphasized type styles.

(fig) Custom typefaces can be used together, like Baskervville and Jacquard

#### Customizing your type scale

When different sizes from the defaults are needed, such as for different devices, you can customize the **type scale** by adding or removing styles, and even swapping out Roboto for a font of your choice.

Material Design uses the [Major Second](https://cieden.com/book/sub-atomic/typography/different-type-scale-types#:~:text=with%2520dense%2520content.-,Major%2520Second%2520(1.125),-The%2520Major%2520Second) type scale with 14 as its key base size. This anchors to the most essential style used most often for typesetting body text.

(fig) The Material Design type scale uses the Major Second scale (1.125)

Sizes on the rendered type scale should aim to provide impactful contrast between sizes by avoiding small differences.

(fig) Material’s default typescale of 15 styles allows distinction between each

(fig) Your product likely will not need all 15 default styles from the Material Design type scale. In this example, five sizes are chosen for a reduced set while the rest are removed.

(fig) If the default sizes from the Material Design type scale do not meet your needs, values can be changed instead. Here the default size of display medium is adjusted to another size from the Major Second type scale.

##### Font size units

The following units are used to express font size on Android and the web.

| Platform | Android | Web |
| --- | --- | --- |
| Font size unit | sp | rem |
| Conversion ratio | 1.0 | 0.0625 |

Web browsers calculate the REM (the root em size) based on the root element size. The default for modern web browsers is 16px, so the conversion is SP\_SIZE/16 = rem.

###### Example conversions

| Android | Web |
| --- | --- |
| 10sp | 0.625rem |
| 12sp | 0.75rem |
| 24sp | 1.5rem |
| 60sp | 3.75rem |

##### Letter spacing units

The following units are for spacing letters in a UI.

| Platform | Android | Web |
| --- | --- | --- |
| Letter spacing unit | em | rem |
| Conversion ratio | (Tracking value in px / font size in sp) = letter spacing | (Tracking value in px / font size in sp) = letter spacing |

###### Letter spacing examples

| Android | Web |
| --- | --- |
| (.2 tracking / 16sp font size) = 0.0125 em | (.2 tracking / 16px font size) = 0.0125 rem |

### Typography — Applying type

Source: https://m3.material.io/styles/typography/applying-type


#### Applying type

The Material 3 type scale organizes styles into five roles that are named to describe their purposes: display, headline, title, label, body. Each role has three sizes: large, medium, and small. These roles and sizes create clear page hierarchy and work across many devices.

#### Roles

##### Display

There are three display styles in the default type scale: Large, medium, and small. As the largest text on the screen, display styles are reserved for short, important text or numerals. They work best on large screens.

For display type, consider choosing a more expressive font, such as a handwritten or script style.

If available, set the appropriate optical size to your usage.

(fig) An expressive typeface can be used for display styles, as shown here with Bagel Fat One

(fig) A card using a display size

(fig) An expressive typeface can entice readers to engage with an eye-catching design, as shown here with Anton

##### Headline

Headlines are best-suited for short, high-emphasis text on smaller screens. These styles can be good for marking primary passages of text or important regions of content.

Headlines can also make use of expressive typefaces, provided that appropriate line height and letter spacing is also integrated to maintain readability.

(fig) Expressive typefaces can be used for headlines styles as well, as shown here with Anton

(fig) Headline style used for short text on a small screen

(fig) Dialog using a headline style

##### Title

Titles are smaller than headline styles, and should be used for medium-emphasis text that remains relatively short. For example, consider using title styles to divide secondary passages of text or secondary regions of content.

For titles, use caution when using expressive fonts, including display, handwritten, and script styles.

(fig) A news article title using the title style to capture attention, as shown here with Bebas Neue

(fig) App bar using title style

(fig) Example of title style applied to a category header: Top News

##### Body

Body styles are used for longer passages of text in your app.

Use typefaces intended for body styles, which are readable at smaller sizes and can be comfortably read in longer passages.

Avoid expressive or decorative fonts for body text because these can be harder to read at small sizes.

(fig) Body styles must be readable for long passages

(fig) Body style used throughout an article about pesto

(fig) Example of body style used throughout a setup flow

##### Label

Label styles are smaller, utilitarian styles, used for things like the text inside components or for very small text in the content body, such as captions.

Buttons, for example, use the label large style.

(fig) Label styles should enable quick reading at small sizes, such as in buttons

(fig) A music player using label style for the timecode

(fig) A navigation bar using label style for the destination text

#### Typesetting

Vertical typesetting relies on padding, bounding boxes, and baselines to ensure text legibility at any size.

Take engineering considerations and the conventions of your platform into account when making decisions for typesetting, text resizing, density, and using text in adaptive layouts.

##### Using padding and bounding boxes

Use this method for web products, and iOS products, where applicable. Note that some design tools also use bounding boxes for typesetting, but their methods vary and will need to be reconciled with the engineering implementation.

In web UIs, the line height and bounding box height are the same. Text is vertically centered within the bounding box, following the “[half-leading](https://www.w3.org/TR/css-inline-3/#leading-trim)” behavior established by CSS.

The vertical position of the text isn’t controlled directly, but through the combination of the bounding box and font metrics.

(fig) The bounding box height is defined by the line height specified, with equal space placed above and below the text

Padding is the space between UI elements, such as between an image and a bounding box, or between the inner edge of the bounding box and the text.

(fig) The padding surrounding the text bounding box

Specify the distance of UI elements from fixed reference points, such as the container edge. For the web, automate this calculation using Sass or CSS.

**[DO]** (fig) Use line-height, padding, and container measurements for setting typography on the web and iOS

Vertical alignment using padding and bounding boxes:

1. **Line height**   
   Measure the height of the bounding box.
2. **Centering**   
   Ensure equal top and bottom padding around the inner edge of the bounding box by using center align
3. **Spacing**   
   Use the height of the bounding box, and top and bottom padding to determine spacing

##### Using the baseline

Use this method for Android products or platform-agnostic specs.

The baseline is the invisible line upon which a line of text rests. In Material Design, the baseline is an important specification in measuring the vertical distance between text and an element.

(fig) A line of text rests on the invisible baseline

For Android, specifying distances relative to baseline enables accurate implementation.

The baseline can also be used to communicate text position between designers in a way that's agnostic to the platform or design tool.

**[DO]** (fig) Android screens rely on distance to baselines for spacing

Vertical alignment using the baseline:

1. **Line height**  
   Measure distance from the text baseline of one line to the text baseline of the next line
2. **Centering**   
   Specify center alignment as a reference instead of measuring the distance to the text baseline
3. **Spacing**   
   Use the distance from a reference point to the text baseline

#### Ensuring readability

**Line height**

Line height is the space between each line of text and is directly connected to type size.

Material’s type tokens are optimized for intended size and use.

(fig) For larger type legibility using styles like title, headline, and display, we recommend a line height ratio of 1.2 times the type size

(fig) For smaller body copy using styles like body and label, we recommend a line height ratio around 1.5 times the type size. If your line height is too tight, you’ll undermine the flow of the text. Too loose, and the lines won’t feel cohesive.

**Tabular numbers**

Use tabular figures (also known as monospaced numbers) rather than proportional digits in tables or places where values may change often, such as clocks.

Use monospaced tabular numbers to keep values optically aligned for better scanning.

(fig) 1. Proportional numbers
2. Monospaced tabular numbers

(fig) Use tabular numbers to prevent layout shifting when values change, such as in a clock UI

#### Using Material Symbols with typography

Properly aligning typography with Material Symbols can improve cohesion and unity in your product. [Learn more about matching icons and text](https://m3.material.io/styles/icons/applying-icons#f9db4adc-ca78-473f-85eb-a351b73c39ac)

#### Accessibility

##### Color & contrast

Support visual accessibility by choosing the appropriate **color contrast** between your product’s text and background. Contrast is the perceived difference between the lightness or darkness of two colors, and is quantified by a **contrast ratio**.

(fig) Label styles should enable quick reading at small sizes, such as in buttons

Text should achieve sufficient contrast between its color and that of its background.

Material aims for two main text contrast levels:

- 3:1 for large text
- 4.5:1 for small text

[Learn more about contrast ratios](https://m3.material.io/foundations/designing/color-contrast#b248ecd2-9abd-4877-8f5e-ebfbb87e2048)

(fig) Large text should achieve a contrast ratio of 3:1

(fig) Small text should achieve a contrast ratio of 4.5:1

The default color for typography is **on surface**, although **on surface variant** is a strong alternative.

(fig) Default typography colors

For hyperlinked text appearing on top of a surface color, use primary. However, tertiary can be used to make links less prominent.

Hyperlinked text must also be underlined.

(fig) Hyperlinks should be underlined and use primary or tertiary color

### Typography — Editorial treatments

Source: https://m3.material.io/styles/typography/editorial-treatments


#### Editorial treatments

Editorial treatments are standalone, showcase moments driven by type. They involve dynamic, attention-grabbing use of custom sizes, which can involve larger display type or a blockier look and feel. They should depart from purely functional layouts or basic stages in a user flow.

In the expressive system, editorial treatments can be combined with elements such as motion, shape, or color, to create product-wide hero moments.

(fig) In editorial treatments, type can freely dominate the screen

#### Examples of editorial treatments

Use editorial treatments in three key ways: to celebrate content, to highlight the voice of the user, or to draw attention to bespoke functionality within the product.

##### Celebrating content

Editorial treatments can dramatically take over the screen to mark a particular user action, memory, or preference.

Try matching the text to the tone of the product or a strong emotion, like a narrow, thin style for serenity, or a bolder, italicized style for liveliness.

(fig) Use an exuberant cover image for a photo album, here shown with Roboto Flex

##### Voice of the user

Express the voice of the user by letting them personalize the appearance of typography or by adjusting text based on their input.

Use customization selectively to frame a user’s mood and make it stand out.

(fig) A response with the right type treatment can convey ecstatic emotion. Here, the text is shown in Roboto Flex and PT Serif Caption.

##### Bespoke functionality

Editorial treatments can also be used to help express moments of unique functionality within the product experience.

(fig) The increase in the bedroom light brightness prompts an algorithmic response in the width and weight axes

#### Editorial treatment best practices

As there is intentionally much room for choice in developing editorial treatments, there are a few guard rails that will prevent inconsistency, illegibility, or distracting design.

These best practices include:

- Ensuring consistency between similar-looking editorial moments, creating tokens for each where needed
- Matching the emotional tone of text to the task at hand
- Not mixing multiple or clashing styles in the same layout
- Not mimicking personalization theming

**[DO]** (fig) Create tokens for editorial treatments to apply them consistently in your product

**[CAUTION]** (fig) Use caution when mixing different editorial treatments in the same layout. Try to keep them consistent.

#### Use variable axes to make editorial treatments

Adjust variable font axes like weight, grade, width, and optical size to match the font to the feeling. Baseline and emphasized type styles can still be used. Though, editorial treatments shouldn’t be used in labels or just to give information.

##### Weight

Weight is the primary attribute that defines the overall thickness of a typeface’s strokes in any given font. The most common weights are regular and bold, but weights can cover extremes from the very light to the very heavy.

If the typeface is variable, it provides a full, continuous range of stroke thicknesses, making the number of weights effectively unlimited.

[Learn more about weight on Google Fonts](https://fonts.google.com/knowledge/choosing_type/exploring_typefaces_with_multiple_weights_or_grades)

(fig) A variable font, Roboto Flex offers a fluid range of weights

**[CAUTION]** (fig) Be careful when using very light weight for body text. Lower-resolution displays can struggle to show thin typography, especially at small sizes. Instead, consider lighter weights at larger font sizes, such as display type.

**[CAUTION]** (fig) Excessive weight at smaller sizes can make text harder to read

##### Grade

Grade is a secondary modifier of a typeface’s optical weight, independent of the weight axis. Both weight and grade axes affect a letter’s thickness, but adjustments with grade are much more granular and don’t change any letter widths or line breaks.

[Learn more about grade on Google Fonts](https://fonts.google.com/knowledge/choosing_type/exploring_typefaces_with_multiple_weights_or_grades)

(fig) Roboto Flex offers a positive grade of 150 and a negative grade of 200

(fig) When switching between dark and light mode, the same text may appear heavier despite having the same settings. Consider using a negative grade to counteract this.

(fig) Grade can change the emphasis without reflowing text

##### Width

Width is the result of how much horizontal space is taken up by a typeface’s characters.

A narrow width allows more characters to fit per line while a wider width may offer more personality.

[Learn more about width on Google Fonts](https://fonts.google.com/knowledge/glossary/width)

(fig) Roboto Flex offers a fluid range of widths, from 25 to 150

**[DO]** (fig) A thinner width can allow for more characters to fit at small sizes, such as in a label

**[DON'T]** (fig) Since wider styles take up more space, avoid using them for areas with limited space, such as in a top app bar

##### Optical size

Optical sizes are different versions of a typeface optimized for use at different sizes.

Small size designs focus on enhancing readability, while large size designs can show off the intricacies of the letter forms and offer many more weights and widths.

[Learn about choosing typefaces that have optical sizes.](https://fonts.google.com/knowledge/choosing_type/choosing_typefaces_that_have_optical_sizes)

(fig) The typeface Literata has a continuous range of optical size, from 7pt to 72pt

**[DO]** (fig) Use an optical size that matches your type size

**[DON'T]** (fig) Don’t use large optical type sizes at small sizes. Instead use a smaller optical size, if available.

