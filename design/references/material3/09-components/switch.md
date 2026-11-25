# Switch

> Category on m3.material.io: **All other components** · One-line definition (site): Switches toggle the selection of an item on and off
>
> M3 Expressive status: **No M3 Expressive change listed on the site** (classification from https://m3.material.io/blog/building-with-m3-expressive and the component's Overview page)
>
> **Web (Material Web Components — "currently in maintenance mode"; "Material 3 Expressive is not implemented on Web"):** site status Web = **AVAILABLE**, Web: Expressive = **—**; material-web repo: `docs/components/switch.md`. Details: [../13-repositories-implementation.md](../13-repositories-implementation.md)
>
> Sources: [Overview](https://m3.material.io/components/switch/overview) · [Specs](https://m3.material.io/components/switch/specs) · [Guidelines](https://m3.material.io/components/switch/guidelines) · [Accessibility](https://m3.material.io/components/switch/accessibility)
>
> Site content timestamp: 2026-07-17T07:03:01.922Z · Accessed 2026-10-09

This file reorganizes Material's own text. Sections 1–4 are extracted verbatim from the Overview/Specs/Guidelines/Accessibility tabs; nothing is paraphrased. Image-only examples are represented by their on-site captions (“(fig)”). For the interactive token tables, resolved values are linked in §3.

## 1. Key points (verbatim from Overview)

- Use switches (not radio buttons) if the items in a list can be independently controlled
- Switches are the best way to let people adjust settings
- Make sure the switch’s selection (on or off) is visible at a glance

## 2. Status, versioning & M3 Expressive changes (verbatim)

## Differences from M2

- Accessibility: Visual presentation is more accessible
- Color: New color mappings meet Material's non-text-contrast requirements in addition to compatibility with dynamic color
- Icons: Ability to have an optional icon within the switch handle
- Layout: Track is taller and wider

(fig) M2: Switches have a circular handle that extends beyond the edge of the track

(fig) M3: Switches have a taller and wider track, new color mappings, and the ability to show an icon in the handle

## Implementation links (all platforms; site status tables + verified repo paths)

| Platform | Site status | Link |
|---|---|---|
| Web | AVAILABLE | [https://github.com/material-components/material-web/blob/main/docs/components/switch.md](https://github.com/material-components/material-web/blob/main/docs/components/switch.md) |
| Web: Expressive | — (no row on the site table) | — |
| Jetpack Compose | AVAILABLE | [https://developer.android.com/develop/ui/compose/components/switch](https://developer.android.com/develop/ui/compose/components/switch) |
| Jetpack Compose: Expressive | — (no row on the site table) | — |
| Android Views (MDC-Android) | AVAILABLE | [https://github.com/material-components/material-components-android/blob/master/docs/components/Switch.md](https://github.com/material-components/material-components-android/blob/master/docs/components/Switch.md) |
| Android Views (MDC-Android): Expressive | — (no row on the site table) | — |
| Flutter | AVAILABLE | [https://api.flutter.dev/flutter/material/ThemeData/useMaterial3.html](https://api.flutter.dev/flutter/material/ThemeData/useMaterial3.html) |

Source repositories:
- **Web (material-web) source:** [material-web/switch/](https://github.com/material-components/material-web/tree/main/switch) · docs: [docs/components](https://github.com/material-components/material-web/tree/main/docs/components)
- **Jetpack Compose:** library source [androidx/androidx compose/material3/material3](https://github.com/androidx/androidx/tree/androidx-main/compose/material3/material3) (mirror of android.googlesource.com).
- **Android Views (MDC-Android):** [docs/components](https://github.com/material-components/material-components-android/tree/master/docs/components) (per-component doc linked in the table above where the site gives one).
- **Flutter:** [flutter/flutter packages/flutter/lib/src/material](https://github.com/flutter/flutter/tree/master/packages/flutter/lib/src/material). "M3 Expressive is not available on Flutter" (develop/flutter).

## 3. Token sets used on the Specs tab

| Token set (as shown on site) | Token-set name | Status | Resolved values |
|---|---|---|---|
| Switch | `md.comp.switch` | current | [../tokens/components/switch.md](../tokens/components/switch.md) |

## 4. Rule index — every Do / Don't / Caution on the component's pages (verbatim captions)

- (Guidelines) **[DO]** (fig) Use a connected button group to choose between opposing options
- (Guidelines) **[DON'T]** (fig) Avoid using switches to toggle between opposing options
- (Guidelines) **[DO]** (fig) Use checkboxes (not switches) to let people select one or more options from a list
- (Guidelines) **[DON'T]** (fig) A switch can't replace a button. People expect a call to action to be a button, not a switch.
- (Guidelines) **[DO]** (fig) Use radio buttons (not switches) when only one item can be selected from a list
- (Guidelines) **[DON'T]** (fig) Avoid using a switch to select multiple options that require people to save. Switches should be immediate. Use checkboxes instead.
- (Guidelines) **[DO]** (fig) Use icons that clearly communicate whether the switch is on or off, such as an X and a checkmark
- (Guidelines) **[DON'T]** (fig) Avoid using more ambiguous or non-binary icons, such as a moon or edit icon
- (Guidelines) **[DO]** (fig) Keep labels short and direct. A label should describe what the control does when the switch is on.
- (Guidelines) **[DON'T]** (fig) Don't add label text into the switch; the font size would be too small to be accessible. Use an appropriate icon instead.

## 5. Full page text by tab (verbatim digest)

### 5.Overview — Overview

Source: https://m3.material.io/components/switch/overview


- Use switches (not radio buttons) if the items in a list can be independently controlled
- Switches are the best way to let people adjust settings
- Make sure the switch’s selection (on or off) is visible at a glance

(fig) Switches can be toggled on and off

#### Availability & resources

**Implementation status — Switch** (source: m3.material.io status table, data `designSystems/030656e0a1083ef1/components/0fe2e78f2f029241`)

| Resource | Type | Status | Link |
|---|---|---|---|
| Design Kit (Figma) | FIGMA | AVAILABLE | https://www.figma.com/community/file/1035203688168086460 |
| Flutter | FLUTTER_IMPLEMENTATION | AVAILABLE | https://api.flutter.dev/flutter/material/ThemeData/useMaterial3.html |
| Jetpack Compose | JETPACK_IMPLEMENTATION | AVAILABLE | https://developer.android.com/develop/ui/compose/components/switch |
| Android Views (MDC-Android) | ANDROID_IMPLEMENTATION | AVAILABLE | https://github.com/material-components/material-components-android/blob/master/docs/components/Switch.md |
| Web | LIT_IMPLEMENTATION | AVAILABLE | https://github.com/material-components/material-web/blob/main/docs/components/switch.md |

#### Differences from M2

- Accessibility: Visual presentation is more accessible
- Color: New color mappings meet Material's non-text-contrast requirements in addition to compatibility with dynamic color
- Icons: Ability to have an optional icon within the switch handle
- Layout: Track is taller and wider

(fig) M2: Switches have a circular handle that extends beyond the edge of the track

(fig) M3: Switches have a taller and wider track, new color mappings, and the ability to show an icon in the handle

### 5.Specs — Specs

Source: https://m3.material.io/components/switch/specs


(fig) 1. Track
2. Handle (formerly "thumb")
3. Icon

#### Tokens & specs

Browse the component elements, attributes, tokens, and their values. [Learn more about design tokens](https://m3.material.io/foundations/design-tokens/overview)

_[Interactive TOKEN_TABLE module: resource `designSystems/20543ce18892f7d9/components/33b1b2925d9ff561`; token sets: (all). Resolved values are in the tokens/ folder of this guide.]_

#### Color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](https://m3.material.io/foundations/design-tokens/overview)

(fig) Switch color roles used for light and dark themes:

1. Surface container highest
2. Outline
3. Outline
4. Primary
5. On primary
6. On primary container

##### Adjacent text label color

Use the color role **on surface** for adjacent text labels. This remains the same even if interacting with the label or component.

(fig) The text label uses **on surface**. Supporting text may use **on surface variant**.

#### States

States are visual representations used to communicate the status of a component or interactive element. [Learn more about interaction states](https://m3.material.io/foundations/interaction/states)

(fig) 1. Enabled
2. Hovered
3. Focused
4. Pressed
5. Disabled

[State specs are in the token module above](https://m3.material.io/components/switch/specs#3708644e-b4d7-4237-bb0a-7afeeae4a9b0)

#### Measurements

(fig) Switches without icons

(fig) Pressed switches without icons

(fig) Switches with icons

(fig) Pressed switches with icons

| Element | Attribute | Value |
| --- | --- | --- |
| Track | Height | 32dp |
| Width | 52dp |
| Outline width | 2dp |
| Shape | [md.sys.shape.corner.full](https://m3.material.io/styles/shape/corner-radius-scale#56e2bfb5-4bec-49bd-b3a3-bd822c8ab88e) |
| Handle | Height (unselected) | 16dp |
| Height - with icon | 24dp |
| Height (selected) | 24dp |
| Height (pressed) | 28dp |
| Width (unselected) | 16dp |
| Width - with icon | 24dp |
| Width (selected) | 24dp |
| Width (pressed) | 28dp |
| Shape | [md.sys.shape.corner.full](https://m3.material.io/styles/shape/corner-radius-scale#56e2bfb5-4bec-49bd-b3a3-bd822c8ab88e) |
| State layer | Size | 40dp |
| Shape | [md.sys.shape.corner.full](https://m3.material.io/styles/shape/corner-radius-scale#56e2bfb5-4bec-49bd-b3a3-bd822c8ab88e) |
| Target | Size | 48dp |
| Icon | Size (selected) | 16dp |
| Icon | Size (unselected) | 16dp |

#### Configurations

1. Without icons
2. Icon on selected switch
3. Icon on selected and unselected switch

### 5.Guidelines — Guidelines

Source: https://m3.material.io/components/switch/guidelines


(fig) Switches change settings and other options immediately

#### Usage

Switches are best used to adjust settings and other standalone options.

They make a binary selection:

- On and off
- True and false

The effects of a switch should start immediately, without needing to save.

(fig) Use a switch to turn an option on and off

Use switches to:

- Toggle a single item on or off
- Immediately activate or deactivate something

(fig) Switches are commonly used on mobile to turn settings on or off

Switches control binary options, not opposing ones. A binary option represents a single selection that's either on or off.

Opposing options are when only one option in a set can be selected at a time, like a list or map view. Use a connected button group instead.

**[DO]** (fig) Use a connected button group to choose between opposing options

**[DON'T]** (fig) Avoid using switches to toggle between opposing options

##### Alternate selection controls

Checkboxes, radio buttons, and switches are the three main kinds of selection controls. They help people make choices, like selecting options or turning settings on and off.

Use checkboxes to select multiple related options in a list.

Use radio buttons to select a single option in a list.

Use switches to select standalone or more verbose options in a list, like settings.

(fig) Checkboxes

(fig) Radio buttons

**[DO]** (fig) Use checkboxes (not switches) to let people select one or more options from a list

**[DON'T]** (fig) A switch can't replace a button. People expect a call to action to be a button, not a switch.

**[DO]** (fig) Use radio buttons (not switches) when only one item can be selected from a list

**[DON'T]** (fig) Avoid using a switch to select multiple options that require people to save. Switches should be immediate. Use checkboxes instead.

#### Anatomy

(fig) 1. Track
2. Handle
3. Icon (optional)

##### Icon (optional)

The switch handle can contain an optional icon.

(fig) The icon within the handle should always communicate the switch's selection

Icons can be used to visually emphasize the switch’s selection. The icon’s meaning should be clear and unambiguous to help the people understand whether switch is on or off.

**[DO]** (fig) Use icons that clearly communicate whether the switch is on or off, such as an X and a checkmark

**[DON'T]** (fig) Avoid using more ambiguous or non-binary icons, such as a moon or edit icon

##### Label text

Switches should always be paired with an inline label describing what the switch controls when selected.

**[DO]** (fig) Keep labels short and direct. A label should describe what the control does when the switch is on.

**[DON'T]** (fig) Don't add label text into the switch; the font size would be too small to be accessible. Use an appropriate icon instead.

#### Placement

Switches are often arranged in stacked layouts.

(fig) Settings screens are common places to use switches

#### Behavior

A switch is successfully toggled when the handle slides to the other side of the track after an interaction.

(fig) When selected, the switch handle slides to the opposite end of the track

When a person toggles a switch, its handle size changes and the corresponding action takes effect immediately.

(fig) The **on** state of the switch is indicated by a larger handle size

### 5.Accessibility — Accessibility

Source: https://m3.material.io/components/switch/accessibility


#### Use cases

People should be able to do the following with assistive technology:

- Navigate to a switch with a keyboard or switch input
- Toggle the switch on and off
- Get appropriate feedback based on input type documented under [Interaction & style](https://m3.material.io/components/switch/accessibility#c0e9fae1-48df-428b-b028-4f7be071ada3)

#### Interaction & style

The switch handle increases in size to indicate interactivity for both touch and cursor control interactions.

**Touch**  
When tapped or dragged, the handle size grows, providing interaction feedback.

**Cursor**  
When hovered (in both on and off states), the hover area grows, providing a visual cue that the handle is interactive. When clicked, the handle size grows.

(fig) Touch: Tap, Drag

(fig) Cursor: Hover, Click

##### Avoid applying density by default

Don't apply density to switches by default — this lowers their targets below our best practice of 48x48 CSS pixels. Instead, give people a way to choose a higher density, like selecting a denser layout or changing the theme.

To ensure that this density setting can easily be reverted when it's active, keep all targets to change it at a minimum 48x48 CSS pixels each.

#### Initial focus

Initial focus lands directly on the switch’s handle, since it’s the primary interactive element of the component.

(fig) Focus lands on the switch handle

(fig) The switch is toggled using **Space** or **Enter**

#### Keyboard navigation

| Keys | Actions |
| --- | --- |
| **Tab** | Focus lands on the switch handle |
| **Space** or**Enter** | Toggles the handle on and off |

#### Labeling elements

The accessibility label for a switch uses the adjacent label text if implemented correctly.

Assistive tech such as a screen reader will read the UI text followed by the component’s role.

(fig) A switch’s accessibility label can incorporate its adjacent UI text

When the visible UI text is ambiguous, accessibility labels need to be more descriptive. For example, a switch visibly labelled **Photo album** would benefit from additional information to clarify the switch’s function.

Consider making the adjacent label text more descriptive when possible. This reduces the need for different accessibility text.

(fig) While the visible label text reads **Photo album**, the accessibility label for this switch clarifies its function: **Photo album access**

