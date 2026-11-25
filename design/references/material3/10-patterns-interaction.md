# 10 — Patterns & interaction guidance

Primary sources: https://m3.material.io/foundations/interaction/states/overview · https://m3.material.io/foundations/interaction/states/state-layers · https://m3.material.io/foundations/interaction/states/applying-states · https://m3.material.io/foundations/interaction/inputs · https://m3.material.io/foundations/interaction/gestures · https://m3.material.io/foundations/interaction/selection
Cross-component pattern sources (full text lives in the linked files): https://m3.material.io/foundations/layout/breakpoints/overview · https://m3.material.io/foundations/layout/scaffold/overview (+ bars, rails, panes) · https://m3.material.io/foundations/layout/canonical-examples/overview · https://m3.material.io/styles/motion/transitions/transition-patterns · https://m3.material.io/components/all-buttons · https://m3.material.io/foundations/content-design/notifications · https://m3.material.io/foundations/writing/text-truncation
Token values: [tokens/system-state.md](tokens/system-state.md). Accessed 2026-10-09.

> **Scope note.** The current m3.material.io site has **no separate "Patterns" section**. Its route table has Foundations, Styles, Components, Develop and Blog only. This file collects the cross-component interaction patterns that Material *does* document inside Foundations, Styles and Components pages, quoted or closely paraphrased with sources. Nothing here goes beyond those pages. Where a pattern's full guidance lives in another file, this file summarizes it and links there. The appendix below holds the verbatim text of the four foundations/interaction pages.

## Essentials

### A. Interaction states model
- "States have two visual indicators to ensure accessibility"; "States can be combined, such as selection and hover"; "Apply states consistently across components." (states/overview)
- The states overview lists six states: **enabled, disabled, hover, focused, pressed, dragged**. Selection is covered on foundations/interaction/selection and combined with other states ("States can be combined, such as selection and hover").
- **State layers** (state-layers): "a semi-transparent covering on an element that indicates its state… only one state layer can be applied at a given time." "The state layer is an overlay with a fixed opacity for each state and uses the same color as the content" (usually the on-color). "The size of state layers is 40dp while the interactive target size is 48dp."
- Opacities (token data, matching the page): hover 0.08 · focus 0.10 · pressed 0.10 · dragged 0.16 · disabled 0.38 (`md.sys.state.*.state-layer-opacity`). Focus indicator: thickness 3dp, outer offset 2dp, inner offset -3dp (`md.sys.state.focus-indicator.*`).
- **Disabled** (applying-states): "communicated through color changes and reduced elevation." Inherited by action, selection and input components (buttons, cards, checkboxes, chips, list items, radio buttons, switches, text fields); **not** inherited by app bars, badges, dialogs, FABs, menus, navigation bar/drawer/rail, sheets, tabs, tooltips.
- Inputs, gestures and selection pages cover input methods (touch, cursor, keyboard, etc.), gesture types, and selection patterns — see appendix.

### B. Inputs (foundations/interaction/inputs)
- "Design for touch, keyboard, and mouse interactions"; "Embrace multiple input methods and gestures within your app."
- Input device behaviors (page table, verbatim): mouse and trackpad movement → "Show a mouse cursor on the screen"; primary click → "Treat mouse clicks differently than touch events"; secondary click → "Activate context menus"; hover → "Change component states"; highlight → "Allow text to be selected by the mouse cursor"; mouse wheel / trackpad two-finger drag → "Scroll list vertically and horizontally"; trackpad pinch → "Zoom an element or page"; physical keyboard → "Hide and show on screen keyboard".
- "A mouse click or stylus tap should demonstrate the same feedback as touch input", for example the pressed-state ripple. A secondary click "should activate a context menu" (see [menus](09-components/menus.md)). Hovering "should also invoke tooltips when applicable" (see [tooltips](09-components/tooltips.md)).
- Cursors: pointer by default; hand for links or linked images; resize arrows on resizable boundaries; I-beam on text (single click places the cursor, double click selects a word, triple click selects a paragraph).
- Text selection: "Highlight the selected area using a single color"; "Don't show touch controls next to the highlighted area" (mouse, trackpad or stylus). "When interacting using touch, always show touch controls, even if other inputs are connected."
- Physical keyboard: users "should be able to perform any actions that the virtual keyboard provides, and more"; the virtual keyboard should appear or hide based on whether a physical keyboard is present. People expect Enter to perform a common function like sending a message, and Spacebar to play and pause media. Keyboard focus and navigation rules: [08-accessibility.md](08-accessibility.md).

### C. Gestures (foundations/interaction/gestures)
- "Gestures help people navigate, take action, or transform content"; "UI elements should respond to gestures in real time"; "Tap, scroll, and swipe are common gestures."
- Documented gestures: tap, double tap, long press, scroll and pan, swipe, **predictive back**, drag, pick up and move, pinch, compound gestures.
- **Predictive back** (Android): "Before completing the swipe, the person can decide to continue to the previous view or stay in the current view." Compatible components: bottom sheet, navigation bar, navigation rail, search bar, side sheet.

### D. Selection (foundations/interaction/selection)
- "Selection is shown through changes to surface color or other visible elements"; "An entire component can be selected, or just certain parts in a component"; "Selection can be performed via tap, cursor, keyboard, or voice."
- Selections are shown with "a check mark icon, a checkbox component, a change in surface color, or a combination."
- Components that inherit selection: cards, checkboxes, chips, data tables, icon buttons, list items, menu items, pickers, radio buttons, segmented buttons, sliders, switch.
- Components using an **active indicator** for the current item: navigation bar, navigation drawer, navigation rail, tabs. "In these components, only one item should be selected at a time."
- Touch: enter selection mode by long press or a shortcut (e.g. tapping an avatar), tap more items to add them, and exit by deselecting all or tapping a toolbar action. Batch selection uses long press + drag, **except** when that combination already picks up and moves items (Do/Don't on the page).
- Desktop: "checkboxes are always visible when selection is the primary activity." When selection is secondary, a checkbox appears on hover for that item and for all items after one is selected.

### E. Cross-component patterns documented elsewhere on the site
| Pattern | What Material says (summary, cited) | Full guidance |
|---|---|---|
| **Navigation by breakpoint** | Navigation bar at compact/medium; modal or standard expanded navigation rail at expanded and above (breakpoint pages; table in 07). "Navigation bars let people switch between 3–5 primary UI views at compact or medium breakpoints." (scaffold/bars) | [07-layout-adaptive.md](07-layout-adaptive.md), [navigation-bar](09-components/navigation-bar.md), [navigation-rail](09-components/navigation-rail.md), [navigation-drawer](09-components/navigation-drawer.md) |
| **Layout scaffold: bars, rails, panes** | "The layout scaffold structures every piece of an adaptive layout into bars, rails, and panes." On compact screens, the top and bottom rail regions can hold toolbars, chat inputs, FABs and other primary controls. On larger screens, "the leading side rail region commonly holds the navigation rail." (scaffold/overview, scaffold/rails) | [07-layout-adaptive.md](07-layout-adaptive.md) |
| **Pane adaptation** | "Pane layouts can adapt using three strategies: show and hide, levitate, or reflow." (scaffold/panes) | [07-layout-adaptive.md](07-layout-adaptive.md) |
| **Canonical layouts** | Three examples (feed, list-detail, supporting pane), each with compact, medium and expanded configurations; "Use these canonical examples as a starting point." Custom layouts build on canonical layouts or layer scaffold elements (levitate). (canonical-examples/overview) | [07-layout-adaptive.md](07-layout-adaptive.md) |
| **Transition patterns** | Container transform (commonly used with cards, lists, image galleries, search boxes, sheets, FABs, chips); Forward and backward (lists, cards, buttons, links); Lateral (tabs, carousels, image galleries); Top level (navigation bar, rail, drawer); Enter and exit, within screen bounds (FABs, dialogs, menus, snackbars, time pickers, tooltips) and beyond screen bounds (app bars, banners, navigation bar/rail/drawer, sheets); Skeleton loaders. Transition patterns "use the legacy easing and duration system". (transitions/transition-patterns, motion overview) | [06-motion.md](06-motion.md) |
| **Choosing a button** | The All buttons page compares every button type. | [09-components/all-buttons.md](09-components/all-buttons.md); selection logic in [MATERIAL_3_AGENT_INSTRUCTIONS.md](MATERIAL_3_AGENT_INSTRUCTIONS.md) §7 |
| **Disabled-state inheritance** | Listed in A above (applying-states). | this file, appendix |
| **Communication & action surfaces by breakpoint** | Dialog / bottom sheet / menu recommendations per breakpoint (breakpoint pages; table in 07). | [07-layout-adaptive.md](07-layout-adaptive.md), [dialogs](09-components/dialogs.md), [bottom-sheets](09-components/bottom-sheets.md), [menus](09-components/menus.md) |
| **Notifications, alt text, text truncation & resizing** | Content patterns that apply across components. | [02-foundations.md](02-foundations.md) (content design), [08-accessibility.md](08-accessibility.md) (writing: truncation, resizing) |

If Material doesn't document a cross-component pattern you need, this guide has nothing on it either. Don't invent one; label it as undocumented. Scattered mentions (for example empty states inside list-detail or text-field guidance) are in the relevant component or layout file.


---

## Source pages in scope

| Page | URL | Site content timestamp | Do | Don't | Caution |
|---|---|---|---|---|---|
| Gestures | https://m3.material.io/foundations/interaction/gestures | 2026-07-17T05:06:24.826Z | 0 | 0 | 0 |
| Inputs | https://m3.material.io/foundations/interaction/inputs | 2026-07-17T05:07:20.540Z | 2 | 0 | 0 |
| Selection | https://m3.material.io/foundations/interaction/selection | 2026-07-17T05:28:53.854Z | 1 | 1 | 0 |
| States — Overview | https://m3.material.io/foundations/interaction/states/overview | 2026-07-17T05:30:22.307Z | 0 | 0 | 0 |
| States — State layers | https://m3.material.io/foundations/interaction/states/state-layers | 2026-07-17T05:30:22.307Z | 0 | 0 | 0 |
| States — Applying states | https://m3.material.io/foundations/interaction/states/applying-states | 2026-07-17T05:30:22.307Z | 0 | 5 | 0 |

## Verbatim rule index (every Do / Don't / Caution caption on the pages above)


**Inputs** — https://m3.material.io/foundations/interaction/inputs

- **[DO]** (fig) When a physical keyboard is attached, hide the virtual keyboard
- **[DO]** (fig) When a physical keyboard is removed, show the virtual keyboard

**Selection** — https://m3.material.io/foundations/interaction/selection

- **[DO]** (fig) **Long press** and **drag** can be used together to select items in batches
- **[DON'T]** (fig) If the **long press** and **drag** combination is already in use to pick up and move components, like cards, then the combined gesture can’t also be used for selecting items in batches

**States — Applying states** — https://m3.material.io/foundations/interaction/states/applying-states

- **[DON'T]** (fig) If the action represented in the FAB is unavailable, the FAB shouldn't appear
- **[DON'T]** (fig) The individual components that are actionable within the app bar inherit hover states, not the whole app bar
- **[DON'T]** (fig) The individual components that are actionable within the app bar inherit focus states, not the whole app bar
- **[DON'T]** (fig) The individual components that are actionable within the app bar inherit pressed states, not the whole app bar
- **[DON'T]** (fig) Components like an app bar that require consistent placement should not inherit dragged states

## Appendix — verbatim page text (digest: text, tables and figure captions; image-only content represented by captions)

### Gestures

Source: https://m3.material.io/foundations/interaction/gestures


- Gestures help people navigate, take action, or transform content
- UI elements should respond to gestures in real time
- Tap, scroll, and swipe are common gestures

#### Resources

| Type | Link | Status |
| --- | --- | --- |
| Design | [Design Kit (Figma)](http://goo.gle/m3-design-kit) | Available |

#### Types of gestures

##### Tap

People can navigate to destinations and interact with elements through touch.

(fig) Tapping a card opens an article

##### Double tap

Two quick taps allows people to zoom in and out of content.

(fig) Double tapping on a photo opens it to full screen

##### Long press

People can access additional functionality by pressing on elements for an extended time.

(fig) Long pressing a list item selects it

##### Scroll and pan

People can slide surfaces vertically, horizontally, or in any direction to move through content.

(fig) Vertical scrolling reveals more content

##### Swipe

People can navigate horizontally to:

- Switch between peer views like tabs
- Complete actions

(fig) Swiping a list item can reveal additional actions

##### Predictive back

On Android, a person can swipe left or right on certain components as a way to navigate to a previous destination. This gesture is called [predictive back](https://github.com/material-components/material-components-android/blob/master/docs/foundations/PredictiveBack.md).

Before completing the swipe, the person can decide to continue to the previous view or stay in the current view.

Compatible components are:

- Bottom sheet
- Navigation bar
- Navigation rail
- Search bar
- Side sheet

(fig) A predictive back swipe on a bottom sheet goes back to the previous screen

##### Drag

People can move elements around and slide surfaces in and out of view.

(fig) A list can be reordered by dragging a list item

##### Pick up and move

A long press and drag allows people to reorder content.

(fig) A calendar event can be picked up and moved to a new time

##### Pinch

People can scale surfaces to navigate between screens.

(fig) A photo can be pinched outward to a full screen view

##### Compound gestures

Users can fluidly transition between various gestures, like panning and pinching in a map view.

(fig) A map UI can be navigated through a combination of pan and pinch

### Inputs

Source: https://m3.material.io/foundations/interaction/inputs


- Design for touch, keyboard, and mouse interactions
- Embrace multiple input methods and gestures within your app

(fig) Designing for inputs allows people to use the inputs they prefer, like a mouse to highlight text on a tablet

#### External inputs for devices

People can use external inputs like a mouse, keyboard, or stylus with their phone, tablet, foldable, TV, laptop, or desktop computer. When someone connects an external input to their device, they expect it to behave in familiar and useful ways. Designing for different input methods can make a product more usable and accessible on all screen sizes.

##### Common features of external inputs

###### **Mouse**

- Left and right click
- Mouse wheel
- Extra buttons

###### **Trackpad**

- Left and right click
- Gestures
- Haptics

###### **Physical keyboard**

- Replaces virtual keyboard
- Media keys
- Modifier keys

##### Input device behaviors

Depending on the input device, designers and developers can implement behaviors that meet standard conventions and user expectations.

| Input device action | Anticipated behavior |
| --- | --- |
| Mouse and trackpad movement | Show a mouse cursor on the screen |
| Primary click | Treat mouse clicks differently than touch events |
| Secondary click | Activate context menus |
| Hover | Change component states |
| Highlight | Allow text to be selected by the mouse cursor |
| Mouse wheel and trackpad two finger drag | Scroll list vertically and horizontally |
| Trackpad pinch | Zoom an element or page |
| Physical keyboard | Hide and show on screen keyboard |

#### Mouse and cursor interactions

When an external mouse input device is used, a mouse cursor should be shown, regardless of the device type.   
  
A mouse may be connected to tablets, laptops, phones, foldables, and more. On some devices, it's possible to use an external input device simultaneously with touch input.   
  
On devices that don't specifically recognize mouse or stylus input, the mouse is treated as touch input.

##### Primary click

A mouse click or stylus tap should demonstrate the same feedback as touch input. One example of this is showing the ripple for a pressed state.

(fig) A visible mouse cursor is seen when the external input is connected

##### Secondary click

###### Context menus

A secondary click (whether using a single button or two fingers on a trackpad) should activate a context menu. The context menu shows additional options for the object that's clicked. See [menus](https://m3.material.io/components/menus/overview) for more usage and guidelines.

(fig) The context menu should appear when right clicking with a mouse or trackpad

##### Hover

When using a mouse cursor, help users discover interactive objects by enabling visual changes. When the mouse rests on an interactive element, the hover state is a valuable cue for interaction. See [states](https://m3.material.io/foundations/interaction/states/applying-states#71c347c2-dd75-485b-892e-04d2900bd844) for styles and guidelines.  
  
Hovering with a cursor (or stylus) should also invoke tooltips when applicable. See [tooltips](https://m3.material.io/components/tooltips/overview) for guidance.

(fig) 1. Components without a hover state
2. Components with a hover state change applied

##### Cursors

Cursors appear when using external input devices like a mouse or trackpad. The cursor can change to communicate more information about interactive elements.

###### Pointer

By default, external input control should be rendered as a pointer.

(fig) 1. A pointer provides a visible indicator for input controls

###### Hand

The cursor should appear as a hand to indicate links or linked images.

(fig) 1. The hand cursor is used for links and clickable images

###### Resize arrows

The cursor should change to resize arrows on the boundaries of resizable elements.

(fig) 1. Resize arrows indicate an element can be resized

###### I-beam

The cursor should appear as an I-beam when hovering on text. When manipulating editable text, the following interactions apply:

- Single click places the cursor
- Double click selects a word
- Triple click selects a paragraph
- Single click deselects text and repositions the cursor

(fig) 1. An I-beam cursor indicates selectable text

##### Text selection

When selecting text using a mouse, trackpad, or stylus:

- Highlight the selected area using a single color
- Don’t show touch controls next to the highlighted area

(fig) 1. Selected text shows a visible highlight

##### Text selection with touch control

When interacting using touch, always show touch controls, even if other inputs are connected.  
  
When using a mouse, trackpad, or stylus, show the I-beam and context menu, even if it's a touch device.

(fig) When using a touchscreen to select text, show touch controls

(fig) When using a mouse, trackpad, or stylus to select text, use the right-click context menu

##### Stylus input

When using a stylus, cursors are usually not necessary, unless they communicate tool properties such as brush size or shape.

(fig) 1. The circle cursor indicates the selected stylus tool and size

#### Mouse wheel and trackpad gestures

When an external mouse or touchpad is used, the mouse wheel and trackpad gesture allow more actions.

##### Vertical scroll

When a cursor is positioned on a list, the mouse wheel and two-finger touchpad gesture should allow vertical scrolling of the list.

(fig) Scrolling a vertical list using the mouse wheel or trackpad gestures. Note that only the detail panel under the cursor scrolls.

##### Touch scroll & mouse text selection

Upon touch and drag gesture, the text area will scroll. With a mouse interaction, dragging in a text area will select the text.

(fig) On a touch screen, dragging upward scrolls the field down

(fig) When using a mouse, dragging upward selects text and images

##### Horizontal scroll

Mouse users should be able to scroll with a mouse wheel to navigate horizontally scrolling fields. Trackpad users should be able to scroll using a two-finger horizontal gesture.

(fig) Carousels can scroll horizontally using a scroll wheel or trackpad

#### Physical keyboard

When a physical keyboard is connected to a device, either externally or as a built-in laptop keyboard, users should be able to perform any actions that the virtual keyboard provides, and more.

##### Show and hide virtual keyboard

A virtual keyboard should appear or hide in response to the presence of a physical keyboard.

**[DO]** (fig) When a physical keyboard is attached, hide the virtual keyboard

**[DO]** (fig) When a physical keyboard is removed, show the virtual keyboard

##### Common keyboard interactions

###### Enter key

People typically expect the **E****nter** key on a physical keyboard to be enabled by developers to allow a common function like sending a message.

(fig) The**Enter** key typically triggers actions like sending a message

###### Spacebar control

People typically expect the **Spacebar** (or available media keys) to be enabled to play and pause music or video.

(fig) Pressing **Space** usually pauses and plays media

###### Tab focus

When keyboard users navigate a page using **Tab**, the focus on interactive items must follow a logical order. On most pages, that means left to right, top to bottom.  
  
When focused from a keyboard or other input device, the focus state includes a ring-like keyboard focus indicator.

(fig) Tab focus includes a visible keyboard focus indicator

(fig) The focus state moves elements as the user presses **Tab** on their keyboard

###### Escape key

People typically expect the **Escape** key on a physical keyboard to dismiss elements, remove focus, or clear selections.

(fig) The **Escape** key should dismiss any visible modal elements like menus, dialogs, or bottom sheets

(fig) The **Escape** key should remove any visible focus indicators and set the focus order to 0

(fig) The **Escape** key should remove the text cursor when typing, but should not remove already-typed text

### Selection

Source: https://m3.material.io/foundations/interaction/selection


- Selection is shown through changes to surface color or other visible elements
- An entire component can be selected, or just certain parts in a component
- Selection can be performed via tap, cursor, keyboard, or voice

#### Resources

| Type | Link | Status |
| --- | --- | --- |
| Design | [Design Kit (Figma)](http://goo.gle/m3-design-kit) | Available |

#### Selection indicators

Selections are displayed using a check mark icon, a checkbox component, a change in surface color, or a combination.

Selections are inherited by the following components:

- Cards
- Checkboxes
- Chips
- Data tables
- Icon buttons
- List items
- Menu items
- Pickers
- Radio buttons
- Segmented buttons
- Sliders
- Switch

(fig) Selected components:

1. Segmented buttons
2. Chips
3. List items
4. Checkboxes
5. Radio buttons
6. Switch
7. Slider

The following components use an active indicator to represent which item is currently selected:

- Navigation bar
- Navigation drawer
- Navigation rail
- Tabs

The color and shape of the active indicator varies between components. In these components, only one item should be selected at a time.

(fig) Selected components with active indicators:

1. Tab
2. Navigation drawer

#### Types of selection

##### Touch

On touch devices, select items using:

- Long press touch or two-finger touch
- Selection shortcut, if available, such as tapping an avatar

(fig) Items in a list selected via touch

##### Entering and exiting selection mode

To select an item and enter selection mode, long press the item or use a shortcut, such as tapping the item’s avatar. To select additional items, tap each of them.

To exit a selection mode, tap each selected item until they’re unselected, or tap an action on the toolbar.

(fig) Entering and exiting selection mode

##### Larger selections

To select multiple items simultaneously, long press and drag across items. Don’t use this gesture combination if it is already in use to pick up and move items, like cards.

**[DO]** (fig) **Long press** and **drag** can be used together to select items in batches

**[DON'T]** (fig) If the **long press** and **drag** combination is already in use to pick up and move components, like cards, then the combined gesture can’t also be used for selecting items in batches

##### Click

On desktop, checkboxes are always visible when selection is the primary activity. When selection is secondary, checkboxes (or other indicators) are displayed:

- As a single checkbox for that item on hover
- For all items after one item is selected

To make a selection, hover over an item to reveal a checkbox. The checkbox can then be clicked.

(fig) Checkboxes are visible by default in this table because selection is a primary activity

### States — Overview

Source: https://m3.material.io/foundations/interaction/states/overview


- States have two visual indicators to ensure accessibility
- States can be combined, such as selection and hover
- Apply states consistently across components

#### Resources

| Type | Link | Status |
| --- | --- | --- |
| Design | [Design Kit](http://goo.gle/m3-design-kit) | Available |

1. [Enabled](https://m3.material.io/foundations/interaction/states/applying-states#39b2fc90-01db-41b5-b6f8-47be61ed1479)An enabled state communicates an interactive component or element.

2. [Disabled](https://m3.material.io/foundations/interaction/states/applying-states#4aff9c51-d20f-4580-a510-862d2e25e931)  
A disabled state communicates an inoperable component or element.

(fig) Enabled button

(fig) Disabled button

3. [Hover](https://m3.material.io/foundations/interaction/states/applying-states#71c347c2-dd75-485b-892e-04d2900bd844)  
A hover state communicates when a user has placed a cursor above an interactive element.

4. [Focused](https://m3.material.io/foundations/interaction/states/applying-states#bc6d6853-48ef-490e-8076-448e89e69f0f)  
A focused state communicates when a user has highlighted an element, using an input method such as a keyboard or voice.

(fig) Hovered button

(fig) Focused button

5. [Pressed](https://m3.material.io/foundations/interaction/states/applying-states#c3690714-b741-492d-97b0-5fc1960e43e6)  
A pressed state communicates a user tap.

6. [Dragged](https://m3.material.io/foundations/interaction/states/applying-states#c97582c4-5fef-42ce-9c34-71f8dcc5b8ad)  
A dragged state communicates when a user presses and moves an element.

(fig) Pressed button

(fig) Dragged chip

### States — State layers

Source: https://m3.material.io/foundations/interaction/states/state-layers


#### State layers

A state layer is a semi-transparent covering on an element that indicates its state. State layers provide a systematic approach to visualizing states by using opacity. A layer can be applied to an entire element or in a circular shape and only one state layer can be applied at a given time.

To transition from an enabled style to a stateful style requires the addition of a state layer.

The state layer is an overlay with a fixed opacity for each state and uses the same color as the content.

For example, if the enabled style uses the **secondary container** color for the container and **on secondary container** for content, the state layer will be an overlay using the **on secondary container** color.

If the enabled style uses the **surface** color for the container and the **primary** color role for content, then the state layer will be an overlay using the **primary** color.

(fig) 1. Container
2. State layer
3. Content

The size of state layers is 40dp while the interactive target size is 48dp.

(fig) 1. State layer
2. Interactive target

##### On colors

By default, a component’s state layer color is derived from the color of its content, either the color of an icon or label text if no icon is present.

An [on color](https://m3.material.io/styles/color/roles#19e75989-7485-4f5b-a769-940c4e4364bc) is a color role used by the content. Each container color has its own corresponding on color.   
  
For example, if a container color is **secondary container**, the content will use the **on secondary container** color role.

(fig) Order of surface layers shows the state layer (2) between the container (1) and content (3) layers

##### State layer tokens & values

The state layer uses a fixed percentage for the opacity for each state. A state layer uses the color used by content (usually the [on color](https://m3.material.io/styles/color/roles#19e75989-7485-4f5b-a769-940c4e4364bc)) and the percentage opacity for its respective state.

(fig) Four overlay states and their values:

1. Hover +8% opacity
2. Focus +10% opacity
3. Press +10% opacity
4. Drag +16% opacity

_[Interactive TOKEN_TYPE_UNSPECIFIED module: resource `designSystems/20543ce18892f7d9`; token sets: State opacities. Resolved values are in the tokens/ folder of this guide.]_

### States — Applying states

Source: https://m3.material.io/foundations/interaction/states/applying-states


#### Enabled

An enabled state communicates an interactive component or element. Enabled states use the default styling for each interactive component.

(fig) Enabled states for:

1. Button
2. FAB
3. Switch
4. Text field

#### Disabled

A disabled state communicates when a component or element isn’t interactive. This state is visually communicated through color changes and reduced elevation.

**Disabled states don't need to meet Material's contrast requirements.**

(fig) Disabled button

Disabled states **are** inherited by action, selection, and input components:

- Buttons
- Cards
- Checkboxes
- Chips
- List items
- Radio buttons
- Switches
- Text fields

(fig) Disabled states for:

1. Checkbox
2. Icon button
3. Radio button
4. Segmented button

Disabled states **aren't** inherited by communication, containment, navigation, and some actions components:

- App bars
- Badges
- Dialogs
- Floating action buttons (FABs)
- Menus
- Navigation bar, drawer, and rail
- Sheets
- Tabs
- Tooltips

**[DON'T]** (fig) If the action represented in the FAB is unavailable, the FAB shouldn't appear

##### Behavior

Disabled components can’t be focused, dragged, or pressed, and they don’t change state when tapped or hovered over.

(fig) A disabled button doesn’t inherit hover or other state layers

There can be any number of disabled states in a layout.

(fig) 1. Disabled redo icon button
2. Disabled checklist icon button

#### Hover

Hover states are initiated by the user pausing over an interactive element using a cursor.

The lower-emphasis surface overlay for hover states can be applied to the entire component, elements within a component, or as a circular shape over part of the component.

(fig) Hovered button

Hover states **are** inherited by action, selection, and input components:

- Buttons
- Cards
- Checkbox
- Chips
- Date and time pickers
- List items
- Slider
- Switch
- Text fields

(fig) Hovered states for:

1. FAB
2. Icon button
3. Chip
4. Segmented buttons

Hover states **aren’t** inherited by communication, containment, or navigation components:

- App bars
- Badges
- Dialogs
- Menus
- Navigation bar, drawer, and rail
- Sheets
- Tabs

**[DON'T]** (fig) The individual components that are actionable within the app bar inherit hover states, not the whole app bar

##### Behavior

Hover states are initiated by the user pausing over an interactive element using a cursor.

(fig) Hover states appear and disappear using a low-emphasis animated fade

Hover states can be combined with focused, activated, selected, or pressed states.

(fig) A selected filter chip in both selected and hover states

There can only be one hover state at a time in a layout.

(fig) Hover state can only be on one element at a time based on cursor position

#### Focused

A focused state communicates when a user has highlighted an element using a keyboard or voice. Focus states apply to all interactive components.

The higher-emphasis surface overlay for focused states can be applied to the entire component, elements within a component, or as a circular shape over part of the component.

(fig) Focused button

Focus states **are** inherited by action, selection, and input components:

- Buttons
- Cards
- Checkbox
- Chips
- Date and time pickers
- List items
- Selection controls
- Text fields

(fig) Focused states for:

1. FAB
2. Icon button
3. Chip
4. Segmented buttons

Focus states **aren’t** inherited by most communication, containment, or navigation components:

- App bars
- Badges
- Banner
- Card
- Dialogs
- Navigation bar, drawer, and rail
- Sheets

**[DON'T]** (fig) The individual components that are actionable within the app bar inherit focus states, not the whole app bar

##### Keyboard focus indicator

Many people use the **Tab** key or other shortcut to navigate the interactive elements of a web page, like links, buttons, and chips.

When an element is tabbed to, it appears in its focused state with a ring-like **keyboard focus indicator**. This indicator helps web users know where they are on the page.

While focused, an element can be acted on with the keyboard.

(fig) Keyboard focus indicator for a filled button

##### Behavior

Focus states are initiated by the user by pressing the **Tab** key on the keyboard (or equivalent).

Focus states can be represented in combination with hover, activated, or selected states.

(fig) A selected filter chip in both selected and focused states

There can only be one focus state at a time in a layout.

(fig) A focus state applied to one card at a time

#### Pressed

A pressed state communicates a user-initiated tap or click via cursor, keyboard, or voice input. This state applies to all interactive components.

Pressed states trigger a change in composition and should be high-emphasis.

A ripple overlay signifies a pressed state. It can be applied to an entire component or elements within a component, or as a circular shape over part of the component.

(fig) Pressed button

Some components, such as buttons or cards, can inherit elevation to signify a pressed state.

(fig) Pressed button with elevation

Pressed states **are** inherited by action, selection, and some containment components:

- Buttons
- Cards
- Checkbox
- Chips
- List items
- Text fields

(fig) Pressed states for:

1. FAB
2. Icon button
3. Chip
4. Segmented button

Pressed states **aren’t** inherited by communication, navigation, or some containment components:

- App bars
- Badges
- Bottom navigation
- Dialogs
- Menus
- Sheets
- Tabs

**[DON'T]** (fig) The individual components that are actionable within the app bar inherit pressed states, not the whole app bar

##### Behavior

Pressed states are initiated by user keyboard or voice input on an interactive element.

(fig) Activated states appear in user-initiated order

Pressed states can be combined with hovered, focused, activated, or selected states.

(fig) Activated states can be represented in combination with hover and focus

There may only be a single pressed state at a time in a layout.

(fig) A pressed state applied to one card at a time

#### Dragged

A dragged state occurs when a user presses and moves an element or component. Dragged states should be low emphasis, to avoid distracting users from their task.

Dragged states use a lower emphasis overlay. It can be applied to the entire component or to elements within a component.

Some components, such as list items, chips, or cards, can inherit elevation to signify a dragged state.

(fig) Dragged list item

Dragged states **are** inherited by some containment and selection components:

- Cards
- Chips
- List items
- Sliders

(fig) Dragged states for:

1. Chip
2. Card

Dragged states **aren’t** inherited by action, communication, navigation, or some containment components:

- App bars
- Badges
- Buttons
- Dialogs
- Menus
- Navigation bar, drawer, and rail

**[DON'T]** (fig) Components like an app bar that require consistent placement should not inherit dragged states

##### Behavior

Dragged states are initiated when users touch and hold elements, using an input method such as a tap or click.

(fig) A list item in a dragged state

There may only be a single dragged state at a time within a layout.

(fig) Dragged state applied to one card at a time

