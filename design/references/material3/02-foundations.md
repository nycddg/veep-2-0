# 02 — Foundations: content design, glossary, platforms, elevation, spacing & icons

Primary sources: https://m3.material.io/foundations/content-design/overview · https://m3.material.io/foundations/glossary · https://m3.material.io/foundations/watches/overview · https://m3.material.io/foundations/xr/design/overview
Accessed 2026-10-09. Design tokens and customization/theming: [11-design-tokens.md](11-design-tokens.md). Accessibility: [08-accessibility.md](08-accessibility.md). Interaction states & patterns: [10-patterns-interaction.md](10-patterns-interaction.md). Layout: [07-layout-adaptive.md](07-layout-adaptive.md).

## Essentials

### Design tokens & customization
- Moved to [11-design-tokens.md](11-design-tokens.md) (token model, classes, contexts, theming/customization, tooling, links to resolved `tokens/` tables).

### Content design (foundations/content-design/*)
- Covers UX writing best practices, word choice, grammar & punctuation, global writing, notifications, and alt text. Button labels: "Keep labels concise and use sentence case" (components/buttons/overview). Full rules are in the appendix.

### Platforms covered with dedicated guidance
- **Watches** (Wear OS): foundations/watches/{overview, foundations, styles, layout}.
- **XR** (Android XR): foundations/xr/design/{overview, interaction, layout, accessibility} and foundations/xr/components/{overview, app-bars, dialogs, nav-bar, nav-rail, toolbars}. The blog lists "Material Design for XR (Developer Preview)" — treat XR guidance as preview-stage where the page says so.
- iOS: the color page says to use static (baseline) color "if your product is built for iOS" (styles/color/choosing-a-scheme). Motion pages give iOS fallbacks (Emphasized easing "N/A (Use Standard as a fallback)").

### Glossary
- foundations/glossary ("Material A–Z") is reproduced in full in the appendix; use its terms exactly.

---

## Elevation, spacing & icons (styles)

Primary sources (elevation, spacing, icons): https://m3.material.io/styles/elevation/overview · https://m3.material.io/styles/elevation/applying-elevation · https://m3.material.io/styles/elevation/tokens · https://m3.material.io/styles/spacing/overview · https://m3.material.io/styles/spacing/applying-spacing · https://m3.material.io/styles/spacing/tokens · https://m3.material.io/styles/icons/overview · https://m3.material.io/styles/icons/designing-icons · https://m3.material.io/styles/icons/applying-icons
Token values: [tokens/system-elevation.md](tokens/system-elevation.md), [tokens/system-spacing.md](tokens/system-spacing.md); token model in [11-design-tokens.md](11-design-tokens.md). Accessed 2026-10-09.

### Essentials — Elevation
- "Elevation is applied to all surfaces and components"; "Tokens have no shadows or color; each platform determines the specific shadows and values to use at each elevation level"; "Elevation can be shown as tonal surface colors or shadows"; "Avoid changing the default elevation of Material 3 components"; "Stick to using a small amount of elevation levels." (overview)
- Levels (token data): level0 0dp · level1 1dp · level2 3dp · level3 6dp · level4 8dp · level5 12dp.
- Differences from M2: "use shadows only when required to create additional protection against a background or to encourage interaction"; levels replace raw dp descriptions.
- "By default, Material 3's surfaces use tonal difference to indicate separation"; surface roles "are not tied to elevation"; "Any overlapping containment areas or components should have different color roles in order to visually communicate separation." Floating elements need sufficient contrast with surfaces beneath. (applying-elevation)

### Essentials — Spacing
- "The spacing system is measured on an 8dp scale, where space100 = 8dp." Spacing = padding (inside), gaps (between), margins (outside); positions include leading/trailing, which swap in RTL. (spacing/overview)
- Tokens (`md.sys.measurement.*`): space0 0 · space25 2 · space50 4 · space75 6 · space100 8 · space125 10 · space150 12 · space175 14 · space200 16 · space250 20 · space300 24 · space400 32 · space450 36 · space500 40 · space600 48 · space700 56 · space800 64 · space900 72 (dp).
- "When text is scaled up to 200%, the same spacing should be preserved by default." Customize by remapping component spacing, adding tokens that "follow the multiplier pattern… space225 = 18dp", or adaptive/density mappings. "Work is ongoing to hook up all Material components to spacing tokens." (applying-spacing)

### Essentials — Icons
- "Material Symbols are the new default" in three styles — outlined, rounded, sharp; legacy Material Icons remain available without variable-font capabilities. Four axes: weight (100–700), fill (0–1), grade, optical size (20–48dp). Get icons at fonts.google.com/icons. (icons/overview, applying-icons)
- Icon buttons: "use a system icon with a clear meaning"; toggles use outlined icon for unselected and filled for selected (components/icon-buttons/overview).


---

## Source pages in scope

| Page | URL | Site content timestamp | Do | Don't | Caution |
|---|---|---|---|---|---|
| Content design | https://m3.material.io/foundations/content-design/overview | 2026-07-17T05:27:26.453Z | 0 | 0 | 0 |
| Alt text | https://m3.material.io/foundations/content-design/alt-text | 2026-07-17T04:53:47.324Z | 14 | 10 | 1 |
| Global writing — Overview | https://m3.material.io/foundations/content-design/global-writing/overview | 2026-07-17T05:07:22.750Z | 0 | 0 | 0 |
| Global writing — Word choice | https://m3.material.io/foundations/content-design/global-writing/word-choice | 2026-07-17T05:07:22.750Z | 6 | 5 | 2 |
| Notifications | https://m3.material.io/foundations/content-design/notifications | 2026-07-17T05:27:27.225Z | 11 | 10 | 0 |
| Style guide — UX writing best practices | https://m3.material.io/foundations/content-design/style-guide/ux-writing-best-practices | 2026-08-04T07:53:19.197Z | 3 | 3 | 0 |
| Style guide — Word choice | https://m3.material.io/foundations/content-design/style-guide/word-choice | 2026-08-04T07:53:19.197Z | 3 | 4 | 1 |
| Style guide — Grammar and punctuation | https://m3.material.io/foundations/content-design/style-guide/grammar-and-punctuation | 2026-08-04T07:53:19.197Z | 9 | 9 | 1 |
| Material A-Z | https://m3.material.io/foundations/glossary | 2026-08-18T13:31:11.452Z | 0 | 0 | 0 |
| Design for watches — Overview | https://m3.material.io/foundations/watches/overview | 2026-07-17T05:36:36.316Z | 0 | 0 | 0 |
| Design for watches — Foundations | https://m3.material.io/foundations/watches/foundations | 2026-07-17T05:36:36.316Z | 2 | 1 | 0 |
| Design for watches — Styles | https://m3.material.io/foundations/watches/styles | 2026-07-17T05:36:36.316Z | 1 | 1 | 0 |
| Design for watches — Layout | https://m3.material.io/foundations/watches/layout | 2026-07-17T05:36:36.316Z | 0 | 0 | 0 |
| Design for immersive XR — Overview | https://m3.material.io/foundations/xr/design/overview | 2026-07-17T07:32:25.090Z | 0 | 0 | 0 |
| Design for immersive XR — Interaction | https://m3.material.io/foundations/xr/design/interaction | 2026-07-17T07:32:25.090Z | 0 | 0 | 1 |
| Design for immersive XR — Layout | https://m3.material.io/foundations/xr/design/layout | 2026-07-17T07:32:25.090Z | 0 | 0 | 0 |
| Design for immersive XR — Accessibility | https://m3.material.io/foundations/xr/design/accessibility | 2026-07-17T07:32:25.090Z | 0 | 0 | 0 |
| XR components — Overview | https://m3.material.io/foundations/xr/components/overview | 2026-07-17T07:32:25.430Z | 0 | 0 | 0 |
| XR components — App bars | https://m3.material.io/foundations/xr/components/app-bars | 2026-07-17T07:32:25.430Z | 3 | 3 | 3 |
| XR components — Dialogs | https://m3.material.io/foundations/xr/components/dialogs | 2026-07-17T07:32:25.430Z | 2 | 2 | 0 |
| XR components — Nav bar | https://m3.material.io/foundations/xr/components/nav-bar | 2026-07-17T07:32:25.430Z | 0 | 3 | 1 |
| XR components — Nav rail | https://m3.material.io/foundations/xr/components/nav-rail | 2026-07-17T07:32:25.430Z | 1 | 4 | 1 |
| XR components — Toolbars | https://m3.material.io/foundations/xr/components/toolbars | 2026-07-17T07:32:25.430Z | 3 | 4 | 2 |
| Icons — Overview | https://m3.material.io/styles/icons/overview | 2026-07-17T05:07:23.551Z | 0 | 0 | 0 |
| Icons — Designing icons | https://m3.material.io/styles/icons/designing-icons | 2026-07-17T05:07:23.551Z | 6 | 7 | 2 |
| Icons — Applying icons | https://m3.material.io/styles/icons/applying-icons | 2026-07-17T05:07:23.551Z | 4 | 5 | 1 |
| Spacing — Overview | https://m3.material.io/styles/spacing/overview | 2026-07-17T05:30:24.800Z | 1 | 1 | 0 |
| Spacing — Applying spacing | https://m3.material.io/styles/spacing/applying-spacing | 2026-07-17T05:30:24.800Z | 0 | 0 | 0 |
| Spacing — Tokens | https://m3.material.io/styles/spacing/tokens | 2026-07-17T05:30:24.800Z | 0 | 0 | 0 |
| Elevation — Overview | https://m3.material.io/styles/elevation/overview | 2026-07-17T05:03:59.318Z | 0 | 0 | 0 |
| Elevation — Applying elevation | https://m3.material.io/styles/elevation/applying-elevation | 2026-07-17T05:03:59.318Z | 1 | 1 | 0 |
| Elevation — Tokens | https://m3.material.io/styles/elevation/tokens | 2026-07-17T05:03:59.318Z | 0 | 0 | 0 |

## Verbatim rule index (every Do / Don't / Caution caption on the pages above)


**Alt text** — https://m3.material.io/foundations/content-design/alt-text

- **[DO]** (fig) Write alt text for images to provide context to screen reader users.
- **[DON'T]** (fig) Avoid leaving the automatically generated file number as alt text.
- **[DO]** (fig) Focus on the important part of the image.
- **[DON'T]** (fig) Avoid detailed descriptions that don’t contribute to the image’s meaning.
- **[DO]** (fig) Write brief alt text.
- **[DON'T]** (fig) Don’t write more than 140 characters of alt text.
- **[DO]** (fig) Describe the image, rather than the format.
- **[DON'T]** (fig) Avoid writing “image of." The screen reader will announce it’s an image.
- **[DO]** (fig) Alt text should always relate to the context.
- **[DO]** (fig) Change alt text for an image depending on where it’s used.
- **[DO]** (fig) Make alt text consistent with the caption.
- **[DON'T]** (fig) Don’t ignore the caption. Information in alt text should correspond to adjacent text.
- **[DO]** (fig) Focus on the meaning of the image.
- **[DO]** (fig) Use alt text to reinforce ideas in the caption.
- **[DON'T]** (fig) Don’t write alt text with details that aren’t relevant to the context of the image.
- **[DO]** (fig) Capture the meaning of the image in a few words.
- **[DON'T]** (fig) Don’t repeat the caption as the alt text.
- **[CAUTION]** (fig) Be careful when using alt text that describes the type of image.
- **[DO]** (fig) Capture the meaning of the chart, along with key data points
- **[DON'T]** (fig) Avoid copying data points
- **[DO]** (fig) In charts with an editorial focus, highlight the main takeaway and metrics  
- **[DO]** (fig) In charts used for analysis, mention the general structure, and highlight opportunities for more investigation  
- **[DON'T]** (fig) Don’t summarize a chart used for analysis  
- **[DO]** (fig) Write alt text that summarizes the motion asset.
- **[DON'T]** (fig) Don’t write about every aspect of the motion.

**Global writing — Word choice** — https://m3.material.io/foundations/content-design/global-writing/word-choice

- **[DO]** (fig) Use generalized, global examples. Most countries and cultures have holidays.
- **[DON'T]** (fig) Don’t call out a specific country or culture’s holiday
- **[CAUTION]** (fig) Help translators understand the context by adding message descriptions
- **[DO]** (fig) Use clear names to refer to things
- **[CAUTION]** (fig) Avoid abbreviations. If they're used, provide their meaning in message descriptions.
- **[DO]** (fig) Using nouns instead of, or in addition to, pronouns can help clarify future and past user actions
- **[DON'T]** (fig) Avoid using pronouns when it’s unclear what nouns they’re referring to, especially when explaining user actions
- **[DO]** (fig) Make sure it’s clear who text is referring to
- **[DON'T]** (fig) Avoid using “this” and “that”
- **[DO]** (fig) Clear, everyday language can be used in an expressive and whimsical way when paired with imagery
- **[DON'T]** (fig) Idiomatic phrases can be difficult for everyone to understand and for translators to localize
- **[DO]** (fig) Plain language is easier for everyone to understand
- **[DON'T]** (fig) Confusing language makes it difficult for people to understand the actions they’re taking

**Notifications** — https://m3.material.io/foundations/content-design/notifications

- **[DO]** (fig) Prioritize the most important information
- **[DON'T]** (fig) Don't waste characters on app names, niceties, or unimportant information
- **[DO]** (fig) Clearly guide the user to their next action
- **[DON'T]** (fig) Don't bury next steps
- **[DO]** (fig) Be specific to capture user attention
- **[DON'T]** (fig) Don’t be so generic as to lose value
- **[DO]** (fig) Place dynamic text in the notification body, where there is more space. If you place dynamic text in the title, keep it very short.
- **[DON'T]** (fig) Don’t place dynamic text in a long notification title
- **[DO]** (fig) Keep notifications short and information-dense
- **[DO]** (fig) SMS messages should be brief and important
- **[DON'T]** (fig) Don’t use full emails or website links for text length
- **[DO]** (fig) Use emoji only to enhance a message
- **[DON'T]** (fig) Don’t add negative emotions to a message. Don’t replace words with emoji.
- **[DO]** (fig) Prioritize straightforward and useful messages
- **[DON'T]** (fig) Jokes aren’t appropriate for notifications
- **[DO]** (fig) Specify the day of the week so that it makes sense if someone reads it the following day
- **[DON'T]** (fig) Don’t use relative terms like “today” or “tomorrow”
- **[DON'T]** (fig) Don't prompt the user with a notification or email that might interrupt an important moment
- **[DO]** (fig) Use the available space for useful information
- **[DON'T]** (fig) Don’t waste space repeating information that is already included by the OS
- **[DO]** (fig) Make it easy for users to start or stop receiving notifications

**Style guide — UX writing best practices** — https://m3.material.io/foundations/content-design/style-guide/ux-writing-best-practices

- **[DO]** (fig) Tell users what will happen if they take an action and how they can undo it
- **[DON'T]** (fig) Don’t misrepresent consequences or try to influence a user’s decision
- **[DO]** (fig) Capitalize the first word of a sentence or phrase
- **[DON'T]** (fig) Don’t use title case capitalization. Instead, use sentence case.
- **[DO]** (fig) When an abbreviation is appropriate, make sure it’s formatted and spelled correctly to avoid confusion
- **[DON'T]** (fig) Avoid using abbreviations when there’s space to spell out a word

**Style guide — Word choice** — https://m3.material.io/foundations/content-design/style-guide/word-choice

- **[DO]** (fig) Write from the user’s point of view to help them take action
- **[DON'T]** (fig) Avoid writing that sounds impersonal and robotic
- **[DO]** (fig) Write from a user’s point of view by emphasizing their perspective with “you” and “your”
- **[DON'T]** (fig) Don’t mix different forms of address in the same screen. Instead, use “you” and “your” or get rid of the pronoun.
- **[DON'T]** (fig) Don’t use first person pronouns to speak for the voice of Google
- **[DON'T]** (fig) Avoid using first person pronouns. Write from the user’s point of view by using second person pronouns or removing pronouns altogether.
- **[DO]** (fig) First person pronouns can help users understand when they’re making impactful decisions
- **[CAUTION]** (fig) Use caution with “we” or “our.” Even when these pronouns represent real people employed by Google, seeing first person pronouns in UI text can be confusing or jarring.

**Style guide — Grammar and punctuation** — https://m3.material.io/foundations/content-design/style-guide/grammar-and-punctuation

- **[DO]** (fig) Omit punctuation on single-line sentences
- **[DON'T]** (fig) Avoid using periods to end single sentences
- **[DO]** (fig) Avoid spelling out words that can be contractions
- **[DON'T]** (fig) Phrases that aren’t contracted can feel stiff or overly formal
- **[DO]** (fig) Use a serial comma in lists of three or more items
- **[DON'T]** (fig) Don’t skip serial commas before “and”
- **[DO]** (fig) Abbreviate “million” with “M” and don’t use commas when giving people a sense of volume
- **[DO]** (fig) Use commas in numbers between 1,000 and 1 million
- **[DO]** (fig) Exclamation marks can be used to emphasize celebratory moments
- **[DON'T]** (fig) Avoid using exclamation marks for empty states and common tasks. Save it for bigger accomplishments.
- **[DO]** (fig) Ellipses show an action in progress
- **[DON'T]** (fig) Don’t use ellipses in buttons or menu items
- **[DO]** (fig) Use parentheses to define terms and jargon
- **[DON'T]** (fig) Don’t use parentheses to add extra thoughts. If information is needed, include it in the sentence without parentheses for easier scanning and improved comprehension.
- **[CAUTION]** (fig) Ampersands can be used in headlines where there's limited space
- **[DON'T]** (fig) Avoid ampersands in email subject lines
- **[DO]** (fig) Italicize a word or phrase
- **[DON'T]** (fig) Don’t italicize a sentence
- **[DON'T]** (fig) Don't use caps block. Use sentence case for all product text.

**Design for watches — Foundations** — https://m3.material.io/foundations/watches/foundations

- **[DO]** (fig) At-a-glance views allow people to quickly see calendar events
- **[DON'T]** (fig) Don't create complex and detailed apps such as a calendar grid
- **[DO]** (fig) Consider which actions are appropriate for each device

**Design for watches — Styles** — https://m3.material.io/foundations/watches/styles

- **[DO]** (fig) Buttons with (2) **on primary** on (1) **primary** and (4) **on** **primary container** on (3) **primary container** stay legible as the contrast level changes
- **[DON'T]** (fig) Buttons with (2) **primary dim** on (1) **primary** or (4) **primary dim** on (3) **primary container** become illegible as contrast levels shift

**Design for immersive XR — Interaction** — https://m3.material.io/foundations/xr/design/interaction

- **[CAUTION]** (fig) Limit use of continuous motion. If required, keep the horizon line stable.

**XR components — App bars** — https://m3.material.io/foundations/xr/components/app-bars

- **[CAUTION]** (fig) Local app bar orbiters should be centered and anchored to the top of the panel. However, this is less common, so make sure that it contains actions that only affect its anchored panel.
- **[CAUTION]** (fig) Limit the use of multiple app bars to rare cases when additional spatialization improves usability
- **[DO]** (fig) An app bar orbiter with a 20dp offset creates visual separation from the spatial panel
- **[DON'T]** (fig) Don’t overlap the app bar orbiter and spatial panel more than 12dp
- **[DO]** (fig) Always align the app bar orbiter within the bounds of nearby spatial panels
- **[DON'T]** (fig) The app bar orbiter shouldn’t exceed the width of adjacent spatial panels
- **[DO]** (fig) Adjust the width of the app bar orbiter to fit in a person’s field of view
- **[DON'T]** (fig) Avoid expanding the app bar orbiter beyond the adjacent panel’s width and a person’s field of view
- **[CAUTION]** (fig) Use caution before expanding the app bar’s width to match its spatial panel. The orbiter may not fit in a person’s primary field of view.

**XR components — Dialogs** — https://m3.material.io/foundations/xr/components/dialogs

- **[DO]** (fig) Make sure a spatial dialog’s color is higher than all other UI elements, and use a scrim
- **[DON'T]** (fig) If a dialog’s color is **surface container high**, don’t use **surface container highest** for any other element
- **[DO]** (fig) A basic dialog elevated above an app in home space
- **[DON'T]** (fig) Avoid using full-screen dialogs in XR. Required actions could appear beyond a person’s field of view.

**XR components — Nav bar** — https://m3.material.io/foundations/xr/components/nav-bar

- **[CAUTION]** (fig) Use caution before placing a navigation bar in local context. If it contains navigation elements that affect the overall app, a navigation bar orbiter should be placed in global context.
- **[DON'T]** (fig) Avoid overlapping an inset a navigation bar orbiter by more than half its height
- **[DON'T]** (fig) The navigation bar orbiter shouldn’t exceed the width of the spatial panel
- **[DON'T]** (fig) Don't position a navigation bar orbiter at the top of a spatial panel. Position it at the bottom in the field of view to maintain usability and minimize interaction effort.

**XR components — Nav rail** — https://m3.material.io/foundations/xr/components/nav-rail

- **[DO]** (fig) A navigation rail orbiter should be placed in global context, centered and anchored to the left or right of the app
- **[DON'T]** (fig) Avoid placing a navigation rail orbiter in local context. It can be hard to find if placed between two spatial panels.
- **[DON'T]** (fig) Avoid overlapping an inset navigation rail orbiter by more than half its width
- **[DON'T]** (fig) The navigation rail orbiter shouldn’t exceed the height of the spatial panel
- **[DON'T]** (fig) Don't place a navigation rail orbiter between spatial panels
- **[CAUTION]** (fig) Use caution when positioning spatialized FABs. Keep them within the height of adjacent spatial panels

**XR components — Toolbars** — https://m3.material.io/foundations/xr/components/toolbars

- **[CAUTION]** (fig) In global context, toolbar orbiters are centered and anchored to the bottom of the app. This use case is less common, as toolbars usually contain actions that control a specific panel.
- **[CAUTION]** (fig) Limit the use of multiple toolbars to rare cases when additional spatialization improves usability
- **[DO]** (fig) The recommended toolbar orbiter position from the spatial panel is:
- **[DON'T]** (fig) To prevent content obstruction, don’t overlap the toolbar orbiter and spatial panel above 12dp
- **[DO]** (fig) Always align the toolbar orbiter within the horizontal bounds of nearby spatial panels
- **[DON'T]** (fig) The toolbar orbiter shouldn’t exceed the width of adjacent spatial panels
- **[DO]** (fig) Always align the toolbar orbiter within the vertical bounds of nearby spatial panels
- **[DON'T]** (fig) The toolbar orbiter shouldn’t exceed the height of adjacent spatial panels
- **[DON'T]** (fig) Don't place a vertical toolbar orbiter between spatial panels

**Icons — Designing icons** — https://m3.material.io/styles/icons/designing-icons

- **[DO]** (fig) Simplify icons for greater clarity and legibility
- **[DON'T]** (fig) Don’t be overly literal. Avoid complex icons.
- **[DO]** (fig) Make icons graphic and bold
- **[DON'T]** (fig) Don’t use delicate or loose organic shapes
- **[DO]** (fig) Use and maintain a consistent visual style throughout one icon set
- **[DON'T]** (fig) Avoid mixing styles for one icon set
- **[DO]** (fig) Icon content is limited to the 20dp-x-20dp live area, with 2dp of padding around the perimeter
- **[CAUTION]** (fig) If additional visual weight is needed, content may extend into the padding between the live area and the trim area
- **[DON'T]** (fig) No parts of the icon should extend outside of the trim area
- **[DO]** (fig) Position icons “on pixel” within the icon grid
- **[DON'T]** (fig) Don’t place the icon on a coordinate that isn’t “on pixel”
- **[CAUTION]** (fig) Overly round corners reduces the symbol’s legibility
- **[DON'T]** (fig) Don’t use inconsistent corner radii
- **[DO]** (fig) Make icons face forward
- **[DON'T]** (fig) Don’t tilt, rotate, or make icons appear dimensional

**Icons — Applying icons** — https://m3.material.io/styles/icons/applying-icons

- **[DON'T]** (fig) Don't use the lightest weight for standard-size (24dp) icons. The minimum weight for this size should be 200.
- **[CAUTION]** (fig) Be careful using excessive weight for standard 24dp symbols
- **[DO]** (fig) Apply weights consistently
- **[DON'T]** (fig) Don’t mix different weights
- **[DO]** (fig) Use the same size for your Material Symbols and text
- **[DON'T]** (fig) Don’t mix the sizes of your symbol and text
- **[DO]** (fig) Use the same optical weight for your symbol and text
- **[DON'T]** (fig) Don’t use different optical weights for Material Symbols and text
- **[DO]** (fig) Shift down the baseline of symbols to approximately 11.5% of the text size
- **[DON'T]** (fig) Don’t use the same baseline for Material Symbols and text

**Spacing — Overview** — https://m3.material.io/styles/spacing/overview

- **[DO]** (fig) Define padding and gaps on the parent container to organize all elements inside
- **[DON'T]** (fig) Avoid defining margins on child elements as they usually aren’t uniform, and require more tokens

**Elevation — Applying elevation** — https://m3.material.io/styles/elevation/applying-elevation

- **[DO]** (fig) Ensure floating elements have sufficient contrast with surfaces beneath
- **[DON'T]** (fig) Don't use colors with insufficient contrast. The relationship between surfaces must be clear.

## Appendix — verbatim page text (digest: text, tables and figure captions; image-only content represented by captions)

### Content design

Source: https://m3.material.io/foundations/content-design/overview


- UI text should be clear to anyone
- Follow [Associated Press (AP) Style](http://www.apstylebook.com) unless noted otherwise

#### Resources

| Type | Resource |
| --- | --- |
| Design | [AP Stylebook](https://www.apstylebook.com/) |

#### What’s new

- Updated content and organization
- Updated guidance on first-person pronouns
- New examples and illustrations

### Alt text

Source: https://m3.material.io/foundations/content-design/alt-text


#### How to write great alt text

##### Overview

Alternative text (alt text) refers to off-screen text that is used by screen reader accessibility software. Screen readers read out visible content such as paragraph and button text, as well as hidden content, including alt text for icons and headings.

Alt text also displays when an image doesn’t load. It tells people what they need to know about an image if they can’t see it.

**[DO]** (fig) Write alt text for images to provide context to screen reader users.

**Alt text: Two large and two small tin mugs.**

**[DON'T]** (fig) Avoid leaving the automatically generated file number as alt text.

**Alt text: jpg - 0223939-330**

##### When to use alt text

If you remove the image from the page and no information is lost, then the image is decorative and doesn’t need alt text or a caption.

An image can be marked decorative using a null alt attribute, such as **alt=””** in HTML, which will hide the content from screen reader users.

(fig) Images that don’t add information don’t need alt text.

**Alt text: “”**

##### Focus on the meaning of the image

Describe the context and overall meaning, rather than focusing on the details. For example, in a shopping app, focus on the item for sale rather than the things around it.

Alt text can also help improve SEO, but its primary purpose should be to make sites usable for all.

**[DO]** (fig) Focus on the important part of the image.

**Alt text: A Scandinavian-style, copper-handled, cream-colored watering can.**

**[DON'T]** (fig) Avoid detailed descriptions that don’t contribute to the image’s meaning.

**Alt text: On a window sill, a child’s hands pours from copper handled cream colored watering can into a phoenix plant in a grey pot.**

##### Keep it short

The recommended length for alt text is 140 characters.

If alt text is too long, it may be cut off by some screen readers, which is a poor user experience.

**[DO]** (fig) Write brief alt text.

**Alt text: A small happy dog hanging out the passenger window of a vintage car.**

**[DON'T]** (fig) Don’t write more than 140 characters of alt text.

**Alt text: An aqua colored vintage car is driven by a woman in a cowboy hat. A poodle-mix dog sits in the passenger seat with its tongue out and paws out the window.**

##### Don’t start alt text with “image of”

Screen readers announce “image” when they come across an image. If your start your alt text with “image of” a screen reader will announce “image, image of.”

**[DO]** (fig) Describe the image, rather than the format.

**Alt text: A wooden box of artisan sourdough bread is carried by a baker.**

**[DON'T]** (fig) Avoid writing “image of." The screen reader will announce it’s an image.

**Alt text: Image of a wooden box of artisan sourdough bread is carried by a baker.**

#### Context and nearby text

##### Context matters

Use adjacent text to establish the context and word choices for alt text. Adjacent text includes all of the text near an image, such as body text, captions, and headlines.

Don’t repeat the caption in alt text. It’s against best practices because the user will hear the same text twice, which is a poor experience.

Be consistent in your word choices. For example, don’t use “antique” in a caption and “vintage” in the alt text.

**[DO]** (fig) Alt text should always relate to the context.

**Alt text: Brown oak dining chair.**

**[DO]** (fig) Change alt text for an image depending on where it’s used.

**Alt text:  Books on a wooden chair next to a vintage bathtub.**

##### Alt text is subjective

Alt text is another layer of creative expression and should support the goals and style of its context.

The same image should have different alt text in different settings. Use the information in the app or article and the caption to decide what to emphasize in the alt text.

**[DO]** (fig) Make alt text consistent with the caption.

**Alt text: A well composed photo of a photographer waiting for the perfect shot of sailboats.**

**[DON'T]** (fig) Don’t ignore the caption. Information in alt text should correspond to adjacent text.

**Alt text: A black and white photo of a woman standing on a pier while looking at sailboats.**

**[DO]** (fig) Focus on the meaning of the image.

**Alt text: A black and white photo of woman looking at sailboats from a pier.**

**[DO]** (fig) Use alt text to reinforce ideas in the caption.

**Alt text: A photographer stands on a pier between 2 dock posts looking at sailboats.**

**[DON'T]** (fig) Don’t write alt text with details that aren’t relevant to the context of the image.

**Alt text: A black and white photo of a female photographer looking at sailboats while standing between 2 dock posts on a Venetian pier.**

##### Captions should benefit all users

A caption should be useful to someone who can see the image clearly, as well as a screen reader user.

Good captions support the image rather than duplicating its information. A well-written caption makes it easier to write alt text.

**[DO]** (fig) Capture the meaning of the image in a few words.

**Alt text: Flying pigeons.**

**[DON'T]** (fig) Don’t repeat the caption as the alt text.

**Alt text: Pigeons have a distinct silhouette.**

#### Types of imagery

##### When to describe the type of image

Occasionally it benefits users to name the type of image. This can include:

- Chart
- Infographic
- Map
- Graph
- Screenshot
- Headshot
- Diagram

**[CAUTION]** (fig) Be careful when using alt text that describes the type of image.

**Alt text: Map of Denver Rd. Park and surrounding area.**

##### Charts and graphs

Alt text is particularly important for visualizations such as charts and graphs.   
  
Visualizations can either be editorial and meant to support a specific purpose or key takeaway, or more open-ended and used for general data analysis.  
  
Consider the core purpose of the chart or graph, and what information someone would need to use it.  
  
Link to the data that generated the chart or graph, if it’s available.

(fig) Summarize the main purpose of the data. Here, the chart involves interest in Manchester City and Liverpool.

When possible, explain the key takeaways and meaning in context, rather than detailing every data point.  
  
A general formula for chart alt text would be: “Summary of [data type] + [reason for showing the chart].”

**[DO]** (fig) Capture the meaning of the chart, along with key data points

**Alt text: Summary of interest in Manchester City, which is almost double that of Liverpool. Manchester interest peaks at 100 at 6pm. Liverpool peaks at 40 at 3am and 12:30pm.**

**[DON'T]** (fig) Avoid copying data points

**Alt text: Interest in Manchester City: 12am=40, 12pm=56, 6pm=100, 9pm=45. Liverpool interest 12am=20, 12:30pm=40, 6pm=30, 9pm=20.**

**Charts for editorial use**  
Charts with an editorial focus are used to support a key takeaway. This takeaway and the main data points confirming it should be the focus of the alt text. To create the alt text, leverage existing content from the body text, labels, and any text in the graph.  
  
For example, a chart from a weekly digest showing highlights of physical activity may have a written summary of the total change in step count. This can be used in the alt text.

**[DO]** (fig) In charts with an editorial focus, highlight the main takeaway and metrics  
  
**Alt text: Your step count was 55% higher this week vs last week with 4,106 additional steps on average.**

**Charts for analysis**

Charts for analysis are meant to be reviewed as a whole, and offer pieces of data to be analyzed. They can be dense, appear alongside related charts, and have many takeaways.   
  
For charts that have one or two key takeaways, include these insights in the alt text.   
  
To avoid introducing unintentional bias in charts with many possible takeaways, highlight opportunities for exploration, such as a link to the data’s source. Emphasize key data points or mention that there isn’t a single takeaway.

**[DO]** (fig) In charts used for analysis, mention the general structure, and highlight opportunities for more investigation  
  
**Alt text: Comparison of annual high, avg, and low temperatures. Visit the link provided to explore the data in detail.**

**[DON'T]** (fig) Don’t summarize a chart used for analysis  
  
**Alt text: High, average, and low temperatures varied widely over the course of the year.**

**Use interactive charts**

To improve the screen reader experience,  consider using interactive charts instead of static images, especially for complex visualizations that are used for analysis. For interactive charts, a tooltip can show additional detail for specific data points.  
  
See [Top Tips for Data Accessibility](https://m3.material.io/blog/data-visualization-accessibility) for more ways to make these visualizations accessible.

(fig) Use interactive charts for complicated visualizations

##### Video and motion alt text

As with still images, if the animated information isn’t elsewhere on the screen, then it is informative and needs alt text.  
  
Long-form video content uses video description to narrate the visual elements of a video, so it doesn’t need alt text.

(fig) Summarize the action in a video or animation

Alt text on informative GIFs or motion assets should highlight the important points. Think of a heading or title you might give it, and that’s likely your alt text.

**[DO]** (fig) Write alt text that summarizes the motion asset.

**Alt text: A tooltip labeled “star” appears when a cursor hovers over a star icon.**

**[DON'T]** (fig) Don’t write about every aspect of the motion.

**Alt text: A hand-shaped cursor lands on a star-shaped icon and then a tooltip labeled “star” appears below the star.**

### Global writing — Overview

Source: https://m3.material.io/foundations/content-design/global-writing/overview


#### Overview

##### Global writing

Global writing is the practice of writing inclusively for many cultures and optimizing for localization. This makes writing easier to read, understand, and translate. Writing for localization is necessary when a product will be translated, but can also be a helpful lens when writing for anyone.

### Global writing — Word choice

Source: https://m3.material.io/foundations/content-design/global-writing/word-choice


#### Word choice

##### Use global examples & explain local references

References to local places, holidays, and companies won’t always make sense to global audiences.

**[DO]** (fig) Use generalized, global examples. Most countries and cultures have holidays.

**[DON'T]** (fig) Don’t call out a specific country or culture’s holiday

If it doesn’t make sense to use a global example, explain the reference in the message description so the translator can substitute a locale-specific example. Some instances where local references should be called out include:

- Locations
- Names (common first names and nicknames)
- Currencies
- Temperatures
- Date formats
- Providers (internet and cable)

**[CAUTION]** (fig) Help translators understand the context by adding message descriptions

##### Use short, simple sentences

Break text into shorter sentences. Use bullets or separate content into sections with headings.

Other languages average at 1.5 times longer than English, so text that’s short may be long when translated.

(fig) Many languages, like German, are longer than English

##### Avoid abbreviations

Abbreviations don’t translate well and can be confusing out of context. Spell things out whenever possible.

However, common abbreviations for time are acceptable.

**[DO]** (fig) Use clear names to refer to things

**[CAUTION]** (fig) Avoid abbreviations. If they're used, provide their meaning in message descriptions.

##### Clarify pronouns

Using pronouns, like “it,” can get tricky when translators are working with small, unconnected strings of text and when nouns have genders in many languages. Repeat the noun, or clarify the noun in a message description.

**[DO]** (fig) Using nouns instead of, or in addition to, pronouns can help clarify future and past user actions

**[DON'T]** (fig) Avoid using pronouns when it’s unclear what nouns they’re referring to, especially when explaining user actions

##### Clarify “this” and “that”

Don’t start a sentence with "this" or "that" unless it's immediately followed by the noun. When the noun is unclear, the sentence is more difficult to translate.

**[DO]** (fig) Make sure it’s clear who text is referring to

**[DON'T]** (fig) Avoid using “this” and “that”

##### Avoid idiomatic, colloquial, and polite expressions

Idiomatic or colloquial phrases can be confusing if the meaning isn’t clear. If you use them, clarify the purpose and context of the phrase to help the translator choose an appropriate alternative.

Avoid polite expressions, such as “Please,” “Sorry,” and “Thank you,” especially in error messages. However, "please" may be used when asking the user to do something inconvenient.

**[DO]** (fig) Clear, everyday language can be used in an expressive and whimsical way when paired with imagery

**[DON'T]** (fig) Idiomatic phrases can be difficult for everyone to understand and for translators to localize

##### Reduce technical jargon

Technical terms don't always translate. Descriptions should be simple, and in some cases literal, to avoid confusion when translating.

**[DO]** (fig) Plain language is easier for everyone to understand

**[DON'T]** (fig) Confusing language makes it difficult for people to understand the actions they’re taking

##### Clarify ambiguities

Some words have multiple meanings. For example, “traffic,” “filter,” and “change” can be used as either nouns or verbs. Avoid using both meanings of the word in the same string or body of text. If a word has the potential to be confusing, provide as much context as possible in the message description so the translation will be accurate.

(fig) Clarify words that have multiple meanings. “Home” could reference a homepage or where someone lives.

### Notifications

Source: https://m3.material.io/foundations/content-design/notifications


Notifications should:

- Be about the user, not the product
- Be precise, timely, actionable, contextual, and relevant
- Give users easy controls to opt out
- Not be used to send unsolicited ads

##### Put important information at the top

Put the most important info at the beginning and make it easy to understand. People skim rather than read, often in an F shape. When it makes sense, try to move the most critical information to the front of sentences, rather than the end, where it may get overlooked or truncated.

**[DO]** (fig) Prioritize the most important information

**[DON'T]** (fig) Don't waste characters on app names, niceties, or unimportant information

##### Tell users what they can do

If you’re prompting someone to take action, make that clear. CTAs should be concise, specific, and actionable. If you know what motivates people to take action, add it.

**[DO]** (fig) Clearly guide the user to their next action

**[DON'T]** (fig) Don't bury next steps

##### Make it relevant and personal

A notification shouldn’t be sent to everyone. The more you broaden the audience and the message for a notification, the more you risk being irrelevant. Consider user segments, in-app behavior, and personalized information to make sure notifications go to people who will benefit most from them.

**[DO]** (fig) Be specific to capture user attention

**[DON'T]** (fig) Don’t be so generic as to lose value

##### Avoid dynamic text

Dynamic text are words that are implemented by engineering to change based on the user or context, like adding a user’s campaign name to headline or “good afternoon” when users log in at certain times.  
  
Try not to use dynamic text in notifications. It often breaks character limits, especially in headlines when translated. Text that gets truncated in the headline will not expand, even in expandable notifications. If you must use dynamic text in the headline, try to pair it with no more than one additional word. Create a backup notification that fits the character count when your primary notification won’t.

**[DO]** (fig) Place dynamic text in the notification body, where there is more space. If you place dynamic text in the title, keep it very short.

**[DON'T]** (fig) Don’t place dynamic text in a long notification title

##### Mind your characters

Stay within these suggested character counts so text doesn’t get cut off:

- Title: <29 chars
- Collapsed body: <40 chars
- Expanded  body: <80 chars; start with collapsed body and add to it
- Button: 1-2 buttons (1-2 words each)

There’s more room for text on later versions of Android, but these limits are still recommended to prevent truncation on smaller devices.

**[DO]** (fig) Keep notifications short and information-dense

##### SMS messages

SMS helps users get messages when they might not have access to their Google Account. It’s used for important or urgent communication only.   
  
SMS breaks into multiple messages after a certain number of characters, resulting in increased costs. To avoid this, stick to the following character limits:

- Latin languages:  <160 characters
- Non-latin languages: <134 characters

If translation is needed, let translators know about the character limits in the message description.

**[DO]** (fig) SMS messages should be brief and important

**[DON'T]** (fig) Don’t use full emails or website links for text length

##### Emoji with caution

Use emoji sparingly. Many don’t translate and aren’t universally understood across cultures. Experiments show that face and hand gesture emoji perform better than generic emoji because they tell a better story. Emoji should enhance content, not replace it.  
  
Since it’s not clear to users whether emoji mean we’re sympathizing with them or attempting to project our feelings onto them, don’t use emoji to accentuate bad news. In experiments, there was a strong negative reaction to negative emoji, such as frowning face, anguished face, and weary face.  
  
Gen Z adds another cultural nuance to emoji by [inventing new meanings](https://www.textnow.com/blog/the-next-generation-of-emojis-gen-z-explained/) that go beyond the official or literal [definitions](https://emojipedia.org/).

**[DO]** (fig) Use emoji only to enhance a message

**[DON'T]** (fig) Don’t add negative emotions to a message. Don’t replace words with emoji.

##### Don’t overdo delight

What seems funny or cute may not come across that way. When vying for limited user attention, be useful. Don’t focus on delight: delicately added and tested polish can better support Google’s brand.

**[DO]** (fig) Prioritize straightforward and useful messages

**[DON'T]** (fig) Jokes aren’t appropriate for notifications

##### Be day-specific

Use the days of the week. Don’t use “today,” “tomorrow,” “tonight,” or similar words. About 20% of users don’t see notifications on the day they’re sent, so “tomorrow” might be read when it’s “today” for the user.  
  
An exception is when a notification auto-dismisses at a specific timestamp.

**[DO]** (fig) Specify the day of the week so that it makes sense if someone reads it the following day

**[DON'T]** (fig) Don’t use relative terms like “today” or “tomorrow”

##### Don’t interrupt the flow

If you have notifications or emails related to the onboarding process, make sure they don’t trigger during onboarding.

**[DON'T]** (fig) Don't prompt the user with a notification or email that might interrupt an important moment

##### Don’t name the product (again)

An app’s name or logo is already included in a notification’s design. Use the limited space for other information.

**[DO]** (fig) Use the available space for useful information

**[DON'T]** (fig) Don’t waste space repeating information that is already included by the OS

##### Opting in and out

Give users a way to opt-out of notifications in context. If you don’t, they’ll have to dig into settings and may get frustrated. If you do offer opt-outs or opt-ins, make it clear what benefit the user is getting or losing.

**[DO]** (fig) Make it easy for users to start or stop receiving notifications

### Style guide — UX writing best practices

Source: https://m3.material.io/foundations/content-design/style-guide/ux-writing-best-practices


##### Explain consequences

Emphasize the results of the user’s potential action in neutral, direct language. Avoid cautions or warnings that might sound alarming, intimidating, or condescending. Focus instead on communicating the consequences of a function.

**[DO]** (fig) Tell users what will happen if they take an action and how they can undo it

**[DON'T]** (fig) Don’t misrepresent consequences or try to influence a user’s decision

##### Use scannable words and formats

People scan UI text in search of the most meaningful content to them. Help by using specific titles and headings that clearly describe a topic. When users are skimming or hurrying through an action, this organization helps them avoid mistakes and unintentional actions.

(fig) Use headings and subheads to prioritize and group information

##### Use sentence case

Unless otherwise specified, use sentence-style capitalization, where only the first letter of the first word in a sentence or phrase is capitalized. All text, including titles, headings, labels, menu items, navigation components, app bars, and buttons should use sentence-style capitalization.

Products and branded terms may also be capitalized.

**[DO]** (fig) Capitalize the first word of a sentence or phrase

**[DON'T]** (fig) Don’t use title case capitalization. Instead, use sentence case.

##### Use abbreviations sparingly

Spell out words whenever possible. Shortened forms of words can be difficult for people to understand and screen readers to read. Avoid Latin abbreviations in UI text such as e.g. or etc. Instead, use full phrases like "for example," or "and more."

**[DO]** (fig) When an abbreviation is appropriate, make sure it’s formatted and spelled correctly to avoid confusion

**[DON'T]** (fig) Avoid using abbreviations when there’s space to spell out a word

### Style guide — Word choice

Source: https://m3.material.io/foundations/content-design/style-guide/word-choice


#### Pronouns

##### Use second person pronouns ("you")

Use the second-person pronouns “you” and “your” to help the user to feel like the UI is talking to them and referring to their actions

**[DO]** (fig) Write from the user’s point of view to help them take action

**[DON'T]** (fig) Avoid writing that sounds impersonal and robotic

##### Don’t combine first and second person

Avoid mixing "me" or "my" with "you" or "your.” It can cause confusion to see both forms of address in the same context.

**[DO]** (fig) Write from a user’s point of view by emphasizing their perspective with “you” and “your”

**[DON'T]** (fig) Don’t mix different forms of address in the same screen. Instead, use “you” and “your” or get rid of the pronoun.

##### Use caution with “I” and “we”

When written on behalf of a large, global company like Google, “we” or “I” may come across as robotic or disconcerting.

Focus on the user’s point of view, rather than Google’s, and consider if it’s possible to rewrite a phrase without “we.”

**[DON'T]** (fig) Don’t use first person pronouns to speak for the voice of Google

**[DON'T]** (fig) Avoid using first person pronouns. Write from the user’s point of view by using second person pronouns or removing pronouns altogether.

Some legal texts may merit an exception: “I” or “my” (the first person) emphasizes ownership in agreements or acknowledgments. For example, “I agree to the terms of service.”

**[DO]** (fig) First person pronouns can help users understand when they’re making impactful decisions

**[CAUTION]** (fig) Use caution with “we” or “our.” Even when these pronouns represent real people employed by Google, seeing first person pronouns in UI text can be confusing or jarring.

### Style guide — Grammar and punctuation

Source: https://m3.material.io/foundations/content-design/style-guide/grammar-and-punctuation


This style guide is specific to English-language UX writing. Google generally follows [Associated Press (AP) style](http://www.apstylebook.com).

##### Skip periods and unnecessary punctuation

To help readers scan text, avoid using periods and other unnecessary punctuation.

Avoid using periods to end single sentences, particularly in:

- Labels
- Tooltip text
- Bulleted lists
- Dialog body text
- Hyperlinked text

Use periods on:

- Multiple sentences
- Long or complex sentences, if it suits the context

**[DO]** (fig) Omit punctuation on single-line sentences

**[DON'T]** (fig) Avoid using periods to end single sentences

##### Use contractions

Contractions can make a sentence easier to understand and scan.

However, sometimes "do not" can give more emphasis than "don't” when caution is needed.

**[DO]** (fig) Avoid spelling out words that can be contractions

**[DON'T]** (fig) Phrases that aren’t contracted can feel stiff or overly formal

##### Use serial commas

Use the serial (or Oxford) comma, except before an ampersand.

Always place commas inside quotation marks.

**[DO]** (fig) Use a serial comma in lists of three or more items

**[DON'T]** (fig) Don’t skip serial commas before “and”

##### Use commas for numbers between 1,000 and 1 million

Use commas for numbers over 1,000. Don’t use commas when identifying something, such as a:

- Street address
- Radio frequency
- Year

For numbers over 1 million, comma use depends on context. “Million” can be abbreviated with with “M” and the value can be rounded when the intent is to give people a sense of the volume, rather than the exact numbers.

**[DO]** (fig) Abbreviate “million” with “M” and don’t use commas when giving people a sense of volume

**[DO]** (fig) Use commas in numbers between 1,000 and 1 million

##### Skip colons in headings

For headings on lists of items, do not use colons. For lists within body text, use a colon.

(fig) Use colons for lists within body text

##### Use exclamation points sparingly

Exclamation points can come across as shouting or overly friendly. Some exceptions include greetings or congratulatory messages.

**[DO]** (fig) Exclamation marks can be used to emphasize celebratory moments

**[DON'T]** (fig) Avoid using exclamation marks for empty states and common tasks. Save it for bigger accomplishments.

##### Use ellipses sparingly

Use ellipses to indicate an action in progress or incomplete text. Truncated text may appear with ellipses, but check with your engineering partners before implementing, as this often happens automatically.  
  
Don’t add a space before ellipses. Omit ellipses from menu items or buttons that open a dialog or start a process.

**[DO]** (fig) Ellipses show an action in progress

**[DON'T]** (fig) Don’t use ellipses in buttons or menu items

##### Use parentheses to define terms

Parentheses can be used to define acronyms or jargon or when referencing a source. They shouldn’t be used when adding a side note or an afterthought of a sentence.

**[DO]** (fig) Use parentheses to define terms and jargon

**[DON'T]** (fig) Don’t use parentheses to add extra thoughts. If information is needed, include it in the sentence without parentheses for easier scanning and improved comprehension.

##### Skip ampersands in body text

The “&” symbol can be used instead of “and” in headlines, column headers, table headers, navigation labels, and buttons. However, when there’s room, spelling out “and” can improve readability and make scanning easier.

“And” should be spelled out in sentences and paragraphs, before the final item in a 3+ item list, and in email subject lines.

**[CAUTION]** (fig) Ampersands can be used in headlines where there's limited space

**[DON'T]** (fig) Avoid ampersands in email subject lines

##### Use dashes with caution

Dashes and hyphens can interrupt a sentence and lead to a fragmented experience, so they should be used with caution. There are three kinds of dashes:

- Em dash: —
- En dash: –
- Hyphen: -

Em dashes are best avoided in UX writing, as they indicate a break in the flow of a sentence that could be simplified using a comma, period, or new sentence.

Use an en dash without spaces to indicate a range, such as 9 AM–Noon.

(fig) Use an en dash without spaces for ranges

##### Use hyphens with care

Hyphens can help readers better understand how words relate to each other by binding closely related words. They can also be used to represent negative numbers, such as -100. Spaces should never be used surrounding hyphens.  
  
Refer to the [Associated Press (AP) style guidelines](http://www.apstylebook.com) if you are unsure whether an adjective or noun phrase needs a hyphen.

| **Rule** | **Examples** | **Why** |
| --- | --- | --- |
| **Hyphenate adjective phrases** | Case-by-case basis Best-in-class performance Once-in-a-lifetime opportunity | When multiple words are used together as an adjective, they should be hyphenated |
| Cell phone number Chocolate chip cookie | However, proper nouns and common, easily understood adjective phrases don't need to be, such as "cell phone number" or "chocolate chip cookie" |
| **Hyphenate noun phrases** A noun phrase is two or more words acting as a noun. These phrases are hyphenated in certain cases: | Sign-off Drive-through Go-ahead | Hyphenate a noun phrase if it contains a verb followed by an adverb |
| Higher-up Most-read | Hyphenate an adjective phrase that is functioning as a noun |
| Jack-of-all-trades Stick-in-the-mud | Some noun phrases, especially long or complicated ones, are always hyphenated |
| **Don't hyphenate verb phrases** A verb phrase is two or more words acting as a verb. These should not be hyphenated. | Look out for falling rocks  Please drive in and drop off your car  Check in to the room when you arrive | Don't hyphenate a verb followed by an adverb or preposition if it's functioning as a verb phrase. For example, "check in" would not need a hyphen when used as a verb, such as "check in to the room," rather than as a noun, like "the next check-in." Also, note that since "in" is a part of the verb, it can't be combined with "to" to form "into," since check into doesn't mean the same as check in to. |

##### Use italics sparingly

Italics typically aren't easy to read. When emphasizing text, use bold weight instead.

However, italics can provide unique emphasis when applied to a single word or phrase, like a name or title.

**[DO]** (fig) Italicize a word or phrase

**[DON'T]** (fig) Don’t italicize a sentence

##### Don’t use caps blocks

Avoid using caps blocks altogether; they're not accessible.

**[DON'T]** (fig) Don't use caps block. Use sentence case for all product text.

### Material A-Z

Source: https://m3.material.io/foundations/glossary


##### Adaptive design

A design approach in which the interface changes based on known user, device, or environmental conditions. Adaptive design in Material includes layout and component adaptations.

##### App bar

A component that displays information and actions at the top of a screen. [Learn more about app bars](https://m3.material.io/components/app-bars/overview)

##### Banner

A component displaying a prominent message and related optional actions.

##### Button

A component helping people initiate actions such as sending an email, sharing a document, or liking a post. [Learn more about buttons](https://m3.material.io/components/all-buttons)

##### Bottom sheet

A component containing supplementary content that’s anchored to the bottom of the screen. [Learn more about bottom sheets](https://m3.material.io/components/bottom-sheets/overview)

##### Card

A component containing content and actions that relate information about a subject. [Learn more about cards](https://m3.material.io/components/cards/overview)

##### Checkbox

A component allowing users to select one or more items from a set. Checkboxes can turn an option on or off. [Learn more about checkboxes](https://m3.material.io/components/checkbox/overview)

##### Chip

A component for helping people enter information, make selections, filter content, or trigger actions. Chips can show multiple interactive elements together in the same area, such as a list of selectable movie times, or a series of email contacts. [Learn more about chips](https://m3.material.io/components/chips/overview)

##### Color: Baseline scheme

The **baseline scheme** refers to the group of selected tones that make up the default colors values used for light and dark themes.

##### Color: Dynamic color

A customization feature in which a user-generated color scheme is mapped to an app’s color scheme.

Dynamic color is reflected in apps that accept user-generated schemes as inputs for color roles in an app. Dynamic color isn’t simply the output of the Material Theme Builder, or an algorithmic color scheme, but is the presence of a changeable color role that renders an app’s appearance dynamic in response to user input.

##### Color: Extended color

A color specified (in addition to key colors) in order to fill color roles for custom schemes. Extended color is a category for idiosyncratic color roles and applications, such as brand expression or conventional (semantic) meanings.

##### Color: Key color

A key color is not an extracted color–it’s a derivation of the source color. Key colors are a concept useful to understanding dynamic color, but are not used in code. The term describes any color that undergoes hue and chroma transformation of a source color. A key color is the basis for a tonal palette.

##### Color: Scheme

Any mapping of color roles to specific tones from a tonal palette. Schemes consist of multiple color roles. A **dark scheme** informally describes a group of colors using the tones from a group of palettes that are mapped for a dark theme.

Note: A **light scheme** is not the same as a **light theme.***See theme.*

##### Color: Source color

The single color that’s extracted to define all five key colors is called a source color. While it may not be needed in code, it’s a useful distinction for understanding that a dynamic color scheme has its root in one initiating color, AKA hue, chroma, and tone. **Key colors** are defined in relationship to the **source color’s** *hue*.

##### Color: Tonal palette

A tonal palette comprises a 13-tone range that serves as the basis for mapping tones to specific roles. A tonal palette offers variations in tonality so that a color scheme automatically provides contrast and visual differentiation within any color group, such as primary.

##### Color: Tone

A grouping of tones are colors with the same hue and chroma. Informally, tone means degrees of lightness.

**In code**: Tone.of(hex code).get(tone) or Tone.of(hue, chroma).get(tone)

**In design guidance**: “A change in a color’s tone can be used to distinguish interaction states or visual interest to component elements.”

##### Color: User-generated schemes

An aspect of dynamic color that describes the colors derived and applied from an individual user’s wallpaper selection or Android preset colors.

##### Condition

A signal that determines when and how an adaptive layout or component should adapt.

##### Contrast

Difference between colors. For accessibility, contrast refers strictly to the difference in tone. A difference of 40 in tone guarantees a [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/) contrast ratio ≥ 3.0; a difference of 50 in tone guarantees a contrast ratio ≥ 4.5.

##### Customization

A modification made to a UI reflecting an app, OEM, or individual user's visual preferences and brand. Customization can focus on individual UI elements (for example, styling the color of a component or adding optional actions to a template), or it can be implemented globally (for example, applying a set of styles as a theme across the UI).

##### Dark theme

A dark theme is a low-light UI that displays mostly dark surfaces.

##### Data table

A component displaying sets of data across rows and columns.

##### Date picker

A component that lets users select a date, or a range of dates. [Learn more about date pickers](https://m3.material.io/components/date-pickers/overview)

##### Design attribute

The style aspect that a design token or hard-coded value applies to, such as color or font.

##### Design guidelines

Guidelines are descriptive written and illustrated docs that demonstrate usage and behavior mainly through examples. They're the long-form discussion of specs that help designers and developers with problem-solving and decision-making.

##### Design specs

Specs are annotated designs and docs that specify the values and parameters that define a component or a feature’s coded capabilities.

##### Design System Package (DSP)

An open-format folder structure created by Adobe to help teams share design system information across tools. [Learn more about the DSP format](https://github.com/AdobeXD/design-system-package-dsp)

##### Design tokens

A design token represents a small, reusable design decision that’s part of a design system's visual style. Tokens replace static values with self-explanatory names. [Learn more on the design tokens page](https://m3.material.io/foundations/design-tokens/overview)

##### Design tokens: Context

The set of conditions in which tokens can point to non-default values (for example, **dark theme, dense layout**).

##### Design tokens: Role

A shortened version of the system token name (for example, **Secondary container color**; **Headline 1**).

##### Design tokens: Types

- **Reference tokens**: All available tokenized values. (for example, **md.ref.palette.secondary200**)
- **Component tokens**: Component tokens define the design attributes of elements in a component, such as the color of a button container
- **System tokens**: The choices or roles that make the system, from color to typography, elevation, and shape. (for example, **md.sys.color.secondary-container**)

##### Design tokens: Value

The information defining a design attribute, either stored in a token or hard-coded.

##### Dialog

A component providing important prompts in a user flow. They can require an action, communicate information, or help users accomplish a task. [Learn more about dialogs](https://m3.material.io/components/dialogs/overview)

##### Divider

A thin line that groups content in lists and layouts. [Learn more about dividers](https://m3.material.io/components/divider/overview)

##### Element

The part of the component that a token or value applies to, such as the container or label text.

##### Extended FAB

A component for helping people take primary actions. They're wider than FABs to accommodate a text label and larger target area. [Learn more about extended FABs](https://m3.material.io/components/extended-fab/overview)

##### Floating action button (FAB)

A component representing the most important action on a screen. They put key actions within reach. [Learn more about FABs](https://m3.material.io/components/floating-action-button/overview)

##### HCT

HCT is an abbreviation of hue, chroma, tone. It’s the name of the color space that enables dynamic color. HCT is based on CAM16 **hue** and **chroma**; the L\* construct for luminance from L\*a\*b\* (CIELAB, 1976) is denoted as T for **tone**.

##### Image list

A component displaying a collection of images in an organized grid.

##### Libraries

Developer libraries supported by Material 3 include Android and Jetpack Compose, with in-progress support being developed for Flutter and Web.

##### List

A component comprised of continuous, vertical indexes of text or images. [Learn more about lists](https://m3.material.io/components/lists/overview)

##### Material Components

Open-source UI elements created to help developers implement Material Design across Android, Flutter, and the web.

##### Material Design

Material is an adaptable system of guidelines, components, and tools that support the best practices of user interface design. Backed by open-source code, Material streamlines collaboration between designers and developers, and helps teams quickly build beautiful products.

Material was launched in 2014 and has evolved over the years.

**Material Design 1** (M1): The first generation of Material Design, launched in 2014, is archived and accessible at: material.io/archive/guidelines.

**Material Design 2** (M2): The second generation of Material Design, launched in 2018, introduced Material Theming and code for Material Components.

**Material Design 3** (M3): The third generation of Material, launched in 2021, includes the Material You features like dynamic color.

- **Material You**: The new Material visual style and set of features embracing the personal and expressive needs of individual users, part of Material Design 3

##### Material Theming

The ability to systematically customize Material Design to better reflect your product’s brand.

While a scheme represents selections or a subset of a single style group, **theme** describes a set of multiple styles and attributes in combination. Themes adjust global styles to adjust for a given user context or preference, such as low light or high contrast. For example, **dark theme** describes design decisions beyond color since adjustments to elevation and state are also integral to expressing a dark UI effectively.

##### Menu

A component that displays a list of choices on a temporary surface. [Learn more about menus](https://m3.material.io/components/menus/overview)

##### Mode

Binary setting provided by a system to help people use the device better. Examples: **Focus mode**, **airplane mode**, and **battery saver mode**.

##### Navigation bar

A component offering a persistent and convenient way to switch between primary destinations in an app. [Learn more about navigation bars](https://m3.material.io/components/navigation-bar/overview)

##### Navigation drawer

A component providing ergonomic access to destinations in an app. [Learn more about navigation drawers](https://m3.material.io/components/navigation-drawer)

##### Navigation rail

A component providing access to primary destinations in apps when using tablet and desktop screens. [Learn more about navigation rails](https://m3.material.io/components/navigation-rail/overview)

##### Progress indicator

A component displaying an unspecified wait time or the length of a process. [Learn more about progress indicators](https://m3.material.io/components/progress-indicators/overview)

##### Orbiter

Floating UI elements that control the content within spatial panels.

##### Pane

The building blocks of a layout. Content and actions are grouped into panes, which adapt the content to best fit the screen.

##### Radio button

A component allowing users to select one option from a set. [Learn more about radio buttons](https://m3.material.io/components/radio-button/overview)

##### Role

Short nickname describing the purpose of a design token within a design system. Also known as slots. Examples: **On surface**; **Body 1**.

##### Side sheet

A component containing supplementary content that’s anchored to the left or right edge of the screen.

##### Slider

A component that allows users to make selections from a range of values.

##### Snackbar

A component that provides brief messages about app processes at the bottom of the screen. [Learn more about snackbars](https://m3.material.io/components/snackbar/overview)

##### Spatial

Relates to the placement of UI in space through extended reality (XR).

##### Style

One or more properties, typically customizable, that define an aspect of a UI's appearance, such as [color](https://m3.material.io/styles/color/system), [typography](https://m3.material.io/styles/typography/overview), or shape.

##### Switch

A component that toggles the state of a single item on or off. [Learn more about switches](https://m3.material.io/components/switch/overview)

##### Tab

A component used to organize content across different screens, data sets, and other interactions. [Learn more about tabs](https://m3.material.io/components/tabs/overview)

##### Text field

A component that lets users enter and edit text. [Learn more about text fields](https://m3.material.io/components/text-fields/overview)

##### Theme

A set of styles, such as color, elevation, and type, that can be applied globally to an app's UI components as a way to consistently adjust aspects of appearance in an app.

##### Time picker

A component that helps users select and set a specific time. [Learn more about time pickers](https://m3.material.io/components/time-pickers/overview)

##### Toolbar

A component displaying navigation and key actions at the bottom of mobile screens. [Learn more about toolbar](https://m3.material.io/components/toolbars/overview)

##### Tooltip

A component that displays informative text when users hover over, focus on, or tap an element.

##### XR

Extended reality includes UI viewed in virtual reality or in passthrough blended with the physical environment.

### Design for watches — Overview

Source: https://m3.material.io/foundations/watches/overview


#### Resources

| Type | Resource |
| --- | --- |
| Design | [About M3 Expressive](https://m3.material.io/) |
| [M3 Expressive on Wear OS](https://developer.android.com/design/ui/wear/guides/get-started) |
| [Figma Design Kits for Wear OS](https://developer.android.com/design/ui/wear/guides/get-started/design-kits) |
| Implementation | [Android Developers: Wear OS](https://developer.android.com/training/wearables) |
| [Jetpack Compose for Wear OS](https://developer.android.com/training/wearables/compose?version=3) |

#### New in GM3 Expressive

Design expressive layouts for watches with harmonious shape, animation, color, and typography treatments. All examples shown here are based on Material for Wear OS. [More on M3 Expressive on Wear OS](https://developer.android.com/design/ui/wear/guides/get-started)

##### Designed for round screens

A new shape system with edge-hugging containers and buttons creates variety and visual balance on round screens.

[More on shape system for Wear OS](https://developer.android.com/design/ui/wear/guides/get-started/apply)

(fig) Controls for smartwatches can adapt to the form factor

##### Expressive motion & springs

A new physics-based system makes interactions and transitions feel more alive, fluid, and natural.  
  
[More on M3 motion physics](https://m3.material.io/styles/motion/overview/how-it-works)

(fig) Use motion to make interactions intuitive

##### Shape morphing

With shape morphing, controls respond to show interaction. Containers change corner radius.  
  
[More on M3 shape morphing](https://m3.material.io/styles/shape/shape-morph)

(fig) Selected buttons change shape to show interaction

##### Rich color

Dynamic color and deep tonal palettes are applied in a system of color roles to create depth and variety.

[More on color for Wear OS](https://developer.android.com/design/ui/wear/guides/styles/color)

(fig) The color system includes three main colors and specific color roles to create depth and variety

##### New type roles

Along with an updated and optimized [type scale](https://developer.android.com/design/ui/wear/guides/styles/typography/type-scale-tokens), new styles serve specific use cases for watches:

- [Arc](https://developer.android.com/design/ui/wear/guides/styles/typography/apply#arc-styles) text for curved titles
- [Numeral](https://developer.android.com/design/ui/wear/guides/styles/typography/apply#numeral-styles) text for bigger, stylized text

[More on typography for Wear OS](https://developer.android.com/design/ui/wear/guides/styles/typography)

(fig) The baseline type scale is optimized for round screens to keep text legible in a compact space

### Design for watches — Foundations

Source: https://m3.material.io/foundations/watches/foundations


#### Resources

| Type | Resource |
| --- | --- |
| Design | [Get Started with M3 Expressive](https://m3.material.io/get-started) |
| [UI Design for Wear OS](https://developer.android.com/design/ui/wear/guides/get-started/design-for-wearables) |
| [Figma Design Kits for Wear OS](https://developer.android.com/design/ui/wear/guides/get-started/design-kits) |
| Implementation | [Android Developers: Wear OS](https://developer.android.com/training/wearables) |
| [Jetpack Compose for Wear OS](https://developer.android.com/training/wearables/compose?version=3) |

#### Anatomy

##### The watch face

Watch faces display the time, as well as  other information and can provide access to other functions through apps and tiles.  
  
They can also include complications, self-contained details that can show contextual info like heart rate or progress.  
  
Ongoing activities on the watch face show in-progress actions, like a stopwatch countdown or a workout timer.

(fig) **Complications** are details on the watch face that can be customized for style or function

(fig) **1. Ongoing activities**, like timers, media players, or workouts, can be accessed from the watch face

##### Physical buttons

Wearable devices can have a variety input surfaces, which include physical buttons and controls.

(fig) 1. Rotating side buttons: Used for volume control, or to scroll through options or lists
2. System buttons: Dedicated to OS functions like powering on and off, and cannot be customized
3. Multifunction buttons: Used by apps for custom actions like starting and stopping a stopwatch

#### Design principles

- Tailor layouts for different screen sizes with [adaptive design](https://developer.android.com/design/ui/wear/guides/foundations/adaptive-design)
- Design for short interactions to conserve battery
- Focus on one or two tasks at a time rather than a full app experience
- Test designs in situations that involve movement to make sure the design is usable at a glance

**[DO]** (fig) At-a-glance views allow people to quickly see calendar events

**[DON'T]** (fig) Don't create complex and detailed apps such as a calendar grid

##### Always relevant

Watches are always with people. Consider how to update app content based on context, such as time, place, and activity.

(fig) Navigation on a watch complements the experience on a phone

##### Works offline

Design for slow connections and offline use, such as exercising and commuting.

(fig) The network state can be communicated through:

1. An offline icon
2. A dialog

#### Interaction patterns

##### Cross-device experiences

Watches are often dependent on connected phones for functionality or complex interactions. In some cases, a watch and a phone are used together to accomplish different parts of the same task.

Consider how experiences can be consistent and complement the strengths of each device.

[More on multidevice development for Android](https://developer.android.com/multi-device-development)

**[DO]** (fig) Consider which actions are appropriate for each device

##### Always on displays

Watches can have always on displays, which allow ambient content to be shown when the watch isn’t in use.

This are especially helpful for ongoing experiences like a timer or a workout that should remain in view. Because they remain on the screen for long time periods, consider limiting the number of pixels that are illuminated.

[More on always-on apps and system ambient mode in Wear OS](https://developer.android.com/training/wearables/always-on)

(fig) Limit the number of illuminated pixels for a display that's always on

### Design for watches — Styles

Source: https://m3.material.io/foundations/watches/styles


#### Resources

| Type | Resource |
| --- | --- |
| Design | [M3 Expressive on Wear OS](https://developer.android.com/design/ui/wear/guides/get-started) |
| [Typography for Wear OS](https://developer.android.com/design/ui/wear/guides/styles/typography) |
| [Color for Wear OS](https://developer.android.com/design/ui/wear/guides/styles/color) |
| [Motion for Wear OS](https://developer.android.com/design/ui/wear/guides/get-started/apply#shape-motion) |
| Implementation | [Android Developers: Wear OS](https://developer.android.com/training/wearables) |
| [Jetpack Compose for Wear OS](https://developer.android.com/training/wearables/compose?version=3) |

#### Typography

GM3 Expressive adds two type styles specially designed for watches. [More on the type scale for Wear OS](https://developer.android.com/design/ui/wear/guides/styles/typography/type-scale-tokens)

##### Numerals

Numeral text styles display numbers, usually only a few digits at a time. This text can take on more expressive properties at larger display sizes without the accommodations usually required by text that must be localized.

(fig) 1. Numeral Large

##### Arc text

Arc text is specially designed for text following a curved path on a round screen, such as page titles, confirmation overlays, or a call to action. It optimizes character spacing for text displayed along a curve at the top or bottom of a round screen.

(fig) 1. Arc Large

#### Color

Material for Wear OS provides a custom [color system](https://developer.android.com/design/ui/wear/guides/styles/color/system) to create vibrant experiences and clear visual hierarchy.

##### Build from black

Watches are designed with a black background, instead of the tinted background that phones use.

(fig) Watches use a black background to conserve battery

##### Color roles

Since watches are used throughout the day, color tokens for Wear OS are specifically tailored for dark themes in low-light environments and light themes for daylight environments.

[More on color roles for Wear OS](https://developer.android.com/design/ui/wear/guides/styles/color/roles-tokens)

**[DO]** (fig) Buttons with (2) **on primary** on (1) **primary** and (4) **on** **primary container** on (3) **primary container** stay legible as the contrast level changes

**[DON'T]** (fig) Buttons with (2) **primary dim** on (1) **primary** or (4) **primary dim** on (3) **primary container** become illegible as contrast levels shift

##### Recommended color combinations for Wear OS

Below are some common color pairings that can help establish priority, function, and elevation.

- Use **primary dim** to highlight important elements and **tertiary** to provide standout feedback, such as tap responses
- When the main action isn't clear, use **tertiary** and **primary** for main actions and **secondary container** for complementary actions
- Use **secondary** and **primary container** to show two equally important options or containers, while maintaining contrast

(fig) 1. Primary
2. Primary dim

(fig) 1. Primary dim
2. Tertiary

(fig) 1. Tertiary
2. Primary
3. Secondary container

(fig) 1. Primary
2. Tertiary
3. Primary container

(fig) 1. Primary dim
2. Tertiary dim

(fig) 1. Primary
2. Tertiary dim

#### Motion and transitions

Expressive motion makes interactions feel more alive, fluid, and natural. Use transitions give intuitive feedback to show how an app works, such as standard patterns for changes in state or hierarchy.  
  
[More on shape and motion for Wear OS](https://developer.android.com/design/ui/wear/guides/get-started/apply#shape-motion)

(fig) Use expressive motion to show items selected

#### Haptics

Haptics are tactile effects used to grab a person’s attention for something important, or add emphasis to an interaction on the screen. You can use haptics to provide responsive feedback to scrolling and selecting items from a list, or controlling volume.

Use system-defined patterns and tokens (when available) to reinforce interaction expectations. Synchronize haptics with UI motion and sound to provide richer feedback.

- Use stronger haptics for key interactions, such as a payment confirmation
- Use subtler haptics for precision interactions, such as scrolling through a list

[More on haptics for Wear OS](https://developer.android.com/develop/ui/views/haptics/haptics-principles)

(fig) Use stronger haptics for key interactions and subtler feedback for precision interactions

### Design for watches — Layout

Source: https://m3.material.io/foundations/watches/layout


#### Resources

| Type | Resource |
| --- | --- |
| Design | [Wear OS common design layouts](https://developer.android.com/design/ui/wear/guides/foundations/common-layouts) |
| [Adaptive layout for Wear OS](https://developer.android.com/design/ui/wear/guides/foundations/adaptive-design) |
| [Figma Design Kit for Wear OS Apps](https://www.figma.com/community/file/1506418396052412186) |
| [Figma Design Kit for Wear OS Tiles](https://www.figma.com/community/file/1507852095734722321/m3-wear-os-tiles-design-kit?fuid=1348995927136540612) |
| Implementation | [Android Developers: Wear OS](https://developer.android.com/training/wearables) |

#### Layout principles

(fig) **Prioritize content**

Place the most important information at the top of the screen.

(fig) **Limit choices**

Reduce the number of actions to prevent decision fatigue. Focus on critical tasks to help people get things done within seconds.

(fig) **Simplify navigation**

Use a clear, shallow hierarchy so people don't get lost in complex menus. Aim to display content and navigation inline.

#### Standard layouts

For scrolling and non-scrolling apps:

- The time is shown on most app screens
- Edge-hugging buttons are used for round screens
- Show an indicator if more content is available on a scrolling apps

Wear OS offers [Figma Design Kits](https://developer.android.com/design/ui/wear/guides/get-started/design-kits) for standard layouts, with components, styles, and variables.

(fig) 1. Time text
2. Page title
3. Scroll indicator
4. Action button

##### Non-scrolling layouts

Non-scrolling layouts are for focused tasks or single-screen interactions where all content fits within the display, such as:

- Media players
- Pickers and switchers
- Fitness tracking screens
- Confirmation dialogs

[More on non-scrolling layouts for Wear OS](https://developer.android.com/design/ui/wear/guides/surfaces/apps/layouts/scrolling)

(fig) Use non-scrolling layouts for focused tasks like a timer

##### Scrolling layouts

Scrolling layouts can show content that exceeds the screen height, such as lists or dialogs. These might include:

- Message threads
- Contact lists
- Menu options

[More on scrolling layouts for Wear OS](https://developer.android.com/design/ui/wear/guides/surfaces/apps/layouts/scrolling)

(fig) Lists use scrolling layouts to show additional options

##### Tiles

Tiles (or widgets) are designed for glanceability. Use them to show timely updates or to help people perform frequent tasks quickly, such as checking progress towards a goal or viewing the weather.

Tiles are accessible with a swipe from the watch face. They have a fixed screen height and don't scroll.

[More on tiles for Wear OS](https://developer.android.com/design/ui/wear/guides/foundations/common-layouts/tiles)

(fig) Use tiles for quick access to to a few key options

##### Notifications

Notifications can be expanded to offer more interactions, such as replying to a message, opening a location on a map, or playing a song.

Wear OS provides notification templates for instant messaging and calendar events.

[More on notifications for Wear OS](https://developer.android.com/training/wearables/notifications)

(fig) Notifications should offer easy access to more interactions

##### Adaptive layout

Adaptive design allows apps to adapt to different screen sizes and device contexts. On Wear OS, this means apps scale and reorganize to maximize the available space on both small and large round displays. [The Material 3 Compose component library](https://developer.android.com/jetpack/androidx/releases/compose-material3?_gl=1*1ntglil*_ga*NzMzMjg1Nzc1LjE3NDg5MTM2NjI.*_ga_QPQ2NRV856*czE3NjQ3MDkwMjUkbzc2JGcxJHQxNzY0NzEwNjAyJGo0MCRsMCRoMA..) has built-in adaptive behavior.

- Design for small screens first: Start by designing for the smallest common screen size
- Use percentages: Define margins and padding using percentages rather than fixed pixel values. This prevents clipping and ensures content remains centered and proportional as the screen size increases.
- Add value on larger screens: Use the extra space on screens larger to show more content, such as additional buttons, text lines, or data visualizations
- Test all font sizes: Font scaling and accessibility settings such as bold text may cause changes in the size of UI elements

[More on adaptive layout for Wear OS](https://developer.android.com/design/ui/wear/guides/foundations/adaptive-design)

(fig) Design for small screens first, starting with a 192dp size watch

(fig) Show more content on devices that are larger than 225dp

### Design for immersive XR — Overview

Source: https://m3.material.io/foundations/xr/design/overview


- Use depth and expanded space to create believable environments
- Map interactions, like gaze and gestures, to real-world expectations
- Group UI elements on floating spatial panels
- Design for comfort to minimize motion sickness and physical strain
- Provide feedback through spatial audio, haptics, and visual cues

(fig) In home space, an XR app can run side by side with other apps, with the real world in the background. In full space, the XR app takes center stage with immersive, spatial capabilities.

#### Resources & availability

| **Type** | **Resource** | **Status** |
| --- | --- | --- |
| Design | [M3 Design Kit](https://www.figma.com/community/file/1035203688168086460) (Figma) | Available |
|  | [Android XR immersive design guidelines](https://developer.android.com/design/ui/xr/guides/get-started) | Available |
|  | [Design for AI glasses](https://developer.android.com/design/ui/ai-glasses) | Available |
| Implementation | [Build for Android XR](https://developer.android.com/develop/xr/get-started) | Available |
|  | [Jetpack XR SDK](https://developer.android.com/develop/xr/jetpack-xr-sdk) | Available |
|  | [Material Design for XR API reference](https://developer.android.com/jetpack/androidx/releases/xr-compose-material3) | Available |

#### Principles

##### Use familiar patterns

Material components like buttons and menus help people navigate spatial apps with confidence.

(fig) In XR, a Material menu uses elevation to appear in 3D

##### Prioritize comfort

Place content in the center of a person’s field of view, and design for different body positions, such as seated, standing, and reclined.

(fig) Positioning content in a person’s field of view keeps the UI visible and minimizes the need for excessive head or body movement

##### Embrace depth

Use elevation and 3D models to add volume, create a sense of realism, and spatial understanding.

(fig) 3D models can be viewed from all angles and moved with natural interactions

##### Design for accessibility

Design apps to work with system-level assistive technologies like screen readers, voice commands, and text resizing. Provide large target sizes, support multimodal inputs, and ensure text is legible against any background.

(fig) In XR, icon buttons should have a 56dp target size and 4dp offset

#### Material XR components

The following Material components are adapted for XR:

- [App bars](https://m3.material.io/foundations/xr/components/app-bars)
- [Dialogs](https://m3.material.io/foundations/xr/components/dialogs)
- [Navigation bar](https://m3.material.io/foundations/xr/components/nav-bar)
- [Navigation rail](https://m3.material.io/foundations/xr/components/nav-rail)
- [Toolbars](https://m3.material.io/foundations/xr/components/toolbars)

(fig) A toolbar’s behavior and placement changes from a 2D to a 3D experience

#### XR terms

- [3D models](https://developer.android.com/design/ui/xr/guides/3d-content): Digital objects rendered with depth and volume
- [Field of view](https://developer.android.com/design/ui/xr/guides/spatial-ui#where-place): The area a person can see without turning their head
- [Full space](https://developer.android.com/design/ui/xr/guides/foundations#modes): Android XR’s immersive mode that supports spatial components
- [Home space](https://developer.android.com/design/ui/xr/guides/foundations#modes): Compatible with mobile and large screen apps, but doesn’t support spatial components
- [Orbiters](https://developer.android.com/design/ui/xr/guides/spatial-ui#orbiters): Floating elements that control the content within spatial panels, full space only
- [Passthrough](https://developer.android.com/design/ui/xr/guides/foundations#give-users): A blended reality where an XR device displays multiple large apps and the user’s physical environment
- [Spatial elevation](https://developer.android.com/design/ui/xr/guides/spatial-ui#spatial-elevation ): Displays a component above an app on the Z-axis
- [Spatial environments](https://developer.android.com/design/ui/xr/guides/environments): The 360° 3D virtual worlds people see in an immersive app
- [Spatial panels](https://developer.android.com/design/ui/xr/guides/spatial-ui#spatial-panels): A container for UI elements, interactive components, and immersive content, full space only

### Design for immersive XR — Interaction

Source: https://m3.material.io/foundations/xr/design/interaction


XR interactions should be flexible, comfortable, and intuitive. People expect to interact with digital objects just like they do with physical ones.

(fig) A person should be able to switch between hands, eyes, voice, or controllers depending on their posture and preference

#### Natural interactions

Natural interactions like gestures allow people to navigate, select, and move content using their hands. Gestures should be:

- Easy to learn
- Follow familiar patterns, such as press, pinch, and swipe on mobile
- Comfortable to use repeatedly

Support one-handed interactions for essential actions. Don’t require large, repetitive arm movements, as they can cause fatigue.

[More on Android XR gestures](https://developer.android.com/design/ui/xr/guides/foundations#understanding-system)

(fig) A person can select items by pinching with the index finger and thumb

##### System navigation

People should be able to open a navigation menu anywhere, anytime.

On Android XR, the system-level navigation menu includes:

- Go back: Operates the same as the [back gesture](https://developer.android.com/guide/components/activities/tasks-and-back-stack) on Android phones
- Launcher: Goes to the home screen
- Recents: People can open, close, and switch apps

(fig) A navigation menu should always be available using a simple gesture, so people don’t get lost

#### Multimodal inputs

XR apps should support flexible, multimodal inputs, such as hand and eye tracking, voice, keyboard and mouse, and controllers.

[More on Android XR multimodal inputs](https://developer.android.com/design/ui/xr/guides/foundations#design-multimodal)

##### Hand & eye tracking

Tracking allows people to interact with the virtual world without a controller.

Hand tracking

- Direct: People can touch, grab, or push virtual objects in arm's reach
- Ray-based: A ray, like a laser pointer, extends from the hand to target distant items, then a pinch selects it

Eye tracking

- Enables gaze and dwell interactions
- Looking at an object triggers a hover state

(fig) Distant elements can be moved using hand and eye tracking

##### Voice, keyboard, mouse, & controller inputs

XR apps should also support voice and physical inputs including:

- Voice for hands-free text entry on virtual keyboards
- Voice commands for common actions like **Open Settings** or **Go back**
- Mouse & keyboard inputs for precision and text-heavy workflows
- Six degrees of freedom (6DoF) controllers for gaming or complex 3D manipulation

#### Motion

In XR, motion sickness can happen when visual cues disconnect from the inner ear's sense of balance.

To keep people comfortable:

- Use [standard easing](https://m3.material.io/styles/motion/easing-and-duration/tokens-specs#601d5552-a6e6-4d74-9886-ff8f24b9ec35) and [long duration](https://m3.material.io/styles/motion/easing-and-duration/tokens-specs#48bf653e-46f9-48f5-87e0-eaf8ea3fe716) motion tokens
- Maintain a stable horizon line
- Limit continuous motion. To switch locations, use teleportation or instant jump instead.
- Use tunnel vision or vignetting to reduce the field of view while in motion

**[CAUTION]** (fig) Limit use of continuous motion. If required, keep the horizon line stable.

#### Feedback

Since virtual objects lack physical resistance, use visual, audio, and sensory feedback to confirm interactions.

##### Visual cues

Use hover icons, focus indicators, ripples, text labels, and elevation changes to show an object’s interaction state.

To indicate an item is targeted, use [spatial elevation](https://developer.android.com/design/ui/xr/guides/spatial-ui#spatial-elevation ) or a highlight state.

(fig) Use visual clues to show when a spatial element is hovered, focused, or selected

##### Spatial audio

Sound emitters can be positioned in 3D space and provide audio confirmation of an action. For example, add a **click** sound when a button is pressed.

(fig) Spatial audio can help signify where a person should look or that an action was taken

##### Haptics

For controllers, allow people to turn vibration on or off to simulate the feel of touching or grabbing an object.

### Design for immersive XR — Layout

Source: https://m3.material.io/foundations/xr/design/layout


In XR, a layout extends beyond the screen into the physical world. Spatial panels, 3D models, and an immersive environment can be arranged anywhere on an infinite canvas.

Unlike mobile layouts which are constrained by screen edges, XR layouts must account for:

- Depth on the Z-axis
- Viewing distance
- A person's field of view

[More on Android XR layouts](https://developer.android.com/design/ui/xr/guides/spatial-ui)

(fig) An XR headset display can fully occlude the real world. This allows for complete immersion, with the physical environment replaced by a virtual one.

#### XR layout basics

The fundamental building block of an Android XR app is the spatial panel. Panels serve as containers for UI elements and can be spatially elevated alongside orbiters, 3D models, and environments.

star

Note:

Spatial panels are available in full space only. They aren't currently available in home space.

##### Spatial panels

In full space, spatial panels are flexible canvases that can contain UI elements, media, and spatial video.

They often serve as the anchor for 3D models and orbiters.

(fig) Navigation UI can float in orbiters outside of a spatial panel

###### Size & position

Full space supports panel placement in both passthrough and virtual environments.

By default, spatial panels launch:

- Size: 1024x720dp
- 1.75 meters away from a person
- With 32dp rounded corners

In full space, panels have no minimum size. The maximum panel size is 2560x1800dp.  
  
When people switch from full space to home space, spatial panels usually stay in the same predictable position.

(fig) At a 1.75 meter launch distance, a spatial panel's size is 1024x720dp

(fig) Place the panel's vertical center 5° below eye level to maximize comfort

(fig) Place primary content in the center 41° of a person’s field of view

###### Adaptive design

Spatial panels dynamically scale based on their distance from a person.

Material 3 components use [adaptive design](https://m3.material.io/foundations/layout/layout-overview/adaptive-design) to ensure content automatically scales and reflows to remain legible and comfortable at any distance or angle.

To avoid system UI conflicts, stay within default movement limits:

- Minimum depth: 0.75 meter
- Maximum depth: 5 meters

(fig) A person can scale a spatial panel up or down so it's large enough to see clearly, no matter the distance. When they move the panel, Android XR automatically scales its size.

###### Grouping panels

In full space, an app can be broken up into multiple spatial panels, arranged in a flat, curved, or arbitrary layout.

(fig) Flat layout: Panels are arranged in a straight line. Best for comparing information side by side.

(fig) Curved layout: Panels curve around the person. Best for immersive media or wide-format dashboards.

(fig) Arbitrary layout: Panels are placed freely in space. Best for multi-tasking.

##### Orbiters

An orbiter is a floating element that accompanies a spatial panel.

Use orbiters for navigation UI that needs to stay accessible without obscuring the main content.

Material [XR components](https://m3.material.io/foundations/xr/components/overview) automatically adapt into orbiters.

(fig) A navigation rail transforms into an orbiter in XR to give the UI more space

##### Spatial elevation & depth

Use the Z-axis to create volumetric UI. Unlike 2D elevation which uses shadows, volumetric UI uses actual depth.

- [Spatial elevation](https://developer.android.com/design/ui/xr/guides/spatial-ui#spatial-elevation) can create hierarchy, bring active elements forward, and push background elements back
- Layering can separate UI layers physically. For example, a scrim can float several centimeters behind a dialog box.

(fig) A dialog using spatial elevation in Android XR

#### Behavior

##### Anchoring

In [passthrough](https://developer.android.com/design/ui/xr/guides/foundations#give-users), layouts can interact with the physical world:

- World-locked: Panels stay in a specific spot in the room, like a music player anchored to a table
- Head-locked: Avoid locking UI directly to the person's head view, as it can feel jarring. Instead, use a lazy follow behavior where the UI gently drifts to catch up with the person's movement.

(fig) In passthrough, a spatial panel can be attached to a specific location in the real world, such as a table

##### Color contrast & dimming

When using standard **surface** tokens, panels automatically handle contrast:

- Passthrough: If the physical room is bright, the system dims the background to ensure the UI remains legible
- Virtual environments: Panels adapt to the lighting of the virtual world

[More on XR colors](https://developer.android.com/design/ui/xr/guides/visual-design#colors)

(fig) Use bright, high-contrast colors to ensure the UI stands out against different backgrounds

### Design for immersive XR — Accessibility

Source: https://m3.material.io/foundations/xr/design/accessibility


#### Use cases

XR presents unique physical constraints. Designing accessible XR products means accounting for different bodies, postures, and sensory abilities.

People should be able to do the following with assistive technology:

- Navigate and interact with spatial content using their preferred input method
- Understand the spatial environment and select interactive elements
- Customize the experience to fit their physical posture and comfort

[More on Android XR accessibility](https://developer.android.com/design/ui/xr/guides/get-started#make-app)

#### System-level accessibility

Android XR adapts familiar Android assistive technologies for spatial environments.

To ensure an inclusive experience, design XR apps to work with system-level features like Google's [TalkBack](https://developer.android.com/guide/topics/ui/accessibility/testing) screen reader, voice to text, live captions, [dwell control](https://support.google.com/accessibility/android/answer/7071579), magnification, and color inversion and correction.

[Android XR app quality guidelines](https://developer.android.com/docs/quality-guidelines/android-xr)

#### Text accessibility & color contrast

Make sure text and UI are legible in different lighting conditions and environments. For example, in passthrough, the background might be a bright window or a dark room.

- Use a minimum 14dp body font size
- Ensure high contrast between text and background
- Use standard background color roles like **surface container**, rather than custom colors, so they dim automatically
- Support light and dark themes

(fig) Use color roles to dim backgrounds automatically

#### Physical accessibility

To support different mobility levels, provide flexible input methods and positions:

- Actions should be achievable with one hand, voice, or eye control
- Don’t require two-handed gestures
- Design for seated, standing, and reclined positions
- Allow people to recenter and pull UI closer to them

(fig) Offer adjustable input methods and viewing positions

#### Target size

Use large target sizes to make XR interactions precise and accessible.    
  
Interactive elements should have:

- 56x56dp or larger target
- 48x48dp or larger visual affordance
- 4dp offset

Don’t overlap targets of different elements.

Targets and icons should scale with their parent container or label text.

(fig) Use 56dp or larger target sizes for interactive elements

### XR components — Overview

Source: https://m3.material.io/foundations/xr/components/overview


- Leverage depth and space to create believable environments
- Design for comfort to minimize motion sickness and physical strain
- Map interactions, like gaze and gestures, to real-world expectations
- Group UI elements on floating spatial panels
- Provide feedback through spatial audio, haptics, and visual cues

(fig) A toolbar’s behavior and placement changes from a 2D to a 3D experience

#### Material XR components

The following Material components are adapted for XR:

- [App bars](https://m3.material.io/foundations/xr/components/app-bars)
- [Dialogs](https://m3.material.io/foundations/xr/components/dialogs)
- [Navigation bar](https://m3.material.io/foundations/xr/components/nav-bar)
- [Navigation rail](https://m3.material.io/foundations/xr/components/nav-rail)
- [Toolbars](https://m3.material.io/foundations/xr/components/toolbars)

(fig) A dialog can be spatially elevated on the Z-axis above spatial panels

### XR components — App bars

Source: https://m3.material.io/foundations/xr/components/app-bars


star

Note:

XR guidelines are primarily intended for designers. Find what’s implemented in code in the [design kit](https://www.figma.com/community/file/1035203688168086460).

Extended reality (XR) interfaces have special design requirements, like showing apps in 3D space. Material has an XR app bar with custom specs and guidance. See [XR developer documentation](https://developer.android.com/design/ui/xr/guides/foundations) for more details.

#### Variants & configurations

There is one app bar orbiter. It closely aligns with the small app bar. It can be configured to be center-aligned or left-aligned.

(fig) 1. Center-aligned app bar
2. Left-aligned app bar

#### Anatomy

(fig) 1. Container
2. Headline
3. Trailing icons
4. Leading icon

#### Color & elevation

XR uses color to communicate the elevation of UI elements and orbiters. With [spatial elevation](https://developer.android.com/design/ui/xr/guides/spatial-ui#spatial-elevation), the app bar displays above the spatial panel on the Z-axis. Elevated app bars can use any of these color options:

(fig) 1. Surface container
2. Surface container high
3. Surface container highest

#### Measurements

(fig) Measurements and padding for app bar orbiters

#### Usage

An app bar can appear in an orbiter for a more immersive experience. Currently, this spatial capability is only available in full space. In home space, use a regular app bar on the same plane as the body content to mimic a 2D experience.

(fig) An app bar’s behavior and placement changes from a 2D to a 3D experience

#### Behavior

##### Global context

When placed in global context, the orbiter is centered at the top of the app it controls.

It stays anchored to the app during layout or content changes.

This ensures navigation elements are always easy to find and use.

(fig) Global app bar orbiters should be centered and anchored to the top of the app

##### Local context

When placed in local context, the orbiter is centered at the top of the spatial panel it controls.

It repositions in response to layout or content changes.

**[CAUTION]** (fig) Local app bar orbiters should be centered and anchored to the top of the panel. However, this is less common, so make sure that it contains actions that only affect its anchored panel.

##### Additional app bars

In most cases, apps should only have one app bar orbiter, placed in global context.

**[CAUTION]** (fig) Limit the use of multiple app bars to rare cases when additional spatialization improves usability

#### Placement

##### Offset & inset positioning

In full space, an app bar orbiter can be positioned:

- Offset 20dp from the spatial panel
- Inset 12dp, overlapping spatial panel without obstructing content

**[DO]** (fig) An app bar orbiter with a 20dp offset creates visual separation from the spatial panel

**[DON'T]** (fig) Don’t overlap the app bar orbiter and spatial panel more than 12dp

##### Horizontal alignment

**[DO]** (fig) Always align the app bar orbiter within the bounds of nearby spatial panels

**[DON'T]** (fig) The app bar orbiter shouldn’t exceed the width of adjacent spatial panels

##### Spatial panel alignment

By default, app bar orbiters are center-aligned to the spatial panel. Their width and placement can be adjusted to accommodate specific user needs, such as improved ergonomics or [right-to-left (RTL) languages](https://m3.material.io/foundations/layout/bidirectionality-rtl).

(fig) App bar orbiters can align to the center, left, or right of the spatial panel

##### Width boundaries

An app bar orbiter’s width should adjust to stay in a person’s [field of view](https://developer.android.com/design/ui/xr/guides/spatial-ui#where-place).

This makes crucial navigation elements easy to find.

**[DO]** (fig) Adjust the width of the app bar orbiter to fit in a person’s field of view

It’s not recommended to increase the width of an app bar orbiter beyond a person’s natural [field of view](https://developer.android.com/design/ui/xr/guides/spatial-ui#where-place).

This creates a visual imbalance and makes it difficult to find navigation elements.

**[DON'T]** (fig) Avoid expanding the app bar orbiter beyond the adjacent panel’s width and a person’s field of view

##### Adaptable width

When placed in a local context, an app bar orbiter can expand to the width of its adjacent spatial panel.

Be sure the orbiter stays in a person’s field of view, and test for usability.

**[CAUTION]** (fig) Use caution before expanding the app bar’s width to match its spatial panel. The orbiter may not fit in a person’s primary field of view.

#### Accessibility considerations

[XR accessibility](https://m3.material.io/foundations/xr/design/accessibility) guidelines are still evolving. XR app bars should follow applicable Material [app bar accessibility standards](https://m3.material.io/components/app-bars/accessibility).

### XR components — Dialogs

Source: https://m3.material.io/foundations/xr/components/dialogs


star

Note:

XR guidelines are primarily intended for designers. Find what’s implemented in code in the [design kit](https://www.figma.com/community/file/1035203688168086460).

Extended reality (XR) introduces spatial capabilities, such as using depth to make dialogs stand out from the background. Currently, [spatial dialogs](https://www.figma.com/community/file/1035203688168086460) are only available in full space. For home space, follow Material’s general [dialog guidance](https://m3.material.io/components/dialogs/overview).

#### Color & elevation

XR uses color roles to communicate the elevation of UI elements. Dialogs can use two color options: **surface container high** or **surface container highest**.

star

Note:

Color and elevation for spatial dialogs aren’t available in Jetpack Compose yet. These need to be customized manually.

(fig) 1. Surface container high
2. Surface container highest

For effective visual hierarchy, a dialog should be the most prominent element.

Add a scrim behind a dialog to improve its visibility. Scrims prevent other content from being selected until the dialog action is complete.

**[DO]** (fig) Make sure a spatial dialog’s color is higher than all other UI elements, and use a scrim

The dialog should have the highest elevation in the product.

For example, if the dialog is **surface container high**, don’t use **surface container highest** for any other elements.

**[DON'T]** (fig) If a dialog’s color is **surface container high**, don’t use **surface container highest** for any other element

#### Usage

Only use [basic dialogs](https://m3.material.io/components/dialogs/guidelines#97ac3858-3932-4084-ae8e-73e42b7cb752) in XR. This keeps the required action in the person’s [field of view](https://developer.android.com/design/ui/xr/guides/spatial-ui#where-place).

**[DO]** (fig) A basic dialog elevated above an app in home space

**[DON'T]** (fig) Avoid using full-screen dialogs in XR. Required actions could appear beyond a person’s field of view.

#### Spatial dialogs

In full space, dialogs can be elevated spatially via [overrides](https://developer.android.com/develop/xr/jetpack-xr-sdk/material-design#use-enablexrcomponentoverrides). This helps dialogs stand out from their background in XR.

(fig) Side view of a basic dialog with spatial elevation in full space

#### Behavior

##### Effect

The spatial dialog should scale uniformly. It also fades in when appearing, and fades out when disappearing.

The dialog's scrim only fades in and out.

(fig) Front view of a spatial dialog in motion in full space

##### Movement

When activated, the spatial dialog rises from the app to the highest resting level on the Z-axis.

When the action is complete, it returns to a normal resting level.

The dialog's scrim stays at the app content level at all times.

To prevent motion sickness, use [standard easing](https://m3.material.io/styles/motion/easing-and-duration/tokens-specs#601d5552-a6e6-4d74-9886-ff8f24b9ec35) and [long duration](https://m3.material.io/styles/motion/easing-and-duration/tokens-specs#48bf653e-46f9-48f5-87e0-eaf8ea3fe716) motion tokens.

(fig) Side view of a spatial dialog in motion in full space

#### Placement

Consider factors like field of view, viewing distance, and possible interactions when deciding where to place dialogs in XR.  
  
A dialog’s placement can be adjusted to accommodate specific needs, such as improved ergonomics or [right-to-left (RTL) languages](https://m3.material.io/foundations/layout/bidirectionality-rtl).

##### Elevation: Highest resting level

Display spatial dialogs at the **highest resting level**. When setting the depth value of the highest resting level, make sure the elevated dialog is at a comfortable viewing distance from the person. [More on spatial elevation](https://developer.android.com/design/ui/xr/guides/spatial-ui#spatial-elevation)

(fig) A spatial dialog moves to the highest resting level in full space

##### Center spatial dialogs in field of view

Spatial dialogs should be centered in a person’s [field of view](https://developer.android.com/design/ui/xr/guides/spatial-ui#where-place). If the dialog **can’t** track head movements, position it in the center of the app’s content.

If the dialog **can** track head movements, configure it with a lazy follow behavior. This keeps the dialog anchored to the center of a person’s field of view until an action is taken.

(fig) A dialog in full space stays centered in a person’s field of view

#### Accessibility considerations

[XR accessibility](https://m3.material.io/foundations/xr/design/accessibility) guidelines are still evolving. Spatial dialogs should follow applicable Material [dialog accessibility standards](https://m3.material.io/components/dialogs/accessibility).

### XR components — Nav bar

Source: https://m3.material.io/foundations/xr/components/nav-bar


star

Note:

XR guidelines are primarily intended for designers. Find what’s implemented in code in the [design kit](https://www.figma.com/community/file/1035203688168086460).

Extended reality (XR) interfaces have special design requirements, like showing apps in 3D space. Material has an XR navigation bar with custom specs and guidance. See [XR developer documentation](http://developer.android.com/design/ui/xr/guides/foundations) for more details.

#### Anatomy

(fig) 1. Container
2. Icon
3. Active indicator
4. Small badge (optional)
5. Large badge (optional)
6. Large badge label (optional)
7. Label text

#### Color & elevation

On XR, color is used to highlight elevated UI elements and orbiters. With [spatial elevation](https://developer.android.com/design/ui/xr/guides/spatial-ui#spatial-elevation), the navigation bar displays above the spatial panel, on the Z-axis. Color communicates elevation on UI elements and orbiters. Elevated nav bars can use any of these color options:

(fig) 1. Surface container
2. Surface container high
3. Surface container highest
4. Tertiary container

#### Measurements

(fig) Navigation bar orbiter padding and measurements

#### Usage

In full space, a navigation bar can appear in an orbiter for a more immersive experience. Currently, spatial capabilities, such as orbiters, are only available in full space. In home space, use a regular navigation bar on the same plane as the body content to mimic a 2D experience.

(fig) Navigation bar behavior and placement changing when going from a 2D to a 3D experience

#### Behavior

##### Global context

When placed in global context, the navigation bar orbiter is centered at the bottom of the app it controls. It stays anchored to the app during layout or content changes. This ensures navigation elements are easy to find and use.

(fig) A navigation bar orbiter centered and anchored to the bottom of the app

##### Local context

When placed in local context, the navigation bar orbiter is centered at the bottom of the spatial panel it controls. It repositions in response to layout or content changes.

**[CAUTION]** (fig) Use caution before placing a navigation bar in local context. If it contains navigation elements that affect the overall app, a navigation bar orbiter should be placed in global context.

#### Placement

##### Navigation context

The position of the navigation bar orbiter should communicate its navigational context:

- Use **offset positioning** for global actions that affect the overall app experience
- Use **inset positioning** for local actions that are specific to a spatial panel

A navigation bar orbiter can either overlap or be positioned adjacent to spatial panels with a 20dp margin for visual separation.

(fig) Position the navigation bar orbiter to reflect context: offset for global actions, inset for spatial panel-specific actions

##### Inset positioning

Don’t obstruct content. To ensure a balanced and uncluttered layout, a navigation bar orbiter should overlap spatial panels by 12dp and no more than half their height.

**[DON'T]** (fig) Avoid overlapping an inset a navigation bar orbiter by more than half its height

##### Horizontal alignment

The navigation bar orbiter placement shouldn't exceed the width of adjacent spatial panels.

**[DON'T]** (fig) The navigation bar orbiter shouldn’t exceed the width of the spatial panel

##### Spatial panel alignment

A navigation bar orbiter should always be placed at the bottom of a spatial panel and within the immediate field of view (FOV).

Their placement can be adjusted to accommodate specific needs, such as improved ergonomics or [right-to-left (RTL) languages](https://m3.material.io/foundations/layout/bidirectionality-rtl).  
  
Avoid placing the navigation bar orbiter at the top of a spatial panel, as this area is typically reserved for app bar orbiters or other critical UI elements.

**[DON'T]** (fig) Don't position a navigation bar orbiter at the top of a spatial panel. Position it at the bottom in the field of view to maintain usability and minimize interaction effort.

#### Accessibility considerations

XR navigation bars should follow applicable Material [nav bar accessibility standards](https://m3.material.io/components/navigation-bar/accessibility). [More on XR accessibility](https://m3.material.io/foundations/xr/design/accessibility)

### XR components — Nav rail

Source: https://m3.material.io/foundations/xr/components/nav-rail


star

Note:

XR guidelines are primarily intended for designers. Find what’s implemented in code in the [design kit](https://www.figma.com/community/file/1035203688168086460).

Extended reality (XR) interfaces have special design requirements, like showing apps in 3D space. Material has an XR navigation rail with custom specs and guidance. See [XR developer documentation](http://developer.android.com/design/ui/xr/guides/foundations) for more details.

#### Variants

There are two variants of navigation rail orbiters: the contained FAB and spatialized FAB navigation rails.

(fig) 1. Contained FAB rail
2. Spatialized FAB rail

#### Anatomy

(fig) 1. Container
2. Active indicator
3. Large badge (optional)
4. Badge (optional)
5. Large badge label (optional)
6. Label text
7. Icon
8. Embedded or spatialized FAB (optional)
9. Menu icon (optional)

#### Color & elevation

On XR, color is used to highlight elevated UI elements and orbiters. With [spatial elevation](https://developer.android.com/design/ui/xr/guides/spatial-ui#spatial-elevation), the navigation bar displays above the [spatial panel](https://developer.android.com/design/ui/xr/guides/spatial-ui#spatial-panels), on the Z-axis. Color communicates elevation on UI elements and orbiters. Elevated nav rails can use any of these color options:

(fig) 1. Surface container with tertiary FAB
2. Surface container high with tertiary fixed dim FAB
3. Surface container highest with tertiary fixed dim FAB
4. Tertiary container with primary FAB

#### Measurements

(fig) Navigation rail orbiter padding and measurements with contained FAB

(fig) Navigation rail orbiter padding and measurements with spatialized FAB

#### Usage

In full space, a navigation rail can appear in an orbiter for a more immersive experience. Currently, spatial capabilities, such as orbiters, are only available in full space. In home space, use a regular navigation rail on the same plane as the body content to mimic a 2D experience.

(fig) Navigation rail orbiter behavior and placement changing when going from a 2D to a 3D experience

#### Behavior

##### Global context

Intended for global navigation, a nav rail orbiter should be centered along the left or right edge of the app it controls. It stays anchored to the app during layout or content changes to ensure controls are easy to find.

**[DO]** (fig) A navigation rail orbiter should be placed in global context, centered and anchored to the left or right of the app

##### Local context

Don’t place a navigation rail orbiter in local context or [between spatial panels](https://m3.material.io/foundations/xr/components/nav-rail#d965ae72-bd1b-45a9-b4d3-d1d542e72087). Local placement can make controls hard to find. Nav rails are designed for app-level navigation, so should only use the global context.

**[DON'T]** (fig) Avoid placing a navigation rail orbiter in local context. It can be hard to find if placed between two spatial panels.

#### Placement

##### Navigation context

The position of the navigation rail orbiter should communicate its navigational context:

- Use **offset positioning** for global actions that affect the overall app experience
- Use **inset positioning** for local actions that are specific to a spatial panel

A navigation rail orbiter can either overlap or be positioned adjacent to spatial panels with a 20dp margin for visual separation.

(fig) Position the navigation rail orbiter to reflect context: offset for global actions, inset for spatial panel-specific actions

##### Inset positioning

Don’t obstruct content. To ensure a balanced and uncluttered layout, a navigation rail orbiter should overlap spatial panels by 12dp and no more than half their width.

**[DON'T]** (fig) Avoid overlapping an inset navigation rail orbiter by more than half its width

##### Vertical alignment

A navigation rail orbiter can be aligned to the top, middle, or center of spatialized panels, providing different levels of visual prominence and accessibility.  
  
Align the navigation rail orbiter based on the specific design and user experience goals for the application.

(fig) Align the navigation rail orbiter at the top or center of spatialized panels

The navigation rail orbiter placement shouldn't exceed the height of adjacent spatial panels.

**[DON'T]** (fig) The navigation rail orbiter shouldn’t exceed the height of the spatial panel

##### Spatial panel alignment

Avoid placing a navigation rail orbiter between spatial panels. This negatively affects the interface structure.

Navigation rail placement can be adjusted to accommodate specific needs, such as improved ergonomics or [right-to-left (RTL) languages](https://m3.material.io/foundations/layout/bidirectionality-rtl).  
  
For layouts that span more than two spatial panels, consider using a [navigation bar orbiter](https://m3.material.io/foundations/xr/components/nav-bar).

**[DON'T]** (fig) Don't place a navigation rail orbiter between spatial panels

#### Spatialized FAB

There are two variants of navigation rail orbiters with different FAB treatments:

- **Contained FAB rail:** A contained FAB within the rail. This offers a compact and familiar layout.
- **Spatialized FAB rail:** The FAB becomes an orbiter of its own and is placed outside the navigation rail orbiter. Use this for higher emphasis and a distinct spatial effect.

Use the spatialized FAB rail to emphasize key actions and leverage XR hierarchy. Use the contained FAB rail to be more subtle, and align the experience with the baseline navigation bar.

(fig) Choose between a navigation rail orbiter with a contained FAB or a spatialized FAB

To maintain visual association, place the spatialized FAB in close proximity to the navigation rail orbiter. Material recommends a 20dp margin.  
  
The spatialized FAB can be placed above or below the navigation rail orbiter.

(fig) Position the spatialized FAB close to the navigation rail orbiter

While the spatialized FAB and navigation rail orbiter are typically positioned together, their placement is adaptable.

**[CAUTION]** (fig) Use caution when positioning spatialized FABs. Keep them within the height of adjacent spatial panels

#### Accessibility considerations

[XR accessibility](https://m3.material.io/foundations/xr/design/accessibility) guidelines are still evolving. XR navigation rails should follow applicable Material [nav rail accessibility standards](https://m3.material.io/components/navigation-rail/accessibility).

### XR components — Toolbars

Source: https://m3.material.io/foundations/xr/components/toolbars


star

Note:

XR guidelines are primarily intended for designers. Find what’s implemented in code in the [design kit](https://www.figma.com/community/file/1035203688168086460).

Extended reality (XR) interfaces have special design requirements, like showing apps in 3D space. Material has an XR toolbar with custom specs and guidance. Read [XR developer documentation](https://developer.android.com/design/ui/xr/guides/foundations) for more details.

#### Variants

There is one toolbar orbiter. It closely aligns with the floating toolbar. It can be configured to be horizontal or vertical. [Go to XR toolbar API reference](https://developer.android.com/reference/kotlin/androidx/xr/compose/material3/package-summary#HorizontalFloatingToolbar(kotlin.Boolean,androidx.compose.ui.Modifier,androidx.compose.material3.FloatingToolbarColors,androidx.compose.foundation.layout.PaddingValues,androidx.compose.material3.FloatingToolbarScrollBehavior,kotlin.Function1,kotlin.Function1,kotlin.Function1))

(fig) 1. Horizontal floating toolbar
2. Vertical floating toolbar

#### Anatomy

(fig) 1. Container
2. Placed components

#### Color & elevation

XR uses color to communicate the elevation of UI elements and orbiters. With [spatial elevation](https://developer.android.com/design/ui/xr/guides/spatial-ui#spatial-elevation), the toolbar displays above the spatial panel on the Z-axis. Elevated toolbars can use any of these color options:

(fig) 1. Surface container
2. Surface container high
3. Surface container highest
4. Tertiary container

#### Measurements

(fig) Measurements for toolbar orbiters

(fig) Padding for toolbar orbiters

#### Usage

A toolbar can appear in an orbiter for a more immersive experience. Currently, this spatial capability is only available in full space. In home space, use a regular toolbar on the same plane as the body content to mimic a 2D experience.

(fig) A toolbar’s behavior and placement changes from a 2D to a 3D experience

#### Behavior

##### Local context (recommended)

When placed in local context, the toolbar orbiter is centered at the bottom of the spatial panel it controls.

It repositions in response to layout or content changes.

(fig) In most cases, toolbars should be placed in local context. The orbiter is centered and anchored to the bottom of the panel it controls.

##### Global context

When placed in global context, the toolbar orbiter is centered at the bottom of the app.

It stays anchored to the app during layout or content changes.

**[CAUTION]** (fig) In global context, toolbar orbiters are centered and anchored to the bottom of the app. This use case is less common, as toolbars usually contain actions that control a specific panel.

##### Expand & collapse

Toolbar orbiters with more than five items can expand and collapse to reveal or hide additional content.

When a toolbar orbiter expands, it stays within the bounds of the adjacent spatial panel.

Alternatively, more complex toolbars can be split into multiple toolbars.

(fig) Toolbar orbiters can expand to reveal additional content, but should stay within the bounds of the adjacent spatial panel

##### Additional toolbars

In some cases, full space apps can have more than one toolbar orbiter, placed in either global or local context.

**[CAUTION]** (fig) Limit the use of multiple toolbars to rare cases when additional spatialization improves usability

#### Placement

##### Offset & inset positioning

In full space, a toolbar orbiter can be positioned adjacent to or overlap a spatial panel.

**[DO]** (fig) The recommended toolbar orbiter position from the spatial panel is:

- Offset by 20dp or
- Inset by 12dp

**[DON'T]** (fig) To prevent content obstruction, don’t overlap the toolbar orbiter and spatial panel above 12dp

##### Horizontal alignment

**[DO]** (fig) Always align the toolbar orbiter within the horizontal bounds of nearby spatial panels

**[DON'T]** (fig) The toolbar orbiter shouldn’t exceed the width of adjacent spatial panels

##### Vertical alignment

**[DO]** (fig) Always align the toolbar orbiter within the vertical bounds of nearby spatial panels

**[DON'T]** (fig) The toolbar orbiter shouldn’t exceed the height of adjacent spatial panels

##### Spatial panel alignment

By default, toolbar orbiters are center-aligned to the spatial panel. Their placement can be adjusted to accommodate specific user needs, such as improved ergonomics or [right-to-left (RTL) languages](https://m3.material.io/foundations/layout/bidirectionality-rtl).

(fig) Depending on the configuration (horizontal or vertical) of the toolbar orbiter, it can align to the center, left, right, top, or bottom of a spatial panel

Avoid placing a vertical toolbar orbiter between spatial panels.   
  
This negatively affects the interface structure and can make it difficult to find.

**[DON'T]** (fig) Don't place a vertical toolbar orbiter between spatial panels

#### Accessibility considerations

[XR accessibility](https://m3.material.io/foundations/xr/design/accessibility) guidelines are still evolving. XR toolbars should follow applicable Material [toolbar accessibility standards](https://m3.material.io/components/toolbars/accessibility).

### Icons — Overview

Source: https://m3.material.io/styles/icons/overview


- Get Material Symbols icons at [fonts.google.com/icons](https://fonts.google.com/icons). Recolor, resize, and copy and paste icons.
- Use the Material Symbols variable font to enable dynamic styling in product
- You can change the weight, fill, optical size, and grade of variable font icons

#### Resources

| Type | Link | Status |
| --- | --- | --- |
| Design | [Icons catalog](https://fonts.google.com/icons) | Available |
| [Material Symbols Figma plugin](http://goo.gle/material-symbols-figma) | Available |
| [Icon keyline template (ZIP)](https://storage.googleapis.com/material-io-design/downloads/gm_icon_template.ai.zip) | Available |

#### What's new

##### Copy & paste customized Material Symbols

You can now copy and paste icons from [Google Fonts](http://fonts.google.com/icons). Once you search for and select the desired icon, options will appear in the right-hand panel to resize, recolor, and copy the customized icon to clipboard.

(fig) Icons can now be copied with a single click

##### Material Symbols

The new variable icon font set supports three styles: **outlined**, **rounded**, and **sharp**. All Material Symbols are newly drawn to be pixel-crisp and modernized.

(fig) 1. Outlined
2. Rounded
3. Sharp

##### Adjustable axes

Material Symbols have four adjustable stylistic variable font attributes called **axes**. An axis refers to an attribute of a symbol that can be altered to create visual variations. The attributes are: weight, fill, optical size, **grade**.

(fig) A range of symbols shown with the same weight, fill, grade, and optical sizes

##### Material Symbols Figma plugin

Easily [incorporate Material Symbols](http://goo.gle/material-symbols-figma) into your latest designs on Figma.

(fig) Figma Symbols plugin

### Icons — Designing icons

Source: https://m3.material.io/styles/icons/designing-icons


#### Design principles

Icons are an essential element of any interface, packing an informative punch into a small form factor. They’re designed to be simple, modern, friendly, and sometimes quirky. To ensure consistency and readability, their limited size means that each icon must strictly adhere to guidance while still expressing essential characteristics.

**[DO]** (fig) Simplify icons for greater clarity and legibility

**[DON'T]** (fig) Don’t be overly literal. Avoid complex icons.

**[DO]** (fig) Make icons graphic and bold

**[DON'T]** (fig) Don’t use delicate or loose organic shapes

**[DO]** (fig) Use and maintain a consistent visual style throughout one icon set

**[DON'T]** (fig) Avoid mixing styles for one icon set

#### Icon sizes and layout

##### Standard (Baseline) icon size

Standard icons are displayed as 24dp x 24dp. For pixel-perfect accuracy, create icons for viewing at 100% scale.

(fig) 24dp grid at 100% scale

(fig) 24dp grid at 1000% scale

##### Additional optical icon sizes

Icons support additional sizes: 20dp, 40dp, and 48dp, with 20dp primarily for desktop, dense layouts, and small scale visuals, and 40dp and 48dp optimized for display or headline type, plus larger screen sizes.

(fig) Supported icon sizes: 20dp, 24dp, 40dp, and 48dp

##### Standard (Baseline) icon layout

Icon content should remain inside of the **live area**, which is the region of an image that is unlikely to be hidden from view (such as an area where sidebars appear upon scrolling).

If additional visual weight is needed, content may extend into the padding between the live area and the **trim area** (the complete size of a graphic). No parts of the icon should extend outside of the trim area.

(fig) **Live area**

Icon content is limited to the 20dp x 20dp live area, with 2dp of padding around the perimeter

(fig) **Padding**

2dp of padding surrounds the live area

**[DO]** (fig) Icon content is limited to the 20dp-x-20dp live area, with 2dp of padding around the perimeter

**[CAUTION]** (fig) If additional visual weight is needed, content may extend into the padding between the live area and the trim area

**[DON'T]** (fig) No parts of the icon should extend outside of the trim area

#### Grid and keyline shapes

##### Icon design template

If your design requires an icon that isn’t covered by the over 2,000 variations in [Google Font’s icon library](https://fonts.google.com/icons), you may want to create your own. [Download this 24dp keyline template](https://storage.googleapis.com/material-io-design/downloads/gm_icon_template.ai.zip)\* (ZIP file) to design custom icons in Adobe Illustrator.

*\*This template is available under* [*Apache 2.0*](https://www.apache.org/licenses/LICENSE-2.0.html)*. By downloading this file, you agree to the* [*Google Terms of Service*](https://policies.google.com/terms)*. The* [*Google Privacy Policy*](https://policies.google.com/privacy) *describes how data is handled in this service.*

##### Icon grid and keyline

The icon grid establishes clear rules for the consistent, but flexible, positioning of graphic elements.

Keyline shapes are the foundation of the grid. By using these core shapes as guidelines, you can maintain consistent visual proportions across system icons.

(fig) Grid

(fig) 24dp grid at 1000% scale

(fig) Square height and width, 18dp

(fig) Icon drawn using square keyline

(fig) Circle diameter, 20dp

(fig) Icon drawn using circle keyline

(fig) Vertical rectangle height, 20dp, and width, 16dp

(fig) Icon drawn using vertical rectangle keyline

(fig) Horizontal rectangle height, 16dp, and width, 20dp

(fig) Icon drawn using horizontal rectangle keyline

**[DO]** (fig) Position icons “on pixel” within the icon grid

**[DON'T]** (fig) Don’t place the icon on a coordinate that isn’t “on pixel”

#### Icon metrics

##### Anatomy

(fig) 1. Corner
2. Stroke terminal
3. Counter stroke
4. Stroke
5. Counter area
6. Bounding area

##### Corners

Corner radii are 2dp by default. For the outlined style symbols, interior corners are square, not rounded. For shapes 2dp wide or less, stroke corners shouldn’t be rounded.

For the rounded style symbols, both exterior and interior corner radii are rounded and for the sharp style symbols, both exterior and interior corners radii reduce from 2dp to 0dp.

(fig) Exterior corners with 2dp corner radii

(fig) Interior corners shouldn’t be rounded

**[CAUTION]** (fig) Overly round corners reduces the symbol’s legibility

**[DON'T]** (fig) Don’t use inconsistent corner radii

##### Weight and stroke

The recommended stroke weight for icons is 2dp or the regular weight (400), which includes curves, angles, and both interior and exterior strokes. Material Symbols can provide a range of weights between thin (100) and bold (700).

(fig) Timer icon at the regular stroke weight (400)

(fig) Timer symbol shown across a 100–700 weight range

(fig) Stroke terminal on an icon

(fig) Counter stroke on an icon

(fig) Use consistent stroke weights and squared stroke terminals

(fig) Don’t use inconsistent stroke weights or rounded stroke terminals

##### Complex icon shapes

If an icon requires complex details, subtle adjustments can be made to improve its legibility. These adjustments are referred to as optical corrections. Any optical correction should use the geometric forms on which all other icons are based, without skewing or distorting those shapes.

(fig) The paperclip icon uses 1.5dp of the possible 2dp stroke area to fit multiple curves within the 24dp x 24dp icon space

(fig) The ramen bowl icon uses 1.5dp stroke and 2dp stroke together within the 24 x 24dp icon space

**[DO]** (fig) Make icons face forward

**[DON'T]** (fig) Don’t tilt, rotate, or make icons appear dimensional

### Icons — Applying icons

Source: https://m3.material.io/styles/icons/applying-icons


#### Icon & Material Symbol styles

Material Symbols are the new default, and are available in three styles: **outlined, rounded,**and**sharp**. (The legacy Material Icons continue to be available, but don’t have the variable font capabilities of Material Symbols.)

##### Outlined style

Outlined symbols use stroke and fill attributes for a light, clean style that works well in dense UIs. The stroke weight of outlined icons can be adjusted to complement or contrast the weight of your typography.

(fig) Outlined style

(fig) 2dp outlined icons remain readable across sizes and applications

(fig) For optimal legibility and recognition, some symbols should remain filled, such as full body human icons or proprietary icons

(fig) The lighter stroke weight of these outlined symbols mirrors the thin lines of the app’s typography

##### Rounded and sharp styles

Rounded symbols use a corner radius that pairs well with brands that use heavier typography, curved logos, or circular elements to express their style.

Sharp symbols display corners with straight edges, for a crisp style that remains legible even at smaller scales. These rectangular shapes can support brand styles that aren’t well-reflected by rounded shapes.

(fig) Rounded-style icons

(fig) Sharp-style icons

(fig) Corner radii for round icons

(fig) Square corner radii for sharp icons

(fig) This app uses rounded buttons and round icons

(fig) The 0dp corner radius of the sharp icon set echoes this app’s rectangular design details

#### Customizing Symbols

Material Symbols have four adjustable stylistic variable font attributes called **axes**. An axis is a typographic term referring to the attribute of a symbol that can be altered to create visual variations.

Each style symbol contains four axes: **weight, fill, grade,** and **optical size**.

##### Weight

Weight defines the symbol’s stroke weight, with a range of weights between thin (100) and bold (700). Weight can also affect the overall size of the symbol.

(fig) A symbol in a range of weights

(fig) 400 regular-weight symbols

**[DON'T]** (fig) Don't use the lightest weight for standard-size (24dp) icons. The minimum weight for this size should be 200.

**[CAUTION]** (fig) Be careful using excessive weight for standard 24dp symbols

**[DO]** (fig) Apply weights consistently

**[DON'T]** (fig) Don’t mix different weights

##### Fill

Fill gives you the ability to transition from a more outlined style to a reversed or more filled style.

A fill attribute can be used to convey a state of transition, such as unfilled and filled states. Values range from 0 to 1, with 1 being completely filled. Along with weight, fill is a primary attribute that impacts the overall look of a symbol.

(fig) Unfilled symbols with fill set to 0

(fig) Filled symbols with fill set to 1

(fig) Bottom navigation with filled symbols in selected and unselected states

##### Grade

Weight and grade affect a symbol’s thickness. Adjustments to grade are more granular than adjustments to weight and have a smaller impact on the size of the symbol.

Grade is also available in some text fonts. Grade levels between text and symbols can be matched for a harmonious visual effect. For example, if the text font has a -25 grade value, the symbols can match it with a suitable value of -25.

(fig) 1. At grade 0, the thickness of the symbol does not change
2. At negative grade, the thickness of the symbol appears lighter

Grade can also compensate for**visual bleed**, which is when images can look bigger or smaller depending on the color contrast. To match the apparent icon size, the default grade for a dark icon on a light background is 0, and -25 for a light icon on a dark background.

(fig) Icon button featuring a 0 default grade symbol in light UI

(fig) Icon button featuring a negative grade symbol in dark UI

To make strokes heavier and more emphasized, use positive value grade, such as when representing an active icon state.

(fig) An icon with active state using positive value grade for emphasis

##### Optical sizes

Optical sizes range from 20dp to 48dp.

For the image to look the same at different sizes, the stroke weight (thickness) changes as the icon size scales. Optical size offers a way to automatically adjust the stroke weight when you increase or decrease the symbol size.

(fig) Four optical sizes, 20dp, 24dp, 40dp, 48dp

Traditionally, icons are resized from a 24dp source vector, resulting in a large scaled icon that’s too heavy compared to the original. With the optical size axis, you can maintain the stroke weight (thickness) as the icon size grows.

(fig) 1. Material icon
2. Material Symbol

(fig) Use 20dp optical size value for dense layouts on desktop

(fig) Use larger size 40dp–48dp symbols when primary actions need to be highlighted

#### Using Material Symbols with typography

Material Symbols are designed with similar considerations to typefaces, and often appear alongside text. Choosing the right icon set can tie the content of an interface together, enhancing the cohesive branded feel of your product.

(fig) Match the optical weight and size of text and icon to ensure consistency

**[DO]** (fig) Use the same size for your Material Symbols and text

**[DON'T]** (fig) Don’t mix the sizes of your symbol and text

**[DO]** (fig) Use the same optical weight for your symbol and text

**[DON'T]** (fig) Don’t use different optical weights for Material Symbols and text

**[DO]** (fig) Shift down the baseline of symbols to approximately 11.5% of the text size

**[DON'T]** (fig) Don’t use the same baseline for Material Symbols and text

#### Accessibility

Learn more about making your icons more accessible.

##### Icons with a label text

Label text provides short, meaningful descriptions when symbols are more abstract. This can prove helpful in the case of navigation.

(fig) Label text provides short descriptions, especially useful for navigation

(fig) Use caution if icons are displayed without labels. Icon meaning should always be unambiguous and accessible for all users. Text labels can be omitted in specific circumstances where reduced visual impact is necessary.

##### Small icons

Material Symbols can scale up or down in size without a loss of fidelity. Simple symbols, like stars for ratings, can be used on their own at any size, as long as they remain identifiable.  
  
Other symbols should have an accompanying text label below 20dp to ensure their meaning is clear and to maintain accessibility. These symbols include:

- Complex icons, which are highly detailed or have multiple parts
- Icons with a key action, which are essential to using the product

##### Target size

Adequate space should surround icons to allow legibility and interaction.

Symbols of 24dp should have a target size of 48dp by default.

(fig) 1. Measurements
2. Placement

When a mouse and keyboard are the primary input methods, measurements may be condensed to accommodate denser layouts.

A 20dp size symbol can use a target size of 40dp.

(fig) 1. Measurements
2. Placement

#### Localizing icons

To make sure iconography translates effectively in local markets, test it across age groups, cultures, and languages, and follow these best practices:

- Use labels when icons and symbols are more abstract
- Remember that navigation items must have labels for clarity and accessibility
- Consider tech knowledge: people who use the internet a lot may have different understandings of icons than people who use the internet less

(fig) Translate icons for local markets. For example, different locales may prefer a cart, bag, or basket for checkout experiences.

##### Cultural influence of colors and symbols

Color carries cultural significance and can convey different emotions in different cultures. White is commonly associated with purity in western cultures but symbolizes mourning in some eastern cultures.  
  
Consider cultural interpretations of symbols. In many western cultures, owls represent wisdom, while some eastern cultures view them as a negative omen. When using or creating symbols, be mindful that their meanings can vary significantly across cultures.

(fig) Think about how color translates. Some locales use red as a warning color, while others use green.

### Spacing — Overview

Source: https://m3.material.io/styles/spacing/overview


- Apply spacing tokens to the margins, padding, and gaps of a component, UI element, or layout
- Adapt spacing to different values based on context, like mobile vs desktop, or density settings
- The spacing system is measured on an 8dp scale, where **space100 = 8dp**
- Spacing is applied to the flow of elements (horizontal, vertical), or in relation to the elements (leading, trailing, top, bottom, gap)
- [More details on grid & spacing design principles](https://m3.material.io/foundations/layout/grids-spacing)

(fig) Spacing should adapt to component size, layout, form factor, and other contexts

#### Availability & resources

| Type | Resource | Status |
| --- | --- | --- |
| Implementation | Android Views (MDC-Android) | Unavailable |
| Jetpack Compose | Available |
| Web | Unavailable |

#### Spacing units

Spacing units follow an 8dp scale. Rather than defining every value, Material only defines the most recommended spacing unit values on the scale. The system can be extended to add more spacing units and patterns as needed. [More on spacing tokens](https://m3.material.io/styles/spacing/tokens)

(fig) Spacing units are are created as a multiplier from the baseline unit of 8dp, which is space100

##### Component layouts

In **components**, spacing units define the padding and gaps between individual elements of a component, such as text, icons, and controls.

(fig) Spacing concepts for components:

1. Vertical padding (top & bottom)
2. Vertical gap
3. Horizontal padding (leading & trailing)
4. Horizontal gap

##### Page layouts

In **layouts**, spacing units standardize the overall composition of the page, like where text, UI elements, and components go.   
  
Layouts use:

- Panes, spacers, and margins to structure the page
- Padding and gaps to organize content within the panes.

(fig) Spacing concepts for layouts:

1. Margin
2. Top padding
3. Horizontal padding (leading & trailing)
4. Spacer (gap)
5. Vertical gap

#### Parts of spacing

Spacing has three categories: **padding**, **gaps**, and **margins**.

- Padding: Space inside an element
- Gap: Space between elements in a grid or container
- Margins: Space outside an element

The position of the spacing can be **vertical**, **top**, **bottom**, **horizontal**, **leading**, or **trailing**.

- **Leading** and **trailing** edges swap sides in right-to-left (RTL) languages. [More on RTL layout design](https://m3.material.io/foundations/layout/bidirectionality-rtl)

For example, the [search](https://m3.material.io/components/search/specs) container has:

- 8dp vertical padding
- 8dp horizontal gaps
- 24dp horizontal margins (12dp when focused)

(fig) Search horizontal margins are 24dp by default to ensure accurate placement from the screen edge

(fig) Search margins change to 12dp when focused, while the container padding and horizontal gaps remain the same

##### Padding

Padding is the spacing inside an element. It adds a buffer from the container edge to the content, like text and icons.

(fig) Padding can be horizontal or vertical, or on a specific edge: leading, trailing, top, or bottom

##### Gaps

Gaps are the spaces between elements in a grid or container. Horizontal gaps are between side-by-side elements, and vertical gaps are between stacked elements.

Use a **horizontal gap** and **vertical gap** for simple components where gaps are always the same size.

Complex components with many different gaps should define them by the elements on each side, like an **icon-label gap.**

(fig) Gaps can be horizontal, vertical, or defined by the elements around it

##### Margins

Margins are the spacing outside an element. They add a buffer between the element and the parent container or screen edge.

**Use padding & gaps before using margins:**

- Material rarely uses margins in components; padding and gaps tend to apply spacing in a more uniform way
- Only use margins to apply further spacing beyond the parent container’s padding, or in layouts

(fig) Margins can be horizontal or vertical, or on a specific edge: leading, trailing, top, or bottom

**[DO]** (fig) Define padding and gaps on the parent container to organize all elements inside

**[DON'T]** (fig) Avoid defining margins on child elements as they usually aren’t uniform, and require more tokens

### Spacing — Applying spacing

Source: https://m3.material.io/styles/spacing/applying-spacing


Material’s spacing system is intentionally designed to be a simple linear scale. Unlike the color system, which adjusts light and dark theme logic across all components at once, tailored spacing logic is built within each component.

(fig) Components have padding tokens that map to system tokens, which resolve to final values

#### What to use

##### Pre-tokenized components

Some Material components map to spacing system tokens out of the box. This mapping can be customized by products to adapt to form factor or density.

Note: Work is ongoing to hook up all Material components to spacing tokens.

##### System tokens

Spacing system tokens define the recommended values. Apply these to your product’s custom components and layouts, replacing any hardcoded values.

If the right system token doesn’t exist, [customize the system](https://m3.material.io/styles/spacing/applying-spacing#f1a6df59-f03d-4949-b1e6-d2dd4422c730) and add your own.

(fig) Many Material components map to spacing system tokens

(fig) System tokens define all spacing values recommended by Material

##### Spacing complements text scaling

When text is scaled up to 200%, the same spacing should be preserved by default.

(fig) Keep the same spacing when text scales

#### Customizing the system

The spacing system is meant to capture Material’s design intent, but customization is expected and often necessary. How you customize the system depends on your needs:

##### Customize Material’s existing component spacing

Use this approach to customize how the base component appears across the entire product.

- For example, change the “button top padding” mapping from **space125** to **space200** for a taller default button.

(fig) Customize component spacing to change it across the entire product

##### Add custom system spacing & patterns

Use this approach when you need spacing units beyond what Material provides, or have common adaptive spacing patterns in your product.

- Follow the multiplier pattern for new space tokens, so **space225 = 18dp** (8dp x 2.25).
- Spacing patterns unique to your product can be tokenized.

- For example, if cards and sheets adapt horizontal content padding the same way, you could create a **surface content horizontal padding** token for that pattern.

(fig) For products that adapt spacing the exact same way, consider creating a token for that pattern

##### Add adaptive layout & density

Use this approach when you want the same core component, but want it to appear differently in specific situations, like screen sizes and density settings.

- Adaptive layout: Map the spacing to different system tokens for each device type, such as mobile or desktop
- Density: Adapt vertical padding to different spacing values for each setting

(fig) Components can be customized to adapt spacing to each form factor

(fig) Components can be customized to adapt spacing to density settings

### Spacing — Tokens

Source: https://m3.material.io/styles/spacing/tokens


star

Note:

The spacing system tokens are only used on Jetpack Compose.

#### System spacing tokens

_[Interactive MEASUREMENT module: resource `designSystems/20543ce18892f7d9`; token sets: Spacing. Resolved values are in the tokens/ folder of this guide.]_

System spacing tokens are a linear range of spacing values recommended by Material. They’re intended to cover the majority of spacing needs within the design system. The base unit of measurement **md.sys.measurement.space100** is **8dp**. [Learn more about design tokens](https://m3.material.io/foundations/design-tokens/overview)

(fig) The main spacing units are multiples of 8dp

##### Nested units

Values other than multiples of 8 are also used in layouts and Material components, like 2dp, 4dp, 6dp, and 10dp. Material only defines the most recommended nested units.

(fig) Material only defines nested units that are actively used in common layouts or Material components

#### Component spacing

Most Material component spacing attributes will map to system spacing tokens. Spacing logic, like adaptive design or density, should be applied to the component attribute.

Component attributes follow a new naming strategy:

- Going forward, all component spacing attributes will use **padding**, **margin**, and **gap**, and positional language: **horizontal**, **vertical**, **leading**, **trailing**, **top**, and **bottom**

- Example: “Medium button: leading padding”

- Past component spacing tokens use “**space**” to describe all padding, gaps, and margins, like **leading-space**, **trailing-space**, **top-space**, **bottom-space**, and **between-space**.

- Example: “Medium button: leading space”

### Elevation — Overview

Source: https://m3.material.io/styles/elevation/overview


- Elevation is applied to all surfaces and components
- Tokens codify the distance on the z-axis to ensure components appear consistently relative to each other
- Tokens have no shadows or color; each platform determines the specific shadows and values to use at each elevation level
- Elevation can be shown as tonal surface colors or shadows
- Avoid changing the default elevation of Material 3 components
- Stick to using a small amount of elevation levels

Elevation is measured as the distance between components along the z-axis in density-independent pixels (dps).

(fig) Elevation represents the distance between elements. The product applies color to represent elevation.

1. One surface at 1dp elevation and another surface at 8dp elevation, as viewed from the front
2. The difference in elevation between the two surfaces is 7dp, as viewed from the side

#### Availability & resources

|  | Resource | Status |
| --- | --- | --- |
| Design | [Design Kit (Figma)](https://www.figma.com/community/file/1035203688168086460) | Available |
| Implementation | [Flutter](https://api.flutter.dev/flutter/material/ElevationOverlay-class.html) | Available |
|  | [Jetpack Compose](https://developer.android.com/develop/ui/compose/designsystems/material3?_gl=1*zh4ff1*_up*MQ..*_ga*MTQ4NTEwOTIzLjE3NDA0MDY2Njk.*_ga_6HH9YJMN9M*MTc0MDQwNjY2OC4xLjAuMTc0MDQwNjY2OC4wLjAuNjU3NTAyNDY.#elevation) | Available |
|  | [MDC - Android](https://github.com/material-components/material-components-android/blob/d56070586102b66486f7f8697de077c3d7689922/docs/theming/Color.md#using-surface-colors) | Available |
|  | [MWC - Web](https://github.com/material-components/material-web/blob/919fe12badcfee4dcd72c390c0869dd8f996b51c/docs/components/elevation.md) | Available |

#### Differences from M2

- Shadows: Instead of applying shadows by default to all levels, use shadows only when required to create additional protection against a background or to encourage interaction
- Color: New color mappings and compatibility with dynamic color
- Levels: Elevation is now described in terms of levels

(fig) M2: Shadows applied at all levels

(fig) M3: Using color instead of shadows to communicate elevation

#### All surfaces and components have elevation values

Surfaces at different elevations do the following:

1. Allow surfaces to move in front of and behind other surfaces, such as content scrolling behind app bars
2. Reflect spatial relationships, such as how a FAB's shadow indicates it's separate from a card collection
3. Focus attention on the highest elevation, such as a dialog temporarily appearing in front of other surfaces

(fig) Elevation can be depicted using shadows or other visual cues, such as surface fills with a tone difference

##### Resting elevation (default)

All components have a default resting elevation. Avoid changing the default elevation of Material components.

(fig) All components have a default elevation which should be used

##### Changing elevation

Components should change elevation in response to system events or user interaction, like hovering. This elevation change should be consistent across all similar elements.

For example, hovering a FAB temporarily increases the elevation by 1 level, from level 3 to level 4. All Material buttons increase elevation by 1 level when hovered.

(fig) Hovering over a button increases its elevation to show user interaction

### Elevation — Applying elevation

Source: https://m3.material.io/styles/elevation/applying-elevation


Material 3’s elevation system is deliberately limited to just a handful of levels. This creative constraint means you need to make thoughtful decisions about your UI’s elevation story.

(fig) Material uses six levels of elevation, each with a corresponding dp value. These values are named for their relative distance above the UI’s surface: 0, +1, +2, +3, +4, and +5. An element’s resting state can be on levels 0 to +3, while levels +4 and +5 are reserved for user-interacted states such as hover and dragged.

#### Depicting elevation

Elevation can be depicted using shadows or other visual cues, such as surface fills with a tone difference or scrims.

To successfully depict elevation, a surface must show:

- Surface edges, contrasting the surface from its surroundings
- Overlap with other surfaces, either at rest or in motion
- Distance from other surfaces

(fig) 1. Two overlapping surfaces with distinct tonal values
2. Two overlapping surfaces with the same tonal values separated via shadow
3. Two overlapping surfaces with the same tonal values separated via scrim

##### Tonal difference

Tonal difference between surfaces helps to express the tactile quality of Material surfaces. They show where one surface ends and another begins by separating different parts of a UI into identifiable components. For example, the edges of an app bar show that it's separate from a grid list, communicating to the user that the grid list scrolls independently of the app bar.

By default, Material 3's surfaces use tonal difference to indicate separation. Other methods can be used to indicate edges, such as:

- Giving surfaces a drop shadow
- Placing a scrim behind a surface

(fig) 1. A FAB's elevation helps separate it from body content
2. A scrim appears below a modal to communicate importance
3. Tonal differences between a navigation bar and body content indicate separate surfaces

For interactive components, edges must create sufficient contrast between surfaces (by meeting or exceeding accessible contrast ratios) for them to be seen as separate from one another.

**[DO]** (fig) Ensure floating elements have sufficient contrast with surfaces beneath

**[DON'T]** (fig) Don't use colors with insufficient contrast. The relationship between surfaces must be clear.

##### Surface color roles & elevation

You can pick from a range of surface and surface container color roles. These roles are not tied to elevation, and provide flexibility for defining containment areas.  
  
Any overlapping containment areas or components should have different color roles in order to visually communicate separation.  
  
[More on surface color roles](https://m3.material.io/styles/color/roles/tab-1#89f972b1-e372-494c-aabc-69aea34ed591)

(fig) 1. Surface
2. Surface container

#### Shadows

Shadows can express the degree of elevation between surfaces in ways that other techniques can't.

Both a shadow’s size and amount of softness or diffusion express the degree of distance between two surfaces. For example, a surface with a shadow that's small and sharp indicates a surface’s close proximity to the surface behind it. Larger, softer shadows express more distance.

(fig) Smaller, sharper shadows indicate a surface’s close proximity to the surface behind it

(fig) Larger, softer shadows express more distance between a surface and the one behind it

When it comes to applying shadows, less is more. The fewer levels in your UI, the more power they have to direct attention and action.

##### When to use visible shadows

###### **Protect elements**

When a background is patterned or visually busy, the hairline style might not provide sufficient protection. In these cases, use elevation to separate and emphasize elements such as cards, chips, or buttons.

(fig) Interactive elements are emphasized with elevation

###### **Encourage interaction**

Elements can temporarily lift on focus, selection, or another kind of interaction, like swipe. A raised element can also lower when a higher element appears.

(fig) Elevation encourages interaction

#### Scrims

A scrim can bring focus to specific elements by increasing the visual contrast of a large layered surface. Use the scrim beneath elements like modals and expanded navigation menus.

Scrims use the scrim color role at an opacity of 32%.

(fig) Scrims help bring focus to important elements like the navigation rail

### Elevation — Tokens

Source: https://m3.material.io/styles/elevation/tokens


#### Tokens

Elevation levels can be implemented with tokens. Surface tint color is deprecated. Use elevation level tokens (0–5) instead. [Learn more about design tokens](https://m3.material.io/foundations/design-tokens/overview)

_[Interactive ELEVATION module: resource `designSystems/20543ce18892f7d9`; token sets: (all). Resolved values are in the tokens/ folder of this guide.]_

#### Component elevation

Most components have a default elevation. Component elevation is only used to determine where the component sits in relation to other components, including when hovered or focused (which usually raises elevation by one level). Elevation has no shadow or value of its own by default.

| Resting level | Component | DP Height |
| --- | --- | --- |
| 5 | (not assigned as resting level) | 12dp |
| 4 | (not assigned as resting level) | 8dp |
| 3 | Date pickers  Dialogs (modal)  Extended FAB  FAB  FAB menu (close button)  Search  Time pickers | 6dp |
| 2 | App bar (scrolled)  Menu  Navigation bar  Rich tooltip  Toolbar | 3dp |
| 1 | Banner  Bottom sheet (modal)  Button (elevated)  Card (elevated)  Chips (elevated)  Navigation drawer (modal)  Side sheet (modal) | 1dp |
| 0 | App bar (not scrolled)  Buttons (filled, tonal, outlined)  Button groups  Cards (filled, outlined)  Carousel  Chips  Dialog (full-screen)  Extended FAB (in navigation rail)  FAB (in navigation rail)  FAB menu (list items)  Icon buttons  List  Navigation rail  Segmented button  Side sheet (docked)  Slider  Split button  Tabs | 0dp |

