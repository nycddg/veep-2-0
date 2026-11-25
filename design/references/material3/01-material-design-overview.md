# 01 — Material Design overview: philosophy, system structure, major concepts, M3 and M3 Expressive

Primary sources: https://m3.material.io/ · https://m3.material.io/foundations · https://m3.material.io/foundations/usability/overview · https://m3.material.io/foundations/usability/applying-m3-expressive · https://m3.material.io/blog/building-with-m3-expressive · https://m3.material.io/blog/m3-expressive-motion-theming · https://m3.material.io/blog/whats-new-at-io26 · https://m3.material.io/blog/material-is-compose-first
Accessed 2026-10-09.

> How to read this file: the "Essentials" below reorganize Material's own statements for agent use. Each item cites its page. The complete page text, every Do/Don't/Caution caption, and the page list follow under the horizontal rule. Where an essential and the verbatim text differ, the verbatim text wins.

## Essentials

### What Material 3 is (as Google describes it)
- Material is "a design system created by Google to help teams build high-quality digital experiences for Android, iOS, Flutter, and the web" (system description in Material's token database, shown on token modules across the site).
- The site is organized into **Foundations** (accessibility, content design, customization, design tokens, interaction states, layout, Material A–Z glossary, building for all, usability, and platform guidance for watches and XR), **Styles** (color, elevation, icons, motion, shape, spacing, typography), **Components**, **Develop** (Android Views/MDC-Android, Jetpack Compose, Flutter, Web), and the **Blog**. (https://m3.material.io/foundations, https://m3.material.io/styles, https://m3.material.io/components, https://m3.material.io/develop)

#### System structure → files in this guide
| Site area (m3.material.io) | Covered in |
|---|---|
| Foundations: content design, glossary, platform guidance (watches, XR) + Styles: elevation, spacing, icons | [02-foundations.md](02-foundations.md) |
| Styles: color | [03-color.md](03-color.md) |
| Styles: typography | [04-typography.md](04-typography.md) |
| Styles: shape (incl. Expressive shape library, shape morph) | [05-shape.md](05-shape.md) |
| Styles: motion (motion physics / springs, easing & duration, transitions) | [06-motion.md](06-motion.md) |
| Foundations: layout | [07-layout-adaptive.md](07-layout-adaptive.md) |
| Foundations: accessibility (overview, designing, writing, building for all) + component Accessibility tabs | [08-accessibility.md](08-accessibility.md) |
| Components | [09-components/](09-components/00-index.md) |
| Foundations: interaction (states, inputs, gestures, selection) + cross-component patterns | [10-patterns-interaction.md](10-patterns-interaction.md) |
| Foundations: design tokens, customization | [11-design-tokens.md](11-design-tokens.md) |
| Develop | [13-repositories-implementation.md](13-repositories-implementation.md) |
| Blog | [14-education.md](14-education.md) |
| Foundations: usability (M3 Expressive) | this file |

- Accessibility is stated as a core value: "Accessibility by default is a core design value for Material." (https://m3.material.io/foundations/overview/principles). See [08-accessibility.md](08-accessibility.md).

### Standard M3 vs. M3 Expressive — keep them distinct
| | Standard (baseline) Material 3 | Material 3 Expressive |
|---|---|---|
| What it is | The Material 3 system and its baseline styles/components | "An evolution of the Material 3 design system… a set of new features, updated components, and design tactics for creating emotionally impactful UX." "M3 Expressive isn't a new version of the system. We're not deprecating M3, and this isn't 'M4.'" (blog/building-with-m3-expressive) |
| When introduced | — | May 2025 (dated "May 2025" in the update sections of shape, motion and component pages) |
| Components | Baseline components (several are now marked "no longer recommended" on their pages — see 09-components) | 14 new or updated components. **New:** Button groups, FAB menu, Loading indicator, Split button, Toolbars. **Updated:** App bars, Common buttons, Extended FAB, FABs, Icon buttons, Navigation bar, Navigation rail, Progress indicators, Sliders (blog/building-with-m3-expressive). Other pages (e.g. Lists, Menus, Navigation drawer, Search, Segmented buttons) also carry "M3 Expressive update" notes — see each component file §2. |
| Motion | Easing & duration system (now described as the legacy system) | Motion physics system: springs, with **expressive** and **standard** motion schemes (styles/motion/overview/how-it-works). See [06-motion.md](06-motion.md) |
| Typography | 15 baseline type styles | Adds 15 **emphasized** type styles ("added in the expressive update") (styles/typography/type-scale-tokens). See [04-typography.md](04-typography.md) |
| Shape | Corner radius scale | Adds corner tokens large-increased (20dp), extra-large-increased (32dp), extra-extra-large (48dp); "full" replaces 50%-of-size; 35-shape library and shape morph (styles/shape/overview-principles). See 05-shape.md |
| Color | Static baseline and dynamic color | "Vibrant color schemes… an expanded range of colors" (blog). Toolbars and menus offer "vibrant" color styles in their token sets. |

### The seven expressive design tactics (verbatim headings, blog/building-with-m3-expressive)
1. Use a variety of shapes — Caution: "Smaller shapes can result in essential actions looking less important." Do: "Break from the surrounding shape style to draw attention to a particular element."
2. Apply rich and nuanced colors — "Use contrast between primary, secondary, and tertiary color roles to prioritize actions and simplify navigation." Caution: "Without contrast, elements can blend together."
3. Guide attention with typography — "Use emphasized text styles to draw attention to important UI elements, like headlines and actions."
4. Contain content for emphasis — "Give the most important content, tasks, or actions visual prominence through ample space and the brightest surface mapping." Caution: "Ungrouped information can blend together."
5. Add fluid and natural motion — "Apply the expressive motion springs or custom micro animations."
6. Leverage component flexibility — "Adapt content to foldable and large screens through custom tweaks or by applying canonical layouts."
7. Combine tactics to create hero moments — "Stick to one or two hero moments in your product; too many moments can be overwhelming or distracting." Ask: "Is this interaction emotionally impactful?" and "Is this a key interaction in your product?"

The blog adds: "While these tactics work for us… makers have more flexibility with M3 than ever before, so we encourage you to play around with these elements." Treat the tactics as guidance, not mandatory rules.

### Usability best practices for applying expressive tactics (foundations/usability/applying-m3-expressive)
- "Use clear scale and placement — Avoid crowding the screen with too many large or equally prominent elements. Scale and placement create a clear focal point."
- "Reinforce with consistent color roles — Use different color roles for actions and data to create a visual hierarchy…"
- "Create calm, balanced layouts — Use uniform shapes and sizes. Add space between shapes and data…"
- Secondary/tertiary flows "use fewer design tactics to reduce cognitive load" (Aura example 3 and 4).

### Platform direction (status notes)
- "Material Android is Compose-first" (homepage card and blog/material-is-compose-first): start migrating to Compose to get the latest from Material. See [13-repositories-implementation.md](13-repositories-implementation.md) for per-platform availability, including where Expressive is not available (e.g. many Web entries are "Unavailable").

### Freshness
- Homepage and blog reference Google I/O 2026 updates (blog/whats-new-at-io26). The site content build fetched is `2026-09-23_06-10-05`; token DB version 38.2.9 (published 2026-08-10).


---

## Source pages in scope

| Page | URL | Site content timestamp | Do | Don't | Caution |
|---|---|---|---|---|---|
| Material Design | https://m3.material.io/ | 2026-07-08T11:13:50.193Z | 0 | 0 | 0 |
| Foundations | https://m3.material.io/foundations | 2026-07-17T05:06:20.337Z | 0 | 0 | 0 |
| Usability — Overview | https://m3.material.io/foundations/usability/overview | 2026-07-17T05:36:34.121Z | 0 | 0 | 0 |
| Usability — Applying M3 Expressive | https://m3.material.io/foundations/usability/applying-m3-expressive | 2026-07-17T05:36:34.121Z | 0 | 0 | 0 |
| Styles | https://m3.material.io/styles | 2026-07-17T05:32:35.561Z | 0 | 0 | 0 |
| Components | https://m3.material.io/components | 2026-09-01T07:50:47.382Z | 0 | 0 | 0 |
| What’s new at Google I/O 2026 | https://m3.material.io/blog/whats-new-at-io26 | 2026-07-08T11:13:50.193Z | 0 | 0 | 0 |
| Material Android is Compose-first | https://m3.material.io/blog/material-is-compose-first | 2026-07-08T11:13:50.193Z | 0 | 0 | 0 |
| Adding Motion Physics with Jetpack Compose | https://m3.material.io/blog/m3-expressive-motion-theming | 2026-07-08T11:13:50.193Z | 0 | 0 | 0 |
| Start building with Material 3 Expressive | https://m3.material.io/blog/building-with-m3-expressive | 2026-07-16T07:47:43.807Z | 3 | 0 | 3 |

## Verbatim rule index (every Do / Don't / Caution caption on the pages above)


**Usability — Applying M3 Expressive** — https://m3.material.io/foundations/usability/applying-m3-expressive

- **[Before]** (fig) - All the elements were large and competed for attention
- **[After]** (fig) - The large **Start breathing** button is a strong visual focal point
- **[Before]** (fig) - The same color roles, primary (1, 2) and primary container (3), are used for all actions and data
- **[After]** (fig) - The primary color role (1) makes the button clear and prominent
- **[Before]** (fig) - The shapes have different forms and sizes
- **[After]** (fig) - There’s more even spacing between shapes
- **[Caution]** (fig) - The text shifts from very condensed (inhale) and expanded (exhale) while the large arrows animate at the same time as the moving flower
- **[Do]** (fig) - The text spacing is consistent so the user can focus on the flower’s pulsating and morphing shape guiding the pace of breathing

**Start building with Material 3 Expressive** — https://m3.material.io/blog/building-with-m3-expressive

- **[CAUTION]** (fig) Smaller shapes can result in essential actions looking less important.
- **[DO]** (fig) Break from the surrounding shape style to draw attention to a particular element.
- **[CAUTION]** (fig) Without contrast, elements can blend together.
- **[DO]** (fig) Use contrast to emphasize the main takeaway or element.
- **[CAUTION]** (fig) Ungrouped information can blend together.
- **[DO]** (fig) Group similar content into informative groupings.

## Appendix — verbatim page text (digest: text, tables and figure captions; image-only content represented by captions)

### Material Design

Source: https://m3.material.io/


#### Material at Google I/O 2026

**[What’s new at Google I/O 2026]** (fig) Material’s latest updates make it easier to create expressive, adaptive products Link: https://m3.material.io/blog/whats-new-at-io26?utm_source=homepage&utm_medium=referral&utm_campaign=IO26

**[Material Android is Compose-first]** (fig) Start migrating to Compose to get the latest from Material Link: https://m3.material.io/blog/material-is-compose-first?utm_source=homepage&utm_medium=referral&utm_campaign=IO26

**[Google I/O 2026]** (fig) Check out all the announcements, keynotes, sessions, and fireside chats on the main site for Google I/O 2026 Link: https://io.google/2026/

#### M3 Expressive: Design with emotion

Build more usable and engaging products with emotion-driven UX. M3 Expressive adds vibrant [colors](https://m3.material.io/styles/color/system/overview?utm_source=homepage&utm_medium=referral&utm_campaign=IO26), intuitive [motion](https://m3.material.io/styles/motion/overview?utm_source=homepage&utm_medium=referral&utm_campaign=IO26), adaptive [components](https://m3.material.io/components?utm_source=homepage&utm_medium=referral&utm_campaign=IO26), flexible [typography](https://m3.material.io/styles/typography/overview?utm_source=homepage&utm_medium=referral&utm_campaign=IO26), and contrasting [shapes](https://m3.material.io/styles/shape/overview-principles?utm_source=homepage&utm_medium=referral&utm_campaign=IO26).

**[Updated: Figma M3 Design Kit]** (fig) Quickly create design mockups and prototypes with the latest Material 3 Expressive components and styles Link: https://www.figma.com/community/file/1035203688168086460

**[New: Motion physics]** (fig) Easier-to-implement motion system for more customizable transitions—powered by tokens Link: https://m3.material.io/styles/motion/overview?utm_source=homepage&utm_medium=referral&utm_campaign=IO25

**[Expanded: Shape library]** (fig) New set of 35 shapes to add decorative visual elements, with built-in shape morph motion Link: https://m3.material.io/styles/shape/overview-principles?utm_source=homepage&utm_medium=referral&utm_campaign=IO25

**[Blog: Guide to our latest update]** (fig) Get a full introduction to the latest evolution of Material, including new components and style updates Link: https://m3.material.io/blog/building-with-m3-expressive?utm_source=homepage&utm_medium=referral&utm_campaign=IO25

**[Google Design: Making Google Sans Flex]** (fig) How seven design problems shaped Google’s iconic typeface — from inception to going open-source Link: https://design.google/library/google-sans-flex-font

#### Expressive components

**[New: Toolbars]** (fig) Flexible component to display frequently used actions. Toolbars hold a variety of controls like buttons, and can also be paired with a FAB. Link: https://m3.material.io/components/toolbars/overview?utm_source=homepage&utm_medium=referral&utm_campaign=IO25

**[New: Split button]** (fig) Pair a button with related actions in a connected menu. Split buttons leverage expressive shape and motion strategies. Link: https://m3.material.io/components/split-button/overview?utm_source=homepage&utm_medium=referral&utm_campaign=IO25

**[Updated: Progress indicators]** (fig) An eye-catching way to show the status of a process in real time. Customize waveform and thickness to show progress with style. Link: https://m3.material.io/components/progress-indicators/overview?utm_source=homepage&utm_medium=referral&utm_campaign=IO25

**[New: Button groups]** (fig) A new way to organize related buttons—with shape-shifting buttons that bump and react to each other Link: https://m3.material.io/components/button-groups/overview?utm_source=homepage&utm_medium=tile&utm_campaign=IO25

**[See all expressive components]** (fig) Check out all 14 new and updated M3 Expressive components Link: https://m3.material.io/blog/building-with-m3-expressive?utm_source=get-started&utm_medium=referral&utm_campaign=IO25#what-rsquo-s-in-the-update

#### How to apply M3 Expressive

**[Blog: Using motion physics]** (fig) Learn how the motion scheme works, the changes to existing APIs, and what you need to know to leverage it Link: https://m3.material.io/blog/m3-expressive-motion-theming?utm_source=homepage&utm_medium=tile&utm_campaign=IO25

**[Watch: Build with M3 Expressive]** (fig) Discover how to use Material’s emotional design patterns to boost usability and desire for your product Link: https://io.google/2025/explore/technical-session-24?utm_source=homepage&utm_medium=referral&utm_campaign=IO25

#### Latest in Material & Google Design

**[Material Design blog]** (fig) Discover what’s new, tutorials, and inspiration from the Material team Link: https://m3.material.io/blog?utm_source=homepage&utm_medium=referral&utm_campaign=IO26

**[Google Design]** (fig) Learn about the craft of design at Google, with articles written by designers and developers, how-to guides, and podcasts Link: https://design.google/

#### Next steps

**[Get started]** (fig) Guides, videos, and tools to start building with Material Link: https://m3.material.io/get-started

**[Figma M3 Design Kit]** (fig) Customizable styles and components to help you design with Material 3 Link: https://www.figma.com/community/file/1035203688168086460

**[Develop]** (fig) Code and developer documentation for building with Material Link: https://m3.material.io/develop

### Foundations

Source: https://m3.material.io/foundations


**[Accessibility]** (fig) Accessible design enables users with diverse abilities to navigate, understand, and enjoy a UI. Link: https://m3.material.io/foundations/overview/principles

**[Content design]** (fig) UX writing and information design make UIs easy to use. Link: https://m3.material.io/foundations/content-design/overview

**[Customizing Material]** (fig) M3 makes brand expression in an interface simpler and more beautiful than ever before. Link: https://m3.material.io/foundations/customization

**[Design tokens]** (fig) Tokens store style values like colors and fonts so the same values can be used across designs, code, tools, and platforms. Link: https://m3.material.io/foundations/design-tokens/overview

**[Interaction states]** (fig) States are visual indicators used to communicate the status of a component or interactive element. Link: https://m3.material.io/foundations/interaction/states/overview

**[Layout]** (fig) Layout is the visual arrangement of elements on the screen. Link: https://m3.material.io/foundations/layout/understanding-layout/overview

**[Material A-Z]** (fig) Get to know the key terms and concepts behind Material, from A to Z. Link: https://m3.material.io/foundations/glossary

**[Building for all]** (fig) Building for everyone with everyone Link: https://m3.material.io/foundations/building-for-all/user-needs

### Usability — Overview

Source: https://m3.material.io/foundations/usability/overview


#### Key takeaways

- Emphasize key actions to create effective visual hierarchy
- Leverage [expressive design tactics](https://m3.material.io/blog/building-with-m3-expressive#what-rsquo-s-in-the-update) to improve usability
- Don't overwhelm the user with too much visual information
- Test and iterate to validate designs

Usability helps create digital products that are easy to use and engaging. By leveraging M3 Expressive [design tactics](https://m3.material.io/blog/building-with-m3-expressive#what-rsquo-s-in-the-update) like containment, size, shape, color, and typography, designers can guide users through experiences and emphasize key actions to create intuitive, usable products.

#### What is usability?

The [Nielsen Norman Group](https://www.nngroup.com/articles/usability-101-introduction-to-usability/) defines usability by how effectively users interact with a product through five aspects:

| Aspect | Definition |
| --- | --- |
| Efficiency | Users can efficiently complete tasks and goals |
| Errors | Proper design reduces the likelihood of mistakes, and users can easily correct any errors that do occur |
| Learnability | New users learn to use the product and complete tasks easily, even if it’s the first time they’re using it |
| Memorability | When users come back to a product, they remember how to use it |
| Satisfaction | Users are satisfied with the designed experience |

##### How is usability different from accessibility?

**Accessibility** focuses on making products accessible for people with disabilities. Accessible experiences are perceivable, operable, understandable and robust, and support people who use assistive technology. [More on accessibility](https://m3.material.io/foundations/overview/principles)

**Usability** focuses on making products intuitive and easy to understand for everyone.

#### Usability design tactics

There are many ways to design for usability; not all design tactics need to be combined at the same time. An effective combination of design tactics can:

- Make a product easily understood, learnable, and memorable
- Help people quickly identify what do to next
- Minimize distractions to focus on the task

Start by creating a strong visual hierarchy to emphasize important information by using color, size, spacing, placement, containment, and other [tactics](https://m3.material.io/blog/building-with-m3-expressive#what-rsquo-s-in-the-update). Then add unique emphasis to celebrate success or progress, by adding illustrations, scale, shapes, and shape morph.

##### Color & color contrast

Use eye-catching primary and secondary colors to create hierarchy and emphasize key actions. Instead of similar colors, try using contrasting colors, like purple and green. Colors should always follow [basic accessibility guidelines](https://m3.material.io/foundations/designing/color-contrast).

Tip: Material Design’s dynamic [color roles](https://m3.material.io/styles/color/roles) automatically create color palettes with proper emphasis and accessible contrast ratios.

More on [Color](https://m3.material.io/styles/color/system/overview?utm_source=homepage&utm_medium=referral&utm_campaign=IO25) & [color contrast](https://m3.material.io/foundations/designing/color-contrast)

##### Containment & grouping content

Group related elements in subtle containers to make them easier to understand. Break content into manageable sections using containment, [spacing](https://m3.material.io/foundations/layout/grids-spacing/spacing), and headings.

##### [Motion](https://m3.material.io/styles/motion/overview/how-it-works)

Motion emphasizes key moments or unique experiences. However, use it sparingly since motion can be distracting.

##### Shape & shape morph

The [Material shape library](https://m3.material.io/styles/shape/overview-principles#579dd4ba-39f3-4e60-bd9b-1d97ed6ef1bf) has 35 shapes to apply to designs. Shapes are often used to mask imagery or fill empty space.

Shape:

- Adds emphasis and delight
- Guides focus
- Differentiates containers, buttons and animations
- Signals interaction
- Sets emotional tone

Every shape can morph into another in the set. Shape morph is also applied when interacting with components like [buttons](https://m3.material.io/components/buttons/specs#e9ec15a7-7a8d-41f9-81d1-541c2dc33643). Shape morph:

- Communicates interaction states, like selected, tap, swipe, scroll, release, long press
- Emphasize actions in progress

More on [shape](https://m3.material.io/styles/shape/overview-principles#579dd4ba-39f3-4e60-bd9b-1d97ed6ef1bf) & [shape morph](https://m3.material.io/styles/shape/shape-morph)

##### Size

The size and scale of elements shows their level of importance. The most important action or the main call to action (CTA) should be the largest element.

Using larger sizes for key actions dramatically increases usability and makes products more efficient. Users are satisfied, they make fewer errors, and find the products to be more learnable.

##### Typography

Type can separate different hierarchies of information. More important information might use one font and less important or supplemental content might use another.

- The largest, most legible text on the screen could signal a primary action
- Smaller text signals secondary or tertiary action
- Group similar content by using the same font style

[More on typography](https://m3.material.io/styles/typography/overview)

#### Design based on primary goals

Primary goals are the main tasks to use a product successfully, like starting a process or making decisions, so they need the strongest emphasis. Secondary and tertiary goals add to the experience of the product but aren’t required, like viewing statuses or settings. Identify primary, secondary, and tertiary goals by considering product needs and user satisfaction.

To guide people to the primary goal while ensuring that other goals are still discoverable, try:

- Creating a strong visual hierarchy with size, color, and other design tactics
- Simplifying to one primary task on each page, leveraging empty space to focus attention
- Making core actions recognizable and easily reachable, like using large buttons for the most frequent actions
- Designing a harmonious experience that is aesthetically pleasing and easy to understand
- Not using too many expressive tactics at the same time as they can be distracting

#### Iterate

Test, iterate, and gather feedback early and often from a range of users and contexts to validate design choices and minimize errors. User testing offers valuable insights into how users perceive and interact with the usability of the product experience.

### Usability — Applying M3 Expressive

Source: https://m3.material.io/foundations/usability/applying-m3-expressive


#### Aura: An example app showcasing usability with M3 Expressive

(fig) The four goals in the Aura breathing app:

1. Start a breathing session
2. Experience and complete a breathing session
3. View the breathing session results
4. Check progress towards personal goals

Aura is a conceptual breathing app that illustrates how [Material 3 (M3) Expressive design tactics](https://m3.material.io/blog/building-with-m3-expressive#what-rsquo-s-in-the-update) can make an app more usable and draw the user’s attention to the most important actions. It’s used with a smart watch to measure heart rate. It was created based on the [eye tracking and focus group research](https://design.google/library/expressive-material-design-google-research) that played a key role in the creation of M3 Expressive. Research showed that participants were able to spot key UI elements up to **four times faster** in the M3 Expressive designs compared to other designs.

Examples include:

- Using scale, color, and containment to guide people to start a breathing session
- Using shape, color, and empty space to guide people to breathe slowly and with intention
- Minimizing cognitive load by using empty space and fewer actions, so people can stay focused on their breath
- Balancing primary tasks with supportive data to show progress and impact of a session

#### Example 1: Start a breathing session

Starting the session is the primary goal when opening the app. Size, placement, color, and contrast guide the user to the **Start breathing** button. The button’s large size and low placement makes it easy to reach when holding a phone.

The **settings** use a secondary color to draw attention, but they’re not as emphasized as the button.

The **daily message** is the least emphasized, but uses large containment and type to draw attention.

Expressive components used:

- [Extra large button](https://m3.material.io/components/buttons/overview)
- [Button groups](https://m3.material.io/components/button-groups/overview)
- [Switch](https://m3.material.io/components/switch/overview)
- [Navigation bar](https://m3.material.io/components/navigation-bar/overview)

(fig) App elements in order of emphasis:

1. The **Start breathing** button is the primary goal of the app
2. Breathing session settings
3. Daily welcome message

##### Usability design tactics

|  |  |
| --- | --- |
| Color & contrast | The prominent dark purple **Start breathing** button (1) on a soft light purple background uses [Material primary color roles](https://m3.material.io/styles/color/roles) to create high contrast, making the button easy to find and remember. |
| Hierarchy | The main goal is to tap the large **Start breathing** button (1). The daily message (3) and settings (2) are in lighter colors and in subtle containers because they are supportive actions, but not required. |
| Placement | The button (1) is close to the bottom so it’s easy to reach. It’s the final, most prominent element in the vertical flow, naturally guiding the eye down the screen without competing with other content. |
| Shape | The rounded button form reinforces it as a distinct, touchable control. |
| Size | The button (1) is extra large to make it the most emphasized element on the screen. |
| Spacing | Generous spacing separates the button (1) from the message (3) and settings (2). |
| Typography | The button (1) has larger text to emphasize the primary action. |
| Visual harmony & hierarchy | The daily message is placed at the top in a soft blue container with medium sized text, setting a reflective tone without drawing too much focus.  The hierarchy guides the user from the daily message (3) to settings (2) and finally to the **Start breathing** button (1). |

#### Example 2: Breathing session (inhale & exhale)

The guided breathing exercise is the [hero moment](https://m3.material.io/blog/building-with-m3-expressive). A large central flower expands and contracts, serving as the visual guide for each breath, while a countdown shows remaining seconds for inhaling, exhaling, and holding the breath.

The **pause** and **stop** buttons are less prominent than the flower to encourage people to focus on the session. The buttons are placed at the bottom so they’re easy to reach.

Expressive components and styles used:

- [Large buttons](https://m3.material.io/components/buttons/overview) in a [button group](https://m3.material.io/components/button-groups/overview)
- [Material shape library](https://m3.material.io/styles/shape/overview-principles#579dd4ba-39f3-4e60-bd9b-1d97ed6ef1bf) (“flower” and “sunny”)
- [Emphasized typography](https://m3.material.io/styles/typography/type-scale-tokens#c898d7e2-4833-440c-9dba-9a95c8f50ac9)

(fig) The flower’s shape, size, and movement guide the user to inhale, exhale, and hold the breath.

##### Usability design tactics

|  |  |
| --- | --- |
| Color & contrast | The vibrant yellow appears when inhaling to contrast the soft purple background and be obvious. |
| Motion | The flower expands and contracts to guide the pace of the breath. The motion uses[Material Spring Motion Tokens](https://figma.com/community/plugin/1397759704974764283/material-motion). |
| Placement | The **pause** and **stop** buttons are at the bottom, spaced away from the flower, but easy to reach. The navigation bar hides during the breathing journey. |
| Shape | The flower uses the “flower” and “sunny” [Material shapes](https://m3.material.io/styles/shape/overview-principles#579dd4ba-39f3-4e60-bd9b-1d97ed6ef1bf) to draw attention and clearly stand apart from the simple **pause** and **stop** buttons. |
| Size | The size of the animating, breathing flower dominates the screen to draw attention. |
| Typography | The countdown numbers are very large in comparison to the **inhale**, **hold**, and **exhale** text to focus attention on the exercise. This provides strong visual contrast, while still keeping the instructions associated with the countdown. |

#### Example 3: Breathing report

The breathing report comes after the breathing exercise. It’s the secondary goal in the app, not the primary hero moment, so it uses fewer design tactics to reduce cognitive load.

It draws attention to each data point on the page using shapes and decreasing size. The button is less emphasized than the **Start breathing** button on the landing page.

Expressive components and elements used:

- [Medium button](https://m3.material.io/components/buttons/overview)
- [Material shape library](https://m3.material.io/styles/shape/overview-principles#579dd4ba-39f3-4e60-bd9b-1d97ed6ef1bf)
- [Emphasized typography](https://m3.material.io/styles/typography/type-scale-tokens#c898d7e2-4833-440c-9dba-9a95c8f50ac9)

(fig) Shapes and smaller sizes emphasize key information and draw attention down the screen to the **Finish** button

##### Usability design tactics

|  |  |
| --- | --- |
| Color & contrast | Dark text on the light flower shapes creates a strong contrast, making each metric easy to read at a glance.  The solid, dark purple **Finish** button stands out clearly against the light purple background, guiding users to the next step. |
| Placement | The metrics are spread out across the screen in a loose cluster, guiding the user from one to the next.  The **Finish** button is centered at the bottom so it’s easy to reach. |
| Shape | The metrics are inside Material flower shapes, making achievements stand out. The use of flower shapes make the design look consistent. |
| Size & typography | Key numbers like **18** and **3min** are larger and use emphasized styles, making it easy to scan the most important data. |
| Spacing & grouping | Ample spacing around each metric avoids clutter, while making the layout tide any scannable.  Playful Material shapes serve as clear containers, making the grouping feel lively. |

#### Example 4: Check progress

The progress report is a tertiary goal in the app to track statistics and see progress over a monthly view. Since it’s not a primary goal or hero moment, it uses more subtle design tactics to make the app usable and draw more attention.

The key data is dark on a light background to draw attention, while the yellow shapes on the calendar highlight completed sessions.

Expressive components and elements used:

- [App bar](https://m3.material.io/components/app-bars)
- [Progress indicator](https://m3.material.io/components/progress-indicators/overview)
- [Medium button](https://m3.material.io/components/buttons/overview)
- [Navigation bar](https://m3.material.io/components/navigation-bar/overview)
- [Material shape library](https://m3.material.io/styles/shape/overview-principles#579dd4ba-39f3-4e60-bd9b-1d97ed6ef1bf)
- [Emphasized typography](https://m3.material.io/styles/typography/type-scale-tokens#c898d7e2-4833-440c-9dba-9a95c8f50ac9)

(fig) Large text and colorful completed sessions draw attention to the key progress information

##### Usability design tactics

|  |  |
| --- | --- |
| Color & contrast | The data uses the **primary** role to be darker than all other elements and draw attention.  The yellow accents on the daily goal bar and calendar use the **secondary** roles to highlight progress. |
| Grouping & spacing | The metrics (days, breaths, and minutes) are grouped together. The equal vertical spacing between elements makes it easy to scan data. |
| Shape | The rounded Material flower shape on the highlighted days in the calendar makes data more expressive.  The flower shapes remind the user of the breathing exercise visualization. |
| Size | Custom-scaled numbers for key statistics such as days, breaths, and minutes are large enough to scan, but they don’t dominate the screen. |

#### Testing & iteration improves the experience

By testing the experience with users, it’s easy to identify usability issues and address them. From version 1 to 2, the design shifts from cluttered to calm and simplified.

(fig) Version 1: No containment, similar sizes, and inconsistent colors

(fig) Version 2: Neatly grouped settings, an extra large button, and consistent secondary color usage

Version 1 loaded the screen with settings for duration, sound, and haptics all fighting for attention, creating unnecessary complexity. In Version 2, these options are neatly grouped as list items above the main action. The focus stays on starting the breathing session.

By carefully using hierarchy, containment, shape, and color, the final design is easier to follow and more intuitive. Exploring different design refinements can result in an experience that feels intuitive and easy for the user to follow.

#### Best practices for applying usability design tactics

##### Use clear scale and placement

Avoid crowding the screen with too many large or equally prominent elements. Scale and placement create a clear focal point.

**[Before]** (fig) - All the elements were large and competed for attention
- The visual hierarchy was unclear
- The settings weren’t grouped together

**[After]** (fig) - The large **Start breathing** button is a strong visual focal point
- The supporting controls are clear, but less prominent than the **Start breathing** button

##### Reinforce with consistent color roles

Use different color roles for actions and data to create a visual hierarchy that makes it simple for users to identify what they can do.

**[Before]** (fig) - The same color roles, primary (1, 2) and primary container (3), are used for all actions and data

**[After]** (fig) - The primary color role (1) makes the button clear and prominent
- The secondary color on selected settings (2) and secondary container color on the dates (3) contrast with the background and primary colors

##### Create calm, balanced layouts

Use uniform shapes and sizes. Add space between shapes and data to make it simple to compare data. Create gentle visual rhythm by aligning elements in a consistent flow to support a serene, focused experience.

**[Before]** (fig) - The shapes have different forms and sizes
- The shapes overlap

**[After]** (fig) - There’s more even spacing between shapes
- The shapes are uniform

**[Caution]** (fig) - The text shifts from very condensed (inhale) and expanded (exhale) while the large arrows animate at the same time as the moving flower

**[Do]** (fig) - The text spacing is consistent so the user can focus on the flower’s pulsating and morphing shape guiding the pace of breathing

### Styles

Source: https://m3.material.io/styles


**[Color]** (fig) Color is used to express style and communicate meaning. With dynamic color, Material puts personal color preferences and individual needs at the forefront of systematic color application. Link: https://m3.material.io/styles/color/system/overview

**[Elevation]** (fig) Elevation is the relative distance between two surfaces along the z-axis. All surfaces and components have elevation values. Link: https://m3.material.io/styles/elevation/overview

**[Icons]** (fig) Icons can be used to represent common actions. Material Symbols are a set of variable icon fonts created at seven weights across three different styles. Link: https://m3.material.io/styles/icons/overview

**[Motion]** (fig) Use motion to make a UI expressive and easy to use. Material transitions help guide users as they navigate an app. Link: https://m3.material.io/styles/motion/overview/how-it-works

**[Shape]** (fig) The shape scale defines the style of container corners, offering a range of roundedness from square to fully circular. Link: https://m3.material.io/styles/shape/overview-principles

**[Typography]** (fig) Use typography to make writing legible and beautiful. Material's default type scale includes contrasting and flexible styles to support a wide range of use cases. Link: https://m3.material.io/styles/typography/overview

### Components

Source: https://m3.material.io/components


#### Buttons

**[Button groups]** (fig) Button groups organize buttons and add interactions between them Link: https://m3.material.io/components/button-groups/overview

**[Buttons]** (fig) Buttons prompt most actions in a UI Link: https://m3.material.io/components/buttons/overview

**[Extended FABs]** (fig) Extended floating action buttons (extended FABs) help people take primary actions Link: https://m3.material.io/components/extended-fab/overview

**[FAB menu]** (fig) The floating action button (FAB) menu opens from a FAB to display multiple related actions Link: https://m3.material.io/components/fab-menu/overview

**[Floating action buttons (FABs)]** (fig) Floating action buttons (FABs) help people take primary actions Link: https://m3.material.io/components/floating-action-button/overview

**[Icon buttons]** (fig) Icon buttons help people take actions with a single tap Link: https://m3.material.io/components/icon-buttons/overview

**[Segmented buttons]** (fig) Segmented buttons help people select options, switch views, or sort elements Link: https://m3.material.io/components/segmented-buttons/overview

**[Split buttons]** (fig) Split buttons open a menu to give people more options related to an action Link: https://m3.material.io/components/split-button

#### Date & time pickers

**[Date pickers]** (fig) Date pickers let people select a date, or a range of dates Link: https://m3.material.io/components/date-pickers/overview

**[Time pickers]** (fig) Time pickers help people select and set a specific time Link: https://m3.material.io/components/time-pickers/overview

#### Loading & progress

**[Loading indicator]** (fig) Loading indicators show the progress of a process for a short wait time Link: https://m3.material.io/components/loading-indicator/overview

**[Progress indicators]** (fig) Progress indicators show the status of a process in real time Link: https://m3.material.io/components/progress-indicators/overview

#### Navigation

**[Navigation bar]** (fig) Navigation bars let people switch between UI views on smaller devices Link: https://m3.material.io/components/navigation-bar/overview

**[Navigation drawer]** (fig) Navigation drawers let people switch between UI views on larger devices Link: https://m3.material.io/components/navigation-drawer/overview

**[Navigation rail]** (fig) Navigation rails let people switch between UI views on mid-sized devices Link: https://m3.material.io/components/navigation-rail/overview

#### Sheets

**[Bottom sheets]** (fig) Bottom sheets show secondary content anchored to the bottom of the screen Link: https://m3.material.io/components/bottom-sheets/overview

**[Side sheets]** (fig) Side sheets show secondary content anchored to the side of the screen Link: https://m3.material.io/components/side-sheets/overview

#### All other components

**[App bars]** (fig) App bars are placed at the top of the screen to help people navigate through a product Link: https://m3.material.io/components/app-bars/overview

**[Badges]** (fig) Badges show notifications, counts, or status information on navigation items and icons Link: https://m3.material.io/components/badges/overview

**[Cards]** (fig) Cards display content and actions about a single subject Link: https://m3.material.io/components/cards/overview

**[Carousel]** (fig) Carousels show a collection of items that can be scrolled on and off the screen Link: https://m3.material.io/components/carousel/overview

**[Checkbox]** (fig) Checkboxes let users select one or more items from a list, or turn an item on or off Link: https://m3.material.io/components/checkbox/overview

**[Chips]** (fig) Chips help people enter information, make selections, filter content, or trigger actions Link: https://m3.material.io/components/chips/overview

**[Dialogs]** (fig) Dialogs provide important prompts in a user flow Link: https://m3.material.io/components/dialogs/overview

**[Divider]** (fig) Dividers are thin lines that group content in lists or other containers Link: https://m3.material.io/components/divider/overview

**[Lists]** (fig) Lists are continuous, vertical indexes of text and images Link: https://m3.material.io/components/lists/overview

**[Menus]** (fig) Menus display a list of choices on a temporary surface Link: https://m3.material.io/components/menus/overview

**[Radio button]** (fig) Radio buttons let people select one option from a set of options Link: https://m3.material.io/components/radio-button/overview

**[Search]** (fig) Search lets people enter a keyword or phrase to get relevant information Link: https://m3.material.io/components/search/overview

**[Sliders]** (fig) Sliders allow users to make selections from a range of values Link: https://m3.material.io/components/sliders/overview

**[Snackbar]** (fig) Snackbars show short updates about app processes at the bottom of the screen Link: https://m3.material.io/components/snackbar/overview

**[Switch]** (fig) Switches toggle the selection of an item on and off Link: https://m3.material.io/components/switch/overview

**[Tabs]** (fig) Tabs organize content across different screens and views Link: https://m3.material.io/components/tabs/overview

**[Text fields]** (fig) Text fields let users enter text into a UI Link: https://m3.material.io/components/text-fields/overview

**[Toolbars]** (fig) Toolbars display frequently used actions relevant to the current page Link: https://m3.material.io/components/toolbars/overview

**[Tooltips]** (fig) Tooltips display brief labels or messages Link: https://m3.material.io/components/tooltips/overview

### What’s new at Google I/O 2026

Source: https://m3.material.io/blog/whats-new-at-io26


**[#data-origin-author]** (fig) **Material Design**

At [Google I/O 2026](https://io.google/2026/), Material announced the Expressive layout system, lists and menus on Android, and the future of Material Android being Compose-first.

#### Expressive layout: Design for all devices

The new layout scaffold helps designers adapt interfaces for mobile, desktop, spatial devices, and more. This update also includes a new spacing system incorporated into Material components, and new design guidance for watches and XR devices.

##### Layout principles & guidelines

Check out the updated layout principles and guidelines:

- [Layout overview](https://m3.material.io/foundations/layout/layout-overview)
- [Scaffold](https://m3.material.io/foundations/layout/scaffold/overview)
- [Grids & spacing](https://m3.material.io/foundations/layout/grids-spacing/overview)
- [Breakpoints](https://m3.material.io/foundations/layout/breakpoints/overview)
- [Bidirectionality & right-to-left (RTL)](https://m3.material.io/foundations/layout/bidirectionality-rtl)
- [Canonical examples](https://m3.material.io/foundations/layout/canonical-examples/overview)

(fig) Use the expressive layout scaffold to adapt screens across breakpoints

##### New spacing system

The spacing system is the foundation for adaptive design, built on an 8dp scale. It can be used to adapt components and layouts to contexts like device type or density settings.

[More on the spacing system](https://m3.material.io/styles/spacing/overview)

(fig) Apply spacing tokens to the margins, padding, and gaps of a component or layout so it can programmatically adapt to contexts like device type or density settings

##### Design across devices

Follow these form factor principles to create apps that are optimized for [watches](https://m3.material.io/foundations/watches/overview) and [immersive XR](https://m3.material.io/foundations/xr/design/overview).

(fig) **Design for watches** using a physics-based motion system, arc text styles, and edge-hugging containers

(fig) **Design for immersive XR** to create immersive environments using spatial panels and depth-based elevation

#### Expressive lists & menus

Expressive lists and menus got a lot of buzz at Google I/O. Check out the vibrant styles, flexible configurations, and see examples of them in action:

- [Expressive lists](https://m3.material.io/components/lists/overview)
- [Expressive menus](https://m3.material.io/components/menus/overview)

#### Material Android is Compose-first

Read the blog post about the upcoming stable Compose release, including 14 expressive components, Styles API integration, our plans for Android Views, and more.

[Read the Compose-first article](https://m3.material.io/blog/material-is-compose-first)

#### More recent updates

##### Expressive search & search app bar

Expressive search has a new visual style, motion, more flexibility for trailing icons, and is available for Jetpack Compose.

[Expressive search](https://m3.material.io/components/search/overview)

[Expressive search app bar](https://m3.material.io/components/app-bars/overview)

(fig) The **contained** search style features a persistent, filled search container

#### Learn about Google Design

Discover the people and stories behind [Google Design](https://design.google/).

##### Designing for Transparent Screens

Behind the scenes of Jetpack Compose Glimmer, the new design system for display AI glasses.

[Read the story on Google Design](https://design.google/library/transparent-screens)

##### Illustrating the Gemini App

How dynamic cues help people discover, learn, and master an AI assistant’s evolving features

[Read the story on Google Design](https://design.google/library/gemini-ai-visual-design)

### Material Android is Compose-first

Source: https://m3.material.io/blog/material-is-compose-first


**[#data-origin-author]** (fig) **Material Android**

At [Google I/O 2026](https://io.google/2026), we announced that [Material Android is “all-in” on Compose](https://io.google/2026/explore/technical-session-30), alongside the official [Android Compose-first announcement](https://android-developers.googleblog.com/2026/05/android-ui-development-is-compose-first.html), marking a new chapter in Android development.

Later in 2026, we’ll promote M3 Expressive experimental APIs, making [Material Compose](https://developer.android.com/develop/ui/compose/designsystems/material3?_gl=1*1gllpir*_ga*NTY0NTY0OTE2LjE3NzkzMzg2Nzg.*_ga_QPQ2NRV856*czE3Nzk0Mzk2NzgkbzckZzEkdDE3Nzk0Mzk2ODQkajU0JGwwJGgw) 1.5.0 stable. Additionally, we’ll be integrating the new [Styles API](https://developer.android.com/develop/ui/compose/styles?_gl=1*1gllpir*_ga*NTY0NTY0OTE2LjE3NzkzMzg2Nzg.*_ga_QPQ2NRV856*czE3Nzk0Mzk2NzgkbzckZzEkdDE3Nzk0Mzk2ODQkajU0JGwwJGgw) for easier, more flexible customization, and have already integrated [Navigation3](https://developer.android.com/develop/ui/compose/layouts/adaptive/build-adaptive-navigation?_gl=1*1gfyy5b*_ga*NTY0NTY0OTE2LjE3NzkzMzg2Nzg.*_ga_QPQ2NRV856*czE3Nzk0Mzk2NzgkbzckZzEkdDE3Nzk0Mzk2ODQkajU0JGwwJGgw) into the Material adaptive library.

To focus on Compose going forward, [Material Views 1.14.0](https://github.com/material-components/material-components-android/releases/tag/1.14.0) (MDC-Android) will be our final stable release for the Views library. There’s never been a better time to migrate to [Jetpack Compose](https://developer.android.com/develop/ui/compose/migrate/migrate-xml-views-to-jetpack-compose).

#### The final Material Views release

For years, Material Design has been on a journey to redefine how to build UI on Android. We’ve seen [Jetpack Compose](https://developer.android.com/compose) grow from an ambitious idea into the engine behind the world’s most beautiful apps. As Android’s modern, declarative toolkit, it’s designed to simplify and accelerate UI development with less code and powerful native tools.

While Compose continues to accelerate, our updates for Views have become more focused. For the last few years, we’ve been preparing for a fundamental shift in Android development.

Earlier this month, we reached a major milestone: the stable release of [Material Views 1.14.0](https://github.com/material-components/material-components-android/releases/tag/1.14.0) (MDC-Android). This release officially brings Material 3 Expressive to the Views framework, as well as other improvements, unlocking more delightful experiences for Android makers:

- Expressive themes
- Expressive list component
- Emphasized type scale
- Expressive styles for 11 existing components, like buttons, sliders, progress indicators, and more

With this release, the Material Views library is now entering **maintenance mode**. It won’t get any new features, but will receive critical bug fixes.

#### Going Compose-first

Moving forward, Material Android is transitioning to focus all feature development on the [Material Compose library](https://developer.android.com/develop/ui/compose/designsystems/material3?_gl=1*wkss8e*_ga*NTY0NTY0OTE2LjE3NzkzMzg2Nzg.*_ga_QPQ2NRV856*czE3Nzk0Mzk2NzgkbzckZzEkdDE3Nzk0NDAyMjUkajYwJGwwJGgw).

Later in 2026, Material Android will release Compose 1.5.0, which will promote M3 experimental APIs to stable, including M3 Expressive. M3 Expressive APIs are like an expansion pack to M3; you can opt in to them to deliver more premium Android experiences. This includes Material 3 Expressive components, motion systems, and more from the Expressive update. [Read about M3 Expressive](https://m3.material.io/blog/building-with-m3-expressive?utm_source=blog&utm_medium=referral&utm_campaign=IO26)

For designers, the [Material 3 Figma Design Kit](https://www.figma.com/community/file/1035203688168086460/material-3-design-kit) and our [design guidelines](https://m3.material.io/) will continue to reflect the latest of what’s available in the Material Compose library.

#### Styles API & adaptive navigation

We also announced the upcoming integration of Compose [Styles](https://developer.android.com/develop/ui/compose/styles?_gl=1*u33d9*_ga*NTY0NTY0OTE2LjE3NzkzMzg2Nzg.*_ga_QPQ2NRV856*czE3Nzk0Mzk2NzgkbzckZzEkdDE3Nzk0NDA4NzUkajQzJGwwJGgw) and the recently-launched [Adaptive Navigation](https://developer.android.com/develop/ui/compose/layouts/adaptive/build-adaptive-navigation?_gl=1*1o80alu*_ga*NTY0NTY0OTE2LjE3NzkzMzg2Nzg.*_ga_QPQ2NRV856*czE3Nzk0Mzk2NzgkbzckZzEkdDE3Nzk0NDA4ODAkajM4JGwwJGgw)update [with the new Navigation3 library](https://developer.android.com/guide/navigation/navigation-3?_gl=1*1ka87s6*_ga*NTY0NTY0OTE2LjE3NzkzMzg2Nzg.*_ga_QPQ2NRV856*czE3Nzk0Mzk2NzgkbzckZzEkdDE3Nzk0NDA5MDAkajE4JGwwJGgw).

The [Compose Styles API](https://developer.android.com/develop/ui/compose/styles?_gl=1*1ycph1f*_ga*NTY0NTY0OTE2LjE3NzkzMzg2Nzg.*_ga_QPQ2NRV856*czE3Nzk0Mzk2NzgkbzckZzEkdDE3Nzk0NDA5MTkkajYwJGwwJGgw) on Android will make it easier than ever to customize Material components. This will improve overall app performance by skipping the composition phase during style updates and will simplify creating cohesive brand experiences. Integration is ongoing, so stay tuned!

For a long time, building adaptive layouts for foldables, tablets, and desktops was complex, requiring makers to manage and switch between navigation frameworks throughout the app. To solve this, we’ve deeply integrated the Material Adaptive library with [Navigation3](https://developer.android.com/guide/navigation/navigation-3?_gl=1*1qvzpce*_ga*NTY0NTY0OTE2LjE3NzkzMzg2Nzg.*_ga_QPQ2NRV856*czE3Nzk0Mzk2NzgkbzckZzEkdDE3Nzk0NDA5OTYkajYwJGwwJGgw). Since the navigation library now understands the intent of your screens through metadata, it handles the heavy lifting for you, making implementation much more efficient. [Build adaptive UIs with Material components today](https://developer.android.com/develop/adaptive-apps)

#### Migrating from Views to Compose

We know how much you’ve built on Views, but there’s never been a better time to [migrate to Jetpack Compose](https://developer.android.com/develop/ui/compose/migrate/migrate-xml-views-to-jetpack-compose). Get started by migrating your apps screen-by-screen with our [new migration Android skill](https://github.com/android/skills), which you can use with Android Studio, Android CLI, or any other AI tool.

Stay tuned for more updates coming to Material Compose!

### Adding Motion Physics with Jetpack Compose

Source: https://m3.material.io/blog/m3-expressive-motion-theming


**[#data-origin-author]** (fig) **Rebecca Franks**, Developer Relations Engineer, Android

**[#data-origin-author]** (fig) **Austin Fisher**, Sr. UX Content Designer

**[#data-origin-author]** (fig) **Gus Sonoda**, Sr. Staff Motion Designer

Material Design has an exciting new preview release — [Material 3 Expressive](https://m3.material.io/blog/building-with-m3-expressive?utm_source=blog&utm_medium=referral&utm_campaign=IO25). In this latest version 1.4.0-alpha14 of Material 3, you get access to a new theming system: motion!

Previously, Material motion was defined through non-customizable easing and duration values. Today, we’re introducing a new, customizable motion scheme using motion physics defined through a set of motion properties. These can be customized or overridden as needed, giving you more control than ever over how motion works and feels in your product.

Read on to learn how the new motion physics scheme works, how existing APIs have changed, and how to get started.

#### Why Material motion?

As a product developer, you know that motion can significantly enhance the user experience. But achieving consistent motion across a complex app can be challenging. The new Material motion system solves this with:

- **Centralized control:** Define your motion theme once, and all Material Components and even your own custom components will inherit it, creating a unified and polished experience, eliminating scattered animation specs.
- **Simplified theming:** Stop fussing with individual duration or easing values. Choose from predefined schemes or create your own, using physics-based spring animations for a natural and engaging feel.
- **Adaptive animations:** Ensure that movement feels fast in the context of the device and adjusts based on user input since animations are not based on predefined time sets.

#### Getting setup

First, make sure you’re using the latest version of Compose Material 3:

If you do nothing more than update the Compose dependency, your apps will benefit from applying the standard motion scheme to all your uses of Material Components. But if you do want that extra bit of control, you can customize your scheme to suit your app.

*Note: When 1.4.0 goes to stable, the Material Expressive APIs will move to the next alpha (1.5.0-alphaX), and will no longer be available in 1.4.0. The APIs will go stable in the 1.5.0 release.*

#### Fundamentals of the motion system

##### Motion schemes: Expressive or Standard

The physics system has two preset motion schemes: **Expressive** and **Standard**. The scheme you choose will define how your product feels. While most motion in a product should use the same scheme, advanced customizations allow you to swap the scheme to emphasize key moments.

- **Expressive** is Material’s recommended motion scheme, and should be used for most situations, particularly hero moments and key interactions.
- **Standard,** with its small amount of bounce, feels more functional and should be used for utilitarian products.

(fig) Expressive: The Expressive motion scheme overshoots the final values to add bounce.

(fig) Standard: The Standard motion scheme eases into the final values.

#### Animation specs: Spatial or Effect

Two distinct kinds of specifications make up the motion scheme: **Spatial** animation specs and **Effect** animation specs.

**Spatial** specs are used to animate changes in an object's position, orientation, size, and shape. The spring overshoots the final value and bounces into place.

(fig) Spatial springs applied to movement.

(fig) Spatial springs applied to rotation.

**Effect** specs are used to animate an object’s properties such as color and opacity, where there shouldn’t be any overshoot.

(fig) Effects springs applied to opacity.

(fig) Effects springs applied to color.

Each animation can also have one of three speeds: **default**, **fast**, and **slow**. Most motion should use the default speed, but smaller elements may benefit from the fast speed and larger elements from the slow.

|  |  |  |
| --- | --- | --- |
| Speed | Spatial example | Effects example |
| Default | Animations that partially cover the screen, such as [bottom sheets](https://m3.material.io/components/bottom-sheets/overview) or [expanded navigation rails](https://m3.material.io/components/navigation-rail/overview) | Opacity of the content within a navigation rail |
| Fast | Animations for small components such as [switches](https://m3.material.io/components/switch/overview) and [buttons](https://m3.material.io/components/buttons/overview) | Color change of the switch handle |
| Slow | Full-screen [animations](https://m3.material.io/styles/motion/transitions/transition-patterns) | Full-screen content refresh |

**Speed tokens work across devices.** For example, the **Spatial “fast”** token will always be faster than **“default”** or **“slow,”** but the exact values of each token will differ depending on whether the device is a wearable, phone, or tablet. This ensures the movement feels fast in the context of the device. This also applies when using spring tokens in a custom motion scheme.

(fig) Effects motion in fast, default, and slow speeds

(fig) Spatial motion in fast, default, and slow speeds

Notice that the Expressive and Standard schemes are presets of opinionated motion values. This makes it easier to swap schemes without changing the underlying property names.

(fig) Expressive and Standard MotionScheme

#### Why use motion springs?

If you look at the predefined specifications on the motion schemes, you may notice that springs are used for the backing specifications. Why is this? Spring animations appear more natural by allowing for the ability to interrupt and retarget the animation when required.

For example, consider the difference between using tween and springs:

(fig) Tween interruptions.

(fig) Spring interruptions.

When interrupted and retargeted to a new destination, the spring animation uses its current velocity to perform a more seamless transition between the two states than tween.

It’s also beneficial to use springs to ensure your animations easily **adapt to different screen sizes**, as the tokens will always be slow or fast in the context of the device since it is not time that is specified but rather damping and stiffness. For more details on the benefits of springs, check out the [documentation](https://developer.android.com/develop/ui/compose/animation/customize?_gl=1*9ewdxh*_ga*MzI1NjMyOTExLjE3NjI0MTE3NDU.*_ga_QPQ2NRV856*czE3NzQzNDgyNDgkbzE3OCRnMCR0MTc3NDM0ODM1MCRqNjAkbDAkaDA.#spring?utm_source=blog&utm_medium=motion&utm_campaign=IO25).

#### Customizing your motion scheme

The real power of the new system lies in its flexibility. You can tailor the motion scheme to reflect your app’s brand or to underscore an important interaction.

##### Choosing between Standard and Expressive schemes

Most developers won’t want to change much in terms of motion theming, but there are two out-of-the-box options for you to choose from: Standard or Expressive. Choosing MaterialExpressiveTheme at the top level will default to the Expressive motion scheme.

Make this choice once for your application at the theme level, and any Material Components with movement built in will use the selected spec from the theme.

With the expressive() scheme your apps take on the Material-recommended motion scheme, whereas with the standard(), the motion is, well, pretty standard — there is a minimal amount of bounce, even as both use springs under the hood.

##### Creating your own Motion scheme

For more fine-grained control, you can create your own MotionScheme object and return a different AnimationSpec for each property.

In the code snippet below, we create a whole new playfulMotionScheme that by default adds a lot of bounce to components. This demonstrates how you can customize your MotionScheme.

(fig) FAB menu with an extra-stiff custom scheme.

(fig) FAB menu with very low stiffness custom scheme.

#### Custom component animations

To maintain consistency with other Material Components, ensure your custom components adopt the recommended motion changes and use the motion specs available through MaterialTheme.motionScheme.

For example, the following code uses tween() calls to animate the size and color of a text component when pressing and releasing its container:

Since scale represents a Spatial motion and color falls under Effects motion, we can leverage the motion scheme for consistent application. This approach aligns your component’s motion to the overall app experience and allows it to adapt automatically when switching between Standard and Expressive schemes/themes.

#### Individual Material Component changes

In the expressive update, most Material 3 components use the motion physics system by default.

To add the motion-physics system to other components, including those that are custom built, use the specifications from above. See the full [M3 Expressive announcement blog post](https://m3.material.io/blog/building-with-m3-expressive?utm_source=blog&utm_medium=motion&utm_campaign=IO25) for more details on the new components.

#### Get started today

Try out the new motion subsystem in Material 3 Expressive today, and let us know how you like it by tagging us on social media @GoogleDesign. If you find any issues, please file them on the [issue tracker](https://b.corp.google.com/issues/new?component=742043&template=1590761?utm_source=blog&utm_medium=referral&utm_campaign=IO25).

Happy theming!

*Special thanks to Material motion designers Gus Winkelman and Gustavo Gonzalez.*

#### Up next

### Start building with Material 3 Expressive

Source: https://m3.material.io/blog/building-with-m3-expressive


**[#data-origin-author]** (fig) **Material Design**

The world of UX design is constantly evolving, and you deserve the tools to create truly engaging and impactful experiences. That’s why Material Design’s latest evolution — Material 3 Expressive — provides new ways to make your product more engaging, easy to use, and desirable. Read on for a full introduction to the new components, motion physics, color updates, and more.

#### What’s Material 3 Expressive?

Today, people increasingly see their devices not as tools, but as extensions of themselves. Expressive interfaces have an emotional impact, fostering connection by evoking a feeling or mood through visual design and interaction. Material 3 Expressive is an evolution of the Material 3 design system. It’s a set of new features, updated components, and design tactics for creating emotionally impactful UX.

[We’ve learned](https://m3.material.io/blog/testing-material-3?utm_source=blog&utm_medium=referral&utm_campaign=IO25) that makers are looking for ways to improve their user experiences by creating better hierarchy, making the interface more useful, and establishing improved, more personal styles that connect emotionally with their users.

And to be clear — M3 Expressive isn’t a new version of the system. We’re not deprecating M3, and this isn’t “M4.”

#### The power of expressive design

M3 Expressive is our most researched update to the design system since its launch in 2014. Extensive user research — 46 studies with more than 18,000 participants — has helped ensure that this evolution isn’t just about aesthetics, but about truly enhancing your users’ experience. Our top research takeaways include:

1. Expressive designs are preferred by people of all ages.
2. Expressive designs consistently score higher on user attributes like playfulness, energy, creativity, and friendliness.
3. Users are more likely to switch to products that use M3 Expressive components and techniques.
4. Expressive designs are easier to use, with participants spotting key UI elements up to four times faster in expressive screens.

[Learn more about the Expressive research over on design.google.](https://design.google/library/expressive-material-design-google-research?utm_source=blog&utm_medium=referral&utm_campaign=IO25)

#### What’s in the update?

##### Expressive components

Fourteen new or updated components now feature more configuration capabilities, shape options, emphasized text, and other expressive updates.

(fig) Even the smallest elements matter. Use the new and updated expressive components to create more compelling user interfaces.

[App bars](https://m3.material.io/components/app-bars/overview?utm_source=blog&utm_medium=referral&utm_campaign=IO25)

[Button groups](https://m3.material.io/components/button-groups/overview?utm_source=blog&utm_medium=referral&utm_campaign=IO25) **new**

[Common buttons](https://m3.material.io/components/buttons/overview?utm_source=blog&utm_medium=referral&utm_campaign=IO25)

[Extended FAB](https://m3.material.io/components/extended-fab/overview?utm_source=blog&utm_medium=referral&utm_campaign=IO25)

[FAB menu](https://m3.material.io/components/fab-menu/overview?utm_source=blog&utm_medium=referral&utm_campaign=IO25) **new**

[FABs](https://m3.material.io/components/floating-action-button/overview?utm_source=blog&utm_medium=referral&utm_campaign=IO25)

[Icon buttons](https://m3.material.io/components/icon-buttons/overview?utm_source=blog&utm_medium=referral&utm_campaign=IO25)

[Loading indicator](https://m3.material.io/components/loading-indicator/overview?utm_source=blog&utm_medium=referral&utm_campaign=IO25) **new**

[Navigation bar](https://m3.material.io/components/navigation-bar/overview?utm_source=blog&utm_medium=referral&utm_campaign=IO25)

[Navigation rail](https://m3.material.io/components/navigation-rail/overview?utm_source=blog&utm_medium=referral&utm_campaign=IO25)

[Progress indicators](https://m3.material.io/components/progress-indicators/overview?utm_source=blog&utm_medium=referral&utm_campaign=IO25)

[Sliders](https://m3.material.io/components/sliders/overview?utm_source=blog&utm_medium=referral&utm_campaign=IO25)

[Split button](https://m3.material.io/components/split-button/overview?utm_source=blog&utm_medium=referral&utm_campaign=IO25) **new**

[Toolbars](https://m3.material.io/components/toolbars/overview?utm_source=blog&utm_medium=referral&utm_campaign=IO25) **new**

##### Expressive styles

###### Motion-physics system

A new system using motion springs makes interactions and transitions feel more alive, fluid, and natural.

Spatial springs mirror the physics of how objects actually move, making animations clear and predictable. Effects springs create seamless transitions for color and opacity changes.

[Learn more about motion](https://m3.material.io/styles/motion/overview?utm_source=blog&utm_medium=referral&utm_campaign=IO25)

(fig) Expressive motion springs create more natural animation effects.

###### Visually emphasized typography

New type styles for variable and static fonts can be used to express a range of emotional states, automatically adjust variables for readability, and support bold editorial layouts.

Emphasized typography reinforces the information hierarchy and draws attention to important actions, like “begin recording,” or information, like unread messages.

[Learn more about typography](https://m3.material.io/styles/typography/overview?utm_source=blog&utm_medium=referral&utm_campaign=IO25)

(fig) The updated type scale includes new emphasized text styles.

###### Expanded shape library

Use the new set of 35 shapes to add decorative detail for elements like image crops and avatars.

A built-in shape-morph animation allows smooth transitions from one shape to another. This can be dynamic, or as simple as a square changing to a circle.

[Learn more about shape](https://m3.material.io/styles/shape/overview?utm_source=blog&utm_medium=referral&utm_campaign=IO25)

(fig) The shape library has 35 iconic shapes, which can be used to add visual interest to decorative elements.

###### Vibrant color schemes

An expanded range of colors can be used to sharpen hierarchy and clarify key actions. Rich visual styles support personalization and dynamic colors.

[Learn more about color](https://m3.material.io/styles/color/system/overview?utm_source=blog&utm_medium=referral&utm_campaign=IO25)

(fig) The expressive color system can create a wide range of accessible palettes.

##### Expressive tactics

As Google products started using the new expressive features, we quickly established a set of design tactics to help guide the viewer’s attention to the most important elements of the screen. Each of these tactics represents one axis along which you can make your components, layouts, and products more expressive. While these tactics work for us, the beauty of this update is that makers have more flexibility with M3 than ever before, so we encourage you to play around with these elements and see what works for you.

###### 1. Use a variety of shapes

Shape can be a powerful communication tool in your interface. At the base level of visual design, the shapes of components, containers, and content set the tone for a user at first glance. Combining shapes and corner radii can create visual tension or cohesion and direct users’ focus in your app. Use a combination of classic and abstract shapes to create unique silhouettes or groupings. Use the shape library and the new corner-radii options to mix round and square shapes for tension and visual contrast.

**[CAUTION]** (fig) Smaller shapes can result in essential actions looking less important.

**[DO]** (fig) Break from the surrounding shape style to draw attention to a particular element.

###### 2. Apply rich and nuanced colors

Material’s dynamic color system already offers a range of colors for primary, secondary, and tertiary elements and surfaces. Mixing these colors for key components or visual elements can help emphasize the main takeaway of a screen. Create visual hierarchy with surface tones. Use contrast between primary, secondary, and tertiary color roles to prioritize actions and simplify navigation.

**[CAUTION]** (fig) Without contrast, elements can blend together.

**[DO]** (fig) Use contrast to emphasize the main takeaway or element.

###### 3. Guide attention with typography

Use emphasized text styles to draw attention to important UI elements, like headlines and actions. Create editorial-like moments in your app by emphasizing typography. Heavier weights, larger sizes, color, and spacing can direct attention and make key information more engaging. Using additional type styles from the Material type scale can help create appropriate hierarchy within and between blocks of content.

(fig) Expressive typography can enhance hierarchy and add personality.

###### 4. Contain content for emphasis

Organize content into logical groupings or containers. Give the most important content, tasks, or actions visual prominence through ample space and the brightest surface mapping. Consider using size, spacing, rhythm, similarity, or other grouping principles to make important elements more distinct.

**[CAUTION]** (fig) Ungrouped information can blend together.

**[DO]** (fig) Group similar content into informative groupings.

###### 5. Add fluid and natural motion

Make interactions feel alive and spirited through shape morph or surface effects. Apply the expressive motion springs or custom micro animations.

(fig) Examples of expressive motion in a range of apps and devices.

###### 6. Leverage component flexibility

UI should adapt to the user context. Shift components or controls depending on the environment to make completing tasks easier. Adapt content to foldable and large screens through custom tweaks or by applying canonical layouts.

(fig) Expressive app bars, toolbars, and buttons.

###### 7. Combine tactics to create hero moments

Hero moments use multiple expressive tactics to break from predictable or uniformly applied design ideas. They’re meant to make a stand-alone statement or frame essential information in a fresh, editorial way. Hero moments can be a focusing mechanism. Invest your time in making the most critical interactions sing; these moments are the heart of your product!

Hero moments are brief, delightful, surprising, and unexpected. Stick to one or two hero moments in your product; too many moments can be overwhelming or distracting.

To identify your hero moment, ask yourself:

1. **Is this interaction emotionally impactful?** Consider whether a design choice can highlight an emotional reaction or emphasize familiarity.
2. **Is this a key interaction in your product?** Think about whether a detail or flow can be emphasized for clarity. Guide the user’s attention by making an important button dominant, or emphasizing key information.

(fig) Examples of expressive apps on tablet and phone.

#### Handy links

[Updated guidelines](https://m3.material.io/?utm_source=blog&utm_medium=referral&utm_campaign=IO25)

[Updated Figma Design Kit](https://goo.gle/42etJvz)

[Alpha code for Jetpack Compose](https://goo.gle/3EvFB31)

#### What’s next?

We’re always happy to see excitement in the community about what we’re building — the updates we’re working on have been our passion project as we work toward a more dynamic and expressive system. Share your M3 Expressive work with the hashtag #M3Expressive and tag @googledesign on [Instagram](https://www.instagram.com/googledesign/) and [X](https://x.com/googledesign). Keep in touch.

