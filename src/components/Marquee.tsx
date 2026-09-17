import { techMarquee } from "../data/portfolio";

export function Marquee() {
  const items = [...techMarquee, ...techMarquee];

  return (
    <div className="relative border-y border-white/10 bg-white/[0.015] py-6">
      <div className="mask-fade-x overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-3 hover:[animation-play-state:paused]">
          {items.map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="flex items-center gap-3 whitespace-nowrap font-display text-sm font-medium text-slate-400"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-primary-400 to-accent-400" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
