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
          <span className="chip mb-4 uppercase tracking-[0.2em] text-primary-300">
            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-accent-400" />
            {eyebrow}
          </span>
        </Reveal>
      )}

      <Reveal direction="up" delay={0.05}>
        <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-[2.75rem]">
          {title} {highlight && <span className="text-gradient">{highlight}</span>}
        </h2>
      </Reveal>

      {description && (
        <Reveal direction="up" delay={0.1}>
          <p
            className={`mt-4 text-base leading-relaxed text-slate-400 ${
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
