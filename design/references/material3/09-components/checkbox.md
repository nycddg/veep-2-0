# Checkbox

> Category on m3.material.io: **All other components** · One-line definition (site): Checkboxes let users select one or more items from a list, or turn an item on or off
>
> M3 Expressive status: **No M3 Expressive change listed on the site** (classification from https://m3.material.io/blog/building-with-m3-expressive and the component's Overview page)
>
> **Web (Material Web Components — "currently in maintenance mode"; "Material 3 Expressive is not implemented on Web"):** site status Web = **AVAILABLE**, Web: Expressive = **—**; material-web repo: `docs/components/checkbox.md`. Details: [../13-repositories-implementation.md](../13-repositories-implementation.md)
>
> Sources: [Overview](https://m3.material.io/components/checkbox/overview) · [Specs](https://m3.material.io/components/checkbox/specs) · [Guidelines](https://m3.material.io/components/checkbox/guidelines) · [Accessibility](https://m3.material.io/components/checkbox/accessibility)
>
> Site content timestamp: 2026-08-12T09:53:04.800Z · Accessed 2026-10-09

This file reorganizes Material's own text. Sections 1–4 are extracted verbatim from the Overview/Specs/Guidelines/Accessibility tabs; nothing is paraphrased. Image-only examples are represented by their on-site captions (“(fig)”). For the interactive token tables, resolved values are linked in §3.

## 1. Key points (verbatim from Overview)

- Use checkboxes (instead of switches or radio buttons) if multiple options can be selected from a list
- Label should be scannable
- Selected items are more prominent than unselected items

## 2. Status, versioning & M3 Expressive changes (verbatim)

## Differences from M2

- Color: New color mappings and compatibility with dynamic color
- States: New indeterminate states as well as error states for unselected, selected, and indeterminate

(fig) M2

(fig) M3

## Implementation links (all platforms; site status tables + verified repo paths)

| Platform | Site status | Link |
|---|---|---|
| Web | AVAILABLE | [https://github.com/material-components/material-web/blob/main/docs/components/checkbox.md](https://github.com/material-components/material-web/blob/main/docs/components/checkbox.md) |
| Web: Expressive | — (no row on the site table) | — |
| Jetpack Compose | AVAILABLE | [https://developer.android.com/develop/ui/compose/components/checkbox](https://developer.android.com/develop/ui/compose/components/checkbox) |
| Jetpack Compose: Expressive | — (no row on the site table) | — |
| Android Views (MDC-Android) | AVAILABLE | [https://github.com/material-components/material-components-android/blob/master/docs/components/Checkbox.md](https://github.com/material-components/material-components-android/blob/master/docs/components/Checkbox.md) |
| Android Views (MDC-Android): Expressive | — (no row on the site table) | — |
| Flutter | AVAILABLE | [https://api.flutter.dev/flutter/material/Checkbox-class.html](https://api.flutter.dev/flutter/material/Checkbox-class.html) |

Source repositories:
- **Web (material-web) source:** [material-web/checkbox/](https://github.com/material-components/material-web/tree/main/checkbox) · docs: [docs/components](https://github.com/material-components/material-web/tree/main/docs/components)
- **Jetpack Compose:** library source [androidx/androidx compose/material3/material3](https://github.com/androidx/androidx/tree/androidx-main/compose/material3/material3) (mirror of android.googlesource.com).
- **Android Views (MDC-Android):** [docs/components](https://github.com/material-components/material-components-android/tree/master/docs/components) (per-component doc linked in the table above where the site gives one).
- **Flutter:** [flutter/flutter packages/flutter/lib/src/material](https://github.com/flutter/flutter/tree/master/packages/flutter/lib/src/material). "M3 Expressive is not available on Flutter" (develop/flutter).

## 3. Token sets used on the Specs tab

| Token set (as shown on site) | Token-set name | Status | Resolved values |
|---|---|---|---|
| Checkbox | `md.comp.checkbox` | current | [../tokens/components/checkbox.md](../tokens/components/checkbox.md) |

## 4. Rule index — every Do / Don't / Caution on the component's pages (verbatim captions)

- (Guidelines) **[DO]** (fig) Checkboxes let users select one or more options from a list. A parent checkbox allows for easy selection or deselection of all items.
- (Guidelines) **[DON'T]** (fig) If a list consists of multiple options, don't use switches. Instead, use checkboxes. Checkboxes imply the items are related, and take up less visual space.

## 5. Full page text by tab (verbatim digest)

### 5.Overview — Overview

Source: https://m3.material.io/components/checkbox/overview


- Use checkboxes (instead of switches or radio buttons) if multiple options can be selected from a list
- Label should be scannable
- Selected items are more prominent than unselected items

(fig) Unselected, selected (hover), and indeterminate checkboxes

#### Availability & resources

**Implementation status — Checkbox** (source: m3.material.io status table, data `designSystems/030656e0a1083ef1/components/589af604996f7a3e`)

| Resource | Type | Status | Link |
|---|---|---|---|
| Design Kit (Figma) | FIGMA | AVAILABLE | https://www.figma.com/community/file/1035203688168086460 |
| Flutter | FLUTTER_IMPLEMENTATION | AVAILABLE | https://api.flutter.dev/flutter/material/Checkbox-class.html |
| Jetpack Compose | JETPACK_IMPLEMENTATION | AVAILABLE | https://developer.android.com/develop/ui/compose/components/checkbox |
| Android Views (MDC-Android) | ANDROID_IMPLEMENTATION | AVAILABLE | https://github.com/material-components/material-components-android/blob/master/docs/components/Checkbox.md |
| Web | LIT_IMPLEMENTATION | AVAILABLE | https://github.com/material-components/material-web/blob/main/docs/components/checkbox.md |

#### Differences from M2

- Color: New color mappings and compatibility with dynamic color
- States: New indeterminate states as well as error states for unselected, selected, and indeterminate

(fig) M2

(fig) M3

### 5.Specs — Specs

Source: https://m3.material.io/components/checkbox/specs


#### Tokens & specs

Browse the component elements, attributes, tokens, and their values.

_[Interactive TOKEN_TABLE module: resource `designSystems/20543ce18892f7d9/components/31f16b44fe03b0c0`; token sets: (all). Resolved values are in the tokens/ folder of this guide.]_

#### Checkbox

(fig) 1. Container
2. Icon

#### Color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](https://m3.material.io/foundations/design-tokens/overview)

(fig) 1. Checkbox
2. State-layer
3. Icon

##### Adjacent text label color

Use the color role **on surface** for adjacent text labels. This remains the same even if interacting with the label or component.

(fig) The text color remains the same regardless if the checkbox is selected or not

#### States

States are visual representations used to communicate the status of a component or interactive element. [Learn more about interaction states](https://m3.material.io/foundations/interaction/states/overview)

(fig) 1. Enabled
2. Disabled
3. Hovered
4. Focused
5. Pressed

#### Measurements

| Attribute | Value |
| --- | --- |
| Container size | 18dp |
| Container corner shape | 2dp |
| Icon size | 18dp |
| Icon alignment | Center-aligned |
| Target size | 48dp |
| State-layer size | 40dp |

### 5.Guidelines — Guidelines

Source: https://m3.material.io/components/checkbox/guidelines


(fig) Checkboxes in a list of items

#### Usage

Use checkboxes to:

- Select one or more options from a list
- Present a list containing sub-selections
- Turn an item on or off in a desktop environment
- Visually group similar options together

(fig) Checkboxes select multiple, related options

Checkboxes should be used instead of switches if multiple, related options can be selected from a list. Checkboxes visually group similar items effectively and take up less space than switches.

**[DO]** (fig) Checkboxes let users select one or more options from a list. A parent checkbox allows for easy selection or deselection of all items.

**[DON'T]** (fig) If a list consists of multiple options, don't use switches. Instead, use checkboxes. Checkboxes imply the items are related, and take up less visual space.

##### Alternate selection controls

Checkboxes, radio buttons, and switches are the three main selection controls. They all help people make choices, like selecting options or switching settings on or off.

- Use checkboxes to select multiple related options in a list.
- Use radio buttons to select a single option in a list.
- Use switches to select standalone or more verbose options in a list, like settings.

(fig) Radio buttons

(fig) Switches

#### Anatomy

(fig) 1. Container

2. Icon

#### Responsive layout

In expanded breakpoints, placing checkboxes within a contained region such as a side sheet can help group related controls and available actions.

(fig) A side sheet can group related controls on larger screens

#### Behavior

Multiple checkboxes in a list can be selected.

(fig) Selecting multiple items in a list using checkboxes

Checkboxes can have a parent-child relationship with other checkboxes.

- When the parent checkbox is checked, all child checkboxes are checked
- If a parent checkbox is unchecked, all child checkboxes are unchecked
- If some, but not all, child checkboxes are checked, the parent checkbox becomes an indeterminate checkbox. Checking an indeterminate checkbox checks all child items.

(fig) Use a parent checkbox to make it more efficient to select many items

When selected, a checkbox clearly and instantly communicates its selected state.

If used to turn something on or off, the action should be immediately executed.

(fig) Turning an item on or off using a checkbox

### 5.Accessibility — Accessibility

Source: https://m3.material.io/components/checkbox/accessibility


#### Use cases

People should be able to use assistive technology to:

- Navigate to a checkbox
- Toggle the checkbox on and off
- Get appropriate feedback based on input type documented under [Interaction & style](https://m3.material.io/components/checkbox/accessibility#6a2f55e5-2fa0-4204-b6d1-62362dda89c7)

#### Interaction & style

Users should be able to select either the text label or the checkbox to select an option.

(fig) A checkbox selected via the text label

The parent checkbox has three states: selected, unselected, and indeterminate.

Checkboxes can be selected or unselected regardless of the state of the other checkboxes in a group.

If some, but not all, child checkboxes are checked, the parent checkbox becomes indeterminate. Selecting an indeterminate parent checkbox will check all of its child checkboxes.

(fig) An indeterminate selection indicating that at least one checkbox is selected within a group

#### Avoid applying density by default

Don't apply density to checkboxes by default — this lowers their targets below our best practice of 48x48 CSS pixels. Instead, give people a way to choose a higher density, like selecting a denser layout or changing the theme.

To ensure that this density setting can be easily reverted when it's active, keep all the targets to change it at minimum 48x48 CSS pixels each.

#### Keyboard navigation

| Keys | Actions |
| --- | --- |
| **Tab** | Moves focus to enabled chip or chip group |
| **Space** or **Enter** | Activates, selects, or deselects the focused chip |
| **Backspace** or **Delete** | Removes currently focused input chip |
| **Arrows** | Moves focus between chips |

#### Labeling elements

If the UI text is correctly linked to the checkbox, assistive tech (such as a screen reader) will read the UI text followed by the component’s role.

The accessibility label for an individual checkbox is typically the same as its adjacent text label.

(fig) The accessibility label clearly states the text label of the checkbox

