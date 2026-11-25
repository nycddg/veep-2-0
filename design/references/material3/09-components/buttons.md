# Buttons

> Category on m3.material.io: **Buttons** · One-line definition (site): Buttons prompt most actions in a UI
>
> M3 Expressive status: **UPDATED in M3 Expressive** (classification from https://m3.material.io/blog/building-with-m3-expressive and the component's Overview page)
>
> **Web (Material Web Components — "currently in maintenance mode"; "Material 3 Expressive is not implemented on Web"):** site status Web = **AVAILABLE**, Web: Expressive = **UNAVAILABLE**; material-web repo: `docs/components/button.md`. Details: [../13-repositories-implementation.md](../13-repositories-implementation.md)
>
> Sources: [Overview](https://m3.material.io/components/buttons/overview) · [Specs](https://m3.material.io/components/buttons/specs) · [Guidelines](https://m3.material.io/components/buttons/guidelines) · [Accessibility](https://m3.material.io/components/buttons/accessibility)
>
> Site content timestamp: 2026-07-24T06:19:49.216Z · Accessed 2026-10-09

This file reorganizes Material's own text. Sections 1–4 are extracted verbatim from the Overview/Specs/Guidelines/Accessibility tabs; nothing is paraphrased. Image-only examples are represented by their on-site captions (“(fig)”). For the interactive token tables, resolved values are linked in §3.

## 1. Key points (verbatim from Overview)

- Two variants: default and toggle
- Can contain an optional leading icon
- Five color options: elevated, filled, tonal, outlined, and text
- Five size recommendations: extra small, small, medium, large, and extra large
- Two shape options: round and square
- Keep labels concise and use sentence case

## 2. Status, versioning & M3 Expressive changes (verbatim)

## M3 Expressive update

**May 2025**

Buttons now have a wider variety of shapes and sizes, toggle functionality, and can change shape when selected. [More on M3 Expressive](https://m3.material.io/blog/building-with-m3-expressive)

Variants and naming:

- Default and toggle (selection)
- Color styles are now configurations (elevated, filled, tonal, outlined, text)

Shapes:

- Round and square
- Shape morphs when pressed
- Shape morphs when selected

Sizes:

- Extra small
- Small (existing, default)
- Medium
- Large
- Extra large

New padding for **small** buttons:

- 16dp (recommended to match padding of new sizes)
- 24dp (no longer recommended)

(fig) 1. Five sizes
2. Toggle (selection)
3. Two shapes
4. Two small padding widths

## Differences from M2

- Color: New color mappings and compatibility with dynamic color. Icons and labels now share the same color. Neutral text button is no longer recommended.
- Icons: Standard size for leading and trailing icons is now 20dp
- Shape: Fully-rounded corner radius and additional height options

(fig) M2: Buttons have a height of 36dp and slightly rounded corner radius

(fig) M3: Default buttons are taller at 40dp and have fully rounded corners

## Implementation links (all platforms; site status tables + verified repo paths)

| Platform | Site status | Link |
|---|---|---|
| Web | AVAILABLE | [https://github.com/material-components/material-web/blob/main/docs/components/button.md](https://github.com/material-components/material-web/blob/main/docs/components/button.md) |
| Web: Expressive | UNAVAILABLE | — |
| Jetpack Compose | AVAILABLE | [https://developer.android.com/develop/ui/compose/components/button](https://developer.android.com/develop/ui/compose/components/button) |
| Jetpack Compose: Expressive | AVAILABLE | [https://developer.android.com/reference/kotlin/androidx/compose/material3/package-summary#Button(kotlin.Function0,androidx.compose.ui.Modifier,kotlin.Boolean,androidx.compose.ui.graphics.Shape,androidx.compose.material3.ButtonColors,androidx.compose.material3.ButtonElevation,androidx.compose.foundation.BorderStroke,androidx.compose.foundation.layout.PaddingValues,androidx.compose.foundation.interaction.MutableInteractionSource,kotlin.Function1)](https://developer.android.com/reference/kotlin/androidx/compose/material3/package-summary#Button(kotlin.Function0,androidx.compose.ui.Modifier,kotlin.Boolean,androidx.compose.ui.graphics.Shape,androidx.compose.material3.ButtonColors,androidx.compose.material3.ButtonElevation,androidx.compose.foundation.BorderStroke,androidx.compose.foundation.layout.PaddingValues,androidx.compose.foundation.interaction.MutableInteractionSource,kotlin.Function1)) |
| Android Views (MDC-Android) | AVAILABLE | [https://github.com/material-components/material-components-android/blob/master/docs/components/Button.md](https://github.com/material-components/material-components-android/blob/master/docs/components/Button.md) |
| Android Views (MDC-Android): Expressive | AVAILABLE | [https://github.com/material-components/material-components-android/blob/master/docs/components/Button.md](https://github.com/material-components/material-components-android/blob/master/docs/components/Button.md) |
| Flutter | AVAILABLE | [https://api.flutter.dev/flutter/material/ThemeData/useMaterial3.html](https://api.flutter.dev/flutter/material/ThemeData/useMaterial3.html) |

Source repositories:
- **Web (material-web) source:** [material-web/button/](https://github.com/material-components/material-web/tree/main/button) · docs: [docs/components](https://github.com/material-components/material-web/tree/main/docs/components)
- **Jetpack Compose:** library source [androidx/androidx compose/material3/material3](https://github.com/androidx/androidx/tree/androidx-main/compose/material3/material3) (mirror of android.googlesource.com).
- **Android Views (MDC-Android):** [docs/components](https://github.com/material-components/material-components-android/tree/master/docs/components) (per-component doc linked in the table above where the site gives one).
- **Flutter:** [flutter/flutter packages/flutter/lib/src/material](https://github.com/flutter/flutter/tree/master/packages/flutter/lib/src/material). "M3 Expressive is not available on Flutter" (develop/flutter).

## 3. Token sets used on the Specs tab

| Token set (as shown on site) | Token-set name | Status | Resolved values |
|---|---|---|---|
| Button - Color - Elevated | `md.comp.button.elevated` | current | [../tokens/components/button.elevated.md](../tokens/components/button.elevated.md) |
| Button - Color - Filled | `md.comp.button.filled` | current | [../tokens/components/button.filled.md](../tokens/components/button.filled.md) |
| Button - Color - Tonal | `md.comp.button.tonal` | current | [../tokens/components/button.tonal.md](../tokens/components/button.tonal.md) |
| Button - Color - Outlined | `md.comp.button.outlined` | current | [../tokens/components/button.outlined.md](../tokens/components/button.outlined.md) |
| Button - Color - Text | `md.comp.button.text` | current | [../tokens/components/button.text.md](../tokens/components/button.text.md) |
| Button - Size - Xsmall | `md.comp.button.xsmall` | current | [../tokens/components/button.xsmall.md](../tokens/components/button.xsmall.md) |
| Button - Size - Small | `md.comp.button.small` | current | [../tokens/components/button.small.md](../tokens/components/button.small.md) |
| Button - Size - Medium | `md.comp.button.medium` | current | [../tokens/components/button.medium.md](../tokens/components/button.medium.md) |
| Button - Size - Large | `md.comp.button.large` | current | [../tokens/components/button.large.md](../tokens/components/button.large.md) |
| Button - Size - Xlarge | `md.comp.button.xlarge` | current | [../tokens/components/button.xlarge.md](../tokens/components/button.xlarge.md) |
| [Deprecated] Button - Elevated | `md.comp.elevated-button` | DEPRECATED | [../tokens/components/elevated-button.md](../tokens/components/elevated-button.md) |
| [Deprecated] Button - Filled | `md.comp.filled-button` | DEPRECATED | [../tokens/components/filled-button.md](../tokens/components/filled-button.md) |
| [Deprecated] Button - Tonal | `md.comp.filled-tonal-button` | DEPRECATED | [../tokens/components/filled-tonal-button.md](../tokens/components/filled-tonal-button.md) |
| [Deprecated] Button – Outlined | `md.comp.outlined-button` | DEPRECATED | [../tokens/components/outlined-button.md](../tokens/components/outlined-button.md) |
| [Deprecated] Button - Text | `md.comp.text-button` | DEPRECATED | [../tokens/components/text-button.md](../tokens/components/text-button.md) |

## 4. Rule index — every Do / Don't / Caution on the component's pages (verbatim captions)

- (Guidelines) **[DO]** (fig) Use buttons for discrete actions
- (Guidelines) **[DON'T]** (fig) Don’t clutter your UI with too many buttons. Consider presenting low-priority actions in overflow menus or as icon buttons.
- (Guidelines) **[DO]** (fig) A button container’s width is dynamically set to fit its label text
- (Guidelines) **[DO]** (fig) Button container width can be responsive, which allows it to stretch horizontally
- (Guidelines) **[DON'T]** (fig) A button container’s width shouldn’t be narrower than its label text
- (Guidelines) **[DO]** (fig) When using toggleable buttons, keep the label character count a similar length for both states
- (Guidelines) **[DON'T]** (fig) The label length shouldn’t change dramatically to be longer or shorter
- (Guidelines) **[DO]** (fig) Use sentence case for button label text, capitalizing the first word and proper nouns
- (Guidelines) **[DON'T]** (fig) Don’t wrap text. For maximum legibility, label text should remain on a single line.
- (Guidelines) **[CAUTION]** (fig) The outlined button style is very similar to chips. Consider using a filled or tonal button instead.
- (Guidelines) **[DO]** (fig) A button’s width dynamically adjusts to the label text
- (Guidelines) **[DON'T]** (fig) Avoid setting a fixed width smaller than the label text
- (Guidelines) **[DO]** (fig) Place the icon to the left of the label in buttons with text in left-to-right languages
- (Guidelines) **[DO]** (fig) Place the icon to the right of the label in buttons with text in right-to-left languages
- (Guidelines) **[DO]** (fig) Use icons that clearly communicate their meaning
- (Guidelines) **[DON'T]** (fig) Don’t vertically align an icon and text in the center of a button
- (Guidelines) **[DON'T]** (fig) Don’t use two icons in the same button
- (Guidelines) **[CAUTION]** (fig) Higher elevation increases the emphasis of a button
- (Guidelines) **[DO]** (fig) Outlined buttons can be used on backgrounds with a color gradient
- (Guidelines) **[CAUTION]** (fig) Use caution when placing outlined buttons on top of images. Customizing the button to have a contrasting container fill can help ensure legibility of label text. Or, use a filled button instead.
- (Guidelines) **[DO]** (fig) Keep the icon and label text grouped and centered
- (Guidelines) **[DON'T]** (fig) Don't ungroup the icon and label text or let them anchor to opposite sides of the button
- (Guidelines) **[DON'T]** (fig) Don’t allow the button to stretch in a way that creates long, flat buttons with very little content inside
- (Accessibility) **[CAUTION]** (fig) Avoid excessive text wrapping or truncation by choosing concise strings

## 5. Full page text by tab (verbatim digest)

### 5.Overview — Overview

Source: https://m3.material.io/components/buttons/overview


- Two variants: default and toggle
- Can contain an optional leading icon
- Five color options: elevated, filled, tonal, outlined, and text
- Five size recommendations: extra small, small, medium, large, and extra large
- Two shape options: round and square
- Keep labels concise and use sentence case

(fig) 1. Elevated button
2. Filled button
3. Filled tonal button
4. Outlined button
5. Text button

#### Availability & resources

**Implementation status — Buttons** (source: m3.material.io status table, data `designSystems/030656e0a1083ef1/components/4c66f2c4b2f2cb18`)

| Resource | Type | Status | Link |
|---|---|---|---|
| Design Kit (Figma) | FIGMA | AVAILABLE | https://www.figma.com/community/file/1035203688168086460 |
| Flutter | FLUTTER_IMPLEMENTATION | AVAILABLE | https://api.flutter.dev/flutter/material/ThemeData/useMaterial3.html |
| Jetpack Compose | JETPACK_IMPLEMENTATION | AVAILABLE | https://developer.android.com/develop/ui/compose/components/button |
| Jetpack Compose: Expressive | JETPACK_IMPLEMENTATION | AVAILABLE | https://developer.android.com/reference/kotlin/androidx/compose/material3/package-summary#Button(kotlin.Function0,androidx.compose.ui.Modifier,kotlin.Boolean,androidx.compose.ui.graphics.Shape,androidx.compose.material3.ButtonColors,androidx.compose.material3.ButtonElevation,androidx.compose.foundation.BorderStroke,androidx.compose.foundation.layout.PaddingValues,androidx.compose.foundation.interaction.MutableInteractionSource,kotlin.Function1) |
| Android Views (MDC-Android)  | ANDROID_IMPLEMENTATION | AVAILABLE | https://github.com/material-components/material-components-android/blob/master/docs/components/Button.md |
| Android Views (MDC-Android): Expressive | ANDROID_IMPLEMENTATION | AVAILABLE | https://github.com/material-components/material-components-android/blob/master/docs/components/Button.md |
| Web | LIT_IMPLEMENTATION | AVAILABLE | https://github.com/material-components/material-web/blob/main/docs/components/button.md |
| Web: Expressive | LIT_IMPLEMENTATION | UNAVAILABLE |  |

#### M3 Expressive update

**May 2025**

Buttons now have a wider variety of shapes and sizes, toggle functionality, and can change shape when selected. [More on M3 Expressive](https://m3.material.io/blog/building-with-m3-expressive)

Variants and naming:

- Default and toggle (selection)
- Color styles are now configurations (elevated, filled, tonal, outlined, text)

Shapes:

- Round and square
- Shape morphs when pressed
- Shape morphs when selected

Sizes:

- Extra small
- Small (existing, default)
- Medium
- Large
- Extra large

New padding for **small** buttons:

- 16dp (recommended to match padding of new sizes)
- 24dp (no longer recommended)

(fig) 1. Five sizes
2. Toggle (selection)
3. Two shapes
4. Two small padding widths

#### Differences from M2

- Color: New color mappings and compatibility with dynamic color. Icons and labels now share the same color. Neutral text button is no longer recommended.
- Icons: Standard size for leading and trailing icons is now 20dp
- Shape: Fully-rounded corner radius and additional height options

(fig) M2: Buttons have a height of 36dp and slightly rounded corner radius

(fig) M3: Default buttons are taller at 40dp and have fully rounded corners

### 5.Specs — Specs

Source: https://m3.material.io/components/buttons/specs


#### Variants

(fig) 1. Default button
2. Toggle button

| Variant | M3 | M3 Expressive |
| --- | --- | --- |
| Default | Available | Available |
| Toggle (selection) | -- | Available |

#### Configurations

(fig) 1. Size
2. Shape
3. Color
4. Small button padding

| Category | Configuration | M3 | M3 Expressive |
| --- | --- | --- | --- |
| Size | Small (default) | Available | Available |
| XS, M, L, XL | -- | Available |
| Shape | Round (default) | Available | Available |
| Square | -- | Available |
| Color | Elevated, filled (default), tonal, outlined, text | Available | Available |
| Small button padding | 24dp | Available | Not recommended.  Use 16dp |
| 16dp | -- | Available |

#### Tokens & specs

Use the table's menu to select a token set. Button token sets are separated into common tokens, color, and size. [View baseline tokens](https://m3.material.io/components/buttons/specs#c305d304-a6c0-466a-a48c-8d0718a29ae2)

_[Interactive TOKEN_TABLE module: resource `designSystems/20543ce18892f7d9/components/1c4257f8804f9478`; token sets: Button - Color - Elevated, Button - Color - Filled, Button - Color - Tonal, Button - Color - Outlined, Button - Color - Text, Button - Size - Xsmall, Button - Size - Small, Button - Size - Medium, Button - Size - Large, Button - Size - Xlarge. Resolved values are in the tokens/ folder of this guide.]_

#### Anatomy

(fig) 1. Container
2. Label text
3. Icon (optional)

#### Color

Color values are implemented through design tokens. For designers, this means working with color values that correspond with tokens. In implementation, a color value will be a token that references a value.

- There are five built-in button color styles: elevated, filled, tonal, outlined, and text
- The default and toggle buttons use different colors
- Toggle buttons don’t use the text style

star

Note:

These color roles were chosen to create design coherence and familiarity. Other color roles can be used as long as the container and text have a 3:1 contrast ratio. For example, tertiary and on tertiary.

(fig) A. Elevated, B. Filled, C. Tonal, D. Outlined, E. Text

1. Default
2. Toggle: unselected
3. Toggle: selected

|  | 1. Default | 2. Toggle unselected | 3. Toggle selected |
| --- | --- | --- | --- |
| Elevated container  Elevated icon & label | Surface container low  Primary | Surface container low  Primary | Primary  On primary |
| Filled container  Filled icon & label | Primary On primary | Surface container  On surface variant | Primary  On primary |
| Tonal container  Tonal icon & label | Secondary container  On secondary container | Secondary container  On secondary container | Secondary  On secondary |
| Outlined container  Outlined icon & label | Outline variant (outline)  On surface variant | Outline variant (outline)  On surface variant | Inverse surface  Inverse on surface |
| Text icon & label | Primary | -- | -- |

#### States

States are visual representations used to communicate the status of a component or interactive element.

##### Elevated button states

The elevated button style has an elevation of 1 by default and 0 when disabled.

###### Default

(fig) 1. Enabled
2. Disabled
3. Hovered
4. Focused
5. Pressed

###### Toggle

(fig) A. Unselected, B. Selected

1. Enabled
2. Disabled
3. Hovered
4. Focused
5. Pressed

##### Filled button states

###### Default

(fig) 1. Enabled
2. Disabled
3. Hovered
4. Focused
5. Pressed

###### Toggle

(fig) A. Unselected, B. Selected

1. Enabled
2. Disabled
3. Hovered
4. Focused
5. Pressed

##### Tonal button states

###### Default

(fig) 1. Enabled
2. Disabled
3. Hovered
4. Focused
5. Pressed

###### Toggle

(fig) A. Unselected, B. Selected

1. Enabled
2. Disabled
3. Hovered
4. Focused
5. Pressed

##### Outlined button states

The outlined button’s container fill is invisible at rest, but the opacity and state layers behave the same as other button styles when disabled, hovered, focused, or pressed.

###### Default

(fig) 1. Enabled
2. Disabled
3. Hovered
4. Focused
5. Pressed

###### Toggle

(fig) 1. Enabled
2. Disabled
3. Hovered
4. Focused
5. Pressed

##### Text button style states

The text button’s container is invisible at rest, but the opacity and state layers behave the same as other button styles when disabled, hovered, focused, or pressed. There is no toggle text button.

(fig) 1. Enabled
2. Disabled
3. Hovered
4. Focused
5. Pressed

#### Shape morph

##### Pressed state

When pressed, buttons can morph to become more square. Both round and square buttons should have the same pressed shape.

The corner radius value differs for each button size. [See full button corner measurements](https://m3.material.io/components/buttons/specs#b1f39738-6f3a-409b-8f08-4cab6d78d756)

(fig) A. Round button, B. Square button

1. Enabled
2. Hovered
3. Pressed

##### When selected

In addition to changing shape when pressed, toggle buttons also change the resting shape from round (unselected) to square (selected).

If the resting unselected shape is square, the selected shape should be round.

(fig) A. Round button, B. Square button

1. Enabled
2. Hovered
3. Pressed
4. Selected

#### Measurements

(fig) Padding and size measurements of each button size

1. Extra small
2. Small
3. Medium
4. Large
5. Extra large

##### Target areas

Extra small and small icon buttons must have a target size of 48x48dp or larger to be accessible.

(fig) A. Extra small  B. Small

1. Round button
2. Button with icon
3. Square button

##### Corner sizes

|  | XS | S | M | L | XL |
| --- | --- | --- | --- | --- | --- |
| A. Round button | Full | Full | Full | Full | Full |
| B. Square button | 12dp | 12dp | 16dp | 28dp | 28dp |
| C. Pressed state | 8dp | 8dp | 12dp | 16dp | 16dp |

#### Baseline tokens

Use the table's menu to switch token sets. The baseline button token sets are organized by color.

_[Interactive TOKEN_TABLE module: resource `designSystems/20543ce18892f7d9/components/1c4257f8804f9478`; token sets: [Deprecated] Button - Elevated, [Deprecated] Button - Filled, [Deprecated] Button - Tonal, [Deprecated] Button – Outlined, [Deprecated] Button - Text. Resolved values are in the tokens/ folder of this guide.]_

### 5.Guidelines — Guidelines

Source: https://m3.material.io/components/buttons/guidelines


(fig) Buttons and icon buttons come in many shapes, styles, and sizes

#### Usage

Buttons communicate actions that people can take. They are typically placed throughout the UI, in places like:

- Dialogs
- Modal windows
- Forms
- Cards
- Toolbars

They can also be placed within standard button groups.

(fig) Use visually-prominent filled buttons for the most important actions

Buttons are just one option for representing actions in a product and shouldn’t be overused. Too many buttons on a screen can disrupt the visual hierarchy.  
  
Consider placing additional actions in a navigation rail, set of chips, text links, or icon buttons.

**[DO]** (fig) Use buttons for discrete actions

**[DON'T]** (fig) Don’t clutter your UI with too many buttons. Consider presenting low-priority actions in overflow menus or as icon buttons.

**[DO]** (fig) A button container’s width is dynamically set to fit its label text

**[DO]** (fig) Button container width can be responsive, which allows it to stretch horizontally

**[DON'T]** (fig) A button container’s width shouldn’t be narrower than its label text

(fig) A: Default button; B: Toggle (unselected); C: Toggle (selected) for five button styles, in order of emphasis:

1. Elevated button
2. Filled button
3. Filled tonal button
4. Outlined button
5. Text button

A button group is a collection of buttons that relate to each other and can respond to one another. Both buttons and icon buttons can be used inside a button group.  
  
In some cases, there are primary and secondary actions within a button group. Buttons with primary actions should have a higher visual emphasis through size, color, or shape.

[More on button groups](https://m3.material.io/components/button-groups/overview)

(fig) Different sized buttons in a button group help emphasize the main action from secondary actions

#### Toggle buttons

Toggle buttons should be used for binary selections, such as **Save** or **Favorite**. When toggle buttons are pressed, they can change color, shape, and labels.

Toggle buttons should use an outlined icon when unselected, and a filled version of the icon when selected. If a filled version doesn’t exist, increase the weight instead.

By default, toggle buttons change from round to square when selected.

(fig) Use toggle buttons for binary actions

If the label changes on selected or unselected states, be mindful of the character count. Changing the label significantly is disruptive to the user and the page layout.

**[DO]** (fig) When using toggleable buttons, keep the label character count a similar length for both states

**[DON'T]** (fig) The label length shouldn’t change dramatically to be longer or shorter

#### Anatomy

(fig) 1. Label text
2. Container
3. Icon (optional)

##### Label text

Label text is the most important element of a button. It describes the action that will occur if someone taps a button. It should be very brief, ideally 1–3 words.

Use sentence case, which only capitalizes the first word and proper nouns. This allows the text to distinguish proper nouns, for example: **Book with Flights**, not **BOOK WITH FLIGHTS**.

Don’t truncate or wrap label text. It should always be fully visible on a single line.

**[DO]** (fig) Use sentence case for button label text, capitalizing the first word and proper nouns

**[DON'T]** (fig) Don’t wrap text. For maximum legibility, label text should remain on a single line.

Buttons with the **outlined** and **text** color style depend on the colors to be recognizable from other text and elements. Use caution when putting these buttons next to visually similar elements, such as chips or large text.

**[CAUTION]** (fig) The outlined button style is very similar to chips. Consider using a filled or tonal button instead.

##### Container

Button containers hold the label text and optional icon. Buttons with the **text** color style have a visible container only when hovered, focused, or pressed.

Buttons with a round shape have containers with fully rounded corners.

(fig) Round buttons have containers with fully rounded corners

Buttons with a square shape have containers with more subtle rounding that changes based on button size.

(fig) Square buttons have square containers and change radius as the button size changes

**[DO]** (fig) A button’s width dynamically adjusts to the label text

**[DON'T]** (fig) Avoid setting a fixed width smaller than the label text

##### Icon (optional)

Icons visually communicate the button’s action and help draw attention. They should be placed on the leading side of the button, before the label text.

**[DO]** (fig) Place the icon to the left of the label in buttons with text in left-to-right languages

**[DO]** (fig) Place the icon to the right of the label in buttons with text in right-to-left languages

**[DO]** (fig) Use icons that clearly communicate their meaning

**[DON'T]** (fig) Don’t vertically align an icon and text in the center of a button

**[DON'T]** (fig) Don’t use two icons in the same button

#### Color styles

##### Elevated style

The **elevated** button style is the same as the tonal button, but with a shadow.

To avoid overusing shadows, use the elevated style only when absolutely necessary, such as when the button requires visual separation from a visually prominent background.

(fig) Elevated buttons provide separation from a visually prominent background

Buttons at higher elevations typically have more emphasis in a design, and should be used sparingly. For high emphasis, consider the filled style instead.

**[CAUTION]** (fig) Higher elevation increases the emphasis of a button

##### Filled style

The **filled** button style has the most visual impact after the FAB, and should be used for important, final actions that complete a flow, like **Save**, **Join now**, or **Confirm**.

(fig) Filled buttons have high visual impact when used for important actions

Since they have such strong emphasis, the filled style should be used sparingly, ideally for only one action on a page.

In some cases, filled buttons can use tertiary colors.

(fig) Filled buttons can be responsive to the layout grid and help emphasize main actions

##### Tonal style

The **tonal** button style is useful in contexts where a lower-priority button requires slightly more emphasis than an outline would give, such as **Next** in an onboarding flow. Tonal buttons use the secondary color mapping.

(fig) The tonal style has less emphasis than filled or emphasis

##### Outlined style

The **outlined** style is ideal for medium-emphasis buttons which contain actions that are important, but aren’t the primary action in a product.

Outlined buttons pair well with filled buttons to indicate alternative, secondary actions.

(fig) Outlined buttons contain less important supporting actions

Outlined buttons display a stroke around the button container, and have no fill by default.   
  
They should be placed on simple backgrounds, not visually prominent backgrounds such as images or videos.

(fig) Outlined buttons display a stroke around the button container

**[DO]** (fig) Outlined buttons can be used on backgrounds with a color gradient

**[CAUTION]** (fig) Use caution when placing outlined buttons on top of images. Customizing the button to have a contrasting container fill can help ensure legibility of label text. Or, use a filled button instead.

##### Text style

The text button style should be used for the lowest priority actions, especially when presenting multiple options.

They should be placed on simple backgrounds, not visually prominent backgrounds such as images or videos. The container isn’t visible until someone interacts with the button.

Don’t underline the text button. Use hyperlinked body text instead to emphasize links. [More on hyperlinks](https://m3.material.io/styles/typography/applying-type#24856f70-f759-45df-a06c-92018f286083)

(fig) Use text buttons for the lowest priority actions

Text buttons are often placed within components such as cards, dialogs, and snackbars. Since text buttons don’t have a visible container in their default state, they don’t distract from nearby content.

However, since there’s no container, the label text color must always be recognizable from non-button text and elements.

(fig) Text button in a snackbar

(fig) Text button against an image background

In cards, text buttons help maintain an emphasis on card content.

(fig) Text button in a card

Dialogs use text buttons because the absence of a container helps unify the action with the dialog text.

Align text buttons to the trailing edge of dialogs, on the right for left-to-right languages and on the left for right-to-left languages.

(fig) Text buttons in a dialog

#### Adaptive design

##### Resizing

When scaling layouts for large screen devices, buttons can adapt their visual presentation, size, alignment, and arrangement to fit different contexts and user needs.

Choose the best button position based on screen size.

(fig) Filled buttons are end-aligned below flight information in a compact window

(fig) Filled buttons are start-aligned beside flight information in a large window

The icon and label text in a button stay centered and grouped as the button's width changes.

**[DO]** (fig) Keep the icon and label text grouped and centered

**[DON'T]** (fig) Don't ungroup the icon and label text or let them anchor to opposite sides of the button

Buttons can be customized to change size and scaling behavior across different breakpoints.

To avoid creating very long buttons in large windows, constrain button width or place buttons beside other elements.

**[DON'T]** (fig) Don’t allow the button to stretch in a way that creates long, flat buttons with very little content inside

##### Presentation

The size and placement of buttons can change as parent containers, such as cards, adapt for larger screens.

Keep items, including buttons, in the same order between large and small screens to provide a consistent experience for screen readers and keyboard navigation.

(fig) Buttons can move in the layout, but elements should remain in the same order

### 5.Accessibility — Accessibility

Source: https://m3.material.io/components/buttons/accessibility


#### Use cases

People should be able to do the following with assistive technology:

- Use a button to perform an action
- Navigate to and activate a button

#### Interaction & style

##### Color contrast

Enabled buttons need a 3:1 contrast ratio with the background to meet accessibility best practices.

This is measured from the container for elevated, filled, and tonal button styles, and the label text for outlined and text button styles.

(fig) Higher contrast helps differentiate elements

##### 200% text size

Avoid excessive text wrapping or truncation by choosing concise strings.

On Android, button labels should be kept concise enough to fit within two lines after the text size is increased to 200%. If a button label exceeds this limit and gets truncated, provide an alternative way to access the full content in a single tap.

**[CAUTION]** (fig) Avoid excessive text wrapping or truncation by choosing concise strings

##### Rapid clicks

On the web, you can use a modified motion curve to avoid resonant effects from overlapping animations. This provides a smoother experience for interactions where you anticipate multiple clicks or taps in succession.

(fig) Use the modified motion curve if rapid click or pointer interactions are expected

#### Keyboard navigation

| Keys | Actions |
| --- | --- |
| Tab | Navigate to a button |
| Space or Enter | Activate a button |

#### Labeling elements

The accessibility label for a button should match the visible label text on the button such as **Done**, **Send**, or **Reply**.

It can contain extra contextual information if necessary.

