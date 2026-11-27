import { Link } from "@tanstack/react-router";
import { feedInternalTarget, type FeedBlock, type FeedCategory, type FeedRun } from "@/lib/feeds";

const linkClass = "motion-link text-cream underline decoration-white/30 underline-offset-4";

function FeedRunView({ run }: { run: FeedRun }) {
  if (!run.href) return run.t;
  const internal = feedInternalTarget(run.href);
  if (!internal) {
    return (
      <a href={run.href} className={linkClass} rel="noopener noreferrer">
        {run.t}
      </a>
    );
  }
  return <FeedInternalLink category={internal.category} slug={internal.slug} className={linkClass} label={run.t} />;
}

function FeedInternalLink({
  category,
  slug,
  className,
  label,
}: {
  category: FeedCategory;
  slug: string;
  className: string;
  label: string;
}) {
  switch (category) {
    case "blog":
      return (
        <Link to="/feeds/blog/$slug" params={{ slug }} className={className}>
          {label}
        </Link>
      );
    case "service":
      return (
        <Link to="/feeds/service/$slug" params={{ slug }} className={className}>
          {label}
        </Link>
      );
    default: {
      const _exhaustive: never = category;
      return _exhaustive;
    }
  }
}

function FeedRuns({ runs }: { runs: readonly FeedRun[] }) {
  return (
    <>
      {runs.map((run, index) => (
        <FeedRunView key={`${index}-${run.href ?? "text"}`} run={run} />
      ))}
    </>
  );
}

function FeedBlockView({ block }: { block: FeedBlock }) {
  switch (block.kind) {
    case "p":
      return (
        <p className="text-stone text-base md:text-lg leading-relaxed">
          <FeedRuns runs={block.runs} />
        </p>
      );
    case "h2":
      return (
        <h2 className="font-serif font-medium text-xl md:text-2xl text-cream tracking-tight leading-snug pt-6">
          {block.text}
        </h2>
      );
    case "h3":
      return <h3 className="text-lg text-cream tracking-tight leading-snug pt-4">{block.text}</h3>;
    case "ul":
      return (
        <ul className="space-y-2.5 pl-5 list-disc marker:text-current text-stone text-base md:text-lg leading-relaxed">
          {block.items.map((item, index) => (
            <li key={index}>
              <FeedRuns runs={item} />
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="space-y-2.5 pl-5 list-decimal marker:text-cream/70 text-stone text-base md:text-lg leading-relaxed">
          {block.items.map((item, index) => (
            <li key={index}>
              <FeedRuns runs={item} />
            </li>
          ))}
        </ol>
      );
    case "quote":
      return (
        <blockquote className="border-l-2 border-accent-coral pl-5 md:pl-6 font-serif font-medium text-lg md:text-xl text-cream tracking-tight leading-snug">
          <FeedRuns runs={block.runs} />
        </blockquote>
      );
    case "table":
      return (
        <div className="overflow-x-auto">
          {block.caption ? <div className="mono-label mb-3">{block.caption}</div> : null}
          <table className="w-full min-w-[36rem] text-left border-y border-white/10">
            <thead>
              <tr>
                {block.headers.map((header, headerIndex) => (
                  <th
                    key={`${headerIndex}-${header}`}
                    className="mono-label font-normal pb-3 pr-6 align-bottom"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, rowIndex) => (
                <tr key={rowIndex} className="border-t border-white/10">
                  {row.map((cell, cellIndex) => (
                    <td
                      key={`${rowIndex}-${cellIndex}`}
                      className="py-5 pr-6 text-base text-stone leading-relaxed align-top"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "figure":
      return (
        <figure>
          {block.src ? (
            <img
              src={block.src}
              alt={block.alt}
              loading="lazy"
              decoding="async"
              className="w-full h-auto"
            />
          ) : (
            <div className="border border-white/10 px-5 py-8 md:px-6 text-base text-stone leading-relaxed">
              {block.caption || block.alt}
            </div>
          )}
          {block.src && block.caption ? (
            <figcaption className="mt-3 text-sm text-stone leading-relaxed">{block.caption}</figcaption>
          ) : null}
        </figure>
      );
    default: {
      const _exhaustive: never = block;
      return _exhaustive;
    }
  }
}

export function FeedBody({ blocks }: { blocks: readonly FeedBlock[] }) {
  return (
    <div className="space-y-5 md:space-y-6">
      {blocks.map((block, i) => (
        <FeedBlockView key={`${block.kind}-${i}`} block={block} />
      ))}
    </div>
  );
}
