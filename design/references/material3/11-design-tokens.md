# 11 — Design tokens: model, roles, inheritance, theming & implementation

Primary sources: https://m3.material.io/foundations/design-tokens/overview · https://m3.material.io/foundations/design-tokens/how-to-use-tokens · https://m3.material.io/foundations/customization
Token data: the site's own token database ("Google Material 3", DSDB v38.2.9, published 2026-08-10), the same data behind the interactive token modules on every Specs and token page. Resolved tables are in [tokens/](tokens/components-index.md). Accessed 2026-10-09.

## Essentials

### What a token is (design-tokens/overview)
- "Design tokens are small, reusable design decisions that make up a design system's visual style. Tokens replace static values with self-explanatory names."
- A token is "a code-like name, such as **md.ref.palette.secondary90**" plus "an associated value, such as **#E8DEF8**". "The token's value can be one of several things: A color, typeface, measurement, or even another token."
- "Use design tokens instead of hardcoded values." "Even if a token's end value is changed, its name and use remain the same."
- Why: a "single source of truth"; "style updates propagate consistently through an entire product or suite of products"; designers and engineers "speak the same language".
- **Most helpful if** you're redesigning or building from scratch, your system spans a suite of products or platforms, you want easy future style maintenance, or you want "features like dynamic color". **Less helpful if** you have "an existing app using hard-coded values that is unlikely to change in the next year or two" or "your product does not have a design system".

### Token names
- Parts separated by periods, "from the most general information ("md") to the most specific": (1) system name (`md`), (2) class abbreviation (`ref`, `sys`, `comp`), (3) descriptive words for the token's role. Example: `md.comp.fab.primary.container.color` "sets the container color for a FAB".

### Three classes (design-tokens/overview)
| Class | Prefix | What the site says |
|---|---|---|
| **Reference** | `md.ref.*` | "All available tokens with associated values." "They usually point to a static value… but can also point to other reference tokens. Reference tokens don't change based on context." |
| **System** | `md.sys.*` | "Decisions and roles that give the design system its character, from color and typography, to elevation and shape." "System tokens define the purpose a reference token serves in the UI. **This is where theming occurs.** The system token can point to different reference tokens depending on the context, such as a light or dark theme." "Whenever possible, system tokens should point to reference tokens rather than static values." |
| **Component** *(labeled "in development" on the site)* | `md.comp.*` | "The design properties assigned to elements in a component, such as the color of a button icon." "Whenever possible, component tokens should point to a system or reference token, and not contain hardcoded values such as hex codes." "Not every stylistic choice of a component will be able to be expressed as a token, but whenever a design choice applies to multiple components of similar intent, a token should be used." |

"With three classes of tokens, teams can update design decisions globally or apply a change to a single component."

### Semantic roles (system tokens) and where they're documented
System tokens are Material's semantic roles. Each family's rules live in its own file. Values are in `tokens/`:
| Role family | Token prefix | Rules | Resolved values |
|---|---|---|---|
| Color roles (primary, on-primary, containers, surfaces, fixed, inverse, outline…) | `md.sys.color.*` | [03-color.md](03-color.md) | [tokens/system-color.md](tokens/system-color.md) (50 roles × light/dark × 3 contrast levels), [tokens/ref-palette.md](tokens/ref-palette.md) |
| Type scale (baseline + emphasized) | `md.sys.typescale.*` | [04-typography.md](04-typography.md) | [tokens/system-typography.md](tokens/system-typography.md) |
| Shape (corner scale) | `md.sys.shape.*` | [05-shape.md](05-shape.md) | [tokens/system-shape.md](tokens/system-shape.md) |
| Motion (springs; legacy easing & duration) | `md.sys.motion.*` | [06-motion.md](06-motion.md) | [tokens/system-motion.md](tokens/system-motion.md) (standard and expressive scheme columns) |
| Elevation levels | `md.sys.elevation.*` | [02-foundations.md](02-foundations.md) | [tokens/system-elevation.md](tokens/system-elevation.md) |
| Spacing | `md.sys.measurement.*` | [02-foundations.md](02-foundations.md) | [tokens/system-spacing.md](tokens/system-spacing.md) |
| State layers & focus indicator | `md.sys.state.*` | [10-patterns-interaction.md](10-patterns-interaction.md) | [tokens/system-state.md](tokens/system-state.md) |
| Component tokens | `md.comp.*` | each [09-components](09-components/00-index.md) file §3 | [tokens/components-index.md](tokens/components-index.md) (168 sets; 23 marked [Deprecated]) |

### Inheritance (reference ← system ← component)
The token modules "show the relationship between a role, its system token, reference token, and stored pre-set value". A chain from the site's data (baseline, light theme):

`md.comp.button.filled.label-text.color` → `md.sys.color.on-primary` → `md.ref.palette.primary100` → **#FFFFFF** (dark theme resolves to **#381E72**). Source: [tokens/components/button.filled.md](tokens/components/button.filled.md).

Where a value is an alias, this guide's `tokens/` tables show the chain: the "Light reference" column in system-color.md, and `sys → ref` in the component tables. To restyle all components, change system or reference tokens. To change one component, change its component token.

### Contexts (theming conditions)
- "Tokens can point to different values depending on a set of conditions. These conditions are called contexts and their resulting values are called contextual values." Examples given: "device form factors, dark theme, dense layouts, and right-to-left writing systems." "If a token value is tagged with dark theme then it will override the default token value in a dark theme context."
- Context groups present in the site's token data: Theme (light/dark), Contrast (default/medium/high), Platform (Android, iOS, Web, Compose), Audience (1P baseline / 3P), Motion scheme (standard/expressive), Font (static/variable), Language height, and two iOS-specific settings (weight; dark-theme elevation).
- **How this guide resolved values (web and native side by side):** the main columns use Platform = **Web**, Audience = 3P, and each other group's default tag (Contrast = default, Font = static, Motion = standard), plus columns for dark, medium/high contrast and the expressive motion scheme.
- **What actually differs for Web in the data:** only **31 tokens** carry a Platform=Web value.
  - `md.sys.motion.easing.emphasized` resolves to `md.sys.motion.easing.standard` (cubic-bezier(0.2, 0, 0, 1)) instead of the path-based Emphasized curve. This matches the easing table's CSS entry "N/A (Use Standard as a fallback)".
  - The 30 variable-font optical-size tokens (`md.sys.typescale.variable.*.opsz`) are **undefined for Web**.
  - Every other value (colors, type sizes, shapes, elevation, spacing, state, component tokens) is a platform-untagged default, identical for Web and Android. The motion and typography tables also have an "Android default platform" column, so native values sit next to web values.
- **iOS:** 339 values are iOS-tagged, and they aren't used here. The data has **no combined "iOS and web" tag**, so no "iOS-and-web" values exist to apply.
- Other contexts (1P audience, language height, iOS settings, Compose) exist in the data but aren't tabulated (see [16-coverage-audit.md](16-coverage-audit.md)).
- **Units:** values are stored as dp (lengths) and pt/sp-style sizes. The site's web conversion is documented only for type (sp → rem, "SP_SIZE/16 = rem") and for target sizes ("48x48 CSS pixels"). See [MATERIAL_3_AGENT_INSTRUCTIONS.md](MATERIAL_3_AGENT_INSTRUCTIONS.md) §15.2.
- **Web token surfaces:** (repo) Material Web Components expose system tokens as CSS custom properties (`--md-sys-color-*`, `--md-sys-typescale-*`, `--md-ref-typeface-*`, `--md-sys-shape-corner-*`). The site lists spacing tokens as Web "Unavailable". The site-linked DSP repo (material-foundation/material-tokens) is archived (2023). Details: [13-repositories-implementation.md](13-repositories-implementation.md).

### Reading token modules (design-tokens/overview)
- Component Specs token tables are "first grouped by **state** (enabled, disabled, hover, etc) and then by **element**". Columns: Name, Token ID, Description, Context/value.
- The site's example: to verify a filled button's label text color, find the filled-button token module on the Specs tab and look up the "label text" tokens. Then "Copy the color token and paste it in code, or compare it to the color role in Figma."

### Theming & customization (foundations/customization)
- To use personalization, "build a custom color scheme with the M3 color system" and "implement a custom theme that user-generated color schemes can map to". A custom theme also "ensures that your app has a fallback color scheme available for users who don't enable dynamic color".
- "Dynamic color is both a user setting and a developer choice. You can apply dynamic color selectively to work alongside your brand color scheme." "Dynamic color also works for custom (non-Material) components."
- "Your existing brand parameters can be integrated with Material Design… You can also start from scratch."
- Five key color groups: Primary, Secondary, Tertiary, Neutral, Neutral Variant. "An input color generates a tonal palette that's used to fill the range of color roles needed, such as primary, on-primary, and primary container." Brand colors can be added "as a single-use color or as a complete brand palette".
- The Material Theme Builder Figma plugin "creates **color and type tokens** that can be exported into multiple code formats".
- Color-specific theming rules (dynamic sources, static/custom brand schemes, contrast levels, advanced customization): [03-color.md](03-color.md).

### Implementation relationships (design-tokens/how-to-use-tokens, customization)
- **Baseline tokens:** "Download the theme as a Design System Package (DSP)" from https://github.com/material-foundation/material-tokens. A DSP is "a cross-platform file format that represents design system information".
- **Figma:** Material Theme Builder plugin. **Generate** (creates `material-theme` with baseline values as Figma styles: tonal palettes for light and dark plus a default type scale), **update** (the plugin "updates colors only"; other edits go through Figma styles), **swap** (with Design Kit components selected, swaps baseline token styles for your generated ones), **export** ("Select the format you want to export for (Android, Jetpack Compose)"). This page names no web export format.
- **Code libraries:** per-component availability on Web, Compose, Views and Flutter is in [13-repositories-implementation.md](13-repositories-implementation.md). The site's Develop pages don't describe how each library maps tokens to code; this guide doesn't fill that gap.
- Related tools: [12-tools-assets.md](12-tools-assets.md).


---

## Source pages in scope

| Page | URL | Site content timestamp | Do | Don't | Caution |
|---|---|---|---|---|---|
| Customizing Material | https://m3.material.io/foundations/customization | 2026-07-17T04:59:31.042Z | 0 | 0 | 0 |
| Design tokens — Overview | https://m3.material.io/foundations/design-tokens/overview | 2026-07-17T05:01:46.434Z | 0 | 0 | 0 |
| Design tokens — How to use tokens | https://m3.material.io/foundations/design-tokens/how-to-use-tokens | 2026-07-17T05:01:46.434Z | 0 | 0 | 0 |

## Verbatim rule index (every Do / Don't / Caution caption on the pages above)


## Appendix — verbatim page text (digest: text, tables and figure captions; image-only content represented by captions)

### Customizing Material

Source: https://m3.material.io/foundations/customization


#### Dynamic color makes personal devices feel personal

M3 opens up new possibilities for both brand colors and individual color preferences to converge in one-of-a-kind experiences. The color system embraces the need for color to reflect an app’s design sensibility, while also honoring the settings that individuals choose for themselves.

By enabling dynamic color, an app can retain the colors that define and differentiate a product, while also giving users more control over the styles that matter most to them.

###### Applying a brand color system

With dynamic color and M3 color schemes, your app’s colors automatically adapt and integrate with user settings.

M3 supports systematic applications of custom parameters to help define and maintain the styles that convey your brand.

The color system automatically handles critical adjustments that provide accessible color contrast, legibility, interaction states, and component structure. Dynamic color also works for custom (non-Material) components.

(fig) Apps can take on an array of colors from baseline schemes, user-generated dynamic colors, or custom colors

#### Get started

To take advantage of personalization features, you’ll need to **build a custom color scheme with the M3 color system**.

In order for your app to respect a user's device and app-level settings, **you'll implement a custom theme that user-generated color schemes can map to**.

Additionally, using a custom theme ensures that your app has a fallback color scheme available for users who don't enable dynamic color.

(fig) A user-generated color scheme can flow through apps that use a custom theme

##### Set-up and tutorials

Dynamic color is both a user setting and a developer choice. You can apply dynamic color selectively to work alongside your brand color scheme. For example, a profile or account screen in your app can reflect a user’s color scheme settings, adding individuality to a personal space in an app.

###### Set-up

- Your existing brand parameters can be integrated with Material Design for consistent application across your product
- You can also start from scratch with Material Design and create a new, complete color system for a project

###### Dynamic color tutorial

The [dynamic color codelab](https://goo.gle/visualize-dynamic-color) is a hands-on walkthrough that helps visualize how designs and brand colors interact with dynamic color. It helps take you to the next steps in applying color to your designs using the [Material Theme Builder](https://goo.gle/material-theme-builder-figma) plugin for Figma.

###### Material Theme Builder

With built-in code export, the [Material Theme Builder](https://goo.gle/material-theme-builder-figma) Figma plugin makes it easy to visualize your designs, migrate to the M3 color system, and take advantage of dynamic color.

The Material Theme Builder creates **color and type tokens** that can be exported into multiple code formats. Tokens are an important tool for creating and maintaining a source of truth for style values. The Figma plugin creates tokens in the form of Figma styles to connect with existing mock-ups, brand style guides, and even design systems.

[Material tokens](https://github.com/material-foundation/material-tokens) are ready to use in formatted theme files, including [Design System Package (DSP)](https://github.com/AdobeXD/design-system-package-dsp). A DSP is a cross-platform file format that represents design system information. [Learn more about design tokens](https://m3.material.io/foundations/design-tokens/overview).

(fig) The Material Theme Builder Figma plugin helps you create custom color schemes and export to multiple code formats

#### Custom color schemes

The Material Theme Builder helps create custom color experiences, whether you're working with established brand parameters or have yet to define your app's colors.

In the Material Theme Builder you can identify and input one or more color to define your color scheme. Adding a second or third color is optional and will influence the resulting color scheme.

Mapping your app colors to the custom scheme's source colors aligns the roles and logic of [dynamic color in M3](https://m3.material.io/styles/color/dynamic).

**Brand colors** can be added to the tool as a single-use color or as a complete brand palette with a range of tones that lend consistent, comprehensive color expression across your app.

If your app uses a single brand color or a limited brand palette, you can input your primary brand color as your custom color scheme's source color. The input color will be used to generate a scheme that provides you with complementary tones to round out a scheme.

(fig) Examples of brand attributes (left) that can be used to generate and apply a dynamic color scheme (right)

##### Color roles

Depending on the purpose in a UI, key colors are assigned roles that map to elements in components. The five essential color groups with role assignments are:

- Primary
- Secondary
- Tertiary
- Neutral
- Neutral Variant

An input color generates a tonal palette that's used to fill the range of color roles needed, such as primary, on-primary, and primary container. [Learn more about using color roles](https://m3.material.io/styles/color/roles)

(fig) Examples of color roles in the Plant Care UI mapped to design tokens

### Design tokens — Overview

Source: https://m3.material.io/foundations/design-tokens/overview


- Tokens point to style values like colors, fonts, and measurements
- Use design tokens instead of hardcoded values
- Each token is named for how or where it’s used (for example, **md.comp.fab.primary.container.color** sets the container color for a FAB)
- Even if a token’s end value is changed, its name and use remain the same
- Material Design has three classes of tokens: [reference](https://m3.material.io/foundations/design-tokens/overview#6a0933c0-50f5-4dd6-b055-b7c4ff2c1535), [system](https://m3.material.io/foundations/design-tokens/overview#7f084930-cf5f-4b7e-b83c-614888f18a77), and [component](https://m3.material.io/foundations/design-tokens/overview#b4d6bb35-ee69-4908-bcb4-b33b0a1997e2)

(fig) Using design tokens instead of hardcoded values can streamline the work of building, maintaining, and scaling products with a design system

#### Resources

| Type | Link | Status |
| --- | --- | --- |
| Design | [Design Kit](http://goo.gle/m3-design-kit) (Figma) | Available |
| [Material Theme Builder Figma plugin](https://goo.gle/material-theme-builder-figma) | Available |
| Implementation | [Material baseline theme and tokens](https://github.com/material-foundation/material-tokens) (DSP) | Available |

#### What’s a design token?

Design tokens are small, reusable design decisions that make up a design system's visual style. Tokens replace static values with self-explanatory names.

A design token consists of 2 things:

1. A code-like name, such as **md.ref.palette.secondary90**
2. An associated value, such as **#E8DEF8**

The token's value can be one of several things: A color, typeface, measurement, or even another token.

(fig) Example of a reference token and its color value

Design tokens meaningfully connect style choices that would otherwise lack a clear relationship.

For example, if a designer's mock-ups and an engineer's implementation both reference the same token for the “secondary container color,” then they can be confident that the same color is being used in both places. This applies even if the hex value assigned to that token gets updated.

(fig) Example of tokens assigned to the secondary and on secondary color roles of a FAB’s container and icon, respectively

#### Why are tokens important?

Tokens make it possible for a design system to have a single source of truth – a repository where style choices are recorded and changes can be tracked.  
  
Because tokens are reusable and purpose-driven, they can define system-wide updates to themes and contexts. For example, you can use tokens to systematically apply a high-contrast color palette for improved visibility, or change the typographic scale to ensure that text is legible on a TV screen.  
  
By using tokens for design and implementation, style updates propagate consistently through an entire product or suite of products. They also help designers and engineers "speak the same language,” reducing confusion during handoff from design to implementation.

(fig) As design systems evolve, certain values will change. With design tokens, we can track changes and ensure consistency across our products.

#### Deciding if tokens are right for you

###### **Tokens will be most helpful if:**

- You plan to update the design of your product or are building a product from scratch
- Your design system is applied across a suite of products or platforms
- You want to make it easy to maintain or update styles in the future
- You want to get the most out of the Material Design system, including features like dynamic color

###### **Tokens will be less helpful if:**

- You have an existing app using hard-coded values that is unlikely to change in the next year or two
- Your product does not have a design system

#### Tokens & Material Design

In the past, Material styles were communicated through guidelines, design files, tools, and platform-specific component libraries.  
  
With design tokens, you can now download, customize, and apply Material styles and integrate them across your design and development process.  
  
Tokens allow decisions to be documented in a platform-agnostic and shareable format.

(fig) Design tokens provide a central repository for design choices, with a variety of integration points for engineers and designers

On this site, you’ll see tokens listed in interactive modules.  
  
These modules let you quickly look up the default baseline value stored by tokens for color, font, font size, font weight, etc. They also show the relationship between a role, its system token, reference token, and stored pre-set value.

(fig) Example of a token module

You’ll also see tokens in the specs tabs of component articles.  
  
Tokens are first grouped by **state** (enabled, disabled, hover, etc) and then by **element**, which is the part of the component that a token or value applies to, such as the container or label text.  
  
Columns include:

- **Name**– The component style aspect that the token applies to, such as color or font
- **Token ID** – The token defining the component style aspect
- **Description** – Optional descriptive info
- **Context/value** – The value stored in the token for a given context

(fig) The diagram and token module for elevated button

##### How to use token modules

Let's say you need to verify the color role for a filled button's label text.

Navigate to Common buttons > Specs, find the token module for filled buttons, and search for the "label text" tokens under elements.

Copy the color token and paste it in code, or compare it to the color role in Figma.

(fig) Diagram and token table for filled button label color

#### Parts of a token name

The parts of a token name are separated by periods and proceed from the most general information ("md") to the most specific ("on-secondary").

1. All token names in a design system start with the system name (such as “md” for Material Design)
2. An abbreviation for the token class: “ref” for reference tokens, “sys” for system tokens, and “comp” for component tokens
3. The token ends with descriptive words communicating the token’s role

(fig) 1. Communicates design system
2. Communicates token class
3. Communicates token’s purpose

#### Classes of tokens

There are three classes of tokens in Material:

1. Reference tokens  
   All available tokens with associated values.
2. System tokens  
   Decisions and roles that give the design system its character, from color and typography, to elevation and shape.
3. Component tokens  
   The design properties assigned to elements in a component, such as the color of a button icon.

With three classes of tokens, teams can update design decisions globally or apply a change to a single component.

(fig) A button that receives its container color through a system of three tokens that define scalable color values. The color tokens point to a specific hex value that can easily change without impacting the token syntax.

##### Reference tokens

These tokens make up all of the style options available in a design system.

They usually point to a static value – such as a color hex code or font size – but can also point to other reference tokens. Reference tokens don't change based on context.

By providing a list of options, reference tokens give your team a starting point of approved colors, typography, measurements, etc.

All reference tokens start with the prefix **ref**.

(fig) Color and typography reference tokens and their values

##### System tokens

These are the decisions that systematize the design language for a specific theme or context.

System tokens define the purpose a reference token serves in the UI.

This is where theming occurs. The system token can point to different reference tokens depending on the context, such as a light or dark theme.

Whenever possible, system tokens should point to reference tokens rather than static values.

All system tokens start with the prefix **sys**.

(fig) System tokens, reference tokens, and their values

##### Component tokens (in development)

These represent the elements required to compose a component, such as containers, label text, icons, states, and their values such as size, shape, color, or elevation.

Whenever possible, component tokens should point to a system or reference token, and not contain hardcoded values such as hex codes.

Not every stylistic choice of a component will be able to be expressed as a token, but whenever a design choice applies to multiple components of similar intent, a token should be used.

All component tokens start with the prefix **comp**.

(fig) Component tokens, system tokens, reference tokens, and their values

#### Contexts

Tokens can point to different values depending on a set of conditions. These conditions are called contexts and their resulting values are called contextual values.  
  
Examples of different contexts include: device form factors, dark theme, dense layouts, and right-to-left writing systems.  
  
You can think of a context as a kind of tag. If a token value is tagged with dark theme then it will override the default token value in a dark theme context.

(fig) The same system token for background color can point to different reference tokens depending on the context: Light theme or dark theme

### Design tokens — How to use tokens

Source: https://m3.material.io/foundations/design-tokens/how-to-use-tokens


#### Download Material baseline tokens

Material Design’s baseline theme includes design tokens and default values. [Download the theme](http://github.com/material-foundation/material-tokens) as a Design System Package (DSP) to customize, collaborate on, and use in your own designs and product code.  [Learn about the DSP JSON format](https://github.com/AdobeXD/design-system-package-dsp)

#### Use tokens in Figma

To begin, install the [Material Theme Builder](https://goo.gle/material-theme-builder-figma) Figma plugin from the community page.

##### Generate tokens

1. Open Figma and navigate to: **Plugins** > **Material Theme Builder** > **Open Plugin**
2. Select **Get started**, this will create **material-theme** with baseline values by default. Color and text styles will begin populating the right hand design panel. When your tokens are fully generated, your artboard will contain tonal palettes for light and dark color schemes, as well as a default type scale.
3. Your tokens are now represented as [Figma styles](https://help.figma.com/hc/en-us/articles/360039238753-Styles-in-Figma) that can be used throughout your designs

##### Update token values

###### Using the Material Theme Builder Figma plugin (updates colors only)

1. Open Figma and navigate to: **Plugins** > **Material Theme Builder** > **Open Plugin**
2. Choose the colors. Updated color and text styles will begin populating the right hand design panel.
3. Your updated tokens are now represented as [Figma styles](https://help.figma.com/hc/en-us/articles/360039238753-Styles-in-Figma) that can be used throughout your designs

###### Using Figma styles

1. In Figma, navigate to the file in which the tokenized style is defined. Shortcut: right click the style in the right hand sidebar and select **Go to style definition.**
2. In the right hand sidebar, hover over the style you want to update and **select the adjust icon when it appears**. Or, right click the style in the style picker and select **Edit style**.
3. Make your changes to the token name, description, properties, etc. using the **Edit style panel**. Close the panel when finished.

##### Use tokens in product mock-ups

1. Instead of manually setting the color or typography for elements in a layout, apply the [Figma styles](https://help.figma.com/hc/en-us/articles/360039238753-Styles-in-Figma) representing your design tokens. This helps ensure that developers will correctly understand and apply your design choices.

##### Use tokens with the Material Design Kit

1. Duplicate the Material Design Kit in Figma
2. Navigate to **Plugins** > **Material Theme Builder** > **Open plugin**
3. With components selected, **select swap**. This will swap the baseline Material token style values with your own generated token style values.

##### Export tokens

1. Open Figma and navigate to: **Plugins** > **Material Theme Builder** > **Open Plugin**
2. Navigate to the **Export tab**. Select the format you want to export for (Android, Jetpack Compose)
3. Name your .zip file and select **Save**

Your tokens are ready to share!

