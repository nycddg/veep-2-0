# 03 — Color

Primary sources: https://m3.material.io/styles/color/system/overview · https://m3.material.io/styles/color/system/how-the-system-works · https://m3.material.io/styles/color/roles · https://m3.material.io/styles/color/choosing-a-scheme · https://m3.material.io/styles/color/static/baseline · https://m3.material.io/styles/color/static/custom-brand · https://m3.material.io/styles/color/dynamic/choosing-a-source · https://m3.material.io/styles/color/advanced/overview · https://m3.material.io/styles/color/resources · Contrast: https://m3.material.io/foundations/designing/color-contrast
Token values: [tokens/system-color.md](tokens/system-color.md) (light, dark, medium- and high-contrast), [tokens/ref-palette.md](tokens/ref-palette.md). Accessed 2026-10-09.

## Essentials

### The system (styles/color/system/overview)
"The Material color system includes: built-in set of accessible color relationships; 26+ color roles mapped to Material Components; built-in dark theme colors; static baseline color scheme…; dynamic color features including user-generated and content-based color."
- **Three levels of contrast** (May 2025): "Color roles support three levels of contrast so people can select the one that best suits their vision needs. Contrasts also are tokenized." (standard, medium, high — values in tokens/system-color.md)
- August 2024: on-primary-container, on-secondary-container and on-tertiary-container updated in light theme "to be more colorful while still having accessible color contrast."

### Choosing a scheme (styles/color/choosing-a-scheme) — preserve these conditions
- **Use static (baseline) color if:** you're not ready to implement dynamic color; you're migrating from M2 and want M3 features without breaking your app; your product is for enterprise users who wouldn't benefit from personalized color or user-controlled contrast; **your product is built for iOS**.
- **Use dynamic color if:** you want personalization; you want colors to change based on wallpaper or in-app content; you want user-controlled contrast; you aren't sure whether you'll need a mix of dynamic and static colors.
- Dynamic: "it's best to initially design it using the baseline color scheme so you can ensure the right color roles are mapped to the right components." Use Material Theme Builder to preview across source colors.
- Dynamic source (styles/color/dynamic/choosing-a-source): **user-generated** (wallpaper) vs **content-based** (in-app content). Content-based "is best used for contained screen elements adjacent to the source image."

### Roles (styles/color/roles) — assign by role, never by hex
Naming concepts: **Surface** (backgrounds, large low-emphasis areas); **Primary/Secondary/Tertiary** (accents); **Container** ("fill color for foreground elements like buttons. They should not be used for text or icons"); **On** (text/icons on the paired color); **Variant** (lower-emphasis alternative).
- **Primary** — "most prominent components across the UI, such as the FAB, high-emphasis buttons, and active states."
- **Secondary** — "less prominent components in the UI such as filter chips." Secondary container: "recessive components like tonal buttons."
- **Tertiary** — "contrasting accents that balance primary and secondary colors or bring heightened attention to an element such as an input field"; "can be applied at the designer's discretion."
- **Error** — error states; "Error color roles are made static by default with any dynamic color scheme. They still adapt to light and dark theme."
- **Surface**: surface (default background), on surface, on surface variant; five **surface containers** (lowest, low, default, high, highest). "The most common combination… uses surface for a background area and surface container for a navigation area." "All color mappings – but especially surface colors – should remain the same for layout regions across breakpoints."
- **Inverse**: inverse surface / inverse on surface / inverse primary (e.g. snackbar).
- **Outline**: outline = "important boundaries, such as a text field outline"; outline variant = "decorative elements, such as dividers, and when other elements provide 4.5:1 contrast." Don't use outline for dividers or for multi-element components like cards; don't use outline variant to define target boundaries or hierarchy (Caution: allowed for chip/button borders when inner content provides 4.5:1).
- **Add-on roles** (fixed, fixed dim, on fixed, on fixed variant, surface dim, surface bright): "Most products won't need to use these… If you aren't sure whether your product should use the add-on roles, it probably shouldn't." Don't use fixed colors where contrast is necessary.
- **Pairing rule**: "apply colors only in the intended pairs or layering orders"; improper combinations break contrast, especially with user-controlled contrast. Accessible pairs "provide an accessible minimum 3:1 contrast."
- Expressive tactic (01): use contrast between primary, secondary and tertiary roles to prioritize actions.

### Baseline values (examples, from token data; light / dark)
`md.sys.color.primary` #6750A4 / #D0BCFF · `md.sys.color.surface-container` #F3EDF7 / #211F26 · `md.sys.color.inverse-surface` #322F35 / #E6E0E9. Full table: tokens/system-color.md. These are the baseline (static) scheme only; dynamic and custom schemes produce other values for the same roles.

### Advanced customization (styles/color/advanced/*)
Apply colors, define new colors (custom colors, harmonization), adjust existing colors (e.g. chroma/fidelity). Use Material Theme Builder and material-color-utilities (see 12, 13). Follow each page's conditions as given in the appendix.


---

## Source pages in scope

| Page | URL | Site content timestamp | Do | Don't | Caution |
|---|---|---|---|---|---|
| Color system — Overview | https://m3.material.io/styles/color/system/overview | 2026-07-23T20:32:56.894Z | 0 | 0 | 0 |
| Color system — How the system works | https://m3.material.io/styles/color/system/how-the-system-works | 2026-07-23T20:32:56.894Z | 0 | 0 | 0 |
| Color roles | https://m3.material.io/styles/color/roles | 2026-07-27T13:48:22.900Z | 2 | 5 | 1 |
| Choosing a scheme | https://m3.material.io/styles/color/choosing-a-scheme | 2026-07-17T04:58:33.154Z | 0 | 0 | 0 |
| Static color schemes — Baseline | https://m3.material.io/styles/color/static/baseline | 2026-07-17T05:32:35.739Z | 0 | 0 | 0 |
| Static color schemes — Custom brand | https://m3.material.io/styles/color/static/custom-brand | 2026-07-17T05:32:35.739Z | 0 | 0 | 0 |
| Dynamic color schemes — Choosing a source | https://m3.material.io/styles/color/dynamic/choosing-a-source | 2026-07-17T05:04:01.999Z | 0 | 0 | 0 |
| Dynamic color schemes — User-generated source | https://m3.material.io/styles/color/dynamic/user-generated-source | 2026-07-17T05:04:01.999Z | 0 | 0 | 0 |
| Dynamic color schemes — Content-based source | https://m3.material.io/styles/color/dynamic/content-based-source | 2026-07-17T05:04:01.999Z | 0 | 0 | 0 |
| Advanced customizations — Overview | https://m3.material.io/styles/color/advanced/overview | 2026-07-17T04:53:46.229Z | 0 | 0 | 0 |
| Advanced customizations — Apply colors | https://m3.material.io/styles/color/advanced/apply-colors | 2026-07-17T04:53:46.229Z | 0 | 0 | 0 |
| Advanced customizations — Define new colors | https://m3.material.io/styles/color/advanced/define-new-colors | 2026-07-17T04:53:46.229Z | 0 | 0 | 0 |
| Advanced customizations — Adjust existing colors | https://m3.material.io/styles/color/advanced/adjust-existing-colors | 2026-07-17T04:53:46.229Z | 0 | 0 | 0 |
| Color resources | https://m3.material.io/styles/color/resources | 2026-07-17T04:58:29.062Z | 0 | 0 | 0 |

## Verbatim rule index (every Do / Don't / Caution caption on the pages above)


**Color roles** — https://m3.material.io/styles/color/roles

- **[DO]** (fig) Pair and layer color roles as intended to ensure expected visual results and accessibility. In this example, the two buttons mapped with (1) **primary**, (2) **on primary**, (3) **secondary container**, and (4) **on secondary container** stay legible as the contrast level changes.
- **[DON'T]** (fig) Improper color mappings can produce unintended visual results and break accessibility. In this example, the two buttons mapped with (1) **primary**, (2) **primary container**, (3) **secondary container**, and (4) **on surface** become illegible as the contrast level changes.
- **[DON'T]** (fig) Don’t use the **outli****ne** color for dividers since they have different contrast requirements. Instead, use **outline variant**.
- **[DON'T]** (fig) Don’t use the **outline** color for components that contain multiple elements, such as cards. Instead, use **outline variant**.
- **[DON'T]** (fig) Don’t use the **outline variant** color to create visual hierarchy or define the visual boundary of targets. Instead, use the **outline** color or another color providing 3:1 contrast with the surface color.
- **[CAUTION]** (fig) The **outline variant** color can be used for the border of targets like chips and buttons, provided that those targets contain elements inside them that provide visual contrast. In this example of chips and buttons, the icons and text inside the targets meet 4.5:1 contrast.
- **[DON'T]** (fig) Fixed colors don't change based on light or dark theme, so they're likely to cause contrast issues. Avoid using them where contrast is necessary.
- **[DO]** (fig) Use **primary**, **secondary**, and **tertiary** roles for accent colors where contrast is needed

## Appendix — verbatim page text (digest: text, tables and figure captions; image-only content represented by captions)

### Color system — Overview

Source: https://m3.material.io/styles/color/system/overview


**The Material color system includes:**

- Built-in set of accessible color relationships
- 26+ color roles mapped to Material Components
- Built-in dark theme colors
- Static baseline color scheme with default colors assigned to each color role
- Dynamic color features including user-generated and content-based color

[Learn how the system works](https://m3.material.io/styles/color/system/how-the-system-works)

(fig) Learn about the value and function of Material 3’s dynamic color system and how it differs from past color systems

View transcript

(fig) The baseline color scheme doesn't dynamically change

(fig) A dynamic color scheme changes the UI's colors based on different inputs, like a wallpaper

(fig) Specific colors, such as semantic colors, can be set to not dynamically change

Products with dynamic color can automatically generate and assign colors to each element in the UI.

This provides:

- Personalized UI
- Accessible contrast
- User-controlled contrast
- Automatic dark theme

(fig) The UI colors change dynamically

#### Resources

| Type | Link | Status |
| --- | --- | --- |
| Design | [Design Kit](https://www.figma.com/community/file/1035203688168086460) (Figma) | Available |
| Implementation | [Android Views (MDC-Android)](https://github.com/material-components/material-components-android/blob/master/docs/theming/Color.md) | Available |
| [Jetpack Compose](https://developer.android.com/develop/ui/compose/designsystems/material3#dynamic_color_schemes) | Available |
| [Flutter](https://pub.dev/packages/dynamic_color) | Available |
| Tools | [Material Theme Builder](https://www.figma.com/community/plugin/1034969338659738588/material-theme-builder) | Available |

#### What's new

May 2025

##### Three levels of contrast

Color roles support three levels of contrast so people can select the one that best suits their vision needs. Contrasts also are tokenized.

(fig) Standard contrast

(fig) Medium contrast

(fig) High contrast

August 2024

##### More colorful text and icons

The following color roles are updated in light theme to be more colorful while still having accessible color contrast:

- On primary container
- On secondary container
- On tertiary container
- On error container

Affected components:

- Badges
- Buttons
  - Buttons
  - Extended FAB
  - FAB
  - Icon buttons
  - Segmented buttons
- Chips
- Lists
- Menus
- Navigation bar
- Navigation drawer
- Navigation rail
- Switches
- Toolbars

(fig) Colors used for text and icons now appear more colorful

Oct 2023

##### Reorganized guidelines

Same color system, explained in a new way. Updated sections include:

- [How the system works](https://m3.material.io/styles/color/system/how-the-system-works)
- [Advanced customizations](https://m3.material.io/styles/color/advanced/overview)
- [Color resources](https://m3.material.io/styles/color/resources)

(fig) The guidelines have been reorganized and updated

Feb 2023

##### Tone-based surface colors

[Tone-based surface color roles](https://material.io/blog/tone-based-surface-color-m3) have replaced the previous approach of surfaces at +1 to +5 elevation.  The new color roles are not tied to elevation and offer more flexibility and support for color features, such as user-controlled contrast.

(fig) New tone-based surface colors offer more flexibility and support

Technical changes were made to align the color system with Android SysUI:

- Updated the default light theme surface from tone 99 to tone 98
- Updated the chroma for the neutral palette, increasing it from 4 to 6
- Slightly darkened surface roles in dark theme

(fig) Changes in tone and chroma in the default light theme surface

Feb 2023

##### Additional accent colors

Additional accent colors in the scheme provide more flexibility and choice for color application. In particular, a new set of fixed colors for the **primary**, **secondary**, and **tertiary** accent groups provide colors which stay the same across light and dark themes.

(fig) Additional accent colors provide more choice for color application

### Color system — How the system works

Source: https://m3.material.io/styles/color/system/how-the-system-works


#### It's like paint-by-number

Imagine your product screen as a paint-by-number canvas:

- Each element on the screen has a number
- Each number is assigned a color

(fig) Each part of a UI is assigned a "number," and each "number" is assigned a color

You can hand-pick a color for every "number" to create a static color scheme.

(fig) Static colors are hand-picked, like this green icon button

But now, you can also use Material's dynamic color system to automatically generate an entire palette of accessible colors for each "number" from a single source.

This source can be a user's wallpaper, or in-app content like imagery. If the source changes, the product colors update to match.

(fig) Colors are generated dynamically from a user's wallpaper or in-app content

You can customize how dynamic color appears in your product by:

- Setting the color source
- Adding static or harmonized colors
- Changing which "numbers" are assigned to which elements

[Learn about advanced customizations](https://m3.material.io/styles/color/advanced/define-new-colors)

(fig) The color source can be changed, automatically changing the color scheme. The UI elements can have other "numbers" assigned to them.

#### Essential terms

##### Color role

Like the "numbers" on a paint-by-number canvas, color roles are assigned to specific UI elements. They have semantic names like **primary**, **on primary**, and **primary container,** and matching color tokens. [See all color roles](https://m3.material.io/styles/color/roles)

##### Dynamic color

Dynamic color takes a single color from a user's wallpaper or in-app content and creates an accessible color scheme assigned to elements in the UI. If the user's wallpaper or the in-app content changes, the colors in the UI will change to match.

##### Static color

UI colors that don't change based on the user's wallpaper or in-app content. Static colors can be hand-picked or generated in design tools like the Material Theme Builder. Once assigned to their respective color roles and UX elements, the colors remain constant.

###### **Baseline static color**

The default static color scheme for Material products. [See the baseline color scheme](https://m3.material.io/styles/color/static)

(fig) The dynamic color process is automatic. A single source color is used to generate five key colors, which are used to make tonal palettes. Tones from the palettes are then assigned to color roles, which are in turn assigned to elements of the UI.

(fig) The system generates dynamic color schemes using colors from images like wallpapers and in-app content

#### How dynamic color generates color schemes

##### 1. It starts with a source color

There are three ways to get a source color.

###### **A. Generate it from a wallpaper**

User-generated color is sourced from a user's personal wallpaper. The wallpaper is digitally analyzed through a process called quantization, and a single color is selected as the source color.

(fig) Source color from a user's wallpaper

###### **B. Generate it from in-app content**

Content-based color is sources from in-app content, like an album thumbnail image, logo, or video preview.

Like user-generated color, the image is digitally analyzed through quantization, and a single color selected as the source color.

(fig) Source color from in-app-content

###### **C. Pick it by hand**

A hand-picked source color is deliberately selected by a designer.

**Did you know?**The baseline static color scheme uses a hand-picked source color.

(fig) Source color hand-picked by a designer

##### 2. Feed the source color into an algorithm

Dynamic color is powered by the [Material Color Utilities](https://github.com/material-foundation/material-color-utilities) (MCU), a set of color libraries containing algorithms and utilities that develop color themes and schemes in your app.

There are many color algorithms, but the most common ones are:

- **User-generated color algorithm**Uses personal wallpaper to identify source color. Maps colors of specific tones (lighter or darker) into the scheme according to a combination of system design choices and user preferences.
- **Content-based color algorithm**  
  Uses image for source color. Tones are adjusted to match the appearance of the source image, while maintaining accessible contrast.
- **Custom colors**  
  Colors closely match the chosen input colors, such as those representing brand or semantic meaning.

(fig) 1. When run through the **user-generated color** algorithm, the source color is turned into a full color scheme

(fig) 2. When run through **content-based color** algorithm, the same source color creates a slightly different color scheme. Some tones are adjusted to better match the appearance of the source image.

(fig) 3. Custom colors, such as brand colors, can individually run through the algorithm to create a custom scheme that matches the brand

##### 3. The algorithm generates key colors

Material's color algorithms manipulate the source color's hue and chroma to generate **five complimentary key colors**.

1. Primary
2. Secondary
3. Tertiary
4. Neutral
5. Neutral variant

(fig) A source color generates five key colors

##### 4. The algorithm creates tonal palettes

The system then manipulates tone and chroma values to create a **tonal palette** for each key color. Colors in these palettes are given a number from 0 to 100 in increments of 10, as well as 95, 98, and 99. Some palettes include more values.

(fig) The smaller the tonal value, the darker the color

##### 5. The algorithm assigns tones to color roles

The algorithm uses accessible color relationships to **assign specific tones to the 26****color roles** in both light and dark theme.

For example, the algorithm assigns the color tone primary40 to the **p****rimary** role and the tone primary100 to the **o****n primary** role.

[See all color roles](https://m3.material.io/styles/color/roles)

(fig) Tones from the tonal palette are assigned to different roles

(fig) Colors from the five tonal palettes are assigned to color roles. For example, primary roles are picked from the primary tonal palette, while surface roles are picked from the neutral tonal palette.

Dark theme colors are also automatically assigned so that apps receive both light and dark themes through a single set of color roles.

(fig) The same color roles are used in light and dark themes

##### 6. The new colors are applied to the UI

The 26 standard color roles are already assigned to elements of the UI. When a new source color is picked, the UI dynamically changes color.

(fig) Color roles assigned to the UI

#### Color roles support three levels of contrast

In addition to light and dark theme, color roles also support three levels of contrast. This helps people select the contrast setting that best suits their vision needs:

- Standard (default)
- Medium
- High

The standard contrast emphasizes visual hierarchy using high and low contrast elements. People with vision disabilities may choose medium or high contrast options for better support.

(fig) **Standard contrast**

The baseline color scheme already uses mixed levels of contrast to reduce cognitive load

(fig) **Medium contrast**

Provides a minimum contrast ratio of 3:1 for those who need more contrast, but may experience visual discomfort with higher contrasts from effects like halation.

(fig) **High contrast**

Further emphasizes essential elements with a 7:1 contrast ratio to reduce visual distractions and enable users to focus. For example, high contrast is applied to the content in a card but not the card container.

The contrast settings are automatically applied to both light and dark themes.

(fig) Light theme

(fig) Dark theme

Custom components can support contrast levels by using Material's appropriate color roles. For example, use **primary container** and **on primary container**.

Use design tokens to apply color roles to custom components.

(fig) A custom volume slider can use **p****rimary container** and **on primary container**color roles to support contrast levels

(fig) At medium and other contrast levels, those color roles apply the necessary new color values

#### Pairing accessible tones

The system manipulates hue, chroma, and tone (HCT) values to **create a tonal palette for each color** with tones ranging from 0 to 100.

Color has physical limitations—whether it's actual physics, our own biological visual limitations, or the limitations of on-screen color rendering. For example, some hues cannot exist with certain chroma or tones. Color limitations are the reason colors such as bright light blue or bright light red are not quite possible. This is why the chroma value may increase or decrease for some tones in a tonal palette.

(fig) Tonal values range from 0 (black) to 100 (white). The smaller the tonal value, the darker the color.

Material's color algorithms use these palettes to find and **pair contrasting tones,**creating accessible color combinations.

Because tone can describe the lightness or darkness of a color, it's used to define accessible color relationships. Those relationships are built into Material's color algorithms.

For example, the algorithms assign a dark tone to a button's container color and a light tone to its label color, ensuring that the colors have a 3:1 contrast.

(fig) Using tones 50 and 98 for a button and its label creates an accessible 3:1 contrast

For even more contrast, the algorithms assign tones even farther apart, achieving a 7:1 contrast.

This is the concept powering **user-controlled contrast** features.

(fig) Using colors of tones 30 and 98 for a button and its label create a 7:1 contrast

#### Defining colors with hue, chroma, and tone (HCT)

**The system uses a color space called HCT**, which defines all colors using three dimensions: hue, chroma, and tone.

Changing HCT values lets you manipulate colors in flexible but predictable ways. Unlike other color spaces (like HSL or RGB), HCT allows the manipulation of a color's hue and chroma without affecting its tone. Watch to learn more:

(fig) Hue, chroma, and tone are the three color dimensions used to create accessible color schemes

##### Hue

Hue is the perception of a color as red, orange, yellow, green, blue, violet, and so on. Hue is quantified by a number ranging from 0-360 and is a circular spectrum (values 0 and 360 are the same hue).

(fig) 360 degree **hue** spectrum

##### Chroma

Chroma is how colorful or neutral (grey, black or white) a color appears. Chroma is quantified by a number ranging from 0 (completely grey, black or white) to infinity (most vibrant), though Chroma values in HCT top out at roughly 120.

Because of biological and screen rendering limitations, different hues and different tones will have different maximal chroma values.

(fig) 1. The higher the color purity, the higher the **chroma**
2. Note how lightening and darkening a hue also affects its **chroma** value

##### Tone

Tone is how light or dark a color appears. Tone is sometimes also referred to as luminance. Tone is quantified by a number ranging from 0 (pure black, no luminance) to 100 (pure white, complete luminance).

Tone is crucial for visual accessibility because it determines contrast. Colors with a greater difference in tone create higher contrast, while those with a smaller difference create lower contrast.

(fig) The 100 **tone** is always 100% white, the lightest **tone** in the range; the 0 **tone** is 100% black, the darkest**tone** in the range

##### HCT isn't interchangeable with other color spaces

Values from models like hue, saturation, and lightness (HSL) won't perfectly map to Material's hue, chroma, and tone (HCT). Don’t conflate color spaces when inspecting or adjusting colors.

For example, colors with the same perceived brightness share the same tone value in HCT, but can have different HSL lightness values.

(fig) HCT tone values remain constant when they have the same perceived brightness, while HSL lightness values can vary

### Color roles

Source: https://m3.material.io/styles/color/roles


#### What are color roles?

Color roles are like the "numbers" in a paint-by-number canvas. They're the connective tissue between elements of the UI and what color goes where.

- **Color roles are mapped to Material Components**  
  You'll use these color roles whether you're using the static baseline scheme or dynamic color. If your product contains custom components, they'll need to be properly mapped to this set of color roles.
- **Color roles ensure accessibility**  
  The color system is built on accessible color pairings. These color pairs provide an accessible minimum 3:1 contrast.
- **Color roles are tokenized**  
  Roles are implemented in design and code through tokens. A design token represents a small, reusable design decision that’s part of a design system's visual style.

(fig) Diagram of all Material color roles, including optional add-on roles for surface colors and fixed accent colors

#### General concepts

Here are helpful-to-know words you'll see in the names of color roles:

- **Surface**– A role used for backgrounds and large, low-emphasis areas of the screen.
- **Primary, Secondary, Tertiary** – Accent color roles used to emphasize or de-emphasize foreground elements.
- **Container** – Roles used as a fill color for foreground elements like buttons. They should not be used for text or icons.
- **On** – Roles starting with this term indicate a color for text or icons *on top* of its paired parent color. For example, **on primary** is used for text and icons against the **primary** fill color.
- **Variant** – Roles ending with this term offer a lower emphasis alternative to its non-variant pair. For example, **outline variant**is a less emphasized version of the **outline**color.

##### Pairing and layering colors

To ensure accessible visual contrast in your app, apply colors only in the intended pairs or layering orders described in the following sections.

Combining colors improperly may break contrast necessary for visual accessibility, particularly when colors are adjusted through dynamic color features such as user-controlled contrast.

**[DO]** (fig) Pair and layer color roles as intended to ensure expected visual results and accessibility. In this example, the two buttons mapped with (1) **primary**, (2) **on primary**, (3) **secondary container**, and (4) **on secondary container** stay legible as the contrast level changes.

**[DON'T]** (fig) Improper color mappings can produce unintended visual results and break accessibility. In this example, the two buttons mapped with (1) **primary**, (2) **primary container**, (3) **secondary container**, and (4) **on surface** become illegible as the contrast level changes.

#### Accent color roles

Accent color roles include primary, secondary, and tertiary. Assign them to elements in the UI based on importance and needed emphasis. Use caution when changing color roles for visual effect.

- **Primary roles** are for important actions and elements needing the most emphasis, like a FAB to start a new message.
- **Secondary roles** are for elements that don’t need immediate attention and don’t need emphasis, like the selected state of a navigation icon or a dismissive button.
- **Tertiary roles** are for smaller elements that need special emphasis but don't require immediate attention, such as a badge or notification.

(fig) 1. Primary colors are used for the most important elements, like a starred message and FAB to start a new message
2. Tertiary colors are used for smaller emphasized elements, like a badge suggesting a follow up
3. Secondary colors are used for less urgent elements, like the background of an inactive star icon and the selection state of an inbox icon

#### Primary

Use primary roles for the most prominent components across the UI, such as the FAB, high-emphasis buttons, and active states.

- **Primary:** High-emphasis fills, texts, and icons against surface
- **On primary:** Text and icons against primary
- **Primary container:** Standout fill color against surface, for key components like FAB
- **On primary container:**Text and icons against primary container

(fig) Primary color roles include **primary** and **primary container**, with their respective “On” colors

(fig) 1. On primary
2. Primary

(fig) 1. On primary container
2. Primary container

#### Secondary

Use secondary roles for less prominent components in the UI such as filter chips.

There are four secondary roles:

- **Secondary:** Less prominent fills, text, and icons against surface
- **On secondary:** Text and icons against secondary
- **Secondary container:** Less prominent fill color against surface, for recessive components like tonal buttons
- **On secondary container:** Text and icons against secondary container

(fig) Secondary color roles include **secondary** and **secondary container**, with their respective "On" colors

(fig) 1. Icon: On secondary container
2. Button: Secondary container

#### Tertiary

Use tertiary roles for contrasting accents that balance primary and secondary colors or bring heightened attention to an element such as an input field.

There are four tertiary roles:

- **Tertiary:** Complementary fills, text, and icons against surface
- **On tertiary:** Text and icons against tertiary
- **Tertiary container:** Complementary container color against surface, for components like input fields
- **On tertiary container:**Text and icons against tertiary container

(fig) Tertiary color roles include **tertiary** and **tertiary container**, with their respective "On" colors

The tertiary color roles can be applied at the designer's discretion. They're intended to support broader color expression.

(fig) 1. On tertiary container
2. Tertiary container

#### Error

Use error roles to communicate error states, such as an incorrect password entered into a text field.

There are four error roles:

- **Error:** Attention-grabbing color against surface for fills, icons, and text, indicating urgency
- **On error:** Text and icons against error
- **Error container:** Attention-grabbing fill color against surface
- **On error container:** Text and icons against error container

Error is an example of a static color (it doesn't change even in dynamic color schemes). Error color roles are made static by default with any dynamic color scheme. They still adapt to light and dark theme.

(fig) Error color roles include **error** and **error container** with their respective "On" colors.

#### Surface

Use surface roles for more neutral backgrounds, and container colors for components like cards, sheets, and dialogs.

There are three surface roles:

- **Surface:**Default color for backgrounds
- **On surface:** Text and icons against any **surface** or **surface container**color
- **On surface variant:** Lower-emphasis color for text and icons against any **surface** or **surface container** color

(fig) **Surface** and **on surface** roles in light theme

There are also five surface container roles named based on their level of emphasis:

- **Surface container lowest:** Lowest-emphasis container color
- **Surface container low:** Low-emphasis container color
- **Surface container:** Default container color
- **Surface container high:** High-emphasis container color
- **Surface container highest:** Highest-emphasis container color

**Surface container** is the default role, but the others are especially helpful for creating hierarchy and nested containers in [layouts for expanded screens](https://m3.material.io/foundations/layout/breakpoints/expanded).

(fig) The five **surface container** roles, shown in light and dark theme

The most common combination of surface roles uses **surface** for a background area and **surface container** for a navigation area.

Text and icons typically use **on surface**and**on surface variant**on all types of surfaces.

(fig) 1. Surface
2. Surface container

All color mappings – but especially surface colors – should remain the same for layout regions across breakpoints. For example, the body area will use the **surface** color and the navigation area will use the **surface container** color on both mobile and tablet.

(fig) 1. Surface
2. Surface container

Depending on necessary hierarchy, feature area, and design logic, you can use [add-on surface colors](https://m3.material.io/styles/color/roles/tab-1#63d6db08-59e2-4341-ac33-9509eefd9b4f) in larger window class sizes as long as colors are consistently applied.

(fig) In this example, the body and navigation regions have the same color roles across breakpoints (**surface** and **surface container**, respectively) with the addition of other surface container colors at larger sizes.

By default, neutral-colored components such as navigation bars, menus, or dialogs are mapped to specific surface container roles, but these [roles can be remapped](https://m3.material.io/styles/color/advanced/overview) by makers to suit user needs.

(fig) Default surface container roles applied to components:

1. **Surface container low**
2. **Surface container**
3. **Surface container high**
4. **Surface container highest**

##### Inverse colors

Inverse roles are applied selectively to components to achieve colors that are the reverse of those in the surrounding UI, creating a contrasting effect.

- **Inverse surface:**Background fills for elements which contrast against surface
- **Inverse on surface:** Text and icons against inverse surface
- **I****nverse primary:** Actionable elements, such as text buttons, against inverse surface

(fig) **Inverse surface**, **inverse on surface**, and **inverse primary** roles in the color scheme, shown in light theme

(fig) A snackbar which uses:

1. **Inverse surface** for its background
2. **Inverse on surface** for its text
3. **Inverse primary** for its text button

#### Outline

There are two outline colors to be used against a surface:

- **Outline:** Important boundaries, such as a text field outline
- **Outline variant:** Decorative elements, such as dividers, and when other elements provide 4.5:1 contrast

(fig) **Outlin****e** and **outline variant** roles in the color scheme, shown in light theme

(fig) 1. A text field which uses **outline**for its container border
2. A list item which uses **outline variant** for its divider line

**[DON'T]** (fig) Don’t use the **outli****ne** color for dividers since they have different contrast requirements. Instead, use **outline variant**.

**[DON'T]** (fig) Don’t use the **outline** color for components that contain multiple elements, such as cards. Instead, use **outline variant**.

**[DON'T]** (fig) Don’t use the **outline variant** color to create visual hierarchy or define the visual boundary of targets. Instead, use the **outline** color or another color providing 3:1 contrast with the surface color.

**[CAUTION]** (fig) The **outline variant** color can be used for the border of targets like chips and buttons, provided that those targets contain elements inside them that provide visual contrast. In this example of chips and buttons, the icons and text inside the targets meet 4.5:1 contrast.

#### Add-on color roles

Most products won't need to use these add-on color roles. However, some products require the greater flexibility and control that add-on roles provide. If you aren't sure whether your product should use the add-on roles, it probably shouldn't and you can ignore them.

##### Fixed accent colors

**Primary fixed, secondary fixed,**and **t****ertiary fixed** are fill colors used against surface. These colors maintain the same tone in light and dark themes, as opposed to regular container colors, which change in tone between these themes. The fixed color role may be used instead of the equivalent container role in situations where such fixed behavior is desired.

The **primary fixed dim**, **secondary fixed dim**, and **tertiary fixed dim** roles provide a stronger, more emphasized tone relative to the equivalent fixed color. They may be used where a deeper color but the same fixed behavior is desired.

(fig) **Fixed** and **fixed dim** color roles for the **primary**, **secondary**, and **tertiary** color groups, shown in both light and dark themes. Note how the colors stay the same between themes.

(fig) A FAB which uses **primary fixed** (1) for its container fill color, shown in light and dark themes. Note how the container color stays the same between themes.

(fig) For comparison, a FAB which uses **primary container** (2) for its container fill color, shown in light and dark themes. Note how the container color changes tone between themes.

(fig) Examples of fixed and fixed dim colors in use:

1. **Primary fixed** for a FAB container color
2. **Primary fixed dim** for an icon button container

**[DON'T]** (fig) Fixed colors don't change based on light or dark theme, so they're likely to cause contrast issues. Avoid using them where contrast is necessary.

**[DO]** (fig) Use **primary**, **secondary**, and **tertiary** roles for accent colors where contrast is needed

##### On fixed accent colors

**On fixed** colors are used for text and icons which sit on top of the corresponding Fixed color. For example, **on****primary fixed**is used for text and icons against the **primary fixed**color. The same usage applies for the equivalent secondary and tertiary colors.

**On fixed variant** colors are used for text and icons needing lower emphasis against the corresponding fixed color. For example, **on primary fixed variant**is used for low emphasis text and icons against the **primary fixed**color. The same usage applies for the equivalent secondary and tertiary colors.

(fig) **On fixed** and **on fixed variant** color roles for the **primary**, **secondary**, and **tertiary** accent groups, shown in both light and dark themes

(fig) A customized banner which uses **on primary fixed variant** (1) for its deemphasized text and (2) **on primary fixed** for its emphasized text

##### Bright and dim surface roles

There are two add-on surface roles:

- **Surface dim:** Dimmest surface color in light and dark themes
- **Surface bright:** Brightest surface color in light and dark themes

(fig) **Surface dim**, **surface**, and **surface bright** in light theme

(fig) **Surface dim**, **surface**, and **surface bright** in dark theme

While the default **surface** color automatically inverts between light and dark themes (it’s a light color in light theme and it flips to a dark color in dark theme), the **surface bright** and **surface dim** colors invert in a slightly different way. More precisely, they keep their relative brightness across both light and dark theme.

For example, in an interface using the default **surface** role, the mapped area is the brightest in light theme and the dimmest in dark theme. In an interface using the **surface bright** role, the mapped area is the brightest in both light and dark theme.

(fig) Light theme

1. **Surface**
2. **Surface container**

(fig) Dark theme

1. **Surface**
2. **Surface container**

(fig) Light theme

1. **Surface bright**
2. **Surface container**

(fig) Dark theme

1. **Surface bright**
2. **Surface container**

(fig) 1. Navigation rail with **surface dim** background
2. Chat window with **surface bright** background

### Choosing a scheme

Source: https://m3.material.io/styles/color/choosing-a-scheme


A **color scheme** describes all of a product's colors, color roles, and color relationships across light and dark themes.

There are two kinds of color schemes in Material:

1. Static
2. Dynamic

(fig) Discover when and how to use different color schemes, including static baseline, dynamic user-generated, and dynamic content-based color schemes

#### Static color

Working with static color will be the most like other color workflows you may have used. Static colors won't ever change based on user input or in-app content.

Material provides a static baseline color scheme including default color assignments and mappings.

(fig) Colors are static in the baseline color scheme

**What you get:**

✓ Accessible colors  
✓ Pre-made baseline color scheme  
✓ Colors that won't break an M2 app  
✓ Ability to easily update to dynamic color in the future

**What you *don't* get:**

✗ Personalized colors  
✗ Colors that change based on user's wallpaper or in-app content  
✗ User-controlled contrast settings

##### **Use static (baseline) color if**

- You're not ready to implement dynamic color (though it'll be easy to switch when you are)
- Your product is migrating from M2 and you want to get M3 features without breaking your app
- Your product is for enterprise users who wouldn't benefit from personalized color or user-controlled contrast settings
- Your product is built for iOS

**Choosing baseline?**[**Start designing with the baseline colors**](https://m3.material.io/styles/color/static/baseline)

#### Dynamic color

Dynamic color will automatically create an accessible color scheme based on a specific source color.

Because the UI could end up with any number of different source colors, it's best to initially design it using the baseline color scheme so you can ensure the right color roles are mapped to the right components in your product. You'll use the Material Theme Builder to see how your UI mocks look across a range of source colors and adjust it as-needed.

(fig) While the actual colors may change, the color role mappings remain the same across dynamic color schemes

**What you get:**

✓ Accessible colors  
✓ Personalized colors that change based on a user's wallpaper or in-app content  
✓ Ability to use advanced customizations like chroma fidelity to alter the dynamic color output  
✓ User-controlled contrast settings

**What you *don't* get:**

✗ Exact same UI colors across all devices

##### **Use dynamic color if**

- You want your product to showcase personalization
- You want the colors to change base on a user's wallpaper or in-app content
- You want your product to offer user-controlled contrast settings
- You aren't sure if you'll need to also use a mix of dynamic and static colors (you can customize your color scheme to include static colors as your work progresses)

**Choosing dynamic color? Next**[**pick a dynamic color source**](https://m3.material.io/styles/color/dynamic/choosing-a-source)

### Static color schemes — Baseline

Source: https://m3.material.io/styles/color/static/baseline


**Baseline** is the default static color scheme. It uses accessible color pairings and includes colors for both light and dark themes.

**With the baseline color scheme, end-users see**

- An accessible UI with static colors

(fig) Music app with the static baseline color scheme

(fig) News app with the static baseline color scheme

#### Baseline colors

Get baseline colors in Figma using the Material Theme Builder.

(fig) Baseline scheme colors in light theme

(fig) Baseline scheme colors in dark theme

#### Baseline color tokens

_[Interactive COLOR module: resource `designSystems/20543ce18892f7d9`; token sets: Color schemes, Palettes. Resolved values are in the tokens/ folder of this guide.]_

#### Design with baseline

##### Use the Design Kit and M3 baseline colors in new design files

1. Create your Figma file. Enable the [M3 Design Kit](https://www.figma.com/community/file/1035203688168086460) in your Assets panel.
2. Compose screens and layouts using Material Components from the design kit
3. Apply M3 baseline color roles to custom components and UI elements by hovering on the element's color property in the Design panel on the right of the screen and selecting the **Style** icon (four dots). This opens a selection dialog.
4. Search for "M3" to see the baseline color roles
5. Select the baseline color role that most closely matches the use case and intent (see [Color roles](https://m3.material.io/styles/color/roles) for more information on what color to use where)
6. Repeat until all custom elements are using M3 baseline color roles

##### Apply baseline colors to an existing file

**First, get the M3 baseline colors into your file**

1. Open your Figma design file. Select the **Actions** menu (or Ctrl/Command+K).
2. Find the [Material Theme Builder plugin](https://www.figma.com/community/plugin/1034969338659738588/material-theme-builder) and select **Run**. This will open a plugin dialog showing the default color scheme, including Core colors and Extended colors.
3. Open the plugin's **Settings** (gear icon at lower right of dialog) and select the checkbox for **Generate State Layers**. This makes sure there are color for the state layers needed to design interactions. [Learn more about state layers](https://m3.material.io/foundations/interaction/states/state-layers)
4. Navigate out of settings.
5. With the Current Theme dropdown at the top of the dialog, select **Baseline.**
6. Select the frames or components in your file and then hit **Swap** in the bottom right of the dialog. This will automatically update the colors for any M3 Design Kit components.

**Then, update any remaining non-M3 color styles**

1. Manually change any hex values or non-M3 color styles by selecting all and looking through the Selection colors in the Design panel on the right of the screen.
2. Any colors that don't start with "M3" need to be replaced with a corresponding baseline color.
3. Hover on a non-M3 color row in the Design panel and select the **Style** icon (four dots). This opens a selection dialog.
4. Search for "M3" to see the baseline color roles.
5. Select the baseline color role that most closely matches that color's use case (see [Color roles](https://m3.material.io/styles/color/roles) for more information on what color to use where) and select **Use style** to apply it to the selected objects.
6. Repeat until all non-M3 colors in the file have been replaced with M3 baseline color roles.

**Need to make adjustments to the scheme? Check out** [**Advanced customizations**](https://m3.material.io/styles/color/advanced/overview)

### Static color schemes — Custom brand

Source: https://m3.material.io/styles/color/static/custom-brand


In a brand-based static scheme, the colors are hand-picked by your team to align with your product's brand color. Brand-based schemes are entirely created and maintained by your team, so this approach requires a larger investment of time and effort.

**With a brand color scheme, end-users see**

- An accessible UI with static colors
- A product that "looks like its brand"

(fig) This example meditation app uses a static scheme created from its brand colors.

#### Create a custom brand color scheme

1. Open your Figma design file. Select the **Actions** menu (or Ctrl/Command+K).
2. Find the [Material Theme Builder plugin](https://www.figma.com/community/plugin/1034969338659738588/material-theme-builder) and select **Run**. This will open a plugin dialog showing the default color scheme, including Core colors and Extended colors.
3. Open the plugin's **Settings** (gear icon at lower right of dialog) and select the checkboxes for both **New theme color diagram** and **Generate State Layers**. This will create a handy visualization of your branded color scheme and also generate state layers essential for designing interactions. [Learn more about state layers](https://m3.material.io/foundations/interaction/states/state-layers)
4. Navigate out of settings.
5. Open the Current Theme dropdown at the top of the dialog and select **+ ADD NEW THEME.**
6. Give your theme a short name (this name will become the prefix of your color roles in Figma).
7. Select **ADD THEME.**
8. With **Custom** selected, select **Primary**. This opens a dialog prompting you to select a custom source color.
9. Enter the Hex value for your brand color and hit **Apply**.

This will generate a full custom color scheme. You can use the scheme as-is or repeat steps 5 and 6 to set custom sources for the Secondary, Tertiary, Error, Neutral, and Neutral Variant colors.

**Want to further adjust your brand color scheme? Check out**[**Advanced customizations**](https://m3.material.io/styles/color/advanced/overview)

#### Design with brand colors

##### Use brand colors in new design files

1. Create your Figma file. Enable the [M3 Design Kit](https://www.figma.com/community/file/1035203688168086460) in your Assets panel.
2. Copy your scheme's color diagram and paste it into the file (this makes the color roles available in the Design panel on the right of the screen as part of your local styles)
3. Apply your brand color roles to custom components and UI elements by hovering on the element's color property in the Design panel on the right of the screen and selecting the **Style** icon (four dots). This opens a selection dialog.
4. Search for your theme's name to see your brand color roles
5. Select the brand color role that most closely matches the use case and intent (see [Color roles](https://m3.material.io/styles/color/roles) for more information on what color to use where)
6. Repeat until all custom elements are using your brand color roles

##### Apply brand colors to an existing file or M3 Design Kit components

**First, get your brand colors into your file**

1. Copy your scheme's color diagram and paste it into the file (this makes the color roles available in the Design panel on the right of the screen as part of your local styles)

**Swap colors in M3 Design Kit components for your brand colors**

1. Find the [Material Theme Builder plugin](https://www.figma.com/community/plugin/1034969338659738588/material-theme-builder) and select **Run**. This will open a plugin dialog showing the default color scheme, including Core colors and Extended colors.
2. In the Current Theme dropdown at the top of the dialog, select your scheme
3. Select the frames or M3 Design Kit components in your file that need a color update and then hit **Swap** in the bottom right of the dialog. This will automatically update their colors from baseline colors to your brand colors

**Then, update any remaining non-brand color styles**

1. Manually change any hex values or non-brand color styles by selecting all and looking through the Selection colors in the Design panel on the right of the screen
2. Any colors that don't start with your theme name need to be replaced with a corresponding brand color
3. Hover on a non-brand color row in the Design panel and select the **Style** icon (four dots). This opens a selection dialog.
4. Search for your theme name to see the brand color roles
5. Select the brand color role that most closely matches that color's use case (see [Color roles](https://m3.material.io/styles/color/roles) for more information on what color to use where) and select **Use style** to apply it to the selected objects
6. Repeat until all non-brand colors in the file have been replaced with brand color roles

**Need to make adjustments to the scheme? Check out [Advanced customizations](https://m3.material.io/styles/color/advanced/overview)**

#### Develop with brand colors

- Export your branded color scheme from the Material Theme Builder (Available for Jetpack Compose, Android Views, Flutter, Web, or as a JSON file)
- Android: [Customize the default theme](https://developer.android.com/develop/ui/views/theming/themes#CustomizeTheme)

### Dynamic color schemes — Choosing a source

Source: https://m3.material.io/styles/color/dynamic/choosing-a-source


There are two ways your product can get a source color:

1. **User-generated color** from a user's wallpaper
2. **Content-based color** from in-app content like a music album or book cover

Learn [how dynamic color works](https://m3.material.io/styles/color/system/how-the-system-works)

Both types of dynamic color are accessible and personalized, so deciding which type to use is based on what's most important in the product: content or user preference.

#### User-generated color

Choose a user-generated color source if:

- Your users would benefit from a personalized experience that's tested well
- You want your product to showcase the latest and greatest Material features

[**Get started with user-generated color**](https://m3.material.io/styles/color/dynamic/user-generated-source)

(fig) An app colored with a dynamic user-generated scheme sourced from the user's red wallpaper.

#### Content-based color

Choose a content-based color source if:

- Content is front-and-center in your product
- Your team can do a bit of advanced customization
- Content-based color would support usability of specific features like media players
- Content-based color is best used for contained screen elements adjacent to the source image, though the source image is not always visible.

[**Get started with content-based color**](https://m3.material.io/styles/color/dynamic/content-based-source)

(fig) An app colored with a dynamic content-based scheme sourced from the in-app album art.

#### Multiple color sources

Choose to use multiple color sources if:

- Your product requirements meet multiple criteria above
- You don't mind doing a bit of advanced customization

[**Get started with user-generated color**](https://m3.material.io/styles/color/dynamic/user-generated-source)**before customizing**

(fig) An app colored with schemes from multiple sources.

1. Content-based color sourced from the in-app photo
2. User-generated color sourced from the user's wallpaper

### Dynamic color schemes — User-generated source

Source: https://m3.material.io/styles/color/dynamic/user-generated-source


**User-generated color** comes from an Android user's personal wallpaper. The wallpaper is digitally analyzed, a single color is selected as the source color, and tones are chosen and assigned to each color role.

**With a dynamic user-generated color scheme, end-users see**

- Their apps and system UI change to a color pulled from their device wallpaper
- A product that looks personalized

(fig) Dynamic color in a work app

(fig) Dynamic color in a work app

(fig) Dynamic color in a work app

#### Design with user-generated color

Because the final colors will be dynamically generated on each user's personal device, **it's more important to understand and apply the system's color roles in your designs** rather than use a particular hex value.

The easiest way to do this is by using a color scheme generated by the Material Theme Builder and focus on applying the color roles to your designs instead of particular hex values. Then you can use the Material Theme Builder to test how well the design functions across potential user-generated color options.

##### Use Material color roles in new design files

**First, get the color roles by creating a new theme with the Material Theme Builder**

1. Open your Figma file. Select the **Resources** button in the Figma toolbar
2. Find the [Material Theme Builder plugin](https://www.figma.com/community/plugin/1034969338659738588/material-theme-builder) and select **Run**. This will open a plugin dialog showing the default color scheme, including Core colors and Extended colors.
3. Open the plugin's **Settings** (gear icon at lower right of dialog) and select the checkboxes for both **New theme color diagram** and **Generate State Layers**. This will create a handy visualization of your branded color scheme and also generate state layers essential for designing interactions. [Learn more about state layers](https://m3.material.io/foundations/interaction/states/state-layers)
4. Navigate out of settings
5. Open the Current Theme dropdown at the top of the dialog and select **+ ADD NEW THEME**
6. Give your theme a short name (this name will become the prefix of your color roles in Figma)
7. Select **ADD THEME**
8. With **Custom** selected, select **Primary**. This opens a dialog prompting you to select a custom source color.
9. Enter the Hex value for a color and hit **Apply**. This will generate a full color scheme.
10. With the Current Theme dropdown at the top of the dialog, select your theme
11. Select the frames or components in your file and then hit **Swap** in the bottom right of the dialog. This will automatically update the colors for any M3 Design Kit components.

##### Apply color roles to an existing file or M3 Design Kit components

**First, get the color roles into your file**

1. Copy your preferred scheme's color diagram from your [Material Theme Builder](https://www.figma.com/community/plugin/1034969338659738588/material-theme-builder) file and paste it into your file (this makes the color roles available in the Design panel on the right of the screen as part of your local styles)

**Swap colors in M3 Design Kit components for your preferred colors**

1. Select the **Resources** button in the Figma toolbar.
2. Find the [Material Theme Builder plugin](https://www.figma.com/community/plugin/1034969338659738588/material-theme-builder) and select **Run**. This will open a plugin dialog showing the default color scheme, including Core colors and Extended colors.
3. In the Current Theme dropdown at the top of the dialog, select your color scheme
4. Select the frames or M3 Design Kit components in your file that need a color update and then hit **Swap** in the bottom right of the dialog. This will automatically update their colors from baseline colors to your selected scheme colors

**Then, update any remaining non-color-role-based colors**

1. Manually change any hex values or non-color-role-based color styles by selecting all and looking through the Selection colors in the Design panel on the right of the screen
2. Any colors that don't start with your selected scheme name need to be replaced with a corresponding color role
3. Hover on a non-color-role-based color row in the Design panel and select the **Style** icon (four dots). This opens a selection dialog.
4. Search for your scheme name to see the color roles
5. Select the color-role-based color that most closely matches that color's use case (see [Color roles](https://m3.material.io/styles/color/roles) for more information on what color to use where) and select **Use style** to apply it to the selected objects
6. Repeat until all non-color-role-based colors in the file have been replaced with color roles

##### Try out how your designs will look with dynamic color

1. Select the **Resources** button in the Figma toolbar.
2. Find the [Material Theme Builder plugin](https://www.figma.com/community/plugin/1034969338659738588/material-theme-builder) and select **Run**. This will open a plugin dialog showing the default color scheme, including Core colors and Extended colors.
3. Select Dynamic
4. Add an image, or select the **Shuffle** icon to get a random source color
5. Select the frames or components in your file that you want to see with dynamic color and then hit **Swap** in the bottom right of the dialog. This will automatically update their colors to the user-generated dynamic colors.
6. Repeat with a range of colors to get a sense of how your product will appear across different users' devices

**Need to make adjustments to the scheme? Check out [Advanced customizations](https://m3.material.io/styles/color/advanced/overview)**

#### Develop with user-generated color

- [Android Views (MDC-Android) – Color docs](https://github.com/material-components/material-components-android/blob/master/docs/theming/Color.md)

### Dynamic color schemes — Content-based source

Source: https://m3.material.io/styles/color/dynamic/content-based-source


**Content-based color** comes from in-app content, such as an album thumbnail image, logo, or video preview.

Like user-generated color, the image is digitally analyzed through quantization, a single color selected as the source color, and tones are chosen and assigned to each color role.

**With a dynamic content-based color scheme, end-users see**

- The product (and possibly system UI) change to a color corresponding to on-screen imagery
- A product that looks "smart"

(fig) Messaging app with content-based color

#### Design with content-based color

- Apply content color in apps and areas where it can enhance brand identity and convey the spirit of personalization.
- For example, a music app might derive color from a specific album’s artwork to build upon the personal connection to a music library. For a news feed, content-based color may be applied from a given publication to differentiate brands and help users navigate the platform.
- In-app content provides a color source for any content-based color scheme, and can be applied within a specified area of an app, such as a set of components or a particular screen.
- Get started: Use the color tokens and roles built into the Theme Builder. Check that the preferred scheme is selected when using [Material Theme Builder](https://www.figma.com/community/plugin/1034969338659738588/material-theme-builder) to create color schemes from images.
- Explore advanced customizations

#### Develop with content-based color

- MDC-Android – [Content-based dynamic color](https://github.com/material-components/material-components-android/blob/master/docs/theming/Color.md#content-based-dynamic-colors)

### Advanced customizations — Overview

Source: https://m3.material.io/styles/color/advanced/overview


From changing a component’s default color mapping to creating additional color roles, advanced customizations fall within one of three general actions: applying, defining, or adjusting colors.

(fig) Advanced customizations include the ability to remap colors on components; define new colors in addition to the scheme; define custom color roles; and apply dynamic color to imagery.

#### Apply colors

You can apply colors in places or ways that aren’t provided by default.

[Combine multiple color schemes](https://m3.material.io/styles/color/advanced/apply-colors#5ceacf6b-364e-4dab-83db-299c691cb21d)  
Use multiple color schemes in the same app experience, such as a baseline scheme combined with a dynamic content-based scheme.

[Map or remap colors onto UI elements](https://m3.material.io/styles/color/advanced/apply-colors#d15f5373-c03b-4282-a309-db569975d395)  
Change a component’s default color mapping, or apply colors to your own custom components.

#### Define new colors

You can add colors to your color scheme, extending the default color roles.

[Define static colors](https://m3.material.io/styles/color/advanced/define-new-colors#f13116d1-3023-44b9-b0b5-2ee07dc1af5f) (formerly known as custom colors)  
Add colors to a dynamic color scheme that stay static, which are useful for semantic colors.

[Define custom color roles](https://m3.material.io/styles/color/advanced/define-new-colors#baed14ce-4be8-46aa-8223-ace5d45af005)  
Create new color roles to use alongside the 26+ standard color roles.

#### Adjust existing colors

You can control the color algorithm’s output to adjust the appearance of dynamic colors.

[Define your own baseline scheme](https://m3.material.io/styles/color/advanced/adjust-existing-colors#c6810874-a320-4684-8df6-3869887ea49c)  
You can input colors to define your own baseline scheme.

[Define your own dynamic scheme](https://m3.material.io/styles/color/advanced/adjust-existing-colors#e169ea0f-a190-4cd1-b0d4-4e3616964129)  
You can define color algorithm rules to produce your own custom dynamic scheme.

[Use color fidelity](https://m3.material.io/styles/color/advanced/adjust-existing-colors#cb49eeb4-3bbd-4521-9612-0856c27f91ef)  
You can apply color fidelity to make scheme colors better match your input colors.

### Advanced customizations — Apply colors

Source: https://m3.material.io/styles/color/advanced/apply-colors


You can apply colors in places or ways that aren’t provided by default.

#### Combine multiple color schemes

Use multiple color schemes in the same app experience, such as a baseline scheme combined with a dynamic content-based scheme.

(fig) This smart home control screen combines two color schemes:

1. A teal content-based color scheme from the local album art, applied to media controls
2. A red user-generated color scheme from the user's wallpaper, applied to the rest of the UI

##### Why

If your app features content-rich moments, such as a media player, it can enhance a user’s experience by applying local color based on that content.

##### How

- Start from a [baseline](https://m3.material.io/styles/color/static/baseline) or [user-generated dynamic](https://m3.material.io/styles/color/dynamic/user-generated-source) scheme to create a consistent color foundation in your app.
- On top of this foundation, [map content-based color roles to contained spaces](https://m3.material.io/styles/color/dynamic/content-based-source) to emphasize or celebrate content. For example, a music app might derive color from a specific album’s artwork to build upon the personal connection to a music library.

##### Best practices

- Consider where content exists in the UI and where content-based color can enhance a person’s experience. Your existing app structure can suggest contained areas for content-based color to live.
- **Build hierarchy & direct attention:** When many types of information and actions share a screen, use content-based color to add hierarchy and draw attention to the content.
- **Link and associate content on a screen:** In lists and collections of repeated items that benefit from differentiation, content-based color can help associate related elements. This helps people quickly distinguish and pair related information, such as a list item and its associated action.
- **Immerse users in content color:** Full-screen content-based color moments can orient users within a content-driven experience, such as a media control or a purchase flow.
- **Pair content-based color with its source content:** Keep the source for content-based color visible on a screen using the content color. This way users are shown where a content-based color originates. Avoid applying content-based color in spaces where the content itself isn’t visible.
- **Limit the number of color source types per screen:** Limit a screen to two color schemes from different source types. Too many color schemes on the same screen may lead to confusion and visual disarray. For example, a baseline or user-generated color scheme can be combined with one type of on-screen content (such as album art).
- **Don’t replace semantic colors:** Use caution when applying content-based color in places where a semantic color or conventional color meaning is important for usability. For example, a common red error message or a common green positive action shouldn’t be replaced with dynamic content-based color because it may interfere with someone’s understanding.

(fig) When many types of information and actions share a screen, use content-based color to add hierarchy and draw attention to the content. This screen uses a content-based scheme sourced from the photo to draw attention to the photo editing controls.

(fig) In lists and collections of repeated items that benefit from differentiation, content-based color can help associate related elements. This helps people quickly distinguish and pair related information, such as a list item and its associated action. In this list of activities, each card is colored with a scheme sourced from its main image.

(fig) Full-screen content-based color moments can orient users within a content-driven experience, such as a media control or a purchase flow. This media control screen is colored entirely in a scheme sourced from the in-context album art.

#### Map or remap colors on UI elements

You can change a component’s default color mapping, or apply colors to your own custom components.

(fig) Colors can be remapped on existing Material components, or can be mapped as desired to custom-built components, such as this unique volume slider.

##### Why

You want to map colors to a custom-built component or change a Material Component’s default color mapping to improve its function (such as visual contrast) or style.

##### How

Choose an appropriate color role based on how the color is used (see [color roles](https://m3.material.io/styles/color/roles)) and how well the role supports your intended design expression.

###### Design

- In Figma, select the component or element you want to remap so that you see its colors in the Design panel on the right of the screen
- To remap a color, hover on the color row in the Design panel and select the **Style** icon (four dots). This opens a selection dialog.
- Search for your theme name to see the available color roles
- Select the color role that most closely matches that color's use case in the component. For example, the background color of a component could be replaced with the **surface** color role and the color for text or icons could be **on surface**. See [Color roles](https://m3.material.io/styles/color/roles) for more information on what color to use where.
- Select **Use style** to apply that color to the selected objects
- Repeat until all colors in the component have been replaced with color roles from your scheme

##### Best practices

- Make sure to use color roles that support Material's contrast requirements for the component. Any color roles starting with "on-" are guaranteed to have sufficient contrast with the corresponding color role. Other color role pairs may not meet the 4.5:1 (small text) and 3:1 (large text) Material contrast requirements.
- If you’re applying a dynamic scheme, test how the color on the component appears under different themes (such as light and dark; red, yellow, green and blue) to ensure it looks as desired in dynamic color
- Always apply color roles rather than static values or tonal palette values, as these colors will break with light and dark themes, contrast control, and other features. If the color in a role does not meet your needs, you can define new colors or adjust existing colors.

### Advanced customizations — Define new colors

Source: https://m3.material.io/styles/color/advanced/define-new-colors


You can add colors to your scheme to extend the color roles provided by Material out of the box.

#### Define static colors

*Formerly known as custom colors*

You can define additional colors in your scheme that stay static even when other colors dynamically change. When you input a desired reference color, Material will return four derived color roles that align with the design of existing roles in the color scheme.

(fig) In this example, a static green color called Success is defined in addition to the scheme, and applied to UI to indicate a success state.

1. Green source color used to generate color values for four new color roles
2. A set of new "Success" color roles derived from the source color
3. **On success container** color applied to the WiFi icon
4. **Success container**color applied to a card container

##### Why

You may need to apply static colors in your app for brand expression or to communicate semantic meaning, like a green success state. By defining these colors using the Material system, they'll work with existing Material colors and support features like dynamic color and user-controlled contrast.

##### How

Use the Material Theme Builder to input a custom color. Material will return four color roles derived from that reference color. The main color, on-main color, container color, and on-container color all follow the conventions of the accent colors in the main scheme, and can be applied to your UI according to the same relationships. See [map or remap colors on UI elements](https://m3.material.io/styles/color/advanced/apply-colors#d15f5373-c03b-4282-a309-db569975d395) for more information.

##### Best practices

- If the colors provided back from your input color appear differently than expected, you can enable or disable color fidelity. [Color fidelity](https://m3.material.io/styles/color/advanced/adjust-existing-colors#cb49eeb4-3bbd-4521-9612-0856c27f91ef) is a feature that adjusts colors’ tones to match that of your input color.
- Material provides the red Error color out of the box as an example of a static color, so you do not need to define your own static color for a semantic red color.
- If you are using static colors in a dynamic scheme, you can choose to [harmonize your static colors](https://m3.material.io/styles/color/advanced/adjust-existing-colors#1cc12e43-237b-45b9-8fe0-9a3549c1f61e) to the scheme’s primary color. This will shift your static colors’ hues slightly warmer or cooler for a more harmonious overall appearance, while retaining the semantic meaning associated with the colors’ hue range.

(fig) Static colors can be harmonized with dynamic color to appear harmonious with the overall color scheme

(fig) Colors can stay completely static and forgo harmonization if their values are tied to literal sources, such as brand colors or real-world signage

#### Define custom color roles

You can define custom color roles in addition to those already existing in the color scheme. By defining these roles the same way Material does (specifying a reference palette, starting tones, and contrast requirements), these roles can achieve colors more specific to your needs while working seamlessly with features such as user-controlled contrast.

(fig) Example of creating a custom color role:

1. The primary tonal palette, with tone 50 specified as the **primary graphic** default value
2. Color swatch showing an accessible 3:1 contrast between **primary graphic** and **p****rimary container**
3. The **primary graphic** color role is applied in a weather widget against the **primary container**

##### Why

You may need to define your own custom color roles if the scheme’s existing colors or additional static colors don’t meet your product’s needs. In particular, you should create them within the Material system to respect dynamic colors and unlock other features like user-controlled contrast.

##### How

Abstract your new color into a color role by specifying the following criteria:

- **Palettes and reference tones:** For each color role, you must assign its value from a Material palette (primary, secondary, tertiary, neutral, neutralVariant, error) and a reference tone (for example: primary70, primary80, primary90…) for both light and dark themes.
- **Color pairings:** You must specify any visual relationships in your design, such as color pairs that are used together as foreground and background, or which should retain a tone delta between them (difference in lightness or darkness).
- **Contrast:** Confirm that custom foreground and background color pairings meet [Material's contrast minimums](https://m3.material.io/foundations/designing/color-contrast).

Once the above criteria are known, you can define the new color roles in your own dynamic color object. For each color role, you may then call Material Color Utilities (MCU) to generate the color value dynamically, according to different conditions such as user theming or contrast level.

##### Best practices

Defining custom color roles should be considered only if you cannot achieve your desired colors with other Material color solutions.

### Advanced customizations — Adjust existing colors

Source: https://m3.material.io/styles/color/advanced/adjust-existing-colors


You can control the color algorithm’s output to adjust the appearance of colors within the roles provided by default.

#### Define your own baseline scheme

You can input colors to define your own baseline scheme.

##### Why

You may want to define your own baseline scheme so your app’s colors stay static (ie. does not change with dynamic color), such as to reflect your brand colors. By providing your own custom input colors for the primary, secondary, tertiary, and neutral colors in the scheme, Material will provide back the scheme’s regular color roles with values derived from your reference colors.

(fig) You can input your own colors to produce a static baseline scheme. In this example, colors from the logo are inputted to produce primary, secondary, and tertiary colors.

##### How

Using the Material Theme Builder, input your own colors for primary, secondary, tertiary, neutral, and neutral variant. The Theme Builder will generate a color scheme with values based on your inputs, and the given color roles can be used in the same manner as those from any other Material scheme.

##### Best practices

- Conventionally, primary and tertiary colors are the most visually prominent in the scheme, with tertiary appearing complementary to primary by changing its hue. Secondary, neutral variant, and neutral colors match primary in hue but are progressively less chromatic in that order. Input your colors into the appropriate category to maintain similar relationships as designed by Material, and ensure expected and visually pleasing results when those colors are mapped to components.
- If the colors provided back from your input color appear differently than expected, you can enable or disable [color fidelity](https://m3.material.io/styles/color/advanced/adjust-existing-colors#cb49eeb4-3bbd-4521-9612-0856c27f91ef). Color fidelity is a feature that adjusts colors’ tones to match that of your input color.
- If the 26+ standard color roles do not meet your needs, you may need to [define custom color roles](https://m3.material.io/styles/color/advanced/define-new-colors#baed14ce-4be8-46aa-8223-ace5d45af005).

#### Define your own dynamic scheme

You can define color algorithm rules to produce your own dynamic scheme.

##### Why

Control the appearance of your app’s colors while respecting dynamic color. For example, you may want your app to match the user’s wallpaper theme, but appear more vibrant than the default dynamic theme colors.

(fig) You can define your own dynamic scheme to reflect a user's wallpaper but control other aspects such as the colors' vibrancy.

1. Colors produced dynamically from a user's red wallpaper following default specs
2. Colors produced dynamically from the same wallpaper following custom-defined specs

##### How

- Material generates the color scheme by following hue and chroma values specified for each group of colors (primary, secondary, tertiary, neutral, and neutral variant). For more information, see [how the system works](https://m3.material.io/styles/color/system/how-the-system-works). To adjust the appearance of these colors and produce your own dynamic scheme, you must provide your own hue and chroma values for each of these color groups.
- Once these values are known, you may define your own scheme variant and call Material Color Utilities (MCU) to dynamically generate the scheme and provide color values for each role in the scheme.

##### Best practices

- Defining custom color roles should be considered only if you cannot achieve your desired colors with other Material color solutions.
- If the colors provided back from your input color appear differently than intended, you can enable or disable [color fidelity](https://m3.material.io/styles/color/advanced/adjust-existing-colors#cb49eeb4-3bbd-4521-9612-0856c27f91ef). Color fidelity is a feature that adjusts colors’ tones to match that of your input color.
- If the color roles provided by Material out of the box do not meet your needs, you may need to [define custom color roles](https://m3.material.io/styles/color/advanced/define-new-colors#baed14ce-4be8-46aa-8223-ace5d45af005) for greater control over their appearance.

#### Use color fidelity

You can apply color fidelity to make scheme colors better match your input colors.

##### Why

Material scheme colors are mapped to tones (lightness or darkness) to achieve visually accessible color pairings with sufficient contrast between foreground and background elements. In some cases, these tones can prevent colors from appearing as intended, such as when a color is too light to appear vibrant. Color fidelity is a feature that adjusts tones in these cases to produce the intended visual results without harming visual contrast.

(fig) Color fidelity adjusts tones in color roles to produce the closest match to your input color. In this example, colors are produced from a dark purple input with and without color fidelity.

1. Color roles produced with color fidelity
2. Color roles produced without color fidelity

##### How

- In the Material Theme Builder, you can toggle the “match color” option on your input color to enable or disable fidelity. By default, fidelity is enabled when you use Theme Builder to [create a custom baseline scheme](https://m3.material.io/styles/color/advanced/adjust-existing-colors#c6810874-a320-4684-8df6-3869887ea49c) or [define static colors](https://m3.material.io/styles/color/advanced/define-new-colors#f13116d1-3023-44b9-b0b5-2ee07dc1af5f).
- In code, you can flag color roles in your scheme with a boolean which will enable or disable fidelity for those colors.

##### Best practices

- When producing a custom baseline scheme or defining static colors, you may wish to toggle fidelity on and off to determine which setting better suits your desired design.
- Because color fidelity adjusts tones (lightness or darkness of colors), to ensure accessible contrast, remember to pair appropriate [colors roles](https://m3.material.io/styles/color/roles) together, such as a background color with its corresponding foreground “on” color.

#### Harmonize colors

In dynamic schemes, you can automatically adjust the hue of static colors so they look better alongside the scheme’s primary color.

##### Why

Static colors may visually clash with a  scheme’s dynamically changing colors. To improve visual harmony, Material provides an optional ‘harmonize’ function that slightly adjusts static colors to look better in dynamic schemes.

Colors that are closer in hue appear more pleasing together than colors with hues farther apart. Based on this principle, harmonization adjusts the hue of static colors, making them closer to the hue of the scheme’s primary color.

(fig) 1. In this example, the color scheme has:
   1. Green as the primary color
   2. Static blue
   3. Static orange
2. When harmonized, those static colors change hue, moving closer to the primary color on the color wheel. The resulting colors appear more visually pleasing together because they are closer in hue.

To preserve the semantic meaning of static colors (such as a red to communicate errors), harmonization limits the amount that a color’s hue can change. Harmonized colors will become warmer or cooler in hue without appearing like another type of color.

(fig) To preserve the semantic meaning of colors, harmonization limits the amount that a color’s hue can change. For example, a red color (1) can become cooler (2) or warmer (3) in hue, but will not appear purple or orange.

##### How

- In the Material Theme Builder, you can toggle harmonization on and off within the overflow menu for each static color you have added to the scheme.
- In code, use the ‘Blend’ function from [Material Color Utilities](https://github.com/material-foundation/material-color-utilities) to harmonize colors

##### Best practices

- Harmonization will adjust a static color differently depending on the scheme’s primary color, so check the results under a variety of schemes to see the range of how they can appear in dynamic color.
- Don’t harmonize colors whose appearance should stay absolutely consistent, such as brand colors.

### Color resources

Source: https://m3.material.io/styles/color/resources


##### Material Theme Builder

Material Theme Builder (MTB) is a Figma plugin that allows makers to emulate the color extraction process for dynamic color and create custom tonal schemes.

MTB creates a full tonal scheme, contrast checking, and tokens.

[Material Theme Builder plugin](https://www.figma.com/community/plugin/1034969338659738588/material-theme-builder)

(fig) Material Theme Builder lets you create color schemes and apply them to your designs.

#### Tutorials and codelabs

- [Visualizing dynamic color in your app](https://codelabs.developers.google.com/visualize-dynamic-color?hl=en#0) — Learn how to apply user-generated color to your app
- [Designing with accessible colors](https://codelabs.developers.google.com/color-contrast-accessibility?hl=en#0) — Learn how color relates to accessibility and contrast guidelines
- [Customizing Material color](https://codelabs.developers.google.com/customizing-material-color?hl=en#0) — Learn how to create a custom theme with the Material Theme Builder and apply it to design mockups in Figma
- [Build a Material color scheme](https://www.figma.com/community/file/1248805263844976008/Build-a-Material-color-scheme) — Make a M3 color scheme with the color roles used in Material Components

