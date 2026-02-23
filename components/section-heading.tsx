type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
};

export function SectionHeading({ eyebrow, title, description, center = false }: SectionHeadingProps) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-ai-600 dark:text-ai-300">{eyebrow}</p>
      ) : null}
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base text-slate-600 dark:text-slate-300">{description}</p> : null}
    </div>
  );
}
