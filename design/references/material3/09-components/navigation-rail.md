# Navigation rail

> Category on m3.material.io: **Navigation** · One-line definition (site): Navigation rails let people switch between UI views on mid-sized devices
>
> M3 Expressive status: **UPDATED in M3 Expressive** (classification from https://m3.material.io/blog/building-with-m3-expressive and the component's Overview page)
>
> **Web (Material Web Components — "currently in maintenance mode"; "Material 3 Expressive is not implemented on Web"):** site status Web = **UNAVAILABLE**, Web: Expressive = **UNAVAILABLE**; material-web repo: Not implemented. Details: [../13-repositories-implementation.md](../13-repositories-implementation.md)
>
> Sources: [Overview](https://m3.material.io/components/navigation-rail/overview) · [Specs](https://m3.material.io/components/navigation-rail/specs) · [Guidelines](https://m3.material.io/components/navigation-rail/guidelines) · [Accessibility](https://m3.material.io/components/navigation-rail/accessibility)
>
> Site content timestamp: 2026-07-24T07:30:37.949Z · Accessed 2026-10-09

This file reorganizes Material's own text. Sections 1–4 are extracted verbatim from the Overview/Specs/Guidelines/Accessibility tabs; nothing is paraphrased. Image-only examples are represented by their on-site captions (“(fig)”). For the interactive token tables, resolved values are linked in §3.

## 1. Key points (verbatim from Overview)

- Use navigation rails in medium, expanded, large, or extra-large window sizes
- Can contain 3-7 destinations plus an optional FAB
- Always put the rail in the same place, even on different screens of an app

## 2. Status, versioning & M3 Expressive changes (verbatim)

## M3 Expressive update

**May 2025**

A **collapsed** and **expanded** navigation rail have been introduced to replace the baseline nav rail. The expanded nav rail is meant to replace the navigation drawer. [More on M3 Expressive](https://m3.material.io/blog/building-with-m3-expressive)

Variants and naming:

- The baseline **navigation rail** is no longer recommended
- Added two wider navigation rails:

- **Collapsed:** replaces baseline nav rail
  - **Expanded**: replaces navigation drawer

Configurations:

- Expanded rail modality:

- Non-modal
  - Modal
- Expanded behavior:

- Transition to collapsed navigation rail
  - Hide when collapsed
- Color:

- Active label on vertical items changed from **on surface variant** to **secondary**

(fig) The collapsed and expanded navigation rails match visually and can transition into each other

## Differences from M2

- Behavior: Predictive back interaction
- Color: New color mappings and compatibility with dynamic color
- States: The active destination can be indicated with a pill shape in a contrasting color

(fig) M2: The navigation rail uses icon color, weight, and fill to communicate which destination is active

(fig) M3: The navigation rail uses a pill-shaped active indicator to communicate which destination is active

## Implementation links (all platforms; site status tables + verified repo paths)

| Platform | Site status | Link |
|---|---|---|
| Web | UNAVAILABLE | — |
| Web: Expressive | UNAVAILABLE | — |
| Jetpack Compose | AVAILABLE | [https://developer.android.com/develop/ui/compose/components/navigation-rail](https://developer.android.com/develop/ui/compose/components/navigation-rail) |
| Jetpack Compose: Expressive | AVAILABLE | [https://developer.android.com/reference/kotlin/androidx/compose/material3/package-summary#NavigationRail(androidx.compose.ui.Modifier,androidx.compose.ui.graphics.Color,androidx.compose.ui.graphics.Color,kotlin.Function1,androidx.compose.foundation.layout.WindowInsets,kotlin.Function1)](https://developer.android.com/reference/kotlin/androidx/compose/material3/package-summary#NavigationRail(androidx.compose.ui.Modifier,androidx.compose.ui.graphics.Color,androidx.compose.ui.graphics.Color,kotlin.Function1,androidx.compose.foundation.layout.WindowInsets,kotlin.Function1)) |
| Android Views (MDC-Android) | AVAILABLE | [https://github.com/material-components/material-components-android/blob/master/docs/components/NavigationRail.md](https://github.com/material-components/material-components-android/blob/master/docs/components/NavigationRail.md) |
| Android Views (MDC-Android): Expressive | AVAILABLE | [https://github.com/material-components/material-components-android/blob/master/docs/components/NavigationRail.md](https://github.com/material-components/material-components-android/blob/master/docs/components/NavigationRail.md) |
| Flutter | AVAILABLE | [https://api.flutter.dev/flutter/material/NavigationRail-class.html](https://api.flutter.dev/flutter/material/NavigationRail-class.html) |

Source repositories:
- **Web (material-web):** no implementation in the repo.
- **Jetpack Compose:** library source [androidx/androidx compose/material3/material3](https://github.com/androidx/androidx/tree/androidx-main/compose/material3/material3) (mirror of android.googlesource.com).
- **Android Views (MDC-Android):** [docs/components](https://github.com/material-components/material-components-android/tree/master/docs/components) (per-component doc linked in the table above where the site gives one).
- **Flutter:** [flutter/flutter packages/flutter/lib/src/material](https://github.com/flutter/flutter/tree/master/packages/flutter/lib/src/material). "M3 Expressive is not available on Flutter" (develop/flutter).

## 3. Token sets used on the Specs tab

| Token set (as shown on site) | Token-set name | Status | Resolved values |
|---|---|---|---|
| Nav rail - Common | `md.comp.nav-rail` | current | [../tokens/components/nav-rail.md](../tokens/components/nav-rail.md) |
| Nav rail - Collapsed | `md.comp.nav-rail.collapsed` | current | [../tokens/components/nav-rail.collapsed.md](../tokens/components/nav-rail.collapsed.md) |
| Nav rail - Expanded | `md.comp.nav-rail.expanded` | current | [../tokens/components/nav-rail.expanded.md](../tokens/components/nav-rail.expanded.md) |
| Nav rail item - Common | `md.comp.nav-rail.item` | current | [../tokens/components/nav-rail.item.md](../tokens/components/nav-rail.item.md) |
| Nav rail item - Vertical | `md.comp.nav-rail.item.vertical` | current | [../tokens/components/nav-rail.item.vertical.md](../tokens/components/nav-rail.item.vertical.md) |
| Nav rail item - Horizontal | `md.comp.nav-rail.item.horizontal` | current | [../tokens/components/nav-rail.item.horizontal.md](../tokens/components/nav-rail.item.horizontal.md) |
| Navigation rail (baseline) | `md.comp.navigation-rail` | current | [../tokens/components/navigation-rail.md](../tokens/components/navigation-rail.md) |

## 4. Rule index — every Do / Don't / Caution on the component's pages (verbatim captions)

- (Guidelines) **[DON'T]** (fig) Don’t use the navigation rail horizontally. Use a navigation bar instead.
- (Guidelines) **[DO]** (fig) A top-aligned FAB in the navigation rail
- (Guidelines) **[DON'T]** (fig) Avoid placing the FAB below navigation items
- (Guidelines) **[CAUTION]** (fig) Use caution when placing logos in the rail where they might be confused with an action or destination
- (Guidelines) **[DO]** (fig) Use the active indicator only for the current open page
- (Guidelines) **[DON'T]** (fig) Don’t use the active indicator for more than one navigation item at a time
- (Guidelines) **[DO]** (fig) Write clear and concise labels that describe the destination page
- (Guidelines) **[CAUTION]** (fig) Break up longer phrases into two text lines if necessary
- (Guidelines) **[DON'T]** (fig) Don’t truncate or display an ellipsis in place of label text
- (Guidelines) **[DON'T]** (fig) Don’t reduce the type size to fit more characters into a destination label
- (Accessibility) **[DO]** (fig) Use the default color scheme to ensure proper contrast and emphasis on the active destination
- (Accessibility) **[DON'T]** (fig) Don’t use more than two colors for destinations or low-contrast colors in the navigation rail. This will make distinguishing active items difficult.
- (Accessibility) **[DO]** (fig) Use a filled icon variant on the selected navigation item to differentiate from inactive navigation items
- (Accessibility) **[DON'T]** (fig) Avoid using the same unfilled icon style for both selected and unselected items because it lacks important visual feedback cue

## 5. Full page text by tab (verbatim digest)

### 5.Overview — Overview

Source: https://m3.material.io/components/navigation-rail/overview


- Use navigation rails in medium, expanded, large, or extra-large window sizes
- Can contain 3-7 destinations plus an optional FAB
- Always put the rail in the same place, even on different screens of an app

(fig) Collapsed and expanded navigation rails can transition between each other on any device, including:

1. Large or medium window size classes like tablets  
2. Compact window size classes like phones in portrait orientation

#### Availability & resources

**Implementation status — Navigation rail** (source: m3.material.io status table, data `designSystems/030656e0a1083ef1/components/6073fa0062bb7074`)

| Resource | Type | Status | Link |
|---|---|---|---|
| Design Kit (Figma) | FIGMA | AVAILABLE | https://www.figma.com/community/file/1035203688168086460 |
| Flutter | FLUTTER_IMPLEMENTATION | AVAILABLE | https://api.flutter.dev/flutter/material/NavigationRail-class.html |
| Jetpack Compose | JETPACK_IMPLEMENTATION | AVAILABLE | https://developer.android.com/develop/ui/compose/components/navigation-rail |
| Jetpack Compose: Expressive | JETPACK_IMPLEMENTATION | AVAILABLE | https://developer.android.com/reference/kotlin/androidx/compose/material3/package-summary#NavigationRail(androidx.compose.ui.Modifier,androidx.compose.ui.graphics.Color,androidx.compose.ui.graphics.Color,kotlin.Function1,androidx.compose.foundation.layout.WindowInsets,kotlin.Function1) |
| Android Views (MDC-Android) | ANDROID_IMPLEMENTATION | AVAILABLE | https://github.com/material-components/material-components-android/blob/master/docs/components/NavigationRail.md |
| Android Views (MDC-Android): Expressive | ANDROID_IMPLEMENTATION | AVAILABLE | https://github.com/material-components/material-components-android/blob/master/docs/components/NavigationRail.md |
| Web | LIT_IMPLEMENTATION | UNAVAILABLE |  |
| Web: Expressive | LIT_IMPLEMENTATION | UNAVAILABLE |  |

#### M3 Expressive update

**May 2025**

A **collapsed** and **expanded** navigation rail have been introduced to replace the baseline nav rail. The expanded nav rail is meant to replace the navigation drawer. [More on M3 Expressive](https://m3.material.io/blog/building-with-m3-expressive)

Variants and naming:

- The baseline **navigation rail** is no longer recommended
- Added two wider navigation rails:

- **Collapsed:** replaces baseline nav rail
  - **Expanded**: replaces navigation drawer

Configurations:

- Expanded rail modality:

- Non-modal
  - Modal
- Expanded behavior:

- Transition to collapsed navigation rail
  - Hide when collapsed
- Color:

- Active label on vertical items changed from **on surface variant** to **secondary**

(fig) The collapsed and expanded navigation rails match visually and can transition into each other

#### Differences from M2

- Behavior: Predictive back interaction
- Color: New color mappings and compatibility with dynamic color
- States: The active destination can be indicated with a pill shape in a contrasting color

(fig) M2: The navigation rail uses icon color, weight, and fill to communicate which destination is active

(fig) M3: The navigation rail uses a pill-shaped active indicator to communicate which destination is active

### 5.Specs — Specs

Source: https://m3.material.io/components/navigation-rail/specs


#### Variants

(fig) 1. Collapsed navigation rail
2. Expanded navigation rail

##### Baseline variants

The baseline navigation rail is no longer recommended, and should be replaced by the collapsed navigation rail. [View baseline tokens](https://m3.material.io/components/navigation-rail/specs#d4d97764-20ec-496f-a6f3-0d423940ec5a)

(fig) 1. The baseline navigation rail is no longer recommended

| Variant | M3 | M3 Expressive |
| --- | --- | --- |
| Collapsed navigation rail | -- | Available |
| Expanded navigation rail | -- | Available |
| Navigation rail (baseline) | Available | Not recommended.  Use **collapsed navigation rail**. |

#### Configurations

(fig) 1. Expanded layout: standard
2. Expanded layout: modal

| Category | Configuration | M3 | M3 Expressive |
| --- | --- | --- | --- |
| Expanded layout | Standard (default) | Available as navigation drawer | Available |
| Modal | Available as navigation drawer | Available |
| Expanded behavior | Hide when collapsed | -- | Available |

#### Tokens & specs

Browse the component elements, attributes, tokens, and their values. [Learn about design tokens](https://m3.material.io/foundations/design-tokens/overview)

_[Interactive TOKEN_TABLE module: resource `designSystems/20543ce18892f7d9/components/5b55bd7cc1ea6e29`; token sets: Nav rail - Common, Nav rail - Collapsed, Nav rail - Expanded, Nav rail item - Common, Nav rail item - Vertical, Nav rail item - Horizontal. Resolved values are in the tokens/ folder of this guide.]_

#### Anatomy

(fig) Collapsed and expanded navigation rail elements:

1. Container
2. Menu (optional)
3. FAB or Extended FAB (optional)
4. Icon
5. Active indicator
6. Label text
7. Large badge (optional)
8. Large badge label (optional)
9. Small badge (optional)

#### Color

Color values are implemented through design tokens. For designers, this means working with color values that correspond with tokens; in implementation, a color value will be a token that references a value. [Learn more about design tokens](https://m3.material.io/foundations/design-tokens/overview)

(fig) Navigation rail color roles used for light and dark schemes:

1. Surface container (optional)
2. On secondary container
3. Secondary container
4. Secondary (vertical), On secondary container (horizontal)
5. On surface variant
6. On surface variant
7. Error
8. On error
9. Error

#### States

States are visual representations used to communicate the status of a component or an interactive element.  
  
The navigation item’s target area always spans the full width of the nav rail, even if the item container hugs its contents.

(fig) 1. Enabled
2. Hovered
3. Focused
4. Pressed

#### Measurements

(fig) Navigation rail padding and size measurements

#### Common layouts

(fig) 1. Three navigation items
2. Three navigation items with a menu
3. Three navigation items with a FAB
4. Three navigation items with a menu and FAB

---

#### Baseline navigation rail

(fig) 1. Container
2. Menu icon (optional)
3. Icon
4. Active indicator
5. Label text
6. Large badge label (optional)
7. Large badge (optional)
8. Badge (optional)

##### Tokens & specs

_[Interactive TOKEN_TABLE module: resource `designSystems/20543ce18892f7d9/components/5b55bd7cc1ea6e29`; token sets: Navigation rail (baseline), Nav rail item - Horizontal, Nav rail item - Common, Nav rail - Common, Nav rail - Collapsed, Nav rail - Expanded, Nav rail item - Vertical. Resolved values are in the tokens/ folder of this guide.]_

##### Color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](https://m3.material.io/foundations/design-tokens/overview)

(fig) Navigation rail color roles used for light and dark themes:

1. On secondary container
2. Secondary container
3. On surface
4. On surface variant
5. On surface variant
6. Error
7. On error
8. Error

##### States

States are visual representations used to communicate the status of a component or interactive element.

(fig) Navigation rail states:

1. Enabled (on active destination)
2. Hovered (on active destination)
3. Focused (on active destination)
4. Pressed (on active destination)
5. Enabled (on inactive destination)
6. Hovered (on inactive destination)
7. Focused (on inactive destination)
8. Pressed (on inactive destination)

##### Measurements

(fig) Navigation rail size measurements

(fig) Navigation rail padding and margin measurements

##### Configurations

Common arrangements of elements within a navigation rail.

(fig) 1. With a menu
2. With a FAB
3. With menu and FAB, without labels
4. All destinations with text labels
5. With menu, FAB, and label text for all destinations

### 5.Guidelines — Guidelines

Source: https://m3.material.io/components/navigation-rail/guidelines


(fig) Use the menu icon to transition between collapsed and expanded navigation rails

#### Usage

The navigation rail can display navigation items, a menu, and a floating action button (FAB) in a vertical orientation.

There are two variants of navigation rails, **collapsed** and **expanded**, which can easily transform into each other when the menu button is selected.

##### Collapsed

The **collapsed** nav rail runs along the leading edge of the window, and should contain 3–7 navigation items. It should not be hidden.

It can be used in medium to extra large breakpoints, such as tablets and desktop. In  medium windows with few destinations, consider using a navigation bar instead. Compact windows should always use a navigation bar.

(fig) A navigation rail should be the only visible navigation element

##### Expanded

The **expanded** navigation rail can be standard or modal, and should always open from a menu icon. An expanded rail can reveal secondary destinations not visible when collapsed.  
  
The **standard** configuration is placed beside body content. It’s best for larger windows with lots of available space.  
  
The **modal** configuration overlaps the body content, and should be opened from a menu icon. Use the modal configuration for:

- Information dense layouts where space is limited
- Products with many navigation items

(fig) A navigation rail can be expanded by default on larger screen sizes, or can be expanded over content on smaller screen sizes

In immersive experiences, the expanded navigation rail can be hidden entirely, appearing only when the menu icon is selected.  
  
The collapsed navigation rail should not be hidden.

(fig) The expanded navigation rail can also be hidden, appearing only when the menu icon is selected

#### Anatomy

(fig) 1. Container
2. Menu (optional)
3. Floating action button (FAB) (optional)
4. Icon - active
5. Label text - active
6. Active indicator
7. Icon - inactive
8. Large badge (optional)
9. Large badge label
10. Small badge
11. Label text - inactive

##### Container

The navigation rail should be placed on the leading edge of the window. This is the left side for left-to-right languages, and the right side for right-to-left languages.  
  
The container fill can be turned off so the nav rail appears directly on the surface. When doing this, make sure all items have a minimum of 3:1 color contrast.

(fig) The navigation rail should be placed on the leading edge of the window

The navigation rail should always run vertically along the side of a layout. Don’t make it horizontal.  
  
Use a navigation bar for horizontal navigation.

**[DON'T]** (fig) Don’t use the navigation rail horizontally. Use a navigation bar instead.

Navigation rail items can be aligned as a group to the top or center of a layout. On tablets, use center alignment to make it easier to reach items.  
  
The menu icon and FAB should always be top-aligned.

(fig) Top and center aligned rail destination placement

##### Menu (optional)

The menu button can transition between the **collapsed**and **expanded** navigation rails.  
  
Once expanded, the rail can reveal secondary destinations.  
  
When the navigation rail is expanded, the menu icon should change to represent that it can be collapsed.

(fig) A navigation rail can expand to reveal more destinations

##### Floating action button (FAB) (optional)

The container of the navigation rail is ideal for anchoring the FAB to the top of a screen, placing the app’s key action above navigation destinations.  
  
When nested within another component, such as the navigation rail, the FAB's resting elevation should be [level 0](https://m3.material.io/styles/elevation/applying-elevation).

**[DO]** (fig) A top-aligned FAB in the navigation rail

**[DON'T]** (fig) Avoid placing the FAB below navigation items

The top of the rail can also be used for a logo, however avoid using logos that could be mistaken as buttons.  
  
Don’t use a logo as a menu button to expand the navigation rail.

**[CAUTION]** (fig) Use caution when placing logos in the rail where they might be confused with an action or destination

##### Active indicator

The active indicator shows which page is being displayed.

**[DO]** (fig) Use the active indicator only for the current open page

**[DON'T]** (fig) Don’t use the active indicator for more than one navigation item at a time

The active indicator hugs the label text in the expanded nav rail. To achieve a similar style to the baseline navigation drawer, consider modifying the active indicator to fill the container.  
  
The target area should always span the full width.

(fig) The active indicator hugs contents in the expanded nav rail

(fig) Override the indicator to fill the container to more closely resemble the baseline navigation drawer

##### Icons

Navigation rail items must use icons that symbolize the content of their page. Browse popular icons on [Google Fonts](http://fonts.google.com/icons).

(fig) Icons should symbolize the content of the page they open

When a destination is selected, the icon fills and changes color. An active indicator appears behind the icon.

(fig) Selected navigation items have an active indicator, a filled icon, and a more prominent color

##### Label text

The label text should be a short, meaningful description of each navigation destination and another way for users to understand an icon’s meaning.  
  
All navigation items require a one word label text.

**[DO]** (fig) Write clear and concise labels that describe the destination page

Avoid wrapping long labels when possible. If necessary, create a line break between words, or hyphenate longer words.

**[CAUTION]** (fig) Break up longer phrases into two text lines if necessary

Labels should be short enough to not be truncated. Don’t shrink the type scale to fit longer text labels.

**[DON'T]** (fig) Don’t truncate or display an ellipsis in place of label text

**[DON'T]** (fig) Don’t reduce the type size to fit more characters into a destination label

##### Badges

Navigation rail icons can include badges to communicate dynamic information about the  destination, such as counts or status.  
  
In compact nav rails, the badge is placed in the upper right corner of the icon. In expanded nav rails, the badge should be placed next to the label text.

(fig) 1. Small badge on a rail destination   
2. Large badge with a number  
3. Large badge with a maximum character count

##### Divider (optional)

A vertical divider can help separate the rail from app content. The divider should be positioned on the edge of the rail container that’s adjacent to the app’s content area.

(fig) A divider can make the navigation rail container distinct from other on-screen content

#### Placement

In adaptive layouts, the navigation rail should be placed outside any panes, always along the leading edge of the window. Don’t place it within body content.  
  
When the navigation rail is hidden, the body content can fill in the remaining space as long as the menu icon is still accessible.  
  
Tabs can be used alongside a navigation rail to create an extra layer of visible navigation.

(fig) Expanded navigation rails can open from menu buttons on mobile

#### Adaptive design

For more, see [adaptive design](https://m3.material.io/foundations/layout/layout-overview/adaptive-design).

##### Resizing

When moving from a large screen to a small screen, a navigation rail can transform into a navigation bar, providing the same quick access in a configuration that’s easier to use on smaller displays. Never use the navigation rail and navigation bar simultaneously.

Only use navigation rails for medium breakpoints and larger. Don’t use a navigation bar. If there are more than five destinations, consider using a modal expanded nav rail instead.

**Compact:** Don’t use a standard navigation rail for compact layouts due to space constraints. Use a navigation bar instead.

**Medium:** Use a navigation rail, especially if prioritizing persistent vertical navigation over maximizing vertical content space.

**Expanded to extra-large:** Use a navigation rail, not a navigation bar. Consider available horizontal space and the number of destinations when choosing between standard and modal.

(fig) On smaller devices, use a navigation bar. On larger displays, use a navigation rail.

##### Presentation

When the navigation rail transitions from collapsed to expanded, the contents of the page should automatically adjust to fit.  
  
The contents of the navigation rail also expand to fill the space. For example, the FAB should transition into an extended FAB.   
  
Extra destinations can be shown in an expanded nav rail.

(fig) Use a standard expanded rail when there are secondary destinations or actions that have lower priority than the main navigation items

#### Behavior

##### Scrolling

Destinations in the navigation rail should remain visible and fixed when scrolling vertically.

(fig) Rail destinations remain fixed while on-screen content scrolls vertically

If a layout scrolls horizontally, the rail can scroll off-screen or remain fixed. To distinguish that content is scrolling underneath the rail, use a divider or add elevation to the rail.

(fig) A divider and color fill change create visual distinction between the rail and horizontally scrolling content

(fig) Elevating the rail to level 1 creates visual distinction between the rail and horizontally scrolling content

##### Selection

When a destination is tapped, the destination screen uses a [top level](https://m3.material.io/styles/motion/transitions/transition-patterns#f852afd2-396f-49fd-a265-5f6d96680e16) transition pattern. In addition, the icon becomes filled and the active indicator expands from the center of the icon.

(fig) Tapping a destination uses a top level transition pattern

##### Back

On Android, a gesture called predictive back allows people to swipe left or right on the screen to go back or dismiss modal components.

- Previous screen is revealed in a preview to signal the destination
- Predictive back only applies to the **modal expanded** navigation rail.

A list of compatible components is available on the [gestures page](https://m3.material.io/foundations/interaction/gestures).

(fig) The nav rail pops off the edge of the window during the predictive back gesture

### 5.Accessibility — Accessibility

Source: https://m3.material.io/components/navigation-rail/accessibility


#### Use cases

People should be able to do the following using the assistive technology:

- Navigate between navigation destinations
- Select a particular navigation destination from a set
- Get appropriate feedback based on input type

#### Interaction & style

When a navigation item is tapped, the active indicator appears, providing the following feedback to the user that it is selected:

- A ripple passes through the indicator
- The icon switches from outlined to filled
- The icon and text change color

When hovered, the hover state appears, providing a visual cue that the destination is interactive.

(fig) Touch: Tap

(fig) Cursor: Hover, Click

The target area for expanded navigation rails spans the full width of the container, even though the active indicator visually hugs the content.

(fig) Touch: Tap

Use a filled icon for the active destination and outlined icons for inactive destinations.  
  
Active and inactive icon colors need sufficient contrast against the container.

**[DO]** (fig) Use the default color scheme to ensure proper contrast and emphasis on the active destination

**[DON'T]** (fig) Don’t use more than two colors for destinations or low-contrast colors in the navigation rail. This will make distinguishing active items difficult.

If an icon doesn’t have a filled style, use the semibold icon weight instead.

(fig) An icon with no filled option should use the semibold weight when active

##### Text scaling and truncation

When someone sets their device to show a larger text size, the navigation rail items should grow vertically to accommodate larger labels while retaining the default padding. It’s okay for scaled text to wrap in navigation items.

To remain accessible, ensure the full label is always visible on-screen at up to 2x text sizing. Beyond this size, text can truncate.

(fig) Text scaled to 1.5 size

(fig) Text scaled to 2x size

##### Initial focus

Initial focus lands directly on the first interactive item, whether it’s the menu, the FAB, or the first navigation item.  
  
From the FAB or menu, **Tab** brings the person to the navigation items. **Tab** or **Arrows** then navigate between items.

(fig) Use arrows to move between navigation items

(fig) Use space/enter to activate the focused navigation item

##### Visual indicators

Icons give the dominant cue of the navigation state. Use a filled icon for the selected destination to contrast with outlined icons for the non-selected destinations.

**[DO]** (fig) Use a filled icon variant on the selected navigation item to differentiate from inactive navigation items

**[DON'T]** (fig) Avoid using the same unfilled icon style for both selected and unselected items because it lacks important visual feedback cue

#### Keyboard navigation

| Keys | Actions |
| --- | --- |
| Tab / Arrows | Navigate between interactive elements |
| Space / Enter | Selects an interactive element |

#### Labeling elements

The accessibility label for a navigation item is typically the same as the adjacent text label.  
  
When the visible UI text is ambiguous, accessibility labels need to be more descriptive. For example, a navigation item visibly labeled **Recent** would benefit from additional information in its accessibility label to clarify the destination's intent.  
  
Note: On Android Views (MDC-Android), a more descriptive accessibility label is not available and the role is not announced.

(fig) While the visible label text reads **Recent**, the accessibility label for this switch clarifies its function: **Recent images**

