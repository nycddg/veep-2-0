# 06 — Motion (including M3 Expressive motion)

Primary sources: https://m3.material.io/styles/motion/overview/how-it-works · https://m3.material.io/styles/motion/overview/specs · https://m3.material.io/styles/motion/easing-and-duration/applying-easing-and-duration · https://m3.material.io/styles/motion/easing-and-duration/tokens-specs · https://m3.material.io/styles/motion/transitions/transition-patterns · https://m3.material.io/styles/motion/transitions/applying-transitions · https://m3.material.io/blog/m3-expressive-motion-theming
Token values: [tokens/system-motion.md](tokens/system-motion.md) (standard and expressive scheme columns). Accessed 2026-10-09.

## Essentials
### Two systems — know which is current
- **Motion physics system (current, M3 Expressive, May 2025)**: "The physics system is replacing the previous system based on easing and duration." Springs = stiffness, damping, initial velocity.
- **Easing & duration (legacy)**: "In the expressive update, components and motion now use the motion physics system… Products should migrate to the new system. The easing and duration system is still used for transitions and can be used by teams that haven't yet updated." Transition patterns "use the legacy easing and duration system. They'll eventually be updated."

### Motion schemes
- "**Expressive** is Material's opinionated motion scheme, and should be used for most situations, particularly hero moments and key interactions." "**Standard** feels more functional with minimal bounce, and should be used for utilitarian products." Custom schemes are possible. "Most motion in a product should use the same scheme."
- The scheme is chosen at product level, not in the token name: e.g. call the expressive scheme then use `md.sys.motion.spring.fast.spatial`.
- Token types: **spatial** springs (position, rotation, size, rounded corners; overshoot and bounce) and **effects** springs ("properties such as color and opacity animations, where there shouldn't be any overshoot"), each in **fast / default / slow**.

| Spring token | Standard (damping / stiffness) | Expressive (damping / stiffness) |
|---|---|---|
| spring.fast.spatial | 0.9 / 1400 | 0.6 / 800 |
| spring.default.spatial | 0.9 / 700 | 0.8 / 380 |
| spring.slow.spatial | 0.9 / 300 | 0.8 / 200 |
| spring.fast.effects | 1 / 3800 | 1 / 3800 |
| spring.default.effects | 1 / 1600 | 1 / 1600 |
| spring.slow.effects | 1 / 800 | 1 / 800 |
(Source: token data behind styles/motion/overview/specs.)

### Platform availability (specs)
Jetpack Compose: Available (built-in components + spring tokens). Android Views (MDC-Android): "Available. Not added to components." Web: "Compatible — Use springs when possible, otherwise use curves that mimic the springs" (conversion table on the specs page, reproduced in the appendix, e.g. Expressive fast spatial = cubic-bezier 0.42, 1.67, 0.21, 0.90, 350ms). Flutter: Unavailable (how-it-works availability table).

### Legacy easing & duration tokens (verified in token data)
Emphasized `md.sys.motion.easing.emphasized` (path; CSS/iOS: N/A, use Standard as fallback) · emphasized.decelerate cubic-bezier(0.05, 0.7, 0.1, 1) · emphasized.accelerate (0.3, 0, 0.8, 0.15) · standard (0.2, 0, 0, 1) · standard.decelerate (0, 0, 0, 1) · standard.accelerate (0.3, 0, 1, 1) · legacy (0.4, 0, 0.2, 1) · linear. Durations short1–4 = 50/100/150/200ms, medium1–4 = 250/300/350/400ms, long1–4 = 450/500/550/600ms, extra-long1–4 = 700/800/900/1000ms. "The Emphasized easing set is recommended for most transitions"; Standard for small utility transitions and as fallback where Emphasized isn't supported (iOS, Web).

### Transition patterns (legacy system)
Six patterns: Container transform, Forward and backward, Lateral, Top level, Enter and exit, Skeleton loaders (see appendix). Each lists "Commonly used with" components.


---

## Source pages in scope

| Page | URL | Site content timestamp | Do | Don't | Caution |
|---|---|---|---|---|---|
| Motion physics system — How it works | https://m3.material.io/styles/motion/overview/how-it-works | 2026-07-17T05:25:55.367Z | 0 | 0 | 0 |
| Motion physics system — Specs | https://m3.material.io/styles/motion/overview/specs | 2026-07-17T05:25:55.367Z | 0 | 0 | 0 |
| Easing and duration — Applying easing and duration | https://m3.material.io/styles/motion/easing-and-duration/applying-easing-and-duration | 2026-07-17T05:03:58.337Z | 1 | 1 | 0 |
| Easing and duration — Tokens & specs | https://m3.material.io/styles/motion/easing-and-duration/tokens-specs | 2026-07-17T05:03:58.337Z | 0 | 0 | 0 |
| Transitions — Transition patterns | https://m3.material.io/styles/motion/transitions/transition-patterns | 2026-07-17T05:34:42.925Z | 0 | 0 | 0 |
| Transitions — Applying transitions | https://m3.material.io/styles/motion/transitions/applying-transitions | 2026-07-17T05:34:42.925Z | 11 | 12 | 2 |

## Verbatim rule index (every Do / Don't / Caution caption on the pages above)


**Easing and duration — Applying easing and duration** — https://m3.material.io/styles/motion/easing-and-duration/applying-easing-and-duration

- **[DO]** (fig) A transition with a well tuned duration is quick and easy to follow
- **[DON'T]** (fig) Avoid transitions with such a short duration they become jarring

**Transitions — Applying transitions** — https://m3.material.io/styles/motion/transitions/applying-transitions

- **[DO]** (fig) Transitions should use skeleton loaders with a subtle pulsing animation to stabilize a layout as it loads
- **[DON'T]** (fig) Content should not pop in and shift locations during a transition
- **[DO]** (fig) Animated transitions help users orient themselves as they navigate
- **[DON'T]** (fig) For most common transitions, jump cuts are jarring and disorienting
- **[DO]** (fig) These carousel transitions have a coherent spatial layout while navigating between a collapsed and expanded view
- **[DON'T]** (fig) Switching between horizontal and vertical carousel layouts creates a confusing spatial model
- **[DO]** (fig) This transition has a simple vertical motion that’s easy to follow
- **[DON'T]** (fig) Don’t animate many persistent elements independently. The various moving parts are distracting
- **[DO]** (fig) Fade content out before fading new content in to maintain a clean design
- **[DON'T]** (fig) Avoid showing cross faded content, the overlap of partially transparent elements can result in messy and distracting frames
- **[DON'T]** (fig) Don't fade a bottom sheet as it enters and exits, it creates distracting cross faded frames
- **[DO]** (fig) Transitions should have a simple style
- **[DON'T]** (fig) Common transitions should not use overt style effects like bouncy springs
- **[DO]** (fig) A container transform creates a clear connection between the thumbnail and expanded image. It also makes this hero transition more expressive.
- **[DON'T]** (fig) Don't use container transform in apps with deep hierarchies, the motion becomes excessive. The expressive style also doesn't fit this utility focused navigation.
- **[DON'T]** (fig) Don't use forward and backward transitions on hero moments like opening a photo memory
- **[DO]** (fig) Platform default forward and backward transitions are a sensible choice for common navigation
- **[CAUTION]** (fig) Container transform transitions require custom implementations and the motion may feel excessive when used frequently
- **[DO]** (fig) A tab component uses a lateral transition type
- **[CAUTION]** (fig) Fading content as it slides makes the peer relationship and swipe gesture less obvious. The style also may be confused with a forward and backward transition.
- **[DON'T]** (fig) A lateral transition should not be used for common forward and backward navigation as it results in an excessive amount of motion
- **[DO]** (fig) A top level transition type is used with a navigation bar, rail and drawer
- **[DON'T]** (fig) Don't use a lateral transition to move between top level destinations. The gesture conflicts with carousel and list item gestures.
- **[DO]** (fig) This bottom sheet uses an enter and exit transition pattern
- **[DON'T]** (fig) Don't use an enter and exit pattern for navigating hierarchical screens

## Appendix — verbatim page text (digest: text, tables and figure captions; image-only content represented by captions)

### Motion physics system — How it works

Source: https://m3.material.io/styles/motion/overview/how-it-works


#### A motion system designed for expression

**May 2025**

Material introduced the **motion physics system** with M3 Expressive. This new physics-based system makes interactions and transitions feel more alive, fluid, and natural. It represents a new motion language for Google products, and is easier to implement and customize than ever before.

The physics system is replacing the previous system based on [easing and duration](https://m3.material.io/styles/motion/easing-and-duration/applying-easing-and-duration).

[More on M3 Expressive](https://m3.material.io/blog/building-with-m3-expressive)

#### Availability & resources

| **Type** | **Link** | **Status** |
| --- | --- | --- |
| Implementation | [Android Views (MDC-Android)](https://github.com/material-components/material-components-android/blob/master/docs/theming/Motion.md) | Available. Not added to components. [See specs](https://m3.material.io/styles/motion/overview/specs) |
| Flutter | Unavailable |
| [Jetpack Compose](https://developer.android.com/reference/kotlin/androidx/compose/material3/MotionScheme) | Available |
| Web | Compatible with Compose springs. [See specs](https://m3.material.io/styles/motion/overview/specs) |

#### The basics: Motion schemes

The physics system has two preset motion schemes: **expressive** and **standard**. The motion scheme you choose defines how your product feels. While most motion in a product should use the same scheme, products can make [advanced customizations](https://m3.material.io/styles/motion/overview/how-it-works#fef83d57-b139-4c40-b538-9f1e9872df1b) to swap the scheme to emphasize key moments.

**Expressive** is Material’s opinionated motion scheme, and should be used for most situations, particularly hero moments and key interactions.

(fig) The expressive motion scheme overshoots the final values to add bounce

**Standard** feels more functional with minimal bounce, and should be used for utilitarian products.

(fig) The standard motion scheme eases into the final values

Need something other than the preset schemes? [Create your own!](https://m3.material.io/styles/motion/overview/how-it-works#f4ec8b84-3e39-4699-bba3-0fe7ec5cb79e) The physics system makes it easy to create custom motion schemes beyond expressive and standard, while still leveraging theming. Schemes can be easily switched between expressive, standard, or custom as needed.

#### How it works: Springs

Motion schemes use **springs**. A spring is a combination of three attributes which control all motion behavior: stiffness, damping, and initial velocity.

**Springs are versatile**. One spring can apply to many situations, such as transitions, button effects, or gestures. This makes the motion and expression feel consistent throughout the product.

**Springs feel natural**. Springs are designed to be predictable, like how objects move and bounce. They handle gestures, interruptions, and retargeting animations seamlessly.

(fig) All component motion is driven by two tokens: expressive fast spatial and expressive fast effects

#### Spring tokens

On Jetpack Compose and Android Views (MDC-Android), these springs are available as [spring tokens](https://m3.material.io/styles/motion/overview/specs)**.** Use tokens to easily apply motion to any element, making all motion feel predictable and consistent across multiple platforms. See [specs](https://m3.material.io/styles/motion/overview/specs) for how to convert springs to other platforms like Web.

There are tokens for **spatial** movement and **effects**, with three durations each: **default**, **fast**, and **slow**.

For example, to apply fast, spatial, expressive motion, call the "expressive" motion scheme, then use the token: md.sys.motion.spring.fast.spatial.

Notice that the "expressive" scheme isn't part of the token itself. Rather, it's called at the product level and applied to all tokens. This makes it easier to swap schemes without changing assigned tokens.

(fig) Each scheme (expressive, standard) has three speeds (fast, default, slow) for two types of movement (spatial, effects)

##### Style

**Spatial** spring tokens are used for animations that move something on screen, for example the x and y position, rotation, size, rounded corners. This spring overshoots the final value and bounces into place.

(fig) Spatial springs apply to movement

(fig) Spatial springs apply to rotation

**Effects** spring tokens are used to animate properties such as color and opacity animations, where there shouldn’t be any overshoot.

(fig) Effects springs applied to opacity

(fig) Effects springs applied to color

##### Speed

Spatial and effect spring tokens come in three speeds: **default**, **fast**, and **slow**. Most motion should use the default speed, while smaller elements may use fast and larger elements may use slow.

| Speed | Spatial example | Effects example |
| --- | --- | --- |
| Default | Animations that partially cover the screen, such as bottom sheet and expanded navigation rail | Opacity of the content within a navigation rail |
| Fast | Small components, such as switches and buttons | Color change of the switch handle |
| Slow | Full-screen animations | Full-screen content refresh |

(fig) Spatial motion in fast, default, and slow speeds

(fig) Effects motion in fast, default, and slow speeds

Spring tokens work across devices. For example, the spatial fast token will always be faster than default or slow, but the exact values of each token differ depending on if the device is a wearable, phone, or tablet. This ensures the movement feels fast in the context of the device.

#### Application

##### Components

On Jetpack Compose, 21 Material components use the motion physics system by default. Android Views (MDC-Android) support is coming soon. To add the motion physics system to other components, including custom-built components, use spring tokens. [View full specs](https://m3.material.io/styles/motion/overview/specs)

(fig) Material components use the physics motion system to feel more expressive

#### Advanced customizations

There are a few different levels for applying motion. Choose the level that applies best to your product or specific component.

##### Level 1: Use a default motion scheme

The expressive and standard schemes should be sufficient for all motion needs. On Jetpack Compose, components use these schemes by default.

(fig) Switch using the expressive motion scheme

(fig) Switch using the standard motion scheme

##### Level 2: Create a custom motion scheme

On Jetpack Compose, to change the default motion scheme that all components and transitions use, create a custom MotionScheme object, and return different AnimationSpec for each property of the motion scheme.

(fig) FAB menu with an extra stiff custom scheme

(fig) FAB menu with very low stiffness custom scheme

##### Level 3: Swap the default motion scheme per element

Why use just one scheme when you can use multiple? On Jetpack Compose, to use one scheme for most of the product, such as **expressive**, but on certain elements swap it for another scheme, like **standard**, override the CompositionLocal for that particular composable, screen, or element.

### Motion physics system — Specs

Source: https://m3.material.io/styles/motion/overview/specs


#### Cross-platform experiences

The motion physics system is available on Jetpack Compose and Android Views (MDC-Android), and can be easily adapted to other platforms.

| Platform | Status | How to apply |
| --- | --- | --- |
| Jetpack Compose | Available | Use built-in components and spring tokens. |
| Android Views (MDC-Android) | Available. Not added to components. | Use built-in spring tokens. |
| Web | Compatible | Use springs when possible, otherwise use curves that mimic the springs for animations without interruptions or gestures. [View web conversion table](https://m3.material.io/styles/motion/overview/specs#e3e4f10b-6314-47b7-9051-988066081fa0) |

#### Tokens and specs

The **spring composite**tokens are used in the motion physics system. These composites combine two **spring** tokens (damping and stiffness) into a single token for ease of use. The **easing**, **duration**, and **path** tokens are used by the legacy system, so can be ignored.

_[Interactive TOKEN_TYPE_UNSPECIFIED module: resource `designSystems/20543ce18892f7d9`; token sets: Motion. Resolved values are in the tokens/ folder of this guide.]_

#### Web: Convert springs to curves

| Spring | Curve |
| --- | --- |
| Expressive fast spatial | 0.42, 1.67, 0.21, 0.90. Duration =  350ms |
| Expressive default spatial | 0.38, 1.21, 0.22, 1.00. Duration =  500ms |
| Expressive slow spatial | 0.39, 1.29, 0.35, 0.98. Duration =  650ms |
| Expressive fast effects | 0.31, 0.94, 0.34, 1.00. Duration =  150ms |
| Expressive default effects | 0.34, 0.80, 0.34, 1.00. Duration =  200ms |
| Expressive slow effects | 0.34, 0.88, 0.34, 1.00. Duration =  300ms |
| Standard fast spatial | 0.27, 1.06, 0.18, 1.00. Duration =  350ms |
| Standard default spatial | 0.27, 1.06, 0.18, 1.00. Duration =  500ms |
| Standard slow spatial | 0.27, 1.06, 0.18, 1.00. Duration =  750ms |
| Standard fast effects | 0.31, 0.94, 0.34, 1.00. Duration =  150ms |
| Standard default effects | 0.34, 0.80, 0.34, 1.00. Duration =  200ms |
| Standard slow effects | 0.34, 0.88, 0.34, 1.00. Duration =  300ms |

#### Easing and duration

The original easing and duration tokens are still available to use as a fallback, and are currently used for animating transitions. [View easing and duration system](https://m3.material.io/styles/motion/easing-and-duration/applying-easing-and-duration)

### Easing and duration — Applying easing and duration

Source: https://m3.material.io/styles/motion/easing-and-duration/applying-easing-and-duration


star

Note:

In the expressive update, components and motion now use the [motion physics system](https://m3.material.io/styles/motion/overview), which uses springs. Products should migrate to the new system. The easing and duration system is still used for transitions and can be used by teams that haven't yet updated to GM3 Expressive, but is no longer maintained.

#### Suggested easing and duration pairs

Choosing the right combination of easing and duration can be complicated. As a simple starting point, these are sensible defaults that will work for most transitions.

|  |  |  |
| --- | --- | --- |
| **Easing** | **Duration** | **Transition type** |
| Emphasized | 500ms | Begin and end on screen |
| Emphasized decelerate | 400ms | Enter the screen |
| Emphasized accelerate | 200ms | Exit the screen |
| Standard | 300ms | Begin and end on screen |
| Standard decelerate | 250ms | Enter the screen |
| Standard accelerate | 200ms | Exit the screen |

#### Easing

In the physical world, objects don’t start or stop instantaneously. Instead, they take time to speed up and slow down. Transitions without easing look stiff and mechanical, while a transition with easing appears more natural.

(fig) 1. A transition with easing
2. A transition without easing

Compared to the utilitarian style of M2, M3 easing is more expressive. Transitions have snappy take offs and very soft landings.

Durations are slightly longer compared to M2. This gives transitions time to come to a gentle rest without feeling abrupt.

(fig) 1. M2 easing and duration
2. M3 easing and duration

##### Choosing an easing set

The [**Emphasized easing set**](https://m3.material.io/styles/motion/easing-and-duration/tokens-specs#cbea5c6e-7b0d-47a0-98c3-767080a38d95) is recommended for most transitions to capture the style of M3.

The [**Standard easing set**](https://m3.material.io/styles/motion/easing-and-duration/tokens-specs#601d5552-a6e6-4d74-9886-ff8f24b9ec35) can be used for small utility focused transitions that need to be quick. The Standard set is also a fallback for platforms that don't support Emphasized easing, like iOS and Web.

(fig) Emphasized easing is used for this full screen transition

(fig) Standard easing is used for this Text field transition on Web. The simple style fits the utility of this component.

##### Choosing an easing type

Easing types are chosen based on how a transition moves in relation to the screen.

###### Begin and end on screen

These transitions use **Emphasized** easing. It speeds up quickly and then comes to a gentle rest in order to emphasize the end of the transition.

(fig) This transition begins and ends on screen so it uses Emphasized easing

###### Enter the screen

These transitions use **Emphasized decelerate** easing. It begins at peak velocity then comes to a gentle rest.

###### Exit the screen permanently

These transitions use **Emphasized accelerate** easing. It begins at rest and ends at peak velocity. By ending at peak velocity, it gives the impression the exiting component cannot be retrieved.

(fig) This Bottom sheet enters with Emphasized decelerate and exits permanently with Emphasized accelerate

###### Exit the screen temporarily

These transitions use **Emphasized** easing. By ending at rest just off screen, it gives the impression the exiting component can be retrieved.

(fig) This drawer enters and exits temporarily with Emphasized easing

#### Duration

Transitions shouldn’t be jarringly fast or so slow that users feel as though they’re waiting. The right combination of duration and easing produces smooth and responsive transitions.

**[DO]** (fig) A transition with a well tuned duration is quick and easy to follow

**[DON'T]** (fig) Avoid transitions with such a short duration they become jarring

##### Choosing a duration

Durations are chosen based on these criteria:

###### Transition size

Transitions that cover small areas of the screen have short durations. Those that traverse large areas have long durations. Scaling duration with the size of a transition area gives a consistent sense of speed.

(fig) This transition covers a small area with a short 200ms duration

(fig) This transition covers a large area with a long 500ms duration

###### Enter vs. exit transitions

Transitions that exit, dismiss, or collapse an element use shorter durations. Exit transitions are faster because they require less attention than the user’s next task.

Transitions that enter or remain persistent on the screen use longer durations. This helps users focus attention on what's new on screen.

(fig) 1. An Enter transition has a long duration of 500ms
2. An Exit transition has a short duration of 200ms

(fig) 1. An Enter transition has a long duration of 500ms
2. An Exit transition has a short duration of 200ms

### Easing and duration — Tokens & specs

Source: https://m3.material.io/styles/motion/easing-and-duration/tokens-specs


star

Note:

In the expressive update, components and motion now use the [motion physics system](https://m3.material.io/styles/motion/overview), which uses springs. Products should migrate to the new system. The easing and duration system is still used for transitions and can be used by teams that haven't yet updated to GM3 Expressive, but is no longer maintained.

#### Tokens

Motion easing and duration can be implemented using easing and duration tokens. [Learn more about design tokens](https://m3.material.io/foundations/design-tokens/overview)

_[Interactive TOKEN_TYPE_UNSPECIFIED module: resource `designSystems/20543ce18892f7d9`; token sets: Motion. Resolved values are in the tokens/ folder of this guide.]_

#### Easing

##### Emphasized easing set

This set is the most common because it captures the expressive style of M3.

(fig) Emphasized

(fig) Emphasized decelerate

(fig) Emphasized accelerate

| Info/Platform | Emphasized | Emphasized decelerate | Emphasized accelerate |
| --- | --- | --- | --- |
| Token | md.sys.motion.easing.emphasized | md.sys.motion.easing.emphasized.decelerate | md.sys.motion.easing.emphasized.accelerate |
| Android | [pathInterpolator(M 0,0 C 0.05, 0, 0.133333, 0.06, 0.166666, 0.4 C 0.208333, 0.82, 0.25, 1, 1, 1)](https://developer.android.com/reference/android/view/animation/PathInterpolator) | [PathInterpolator(0.05f, 0.7f, 0.1f, 1f)](https://developer.android.com/reference/android/view/animation/PathInterpolator) | [PathInterpolator(0.3f, 0f, 0.8f, 0.15f)](https://developer.android.com/reference/android/view/animation/PathInterpolator) |
| CSS | N/A (Use Standard as a fallback) | [cubic-bezier(0.05, 0.7, 0.1, 1.0)](https://www.w3schools.com/cssref/func_cubic-bezier.asp) | [cubic-bezier(0.3, 0.0, 0.8, 0.15)](https://www.w3schools.com/cssref/func_cubic-bezier.asp) |
| Flutter | [easeInOutCubicEmphasized](https://api.flutter.dev/flutter/animation/Curves/easeInOutCubicEmphasized-constant.html) | [Cubic(0.05, 0.7, 0.1, 1.0);](https://api.flutter.dev/flutter/animation/Cubic-class.html) | [Cubic(0.3, 0.0, 0.8, 0.15);](https://api.flutter.dev/flutter/animation/Cubic-class.html) |
| iOS | N/A (Use Standard as a fallback) | [ControlPoints:0.05f:0.7f:0.1f:1.0f];](https://developer.apple.com/documentation/quartzcore/camediatimingfunction) | [ControlPoints:0.3f:0.0f:0.8f:0.15f];](https://developer.apple.com/documentation/quartzcore/camediatimingfunction) |
| After Effects | Use [After Effects Easing Panel](https://storage.googleapis.com/material-io-static/resources/material-easing-1.1.3.zxp) (download) | | |

##### Standard easing set

This set is used for simple, small, or utility-focused transitions.

(fig) Standard

(fig) Standard decelerate

(fig) Standard accelerate

|  | Standard | Standard decelerate | Standard accelerate |
| --- | --- | --- | --- |
| Token | md.sys.motion.easing.standard | md.sys.motion.easing.standard.decelerate | md.sys.motion.easing.standard.accelerate |
| Android | [PathInterpolator(0.2f, 0f, 0f, 1f)](https://developer.android.com/reference/android/view/animation/PathInterpolator) | [PathInterpolator(0f, 0f, 0f, 1f)](https://developer.android.com/reference/android/view/animation/PathInterpolator) | [PathInterpolator(0.3f, 0f, 1f, 1f)](https://developer.android.com/reference/android/view/animation/PathInterpolator) |
| CSS | [cubic-bezier(0.2, 0.0, 0, 1.0);](https://www.w3schools.com/cssref/func_cubic-bezier.asp) | [cubic-bezier(0, 0, 0, 1);](https://www.w3schools.com/cssref/func_cubic-bezier.asp) | [cubic-bezier(0.3, 0, 1, 1);](https://www.w3schools.com/cssref/func_cubic-bezier.asp) |
| Flutter | [Cubic(0.2, 0.0, 0, 1.0);](https://api.flutter.dev/flutter/animation/Cubic-class.html) | [Cubic(0, 0, 0, 1);](https://api.flutter.dev/flutter/animation/Cubic-class.html) | [Cubic(0.3, 0, 1, 1);](https://api.flutter.dev/flutter/animation/Cubic-class.html) |
| iOS | [ControlPoints:0.2f:0.0f:0.0f:1.0f](https://developer.apple.com/documentation/quartzcore/camediatimingfunction) | [ControlPoints:0.0f:0.0f:0.0f:1.0f](https://developer.apple.com/documentation/quartzcore/camediatimingfunction) | [ControlPoints:0.3f:0.0f:1.0f:1.0f];](https://developer.apple.com/documentation/quartzcore/camediatimingfunction) |
| After Effects | Use [After Effects Easing Panel](https://storage.googleapis.com/material-io-static/resources/material-easing-1.1.3.zxp) (download) | | |

#### Duration

##### Short durations

These are used for small utility-focused transitions.

|  |  |
| --- | --- |
| **Token** | **Value** |
| md.sys.motion.duration.short1 | 50ms |
| md.sys.motion.duration.short2 | 100ms |
| md.sys.motion.duration.short3 | 150ms |
| md.sys.motion.duration.short4 | 200ms |

(fig) Selection controls have a short duration of 200ms with Standard easing

##### Medium durations

These are used for transitions that traverse a medium area of the screen.

|  |  |
| --- | --- |
| **Token** | **Value** |
| md.sys.motion.duration.medium1 | 250ms |
| md.sys.motion.duration.medium2 | 300ms |
| md.sys.motion.duration.medium3 | 350ms |
| md.sys.motion.duration.medium4 | 400ms |

(fig) A FAB expanding into a Sheet uses a 400ms duration with Emphasized easing

##### Long durations

These durations are often paired with Emphasized easing. They're used for large expressive transitions.

|  |  |
| --- | --- |
| **Token** | **Value** |
| md.sys.motion.duration.long1 | 450ms |
| md.sys.motion.duration.long2 | 500ms |
| md.sys.motion.duration.long3 | 550ms |
| md.sys.motion.duration.long4 | 600ms |

(fig) A Card expanding to full screen uses a long 500ms duration with Emphasized easing

##### Extra long durations

Though rare, some transitions use durations above 600ms. These are usually used for ambient transitions that don't involve user input.

|  |  |
| --- | --- |
| **Token** | **Value** |
| md.sys.motion.duration.extra-long1 | 700ms |
| md.sys.motion.duration.extra-long2 | 800ms |
| md.sys.motion.duration.extra-long3 | 900ms |
| md.sys.motion.duration.extra-long4 | 1000ms |

(fig) An ambient carousel auto-advance transition uses an extra long 1000ms duration with emphasized easing

### Transitions — Transition patterns

Source: https://m3.material.io/styles/motion/transitions/transition-patterns


star

Note:

M3 transitions use the legacy easing and duration system. They'll eventually be updated to use the motion physics system.

Transitions are short animations that connect individual elements or full-screen views of an app. They are fundamental to a great user experience because they help users understand how an app works. Well-designed transitions makes an experience feel high quality and expressive. They should be the top priority for a strong motion implementation.

These are six common transition patterns:

1. [Container transform](https://m3.material.io/styles/motion/transitions/transition-patterns#b67cba74-6240-4663-a423-d537b6d21187)
2. [Forward and backward](https://m3.material.io/styles/motion/transitions/transition-patterns#df9c7d76-1454-47f3-ad1c-268a31f58bad)
3. [Lateral](https://m3.material.io/styles/motion/transitions/transition-patterns#8d4ec98f-60dc-47a9-901e-88fa2c43f18a)
4. [Top level](https://m3.material.io/styles/motion/transitions/transition-patterns#f852afd2-396f-49fd-a265-5f6d96680e16)
5. [Enter and exit](https://m3.material.io/styles/motion/transitions/transition-patterns#e1c2a650-d7a4-4a6d-9025-e6b7845291ed)
6. [Skeleton loaders](https://m3.material.io/styles/motion/transitions/transition-patterns#b39a0641-1b44-4864-83f5-fac38e0bd94a)

#### Container transform

This pattern is used to seamlessly transform an element to show more detail, like a Card expanding into a details page.

- **Commonly used with:** Cards, lists, image galleries, search boxes, sheets, FABs, and chips
- **Read more:** [UX Research](https://material.io/blog/motion-research-container-transform), [Guidelines](https://m3.material.io/styles/motion/transitions/applying-transitions#50f9fc3f-c7e2-4099-b614-7c36b1c5285d), [Android implementation](https://github.com/material-components/material-components-android/blob/master/docs/theming/Motion.md#container-transform)

Persistent elements are used to seamlessly connect the start and end state of the transition. The most common persistent element is a container, which is a shape used to represent an enclosed area. It can also be an important element, like a hero image. Of all transition patterns, this one creates the strongest relationship between elements. It's also perceived to be the most expressive.

(fig) A container transform is used when opening an app and a card. This makes the relationship between screens clear and gives an expressive quality to the transition.

###### Between full-screen views

(fig) A container transform is used to expand this image to a fullscreen view

(fig) A container transform is used to expand this List item to a fullscreen view

(fig) A container transform is used to expand this Card and Search box to a fullscreen view

###### Within a screen

(fig) A container transform is used to expand this search box

(fig) This container transform FAB transition has a persistent container and icon

(fig) A container transform is used on an expanding Sheet

#### Forward and backward

This pattern is used for navigating between screens at consecutive levels of hierarchy, like navigating from an inbox to a message thread.

- **Commonly used with**: Lists, cards, buttons, links
- **Read more:** [Guidelines](https://m3.material.io/styles/motion/transitions/applying-transitions#41b11a78-b88f-4972-904c-880bc348acc8), [Android implementation](https://github.com/material-components/material-components-android/blob/master/docs/theming/Motion.md#shared-axis)

A horizontal sliding motion indicates moving forward or backward between screens. Android and iOS have different default styles:

**1. Android** uses a fade as screens slide. This reduces the amount of motion, since the screens don't have to slide the full width of the device.

**2.****iOS** uses a parallax effect, meaning the background slides slower than the foreground. This also reduces the amount of motion.

(fig) 1. Android’s default forward and backward transition
2. iOS’ default forward and backward transition

(fig) A filled button on Android uses a forward and backward transition

(fig) A card on iOS uses a forward and backward transition

(fig) A search icon button in Android uses a forward and backward transition

(fig) Tapping a list item on a tablet uses a forward and backward transition

#### Lateral

This pattern is used for navigating between peer content at the same level of hierarchy, like swiping between tabs of a content library.

- **Commonly used with:**Tabs, carousels, and image galleries
- **Read more:** [Guidelines](https://m3.material.io/styles/motion/transitions/applying-transitions#3d5c16ce-7350-4a33-9d2b-598a7591d4e6)

Lateral transitions use a sliding motion similar to a forward and backward pattern, but it does not use a fade or parallax effect. Instead elements are grouped and slide in unison, creating a strong peer relationship. This also hints at being able to gesturally swipe elements to navigate.

(fig) A lateral transition is used when tapping or swiping a Tab component

(fig) A lateral transition is used when swiping through a photo album

(fig) A lateral transition used with a Carousel component

#### Top level

This pattern is used to navigate between top-level destinations of an app, like tapping a destination in a Navigation bar.

- **Commonly used with:** Navigation bar, navigation rail, and navigation drawer
- **Read more:** [Guidelines](https://m3.material.io/styles/motion/transitions/applying-transitions#ab8885f6-5517-419d-80de-bea50cd10467), [Android implementation](https://github.com/material-components/material-components-android/blob/master/docs/theming/Motion.md#fade-through)

The exiting screen quickly fades out and then the entering screen fades in. Since the content of top level destinations isn't necessarily related, the motion intentionally does not use grouping or persistent elements to create a strong relationship between screens.

(fig) A navigation bar uses a top level transition

(fig) Tapping an item in a navigation drawer uses a top level transition to move between destinations

(fig) A navigation rail uses a top level transition

#### Enter and exit

This pattern is used to introduce or remove a component on the screen. Components can enter and exit within the screen bounds, like a dialog appearing over an app. They can also enter and exit by crossing the screen bounds, like a navigation drawer or bottom sheet that slides on and off screen.

##### Within screen bounds

- **Commonly used with:** FABs, dialogs, menus, snackbars, time pickers and tooltips
- **Read more:**[Guidelines](https://m3.material.io/styles/motion/transitions/applying-transitions#56675bd6-5e69-4fa8-b075-d694e8cb3ad4)

**Android** components expand and collapse along the x or y axis as they enter and exit. Scale and z-axis motion is avoided since they imply elevation change, which doesn't match M3's reduced elevation model.

**iOS** components uniformly scale as they enter and fade out to exit.

(fig) 1. Android enter and exit transitions
2. iOS enter and exit transitions

The direction a component enters is informed by their location on screen, expanding away from the device edge. A menu at the top of the screen expands downwards, and a snackbar at the bottom of the screen expands upwards.

(fig) A menu at the top of the screen expands downwards as it enters

(fig) A snackbar and FAB use an enter and exit transition

##### Beyond screen bounds

- **Commonly used with:**App bars, banners, navigation bar, navigation rail, navigation drawer, and sheets
- **Read more:** [Guidelines](https://m3.material.io/styles/motion/transitions/applying-transitions#1b704202-167d-48d5-bca1-614cf050de1b)

**Android** components expand and collapse along the x or y axis as they slide on and off screen. This emphasizes their shape, making an otherwise simple transition more expressive.

**iOS** components slide on and off screen without changing shape.

(fig) 1. Android enter and exit transitions
2. iOS enter and exit transitions

Components like a side sheet can also enter and exit at the same elevation as the main content. Coplanar sheets shrink the available area for content.

(fig) A coplanar side sheet uses an enter and exit transition

Components can enter and exit from beyond the screen bounds based on a scroll gesture. This allows for more screen space to browse.

(fig) A top app bar slides off and on screen during a scroll

(fig) A navigation bar slides off and on screen during a scroll

The location components enter and exit help establish a coherent spatial model of an app:

1. A **notification** enters from the top indicating the notification drawer can also be pulled down from the top
2. A **nav drawer** enters from the left helping users understand where it's located when it's off screen
3. A **bottom sheet** and the keyboard enters from the bottom of the screen. This is a sensible default location for sheets to enter since the bottom of the screen is easiest to reach.

(fig) The direction of enter and exit transitions help establish a coherent spatial model

#### Skeleton loaders

This pattern is used to transition from a temporary loading state to a fully loaded UI.

- **Read more**: [Guidelines](https://m3.material.io/styles/motion/transitions/applying-transitions#b82b5150-609b-4540-903b-2b900ef830aa)

Skeleton loaders are UI abstractions that hint at where content will appear once it's loaded. They're used in combination with other transitions to reduce perceived latency and stabilize layouts as content loads.

(fig) A skeleton loader is used after an app launches to indicate content is loading

Skeleton loaders have a subtle pulsing animation to indicate indeterminate progress. It starts at the top left of the screen and moves down to the bottom right.

Once content is loaded, it quickly fades in on top of the skeleton loader.

(fig) A pulsing animation indicates indeterminant loading

(fig) Content quickly fades in once it's loaded

### Transitions — Applying transitions

Source: https://m3.material.io/styles/motion/transitions/applying-transitions


star

Note:

M3 transitions use the legacy easing and duration system. They'll eventually be updated to use the motion physics system.

#### What makes a good transition?

Well-designed transitions should have these characteristics:

##### Follows accessibility settings

Most platforms have a reduced animation setting to help users with a sensitivity to motion. If that setting is on, transitions should:

- Use subtle fades instead of intense sliding or scaling animations
- Disable decorative effects like parallax or shape morphing

(fig) 1. Transitions with a default motion setting
2. Transitions with a reduced motion setting turned on

##### Consistent

Consistently applying the right type of transition helps make apps feel cohesive and predictable to use.

(fig) These four Android apps use the same forward and backward transition, making them feel like a cohesive family of apps

##### Stable layouts

Use skeleton loaders so that UI elements are coherent and stable during a transition. Avoid content shifting positions or instantly popping in as it loads. It can be distracting and frustrating to use.

**[DO]** (fig) Transitions should use skeleton loaders with a subtle pulsing animation to stabilize a layout as it loads

**[DON'T]** (fig) Content should not pop in and shift locations during a transition

##### No jarring jump cuts

Jump cuts should generally be avoided as a default setting since they can be disorienting. Instantly transitioning from one screen to the next offers no clues to help a user orient themselves.

If pure efficiency is a top priority, like opening a menu in a productivity app, a jump cut may be preferred.

**[DO]** (fig) Animated transitions help users orient themselves as they navigate

**[DON'T]** (fig) For most common transitions, jump cuts are jarring and disorienting

##### Coherent spatial model

Transitions are used to establish a coherent spatial model. This helps users understand the physical layout of an app.

**[DO]** (fig) These carousel transitions have a coherent spatial layout while navigating between a collapsed and expanded view

**[DON'T]** (fig) Switching between horizontal and vertical carousel layouts creates a confusing spatial model

##### Unified direction

A transition should have a unified direction of movement. Elements are grouped and move along a primary axis instead of moving in independent directions. Only important elements like hero images remain persistent throughout the transition. This helps guide a users focus.

**[DO]** (fig) This transition has a simple vertical motion that’s easy to follow

**[DON'T]** (fig) Don’t animate many persistent elements independently. The various moving parts are distracting

##### Clean fades

Fully fade out content before fading new content in. This avoids the overlap of partially transparent elements resulting in distracting and messy frames.

If a cross fade needs to occur, keep it quick and hide it during the fastest part of the transition.

**[DO]** (fig) Fade content out before fading new content in to maintain a clean design

**[DON'T]** (fig) Avoid showing cross faded content, the overlap of partially transparent elements can result in messy and distracting frames

Don't slowly fade components on top of other content as they enter or exit. This creates distracting cross faded frames. If a fade is needed, like with a Dialog entering in the middle of the screen, the fade should use a short duration to hide that part of the transition.

**[DON'T]** (fig) Don't fade a bottom sheet as it enters and exits, it creates distracting cross faded frames

##### Simple style

Transitions are not receptive to highly stylized motion. They're frequent, often occupy large portions of the screen, and are primarily meant to help users accomplish a task.

**[DO]** (fig) Transitions should have a simple style

**[DON'T]** (fig) Common transitions should not use overt style effects like bouncy springs

#### Choosing a transition pattern

Consider the following to choose the right transition for a given use case:

##### Container transform

This pattern is highly effective at creating a relationship between elements. It's also the most dramatic pattern in terms of style and should be reserved for the right context. Consider using it for:

1. Hero moments that should be expressive
2. Shallow hierarchies where you expand an element for more detail then collapse it
3. Creating a seamless connection between elements

**Read the research for the benefits of container transform****[here](https://material.io/blog/motion-research-container-transform).**

**[DO]** (fig) A container transform creates a clear connection between the thumbnail and expanded image. It also makes this hero transition more expressive.

**[DON'T]** (fig) Don't use container transform in apps with deep hierarchies, the motion becomes excessive. The expressive style also doesn't fit this utility focused navigation.

Use a container transform transition for hero moments rather than a forward and backward transition.

**[DON'T]** (fig) Don't use forward and backward transitions on hero moments like opening a photo memory

##### Forward and backward

Both Android and iOS should use platform defaults for forward and backward navigation. It's easy to implement and stays current as platforms update. They have a simple motion style suitable for such a common transition.

**[DO]** (fig) Platform default forward and backward transitions are a sensible choice for common navigation

**[CAUTION]** (fig) Container transform transitions require custom implementations and the motion may feel excessive when used frequently

##### Lateral

Lateral transitions are used to browse peer content that's part of the same set, like navigating between tabs in a media library. By sliding content horizontally, it hints at being able to swipe the content area to navigate between peers.

**[DO]** (fig) A tab component uses a lateral transition type

**[CAUTION]** (fig) Fading content as it slides makes the peer relationship and swipe gesture less obvious. The style also may be confused with a forward and backward transition.

Don't use a Lateral transition for navigating hierarchical screens. Sliding content the full width of the screen is excessive for a high frequency transition. It also implies an equal peer relationship which isn't accurate to the hierarchy of the screens.

**[DON'T]** (fig) A lateral transition should not be used for common forward and backward navigation as it results in an excessive amount of motion

##### Top level

When tapping a navigation bar, rail or drawer, a quick fade is used to transition to a new destination. Top level destinations aren't necessarily related, so the motion intentionally does not create a connection between screens.

A lateral transition pattern is not recommended for this type of navigation. It implies you can swipe between top level destinations which conflicts with other components like carousels or swipe-able list items.

**[DO]** (fig) A top level transition type is used with a navigation bar, rail and drawer

**[DON'T]** (fig) Don't use a lateral transition to move between top level destinations. The gesture conflicts with carousel and list item gestures.

##### Enter and Exit

This transition pattern is used to introduce a component in context of the screen’s main UI. It can be modal, like a dialog requiring a user to take action. Or it can allow for simultaneously using both regions of the UI, like a standard bottom sheet over a map.

Don't use this pattern for navigating hierarchical screens. Sliding content the full height of the screen is excessive and it creates an unclear relationship between screens.

**[DO]** (fig) This bottom sheet uses an enter and exit transition pattern

**[DON'T]** (fig) Don't use an enter and exit pattern for navigating hierarchical screens

