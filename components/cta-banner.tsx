import { ButtonLink } from "@/components/button-link";
import { siteConfig } from "@/lib/site";

type CtaBannerProps = {
  title: string;
  description: string;
};

export function CtaBanner({ title, description }: CtaBannerProps) {
  return (
    <section className="surface-card rounded-3xl p-8 sm:p-10">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h3 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">{title}</h3>
          <p className="mt-3 text-slate-600 dark:text-slate-300">{description}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href={siteConfig.playgroundUrl} external>
            Build Your Agent
          </ButtonLink>
          <ButtonLink href={siteConfig.playgroundUrl} variant="secondary" external>
            Explore Playground
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
