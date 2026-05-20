import { PageHero, type PageHeroProps } from '../patterns/PageHero';

/** @deprecated Use PageHero directly — kept for gradual migration */
export function PageHeader(props: PageHeroProps) {
  return <PageHero {...props} />;
}
