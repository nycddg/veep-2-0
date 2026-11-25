# Navigation bar

> Category on m3.material.io: **Navigation** · One-line definition (site): Navigation bars let people switch between UI views on smaller devices
>
> M3 Expressive status: **UPDATED in M3 Expressive** (classification from https://m3.material.io/blog/building-with-m3-expressive and the component's Overview page)
>
> **Web (Material Web Components — "currently in maintenance mode"; "Material 3 Expressive is not implemented on Web"):** site status Web = **UNAVAILABLE**, Web: Expressive = **UNAVAILABLE**; material-web repo: Not in docs/components; experimental `labs/navigationbar (+ navigationtab)` only ("not recommended for production"). Details: [../13-repositories-implementation.md](../13-repositories-implementation.md)
>
> Sources: [Overview](https://m3.material.io/components/navigation-bar/overview) · [Specs](https://m3.material.io/components/navigation-bar/specs) · [Guidelines](https://m3.material.io/components/navigation-bar/guidelines) · [Accessibility](https://m3.material.io/components/navigation-bar/accessibility)
>
> Site content timestamp: 2026-07-28T07:36:27.700Z · Accessed 2026-10-09

This file reorganizes Material's own text. Sections 1–4 are extracted verbatim from the Overview/Specs/Guidelines/Accessibility tabs; nothing is paraphrased. Image-only examples are represented by their on-site captions (“(fig)”). For the interactive token tables, resolved values are linked in §3.

## 1. Key points (verbatim from Overview)

- Use navigation bars in compact or medium window sizes
- Can contain 3-5 destinations of equal importance
- Destinations don't change. They should be consistent across app screens.

## 2. Status, versioning & M3 Expressive changes (verbatim)

## M3 Expressive update

**May 2025**

A new flexible navigation bar was introduced to replace the baseline navigation bar. It’s shorter and supports horizontal navigation items in medium windows. [More on M3 Expressive](https://m3.material.io/blog/building-with-m3-expressive)

Variants and naming:

- Baseline navigation bar is no longer recommended
- Added **flexible**navigation bar

- Shorter height
  - Can be used in medium window sizes with horizontal navigation items

Color:

- Active label changed from **on-surface-variant** to **secondary**

(fig) The flexible navigation bar is shorter and can be used in medium windows with horizontal nav items

## Differences from M2

- Color: New color mappings and compatibility with dynamic color
- Elevation: No shadow
- Layout: Container height is taller
- States: The active destination can be indicated with a pill shape in a contrasting color
- Name: Bottom navigation has been renamed **navigation bar**

(fig) M2: A drop shadow indicates placement on top of content. Filled and regular weight icons indicate active states.

(fig) M3: Taller and no drop shadow. Filled icons and an active indicator indicate active state.

## Implementation links (all platforms; site status tables + verified repo paths)

| Platform | Site status | Link |
|---|---|---|
| Web | UNAVAILABLE | — |
| Web: Expressive | UNAVAILABLE | — |
| Jetpack Compose | AVAILABLE | [https://developer.android.com/develop/ui/compose/components/navigation-bar](https://developer.android.com/develop/ui/compose/components/navigation-bar) |
| Jetpack Compose: Expressive | AVAILABLE | [https://developer.android.com/reference/kotlin/androidx/compose/material3/package-summary#NavigationBar(androidx.compose.ui.Modifier,androidx.compose.ui.graphics.Color,androidx.compose.ui.graphics.Color,androidx.compose.ui.unit.Dp,androidx.compose.foundation.layout.WindowInsets,kotlin.Function1)](https://developer.android.com/reference/kotlin/androidx/compose/material3/package-summary#NavigationBar(androidx.compose.ui.Modifier,androidx.compose.ui.graphics.Color,androidx.compose.ui.graphics.Color,androidx.compose.ui.unit.Dp,androidx.compose.foundation.layout.WindowInsets,kotlin.Function1)) |
| Android Views (MDC-Android) | AVAILABLE | [https://github.com/material-components/material-components-android/blob/master/docs/components/BottomNavigation.md](https://github.com/material-components/material-components-android/blob/master/docs/components/BottomNavigation.md) |
| Android Views (MDC-Android): Expressive | AVAILABLE | [https://github.com/material-components/material-components-android/blob/master/docs/components/BottomNavigation.md](https://github.com/material-components/material-components-android/blob/master/docs/components/BottomNavigation.md) |
| Flutter | AVAILABLE | [https://api.flutter.dev/flutter/material/NavigationBar-class.html](https://api.flutter.dev/flutter/material/NavigationBar-class.html) |

Source repositories:
- **Web (material-web):** not implemented. Experimental only ("not recommended for production"): [labs/navigationbar/](https://github.com/material-components/material-web/tree/main/labs/navigationbar), [labs/navigationtab/](https://github.com/material-components/material-web/tree/main/labs/navigationtab)
- **Jetpack Compose:** library source [androidx/androidx compose/material3/material3](https://github.com/androidx/androidx/tree/androidx-main/compose/material3/material3) (mirror of android.googlesource.com).
- **Android Views (MDC-Android):** [docs/components](https://github.com/material-components/material-components-android/tree/master/docs/components) (per-component doc linked in the table above where the site gives one).
- **Flutter:** [flutter/flutter packages/flutter/lib/src/material](https://github.com/flutter/flutter/tree/master/packages/flutter/lib/src/material). "M3 Expressive is not available on Flutter" (develop/flutter).

## 3. Token sets used on the Specs tab

| Token set (as shown on site) | Token-set name | Status | Resolved values |
|---|---|---|---|
| Nav bar - Common | `md.comp.nav-bar` | current | [../tokens/components/nav-bar.md](../tokens/components/nav-bar.md) |
| Nav bar - Item - Vertical | `md.comp.nav-bar.item.vertical` | current | [../tokens/components/nav-bar.item.vertical.md](../tokens/components/nav-bar.item.vertical.md) |
| Nav bar - Item - Horizontal | `md.comp.nav-bar.item.horizontal` | current | [../tokens/components/nav-bar.item.horizontal.md](../tokens/components/nav-bar.item.horizontal.md) |
| Navigation bar (baseline) | `md.comp.navigation-bar` | current | [../tokens/components/navigation-bar.md](../tokens/components/navigation-bar.md) |

## 4. Rule index — every Do / Don't / Caution on the component's pages (verbatim captions)

- (Guidelines) **[DON'T]** (fig) Avoid putting more than five navigation items in a navigation bar
- (Guidelines) **[DON'T]** (fig) Don’t remove the labels from navigation items
- (Guidelines) **[DON'T]** (fig) Don’t use a navigation bar for fewer than three destinations. Instead, use tabs.
- (Guidelines) **[DON'T]** (fig) Navigation bar destinations have fixed positions. Don’t scroll them or modify their positions.
- (Guidelines) **[DO]** (fig) Use filled icons when the navigation item is active
- (Guidelines) **[CAUTION]** (fig) If a filled version of an icon is unavailable, the icon’s weight must increase
- (Guidelines) **[DON'T]** (fig) Don’t use multiple or low-contrast colors in a navigation bar, as they make it harder for people to distinguish the active item and navigate to other destinations
- (Guidelines) **[DO]** (fig) Use the active indicator only for the active destination
- (Guidelines) **[DON'T]** (fig) Don’t use the active indicator for more than one destination at a time
- (Guidelines) **[DO]** (fig) Use brief text labels to identify the purpose of a destination
- (Guidelines) **[DON'T]** (fig) Don’t wrap or truncate text as it can make the label hard to understand
- (Guidelines) **[DON'T]** (fig) Don’t shrink longer text to fit on a single line
- (Guidelines) **[DO]** (fig) The FAB should be right-aligned above the navigation bar
- (Guidelines) **[DON'T]** (fig) Don’t cover the navigation bar with a FAB
- (Guidelines) **[DON'T]** (fig) Don’t use navigation bars for desktop layouts. Instead, use a navigation rail or tabs.
- (Accessibility) **[DO]** (fig) Use a filled icon for the selected navigation destination to differentiate from the other destinations
- (Accessibility) **[DON'T]** (fig) Don’t use outlined icons on selected nav items

## 5. Full page text by tab (verbatim digest)

### 5.Overview — Overview

Source: https://m3.material.io/components/navigation-bar/overview


- Use navigation bars in compact or medium window sizes
- Can contain 3-5 destinations of equal importance
- Destinations don't change. They should be consistent across app screens.

(fig) Navigation bar for compact and medium window sizes

#### Availability & resources

**Implementation status — Navigation bar** (source: m3.material.io status table, data `designSystems/030656e0a1083ef1/components/41c723c0c0347dee`)

| Resource | Type | Status | Link |
|---|---|---|---|
| Design Kit (Figma) | FIGMA | AVAILABLE | https://www.figma.com/community/file/1035203688168086460 |
| Flutter | FLUTTER_IMPLEMENTATION | AVAILABLE | https://api.flutter.dev/flutter/material/NavigationBar-class.html |
| Jetpack Compose | JETPACK_IMPLEMENTATION | AVAILABLE | https://developer.android.com/develop/ui/compose/components/navigation-bar |
| Jetpack Compose: Expressive | JETPACK_IMPLEMENTATION | AVAILABLE | https://developer.android.com/reference/kotlin/androidx/compose/material3/package-summary#NavigationBar(androidx.compose.ui.Modifier,androidx.compose.ui.graphics.Color,androidx.compose.ui.graphics.Color,androidx.compose.ui.unit.Dp,androidx.compose.foundation.layout.WindowInsets,kotlin.Function1) |
| Android Views (MDC-Android) | ANDROID_IMPLEMENTATION | AVAILABLE | https://github.com/material-components/material-components-android/blob/master/docs/components/BottomNavigation.md |
| Android Views (MDC-Android): Expressive | ANDROID_IMPLEMENTATION | AVAILABLE | https://github.com/material-components/material-components-android/blob/master/docs/components/BottomNavigation.md |
| Web | LIT_IMPLEMENTATION | UNAVAILABLE |  |
| Web: Expressive | LIT_IMPLEMENTATION | UNAVAILABLE |  |

#### M3 Expressive update

**May 2025**

A new flexible navigation bar was introduced to replace the baseline navigation bar. It’s shorter and supports horizontal navigation items in medium windows. [More on M3 Expressive](https://m3.material.io/blog/building-with-m3-expressive)

Variants and naming:

- Baseline navigation bar is no longer recommended
- Added **flexible**navigation bar

- Shorter height
  - Can be used in medium window sizes with horizontal navigation items

Color:

- Active label changed from **on-surface-variant** to **secondary**

(fig) The flexible navigation bar is shorter and can be used in medium windows with horizontal nav items

#### Differences from M2

- Color: New color mappings and compatibility with dynamic color
- Elevation: No shadow
- Layout: Container height is taller
- States: The active destination can be indicated with a pill shape in a contrasting color
- Name: Bottom navigation has been renamed **navigation bar**

(fig) M2: A drop shadow indicates placement on top of content. Filled and regular weight icons indicate active states.

(fig) M3: Taller and no drop shadow. Filled icons and an active indicator indicate active state.

### 5.Specs — Specs

Source: https://m3.material.io/components/navigation-bar/specs


#### Variants

(fig) 1. Flexible navigation bar

##### Baseline variants

The baseline nav bar is no longer recommended, and should be replaced by the flexible nav bar, which is shorter and supports horizontal navigation items in medium windows. [View baseline nav bar specs](https://m3.material.io/components/navigation-bar/specs#46dc2521-acf0-44e3-bbc0-78dc225b9749)

(fig) 1. Navigation bar (not recommended)

| Variant | M3 | M3 Expressive |
| --- | --- | --- |
| Flexible navigation bar | -- | Available |
| Navigation bar | Available | Not recommended.  Use **flexible navigation bar**. |

#### Configurations

In compact windows, navigation bars use vertical items. In medium windows, navigation bars should use horizontal items.

(fig) 1. Vertical navigation items
2. Horizontal navigation items

| Category | Configuration | M3 | M3 Expressive |
| --- | --- | --- | --- |
| Navigation item layout | Vertical (default) | Available | Available |
| Horizontal | -- | Available |

#### Tokens & specs

Use the table's menu to switch between token sets for the navigation bar and the nav items. [Learn about design tokens](https://m3.material.io/foundations/design-tokens/overview)

_[Interactive TOKEN_TABLE module: resource `designSystems/20543ce18892f7d9/components/52865380210a9b69`; token sets: Nav bar - Common, Nav bar - Item - Vertical, Nav bar - Item - Horizontal. Resolved values are in the tokens/ folder of this guide.]_

#### Anatomy

(fig) 1. Container
2. Icon
3. Label text
4. Active indicator
5. Small badge (optional)
6. Large badge (optional)
7. Large badge label

#### Color

Color values are implemented through design tokens. For designers, this means working with color values that correspond with tokens; in implementation, a color value will be a token that references a value. [Learn more about design tokens](https://m3.material.io/foundations/design-tokens/overview)

(fig) Navigation bar color roles used for light and dark schemes:

1. Surface container
2. On-secondary container
3. Secondary
4. Secondary container
5. On-surface variant
6. On-surface variant

For badge color roles, go to [badge specs](https://m3.material.io/components/badges/specs).

#### States

States are visual representations used to communicate the status of a component or an interactive element.

(fig) 1. Enabled
2. Hovered (8% state layer)
3. Focused (10% state layer)
4. Pressed (10% state layer)

#### Measurements

The navigation bar stretches the full window width.

(fig) Navigation bar padding and size measurements

Vertical navigation items dynamically change width to equally fit the container. Horizontal navigation items have a fixed width, so extra space is added to the ends of the navigation bar instead.

(fig) Navigation bar width and margins for compact and medium windows.

1. Vertical navigation item
2. Margin from window edge
3. Horizontal navigation item

---

#### Baseline navigation bar

(fig) 1. Container
2. Icon
3. Label text
4. Active indicator
5. Small badge
6. Large badge
7. Large badge label

##### Tokens & specs

These tokens are for the baseline navigation bar.

_[Interactive TOKEN_TABLE module: resource `designSystems/20543ce18892f7d9/components/52865380210a9b69`; token sets: Navigation bar (baseline), Nav bar - Common, Nav bar - Item - Vertical, Nav bar - Item - Horizontal. Resolved values are in the tokens/ folder of this guide.]_

##### Color

Color values are implemented through design tokens. For designers, this means working with color values that correspond with tokens; in implementation, a color value will be a token that references a value. [Learn more about design tokens](https://m3.material.io/foundations/design-tokens/overview)

(fig) Navigation bar color roles used for light and dark schemes:

1. Surface
2. On secondary container
3. On surface
4. Secondary container
5. On surface variant
6. On surface variant

For badge color roles, go to [badge specs](https://m3.material.io/components/badges/specs).

##### States

States are visual representations used to communicate the status of a component or an interactive element.

(fig) Navigation bar states:

1. Enabled
2. Hovered
3. Focused
4. Pressed

#### Measurements

(fig) Navigation bar padding and size measurements

(fig) Navigation bar target size and margins

#### Configurations

(fig) 1. 3 destinations
2. 4 destinations
3. 5 destinations

### 5.Guidelines — Guidelines

Source: https://m3.material.io/components/navigation-bar/guidelines


(fig) Navigation bars adapt to different breakpoints

#### Usage

Navigation bars provide access to three to five destinations. The nav bar is positioned at the bottom of windows for convenient access.

Each destination is represented by an icon and label text. One navigation destination is always active.

When a navigation bar icon is tapped or focused, people are taken to the navigation destination associated with that icon.

(fig) Navigation bars can have three to five destinations

Navigation bars should be used for:

- Three to five main pages in the product
- Mobile or tablet only

Navigation bars shouldn’t be used for accessing single tasks, such as viewing one email.

(fig) On mobile or tablet, navigation bars should be used for top-level destinations

The navigation items can be **vertical** or **horizontal**.

- Use vertical items in compact windows, like mobile
- Use horizontal items in medium windows, like tablets

(fig) Vertical navigation items work best in compact windows. Horizontal items work best in medium windows.

For products with more than five navigation items, don’t use a navigation bar; the elements may collide and there likely won’t be enough space for translated text.  
  
Instead, consider using tabs to organize similar content within a page, or hide the navigation behind a menu icon using a modal expanded navigation rail.

**[DON'T]** (fig) Avoid putting more than five navigation items in a navigation bar

**[DON'T]** (fig) Don’t remove the labels from navigation items

**[DON'T]** (fig) Don’t use a navigation bar for fewer than three destinations. Instead, use tabs.

(fig) Use navigation for distinct pages and tabs for related content within a page

**[DON'T]** (fig) Navigation bar destinations have fixed positions. Don’t scroll them or modify their positions.

#### Anatomy

(fig) 1. Container
2. Icon
3. Label text
4. Active indicator
5. Large badge (optional)
6. Small badge (optional)

##### Container

The container should always be placed at the bottom of the product and span the full length of the window. Navigation items are centered within the container.  
  
The container has a color fill to provide separation from other content.

(fig) The navigation bar container holds all elements

##### Navigation items

Navigation items hold all elements for each destination: the icon, label text, and active indicator. They can be **vertical**, with the text below the icon and indicator, or **horizontal**, with the icon and text beside each other inside the indicator.   
  
Vertical items are best in compact windows, and horizontal items are best in medium windows.  
  
Horizontal items are centered in the nav bar with outer margins.

(fig) The navigation bar is divided into equal-width segments with padding from the window edge

##### Icons

Navigation rail items must use icons that symbolize the content of their page. Browse [popular icon](https://fonts.google.com/icons).  
  
Use a filled icon for the active destination and outlined icons for inactive destinations. If an icon doesn’t have a filled version, apply **semibold** weight to the icon instead.

**[DO]** (fig) Use filled icons when the navigation item is active

**[CAUTION]** (fig) If a filled version of an icon is unavailable, the icon’s weight must increase

Active and inactive icons must have a minimum 3:1 contrast ratio with the container.

**[DON'T]** (fig) Don’t use multiple or low-contrast colors in a navigation bar, as they make it harder for people to distinguish the active item and navigate to other destinations

##### Active indicator

The active indicator shows which page from the nav bar is currently being displayed.

**[DO]** (fig) Use the active indicator only for the active destination

**[DON'T]** (fig) Don’t use the active indicator for more than one destination at a time

##### Label text

The label text should be a short, meaningful description of each navigation destination and another way for people to understand an icon’s meaning.  
  
All navigation items require a label text. It should be 1-2 words.

(fig) Label text must be brief and clear

**[DO]** (fig) Use brief text labels to identify the purpose of a destination

**[DON'T]** (fig) Don’t wrap or truncate text as it can make the label hard to understand

**[DON'T]** (fig) Don’t shrink longer text to fit on a single line

##### Badges (optional)

Navigation bars can display badges in the upper right corners of the destination icon.  
  
Badges can contain dynamic information, such as the number of new messages.

(fig) Use a small badge to indicate an update, and a large badge to show the amount of updates

(fig) Badges overlap the icon in both vertical and horizontal navigation items

#### Placement

The floating action button (FAB) is placed above the navigation bar. Nav bars are always placed at the bottom of the window.

**[DO]** (fig) The FAB should be right-aligned above the navigation bar

**[DON'T]** (fig) Don’t cover the navigation bar with a FAB

Navigation bars can be temporarily covered by dialogs, bottom sheets, navigation drawers, the on-screen keyboard, or other elements needed to complete a flow. They should not be permanently obstructed on any screen.

(fig) The search feature of the screen triggers the on-screen keyboard, temporarily covering the bottom navigation bar until the search flow is completed

#### Adaptive design

Adaptive design allows an interface to respond or change based on context, such as the user, device, and usage. More on [adaptive design](https://m3.material.io/foundations/layout/layout-overview/adaptive-design)

##### Resizing

Only use navigation bars for compact and medium breakpoints.

**Compact**: For narrow windows, use a navigation bar or modal navigation rail.

**Medium**: Use a navigation bar or navigation rail. Decide based on whether horizontal or vertical space is more important.

**Expanded and extra-large**: Use a navigation rail instead. Decide based on available window space and the number of navigation destinations.

(fig) Navigation bars are best suited for compact and medium breakpoints

The navigation bar container spans 100% of the window width.

(fig) Navigation bars use 100% of the screen width

The navigation bar is used on smaller devices. It’s not intended for desktop.

**[DON'T]** (fig) Don’t use navigation bars for desktop layouts. Instead, use a navigation rail or tabs.

##### Presentation

In medium breakpoints, use horizontal nav items to better use available space.

Horizontal nav items should remain centered with the same padding at each breakpoint.

(fig) A navigation bar in horizontal orientation keeps the same spacing between destinations

#### Behavior

##### Navigation

When selecting a navigation bar item not currently selected, the product navigates to that destination’s screen using a [top level](https://m3.material.io/styles/motion/transitions/transition-patterns#f852afd2-396f-49fd-a265-5f6d96680e16) transition pattern. It can either remember where you left off, or reset to the default view.

1. **Preserve state**: If someone has interacted with this destination, it returns to their scroll position, current tab, and in-line search status.
2. **Reset state**: Any prior user interactions are reset, including scroll position, tab selection, and in-line search.

Choose the behavior that best suits the product and user needs. For example, an app that requires frequent switching between sections should preserve each section’s state.

(fig) After selecting an item on the bottom navigation bar, the app navigates to that destination’s screen

Re-selecting the currently active destination should reset the scroll position to the top of the page.

**Don't swipe between destinations**  
Swiping across the screen does not navigate between destinations, and is not supported by the navigation bar. Swipe behavior should be reserved for related items, such as cards in a carousel, or actions such as archiving a list item.

(fig) Selecting the already selected navigation item scrolls to the top of the screen

##### Scrolling

Upon scroll, the navigation bar can appear or disappear.

Don’t hide the navigation bar on scroll when a [screen reader](https://m3.material.io/foundations/overview/assistive-technology#ec6f3e84-a51c-4dc0-a353-6844f5bde698) is active.

(fig) Scrolling downward can hide the navigation bar; scrolling upward reveals it

##### Selection

The icon becomes filled and the active indicator expands from the center of the icon when switching between destinations.  
  
The active indicator animation should only apply on one axis to better represent a flat, shared plane.

(fig) An active indicator appears when the item is selected.

When a destination is tapped, the destination screens use a [top level](https://m3.material.io/styles/motion/transitions/transition-patterns#f852afd2-396f-49fd-a265-5f6d96680e16) transition pattern. In addition, the icon becomes filled and the active indicator expands from the center of the icon.

(fig) Tapping a destination uses a top level transition pattern

### 5.Accessibility — Accessibility

Source: https://m3.material.io/components/navigation-bar/accessibility


#### Use cases

People should be able to do the following using the assistive technology:

- Move between navigation destinations
- Select a particular navigation destination from a set
- Get appropriate feedback based on input type

#### Interaction & style

**Touch**

- When a navigation item is tapped, the active indicator appears in place, providing feedback that it’s selected
- A touch ripple passes through the indicator
- The icon switches from outlined to filled
- The icon changes color

(fig) Touch: Tap

**Cursor**

- When hovered, the active indicator appears in a reduced state providing a visual cue that the destination is interactive
- When clicked (in both active and inactive states), a ripple passes through the indicator
- The icon switches from outlined to filled
- The icon changes color, becoming darker

(fig) Cursor: Hover, Click

##### Text scaling and truncation

When someone sets their device to show a larger text size, the navigation bar should grow vertically to accommodate larger labels while retaining the default padding. It’s okay for scaled text to wrap in navigation items.

To remain accessible, ensure the full label is always visible on-screen at up to 2x text sizing. Beyond this size, text can truncate.

(fig) Text scaled to 1.5 size

(fig) Text scaled to 2x size

#### Initial focus

Initial focus lands directly on the first navigation item, since that is the first interactive element of the component.

(fig) Focus lands on first navigation item

(fig) The navigation item is selected with Space/Enter

#### Visual indicators

Use a filled icon with a bold label for selected destinations. For unselected destinations use an outlined icon with a medium label.  
  
If an icon doesn’t have a filled style, use a thicker or heavier version of the icon instead.

**[DO]** (fig) Use a filled icon for the selected navigation destination to differentiate from the other destinations

**[DON'T]** (fig) Don’t use outlined icons on selected nav items

(fig) When selected, the icon fills, darkens, and is backed by an active indicator shape

#### Keyboard navigation

|  |  |
| --- | --- |
| Keys | Actions |
| Tab | Move between navigation items |
| Space / Enter | Selects the focused navigation item |

#### Labeling elements

The accessibility label for a navigation item is typically the same as the destination name.

(fig) A navigation bar’s accessibility label can incorporate its adjacent UI text

When the visible UI text is ambiguous, accessibility labels need to be more descriptive. For example, a navigation destination visibly labeled **Library**would benefit from additional information in its accessibility label to clarify the destination’s intent.  
  
Note: On Android Views (MDC-Android), a more descriptive accessibility label is not available and the role is not announced.

(fig) While the visible label text reads **Library**, the accessibility label for this destination clarifies its function: **Music library**

