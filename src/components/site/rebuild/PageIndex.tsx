import { Disclosure } from "../system/Controls";

type IndexItem = { href: string; label: string; number?: string };

/** A reading aid shared by questions and legal documents. The native disclosure
 * keeps a long contents list from displacing the document on narrow screens. */
export function PageIndex({
  items,
  label = "Page sections",
}: {
  items: IndexItem[];
  label?: string;
}) {
  const links = items.map((item) => (
    <a key={item.href} href={item.href}>
      {item.number && <span aria-hidden="true">{item.number}</span>}
      {item.label}
    </a>
  ));
  return (
    <aside className="ve-reading-index">
      <nav className="ve-reading-index-desktop" aria-label={label}>
        <p className="ve-kicker">On this page</p>
        {links}
      </nav>
      <div className="ve-reading-index-mobile">
        <Disclosure question="On this page">
          <nav aria-label={label}>{links}</nav>
        </Disclosure>
      </div>
    </aside>
  );
}
