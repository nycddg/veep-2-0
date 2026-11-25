# 07 — Layout & adaptive design

Primary sources: https://m3.material.io/foundations/layout/layout-overview/overview · …/parts-of-layout · …/adaptive-design · https://m3.material.io/foundations/layout/breakpoints/overview (+ compact, medium, expanded, large-extra-large) · https://m3.material.io/foundations/layout/canonical-examples/overview (+ feed, list-detail, supporting-pane) · https://m3.material.io/foundations/layout/scaffold/overview (+ bars, rails, panes) · https://m3.material.io/foundations/layout/grids-spacing/overview (+ grids, spacing, density) · https://m3.material.io/foundations/layout/bidirectionality-rtl
Accessed 2026-10-09.

## Essentials
- Terminology updates (layout-overview "What's new"): window size classes renamed to **breakpoints**; responsive layout renamed to **adaptive design**; layout scaffold introduced; updated canonical layout examples. "Material layout guidance is implemented on Android and applies to web."

### Breakpoints (breakpoints/overview) — "These apply to Android and web."
| Breakpoint | Width (dp) | Common devices |
|---|---|---|
| Compact | Under 600dp | Phone in portrait |
| Medium | 600–839dp | Tablet in portrait, Foldable in portrait (unfolded) |
| Expanded | 840–1199dp | Phone in landscape, Tablet in landscape, Foldable in landscape (unfolded), Desktop |
| Large | 1200–1599dp | Desktop |
| Extra-large | 1600dp+ | Desktop, Ultra-wide monitors |
Height breakpoints (compact/medium/expanded) also exist on Android.

| Breakpoint | Panes | Navigation | Communication | Action |
|---|---|---|---|---|
| Compact | 1 | Navigation bar, modal expanded navigation rail | Simple dialog, Full-screen dialog | Bottom sheet |
| Medium | 1 (recommended) or 2 | Navigation bar, modal expanded navigation rail | Simple dialog | Menu |
| Expanded | 1 or 2 (recommended) | Modal or standard expanded navigation rail | Simple dialog | Menu |
| Large | 1 or 2 (recommended) | Modal or standard expanded navigation rail | Simple dialog | Menu |
| Extra-large | 1 to 3 (recommended) | Modal or standard expanded navigation rail | Simple dialog | Menu |
"Design for breakpoints instead of specific devices." Moving across breakpoints, ask what to **reveal, divide, resize, reposition, or swap**.

### Canonical layout examples
Feed, list-detail, supporting pane — "Use these canonical examples as a starting point." Supporting pane: primary area "typically about two-thirds". Implementations: Compose canonical layouts; Android Views sample repo.

### Scaffold & panes (scaffold/panes)
Panes are **fixed** or **flexible**; one-, two-, three-pane layouts; drag handle resizing; multiple panes are **co-planar**, **floating** or **docked**; panes adapt via strategies such as **show and hide** and **levitate** (full list in appendix).

### Spacing, grids, density, RTL
See 06 for spacing tokens. Leading/trailing swap in RTL; design for bidirectionality (bidirectionality-rtl).


---

## Source pages in scope

| Page | URL | Site content timestamp | Do | Don't | Caution |
|---|---|---|---|---|---|
| Layout overview — Overview | https://m3.material.io/foundations/layout/layout-overview/overview | 2026-08-18T21:59:38.343Z | 0 | 0 | 0 |
| Layout overview — Parts of layout | https://m3.material.io/foundations/layout/layout-overview/parts-of-layout | 2026-08-18T21:59:38.343Z | 0 | 0 | 0 |
| Layout overview — Adaptive design | https://m3.material.io/foundations/layout/layout-overview/adaptive-design | 2026-08-18T21:59:38.343Z | 0 | 0 | 0 |
| Breakpoints — Overview | https://m3.material.io/foundations/layout/breakpoints/overview | 2026-07-17T04:55:59.912Z | 2 | 1 | 0 |
| Breakpoints — Compact | https://m3.material.io/foundations/layout/breakpoints/compact | 2026-07-17T04:55:59.912Z | 0 | 0 | 0 |
| Breakpoints — Medium | https://m3.material.io/foundations/layout/breakpoints/medium | 2026-07-17T04:55:59.912Z | 0 | 0 | 0 |
| Breakpoints — Expanded | https://m3.material.io/foundations/layout/breakpoints/expanded | 2026-07-17T04:55:59.912Z | 0 | 0 | 0 |
| Breakpoints — Large & extra-large | https://m3.material.io/foundations/layout/breakpoints/large-extra-large | 2026-07-17T04:55:59.912Z | 0 | 0 | 0 |
| Canonical layout examples — Overview | https://m3.material.io/foundations/layout/canonical-examples/overview | 2026-07-17T04:57:39.159Z | 0 | 0 | 0 |
| Canonical layout examples — Feed | https://m3.material.io/foundations/layout/canonical-examples/feed | 2026-07-17T04:57:39.159Z | 0 | 0 | 0 |
| Canonical layout examples — List-detail | https://m3.material.io/foundations/layout/canonical-examples/list-detail | 2026-07-17T04:57:39.159Z | 0 | 0 | 0 |
| Canonical layout examples — Supporting pane | https://m3.material.io/foundations/layout/canonical-examples/supporting-pane | 2026-07-17T04:57:39.159Z | 0 | 0 | 0 |
| Scaffold — Overview | https://m3.material.io/foundations/layout/scaffold/overview | 2026-07-17T05:27:27.930Z | 0 | 0 | 0 |
| Scaffold — Bars | https://m3.material.io/foundations/layout/scaffold/bars | 2026-07-17T05:27:27.930Z | 0 | 0 | 0 |
| Scaffold — Rails | https://m3.material.io/foundations/layout/scaffold/rails | 2026-07-17T05:27:27.930Z | 0 | 0 | 0 |
| Scaffold — Panes | https://m3.material.io/foundations/layout/scaffold/panes | 2026-07-17T05:27:27.930Z | 0 | 0 | 0 |
| Grids &amp; spacing — Overview | https://m3.material.io/foundations/layout/grids-spacing/overview | 2026-07-17T05:07:21.447Z | 0 | 0 | 0 |
| Grids &amp; spacing — Grids | https://m3.material.io/foundations/layout/grids-spacing/grids | 2026-07-17T05:07:21.447Z | 0 | 0 | 0 |
| Grids &amp; spacing — Spacing | https://m3.material.io/foundations/layout/grids-spacing/spacing | 2026-07-17T05:07:21.447Z | 0 | 0 | 0 |
| Grids &amp; spacing — Density | https://m3.material.io/foundations/layout/grids-spacing/density | 2026-07-17T05:07:21.447Z | 1 | 2 | 1 |
| Bidirectionality &amp; RTL | https://m3.material.io/foundations/layout/bidirectionality-rtl | 2026-08-05T08:56:11.377Z | 0 | 2 | 0 |

## Verbatim rule index (every Do / Don't / Caution caption on the pages above)


**Breakpoints — Overview** — https://m3.material.io/foundations/layout/breakpoints/overview

- **[DO]** (fig) Swap a navigation bar in a compact layout for a navigation rail in a medium or expanded layout
- **[DO]** (fig) A collapsed navigation rail in medium or expanded layouts can become an expanded navigation rail in large or extra-large layouts
- **[DON'T]** (fig) Don’t arbitrarily swap components that aren’t functionally equivalent, such as swapping a button with a menu

**Grids &amp; spacing — Density** — https://m3.material.io/foundations/layout/grids-spacing/density

- **[DO]** (fig) Consider using higher density information design when people need to scan lots of information
- **[DON'T]** (fig) Don’t increase density in UIs that involve focused tasks, such as selecting from a menu. It reduces usability by limiting selectable space.
- **[DON'T]** (fig) Don't increase the density in components that alert a person of changes, such as snackbars or dialogs
- **[CAUTION]** (fig) Use caution when applying component scaling where selectable targets will be reduced to less than 48x48dp. Only apply density where it provides a better experience.

**Bidirectionality &amp; RTL** — https://m3.material.io/foundations/layout/bidirectionality-rtl

- **[DON'T]** (fig) Don't reverse the order of the email username and domain (@google.com). The domain should always be to the right of the username. Usernames can still be written RTL, with the cursor moving to the left.
- **[DON'T]** (fig) Don’t apply LTR directionality to RTL content, because it may scramble word order. To ensure readability across all languages, the content should have both RTL alignment and directionality.

## Appendix — verbatim page text (digest: text, tables and figure captions; image-only content represented by captions)

### Layout overview — Overview

Source: https://m3.material.io/foundations/layout/layout-overview/overview


- Use layout to organize all elements in a screen, signal hierarchy, and draw attention to key actions
- Adapt layouts to compact, medium, expanded, large, and extra-large breakpoints (previously window size classes)
- Build from an established [canonical layout example](https://m3.material.io/foundations/layout/canonical-examples)
- Design for [bidirectionality](https://m3.material.io/foundations/layout/bidirectionality-rtl) to support both left-to-right (LTR) and right-to-left (RTL) languages
- Apply consistent arrangement, sizing, and spacing to create a functional layout structure
- Material layout guidance is implemented on Android and applies to web

(fig) 1. Column
2. Fold
3. Margin
4. Bar
5. Drag handle
6. Pane
7. Rail

#### Availability & resources

| **Type** | **Resource** | **Status** |
| --- | --- | --- |
| Design | [M3 Design Kit](https://www.figma.com/community/file/1035203688168086460) (Figma) | Available |
| [Spacing system & tokens](https://m3.material.io/styles/spacing/overview) | Available |
| Implementation | [Jetpack Compose: Canonical layouts](https://developer.android.com/develop/ui/compose/layouts/adaptive/canonical-layouts) | Available |
| [Jetpack Compose: Rulers](https://developer.android.com/reference/kotlin/androidx/compose/ui/layout/Ruler) | Available |
| [Android Views (MDC-Android): Canonical layouts](https://github.com/android/user-interface-samples/tree/main/CanonicalLayouts) | Available |
| [Jetpack Compose: Navigation3](https://developer.android.com/guide/navigation/navigation-3/migration-guide) | Available |

#### What's new

When creating new layouts, use the layout scaffold, start from a canonical layout example, and ensure layouts scale across breakpoints.

##### **May 2026**

Layout structure and design:

- Introduced layout scaffold, to create adaptive layouts efficiently
- New adaptive guidelines for mobile, desktop, and spatial devices
- Updated canonical layout examples
- [Spacing system](https://m3.material.io/styles/spacing/overview)

Naming:

- Window size classes renamed to breakpoints
- Responsive layout renamed to [adaptive design](https://m3.material.io/foundations/layout/layout-overview/adaptive-design)

(fig) The Material layout scaffold enables layouts to adapt across different screen sizes

#### Layout terms

- **Adaptive design**: Techniques that allow an interface to dynamically respond to contexts like user preferences, device type, state, and breakpoints
- **Bars**: Can frame the page to help people navigate through a product, and typically house the app bar and bottom navigation bar
- **Bidirectionality**: A writing system that displays text and content from right-to-left (RTL)
- **Breakpoints**: Opinionated window sizes where a layout changes to match available space, device conventions, and ergonomics (previously window size classes)
- **Column**: One or more vertical blocks of content within a pane
- **Drag handle**: The component that resizes panes
- **Fold**: A flexible area of the screen or a hinge that separates two displays on foldable devices
- **Gap**: The space between components or elements within a container
- **Margin**: The space between the edge of the screen and any elements inside of it
- **Multi-window mode**: Enables multiple apps to share the same screen simultaneously
- **Pane**: A layout container that houses other components and elements within a single app. A pane can be fixed, flexible, floating, or semi-permanent.
- **Rails**: The perimeter space surrounding panes that holds key elements such as navigation rails, toolbars, and pane control
- **Right-to-left (RTL) language**: Languages written and read right-to-left, such as Arabic, Hebrew, and Farsi, used by [over 2 billion people](https://www.w3.org/International/questions/qa-scripts.en.html)
- **Rulers**: An opinionated set of global alignment lines that help organize building blocks in a layout
- **Safety region**: Zones reserved for system UI elements outside the application space, such as status bar or gesture bar
- **Scaffold**: A fundamental UI design structure that provides a standard platform for assembling key screen components
- **Spacer**: The space between two panes on a foldable device

### Layout overview — Parts of layout

Source: https://m3.material.io/foundations/layout/layout-overview/parts-of-layout


#### Parts of layout

##### Windows

A window frames and contains an app or product.

Many systems support multi-window views, which display multiple apps at once.

[Multi-window support guide for Android](https://developer.android.com/develop/ui/compose/layouts/adaptive/support-multi-window-mode)

(fig) Two windows can be shown at once with a taskbar underneath

On desktop, windows can be resized and moved around freely. They should adapt to various screen sizes.

[More on adaptive design](https://m3.material.io/foundations/layout/layout-overview/adaptive-design)

(fig) Windows can be moved around, resized, and adapt to different screen sizes

##### Grids

The layout grid is the foundation for every layout. It provides a structural framework for organizing components, content, and actions.

Use the grid to:

- Group related information in columns
- Apply spacing consistently
- Create focal points for primary actions
- Align building blocks like bars, rails, and panes

[More on grids](https://m3.material.io/foundations/layout/grids-spacing/grids)

(fig) Column count, width, and spacing dynamically adjust to different breakpoints

#### Layout scaffold

##### Bars

Bars help people navigate through a product. Use bars to:

- Frame the main content
- Contain an app bar or navigation bar
- Span one or multiple panes

[More on bars](https://m3.material.io/foundations/layout/scaffold/bars)

(fig) 1. App bars are placed at the top of the screen to help people navigate by providing a description of the screen and 1–2 essential actions, like search or back navigation

##### Rails

Rails are the next level in layout after bars, filling the perimeter space surrounding panes, or floating above them. They contain key elements such as navigation rails, toolbars, chat inputs, FABs, and other primary controls.

[More on rails](https://m3.material.io/foundations/layout/scaffold/rails)

(fig) 1. On mobile, the rail region can contain a toolbar
2. On desktop, the rail region can contain the navigation rail

##### Panes

Just like panes of glass that make up a window in the real world, panes in Material make up most of the layout in a window.

All content must be in a pane. A layout can contain 1–3 panes of various widths, which adapt dynamically to the breakpoint (formerly window size class) and the person’s language setting. For right-to-left (RTL) languages, navigation components will be on the right.

People can navigate to or between panes. Presenting multiple panes at once can make a product more efficient and easier to use.

[More on panes](https://m3.material.io/foundations/layout/scaffold/panes)

(fig) 1. First pane
2. Second pane

###### Containment

On most devices, panes can blend in with the background. This is called implicit grouping, and helps show relationships between panes.

Explicit grouping uses distinct colors or outlines to visually delineate content.

[More on spacing to group content](https://m3.material.io/foundations/layout/grids-spacing/spacing#e7e6d1ac-031a-4757-afcf-b223f23654ea)

(fig) In multiple-pane layouts, use color to show emphasis and close spacing to group related content

In spatial environments, panes use a container color to separate them from the passthrough or virtual environment.

(fig) Use contrast between panes and the background to create a spatial effect in XR

##### Drag handles

Drag handles can be used to resize panes in a layout. They can:

- Adjust the width of flexible panes
- Fully collapse and expand fixed panes to quickly switch between a single and two-pane layout

(fig) Drag handles can adjust pane size in a list-detail layout

##### Rulers

Rulers are a set of global alignment lines. They help to align elements across all layers of the layout.

[How to implement rulers in Compose](https://developer.android.com/reference/kotlin/androidx/compose/ui/layout/Ruler)

(fig) Rulers ensure global alignment across a product, keeping margins and placement consistent

### Layout overview — Adaptive design

Source: https://m3.material.io/foundations/layout/layout-overview/adaptive-design


#### What’s adaptive design?

Adaptive design is a set of techniques to change an interface to fit different contexts. While responsive design scales a single layout to fit any screen, adaptive design customizes a product to optimize the experience on each device.

Designing adaptive experiences goes beyond customizable properties like color, typography, and shape. The structure, individual components, and entire layouts can adapt based on:

- People: Individual preferences and settings
- Devices: Watch, phone, foldable, tablet, desktop, or XR device
- Usage: Screens dynamically change as a person resizes windows, changes orientation, or switches device

#### Designing adaptive experiences

Layouts must be versatile, designed to adapt fluidly across three primary experience types: **mobile**, **desktop**, and **spatial**. Start with mobile and make sure your product's layout and components can scale and adapt seamlessly all the way up to spatial environments.

While each experience has different primary input methods, designs should be built with all inputs in mind—touch, pointer, and physical keyboard—since users may use your product in a desktop environment regardless of their device type.

##### Mobile

Mobile experiences include phones, foldables, and tablets.

On mobile, an app can be shown in several window modes:

- Full-screen: The app takes up the entire screen, the default for mobile
- Split-screen: Two or more apps share the screen simultaneously, common on tablets and foldables
- Bubbles: Floating windows that let people multitask without leaving their current context

(fig) Mobile layouts default to a full-screen window

##### Desktop

Desktop experiences use free-form windows that adapt across breakpoints.

People can use split screens, floating windows, and free-form windows for multi-tasking.

A tablet can convert to a desktop experience when a physical keyboard and mouse are connected. Similarly, Android mobile devices can transition into a desktop-like environment when connected to an external monitor.

(fig) A desktop layout can adjust from three to two columns to fit a medium breakpoint

##### Spatial

Extended reality (XR) experiences use multiple free-form windows within virtually limitless screens. Immersive modes, such as Android XR’s [full space](https://developer.android.com/design/ui/xr/guides/foundations), allow components to be positioned freely in 3D space.

[More on XR design](https://m3.material.io/foundations/xr/design)

(fig) In an XR full space layout, a navigation rail can become an orbiter, and float to the side of the main pane

#### Adaptive layouts

The Material 3 adaptive system uses panes and breakpoints to organize content into adaptive layouts.

Panes are the building blocks of layout; a pane is a single destination in the product. For example, in a messaging app, the list of messages is one pane, and and a specific conversation thread is another.

(fig) Panes are the primary segments of a layout, and can change based on context

As the pane or window resizes—or as someone navigates a product—panes may change size, enter and exit the screen, and reorganize themselves to make the experience more usable or easier to navigate. These patterns are called adaptive strategies. Material has three adaptive strategies that create a cohesive experience across breakpoints: [show and hide](https://m3.material.io/foundations/layout/scaffold/panes#bbe68948-bc05-4f7c-b870-6254439e4fd8), [levitate](https://m3.material.io/foundations/layout/scaffold/panes#96bf71b8-04b8-4fff-97c7-9bc782fbf401), and [reflow](https://m3.material.io/foundations/layout/scaffold/panes#e0a573e9-8c62-4772-8d81-47955ff83196).

(fig) Co-planar: Panes are displayed side by side

(fig) Floating: A pane is displayed above other panes or content, like a dialog

(fig) Docked: A pane is displayed above other panes and one of its edges extends beyond one side of the screen, like a bottom sheet

In Compose, the [Navigation 3](https://developer.android.com/guide/navigation/navigation-3) library allows multiple destinations to be shown on screen at the same time, and enables layouts to adapt seamlessly across window sizes and screens.

(fig) Navigation destinations remain consistent regardless of screen sizes with Navigation 3

##### Adapting components

Components can adapt in appearance, placement, and behavior based on factors like:

- Where components are placed in relation to their containers, content, and pane boundaries
- How components use space
- How components enable usage across different device and input types

Most Material components respond using three main strategies: resizing, showing and hiding, and presentation changes.

###### Resizing

Components should resize in response to their content and their placement in a layout.

For example, buttons may scale along with their parent container, or hug their contents and maintain a left or right alignment.

(fig) Buttons can hug their contents or span their containers based on context

###### Showing & hiding

Components should show and hide information, or collapse and expand to selectively reveal content that best suits the space.

For example, list items may reveal descriptions or other additional information as their parent container scales.

(fig) List items can reveal more text on a tablet

###### Presentation changes

Presentation changes include the orientation of elements and changes to specific properties, like color, type, and shape.

Components can also change configurations. For example, when a window size increases, a FAB can change to an extended FAB, and navigation rails can be automatically expanded.

(fig) The extended FAB can change to a standard FAB when the window is smaller

### Breakpoints — Overview

Source: https://m3.material.io/foundations/layout/breakpoints/overview


Material uses breakpoints to create adaptive designs that work across devices:

- There are five main breakpoints: compact, medium, expanded, large, and extra-large
- Layouts typically transition from a single pane to two or three panes as window size increases
- When moving across breakpoints, decide which elements to reveal, divide, resize, reposition, or swap

#### Breakpoints overview

A breakpoint (previously window size class) is the window size at which a layout needs to change to match available space, device conventions, and ergonomics. These apply to Android and web.

All devices fall into one of five Material breakpoints:

- Compact
- Medium
- Expanded
- Large
- Extra-large

Rather than designing for an ever-increasing number of display states, focusing on breakpoints ensures layouts work across a wide range of devices.

(fig) 1. Compact
2. Medium
3. Expanded

Large and extra-large breakpoints are used on devices like laptops, desktops, and external monitors.

(fig) 1. Large
2. Extra-large

**Design for breakpoints instead of specific devices because:**

- The amount of available window space is dynamic and changes based on user behavior, such as multi-window modes or unfolding a foldable device
- Devices fall into different breakpoints based on orientation

| Breakpoint | Width (dp) | Common devices |
| --- | --- | --- |
| Compact | Under 600dp | Phone in portrait |
| Medium | 600–839dp | Tablet in portrait  Foldable in portrait (unfolded) |
| Expanded | 840–1199dp | Phone in landscape  Tablet in landscape  Foldable in landscape (unfolded)  Desktop |
| Large | 1200–1599dp | Desktop |
| Extra-large | 1600dp+ | Desktop  Ultra-wide monitors |

##### Height breakpoints

On Android, compact, medium, and expanded breakpoints are also available for [height](https://developer.android.com/develop/ui/compose/layouts/adaptive/support-different-display-sizes#window_size_classes). These can be used to adjust the layout when available vertical space is unusually small or large. However, since most layouts contain vertically scrolling content, it's rare that layouts need to adjust to available height.

#### Designing across breakpoints

(fig) Products should automatically adapt to any breakpoint

(fig) A product’s layout should adjust to fit each breakpoint. For example, a large window can have two panes, while an extra-large window can have three.

Each product view should have a layout for the breakpoints most appropriate for your platform and users.

Different components are recommended for performing the same function across the five layouts.

| Breakpoint | Panes | Navigation | Communication | Action |
| --- | --- | --- | --- | --- |
| Compact | 1 | Navigation bar, modal expanded  navigation rail | Simple dialog  Full-screen dialog | Bottom sheet |
| Medium | 1 (recommended) or 2 | Navigation bar, modal expanded  navigation rail | Simple dialog | Menu |
| Expanded | 1 or 2 (recommended) | Modal or standard expanded  navigation rail | Simple dialog | Menu |
| Large | 1 or 2 (recommended) | Modal or standard expanded  navigation rail | Simple dialog | Menu |
| Extra-large | 1 to 3 (recommended) | Modal or standard expanded  navigation rail | Simple dialog | Menu |

Start by designing for one breakpoint, then adjust the layout for the next size by asking these five questions:

##### 1. What should be revealed?

Parts of the UI that are hidden on smaller devices can be revealed in larger layouts.

For example:

- On mobile, the navigation rail is collapsed by default
- On an expanded device, the navigation rail can be open by default, revealing more actions and features

(fig) A product’s navigation rail can be revealed in an expanded layout

The same can be applied to [panes](https://m3.material.io/foundations/layout/scaffold/panes). Larger layouts can simultaneously display an inbox pane and a pane containing a selected conversation. Additional space doesn’t just mean making the same thing bigger.

(fig) An expanded layout for a messaging app reveals a second pane with the selected conversation

##### 2. How should a screen be divided?

When dividing a screen into layout panes, consider the breakpoint:

- Compact and medium breakpoints:  A single pane works best
- Expanded and large breakpoints:  Two panes are recommended
- Extra-large breakpoints: Consider using three panes

(fig) Compact and medium breakpoints should use a single pane, while larger breakpoints can use two

At medium breakpoints, two panes are useful when they contain low-density content with clear actions.

Don’t use two panes in medium layouts with high information density, as it can reduce usability.

(fig) A settings view with low-density content and quick actions is a good use of two panes in a medium layout

(fig) Rotating a device often changes the breakpoint. A layout can have two panes in landscape orientation, and one pane in portrait.

Single-pane layouts can focus attention on one action or view, creating a distraction-free environment for a specific goal such as:

- Playing a game
- Watching a movie
- Video calls
- Creative applications

(fig) Consider using an immersive single-pane layout for video calls

##### 3. What should be resized?

UI elements that are small on compact screens can grow as breakpoints increase. Panes can also expand to rearrange elements and make better use of space.

Consider resizing:

- Cards
- Feeds
- Lists
- Panes

Resizing can highlight imagery and improve text readability. This type of adaptation affects the scale of content and the relationship between objects on screen. For example, a vertical card on mobile can adjust its margins, orientation, text size, and density to better fit a tablet.

Across all breakpoints, adjust margins and type styles to keep text between 40–60 characters per line.

(fig) A small card in a compact layout can be resized larger in a medium or expanded layout

##### 4. What should be repositioned?

A UI and its components can reflow or reposition to make use of additional space on expanded screens and in resized panes. Repositioning is also a way to match the ergonomic and input needs that change across device sizes, such as shifting actions from the bottom of a compact window to the leading edge of medium and expanded windows. This method is similar to responsive design on the web.

Consider:

- Repositioning cards
- Adding a second column of content
- Creating a more complex layout of photos
- Introducing more negative space
- Ensuring reachability for navigation and interactive elements

Internal elements can be anchored to the left, right, or center as a parent container scales. Internal elements can also maintain fixed positions, such as a floating action button (FAB) in a navigation rail.

(fig) Tabs can remain anchored to the middle of a layout at both compact and medium breakpoints

In the case of a button, the icon and text label within the button container can remain anchored to each other, staying centered as the button container scales horizontally.

(fig) Button icons and label text can remain anchored to each other no matter the width

##### 5. What should be swapped?

As a layout changes across breakpoints, components with similar functions can also be exchanged. This makes it possible to adjust a layout for large-scale changes to the ergonomic and functional qualities of an interface.

For example, a bottom navigation bar in a compact layout can be swapped with a navigation rail in a medium layout.

**[DO]** (fig) Swap a navigation bar in a compact layout for a navigation rail in a medium or expanded layout

Likewise, a navigation rail can swap from collapsed to expanded at larger breakpoints.

Use caution when swapping components. Make sure:

- The interchangeable components are functionally equivalent
- The component swap serves a functional and ergonomic purpose

Don’t swap a button for a chip. Be careful when changing between list items and cards.

**[DO]** (fig) A collapsed navigation rail in medium or expanded layouts can become an expanded navigation rail in large or extra-large layouts

**[DON'T]** (fig) Don’t arbitrarily swap components that aren’t functionally equivalent, such as swapping a button with a menu

##### Common swappable components

| Component type | Compact | Medium | Expanded |
| --- | --- | --- | --- |
| Navigation | Navigation bar | Collapsed navigation rail | Collapsed navigation rail |
| Navigation | Modal expanded navigation rail | Modal expanded navigation rail | Standard expanded navigation rail |
| Communication | Basic or full-screen dialog | Basic dialog | Basic dialog |
| Supplemental selection | Bottom sheet | Menu | Menu |

### Breakpoints — Compact

Source: https://m3.material.io/foundations/layout/breakpoints/compact


Layouts for compact breakpoints are for **screen widths smaller than 600dp.**

(fig) A compact breakpoint focuses on a single view

#### Navigation

Use a navigation bar or modal expanded navigation rail.

Place navigation components close to the edge of the screen where they’re easier to reach.

(fig) Place navigation elements near the bottom of a compact window so they’re easy to reach

#### Panes

Use a single pane in compact layouts.

(fig) 1. Single-pane layouts work best for compact breakpoints

#### Spacing

Margins are 16dp from the leading and trailing edge of the window.

(fig) In compact layouts, use 16dp margins

#### Special considerations

A compact layout will need to transition dynamically to a medium or expanded layout when:

- A foldable device is unfolded
- A mobile device is rotated from portrait to landscape
- A tablet exits split-screen mode
- A product is resized to be larger in multi-window mode
- A free-form window is resized

(fig) Compact layouts should dynamically transition to larger layouts when a device is unfolded or rotated

### Breakpoints — Medium

Source: https://m3.material.io/foundations/layout/breakpoints/medium


Layouts for medium breakpoints are for **screen widths from 600dp to 839dp.**

(fig) Single-pane layouts can focus attention on one action or view, such as a video call

#### Navigation

Place navigation components close to edges of the window where they’re easier to reach:

- Single-pane layouts: Navigation rail
- Two-pane layouts: Navigation bar

The navigation rail can be hidden in secondary destinations as long as the primary destination can still be accessed using a back button.

(fig) 1. Navigation area
2. Single pane

#### Panes

##### Single-pane layout

In a medium layout, a single pane is recommended because of limited screen width.

(fig) 1. A single-pane layout is recommended for medium breakpoints

##### Two-pane layout

Limit use of two panes for content with lower information density, such as a settings screen.

Each pane in a two-pane layout should take up 50% of the window width. Avoid setting custom widths. A drag handle can be used to expand or collapse panes to be 100% of the window width.

(fig) Two-pane layouts should use 50% widths for each pane by default

When adding navigation to a two-pane layout, use a navigation bar. This allows the panes to fully use the available window width.

(fig) Two-pane layout with:

1. Navigation bar

#### Spacing

Medium layouts have margins of 24dp.

The spacer between panes is also 24dp.

(fig) Use 24dp for margins and spacer in a medium layout

#### Special considerations

A medium layout will need to transition dynamically to a compact or expanded layout when:

- A foldable device is folded
- A tablet is rotated from portrait to landscape
- A product goes from full-screen to split-screen
- Multi-window mode is initiated
- A free-form window is resized

(fig) Think of how a medium layout should change to a compact or expanded layout

##### Reachability

For horizontal tablets and unfolded foldables, the top 25% of the screen is likely out of reach, unless the grip is adjusted. To accommodate device and hand sizes, limit the amount of interactions that are placed in the upper 25% of the screen.

(fig) 1. Limit interactions in the upper quarter of a screen, as they can be hard to reach

Avoid placing essential interactive elements too close to the bottom edge of the screen. Some users, particularly those with larger hands, might struggle to reach this area.

Specify interactions in a layout with these ergonomic regions in mind:

1. Users can reach this area by extending their fingers, which makes it inconvenient
2. Users can reach this area comfortably
3. Reaching this area is challenging when holding the device

(fig) Medium breakpoint ergonomic regions:

1. Inconvenient
2. Comfortable
3. Challenging

### Breakpoints — Expanded

Source: https://m3.material.io/foundations/layout/breakpoints/expanded


Layouts for expanded breakpoints are for **screen widths from 840dp to 1199dp.**

(fig) Two-pane layouts are often best for expanded breakpoints

#### Navigation

Place navigation components close to edges of the window where they’re easier to reach. Use a navigation rail, either collapsed or expanded.

The navigation rail can be hidden in secondary destinations as long as the primary destination can still be accessed using a back button.

For sorting, filtering, or secondary navigation, use tabs or other components directly in the pane.

(fig) 1. Navigation area
2. Single pane

#### Panes

Use a single-pane or two-pane layout.

A two-pane layout is often best for expanded breakpoints. However, a single-pane layout can work when displaying visually- or information-dense content, such as videos.

(fig) At an expanded breakpoint, reserve single-pane layouts for information-dense content

When using a [fixed-and-flexible](https://m3.material.io/foundations/layout/scaffold/panes#92371c3b-587d-4c6f-8105-05b69dcec81a) layout, the fixed pane should have a width of 360dp by default.

(fig) In a fixed-and-flexible layout, the fixed pane is 360dp by default

A [split-pane layout](https://m3.material.io/foundations/layout/scaffold/panes#dc7982b7-754c-410a-9e88-18a54557c87b) uses two flexible panes and visually centers the spacer by default.

(fig) The navigation and first pane are 50% of the window width to keep the spacer visually centered

#### Spacing

Expanded layouts have a leading and trailing margin of 24dp.

The spacer between panes is 24dp.

(fig) Use 24dp for margins and spacer in an expanded layout

#### Special considerations

An expanded layout will need to transition dynamically to a compact or medium layout when:

- A foldable device is folded
- A tablet is rotated from landscape to portrait
- The app goes from full-screen to split-screen
- Multi-window mode is initiated
- A free-form window is resized

(fig) Consider how an expanded layout should change at medium and compact breakpoints

### Breakpoints — Large & extra-large

Source: https://m3.material.io/foundations/layout/breakpoints/large-extra-large


These breakpoints are most useful for creating web experiences tailored to laptop and desktop devices. Some products may not need large and extra-large breakpoints. Consider your platform’s conventions and users when making decisions on which breakpoints to design for.

- Layouts for large breakpoints are for screen widths **from 1200dp to 1599dp**
- Layouts for extra-large breakpoints are for screen widths of **1600dp and larger**

(fig) A two-pane layout is recommended for large and extra-large breakpoints

#### Navigation

Use a navigation rail, either collapsed or expanded, depending on the amount of content.

For sorting, filtering, or secondary navigation, use tabs or other components directly in the pane.

(fig) 1. Collapsed navigation area
2. Single-pane layout

An expanded navigation rail is best suited for extra-large windows, where there's still plenty of room for content. Consider collapsing the navigation rail when space is needed, or when on pages deeper in the page hierarchy.

(fig) 1. Expanded navigation area
2. Single-pane layout

#### Panes

A two-pane layout is often best for large and extra-large breakpoints.

However, a single-pane layout can work when displaying visually- or information-dense content, such as videos.

(fig) Only use a single-pane layout for dense content or media

When using a [fixed-and-flexible](https://m3.material.io/foundations/layout/scaffold/panes#92371c3b-587d-4c6f-8105-05b69dcec81a) layout, the fixed pane should have a width of 412dp by default.

(fig) Fixed panes should be 412dp in large and extra-large layouts

When using a [split-pane layout](https://m3.material.io/foundations/layout/scaffold/panes#dc7982b7-754c-410a-9e88-18a54557c87b), the spacer should be visually centered by default, even when using an expanded navigation rail.

(fig) In split-pane layouts, navigation components shrink the leading pane, so the spacer remains centered

#### Additional panes

The extra-large breakpoint supports using a standard side sheet as a third pane. When the side sheet is present, the navigation rail can remain visible, collapse, or hide completely. Don't use more than three panes.

Note: Fixed panes in this window size are recommended to be 412dp, but side sheets have a default maximum width of 400dp.

(fig) 1. Standard side sheet (third pane)

#### Spacing

Large and extra-large layouts have a leading and trailing margin of 24dp.

The spacer between panes is 24dp.

(fig) Use 24dp for margins and spacers in large and extra-large layouts

#### Special considerations

Large and extra-large layouts will need to transition dynamically to a smaller layout when:

- The app goes from full-screen to split-screen
- Multi-window mode is initiated
- A free-form window is resized

Pay attention to typographic elements such as line length to ensure readability on large and extra-large layouts.

(fig) Consider how a large layout should change at smaller breakpoints

### Canonical layout examples — Overview

Source: https://m3.material.io/foundations/layout/canonical-examples/overview


Canonical layout examples demonstrate how to implement the layout scaffold. They’re also available in code to provide a strong starting point for your product.

Each layout example considers common use cases and components to address expectations and user needs for how products adapt across breakpoints (previously window size classes).

(fig) A layout scaffold can include bar, rail, and pane regions

#### Availability & resources

| Type | Resource | Status |
| --- | --- | --- |
| Design | [M3 Design Kit (Figma)](https://www.figma.com/community/file/1035203688168086460) | Available |
| Implementation | [Jetpack Compose: Canonical layouts](https://developer.android.com/develop/ui/compose/layouts/adaptive/canonical-layouts) | Available |
| [Android Views (MDC-Android): Canonical layouts](https://github.com/android/user-interface-samples/tree/main/CanonicalLayouts) | Available |

#### Examples

There are three canonical layout examples: feed, list-detail, and supporting pane. Each example has configurations for compact, medium, and expanded breakpoints.

Use these canonical examples as a starting point to create layouts for a product.

##### Feed

Use a feed layout to arrange elements like cards in a configurable grid for a quick, convenient view of a large amount of content.

[More on feed layouts](https://m3.material.io/foundations/layout/canonical-examples/feed)

##### List-detail

Use a list-detail layout to display explorable lists of items alongside each item’s details. This layout divides the window into two side-by-side panes.

[More on list-detail layouts](https://m3.material.io/foundations/layout/canonical-examples/list-detail)

##### Supporting pane

Use a supporting pane layout to organize content into primary and secondary sections:

- Primary display area: Contains the main content and occupies the majority of the window (typically about two-thirds)
- Secondary display area: Presents supporting content in a panel that takes up the remainder of the space

[More on supporting pane layouts](https://m3.material.io/foundations/layout/canonical-examples/supporting-pane)

#### Advanced custom layouts

To create a custom layout, build on top of canonical layouts or layer scaffold elements.

##### Layering

Use the [levitate](https://m3.material.io/foundations/layout/scaffold/panes#96bf71b8-04b8-4fff-97c7-9bc782fbf401) adaptive strategy to create a layered layout. Layering panes above other content can create a focused, task-oriented experience such as:

- Reviewing a shopping basket
- Responding to comments
- Creating a calendar event

(fig) Layering panes helps people focus on a specific task

### Canonical layout examples — Feed

Source: https://m3.material.io/foundations/layout/canonical-examples/feed


A feed layout uses a grid composition to enable quick content browsing and discovery. Key use cases include news, photos, and social media.

(fig) Feed layouts help people quickly browse and discover content

#### Usage

Use a feed layout to show different pieces of content through cards and lists.  
  
Feeds support displays of almost any size as grids can adapt from single to multi-column.

(fig) Feed layouts can adapt the number of columns across breakpoints

#### Dividing space

A feed composition is flexible enough to allow for content with varying proportions and sizing.

(fig) Feeds can organize content of different sizes, like using small and large cards

Use size and position to establish relationships among content elements.

Feed items should reflow when the amount of available space changes like:

- Rotating or unfolding a device
- Entering multi-window mode

The order of items is determined by their position.

[More on adaptive design for cards](https://m3.material.io/components/cards/guidelines#99e8d17d-5bde-4bb9-8784-0ca403325b10)

(fig) Feed items can change size to group content

#### Across breakpoints

##### Compact

A feed layout should stack vertically, like a list of cards with individual items filling the width of the pane.

(fig) In compact windows, the cards in a feed stack vertically, filling the full width:

1. Compact breakpoint
2. Expanded breakpoint

##### Medium

A feed layout can support components with different widths and be split across multiple columns.

(fig) Feed layouts can add columns in a medium window

##### Expanded, large, & extra-large

A feed layout can support components with different widths and be split across multiple columns. The number of columns should usually increase at expanded breakpoints.

(fig) Column width can increase at larger breakpoints

### Canonical layout examples — List-detail

Source: https://m3.material.io/foundations/layout/canonical-examples/list-detail


Many layouts can be split into a list view and a detail view.

Key use cases for this layout include parent-child pairings of information like:

- Text message + conversation
- File browser + open folder
- Musical artist + album detail
- Settings + category detail
- Email inbox + selected email

(fig) 1. List
2. Detail

#### Usage

Use the list-detail layout for quickly accessing details of an item from a long list of content.

Examples include:

- Showing a series of conversations and a text message
- Browsing files and seeing their details
- Browsing multiple albums and seeing individual track information

(fig) Simplified diagram of:

1. List area
2. Detail area

##### Dividing space

(fig) The most basic list-detail views for compact, medium, and expanded layouts

A list-detail layout uses two panes. Depending on the breakpoint, the two panes may appear together in the same layout or across separate layouts.

List-detail layouts use the same pane guidance as all single and two-pane layouts, including special behavior for foldables.

| **Breakpoint (dp)** | **Visible panes** |
| --- | --- |
| Compact (0-599) | 1 pane |
| Medium (600-839) | 1 (recommended) or 2 panes |
| Expanded (840+) | 2 panes |
| Large (1200-1599) | 2 panes |
| Extra-large (1600+) | 2 panes |

#### Across breakpoints

##### Compact

- Use a single-pane layout
- Only one view is visible at a time, either list or detail

(fig) 1. Phone in portrait orientation
2. Closed foldable
3. Tablet in split-screen mode

##### Medium

- Use a single-pane layout for information-dense content or deep focus

(fig) 1. Foldable open flat
2. Tablet in portrait orientation

- Use a two-pane layout to browse collections and switch between items quickly
- To maximize horizontal space for two-pane layouts, use a bottom navigation bar or modal navigation rail

(fig) 1. Foldable open flat
2. Tablet in portrait orientation

##### Expanded, large, & extra-large

- Use a two-pane layout

(fig) 1. Phone in landscape orientation
2. Tablet in landscape orientation

#### Behavior

##### Single vs two-pane

- Back button: Appears in detail view only for single-pane layouts
- Selected state: Appears only in list view for two-pane layouts
- Visual focus: Use [explicit and implicit grouping](https://m3.material.io/foundations/layout/grids-spacing/spacing#e7e6d1ac-031a-4757-afcf-b223f23654ea) to direct focus in two-pane layouts

(fig) 1. Use a selection state in two-pane layouts only
2. Use a back button in single-pane layouts only

##### Transitioning between layouts

The amount of available space is dynamic and changes based on how someone uses a device, such as rotating or unfolding it, or entering multi-window mode.

(fig) A two-pane layout adapts to a single-pane layout when a device rotates from an expanded to medium breakpoint

###### No selected list item

A single-pane layout shows a list view, while a two-pane layout shows placeholder content in the detail pane.

In some cases, such as multi-select, the most recently used pane should stay visible when switching to single-pane layout.

(fig) If no item is selected when a foldable opens, the detail pane displays an empty state

###### Selected list item

When switching from a single- to two-pane layout, both panes should be shown and the selected item’s details are visible.

When going from a two- to single-pane layout, the view depends on the product:

- The detail pane should typically show in a single-pane layout, and an app bar appears
- If the product supports selection without deep navigation, like multi-select, the list view can show with the item selected
- Consistency is key: If a layout showed the list view previously, it should return to that view when returning to a single pane

(fig) If an item is selected when a foldable opens, the detail pane shows that item

(fig) When a foldable closes with an item selected, the single pane shows the detail view

###### Persistent states

In most cases, a state should be saved when navigating between detail views. This includes read and unread content.

(fig) Detail views should retain their scroll position when navigating to other items

### Canonical layout examples — Supporting pane

Source: https://m3.material.io/foundations/layout/canonical-examples/supporting-pane


The supporting pane layout organizes content into primary and secondary areas.

The primary area contains the main content and occupies the majority of the space. The secondary area contains supporting content.

Key use cases for supporting pane layouts include:

- Productivity
- Document editing and commenting
- Content and media browsing

(fig) Supporting pane layouts organize content into primary and secondary areas

#### Usage

Use the supporting pane layout when the secondary content is only meaningful in relation to the primary content.

For content with a parent-child relationship, use a [list-detail layout](https://m3.material.io/foundations/layout/canonical-examples/list-detail) instead.

(fig) Supporting panes provide contextual info for the primary area

#### Dividing space

The window is divided between a focus pane and a supporting pane.

Depending on the breakpoint, the supporting pane may appear below or beside the focus pane.

(fig) Supporting panes can appear beside or below the primary area

| Supporting pane placement | Pane width | Breakpoint |
| --- | --- | --- |
| Below | Flexible | Compact or Medium |
| Leading or trailing | Fixed (360 dp) | Expanded |

#### Across breakpoints

##### Compact

The supporting pane should appear below the focus pane.   
  
A bottom sheet can be useful for keeping focus on the primary pane while providing access to supporting information.

(fig) Bottom sheets can provide supporting information in compact windows

##### Medium

The supporting pane should appear below the focus pane.

(fig) Supporting panes appear below the focus pane in medium windows

##### Expanded

The supporting pane should appear on the leading or trailing side of the focus pane.

(fig) Supporting panes appear beside the focus pane in expanded windows

### Scaffold — Overview

Source: https://m3.material.io/foundations/layout/scaffold/overview


- The layout scaffold structures every piece of an adaptive layout into bars, rails, and panes
- Bars can frame the page to help people navigate through a product
- Rails create the perimeter space surrounding panes, creating space for elements like navigation and toolbars
- Panes hold a product’s primary content, adapting to breakpoints (previously window size classes) and other conditions

#### Availability & resources

| Type | Resource | Status |
| --- | --- | --- |
| Design | [M3 Design Kit (Figma)](https://www.figma.com/community/file/1035203688168086460) | Available |
|  | [Spacing system & tokens](https://m3.material.io/styles/spacing) | Available |
| Implementation | [Jetpack Compose: Rulers](https://developer.android.com/reference/kotlin/androidx/compose/ui/layout/Ruler) | Available |

(fig) 1. Safety region
2. Bar
3. Pane
4. Rail

### Scaffold — Bars

Source: https://m3.material.io/foundations/layout/scaffold/bars


#### Bars

Bars frame the screen to help people navigate through a product. They typically contain an app bar or bottom navigation bar.

Bars can span a single pane or across the full width of a window.

(fig) 1. A navigation bar occupies the bottom bar region on mobile
2. An app bar occupies the top bar region on the web

App bars are placed at the top of the screen to help people navigate, providing a title and 1–2 essential actions like search or back.

(fig) 1. The app bar sits at the top of the screen, outside of the safety region

Navigation bars let people switch between 3–5 primary UI views at compact or medium breakpoints.

(fig) 1. The navigation bar sits at the bottom of the screen, above the safety region

##### Safety region

Bars are placed adjacent to the safety regions, which contain [system UI](https://developer.android.com/develop/ui/compose/system/system-bars) elements.

The safety region shouldn’t contain primary content.

(fig) 1. The safety region—at the top and bottom edges of the screen on compact devices—protect system UI elements

### Scaffold — Rails

Source: https://m3.material.io/foundations/layout/scaffold/rails


#### Rails

Rails are the next level in layout after bars, filling the perimeter space surrounding panes or floating above them.

(fig) Rails occupy the spaces immediately adjacent to bars:

1. A toolbar sits above the navigation bar
2. A navigation rail and companion rail occupy the leading and trailing sides of a large window

On compact screens, the top and bottom rail regions can be used for components like:

- Toolbars
- Chat inputs
- FABs
- Other primary controls related to an individual screen

(fig) 1. On mobile, a toolbar can float in the rail region

On larger screens, there are rails on the sides of the screen (as well as top and bottom). The leading side rail region commonly holds the navigation rail.

(fig) At larger breakpoints, the leading rail region can be occupied by an expanded navigation rail

The rail region on the trailing side of a large screen can hold supporting controls or actions that modify or relate to the content in a pane.

(fig) The rail region can also be occupied by a vertical toolbar or other controls

In [XR](https://m3.material.io/foundations/xr/design/overview), rail components can become [orbiters](https://developer.android.com/design/ui/xr/guides/spatial-ui#orbiters), which float outside the visible content area.

(fig) In full space, an XR navigation rail can float outside the main content as an orbiter

### Scaffold — Panes

Source: https://m3.material.io/foundations/layout/scaffold/panes


#### Panes

All layouts are made up of 1–3 panes. The type of layout and amount of panes you choose should depend on the breakpoint (previously window size classes) and the type of product being built.

(fig) Layouts often include multiple panes that work together

All layouts are made up of 1–3 visible panes. The type of layout and amount of panes you choose should depend on the breakpoint and the type of product you're building.

| Breakpoint | Recommended pane total | Other pane totals |
| --- | --- | --- |
| Compact | 1 | -- |
| Medium | 1 | 2 |
| Expanded | 2 | 1 |
| Large | 2 | 1 |
| Extra-large | 2 | 1, 3 |

Panes can be:

- Fixed: Width doesn’t change based on available space
- Flexible: Width changes based on available space, and can grow and shrink

All layouts need at least one flexible pane.

(fig) 1. Fixed pane
2. Flexible pane

Panes can be permanent or temporary. Temporary panes can appear and be dismissed when necessary, affecting the layout and size of other panes.

(fig) Panes can be displayed permanently side by side

(fig) Temporary panes can be dismissed

##### Single-pane layouts

Single-pane layouts use one flexible pane that extends to fit the available space in a layout’s width. They can be used at any breakpoint, but are recommended for compact and medium.

(fig) A single flexible pane adapts to fit any breakpoint

##### Two-pane layouts

**Split-pane layout**

A split-pane layout keeps the spacer visually centered. It’s best for foldable devices and dynamic layouts.

When a navigation rail or drawer is present, it only reduces the size of one pane. The other pane remains at 50% of the window width.

(fig) The navigation and first pane should be 50% of the window width to keep the spacer centered

With a navigation bar, or no navigation, both panes span 50% of the window width by default.

(fig) With no navigation rail visible, split-pane layouts set each pane to 50% width by default

**Fixed-and-flexible layout**

This layout is common for expanded, large, and extra-large breakpoints. The fixed-and-flexible panes can appear in whichever order is best for the content.

The fixed pane is often temporary, and used for side sheets or lists with light information density.

(fig) 1. Fixed pane
2. Flexible pane

##### Three-pane layouts

While less common, the extra-large breakpoint supports using a standard side sheet as a third pane. When the side sheet is present, the expanded navigation rail can remain visible, change into a collapsed navigation rail, or hide completely. Don't use more than three panes.

Note: Fixed panes at this breakpoint are recommended to be 412dp, but side sheets have a default maximum width of 400dp.

(fig) 1. A standard side sheet can be used as a third pane

#### Pane expansion & resizing

Panes can be resized, expanded, and collapsed using drag handles.

- In a split-pane layout, both flexible panes can be freely adjusted, or can snap to certain widths.
- In a fixed-and-flexible layout, the drag handle can fully collapse and expand the fixed pane. This makes it easy to switch between a single-pane and two-pane layout.

The drag handle should also toggle between layout sizes when selected. This can be a tap, double tap, or long press.

(fig) Drag handles can adjust pane size in a list-detail layout

At expanded, large, and extra-large breakpoints, two-pane layouts can be customized to snap to set widths when resized.

The recommended custom widths are:

- 360dp
- 412dp
- Split-pane with spacer centered visually

(fig) Panes can snap to custom widths when releasing the drag handle

##### Persistent pane resizing

The persistent resizing behavior remembers a person's pane width preference. Use this for most resizable layouts.

(fig) Pane widths persist even after a person closes the app

The width persists even after a breakpoint change. This means that if a two-pane layout is collapsed to one pane at any size, it’ll remain collapsed even when changing breakpoints.

(fig) When a two-pane layout is resized to a single full-width pane, that pane should remain at full-width after switching breakpoints

##### Temporary pane resizing

The temporary resizing behavior doesn't remember a person’s preferences for pane width. This is primarily used in supporting pane layouts where resizing is uncommon.

(fig) Supporting pane layouts can have a pane drag handle to temporarily resize the secondary content

With temporary resizing, panes should always return to the default layout after the pane or product is closed and reopened. This ensures content is a suitable size for most interactions.

(fig) The pane width can be temporarily adjusted using the drag handle, but will return to the default layout

#### Displaying multiple panes

Multiple panes can be displayed in three ways: co-planar, floating, or docked. The layout depends on breakpoint, what the pane does, and how people interact with it:

- Co-planar: Two side-by-side panes. To stay accessible, persistent utilities like tool panels should be co-planar with primary content.
- Floating: A small pane displays above larger panes. Temporary tasks should remain floating regardless of breakpoint, such as a dialog.
- Docked: A small pane pinned to the edge of a window. For example, a bottom sheet can be docked to show additional actions.

(fig) Co-planar: Panes are displayed side by side

(fig) Floating: A pane is displayed above other panes or content, like a dialog

(fig) Docked: A pane is displayed above other panes and one of its edges extends beyond one side of the screen, like a bottom sheet

#### How panes adapt

Pane layouts can adapt using three strategies: **show and hide, levitate,** or **reflow**. When a window is resized or changes orientation, these strategies allow panes to reorganize themselves to preserve context and meaning.

##### Show and hide

As the breakpoint size or orientation changes, panes can enter and exit the screen or appear next to one another.

(fig) A pane can be shown or hidden depending on the available space and orientation

##### Levitate

Panes can be elevated above other content as **floating** or **docked** panes. This strategy helps panes appear relative to their triggers.

Floating panes:

- Appear in front of the body content
- Can be customized to be dragged or resized

When adding controls that resize or move a floating pane, provide accessible controls.

(fig) A co-planar pane can float when switching breakpoint or orientation

On large screens:

- Floating panes are the default
- The scrim behind a floating pane is optional

(fig) 1. Floating pane with a scrim
2. Floating pane without a scrim

Docked panes are usually at the bottom of the window, like a bottom sheet.

At medium and expanded breakpoints, docked panes can adapt into floating panes.

(fig) A docked pane can adapt into a floating pane at medium and expanded breakpoints

Alternatively, at medium and expanded breakpoints, a docked pane can adapt into a co-planar pane.

(fig) A docked pane can also adapt into a co-planar pane at medium and expanded breakpoints

On large screens, consider changing docked panes into co-planar panes.

(fig) 1. A compact screen can have a docked pane
2. On a large screen, it should change to a co-planar pane

##### Reflow

Panes can be reorganized on screen as the breakpoint or orientation changes, also known as reflow.

For example, in a vertical orientation, the supporting pane can move underneath the primary pane.

(fig) In a vertical orientation, the supporting pane can move below the primary pane

Reflow also applies to breakpoints. When there’s not enough horizontal space for panes, they can stack vertically instead.

(fig) Panes can change size, location, and orientation when switching screen sizes

#### Spatial panels

On XR devices, pane layouts can be presented in disconnected spatial panels. These panels must have clear containment to make them easy to see on any background.

The content in a spatial panel can use implicit grouping when the pane has an explicit container to distinguish it from the environment.

(fig) When a pane uses explicit containment, content can use implicit grouping

#### Accessibility considerations

**Coplanar panes**

- The focus order should match the visual arrangement of the panes on screen

**Floating panes**

Modal floating pane:

- When active, the elements behind it can’t be interacted with
- Focus moves automatically to the first element in the pane, and when the pane is closed, focus moves back to the element that triggered it, like a dialog
- If triggered automatically, focus should still move to it, but when it’s closed, focus should go to the next most logical element on screen
- It disappears when a person interacts with something behind it.

Non-modal floating pane:

- When open, other parts of a product can be interacted with
- Focus should be able to move to and from the pane
- The pane should be available in a logical reading order of the screen

**Docked panes**

- Have the same focus requirements as modal and non-modal panes
- The focus order should match the visual arrangement of the panes on screen

### Grids &amp; spacing — Overview

Source: https://m3.material.io/foundations/layout/grids-spacing/overview


- Grids create a consistent foundation and adapt across breakpoints (previously window size classes)
- Use spacing to group related information and direct people’s attention to key actions
- Density helps people see and compare more information in data-heavy views

(fig) Layouts in Material are based on a grid that adapts across all screen sizes

#### Availability & resources

| Type | Resource | Status |
| --- | --- | --- |
| Design | [M3 Design Kit (Figma)](https://www.figma.com/community/file/1035203688168086460) | Available |
| [Spacing system & tokens](https://m3.material.io/styles/spacing/overview) | Available |
| Implementation | [Jetpack Compose: Rulers](https://developer.android.com/reference/kotlin/androidx/compose/ui/layout/Ruler) | Available |

#### What’s new

##### **May 2026**

- How to use grids and rulers to adapt layouts across devices
- Expressive spacing guidelines

(fig) As screen size increases, additional columns allow for a richer layout

### Grids &amp; spacing — Grids

Source: https://m3.material.io/foundations/layout/grids-spacing/grids


- Layouts in Material are based on a grid that adapts across all breakpoints (previously window size classes)
- Parts of the layout scaffold like rails and panes are positioned on this grid to create consistent adaptive layouts
- The structure and spacing values used in a grid can add personality to a product’s layout

#### How to use grids

##### Start with placing grid columns

Grids adapt across breakpoints. As the size increases, column count, width, and spacing change as well.

(fig) The number and size of columns changes based on breakpoints

When moving between sizes, column count may increase to show more content or controls.

(fig) On compact screens, fewer columns are used to create a focused layout

(fig) As screen size increases, for example when a foldable screen is unfolded, additional columns allow for a richer layout

##### Place bars & rails

Populate regions of the layout scaffold that are closest to the edges of the screen’s usable space first. This may include:

- Bars like the navigation bar and rail
- Components like toolbars and app bars

(fig) The bar region can contain a toolbar

(fig) The rail region on larger screens usually contains a navigation rail

##### Place panes

Next, populate the main region of the screen with panes with content and components, based on available space and structure.

See the [canonical layout examples](https://m3.material.io/foundations/layout/canonical-examples) for ideas on which panes are appropriate for a product.

(fig) 1. Primary pane
2. Supporting pane

#### Rulers & alignment

Rulers are a set of recommended global alignment lines that help create consistent focal points in a product, while keeping content and components consistently aligned.

[How to implement rulers in Compose](https://developer.android.com/reference/kotlin/androidx/compose/ui/layout/Ruler)

(fig) 1. Margin
2. Bar or safety region
3. Title
4. Content 1
5. Content 2
6. Content 3
7. Content 4
8. Bar or safety region
9. Rail

##### Bar & safety rulers

Bar and safety rulers reserve space for [system UI](https://developer.android.com/training/system-ui) elements like the status bar and gesture navigation.

They ensure actionable content like app bars aren’t covered by system UI.

(fig) Bar and safety rulers align to the edges of a screen’s usable space, providing a reference for where system UI like the status bar or gesture navigation appear

##### Title rulers

The title ruler creates consistency for the screen’s title, aligning the text, icons, and other components in an app bar.

(fig) The title ruler aligns with the title in an app bar

##### Content rulers

Use content rulers to align and anchor key content, such as headlines and carousels.

- First content ruler: Emphasizes major blocks like hero images, headlines, or primary components
- Secondary rulers: Determine where supplementary text or actions begin

(fig) Content rulers offer flexible alignment options to help create a consistent layout across a product

(fig) Realigning primary components or content to a content ruler can create strong hierarchy and visual rhythm across a product

##### Ruler options

Margin rulers come with some wiggle room to determine how tight or loose a product’s content feels on-screen. The standard ruler can be adjusted to the left or right.

Choosing a narrower or wider margin can create or remove negative space, or create expressive moments in a content-forward product.

(fig) Margin rulers can adjust to create more or less negative space

Rulers can also be used to create more immersive experiences. For example, a photo grid can take the full width of the screen, while components like search use wider margins.

(fig) Rulers allow components and media to use different margin widths

### Grids &amp; spacing — Spacing

Source: https://m3.material.io/foundations/layout/grids-spacing/spacing


- Spacing helps group content, direct attention, and shape the personality of a product
- A denser layout can feel more serious and focused, while a more spacious layout can feel calm and open
- Material’s spacing system can adapt to breakpoints and density settings. [More on the spacing system](https://m3.material.io/styles/spacing/overview)

(fig) Desktop layouts can use more generous spacing than mobile layouts

#### Spacing to group content

Grouping connects related elements that share context, such as an image and its caption. Use spacing to visually tie elements together and establish boundaries between unrelated items.

(fig) Placing a caption under an image creates an implicit group

**Explicit grouping** uses visual boundaries like outlines, dividers, and shadows to group related elements in an enclosed area.

It can also indicate that an item is interactive, such as:

- List items between dividers
- A card displaying an image and its caption

(fig) Outlines define clear boundaries to explicitly group elements

**Implicit grouping** uses close proximity and open space (rather than lines and shadows) to group related items.

For example, the items in a carousel are placed close together, with space around the composition to separate them from other content.

(fig) Close spacing implicitly groups carousel images

#### Spacing to direct attention

Use rhythm, similarity, and other grouping principles to distinguish and highlight important elements.

##### Rhythm

Consistent spacing between related elements or groups makes them easier to navigate with the eye.

(fig) Cards should maintain consistent horizontal spacing to establish a strong rhythm when their height varies

##### Similarity

Similar elements should have the same spacing and sizing in a layout to show they’re related.

Leading elements like thumbnails, avatars, or icons should always be aligned.

(fig) Thumbnails in a shopping basket should use identical sizes and styles to signal that each one represents a product, even if the original photos have different aspect ratios

##### Proximity

Place components near each other to create cohesive groups. This helps people understand the relationships between information and actions.

For example, buttons should be close to the content they’re affecting.

(fig) Placing two buttons as a group near content implies they’ll both affect it in similar ways

##### Continuity

Place related elements in a container, row, or column to establish a clear group or relationship.

(fig) Use a row of chips to signal a single, unified control

#### Spacing as expression

Give the most important content, tasks, or actions visual prominence with generous spacing and the brightest surfaces.

##### Focal points

Consistent placement of key actions and information helps build recognizable focal points across a product.

(fig) Carousel images, categories, and titles should appear in a consistent location across pages

##### Negative space

Allow negative space to give form and meaning to elements on screen. Framing important actions or content with generous spacing creates emphasis.

(fig) Negative space gives shape and emphasis to the course header

### Grids &amp; spacing — Density

Source: https://m3.material.io/foundations/layout/grids-spacing/density


- Information density is the consideration of the amount of information visible on the screen
- The default target size should be at least 48x48 CSS pixels
- People can change density as long as the density controls are accessible
- Apply density thoughtfully; not every layout needs it
- Layout and component scaling (component adaptation or component density) can allow people to scan, view, or compare more information at once

(fig) Information density can change based on context and preference

(fig) Consider whether components should scale

**Information density**

- Information density can be achieved through layout and design decisions without using component scaling
- Some people may not benefit from increased density

**Component scaling**

- Components can adapt and change dimensions to help people scan, view, or compare different amounts of information
- Don't apply component scaling by default if it would result in a target below 48x48 CSS pixels

(fig) Information density and component scaling can be used together to provide more information and additional user control

#### Information density

Information density refers to the amount of content (such as text, images, or videos) in a given space.

A layout’s spacing dimensions, including margins, spacers, and padding, can change to increase or decrease its information density. High density layouts are useful when people need to scan, view, or compare a lot of information, such as in a data table. Increasing the layout density of lists, tables, and long forms makes more content available on-screen.

Consider density settings in the context of a device. Although a person may prefer a denser layout for desktop, they may not for mobile. Density shouldn’t automatically change across breakpoints or orientation unless a person changes it.

**[DO]** (fig) Consider using higher density information design when people need to scan lots of information

(fig) Consider the amount and priority of information on-screen. Higher density can be useful for data-rich products where people expect to scan lots of information quickly. Examples: News, financial portals, dashboards

(fig) Lower density can be better for sites prioritizing aesthetics, a focused message, less information, or easier navigation

#### Component scaling

The component density scale controls the internal spacing of individual components.

The density scale is numbered, starting at 0 for a component’s default density. The scale moves to negative numbers (-1, -2, -3) as space decreases, creating higher density.

Higher density is typically applied by decreasing the top and bottom padding or overall height by 4dp.

(fig) Apply component density based on the needs and layout of a design

Center the grouped element within the component container.

Text size shouldn’t change as the container size scales.

(fig) The measurement between the label and input is 20dp

(fig) The label and input are centered within their parent container

**[DON'T]** (fig) Don’t increase density in UIs that involve focused tasks, such as selecting from a menu. It reduces usability by limiting selectable space.

**[DON'T]** (fig) Don't increase the density in components that alert a person of changes, such as snackbars or dialogs

##### Avoid applying component scaling by default

People should be able to **opt in** to dense layouts and components.

To ensure density settings can be easily reverted, settings interactions must use default target sizes (48x48 CSS pixels).

Don't scale layouts below 48x48dp by default.

(fig) People can opt in to dense layouts in settings

#### Targets

Dense components can be less accessible because interactive elements are smaller, so use caution when increasing information density.

**[CAUTION]** (fig) Use caution when applying component scaling where selectable targets will be reduced to less than 48x48dp. Only apply density where it provides a better experience.

Use caution when applying density to interaction targets. Accessible targets should retain a minimum of 48x48dp, even if the visual element, such as an icon, is smaller.

(fig) The target should remain 48x48dp, even if the icon is smaller

(fig) The interaction target of a common button can be larger, as long as it meets the 48x48dp minimum size

#### Pixel density

Pixel density is the number of pixels per inch. High-density screens have more pixels per inch than low-density ones. Elements with the same pixel dimensions appear larger on low-density screens and smaller on high-density screens.

To calculate pixel density:

Pixel density = Screen width (or height) in pixels / Screen width (or height) in inches

(fig) High-density elements have more pixels per inch

(fig) Low-density elements have fewer pixels per inch

##### Density-independent pixels

Density-independent pixels, written as dp, are flexible units that scale to have uniform dimensions on any screen. They provide a flexible way to accommodate a design across devices. The Material design system uses density-independent pixels to display elements consistently on screens with different densities.

A dp is equal to one physical pixel on a screen with a density of 160.

To calculate dp:   
dp = (width in pixels \* 160) / screen density

(fig) Low-density screen displayed with density independence

(fig) High-density screen displayed with density independence

| Screen physical width | Screen density | Screen width in pixels | Screen width in dps |
| --- | --- | --- | --- |
| 1.5 in | 120 | 180 px | 240dp |
| 1.5 in | 160 | 240 px |
| 1.5 in | 240 | 360 px |

### Bidirectionality &amp; RTL

Source: https://m3.material.io/foundations/layout/bidirectionality-rtl


[Over 2 billion people](https://www.w3.org/International/questions/qa-scripts.en.html) read and write in right-to-left (RTL) languages like Arabic, Hebrew, Farsi, and Urdu. Layouts should support both left-to-right (LTR) and RTL languages through mirroring and other best practices to ensure content is easy for global audiences to understand and navigate. Consider the holistic experience including [global writing](https://m3.material.io/foundations/content-design/global-writing/overview), localizing voice and [design principles for culturally appropriate icons](https://m3.material.io/styles/icons/designing-icons#5f0e344b-17f8-4b91-b0e4-45671b9900f4).

Material's components are built to support RTL, such as naming elements and tokens as "leading" and "trailing." However, extra configuration may be needed to achieve specific RTL situations.

#### Mirroring

When a layout is changed from LTR to RTL (or vice-versa), or flipped horizontally, it’s often called mirroring. UI elements and text that typically appear on the left in LTR aligns to the right. Reading flow starts from the top right corner, instead of the top left.

Not all elements mirror with RTL languages. For example, graphs and charts maintain a LTR directionality for Persian and Urdu.

(fig) A mirrored layout in an RTL language reverses the alignment and ordering of elements

#### Text rendering

Correct text rendering is foundational for a great user experience, and it’s critical for readability and usability. Text rendering has two parts:

1. Alignment: How the edges of the text box are placed alongside other elements
2. Directionality: How text and other elements flow within a text box, like left-to-right or right-to-left

In RTL languages, text is usually right-aligned, and elements flow from right-to-left.

Common issues with RTL language rendering are text entry, cursor position, punctuation, phone numbers, and URLs.

Improperly rendering text in RTL languages can create cognitive overload and negatively impact user sentiment and trust.

**[DON'T]** (fig) Don't reverse the order of the email username and domain (@google.com). The domain should always be to the right of the username. Usernames can still be written RTL, with the cursor moving to the left.

Note: This example isn’t translated to illustrate a common issue with text rendering.

**[DON'T]** (fig) Don’t apply LTR directionality to RTL content, because it may scramble word order. To ensure readability across all languages, the content should have both RTL alignment and directionality.

Note: This example isn’t translated to illustrate a common issue with text rendering.

#### Icons & symbols

In RTL languages, directional UI icons, like back and forward, should be mirrored. However, in Hebrew, timelines and media controls on a page should retain left-to-right directionality.

The meaning of icons and symbols can vary significantly across cultures. For additional guidance, refer to [design principles for icons](https://m3.material.io/styles/icons/designing-icons#5f0e344b-17f8-4b91-b0e4-45671b9900f4).

(fig) Back and foward icons are mirrored in RTL

(fig) Send buttons are mirrored in RTL. Help icons are mirrored in some RTL languages, like Urdu and Persian.

#### Time

Linear representations of time are often mirrored in RTL language experiences.

Linear progress indicators should move from right to left for most RTL languages, except Hebrew where it should remain LTR.

Circular representations of time remain the same.

(fig) 1. RTL linear progress indicator starts to fill progress from the right
2. Circular progress indicators move clockwise

##### Media players

Media controls for video or audio players are always LTR.

(fig) In Urdu, controls and progress for media and a podcast title are shown in LTR, while all other content is RTL

##### Clocks

For RTL languages, the directionality of time remains LTR, and clocks still turn clockwise. However, the AM/PM symbols for 12h clocks should be placed to the left. The 24-hour clock is often used in countries where the primary language isn’t English.

Clock icons, circular refresh icons, and progress indicators with arrows pointing clockwise shouldn’t be mirrored.

(fig) 24-hour clocks in RTL move clockwise, but mirror elements such as buttons

(fig) 12-hour clocks in RTL move clockwise, but mirror UI elements such as AM/PM and buttons

#### Canonical layout examples

##### List-detail

The [list-detail layout](https://m3.material.io/foundations/layout/canonical-examples/list-detail):

- Is a single-pane at compact breakpoints, switching between list and detail views
- Divides the window into two side-by-side panes on large screens
- Is mirrored in RTL

(fig) List-detail mirrored for RTL, where text and other elements are aligned to the right and flow from right to left

##### Feed

Use a [feed layout](https://m3.material.io/foundations/layout/canonical-examples/feed) to arrange content elements like cards in a configurable grid for quick, convenient viewing of a large amount of content. The feed layout is mirrored in RTL.

(fig) Feed layout mirrored for RTL, where the order of text, grid, and other elements align to the right and flow from right to left

##### Supporting pane

Use the [supporting pane layout](https://m3.material.io/foundations/layout/canonical-examples/supporting-pane) to organize content into primary and secondary display areas. The supporting pane layout is mirrored in RTL.

(fig) Supporting pane to the left of the primary content. Text and other elements within the pane are aligned to the right and flow from right to left.

#### Component examples

##### Badges

Change the position and alignment of [badges](https://m3.material.io/components/badges/overview) for RTL languages.

(fig) Small badge appears on the top left of the icon

(fig) Large badge appears on the top left of the icon

##### Toolbars

[Toolbars](https://m3.material.io/components/toolbars/overview) provide actions related to the current page. For RTL languages, mirror the order of the tools.

(fig) Mirrored floating toolbar, where the FAB appears on the left

##### App bars

[App bars](https://m3.material.io/components/app-bars/overview) are placed at the top of the screen to help people navigate through a product:

- Mirror an app bar’s layout in RTL
- Flip appropriate icons, such as arrows

(fig) 1. RTL center-aligned, small app bars
2. RTL medium, flexible app bar
3. RTL large, flexible app bar

##### Navigation rail

The [navigation rail](https://m3.material.io/components/navigation-rail/overview) is placed on the leading edge of the screen, on the left side for LTR, and on the right for RTL.

(fig) Based on the language, a navigation rail is set on a screen’s leading edge:

- Right side for RTL languages
- Left side for LTR languages

##### Expanded navigation rail

Expanded navigation rails that open from the side are always placed on the leading edge of the screen, on the left for LTR languages, and on the right for RTL.

(fig) RTL expanded navigation rails open from the leading edge and should include mirrored icons

##### Text fields

Icons in [text fields](https://m3.material.io/components/text-fields/guidelines#5c8a5f07-b1a5-455f-bf76-7ff0d724f6b0) are optional. Leading and trailing icons change their position based on LTR or RTL contexts.

(fig) Icons, symbols, and label text for RTL:

1. Icon signifier
2. Valid or error icon
3. Clear icon
4. Voice input icon
5. Dropdown icon
6. Image

##### Chips

The leading icon of input chips can be an icon, logo, or circular image.

The trailing icon is always aligned to the end side of the container. It’s placed on the right for LTR and on the left for RTL.

(fig) Filter chips shown in an RTL layout. Note: This example is not translated to help illustrate mirroring.

#### Swipe gestures

Gestures are the ways people interact with UI elements using touch or body motion.

People can navigate horizontally between peer views like tabs and to complete actions.

RTL swiping and gestures should mirror their counterparts in LTR. If a product includes a delete icon revealed when swiped from the right for LTR languages, the same should be possible on the left for RTL languages.

(fig) Swiping reveals additional action in RTL list layout

On Android, [predictive back](https://github.com/material-components/material-components-android/blob/master/docs/foundations/PredictiveBack.md) allows people to swipe left or right on the screen to go back or dismiss modal components.

RTL predictive back features should mirror those found in a LTR context.

(fig) The predictive back gesture should adjust for RTL languages

