import { Breadcrumbs, type Crumb } from "./Breadcrumbs";

export function PageHeader({
  crumbs,
  title,
  intro,
  children,
}: {
  crumbs: Crumb[];
  title: string;
  intro?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="container-page pt-8 pb-10 md:pt-12 md:pb-14">
      <Breadcrumbs items={crumbs} />
      <h1 className="mt-6 max-w-[22ch] text-h1">{title}</h1>
      {intro ? <p className="measure mt-5 text-xl leading-relaxed text-ink-soft">{intro}</p> : null}
      {children}
    </div>
  );
}
