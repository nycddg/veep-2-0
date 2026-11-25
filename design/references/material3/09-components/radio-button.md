# Radio button

> Category on m3.material.io: **All other components** · One-line definition (site): Radio buttons let people select one option from a set of options
>
> M3 Expressive status: **No M3 Expressive change listed on the site** (classification from https://m3.material.io/blog/building-with-m3-expressive and the component's Overview page)
>
> **Web (Material Web Components — "currently in maintenance mode"; "Material 3 Expressive is not implemented on Web"):** site status Web = **AVAILABLE**, Web: Expressive = **—**; material-web repo: `docs/components/radio.md`. Details: [../13-repositories-implementation.md](../13-repositories-implementation.md)
>
> Sources: [Overview](https://m3.material.io/components/radio-button/overview) · [Specs](https://m3.material.io/components/radio-button/specs) · [Guidelines](https://m3.material.io/components/radio-button/guidelines) · [Accessibility](https://m3.material.io/components/radio-button/accessibility)
>
> Site content timestamp: 2026-07-17T07:17:47.331Z · Accessed 2026-10-09

This file reorganizes Material's own text. Sections 1–4 are extracted verbatim from the Overview/Specs/Guidelines/Accessibility tabs; nothing is paraphrased. Image-only examples are represented by their on-site captions (“(fig)”). For the interactive token tables, resolved values are linked in §3.

## 1. Key points (verbatim from Overview)

- Use radio buttons (not switches) when only one item can be selected from a list
- Label should be scannable
- Selected items are more prominent than unselected items

## 2. Status, versioning & M3 Expressive changes (verbatim)

## What’s new

- Color: New color mappings and compatibility with dynamic color

(fig) Radio buttons feature new color mappings

## Implementation links (all platforms; site status tables + verified repo paths)

| Platform | Site status | Link |
|---|---|---|
| Web | AVAILABLE | [https://github.com/material-components/material-web/blob/main/docs/components/radio.md](https://github.com/material-components/material-web/blob/main/docs/components/radio.md) |
| Web: Expressive | — (no row on the site table) | — |
| Jetpack Compose | AVAILABLE | [https://developer.android.com/develop/ui/compose/components/radio-button](https://developer.android.com/develop/ui/compose/components/radio-button) |
| Jetpack Compose: Expressive | — (no row on the site table) | — |
| Android Views (MDC-Android) | AVAILABLE | [https://github.com/material-components/material-components-android/blob/master/docs/components/RadioButton.md](https://github.com/material-components/material-components-android/blob/master/docs/components/RadioButton.md) |
| Android Views (MDC-Android): Expressive | — (no row on the site table) | — |
| Flutter | AVAILABLE | [https://api.flutter.dev/flutter/material/ThemeData/useMaterial3.html](https://api.flutter.dev/flutter/material/ThemeData/useMaterial3.html) |

Source repositories:
- **Web (material-web) source:** [material-web/radio/](https://github.com/material-components/material-web/tree/main/radio) · docs: [docs/components](https://github.com/material-components/material-web/tree/main/docs/components)
- **Jetpack Compose:** library source [androidx/androidx compose/material3/material3](https://github.com/androidx/androidx/tree/androidx-main/compose/material3/material3) (mirror of android.googlesource.com).
- **Android Views (MDC-Android):** [docs/components](https://github.com/material-components/material-components-android/tree/master/docs/components) (per-component doc linked in the table above where the site gives one).
- **Flutter:** [flutter/flutter packages/flutter/lib/src/material](https://github.com/flutter/flutter/tree/master/packages/flutter/lib/src/material). "M3 Expressive is not available on Flutter" (develop/flutter).

## 3. Token sets used on the Specs tab

| Token set (as shown on site) | Token-set name | Status | Resolved values |
|---|---|---|---|
| Radio Button | `md.comp.radio-button` | current | [../tokens/components/radio-button.md](../tokens/components/radio-button.md) |

## 4. Rule index — every Do / Don't / Caution on the component's pages (verbatim captions)

- (Guidelines) **[DO]** (fig) Use radio buttons when only one option can be selected from a list
- (Guidelines) **[DO]** (fig) Use checkboxes when multiple options can be selected from a list
- (Guidelines) **[DON'T]** (fig) Don’t nest radio buttons
- (Guidelines) **[DON'T]** (fig) Don’t allow radio buttons to select multiple options
- (Guidelines) **[DO]** (fig) Use radio buttons when there are five or fewer options
- (Guidelines) **[DO]** (fig) Consider using a drop-down menu instead of radio buttons when space is constrained
- (Guidelines) **[DO]** (fig) Radio buttons should always have one option pre-selected
- (Guidelines) **[CAUTION]** (fig) Avoid using horizontal radio button lists

## 5. Full page text by tab (verbatim digest)

### 5.Overview — Overview

Source: https://m3.material.io/components/radio-button/overview


- Use radio buttons (not switches) when only one item can be selected from a list
- Label should be scannable
- Selected items are more prominent than unselected items

(fig) Radio buttons can be selected

#### Resources & availability

**Implementation status — Radio button** (source: m3.material.io status table, data `designSystems/030656e0a1083ef1/components/18e98bbdcbc43596`)

| Resource | Type | Status | Link |
|---|---|---|---|
| Design Kit (Figma) | FIGMA | AVAILABLE | https://www.figma.com/community/file/1035203688168086460 |
| Flutter | FLUTTER_IMPLEMENTATION | AVAILABLE | https://api.flutter.dev/flutter/material/ThemeData/useMaterial3.html |
| Jetpack Compose | JETPACK_IMPLEMENTATION | AVAILABLE | https://developer.android.com/develop/ui/compose/components/radio-button |
| Android Views (MDC-Android) | ANDROID_IMPLEMENTATION | AVAILABLE | https://github.com/material-components/material-components-android/blob/master/docs/components/RadioButton.md |
| Web | LIT_IMPLEMENTATION | AVAILABLE | https://github.com/material-components/material-web/blob/main/docs/components/radio.md |

#### What’s new

- Color: New color mappings and compatibility with dynamic color

(fig) Radio buttons feature new color mappings

### 5.Specs — Specs

Source: https://m3.material.io/components/radio-button/specs


(fig) 1. Radio button icon

#### Tokens & specs

[Learn more about design tokens](https://m3.material.io/foundations/design-tokens/overview)

_[Interactive TOKEN_TABLE module: resource `designSystems/20543ce18892f7d9/components/6acb269a58d5f93f`; token sets: (all). Resolved values are in the tokens/ folder of this guide.]_

#### Color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](https://m3.material.io/foundations/design-tokens/overview)

(fig) Radio button color roles used for light and dark themes:

1. Primary
2. On surface variant

##### Adjacent text label color

Use the color role **on surface** for adjacent text labels. This remains the same even if interacting with the label or component.

(fig) The text color remains the same regardless if the button is selected or not

#### States

States are visual representations used to communicate the status of a component or interactive element. [Learn more about interaction states](https://m3.material.io/foundations/interaction/states/overview)

(fig) 1. Enabled
2. Hover
3. Focus
4. Pressed
5. Disabled

[State specs are in the token module above](https://m3.material.io/components/radio-button/specs#3eef19a6-cdcb-4ecf-b1af-2b8095d485ac)

#### Measurements

(fig) Radio button size measurements

| Attribute | Value |
| --- | --- |
| Icon size | 20dp |
| State layer size | 40dp |
| Target size | 48dp |

### 5.Guidelines — Guidelines

Source: https://m3.material.io/components/radio-button/guidelines


(fig) Radio buttons

#### Usage

Radio buttons are the recommended way to allow users to make a single selection from a list of options.

Only one radio button can be selected at a time.

(fig) Radio buttons should always be accompanied by clear inline labels

Use radio buttons to:

- Select a single option from a set
- Expose all available options

(fig) Radio buttons are single-select, unlike checkboxes which are multi-select

**[DO]** (fig) Use radio buttons when only one option can be selected from a list

**[DO]** (fig) Use checkboxes when multiple options can be selected from a list

Avoid nesting radio buttons or using radio buttons to select multiple options.

**[DON'T]** (fig) Don’t nest radio buttons

**[DON'T]** (fig) Don’t allow radio buttons to select multiple options

##### Alternate selection controls

Radio buttons are one of several selection controls, which allow people to make choices such as selecting options or switching settings on or off.

Switches and checkboxes are alternative selection controls that can be used to change settings or preferences.

(fig) Switches

(fig) Checkboxes

Use radio buttons when there are five or fewer options.

Consider using a drop-down menu instead of radio buttons when it’s important to save space on a screen. However, drop-down menus require additional steps for a person, both in the number of clicks and cognitive effort.

**[DO]** (fig) Use radio buttons when there are five or fewer options

**[DO]** (fig) Consider using a drop-down menu instead of radio buttons when space is constrained

#### Anatomy

(fig) 1. Selected icon
2. Adjacent label text
3. Unselected icon

##### Adjacent label text

Always pair radio buttons with an adjacent label describing what the radio button selects.

Because only one radio button can be selected at a time, each choice must have its own label.

(fig) Radio button always need label text

#### Placement

Radio buttons are often arranged in stacked layouts.

Radio buttons should be vertically listed and have one option always selected.

**[DO]** (fig) Radio buttons should always have one option pre-selected

**[CAUTION]** (fig) Avoid using horizontal radio button lists

#### Behavior

A radio button is successfully selected when a person clicks or taps either the radio button icon or the label.

(fig) Radio buttons should take effect immediately, unless they're in a dialog or page that needs to be saved

### 5.Accessibility — Accessibility

Source: https://m3.material.io/components/radio-button/accessibility


#### Use cases

People should be able to do the following with assistive technology:

- Navigate to a radio button
- Select a radio button
- Get appropriate feedback based on input type

#### Interaction & style

A radio button can be either selected or unselected. Selecting one radio button deselects any others. A radio group can start with one radio button selected, or none selected.

Once a radio button is selected, the group can’t be deselected. To let people opt out of their selection, either provide a **Not applicable** or **No option** radio button, or provide a separate way to deselect all radio buttons, like **Clear selection**.

People should be able to select either the text label or the radio button to select an option.

(fig) Only one radio button is selected at a time

##### Avoid applying density by default

Don't apply density to radio buttons by default. This lowers their targets below Material's recommendation of 48x48 CSS pixels. Instead, give people a way to choose a higher density, like selecting a denser layout or changing the theme.

To ensure this density setting can be easily reverted when it's active, keep all targets to change it at a minimum of 48x48 CSS pixels each.

#### Initial focus

When outside the radio group, **Tab** moves focus directly to the selected radio button, or the first one if none are selected.

**Shift+Tab** instead focuses on the last radio if none are selected.

Use the **arrows** to navigate between options.

(fig) Tab brings the focus to the initially selected item or the initial radio option

(fig) Arrows move to next element in a list

#### Keyboard navigation

| Keys | Actions |
| --- | --- |
| **Tab** | Moves focus into the group to the selected radio button, or the first if none are selected |
| **Shift** + **Tab** | Moves focus into the group to the selected radio button, or the last if none are selected |
| **Arrows** | Moves focus and selects the previous or next radio button. Wraps focus and selection between the first and last radio buttons. |
| **Space** | Selects a focused radio button. If already selected, does nothing. |

#### Labeling elements

If the UI text is correctly linked to the radio button, assistive tech such as a screenreader will read the UI text, followed by the component’s role.

The accessibility label for a group of radio buttons is typically the same as its title. The role is **Radio group**.

(fig) Label the radio group based on the category title

The accessibility label for an individual radio button is typically the same as its adjacent text label.

(fig) Label the radio button based on its label text

