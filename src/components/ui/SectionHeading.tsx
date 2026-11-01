import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "center" | "left";
};

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={isCenter ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <Reveal direction="up">
          <span className="chip mb-3 sm:mb-4 uppercase tracking-[0.2em] text-primary-300 text-[10px] sm:text-xs">
            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-accent-400" />
            {eyebrow}
          </span>
        </Reveal>
      )}

      <Reveal direction="up" delay={0.05}>
        <h2 className="text-2xl sm:text-4xl md:text-[2.75rem] font-bold leading-tight break-words">
          {title} {highlight && <span className="text-gradient">{highlight}</span>}
        </h2>
      </Reveal>

      {description && (
        <Reveal direction="up" delay={0.1}>
          <p
            className={`mt-3 sm:mt-4 text-xs sm:text-sm md:text-base leading-relaxed text-slate-400 ${
              isCenter ? "mx-auto" : ""
            }`}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
