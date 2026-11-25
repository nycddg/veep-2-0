# Icon buttons

> Category on m3.material.io: **Buttons** · One-line definition (site): Icon buttons help people take actions with a single tap
>
> M3 Expressive status: **UPDATED in M3 Expressive** (classification from https://m3.material.io/blog/building-with-m3-expressive and the component's Overview page)
>
> **Web (Material Web Components — "currently in maintenance mode"; "Material 3 Expressive is not implemented on Web"):** site status Web = **AVAILABLE**, Web: Expressive = **UNAVAILABLE**; material-web repo: `docs/components/icon-button.md`. Details: [../13-repositories-implementation.md](../13-repositories-implementation.md)
>
> Sources: [Overview](https://m3.material.io/components/icon-buttons/overview) · [Specs](https://m3.material.io/components/icon-buttons/specs) · [Guidelines](https://m3.material.io/components/icon-buttons/guidelines) · [Accessibility](https://m3.material.io/components/icon-buttons/accessibility)
>
> Site content timestamp: 2026-07-17T07:05:22.141Z · Accessed 2026-10-09

This file reorganizes Material's own text. Sections 1–4 are extracted verbatim from the Overview/Specs/Guidelines/Accessibility tabs; nothing is paraphrased. Image-only examples are represented by their on-site captions (“(fig)”). For the interactive token tables, resolved values are linked in §3.

## 1. Key points (verbatim from Overview)

- Icon buttons must use a system icon with a clear meaning
- Two variants: default and toggle
- Many configurations: Color, size, width, and shape
- On web, display a tooltip describing the action while hovering
- In toggle buttons, use the outlined style of an icon for the unselected state, and the filled style for the selected state

## 2. Status, versioning & M3 Expressive changes (verbatim)

## M3 Expressive update

**May 2025**

Icon buttons now have a wider variety of shapes and sizes, changing shape when selected. When placed in button groups, icon buttons interact with each other when pressed. [More on M3 Expressive](https://m3.material.io/blog/building-with-m3-expressive)

Variants and naming:

- Default and toggle (selection)
- Color styles are now configurations. (filled, tonal, outlined, standard)

Shapes:

- Round and square options
- Shape morphs when pressed
- Shape morphs when selected

Sizes:

- Extra small
- Small (default)
- Medium
- Large
- Extra large

Widths:

- Narrow
- Default
- Wide

(fig) 1. Five sizes
2. Two shapes
3. Three widths

## Differences from M2

- **Color:** New color mappings and compatibility with dynamic color
- **Variants and naming:** Icon buttons were called toggle buttons. There are now two variants of icon buttons: default and toggle.

(fig) 1. Default icon buttons
2. Toggle icon buttons

## Implementation links (all platforms; site status tables + verified repo paths)

| Platform | Site status | Link |
|---|---|---|
| Web | AVAILABLE | [https://github.com/material-components/material-web/blob/main/docs/components/icon-button.md](https://github.com/material-components/material-web/blob/main/docs/components/icon-button.md) |
| Web: Expressive | UNAVAILABLE | — |
| Jetpack Compose | AVAILABLE | [https://developer.android.com/develop/ui/compose/components/icon-button](https://developer.android.com/develop/ui/compose/components/icon-button) |
| Jetpack Compose: Expressive | AVAILABLE | [https://developer.android.com/reference/kotlin/androidx/compose/material3/package-summary#IconButton(kotlin.Function0,androidx.compose.ui.Modifier,kotlin.Boolean,androidx.compose.material3.IconButtonColors,androidx.compose.foundation.interaction.MutableInteractionSource,androidx.compose.ui.graphics.Shape,kotlin.Function0)](https://developer.android.com/reference/kotlin/androidx/compose/material3/package-summary#IconButton(kotlin.Function0,androidx.compose.ui.Modifier,kotlin.Boolean,androidx.compose.material3.IconButtonColors,androidx.compose.foundation.interaction.MutableInteractionSource,androidx.compose.ui.graphics.Shape,kotlin.Function0)) |
| Android Views (MDC-Android) | AVAILABLE | [https://github.com/material-components/material-components-android/blob/master/docs/components/Button.md#icon-button](https://github.com/material-components/material-components-android/blob/master/docs/components/Button.md#icon-button) |
| Android Views (MDC-Android): Expressive | AVAILABLE | [https://github.com/material-components/material-components-android/blob/master/docs/components/Button.md#icon-button](https://github.com/material-components/material-components-android/blob/master/docs/components/Button.md#icon-button) |
| Flutter | AVAILABLE | [https://api.flutter.dev/flutter/material/IconButton-class.html](https://api.flutter.dev/flutter/material/IconButton-class.html) |

Source repositories:
- **Web (material-web) source:** [material-web/iconbutton/](https://github.com/material-components/material-web/tree/main/iconbutton) · docs: [docs/components](https://github.com/material-components/material-web/tree/main/docs/components)
- **Jetpack Compose:** library source [androidx/androidx compose/material3/material3](https://github.com/androidx/androidx/tree/androidx-main/compose/material3/material3) (mirror of android.googlesource.com).
- **Android Views (MDC-Android):** [docs/components](https://github.com/material-components/material-components-android/tree/master/docs/components) (per-component doc linked in the table above where the site gives one).
- **Flutter:** [flutter/flutter packages/flutter/lib/src/material](https://github.com/flutter/flutter/tree/master/packages/flutter/lib/src/material). "M3 Expressive is not available on Flutter" (develop/flutter).

## 3. Token sets used on the Specs tab

| Token set (as shown on site) | Token-set name | Status | Resolved values |
|---|---|---|---|
| Icon button | (not found in data) | | |
| Icon button - Color - Filled | `md.comp.icon-button.filled` | current | [../tokens/components/icon-button.filled.md](../tokens/components/icon-button.filled.md) |
| Icon button - Color - Tonal | `md.comp.icon-button.tonal` | current | [../tokens/components/icon-button.tonal.md](../tokens/components/icon-button.tonal.md) |
| Icon button - Color - Outlined | `md.comp.icon-button.outlined` | current | [../tokens/components/icon-button.outlined.md](../tokens/components/icon-button.outlined.md) |
| Icon button - Color - Standard | `md.comp.icon-button.standard` | current | [../tokens/components/icon-button.standard.md](../tokens/components/icon-button.standard.md) |
| Icon button - Size - Xsmall | `md.comp.icon-button.xsmall` | current | [../tokens/components/icon-button.xsmall.md](../tokens/components/icon-button.xsmall.md) |
| Icon button - Size - Small | `md.comp.icon-button.small` | current | [../tokens/components/icon-button.small.md](../tokens/components/icon-button.small.md) |
| Icon button - Size - Medium | `md.comp.icon-button.medium` | current | [../tokens/components/icon-button.medium.md](../tokens/components/icon-button.medium.md) |
| Icon button - Size - Large | `md.comp.icon-button.large` | current | [../tokens/components/icon-button.large.md](../tokens/components/icon-button.large.md) |
| Icon button - Size - Xlarge | `md.comp.icon-button.xlarge` | current | [../tokens/components/icon-button.xlarge.md](../tokens/components/icon-button.xlarge.md) |
| [Deprecated] Icon button - Filled | `md.comp.filled-icon-button` | DEPRECATED | [../tokens/components/filled-icon-button.md](../tokens/components/filled-icon-button.md) |
| [Deprecated] Icon button - Tonal | `md.comp.filled-tonal-icon-button` | DEPRECATED | [../tokens/components/filled-tonal-icon-button.md](../tokens/components/filled-tonal-icon-button.md) |
| [Deprecated] Icon button - Outlined | `md.outlined-icon-button` | DEPRECATED | [../tokens/components/outlined-icon-button.md](../tokens/components/outlined-icon-button.md) |

## 4. Rule index — every Do / Don't / Caution on the component's pages (verbatim captions)

- (Guidelines) **[DO]** (fig) Use icons with a background to make them easy to see on any surface
- (Guidelines) **[DO]** (fig) When mixing button variants, use color styles to make the primary action clear
- (Guidelines) **[DO]** (fig) Use toggle icon buttons when the icon can be selected
- (Guidelines) **[DON'T]** (fig) Don’t use toggle icon buttons for actions that don’t have a selected state, such as an icon button for an overflow menu
- (Accessibility) **[DO]** (fig) Icon buttons should have a 3:1 contrast ratio with the surface or background
- (Accessibility) **[DON'T]** (fig) Avoid using colors with contrast below 3:1

## 5. Full page text by tab (verbatim digest)

### 5.Overview — Overview

Source: https://m3.material.io/components/icon-buttons/overview


- Icon buttons must use a system icon with a clear meaning
- Two variants: default and toggle
- Many configurations: Color, size, width, and shape
- On web, display a tooltip describing the action while hovering
- In toggle buttons, use the outlined style of an icon for the unselected state, and the filled style for the selected state

(fig) Standard, filled unselected, filled selected, filled tonal, and outlined icon buttons

#### Availability & resources

**Implementation status — Icon buttons** (source: m3.material.io status table, data `designSystems/030656e0a1083ef1/components/39c920b4035522f5`)

| Resource | Type | Status | Link |
|---|---|---|---|
| Design Kit (Figma) | FIGMA | AVAILABLE | https://www.figma.com/community/file/1035203688168086460 |
| Flutter | FLUTTER_IMPLEMENTATION | AVAILABLE | https://api.flutter.dev/flutter/material/IconButton-class.html |
| Jetpack Compose | JETPACK_IMPLEMENTATION | AVAILABLE | https://developer.android.com/develop/ui/compose/components/icon-button |
| Jetpack Compose: Expressive | JETPACK_IMPLEMENTATION | AVAILABLE | https://developer.android.com/reference/kotlin/androidx/compose/material3/package-summary#IconButton(kotlin.Function0,androidx.compose.ui.Modifier,kotlin.Boolean,androidx.compose.material3.IconButtonColors,androidx.compose.foundation.interaction.MutableInteractionSource,androidx.compose.ui.graphics.Shape,kotlin.Function0) |
| Android Views (MDC-Android) | ANDROID_IMPLEMENTATION | AVAILABLE | https://github.com/material-components/material-components-android/blob/master/docs/components/Button.md#icon-button |
| Android Views (MDC-Android): Expressive | ANDROID_IMPLEMENTATION | AVAILABLE | https://github.com/material-components/material-components-android/blob/master/docs/components/Button.md#icon-button |
| Web | LIT_IMPLEMENTATION | AVAILABLE | https://github.com/material-components/material-web/blob/main/docs/components/icon-button.md |
| Web: Expressive | LIT_IMPLEMENTATION | UNAVAILABLE |  |

#### M3 Expressive update

**May 2025**

Icon buttons now have a wider variety of shapes and sizes, changing shape when selected. When placed in button groups, icon buttons interact with each other when pressed. [More on M3 Expressive](https://m3.material.io/blog/building-with-m3-expressive)

Variants and naming:

- Default and toggle (selection)
- Color styles are now configurations. (filled, tonal, outlined, standard)

Shapes:

- Round and square options
- Shape morphs when pressed
- Shape morphs when selected

Sizes:

- Extra small
- Small (default)
- Medium
- Large
- Extra large

Widths:

- Narrow
- Default
- Wide

(fig) 1. Five sizes
2. Two shapes
3. Three widths

#### Differences from M2

- **Color:** New color mappings and compatibility with dynamic color
- **Variants and naming:** Icon buttons were called toggle buttons. There are now two variants of icon buttons: default and toggle.

(fig) 1. Default icon buttons
2. Toggle icon buttons

### 5.Specs — Specs

Source: https://m3.material.io/components/icon-buttons/specs


#### Variants

(fig) 1. Default icon button
2. Toggle icon button

| Variant | M3 | M3 Expressive |
| --- | --- | --- |
| Default | Available | Available |
| Toggle (selection) | Available | Available |

#### Configurations

(fig) 1. Five sizes
2. Two shapes
3. Four color styles
4. Three widths

| Category | Options | M3 | M3 Expressive |
| --- | --- | --- | --- |
| Size | Small (default) | Available | Available |
| XS, M, L, XL | -- | Available |
| Shape | Round (default) | Available | Available |
| Square | -- | Available |
| Color | Filled (default), tonal, outlined, standard | Available | Available |
| Width | Default | Available | Available |
| Narrow, wide | -- | Available |

#### Tokens & specs

Icon button token sets are organized by common tokens, color, and size. Select the token set from the table’s menu. [Learn about design tokens](https://m3.material.io/foundations/design-tokens/overview)

_[Interactive TOKEN_TABLE module: resource `designSystems/20543ce18892f7d9/components/0fe2282006ae098b`; token sets: Icon button, Icon button - Color - Filled, Icon button - Color - Tonal, Icon button - Color - Outlined, Icon button - Color - Standard, Icon button - Size - Xsmall, Icon button - Size - Small, Icon button - Size - Medium, Icon button - Size - Large, Icon button - Size - Xlarge. Resolved values are in the tokens/ folder of this guide.]_

#### Anatomy

(fig) 1. Icon
2. Container

#### Color

Color values are implemented through design tokens. For designers, this means working with color values that correspond with tokens; in implementation, a color value will be a token that references a value.

There are four built-in color styles: filled, tonal, outlined, and standard. Default and toggle buttons use different color roles per style.

star

Note:

These color roles were chosen to create design coherence and familiarity. Other color roles can be used as long as the container and text have a 3:1 contrast ratio. For example, tertiary and on tertiary.

(fig) A: Filled, B: Tonal, C: Outlined, D: Standard

1. Default
2. Toggle, unselected
3. Toggle, selected

|  | 1. Default | 2. Toggle, unselected | 3. Toggle, selected |
| --- | --- | --- | --- |
| Filled container  Filled icon | Primary  On primary | Surface container  On surface variant | Primary  On primary |
| Tonal container  Tonal icon | Secondary container  On secondary container | Secondary container  On secondary container | Secondary  On secondary |
| Outlined container  Outlined icon | Outline variant (outline)  On surface variant | Outline variant (outline)  On surface variant | Inverse surface  Inverse on surface |
| Standard icon | On surface variant | On surface variant | Primary |

#### States

States are visual representations used to communicate the status of a component or interactive element. State layers slightly change button color. Disabled states have different base colors. [View tokens for details](https://m3.material.io/foundations/design-tokens/overview)

##### Filled button states

###### Default

(fig) 1. Enabled
2. Disabled (10% state layer)
3. Hovered (8% state layer)
4. Focused (10% state layer)
5. Pressed (10% state layer)

###### Toggle

(fig) A: Unselected. B: Selected

1. Enabled
2. Disabled (10% state layer)
3. Hovered (8% state layer)
4. Focused (10% state layer)
5. Pressed (10% state layer)

##### Tonal button states

###### Default

(fig) 1. Enabled
2. Disabled (10% state layer)
3. Hovered (8% state layer)
4. Focused (10% state layer)
5. Pressed (10% state layer)

###### Toggle

(fig) A: Unselected. B: Selected

1. Enabled
2. Disabled (10% state layer)
3. Hovered (8% state layer)
4. Focused (10% state layer)
5. Pressed (10% state layer)

##### Outlined button states

###### Default

(fig) 1. Enabled
2. Disabled (10% state layer)
3. Hovered (8% state layer)
4. Focused (10% state layer)
5. Pressed (10% state layer)

###### Toggle

(fig) A: Unselected. B: Selected

1. Enabled
2. Disabled (10% state layer)
3. Hovered (8% state layer)
4. Focused (10% state layer)
5. Pressed (10% state layer)

##### Standard icon button states

The standard icon button’s container is invisible at rest, but visible when the state layer is applied.

###### Default

(fig) 1. Enabled
2. Disabled (10% state layer)
3. Hovered (8% state layer)
4. Focused (10% state layer)
5. Pressed (10% state layer)

###### Toggle

(fig) A: Unselected. B: Selected

1. Enabled
2. Disabled (10% state layer)
3. Hovered (8% state layer)
4. Focused (10% state layer)
5. Pressed (10% state layer)

#### Shape morph

##### Pressed state

While pressed, icon buttons can morph to become more square.

Both round and square icon buttons should have the same pressed shape radius.  
  
The corner radius value differs for each button size. [See full icon button corner measurements](https://m3.material.io/components/icon-buttons/specs#b3df1f02-d313-44e9-9542-37f7e0e24dc7)

(fig) A. Round, B. Square

1. Enabled
2. Hovered
3. Pressed

##### When selected

In addition to changing shape when pressed, toggle icon buttons also change the resting shape from round (unselected) to square (selected) by default.  
  
If the resting shape is square, the selected shape should be round.

(fig) A. Round, B. Square

1. Enabled
2. Hovered
3. Pressed
4. Selected

#### Measurements

(fig) A. Extra small  B. Small  C. Medium  D. Large  E. Extra large

1. Icon size
2. Default width size
3. Narrow width size
4. Wide width size

##### Target sizes

Extra small and small icon buttons must have a target size of 48x48dp or larger to be accessible.

(fig) A. Extra small icon button size  B. Small icon button size

1. Narrow width
2. Default width
3. Wide width

##### Button corner radius

|  | XS | S | M | L | XL |
| --- | --- | --- | --- | --- | --- |
| A. Round button | Full | Full | Full | Full | Full |
| B. Square button | 12dp | 12dp | 16dp | 28dp | 28dp |
| C. Pressed state | 8dp | 8dp | 12dp | 16dp | 16dp |

#### Baseline tokens

Use the table's menu to select a token set. Filled, tonal, and outlined icon button tokens are now deprecated in favor of the new token sets. All other tokens are still available in the module at the top of the page.

_[Interactive TOKEN_TABLE module: resource `designSystems/20543ce18892f7d9/components/0fe2282006ae098b`; token sets: [Deprecated] Icon button - Filled, [Deprecated] Icon button - Tonal, [Deprecated] Icon button - Outlined. Resolved values are in the tokens/ folder of this guide.]_

### 5.Guidelines — Guidelines

Source: https://m3.material.io/components/icon-buttons/guidelines


(fig) Icon buttons can be a wide variety of sizes, shapes, and colors. When placed in a button group, adjacent icon buttons respond to one another when pressed.

#### Usage

Use icon buttons to display common actions. There are two variants: **default** and **toggle**.

- Default icon buttons can open other elements, such as a menu or search.
- Toggle icon buttons can represent binary actions that can be toggled on and off, such as **favorite** or **bookmark**.

Icon buttons can be placed directly on the background or in most container components, such as cards, app bars, and toolbars.

Multiple icon buttons can be placed in a standard button group to add interaction and motion between the buttons when pressed. [More about standard button groups](https://m3.material.io/components/button-groups/overview)

(fig) Icon buttons can be used within other components, such as in a toolbar or card

##### Color

There are four icon button color styles, in order of emphasis:

1. Filled
2. Tonal
3. Outlined
4. Standard

For the highest emphasis, use the filled style. For the lowest emphasis, use standard.

(fig) The default (left) and toggle (right) icon buttons are available in all four color styles

Use a filled, tonal, or outlined icon button when the button needs more visual separation from the background.  
  
Choose the right style and emphasis for the situation.

**[DO]** (fig) Use icons with a background to make them easy to see on any surface

**[DO]** (fig) When mixing button variants, use color styles to make the primary action clear

Use the **filled** style for visual impact and key actions that require high emphasis.  
  
Avoid overusing the filled style on a screen. Use them sparingly.

(fig) Use filled icon buttons for high emphasis actions, such as downloading or deleting

Use the **tonal** style as a middle ground between filled and outlined icon buttons. It’s useful for secondary actions paired with a high emphasis action.  
  
For example, use the tonal style for actions like **Raise hand** in a video meeting. When selected, its visual emphasis is greater than the outlined menu button, but less than the filled **End call** button.

(fig) Leverage the different color styles to establish emphasis and direct people to important actions

Use the **outlined** style for medium-emphasis buttons. It’s useful when the button isn’t the main focus of the interaction, such as browsing through sets of cards.  
  
Use the **standard** style for low-emphasis buttons, or when placing buttons on a colorful surface.

(fig) Outlined buttons indicate that more content is available without grabbing attention

##### Size & width

Icon buttons are available in five different sizes:

- Extra small - 32dp
- Small - 40dp (default)
- Medium - 56dp
- Large - 96dp
- Extra large - 136dp

And three widths:

- Default
- Narrow
- Wide

Use size and width to provide emphasis and visual hierarchy in a page with multiple buttons. The main action should be the most visually prominent, whether through color or size, like starting and stopping a timer or playing and pausing a song.

(fig) Use different button colors and sizes to provide visual hierarchy and emphasize primary actions

Not all icon buttons will need to emphasize a primary and secondary action.

When buttons have a similar importance, they should be the same size.

(fig) When everything should have the same emphasis, use icon buttons that are the same size

#### Anatomy

(fig) 1. Icon
2. Container

##### Icon

Icons visually communicate the button’s action. Their meaning should be clear and unambiguous. [Browse popular icons](https://fonts.google.com/icons)  
  
Default icon buttons should use filled icons.

Toggle buttons should use an outlined icon when unselected, and a filled version of the icon when selected.

(fig) Ensure the meaning of the icon is clear, such as a heart indicating Favorite

###### Icon accessibility requirements

For selected toggle buttons, if a filled version of an icon doesn’t exist, increase the icon weight to semibold. If semibold doesn’t provide enough visual change, use bold.

This is to ensure that selection is communicated through at least two properties, rather than just color. This requirement doesn't apply to default non-toggle buttons.

(fig) Icons without a fill should be semibolded when selected

##### Container

The container provides increased contrast and hierarchy in places that need more visual separation from the background or other elements.

(fig) The container provides visual separation from the background image

#### Placement

Icon buttons are commonly used in other components, such as app bars and cards.

These buttons should be used for common, easily understandable actions.

Only use a few icon buttons at once.

(fig) App bars often contain icon buttons

In dense layouts, group popular actions by placing many icon buttons next to each other in components like a toolbar or button group.

These components draw attention or add interaction between buttons.

(fig) A toolbar is a collection of icon buttons and other components

#### Behavior

##### Hover

On hover, the icon button displays a tooltip describing its action, rather than the name of the icon itself.

(fig) The tooltip label text should be clear and concise

##### Selection

Toggle icon buttons allow a single choice to be selected or deselected, such as adding or removing something from favorites.   
  
When placed in a button group, icon buttons change shape to help the selected button stand out.  
  
[More on button groups](https://m3.material.io/components/button-groups/overview)

**[DO]** (fig) Use toggle icon buttons when the icon can be selected

**[DON'T]** (fig) Don’t use toggle icon buttons for actions that don’t have a selected state, such as an icon button for an overflow menu

The icon should become filled to represent selection.

If a filled version of the icon doesn't exist, use semibold weight instead.

(fig) When making a selection, such as bookmarking or saving a video, the icon transitions from outlined (unselected) to filled (selected)

### 5.Accessibility — Accessibility

Source: https://m3.material.io/components/icon-buttons/accessibility


#### Use cases

People should be able to do the following using assistive technology:

- Understand meaning of the icon
- Navigate to and activate an icon button
- When applicable, a tooltip should be available to help describe the icon button's purpose

#### Interaction & style

Ensure the icon has contrast of at least 3:1 with the surface or background.

**[DO]** (fig) Icon buttons should have a 3:1 contrast ratio with the surface or background

**[DON'T]** (fig) Avoid using colors with contrast below 3:1

#### Keyboard navigation

| **Keys** | **Actions** |
| --- | --- |
| Tab | Focus lands on (non-disabled) icon button |
| Space or Enter | Activates the (non-disabled) icon button |

#### Labeling elements

The accessibility label for icon buttons describes the action the button is executing, such as **Add to favorites**, **Bookmark**, or **Send message**.

(fig) The icon button label describes the action, such as Add to favorites for the heart icon

#### Layout & density

Groups of similar components can be nested together inside a component, or they can stand alone.  
  
The target size of each icon button should be at least 48dp, even when nested.

(fig) Icon buttons can be used within other components, such as an app bar

##### Avoid applying density by default

Don't apply density to icon buttons by default. This lowers their targets below the required 48x48 CSS pixels minimum size.

Provide density options that allow people to choose a higher density, such as selecting a denser layout or changing the theme. Controls for adjusting density must maintain a target size of at least 48x48 CSS pixels.

#### Hover

On web, icon buttons should display a tooltip with an accessibility label.

(fig) The tooltip label text should be clear and concise

