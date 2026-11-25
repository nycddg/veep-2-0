# 05 — Shape (including M3 Expressive shape)

Primary sources: https://m3.material.io/styles/shape/overview-principles · https://m3.material.io/styles/shape/corner-radius-scale · https://m3.material.io/styles/shape/shape-morph
Token values: [tokens/system-shape.md](tokens/system-shape.md). Accessed 2026-10-09.

## Essentials
- Overview bullets: "Use abstract shapes thoughtfully to add emphasis and decorative flair"; "Leverage Material shapes for built-in shape morphing"; "Rectangular shapes are fully rounded in all corners by default"; "Individual corners can be adjusted to create asymmetrical rectangular shapes."
- **Corner radius scale — ten styles** (corner-radius-scale): None 0dp · Extra small 4dp · Small 8dp · Medium 12dp · Large 16dp · Large increased 20dp · Extra large 28dp · Extra large increased 32dp · Extra extra large 48dp · Full (fully rounded). Tokens `md.sys.shape.corner.*` and `md.sys.shape.corner-value.*` (values verified in token data).
- **M3 Expressive update (May 2025)**: 35 new shapes + shape morphing in the Material Shape Library (Figma kit and Jetpack Compose `MaterialShapes`); new principles and art direction; added large-increased (20dp), extra-large-increased (32dp), extra-extra-large (48dp); "Updated fully rounded corners to use full. Previously, this was defined using 50% of the component size."
- Symmetry: asymmetric "inner corners" are used in components with closely grouped items, such as menus and split buttons; both use the same 10-step scale.
- Customization: "Generally, products should consistently use the Material 3 shape styles. However, customization is sometimes necessary, and even encouraged, for hero moments or custom components." Customize at **style** level (changes all components mapped to it) or **component** level (remap a component to another style).
- Shape morph: used "to better communicate interaction states, like when a button is selected" and "actions in progress." Available via platform API — "For Android, use the Shapes in Compose API"; "Web is not currently available." "Shape morphing uses the expressive motion scheme by default." Used in the standard button group and loading indicator.
- Expressive caution (blog): "Smaller shapes can result in essential actions looking less important."


---

## Source pages in scope

| Page | URL | Site content timestamp | Do | Don't | Caution |
|---|---|---|---|---|---|
| Shape — Overview & principles | https://m3.material.io/styles/shape/overview-principles | 2026-07-17T05:28:54.725Z | 0 | 0 | 1 |
| Shape — Corner radius scale | https://m3.material.io/styles/shape/corner-radius-scale | 2026-07-17T05:28:54.725Z | 3 | 1 | 1 |
| Shape — Shape morph | https://m3.material.io/styles/shape/shape-morph | 2026-07-17T05:28:54.725Z | 0 | 0 | 0 |

## Verbatim rule index (every Do / Don't / Caution caption on the pages above)


**Shape — Overview & principles** — https://m3.material.io/styles/shape/overview-principles

- **[CAUTION]** (fig) Shapes without clear meaning behind why they’re different can add more visual clutter than delight

**Shape — Corner radius scale** — https://m3.material.io/styles/shape/corner-radius-scale

- **[CAUTION]** (fig) Be careful not to apply large or full corners to information-dense components, such as cards
- **[DO]** (fig) Shapes can be intentionally rounder to add more visual variety
- **[DO]** (fig) Add unexpected moments by switching between square and fully rounded shapes
- **[DO]** (fig) Use different corner radii values for nested components so they have optical roundness
- **[DON'T]** (fig) Avoid using the same corner radius value for nested objects

## Appendix — verbatim page text (digest: text, tables and figure captions; image-only content represented by captions)

### Shape — Overview & principles

Source: https://m3.material.io/styles/shape/overview-principles


- Use abstract shapes thoughtfully to add emphasis and decorative flair
- Leverage Material shapes for built-in shape morphing
- Rectangular shapes are fully rounded in all corners by default
- Individual corners can be adjusted to create asymmetrical rectangular shapes

(fig) Abstract shapes can help people express themselves

#### Availability & resources

| Type | Resource | Status |
| --- | --- | --- |
| Design | [Shape library](http://figma.com/community/file/1035203688168086460/material-3-design-kit) (Figma Design Kit) | Available |
| Implementation | [Jetpack Compose](https://developer.android.com/reference/kotlin/androidx/compose/material3/MaterialShapes) (Shape Library) | Available |
| [Android Views (MDC-Android)](https://github.com/material-components/material-components-android/blob/master/docs/theming/Shape.md) | Available |

#### M3 Expressive update

**May 2025**

Added 35 **new shapes** and **shape morphing** to [Material Shape Library](https://www.figma.com/community/file/1035203688168086460) (Figma Design Kit) and [Jetpack Compose](https://developer.android.com/reference/kotlin/androidx/compose/material3/MaterialShapes).

Added new shape principles and a refreshed art direction.

Added corner radii tokens:

- Large increased (20dp)
- Extra large increased (32dp)
- Extra extra large (48dp)
- Updated fully rounded corners to use **full**. Previously, this was defined using 50% of the component size.

[More on M3 Expressive](https://m3.material.io/blog/building-with-m3-expressive)

(fig) Overview of Material shapes

#### Shape library

(fig) M3 has 35 shapes to easily apply to designs

#### Use shapes and text in harmony

Shapes are expressive elements of Material 3 that echo key visual attributes of [M3 typography](https://m3.material.io/styles/typography/overview).

Use shape and type together for products to feel cohesive and polished.

(fig) M3 shapes and Google Sans Flex share roundness visual attributes

(fig) Shape morphing should respond to user interaction

#### Morph shapes to connect function and feeling

Shapes should morph to improve understanding and add moments of delight. Use shape morph to better communicate:

- Interaction states, like when a button is selected
- Actions in progress, like a friend typing, or a page loading
- Changes in the environment, like sound, temperature, or time of day

Think about how shapes could react to different interactions, such as tapping, swiping, scrolling, releasing, and long pressing.

#### Be bold and dare to embrace tension

Tension happens when the shape story changes unexpectedly, such as when contrasting shapes are used. This can be created using both square and rounded shapes, unconventional shapes, and other contrasting elements.

Material historically focused on rounded shapes. However, using sharp shapes, thereby adding tension, creates more dynamic design, one that’s more memorable and expressive.

This tension can be used in many ways, like conveying states, drawing attention to an element, or to improve the visual aesthetic.

(fig) Create tension by using a combination of round and square shapes

(fig) Shapes and motion can communicate actions in progress

#### Shape is versatile, not semantic

Avoid making shapes literal or assigning a specific function or meaning to a single shape.

For example, the loading indicator can be wavy, but the waveform is not a strict symbol of progression. Progress could just as easily be shown using rotating shapes or shape morph.   
  
Plus, waveforms could be used in other places unrelated to progress, like button containers.

#### Use abstract shapes sparingly

Be intentional when using shapes in product UI. Don’t compromise clarity for the sake of visual design.

When incorporating diverse shapes, think about how they fit into the overall design and consider how they balance with the entire composition. Ensure that shapes resonate with the product's narrative. Consider the 'why' behind their inclusion and the value they contribute to the overall user experience.

**[CAUTION]** (fig) Shapes without clear meaning behind why they’re different can add more visual clutter than delight

(fig) Essential shapes can use shape morph to communicate change

(fig) Use abstract shapes on imagery and decorative UI

#### Emphasize aesthetic moments with shape

Get creative when using shape in graphics, for photography cropping, personalized avatar masking, and other non-interactive elements.

Decorative moments offer the most flexible and creative uses of shape.

#### Shape can be 2.5D

When effectively used, shape and motion can make 2D visuals feel 3D. They provide the illusion of depth and volume, making visuals more eye-catching and natural.

(fig) Apply motion and shape differently on each layer to give it the illusion of depth

### Shape — Corner radius scale

Source: https://m3.material.io/styles/shape/corner-radius-scale


Material components use a corner radius scale to define all rectangular shapes, such as buttons, carousels, and dialogs.

(fig) M3 defines corner radii using a shape scale. This can be used to create both uniform and asymmetrical shapes.

#### Shape tokens

Material has shape corner tokens to define all corners, and corner-value tokens for individual corners. [Learn more about design tokens](https://m3.material.io/foundations/design-tokens/overview)

_[Interactive TOKEN_TYPE_UNSPECIFIED module: resource `designSystems/20543ce18892f7d9`; token sets: Shape. Resolved values are in the tokens/ folder of this guide.]_

##### Corner radius scale

The Material 3 shape system uses a size-based scale with ten styles. Styles are assigned to components based on the desired amount of roundedness.

1. None - 0dp
2. Extra small - 4dp
3. Small - 8dp
4. Medium - 12dp
5. Large - 16dp
6. Large increased - 20dp
7. Extra large - 28dp
8. Extra large increased - 32dp
9. Extra extra large - 48dp
10. Full - fully rounded corners

[Apply shape styles using tokens](https://m3.material.io/foundations/design-tokens/overview)

(fig) Steps on the scale are named for the amount of roundedness applied to the corner

(fig) M2: Three-level shape scale based on the size of the component container

(fig) M3: Ten-level shape scale based on the roundedness of shape corners

#### Symmetry

Components can have either symmetric or asymmetric corner shapes. Symmetric shapes have the same values for all corners, while asymmetric shapes can have corners with different values.

Both symmetric and asymmetric shapes use the same 10-step scale.

Asymmetrical shapes are used in M3 components with closely-grouped items, such as menus and split buttons. These are called **inner corners**.

(fig) **Inner corner** component tokens always map to individual corner shape tokens

#### Customizing shapes

Generally, products should consistently use the Material 3 shape styles. However, customization is sometimes necessary, and even encouraged, for hero moments or custom components. Shapes can be customized at the **style** or **component** level.

##### Style changes

The corner radius shape style, like **medium**, can be customized to be a different size.

This applies the change to all components mapped to that shape style, unless they have an override.

(fig) Customizing the corner size of the **medium** style applies the change to all components using this style, such as cards and small FABs

##### Component changes

The style of a specific component, such as a button, can be changed by customizing which corner radius shape style it maps to.

For example, by default, buttons are mapped to the **full** corner radius shape style. If your product needs a less rounded shape, remap the token to another style in the shape scale, such as **small** or **medium**.

(fig) Remapping the shape for a component to a different style applies the change to just that component across the UI

The shape style family can be customized from **rounded** to **cut**. This makes the corner a straight line instead of curved.

Add extra padding to avoid cutting off content in information-dense components.

For example, a large cut corner on a card will clip content and images in the area more than a rounded corner of the same size.

**[CAUTION]** (fig) Be careful not to apply large or full corners to information-dense components, such as cards

**[DO]** (fig) Shapes can be intentionally rounder to add more visual variety

**[DO]** (fig) Add unexpected moments by switching between square and fully rounded shapes

##### Adjust for optical roundness

When nesting rounded objects, avoid using the same corner radii for both objects. This can make the corners look unbalanced.

Instead, adjust the corner radii to be proportional to each other; this is called optical roundness. To calculate optical roundness:

- Outer radius - padding = inner radius
- For example: 48dp - 14dp = 34dp

(fig) 1. Padding
2. Outer radius
3. Inner radius

**[DO]** (fig) Use different corner radii values for nested components so they have optical roundness

**[DON'T]** (fig) Avoid using the same corner radius value for nested objects

##### Using the shape library

The Material 3 shape library can be used to create more interesting containers. Use the shape library for mostly visual elements. Avoid applying unconventional shapes to text-heavy containers.

Shapes should be used sparingly to provide a stronger emphasis and moments of delight.

(fig) Leverage the Material shape library for moments of delight

### Shape — Shape morph

Source: https://m3.material.io/styles/shape/shape-morph


The Material shape library supports easy transitioning, or morphing, between shapes. Shape morph is leveraged in the standard button group and loading indicator components.

#### Using shape morph

Access to the Material shape library and the shape morph functionality are available through a platform-specific API.

- For Android, use the [Shapes in Compose API](https://developer.android.com/reference/kotlin/androidx/compose/material3/MaterialShapes)
- Web is not currently available

Shape morphing uses the expressive motion scheme by default. This can be switched to the standard motion scheme as needed.

(fig) The Material shape library contains many types of shapes that can all morph seamlessly into each other

Material uses shape morphing in the standard button group and loading indicator components.

(fig) The standard button group uses shape morph to show interaction

(fig) The loading indicator uses shape morph to show progress

