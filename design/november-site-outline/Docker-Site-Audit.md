# Docker site audit

24 November 2026

**Docker’s strongest design decision is giving each kind of buyer question its own destination.** The homepage establishes the argument. Products show concrete capabilities. Solutions assemble capabilities around an enterprise need. Customer stories document outcomes. Pricing makes the commercial choice visible. The global navigation keeps these routes available to visitors who enter anywhere.

Docker’s visual system is also worth studying. The homepage changes scale, density, and surface when it changes the kind of argument it is making. The same principle can give Veep pages variety and a clear reading order with far fewer modules.

## Public site index

The [CSV index](Docker-Public-URL-Index.csv) contains **3,177 unique public URLs**, including 1,933 English and 1,244 Japanese entries. It uses sitemap-only discovery on `www.docker.com`. Docker advertises English and Japanese sitemap indexes, each with 16 child sitemap references across core pages, posts, contributors, news, customer stories, events, newsletters, and resources. CSV paths are grouped by first meaningful path segment, so the families below are an audit taxonomy. [Robots](https://www.docker.com/robots.txt) · [English sitemap](https://www.docker.com/sitemap_index.xml) · [Japanese sitemap](https://www.docker.com/ja-jp/sitemap_index.xml)

| Page family | English | Japanese | Total | Representative destinations |
|---|---:|---:|---:|---|
| Editorial | 920 | 944 | 1,864 | [Blog](https://www.docker.com/blog/), individual posts |
| Contributors | 646 | 200 | 846 | Author archives |
| Resource library | 154 | 1 | 155 | [Resources](https://www.docker.com/resources/), reports, videos, and guides |
| Products | 28 | 28 | 56 | [Products](https://www.docker.com/products/), [Desktop](https://www.docker.com/products/docker-desktop/), [Sandboxes](https://www.docker.com/products/docker-sandboxes/), [Hardened Images](https://www.docker.com/products/hardened-images/) |
| News and media | 49 | 1 | 50 | [Newsroom](https://www.docker.com/company/newsroom/), press releases |
| Newsletter | 31 | 1 | 32 | [Docker newsletter](https://www.docker.com/newsletter-subscription/), archive |
| Customer evidence | 27 | 1 | 28 | [Customer Stories](https://www.docker.com/customer-stories/), individual cases |
| Partners | 11 | 7 | 18 | [Partners](https://www.docker.com/partners/), technology, channel, and services programs |
| Legal | 8 | 9 | 17 | [Legal](https://www.docker.com/legal/), terms, privacy, trademark |
| Developer education | 8 | 8 | 16 | [Get Started](https://www.docker.com/get-started/), [Training](https://www.docker.com/trainings/), tutorials and developer tools |
| Trust | 8 | 8 | 16 | [Trust](https://www.docker.com/trust/), security, compliance, and privacy |
| Events | 9 | 4 | 13 | [Events](https://www.docker.com/events/), individual events |
| Careers | 6 | 6 | 12 | [Careers](https://www.docker.com/careers/), openings and recruiting material |
| Community | 6 | 6 | 12 | [Community](https://www.docker.com/community/), open source and preview programs |
| Pricing and sales | 6 | 5 | 11 | [Pricing](https://www.docker.com/pricing/), [Pricing FAQ](https://www.docker.com/pricing/faq/), [Contact Sales](https://www.docker.com/contact-sales/) |
| Company | 5 | 5 | 10 | [About Docker](https://www.docker.com/company/), leadership, contact, and corporate newsroom pages |
| Solutions | 5 | 4 | 9 | [Enterprise Solutions](https://www.docker.com/solutions/), AI, security, and government |
| Support | 3 | 3 | 6 | [Support](https://www.docker.com/support/), customer success and onboarding |
| Homepage | 1 | 1 | 2 | [English](https://www.docker.com/), [Japanese](https://www.docker.com/ja-jp/) |
| Positioning | 1 | 1 | 2 | [Why Docker](https://www.docker.com/why-docker/) |
| Campaigns | 1 | 0 | 1 | Promotional landing page |
| Other | 0 | 1 | 1 | Standalone sitemap entry |
| **Total** | **1,933** | **1,244** | **3,177** | |

Editorial and contributor URLs account for 2,710 entries, about 85% of the index. The navigational structure is much smaller than the URL count suggests. Docker’s documentation, Hub, account app, and status site are linked parts of the ecosystem on separate hosts. Docs has its own task-based navigation, search, and quick-install paths. The CSV covers URLs returned by the published sitemap discovery. Unlisted pages, dynamically generated routes, and linked hosts are outside its coverage. Each URL was indexed, and representative page types were audited. Individual URL availability and analytics were outside the audit scope. [Docker Docs](https://docs.docker.com/)

## What Docker does well

| Docker pattern | What it does for the reader | What Veep should apply |
|---|---|---|
| **Products and Solutions answer different questions.** Products organizes capabilities under agent infrastructure, application security, and application development. Enterprise Solutions assembles a set around an enterprise operating need. | A capability has a stable home. A buyer can also arrive through a problem without knowing the catalog. | Give buyer jobs a home in **Work we own**. Give Companies and Funds pages different business decisions and examples. Link each situation to the relevant work and case. [Products](https://www.docker.com/products/) · [Solutions](https://www.docker.com/solutions/) |
| **The homepage changes composition as the argument changes.** A dark split hero and logo strip give way to an off-white product grid, a split explainer with dark visual panels, and a full-width blue evidence chapter with uneven spans for quotes and figures. | The reader can tell when the page moves from orientation to explanation or proof. Grids are useful when sibling items deserve comparable weight. The evidence spread gives different evidence types room to read. | Build a sequence of a broad business claim, one annotated work sample, a concise set of buyer jobs, and one case-led proof spread. Use a shared grid for alignment and increase visual space where a decision or result warrants it. [Homepage](https://www.docker.com/) |
| **Product art explains a mechanism.** The homepage uses recognizable sandbox, image, and Hub objects. The Sandboxes page opens with a terminal-style demo and continues into getting started, mechanism, comparisons, and pricing. | Buyers can inspect what the product actually does or see the next practical action. | Show a forecast assumption, a live pricing decision, or a close checklist with real responsibilities. Label a specimen’s status. A visible input, accountable action, and usable output explain Veep’s work. [Homepage](https://www.docker.com/) · [Sandboxes](https://www.docker.com/products/docker-sandboxes/) |
| **Proof has depth.** Customer Stories features a selected case with problem, solution, products, and metrics before the listing. The Tremendous case uses a contents rail and sections for challenge, solution, measurable impact, and results. | A visitor can scan for relevance, then investigate and forward a full case. | Give each approved result a shareable page. Put the result, business context, Veep contribution, and source close together, then link back to the relevant buyer job. A logo can establish recognition. A case carries the claim. [Customer Stories](https://www.docker.com/customer-stories/) · [Tremendous case](https://www.docker.com/customer-stories/tremendous/) |
| **Pricing supports quick selection and detailed comparison.** The page shows offer and unit together, then uses section navigation, a side-by-side plan matrix, and an FAQ. The broader site offers different next actions for learning, self-service, and sales. | A visitor can learn whether an option is relevant, then inspect the exact differences. | Answer who does the work, what the buyer receives, and what the fee covers. Put billing units next to prices and direct each buyer to a conversation or comparable work. [Pricing](https://www.docker.com/pricing/) · [Get Started](https://www.docker.com/get-started/) · [Contact Sales](https://www.docker.com/contact-sales/) |
| **Resources, publishing, trust, and support have distinct roles.** The resource library supports format filtering, the blog carries news and interpretation, and trust and support are destinations in their own right. | Research, procurement, and post-purchase questions have a place to go without crowding the sales argument. | Launch with the cases and buying answers needed to evaluate Veep. Add an editorial collection when there is enough useful material to organize by decision. Route operator applications, inquiries, and legal reading through the footer. [Resources](https://www.docker.com/resources/) · [Blog](https://www.docker.com/blog/) · [Trust](https://www.docker.com/trust/) · [Support](https://www.docker.com/support/) |

## Where the reference is weaker

1. **The homepage gives its current campaign the lead.** The sandbox credit promotion gets the only action inside the opening composition, while Docker Desktop appears in its own chapter much later. The surrounding navigation covers familiar users reasonably well. A first-time visitor could still read Docker as a narrower agent product than its menu suggests. Veep’s opener should make the durable category, accountable operator, and main paths evident without scrolling. [Homepage](https://www.docker.com/) · [Docker’s repositioning note](https://www.docker.com/blog/meet-the-new-docker-built-to-run-on-trust/)
2. **Several chapters route through closely related trust ideas.** Runtime, supply chain, and ecosystem give the first grid useful product distinctions. The next split section revisits related capabilities through autonomy, speed, and compliance. That supports a major positioning launch, but each additional pass asks the reader to learn another set of labels. Give each Veep homepage section a different job and each visitor a clear destination. [Homepage](https://www.docker.com/)
3. **The menu and comparison machinery have a scale cost.** A full-width product menu is legible once open, but it covers most of the desktop viewport in the inspected state. Pricing needs multiple anchors and tables because Docker sells materially different things at different billing units. At Veep’s launch scale, a direct nav and a compact responsibility comparison are sufficient. [Homepage](https://www.docker.com/) · [Pricing](https://www.docker.com/pricing/)
4. **Animation can delay the first read.** The sampled initial hero and section frames show low-opacity copy or incomplete visual content during entry. That is visible in the Solutions and case-study openings as well as in the homepage module reveal. For Veep, render the full claim and its evidence on the first frame. Use optional motion only to clarify assignment, review, or handoff. [Solutions](https://www.docker.com/solutions/) · [Tremendous case](https://www.docker.com/customer-stories/tremendous/)

## Evidence and confidence

The research combined sitemap-only URL discovery, both published sitemap indexes, navigation and page text, and desktop visual inspection of seven pages. The visual sample covered Home, Solutions, Sandboxes, Pricing, Customer Stories, the Tremendous case, and Resources. The browser review included homepage scroll states and the expanded Products menu. Product overview, support, get started, trust, sales, and corporate destinations were checked through page text. Confidence is **high** for the observed hierarchy, information architecture, and listed sitemap counts. Confidence is **moderate** that the proposed adaptations will improve Veep’s usability until buyer tasks are tested. Conversion performance, mobile behavior, and comprehensive keyboard and accessibility behavior were outside this review.

Continue with the [Veep site outline](Veep-Net-New-Site-Outline.md).

## Homepage execution and the offer-led wireframe

The short reading of Docker’s homepage is directionally right. The closer reading shows two details that change how to apply it. Docker establishes credibility with customer marks under the hero, before the substantive proof chapter. It also makes a second, longer argument between the offer tiles and customer evidence. The late getting-started chapter specifically brings containers and the established Desktop product back into view. Its platform selector and download make that chapter useful by itself. [Docker homepage](https://www.docker.com/)

| Docker section | What it does | Revised Veep section |
|---|---|---|
| Hero and client logo strip | States the position, explains the product in a sentence, and signals adoption immediately. | Direct operating-partner position, the approved value proposition, and a short strip of roster and career evidence. |
| Why Docker and three illustrated modules | Makes the strategic argument, then connects jobs to products. Runtime, Supply Chain, and Ecosystem are value groupings. Sandboxes, Hardened Images, and Hub are the featured destinations. | Why Veep stands on its own. Operator, Sprint, and Pod name three actual ways to hire Veep, with term and scope visible. |
| Era of Trust | Makes a second pass through the promise in a split section with a supporting view for each theme. | A compact responsibility table answers the main question a buyer has after seeing the offers. |
| In Good Company | Gives quotes, benchmarks, and trust credentials different sizes and roles. | One large client case and two supporting cases with the work and evidence shown together. |
| Containers and get started | Offers a concrete product action with a way to choose the applicable download. | Book an intro next to a three-question brief on what to bring. |
| Blog | Changes the pace and gives researching visitors a useful place to continue. | An editorial shelf with three short, readable operating notes. |
| Closing CTA and footer | Restates the brand position and then shifts to wayfinding. | One short brand close, booking, and a grouped footer. |

The earlier Veep wireframe led with a hypothetical diligence document, then repeated the scenario in a second explanatory chapter. The offer-led revision corrected the impression that finance was the only use case, but it copied the reference’s emphasis on products too literally. Veep’s current homepage opens on the business outcomes and shows operating capacity as the reason the buyer can pursue them. Sprint, Operator, and Pod explain the commercial commitment later. The Docker audit still informs the variation in section form and the placement of evidence. [Current homepage wireframe](Veep-Homepage-Wireframe.html)
