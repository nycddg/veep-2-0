# Text fields

> Category on m3.material.io: **All other components** · One-line definition (site): Text fields let users enter text into a UI
>
> M3 Expressive status: **No M3 Expressive change listed on the site** (classification from https://m3.material.io/blog/building-with-m3-expressive and the component's Overview page)
>
> **Web (Material Web Components — "currently in maintenance mode"; "Material 3 Expressive is not implemented on Web"):** site status Web = **AVAILABLE**, Web: Expressive = **—**; material-web repo: `docs/components/text-field.md`. Details: [../13-repositories-implementation.md](../13-repositories-implementation.md)
>
> Sources: [Overview](https://m3.material.io/components/text-fields/overview) · [Specs](https://m3.material.io/components/text-fields/specs) · [Guidelines](https://m3.material.io/components/text-fields/guidelines) · [Accessibility](https://m3.material.io/components/text-fields/accessibility)
>
> Site content timestamp: 2026-09-08T08:21:17.878Z · Accessed 2026-10-09

This file reorganizes Material's own text. Sections 1–4 are extracted verbatim from the Overview/Specs/Guidelines/Accessibility tabs; nothing is paraphrased. Image-only examples are represented by their on-site captions (“(fig)”). For the interactive token tables, resolved values are linked in §3.

## 1. Key points (verbatim from Overview)

- Make sure text fields look interactive
- Two variants: filled and outlined
- The text field’s state (blank, with input, error, etc) should be visible at a glance
- Keep labels and error messages brief and easy to act on
- Text fields commonly appear in forms and dialogs

## 2. Status, versioning & M3 Expressive changes (verbatim)

## Differences from M2

- Color: New color mappings and compatibility with dynamic color

(fig) Text fields have new color mappings

## Implementation links (all platforms; site status tables + verified repo paths)

| Platform | Site status | Link |
|---|---|---|
| Web | AVAILABLE | [https://github.com/material-components/material-web/blob/main/docs/components/text-field.md](https://github.com/material-components/material-web/blob/main/docs/components/text-field.md) |
| Web: Expressive | — (no row on the site table) | — |
| Jetpack Compose | AVAILABLE | [https://developer.android.com/reference/kotlin/androidx/compose/material3/package-summary#textfield](https://developer.android.com/reference/kotlin/androidx/compose/material3/package-summary#textfield) |
| Jetpack Compose: Expressive | — (no row on the site table) | — |
| Android Views (MDC-Android) | AVAILABLE | [https://github.com/material-components/material-components-android/blob/master/docs/components/TextField.md](https://github.com/material-components/material-components-android/blob/master/docs/components/TextField.md) |
| Android Views (MDC-Android): Expressive | — (no row on the site table) | — |
| Flutter | AVAILABLE | [https://api.flutter.dev/flutter/material/ThemeData/useMaterial3.html](https://api.flutter.dev/flutter/material/ThemeData/useMaterial3.html) |

Source repositories:
- **Web (material-web) source:** [material-web/textfield/](https://github.com/material-components/material-web/tree/main/textfield) · docs: [docs/components](https://github.com/material-components/material-web/tree/main/docs/components)
- **Jetpack Compose:** library source [androidx/androidx compose/material3/material3](https://github.com/androidx/androidx/tree/androidx-main/compose/material3/material3) (mirror of android.googlesource.com).
- **Android Views (MDC-Android):** [docs/components](https://github.com/material-components/material-components-android/tree/master/docs/components) (per-component doc linked in the table above where the site gives one).
- **Flutter:** [flutter/flutter packages/flutter/lib/src/material](https://github.com/flutter/flutter/tree/master/packages/flutter/lib/src/material). "M3 Expressive is not available on Flutter" (develop/flutter).

## 3. Token sets used on the Specs tab

| Token set (as shown on site) | Token-set name | Status | Resolved values |
|---|---|---|---|
| Text field - Filled | `md.comp.filled-text-field` | current | [../tokens/components/filled-text-field.md](../tokens/components/filled-text-field.md) |
| Text field - Outlined | `md.comp.outlined-text-field` | current | [../tokens/components/outlined-text-field.md](../tokens/components/outlined-text-field.md) |

## 4. Rule index — every Do / Don't / Caution on the component's pages (verbatim captions)

- (Guidelines) **[DO]** (fig) When using both variants of text fields in a UI, separate them by region
- (Guidelines) **[DON'T]** (fig) When using both variants of text fields, don't use both next to each other or within the same form
- (Guidelines) **[DON'T]** (fig) Don’t truncate label text. Keep it short, clear, and fully visible.
- (Guidelines) **[DON'T]** (fig) Label text shouldn’t take up multiple lines
- (Guidelines) **[DO]** (fig) Swap supporting text with error text
- (Guidelines) **[DON'T]** (fig) Don't add error text in addition to supporting text, as their appearance will shift content
- (Guidelines) **[CAUTION]** (fig) Long errors can wrap to multiple lines if there isn't enough space to clearly describe the error. In this case, ensure padding between text fields is sufficient to prevent multi-lined errors from bumping layout content.
- (Guidelines) **[DON'T]** (fig) Don’t use fixed text field margins on large devices. Text fields shouldn’t span the full width of a large screen.
- (Accessibility) **[DO]** (fig) Make sure the container outline has a minimum contrast of 3:1 to the background
- (Accessibility) **[DON'T]** (fig) Don't choose colors that won't pass Material's minimum contrast of 3:1

## 5. Full page text by tab (verbatim digest)

### 5.Overview — Overview

Source: https://m3.material.io/components/text-fields/overview


- Make sure text fields look interactive
- Two variants: filled and outlined
- The text field’s state (blank, with input, error, etc) should be visible at a glance
- Keep labels and error messages brief and easy to act on
- Text fields commonly appear in forms and dialogs

(fig) 1. Filled text field
2. Outlined text field

#### Availability & resources

**Implementation status — Text fields** (source: m3.material.io status table, data `designSystems/030656e0a1083ef1/components/1747ec3c98bda4e2`)

| Resource | Type | Status | Link |
|---|---|---|---|
| Design Kit (Figma) | FIGMA | AVAILABLE | https://www.figma.com/community/file/1035203688168086460 |
| Flutter | FLUTTER_IMPLEMENTATION | AVAILABLE | https://api.flutter.dev/flutter/material/ThemeData/useMaterial3.html |
| Jetpack Compose | JETPACK_IMPLEMENTATION | AVAILABLE | https://developer.android.com/reference/kotlin/androidx/compose/material3/package-summary#textfield |
| Android Views (MDC-Android) | ANDROID_IMPLEMENTATION | AVAILABLE | https://github.com/material-components/material-components-android/blob/master/docs/components/TextField.md |
| Web | LIT_IMPLEMENTATION | AVAILABLE | https://github.com/material-components/material-web/blob/main/docs/components/text-field.md |

#### Differences from M2

- Color: New color mappings and compatibility with dynamic color

(fig) Text fields have new color mappings

### 5.Specs — Specs

Source: https://m3.material.io/components/text-fields/specs


#### Tokens & specs

Browse the component elements, attributes, tokens, and their values. [Learn about design tokens](https://m3.material.io/foundations/design-tokens/overview)

_[Interactive TOKEN_TABLE module: resource `designSystems/20543ce18892f7d9/components/60990dd98dea0998`; token sets: Text field - Filled, Text field - Outlined. Resolved values are in the tokens/ folder of this guide.]_

#### Filled text field

(fig) 1. Container
2. Leading icon (optional)
3. Label text in empty field
4. Label text in populated field
5. Trailing icon (optional)
6. Focused active Indicator
7. Caret
8. Input text
9. Supporting text (optional)
10. Enabled active indicator

##### Filled text field color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](https://m3.material.io/foundations/design-tokens/overview)

(fig) Filled text field color roles used for light and dark schemes:

1. Surface container highest
2. On surface variant
3. On surface variant
4. Primary
5. On surface variant
6. Primary
7. Primary
8. On surface
9. On surface variant
10. On surface

##### Filled text field states

States are visual representations used to communicate the status of a component or interactive element. [Learn more about interaction states](https://m3.material.io/foundations/interaction/states/overview)

(fig) 1. Enabled (empty)
2. Focused (empty)
3. Hovered (empty)
4. Disabled (empty)
5. Enabled (populated)
6. Focused (populated)
7. Hovered (populated)
8. Disabled (populated)

##### Filled text field error states

Error states are visual representations used to communicate the status of a component or interactive element. An error message can display instructions on how to fix it. Error messages are displayed below the text field as supporting text until fixed.

(fig) 1. Enabled (empty)
2. Focused (empty)
3. Hovered (empty)
4. Enabled (populated)
5. Focused (populated)
6. Hovered (populated)

##### Filled text field measurements

(fig) Padding and size measurements without icons

(fig) Padding and size measurements with icons

(fig) Padding and size measurements with supporting text and character count

| Attribute | Value |
| --- | --- |
| Default container height | 56dp |
| Label alignment (unpopulated) | Vertically centered |
| Top/bottom padding | 8dp |
| Left/right padding without icons | 16dp |
| Left/right padding with icons | 12dp |
| Icon alignment | Vertically centered |
| Padding between icons and text | 16dp |
| Supporting text and character counter top padding | 4dp |
| Padding between supporting text and character counter | 16dp |
| Target size | 56dp |

##### Filled text field configurations

(fig) Empty and populated filled text fields with:

1. Supporting text
2. Trailing icon
3. Leading icon
4. Leading and trailing icons
5. Prefix
6. Suffix
7. Multi-line text field

#### Outlined text field

(fig) 1. Enabled container outline
2. Leading icon (optional)
3. Label text in empty field
4. Label text in populated field
5. Trailing icon (optional)
6. Focused container outline
7. Caret
8. Input text
9. Supporting text (optional)

##### Outlined text field color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](https://m3.material.io/foundations/design-tokens/overview)

(fig) Outlined text field color roles used for light and dark schemes:

1. Outline
2. On surface variant
3. On surface variant
4. Primary
5. On surface variant
6. Primary
7. Primary
8. On surface
9. On surface variant

##### Outlined text field states

States are visual representations used to communicate the status of a component or interactive element. [Learn more about interaction states](https://m3.material.io/foundations/interaction/states/overview)

(fig) 1. Enabled (empty)
2. Focused (empty)
3. Hovered (empty)
4. Disabled (empty)
5. Enabled (populated)
6. Focused (populated)
7. Hovered (populated)
8. Disabled (populated)

##### Outlined text field error states

Error states are visual representations used to communicate the status of a component or interactive element. An error message can display instructions on how to fix it. Error messages are displayed below the text field as supporting text until fixed.

(fig) 1. Enabled (empty)
2. Focused (empty)
3. Hovered (empty)
4. Enabled (populated)
5. Focused (populated)
6. Hovered (populated)

##### Outlined text field measurements

(fig) Padding and size measurements without icons

(fig) Padding and size measurements with icons

(fig) Padding and size measurements with supporting text and character count

| Attribute | Value |
| --- | --- |
| Container height | 56dp |
| Left/right padding without icons | 16dp |
| Left/right padding with icons | 12dp |
| Padding between icons and text | 16dp |
| Icon alignment | Vertically centered |
| Supporting text and character counter top padding | 4dp |
| Padding between supporting text and character counter | 16dp |
| Label alignment | Vertically centered |
| Left/right padding populated label text | 4dp |
| Target size | 56dp |

##### Outlined text field configurations

(fig) Empty and populated outlined text fields with:

1. Supporting text
2. Trailing icon
3. Leading icon
4. Leading and trailing icons
5. Prefix
6. Suffix
7. Multi-line text field

### 5.Guidelines — Guidelines

Source: https://m3.material.io/components/text-fields/guidelines


(fig) Filled and outlined text fields

#### Usage

Use a text field when someone needs to enter text into a UI, such as filling in contact or payment information.

(fig) Contact form using outlined text fields

There are two variants of text fields:

1. Filled text fields
2. Outlined text fields

Both variants of text fields use a container to provide a visual cue for interaction and provide the same functionality.

(fig) Filled text field

(fig) Outlined text field

##### Outlined text fields

Outlined text fields have less visual emphasis than filled text fields. When they appear in places like forms (where many text fields are placed together), their reduced emphasis helps simplify the layout.

(fig) Login screen with outlined text fields

#### Choosing text fields

##### Choosing text fields

Both variants of text field provide the same functionality. The variant of text field used can depend on style alone.

Choose the variant that:

- Works best with an app’s visual style
- Best accommodates the UI's goals
- Is most distinct from other components (like buttons) and surrounding content

(fig) Mobile form using filled text fields

(fig) The same mobile form using outlined text fields

##### Using both text field variants on the same screen

If both variants of text field are used in a UI, they should be used consistently within different sections, and not intermixed within the same region.

For example, use outlined text fields in one section and filled text fields in another.

**[DO]** (fig) When using both variants of text fields in a UI, separate them by region

**[DON'T]** (fig) When using both variants of text fields, don't use both next to each other or within the same form

#### Anatomy

##### Filled text field

(fig) 1. Container
2. Leading icon (optional)
3. Label text in empty field
4. Label text in populated field
5. Trailing icon (optional)
6. Focused active Indicator
7. Caret
8. Input text
9. Supporting text (optional)
10. Enabled active Indicator

##### Outlined text field

(fig) 1. Enabled container outline
2. Label text in empty field
3. Leading icon (optional)
4. Label text in populated field
5. Trailing icon (optional)
6. Focused container outline
7. Caret
8. Input text
9. Supporting text (optional)

##### Containers

Containers improve the discoverability of text fields by creating contrast between the text field and surrounding content.

**Fill and stroke**  
A text field container has a fill and a stroke either around the entire container, or just the bottom edge. The color and thickness of a stroke can change to indicate when the text field is active.

**Rounded corners**  
The container of an outlined text field has rounded corners, while the container of a filled text field has rounded top corners and square bottom corners.

(fig) Text field containers

##### Label text

Label text tells people what information is requested. Every text field should have a label.

Label text should be aligned with the input text, and always visible. It can be placed in the middle of a text field, or rest near the top of the container.

Label text shouldn't be truncated or take up multiple lines. Keep it short, clear, and fully visible.

(fig) Label text should always be visible. When the field is selected, the label text moves from the middle of the text field to the top.

**[DON'T]** (fig) Don’t truncate label text. Keep it short, clear, and fully visible.

**[DON'T]** (fig) Label text shouldn’t take up multiple lines

##### Adjacent label

A text field doesn't require a label if the field's purpose is indicated by a separate, adjacent label.

Adjacent labels should be aligned to the leading edge of the text field container.

(fig) Text fields with adjacent labels

##### Required text indicator

To show a field is required, display an asterisk (\*) next to the label text, and explain that asterisks indicate required fields in one of two ways:

- Supporting text
- A single note at the beginning of the form

Additional best practices include:

- Indicate all required fields
- If required text has a particular color, use the same color for the asterisk

(fig) Asterisk with required supporting text

##### Input text

Input text is text a person has entered into a text field.

Text fields can display input text in the following ways:

- **Single line** text fields display only one line of text
- **Multi-line** text fields grow to accommodate multiple lines of text
- **Text areas** are fixed-height fields

(fig) Input text in a filled text field

(fig) In **single-line** fields, as the cursor reaches the right field edge, text longer than the input line automatically scrolls left. Single-line fields are not suitable for collecting long responses; use a multi-line text field or text area instead.

(fig) In **multi-line** fields, overflow text causes the text field to expand, shifting screen elements downward and text wraps onto a new line. These fields initially appear as single-line fields, which is useful for compact layouts that need to accommodate large amounts of text.

(fig) **Text areas** are taller than text fields and wrap overflow text onto a new line. They are a fixed height and scroll vertically when the cursor reaches the bottom of the field. The large initial size indicates that longer responses are possible and encouraged. These should be used instead of multi-line fields on the web. Ensure the height of a text area fits within mobile screen sizes.

##### Prefix text

Text fields can contain prefix text such as currency symbol.

(fig) A text field with a currency symbol text prefix

##### Suffix text

Text fields can contain suffix text such as unit of measurement or email domain.

(fig) A text field with a grading scale as suffix

(fig) A text field with an email domain suffix

##### Supporting text & character counter

Supporting text conveys additional information about the input field, such as how it will be used. It should ideally be one line, though may wrap to multiple lines if required. It can be either persistently visible or visible only on focus.

If there is a character or word limit, include a character or word counter. They display the ratio of characters used and the total character limit.

(fig) 1. Supporting text
2. Character counter

##### Error text

For text fields that validate their content such as passwords, replace supporting text with error text. Swapping supporting text with error text prevents new lines of text from bumping content and changing the layout.

- If only one error is possible, error text should describe how to avoid the error
- If multiple errors are possible, error text should describe how to avoid the most likely error

**[DO]** (fig) Swap supporting text with error text

**[DON'T]** (fig) Don't add error text in addition to supporting text, as their appearance will shift content

**[CAUTION]** (fig) Long errors can wrap to multiple lines if there isn't enough space to clearly describe the error. In this case, ensure padding between text fields is sufficient to prevent multi-lined errors from bumping layout content.

##### Error icon

It’s strongly recommended to show an error icon when the text field is in the error state.

This highlights the error for people with visual impairments, and provides an additional sensory indicator.

(fig) The error icon is an important second visual indicator that a text field has an error

##### Icons & images

Icons in text fields are optional. Text field icons can:

- Describe valid input methods such as a microphone icon
- Provide affordances to access additional functionality such as clearing the content of a field
- Express an error

Leading and trailing icons change their position based on LTR or RTL contexts.

Images that are 24dp in height can be placed inside of text fields. This image height allows for optimal top and bottom padding within the field and is consistent with icon size recommendations.

1. **Icon signifier**Icon signifiers can describe the type of input a text field requires, and be touch targets for nested components. For example, a calendar icon may be tapped to reveal a date picker.
2. **Valid or error icon**Iconography can indicate both valid and invalid inputs, making error states clear for colorblind users.
3. **Clear icon**Clear icons let a person clear an entire input field. They appear only when input text is present.
4. **Voice input icon**A microphone icon signifies that people can input characters using voice.
5. **Dropdown icon**A dropdown arrow indicates that a text field has a nested selection component.
6. **Image**An image can help contextualize the required input text such as a credit card number.

(fig) 1. Icon signifier
2. Valid or error icon
3. Clear icon
4. Voice input icon
5. Dropdown icon
6. Image

##### Read-only fields

Read-only text fields display pre-filled text that people cannot edit.

A read-only text field is styled the same as a regular text field and is clearly labeled as read-only.

(fig) A filled read-only text field

(fig) An outlined read-only text field

#### Adaptive design

As layouts adapt to larger screens and different breakpoints, apply flexible container dimensions to text fields. Set minimum and maximum values for margins, padding, and container dimensions as layouts scale so that typography adjusts for better reading experiences.

(fig) For compact breakpoints, text fields can span the full width of the display. For medium and expanded breakpoints, text fields should be bound by flexible margins or other containers.

As text fields expand in fluid layouts, avoid maintaining fixed margins and typography properties. This can lead to extra long text fields.

For example, text fields should not span the full width of a large screen.

**[DON'T]** (fig) Don’t use fixed text field margins on large devices. Text fields shouldn’t span the full width of a large screen.

##### Density

Dense text fields enable people to scan and take action on large amounts of information.

(fig) A form with dense text fields

###### **Avoid applying density by default**

Don't apply density to text fields by default. This lowers their targets below the recommended 48x48 CSS pixels. Instead, give people a way to choose a higher density, like selecting a denser layout or changing the theme.

To ensure this density setting can be easily reverted when it's active, keep all the targets to change it at a minimum of 48x48 CSS pixels each.

### 5.Accessibility — Accessibility

Source: https://m3.material.io/components/text-fields/accessibility


#### Use cases

User should be able to:

- Navigate to and activate a text field with assistive technology
- Input information into the text field
- Receive and understand supporting text and error messages
- Navigate to and select interactive icons

#### Interaction & style

The containers for both filled and outlined text fields provide the same functionality. Changes to color and thickness of stroke help provide clear visual cues for interaction.

(fig) Filled text fields

(fig) Outlined text fields

Containers improve the discoverability of text fields by creating contrast between the text field and surrounding content.   
  
In some contexts, outlined text fields can improve the perception of the fields with a 3:1 or greater contrast ratio between the container outline and the background.

**[DO]** (fig) Make sure the container outline has a minimum contrast of 3:1 to the background

**[DON'T]** (fig) Don't choose colors that won't pass Material's minimum contrast of 3:1

#### Keyboard navigation

| Keys | Actions |
| --- | --- |
| Tab | Focus lands on (non-disabled) text field |

#### Labeling elements

If the UI text is correctly linked, assistive tech (such as a screenreader) will read the UI text followed by the component’s role.  
  
The accessibility label for a text field is the same as the text field label.

(fig) A text field’s label should include its UI text

For text fields with interactive trailing icons, the accessibility label clarifies its function.

For example, when a password is hidden, the label for the view icon is "Show password," and when the password is visible, the label is "Hide password."  
  
When an icon has no actionable role, like an error icon, the label is "Error."

(fig) When a trailing icon in the field acts as a button, the label should clarify function, while the role explains the component type

The prefix and suffix of a text field provides symbols and abbreviations to help users enter the correct values.   
   
The accessibility label for prefix and suffix needs to have a unique id attribute, for example, the currency name for a currency symbol prefix.

(fig) A form containing fields with both a prefix for currency, and a suffix for email address

When there is an error, "alert" is applied to the role and the error message to the text label.

If a text field displays both supporting text and error text, the label should include the supporting text first, followed by the error text.

(fig) Text field error messages should be given an “alert” role in accessibility labels

The accessibility label for the character counter clarifies the number of characters that can be entered into the text field.

(fig) The remaining character counter should be called “character count” within the label

The text displayed in the supporting text is also used for its accessibility label.

(fig) Text field supporting text should have its own accessibility label

If a text field requires input, indicate so with an asterisk at the end of the text field label. The accessibility label must include the asterisk.

(fig) A required text field’s accessibility label should include any supporting text

