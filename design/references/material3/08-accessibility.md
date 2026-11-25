# 08 — Accessibility (consolidated)

Primary sources: https://m3.material.io/foundations/overview/principles · https://m3.material.io/foundations/overview/assistive-technology · https://m3.material.io/foundations/designing/overview · …/color-contrast · …/structure · …/flow · …/elements · https://m3.material.io/foundations/writing/best-practices · …/text-truncation · …/text-resizing · https://m3.material.io/foundations/building-for-all/user-needs · …/co-design · alt text: https://m3.material.io/foundations/content-design/alt-text
Plus every component's **Accessibility** tab (verbatim in each 09-components file, §5). Accessed 2026-10-09.

## Essentials
- "Accessibility by default is a core design value for Material." Principles: **Honor individuals**, **Learn before, not after**, **Requirements as a starting point** (WCAG minimums as a starting point). (principles)
- **Contrast** (designing/color-contrast): small text at least 4.5:1 against the background; large text (14pt bold / 18pt regular and up) and graphics at least 3:1. Non-text elements such as button containers "should meet a contrast ratio of 3:1" against their background — except standalone prominent elements such as FABs, which "don't need to meet Material's minimum contrast of 3:1 between the container and background colors because of their prominence." In clusters, each component should achieve at least 3:1 against the background.
- **Touch targets** (designing/elements): "For most platforms, consider making touch targets at least 48 x 48dp" (≈9mm; recommended 7–10mm). An icon may appear 24×24dp with padding forming a 48×48dp target.
- Color roles are built on accessible pairings (min 3:1); use roles only in intended pairs (03-color). Three contrast levels are tokenized (standard/medium/high).
- States use two visual indicators (10). Focus indicator tokens: 3dp thick, 2dp outer offset.
- Text resizing: spacing should be preserved when text scales to 200% (styles/spacing/applying-spacing); see writing/text-resizing and text-truncation in the appendix.
- For each component, the Accessibility tab defines keyboard navigation, screen-reader labels/roles, and focus behaviour — consult the component file; do not generalize from one component to another.

### Component accessibility tabs (verbatim in each component file, §5)
| Component file | Site Accessibility tab |
|---|---|
| [app-bars](09-components/app-bars.md) | https://m3.material.io/components/app-bars/accessibility |
| [badges](09-components/badges.md) | https://m3.material.io/components/badges/accessibility |
| [bottom-sheets](09-components/bottom-sheets.md) | https://m3.material.io/components/bottom-sheets/accessibility |
| [button-groups](09-components/button-groups.md) | https://m3.material.io/components/button-groups/accessibility |
| [buttons](09-components/buttons.md) | https://m3.material.io/components/buttons/accessibility |
| [cards](09-components/cards.md) | https://m3.material.io/components/cards/accessibility |
| [carousel](09-components/carousel.md) | https://m3.material.io/components/carousel/accessibility |
| [checkbox](09-components/checkbox.md) | https://m3.material.io/components/checkbox/accessibility |
| [chips](09-components/chips.md) | https://m3.material.io/components/chips/accessibility |
| [date-pickers](09-components/date-pickers.md) | https://m3.material.io/components/date-pickers/accessibility |
| [dialogs](09-components/dialogs.md) | https://m3.material.io/components/dialogs/accessibility |
| [divider](09-components/divider.md) | https://m3.material.io/components/divider/accessibility |
| [extended-fab](09-components/extended-fab.md) | https://m3.material.io/components/extended-fab/accessibility |
| [fab-menu](09-components/fab-menu.md) | https://m3.material.io/components/fab-menu/accessibility |
| [floating-action-button](09-components/floating-action-button.md) | https://m3.material.io/components/floating-action-button/accessibility |
| [icon-buttons](09-components/icon-buttons.md) | https://m3.material.io/components/icon-buttons/accessibility |
| [lists](09-components/lists.md) | https://m3.material.io/components/lists/accessibility |
| [loading-indicator](09-components/loading-indicator.md) | https://m3.material.io/components/loading-indicator/accessibility |
| [menus](09-components/menus.md) | https://m3.material.io/components/menus/accessibility |
| [navigation-bar](09-components/navigation-bar.md) | https://m3.material.io/components/navigation-bar/accessibility |
| [navigation-drawer](09-components/navigation-drawer.md) | https://m3.material.io/components/navigation-drawer/accessibility |
| [navigation-rail](09-components/navigation-rail.md) | https://m3.material.io/components/navigation-rail/accessibility |
| [progress-indicators](09-components/progress-indicators.md) | https://m3.material.io/components/progress-indicators/accessibility |
| [radio-button](09-components/radio-button.md) | https://m3.material.io/components/radio-button/accessibility |
| [search](09-components/search.md) | https://m3.material.io/components/search/accessibility |
| [segmented-buttons](09-components/segmented-buttons.md) | https://m3.material.io/components/segmented-buttons/accessibility |
| [side-sheets](09-components/side-sheets.md) | https://m3.material.io/components/side-sheets/accessibility |
| [sliders](09-components/sliders.md) | https://m3.material.io/components/sliders/accessibility |
| [snackbar](09-components/snackbar.md) | https://m3.material.io/components/snackbar/accessibility |
| [split-button](09-components/split-button.md) | https://m3.material.io/components/split-button/accessibility |
| [switch](09-components/switch.md) | https://m3.material.io/components/switch/accessibility |
| [tabs](09-components/tabs.md) | https://m3.material.io/components/tabs/accessibility |
| [text-fields](09-components/text-fields.md) | https://m3.material.io/components/text-fields/accessibility |
| [time-pickers](09-components/time-pickers.md) | https://m3.material.io/components/time-pickers/accessibility |
| [toolbars](09-components/toolbars.md) | https://m3.material.io/components/toolbars/accessibility |
| [tooltips](09-components/tooltips.md) | https://m3.material.io/components/tooltips/accessibility |

Web-specific accessibility points (48x48 CSS pixel targets, ARIA roles, landmarks and headings, Tab-key focus, reduced motion) are collected in [MATERIAL_3_AGENT_INSTRUCTIONS.md](MATERIAL_3_AGENT_INSTRUCTIONS.md) §15.


---

## Source pages in scope

| Page | URL | Site content timestamp | Do | Don't | Caution |
|---|---|---|---|---|---|
| Overview — Principles | https://m3.material.io/foundations/overview/principles | 2026-07-17T05:27:26.725Z | 0 | 0 | 0 |
| Overview — Assistive technology | https://m3.material.io/foundations/overview/assistive-technology | 2026-07-17T05:27:26.725Z | 0 | 0 | 0 |
| Designing — Overview | https://m3.material.io/foundations/designing/overview | 2026-07-17T05:01:47.617Z | 1 | 1 | 0 |
| Designing — Color contrast | https://m3.material.io/foundations/designing/color-contrast | 2026-07-17T05:01:47.617Z | 0 | 0 | 0 |
| Designing — Structure | https://m3.material.io/foundations/designing/structure | 2026-07-17T05:01:47.617Z | 0 | 0 | 0 |
| Designing — Flow | https://m3.material.io/foundations/designing/flow | 2026-07-17T05:01:47.617Z | 0 | 0 | 0 |
| Designing — Elements | https://m3.material.io/foundations/designing/elements | 2026-07-17T05:01:47.617Z | 1 | 2 | 0 |
| Writing and text — Best practices | https://m3.material.io/foundations/writing/best-practices | 2026-07-17T05:36:35.129Z | 2 | 0 | 1 |
| Writing and text — Text truncation | https://m3.material.io/foundations/writing/text-truncation | 2026-07-17T05:36:35.129Z | 3 | 3 | 0 |
| Writing and text — Text resizing | https://m3.material.io/foundations/writing/text-resizing | 2026-07-17T05:36:35.129Z | 1 | 1 | 0 |
| Building for all — User needs | https://m3.material.io/foundations/building-for-all/user-needs | 2026-07-17T04:57:38.755Z | 0 | 0 | 0 |
| Building for all — Co-design | https://m3.material.io/foundations/building-for-all/co-design | 2026-07-17T04:57:38.755Z | 0 | 0 | 0 |

## Verbatim rule index (every Do / Don't / Caution caption on the pages above)


**Designing — Overview** — https://m3.material.io/foundations/designing/overview

- **[DO]** (fig) Use native elements, such as the standard platform dialog
- **[DON'T]** (fig) Be wary of using non-standard elements, such as a non-standard platform dialog to perform a standard dialog task. It requires extra testing to work well with assistive technology.

**Designing — Elements** — https://m3.material.io/foundations/designing/elements

- **[DO]** (fig) The label “voice search” describes the user task (search) paired with the input method (voice)
- **[DON'T]** (fig) Don't include the element type (button, menu, etc.) in your label. This will automatically be added by assigning the element the proper role.
- **[DON'T]** (fig) Don't include the control type in the label. Screen readers automatically add the control, so you’d be having it repeat (for example, “Got it button button”).

**Writing and text — Best practices** — https://m3.material.io/foundations/writing/best-practices

- **[DO]** (fig) Use captions to help readers understand how the image relates to the content
- **[CAUTION]** (fig) Take caution when embedding essential information anywhere a screenreader can't access, like text inside an image
- **[DO]** (fig) Use alt text to convey what the image is showing in an informative, short phrase.

**Writing and text — Text truncation** — https://m3.material.io/foundations/writing/text-truncation

- **[DO]** (fig) Wrap text, and if it still doesn’t fit, provide a way for users to see more
- **[DON'T]** (fig) Don’t cut off text without providing a way for users to view it
- **[DO]** (fig) Use flexible component containers that change size to fit their content
- **[DON'T]** (fig) Avoid setting text size limits that don’t fit the space in a component. Use all space available.
- **[DO]** (fig) Use links to reveal truncated text when space is limited, such as the ability to click a linked card to see an expanded view of its text
- **[DON'T]** (fig) Don’t truncate content without providing users another way to see it

**Writing and text — Text resizing** — https://m3.material.io/foundations/writing/text-resizing

- **[DON'T]** (fig) When designing for text resizing, don't resize components without text
- **[DO]** (fig) Scale up text in an adjacent tooltip to maintain space in a UI for consuming content.

## Appendix — verbatim page text (digest: text, tables and figure captions; image-only content represented by captions)

### Overview — Principles

Source: https://m3.material.io/foundations/overview/principles


#### Accessibility & Material Design

**Accessibility by default** is a core design value for Material. Material's accessibility requirements and goals are documented across component pages and guidelines. Understanding your product’s accessibility can enhance usability for all users, including those with low vision, blindness, hearing impairments, cognitive impairments, motor impairments, or situational disabilities (such as a broken arm).

Accessibility standards are built into Material components, providing a foundation for inclusive product design. Anticipating a wide range of human experiences and disabilities prevents costly redesigns, reduces tech and design debt, and conserves resources upfront.

#### Principles for accessible design

The following principles for accessible design are approaches that can help **anticipate, include, and respond to the needs of individuals**. They're considerations for design, development, collaboration, and co-creation that encourage inclusive and equitable outcomes.

##### Honor individuals

Universal default experiences rarely meet everyone’s needs. Introducing customizable features in a default experience allows room for individual adaptation. Honoring the shifting needs of any person can mean giving more freedom to choose things for themselves.

Because a person's experience throughout their day, or year, or life can continue to change, it helps to support varying preferences and choices that allow individuals to address how their changing conditions, individual knowledge, and varying needs are met.

##### Learn before, not after

Before defining solutions, invest time in understanding the needs of users with a wide range of abilities and life experiences. Formal and informal research can open new ways of thinking, reduce biases, and encourage creative ways to make access available, especially to those who fall outside prevailing norms.

Accessible design processes anticipate as many potential product or experience outcomes as possible upfront. When user problems do arise, exploring the unanticipated outcomes can become a research foundation for learning, adapting, and recovering thoughtfully.

##### Requirements as a starting point

The minimum requirements established by [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/) support specific human needs. However, these requirements can produce creative solutions with broad benefits.

History has shown that features originating from responses to specific access needs (dark mode, text-to-speech, speech-to-text) are a result of creative problem-solving within specified constraints. Seeing the requirements as opportunities, rather than constraints, has been shown to lead to solutions that ultimately serve many.

### Overview — Assistive technology

Source: https://m3.material.io/foundations/overview/assistive-technology


#### Assistive technology

Assistive technology helps increase, maintain, or improve the functional capabilities of individuals with disabilities. People can live more independently by engaging with technology through devices like keyboards, screen readers, and braille displays, as well as tracking input, magnifiers, and voice input.

(fig) Icons are one example of interactive elements that require an understanding of different input methods and user needs. In this example the target area of the icon is identified to show how the expanded icon perimeter makes interacting with an action more accessible.

##### Common forms of assistive technologies

###### **Keyboard**

Hardware or software directional controllers such as keyboards, a D-pad, or trackball allow users to jump from selection to selection in a linear fashion.

###### **Screen readers**

A screen reader is a software program that uses either a braille display or reads text aloud, such as Google’s screen reader, TalkBack. People with vision impairments, experiencing difficulty reading, or who temporarily can’t read might use a screen reader. Screen readers verbalize visible content and read it aloud. Paragraph and button text, as well as hidden content like alternative text for icons and headings, are identified by the program. Content can be labeled to optimize the experience for those who use screen readers or experience a text-only version of your UI.

###### **Switch input**

Switches scan the items on your screen, highlighting each item in turn, until you make a selection. Switch Access lets you interact with your Android device using one or more switches instead of the touchscreen.

### Designing — Overview

Source: https://m3.material.io/foundations/designing/overview


Designing and implementing accessible product experiences involve a range of considerations. The framework Material uses draws on WCAG standards and industry best practices.

The three stages described in these tabs help **translate a visual UI into a text-based, linear user experience that maps to code**. Color and contrast also support accessible navigation.

##### Accessibility markup

Accessibility markup is an integral part of creating documentation for design specs.

(fig) > 1. Switch in the on state with visible focus

> 2. Switch in the off state with visible focus

##### Implementing accessibility

By using standard platform controls and semantic HTML (on the web), apps automatically contain the markup and code needed to work well with a platform’s assistive technology. Meeting each platform's accessibility standards and supporting its assistive technology (including shortcuts and structure) gives users an efficient experience.

**[DO]** (fig) Use native elements, such as the standard platform dialog

**[DON'T]** (fig) Be wary of using non-standard elements, such as a non-standard platform dialog to perform a standard dialog task. It requires extra testing to work well with assistive technology.

### Designing — Color contrast

Source: https://m3.material.io/foundations/designing/color-contrast


#### Color & contrast

Color and contrast can be used to help users see and interpret your app’s content, interact with the right elements, and understand actions.

Color can help communicate mood, tone, and critical information. Primary, secondary, and accent colors can be selected to support usability. Sufficient color contrast between elements can help users with low vision see and use your app.

##### Contrast ratios

Color contrast is important for users to distinguish various text and non-text elements. Higher contrast makes the imagery easier to see, while low-contrast images may be difficult for some users to differentiate in bright or low light conditions, such as on a very sunny day or at night.

Contrast ratios represent how different one color is from another color, commonly written as 1:1 or 21:1. The greater the difference is between the two numbers in the ratio, the greater the difference in relative luminance between the colors. The contrast ratio between a color and its background ranges from 1-21 based on its luminance (the intensity of light emitted) according to the World Wide Web Consortium (W3C).

**The W3C recommends the following contrasts for body text and image text**

| Text type | Color contrast ratio |
| --- | --- |
| Large text (at 14 pt bold/18 pt regular and up) and graphics | At least 3:1 against the background |
| Small text | At least 4.5:1 against the background |

Disabled states do not need to meet contrast requirements.

##### Clustering elements

Some non-text elements, such as button containers, should meet a contrast ratio of 3:1 between their container color and the color of their background. Consider the following patterns for combining elements and tones, which are grounded in Material's research into contrast and functional changes when elements are combined.

[Learn more about color contrast for accessibility](https://m3.material.io/styles/color/system/how-the-system-works#e1e92a3b-8702-46b6-8132-58321aa600bd)

Elements that are clustered with others, such as a group of buttons, require the user to distinguish each one from the group.

These elements benefit from 3:1 contrast between themselves and the background.

(fig) The contrast of the button container color against the background color is less than Material's required contrast of 3:1

(fig) The container color exceeds Material's required minimum contrast of 3:1 against background color

Elements that stand on their own and apart from other elements on the screen, such as a FAB, are already distinguishable to users because of their prominence. These elements don’t benefit from 3:1 contrast between themselves and the background.

(fig) Standalone components, such as FABs, don’t need to meet Material's minimum contrast of 3:1 between the container and background colors because of their prominence

When placing components together in a cluster, use components or types of components that each achieve at least 3:1 contrast between themselves and the background.

(fig) Each button's container color has less than Material's required minimum contrast of 3:1 against the UI background, leading to poor contrast support for users with low vision

(fig) Each button's container color has contrast of at least 3:1 against the UI background, leading to better contrast support for users with low vision

### Designing — Structure

Source: https://m3.material.io/foundations/designing/structure


#### Hierarchy

When navigation is easy, users understand where they are in your app and what’s important. To emphasize which information is important, multiple visual and textual cues like color, shape, text, and motion add clarity.

##### Types of feedback

Visual feedback (such as labels, colors, and icons) and touch feedback show users what is available in the UI.

##### Navigation

Navigation can have clear task flows with minimal steps, easy-to-locate controls and clear labeling. Focus control, or the ability to control keyboard and reading focus, can be implemented for frequently used tasks.

Every added button, image, and line of text increases the complexity of a UI. **Y****ou can simplify how your UI is understood by using:**

- Clearly visible elements
- Sufficient contrast and size
- A clear hierarchy of importance
- Key information that is discernable at a glance

##### Levels of importance

**To convey an item’s relative level of importance:**

- Place important actions at the top or bottom of the screen (reachable with shortcuts)
- Place related items of a similar hierarchy next to each other

##### Visual hierarchy

To enable the screen reader to read out content in the intended order, it’s important for designers to collaborate with developers – both for writing out the HTML in the correct order, and understanding how screen readers will interpret designs.

While CSS determines the layout and appearance of a page, screen readers rely on the top-down structure of HTML on any platform (mobile or web). This structure creates a map for the screen reader to follow when reading the content.

(fig) An example of how content hierarchy in a screen can be identified in a logical reading order to optimize for the ways assistive tech, such as screen readers, may interpret information

#### Web landmarks and headings

**Define content and UI layout to improve navigation and comprehension.**

Assistive technologies (AT) rely on clear, delineated structures to process page information, navigating primarily through the use of headings and landmarks. Many assistive technologies, such as screen readers, translate a design into a linear experience, which means that many users interact with content in hierarchical, predetermined order. Therefore, thinking through structural decisions in advance can improve the accessibility of a product.

**For web only**: Landmarks and headings help assistive-technology users orient themselves to a web page and allow for easy navigation and traversal across large sections of a document or page.

By **classifying and labeling sections of a page**, structural information that is conveyed visually through layout design can also be represented in code.

(fig) Example of a page diagram mapping the areas for a UI in order to consider the relative landmarks and headings

##### Identifying landmarks and headings

###### **1. Define landmarks**

Landmarks are large blocks of content that establish the high-level structure of your layout. They're a set of Accessible Rich Internet Applications (ARIA) roles that provide easy access to, and important meaning for, common content areas of a web page.

There are eight landmark roles: **navigation, search, main, banner, complementary, contentinfo, region, and form**.

The eight landmark roles in the W3C ARIA guidelines include:

1. **Navigation**: Contains lists of navigation links (there can be multiple, in which case you should differentiate in label)
2. **Search**: A search field
3. **Main**: The main content area as defined by UX. There should be only one.
4. **Banner**: Typically the header; content repeated from page to page, often contains navigation and toolbars. There should be only one.
5. **Complementary**: A sidebar or aside to main content that can stand alone without the main content
6. **Contentinfo**: Typically the footer; contains information describing the site and its content (for example,  copyright). There should be only one.
7. **Region**: Content regions are important content blocks. They can be nested inside the “main” landmark. Regions should be labeled with names that make the purpose of that region clear.
8. **Form**: Takes and stores user info.

###### **Add accessibility labels**

Add **clear and specific labels** to any landmark roles that appear multiple times (regions or navigation typically). This will help users differentiate information.

Labels should be added to **all regions**, as well as any landmark where a label will enhance meaning. For example, explaining the contents or purpose of a sidebar.

**Don't repeat the landmark role within a label**.

(fig) This layout has two areas assigned the navigation role. Each landmark should get a unique label to help users tell the difference between elements.

###### **2. Define headings**

Assistive technology users often navigate web pages with the help of headings. They create a clear hierarchy to help users navigate and take action.

- Identify headings based on content hierarchy, rather than visual styling
- Headings should not skip a level, for example, don't go from H2 to H4 without using an H3
- Map content on your pages to headings (H1–H6) in sequential order based on the hierarchy of your content
- A single H1 for the page title is recommended

(fig) Example of headings marked up in code

###### **Consider hierarchy in addition to style**

**Ensure that headings correspond with meaningful titles**. If they don't, consider changing the titles in the UI to benefit the experience of all users or adding a label for assistive tech.

Heading levels are informed by the layout's information architecture—the structural hierarchy that’s applied to a set of items. The page’s visual styling does not need to match the heading levels in terms of prominence and visual hierarchy.

#### Target sizes

Material Design’s target guidelines can help users who aren’t able to see the screen, or who have difficulty with small touch targets, to tap elements in your app.

##### Touch and pointer target sizes

Touch targets are the parts of the screen that respond to user input, extending beyond the visual bounds of an element. For example, an icon may appear to be 24 x 24dp, but the padding surrounding it comprises the full 48 x 48dp touch target.

For most platforms, consider making touch targets at least 48 x 48dp. A touch target this size results in a physical size of about 9mm, regardless of screen size. The recommended target size for touchscreen elements is 7-10mm. It may be appropriate to use larger touch targets to accommodate a larger spectrum of users.

Note: iOS recommends 44 x 44dp targets.

(fig) Icons: 24dp

Star icon: 40dp

Touch target on both: 48dp

##### Pointer targets

Pointer targets are similar to touch targets, but are implemented by motion-tracking pointer devices such as a mouse or a stylus.

Consider making pointer targets minimums 44 x 44dp.

(fig) Recommended target size for pointers: 44dp

##### Target spacing

In most cases, targets separated by 8dp of space or more promote balanced information density and usability.

(fig) Two groups of icons showing their overall spacing and the spacing between each other

Touch target size: 48dp

Padding: 8dp

### Designing — Flow

Source: https://m3.material.io/foundations/designing/flow


#### Focus order & key traversal

People should be able to navigate and interact with your app without the use of a traditional mouse or touch screen. To support navigation by keyboard, screen reader, or other assistive technology, goals should be achievable by using **tab**, **arrow**, **and other common navigation keys**.

Simplify your flows by:

- strategically ordering tab stops
- reducing overall page complexity

##### Use defaults

Avoid adding more work for yourself by using **predefined tab ordering,** unless a user journey needs special tailoring. The **default order follows the DOM** (the order of content as it's written in the source code) and **generally flows from left to right**; **top to bottom**. Keyboard navigation (key traversal) may be pre-defined within common components. Use the defaults unless you have a UX pattern or custom component that breaks from the default pattern.

##### Determining user flows

###### **1. Group product use cases**

Group product use cases into primary and secondary user journeys. The priority of your use cases should influence the decisions you make about the priority of user flows.

###### **2. Define initial focus and component-level focus**

Focus refers to which control is currently the active target of user interactions, such as mouse clicks or keyboard taps. Generally, the **tab** key moves focus between interactive elements.

Define the **initial focus** when a user loads a screen, as well as initial focus for components with multiple interactive elements, like a complex card or a dialog.

(fig) In the case of the Google homepage, even though there are links and buttons above and surrounding the search field on the page, it makes sense to put the user's initial focus on the element that supports the most common user goal

Focus is particularly important when an element is activated by the user or the user changes context.

For example, when a dialog is triggered, check for the following:

- Focus is set to the dialog component, likely to a specific interactive element within the dialog such as a text input field or edit button
- When the user closes or cancels the dialog, focus returns to the interactive element that initiated the action

(fig) 1. Define initial focus and component-level focus

###### **3. Define any atypical key traversal through the page and components**

Users should be able to complete the primary and secondary user journeys using tab, arrow keys, and other keyboard shortcuts.

(fig) Navigating the interactive elements on a card via tab

**Tab** typically moves focus between interactive elements and is often used as primary navigation. **Tab +** **Shift** reverses direction.

**Arrow keys** are typically used to navigate within components (for example, moving between cells in a form or traversing items in a menu.)

**Enter** activates a link or button, or sends a form when a form item has focus.

(fig) In the case of unique layouts and use cases, it can help to group a collection of interactive elements as one tab stop, and use arrow keys to traverse sub-elements

1. Using Tab navigation to focus group
2. Using arrrow key to traverse sub-elements

#### Keyboard shortcuts

Keyboard shortcuts help users access menus and app functions without using a mouse on desktop apps and websites.

##### Requirements

These requirements are important for helping speech users avoid activating multiple shortcuts at once and for keyboard-only users to minimize unwanted actions.

- Keyboard shortcuts should use a combination of two or more keys by default.
- Include a tutorial, list, or help center page of all custom keyboard shortcuts in your product. For example, Cmd+Z (Ctrl+Z) to undo deleting an event in Google Calendar.
- If a keyboard shortcut is activated with a single key, provide users with a way to take at least one of these actions:
  - **(Most preferred)**Remap the shortcut to include one or more non-printable keyboard keys.
  - **(Preferred)** Activate the shortcut only when a relevant component is focused.
  - **(Not preferred, only use as a temporary solution)** Turn off the keyboard shortcut.

### Designing — Elements

Source: https://m3.material.io/foundations/designing/elements


#### Labeling elements

Elements can be defined and labeled to enhance understanding of their function and reduce confusion for those navigating with assistive technology. Add accessibility labels to define roles and indicate decorative elements.

##### Visual elements that need labels

- Interactive icons or buttons with no visible text or not enough context in the text (for example, an edit button with a pencil icon)
- Interactive images
- Visual cues (including progress bars and error handling)
- Meaningful icons (such as status icons)
- Meaningful images (for example, diagrams, substantive photos, and illustrations)

##### Text elements need labels to add additional context

- Generic links (for example, "Learn more")
- Buttons with generic text (for example, "Save" when there are multiple such buttons on a page)

##### Elements that do not need labels

- Non-interactive UI text, as this will be automatically read by the screen reader
- Buttons with sufficient text (for example, "Download image")

##### Do not include the element name in labels

Do not use an element role (for example, button or menu) in your label. This identifier is automatically added when the element is assigned its proper role, typically by a developer.

##### Label language style

This article uses the general term accessibility label to refer to several different types, including ARIA labels and alt tags. When accessibility labels are implemented in code, they'll be translated to the appropriate type for the intended platform. Additionally, the term **role** is used to cover both general component control types and ARIA roles for web apps. [Learn more about writing alt text](https://m3.material.io/foundations/content-design/alt-text)

##### How to add labels

###### **1. Label elements**

[Accessibility labels](https://m3.material.io/foundations/content-design/alt-text) assist users who cannot rely on a product's visual interface. Thoughtful labels help make the text-based experience as usable as the visual experience. Labels should concisely describe an element's content, purpose and behavior.

(fig) Example: The accessibility labels for these icons describe their purpose—NOT what the icon looks like (for example, "magnifying glass")

###### **2. Add labels for meaningful images and interactive elements**

Add labels to visuals that convey meaning or enhance content.

**Labels should be concise, descriptive, and convey the content and context of the image.**

This applies to infographics and other instructive images found in support docs.

**[DO]** (fig) The label “voice search” describes the user task (search) paired with the input method (voice)

**[DON'T]** (fig) Don't include the element type (button, menu, etc.) in your label. This will automatically be added by assigning the element the proper role.

###### **Hiding images**

Decorative icons and images that don't enhance the experience for a visually-impaired user should be annotated as decorative in order to hide them in code.

(fig) Mark decorative visual elements to "hide"

###### **3. Assign a role to interactive elements**

ARIA roles apply to web apps and specify how to increase the accessibility of web pages on top of HTML.

- For web, assign ARIA roles for all interactive elements
- For non-web, assign roles based on your design system components (button, slider, menu, etc.)

Assign ARIA roles (web) or component type (mobile) to communicate desired interaction patterns into engineering action. Note that some visual elements may look the same, but are intended to behave differently.

Defining an interactive element's category by assigning it a role helps users of assistive technology establish expectations for how to interact with that element and anticipate what is likely to happen upon interaction.

**[DON'T]** (fig) Don't include the control type in the label. Screen readers automatically add the control, so you’d be having it repeat (for example, “Got it button button”).

### Writing and text — Best practices

Source: https://m3.material.io/foundations/writing/best-practices


#### Accessibility text

Accessibility text refers to text that is used by screen reader accessibility software, such as Google’s TalkBack on Android, Apple’s VoiceOver on iOS, and Freedom Scientific’s JAWS on desktop. Screen readers read aloud the on-screen text and elements (such as buttons), including both visible and nonvisible alternative text.

##### Adjacent text

To make an image more accessible, the text in and around images should consider presenting key information about the image.

(fig) 1. Image
2. Caption
3. Adjacent text

##### Captions

Captions are the text that appear below an image. They explain contextual information about the image to help the reader understand how it relates to the content. Both sighted and screen reader users rely on captions for descriptions of images.

**[DO]** (fig) Use captions to help readers understand how the image relates to the content

##### Embedded text in images

Screen readers are unable to read text that is embedded in imagery. If there is essential information embedded as text in the image, include the essential information in the [alt text](https://m3.material.io/foundations/content-design/alt-text).

**[CAUTION]** (fig) Take caution when embedding essential information anywhere a screenreader can't access, like text inside an image

##### Alternative text (Alt text)

Alt text helps translate a visual UI into a text-based UI. Alt text is a short label (up to 125 characters) in the code that describes an image for users who are unable to see them. Since alt text is only for images, there is no need to add “image of” or “picture of” to the alt text. A screen reader will read the alt text aloud in place of the image.

Alt text is valuable for sighted users, as well, because alt text appears if an image fails to load. Include targeted keywords to help inform the user about the image. Keywords can also improve search engine optimization (SEO).

[Learn more about writing alt text](https://m3.material.io/foundations/content-design/alt-text)

**[DO]** (fig) Use alt text to convey what the image is showing in an informative, short phrase.
Alt text example: A DJ performs a set under lights and lasers

#### Text color

##### Essential and non-essential elements

Informative images have essential and non-essential elements. Essential information should have a 3:1 minimum color contrast for large text and 4.5:1 for small text.

(fig) The illustration contains both essential and non-essential information:

1. Essential: The text meets all contrast ratios and size requirements
2. Essential: An illustrative visual representation of the instructions that follows color contrast guidelines
3. Non-essential: The decorative elements create background and personality for the illustration. They do not relay information and do not have to meet Material's contrast requirements.

### Writing and text — Text truncation

Source: https://m3.material.io/foundations/writing/text-truncation


#### Text truncation

Information should always be available to readers, even if text is truncated or wrapped.

##### Background

Increased size of text, increased spacing between text, and translation into longer languages shouldn’t result in losing content. This requires designing for text truncation and creating designs flexible enough to accommodate any viewport size or increase in zoom. Some common methods of designing for larger text include text wrapping, increased height or width of components, and truncation with ellipses and hover or link.

##### Requirements

Content, understandability, and functionality must not be lost when users modify their type settings. There may be exceptions to these requirements for non-Latin alphabet languages.

##### Text wrapping

- “Wrapped” text extends from one line to another, increasing the height of the text container
- Text should be wrapped when it’s critical, to ensure understandability, or when there’s space in the component

**[DO]** (fig) Wrap text, and if it still doesn’t fit, provide a way for users to see more

**[DON'T]** (fig) Don’t cut off text without providing a way for users to view it

##### Height and width of components

- Some components can extend vertically or horizontally for more text

**[DO]** (fig) Use flexible component containers that change size to fit their content

**[DON'T]** (fig) Avoid setting text size limits that don’t fit the space in a component. Use all space available.

##### Ellipses with hover or link

- Truncated text can be replaced with an ellipsis if the text is available through a tooltip or link
- Links can be used when they’re contained in the text that’s truncated, and when the link displays what's been truncated
- If there's an ellipsis, but no way to show the truncated text, it is not accessible
- Note that this option can add difficulty for some people

**[DO]** (fig) Use links to reveal truncated text when space is limited, such as the ability to click a linked card to see an expanded view of its text

**[DON'T]** (fig) Don’t truncate content without providing users another way to see it

### Writing and text — Text resizing

Source: https://m3.material.io/foundations/writing/text-resizing


#### Text resizing

##### Background

People with low vision or those who prefer large text must be able to scale up the size of text in a UI. This adjustment is often performed through a device OS setting or in-app option.

UIs should support a minimum text increase of 200%.

Most components behave the same when text is resized:

- Text and line height scale up proportionally, multiplied by scale value
- Padding remains constant at 1x the default size
- Spacing between elements in a component remain constant at 1x the default size

(fig) Button text displayed at 1x, 1.3x, and 2x scales. All have top and bottom padding of 8dp.

(fig) Left and right padding remains constant at 24dp as the text size increases.

When text resizing isn't controlled by the device OS, offer multipliers such as 1.5x or 2x to allow users to increase the text size. Using multipliers to scale text can result in values with decimals, but this approach is more feasible for implementation.

To calculate a font's size using multipliers, take the **default****font size** (density = 0) and **multiply it by the scale value**.

(fig) For example, if a font is 14pt at 1x scale, then the font size should be 28pt when enlarged to 2x scale: (14pt) x (scale value 2) = 28.

Components that don't include text, like progress indicators, checkboxes, or radio buttons, aren't affected by text resizing.

**[DON'T]** (fig) When designing for text resizing, don't resize components without text

(fig) UI text displayed at 1x

(fig) UI text displayed at 2x in which only text and line height is enlarged; the padding between components remains the same as in the 1x UI.

##### Designing for large type

Large type is used regularly by people with low vision and those with difficulty processing written words. They tend to increase text size:

- To make it easier to read
- To limit interruptions and focus on one task
- To avoid overwhelming their senses

Use these methods to design a product to handle large type properly.

(fig) Text that is too small and dense can appear overwhelming and difficult to read

(fig) Larger text can help people focus on one decision at a time and improve understanding

##### Methods

Avoid common text resizing issues by increasing container size, reflowing layout, enabling scrolling, and adding tooltips.

(fig) 1. Unresponsive container; unintentionally clipped text
2. Unresponsive text
3. Overlapping elements
4. Unwanted truncation

###### **Increase container size**

Resizing containers can prevent text from overlapping, clipping, or truncating.

Consider how text might reflow in a way that allows the eye to follow the end of one line to the beginning of the following line.

###### **Reflow the layout**

Consider reflowing the layout, especially when components grow very long. To accommodate larger text, components can be stacked on top of one another, rather than fixed side-by-side.

(fig) 1. UI displayed at 1x: buttons positioned side-by-side in a standard layout
2. UI displayed at 2x: buttons stacked to fit the limited horizontal width after text is resized

###### **Enable content to scroll**

When long strings of enlarged text don’t fit on one screen, consider adding a scrollbar to provide access to more content.

Vertical scrolling is preferable to horizontal. Users should only be asked to scroll in one direction, rather than both vertically and horizontally.

(fig) Some screens may not be able to resize and display necessary content. In this situation a scrollbar can be used to access more text.

###### **Use touch & hold tooltips to provide enlarged labels**

Some components, such as app bars and navigation bars, position text in spaces with stricter space and character limits. In these situations, you can add a tooltip to display enlarged content in the UI.

In this case, the text size in the component remains displayed at 1x while the scaled up text is displayed in a tooltip on touch & hold.

Tooltips are the best choice for displaying enlarged text in:

- Top app bar
- Navigation bar
- Navigation rail
- Tabs, when fixed to the top of a screen and don’t move off-screen upon scrolling

**[DO]** (fig) Scale up text in an adjacent tooltip to maintain space in a UI for consuming content.

### Building for all — User needs

Source: https://m3.material.io/foundations/building-for-all/user-needs


Product teams can't always represent all of their users, but they can better understand different people’s experiences and needs by working with communities, organizations, experts, and researchers. Including perspectives of those who are often overlooked leads to building more helpful products for everyone.

#### Dimensions of experience

Considering people’s attributes and environments can help:

- Ensure you take into account a variety of lived experiences
- Discover insights into who to collaborate with to gather different perspectives
- Expand product benefits to more people

Keep this evolving list in mind when you conduct research and design, comprehensive testing, and marketing:

- Age
- Culture
- Disability
- Education and literacy
- Ethnicity
- Gender
- Geography and global relevance
- Physical attributes
- Race
- Religion
- Sexual orientation
- Socioeconomic status
- Technology proficiency

### Building for all — Co-design

Source: https://m3.material.io/foundations/building-for-all/co-design


Co-design supports innovation by involving the people who use a product or service in the creation process and goes beyond traditional user research. Prioritize engaging with people of varied backgrounds and experiences and remember that building with everyone is an ongoing process. By actively engaging with communities that are often overlooked, you can build products that are more beneficial for everyone. Validate your assumptions and discover new opportunities by conducting market research with a broad range of people.

#### Questions to consider

- What are some opportunities to address user needs keeping in mind attributes of people and their contexts?
  - Who else can benefit from the product?
  - What are their needs?
  - How are you making sure overlooked communities are included in ongoing testing?
- How are you engaging community members and experts early and often throughout the development process?
  - How will their feedback shape key decisions about feature priorities, functionality, and messaging?
  - How can you continue to apply these insights as you move from the ideation phase to other stages of product development?
  - What are some opportunities to gain even more insights?
- What are the risks and potential harms if you exclude people from overlooked communities?
  - How can you address them?
- If your tool uses ML or AI, what can you do to mitigate the risk of bias? This [collection of resources](https://design.google/library/people-ai-research) can help.

