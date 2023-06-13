import {useLoaderData} from '@remix-run/react';
import type {SeoHandleFunction} from '@shopify/hydrogen';
import {json, type LoaderArgs} from '@shopify/remix-oxygen';
import clsx from 'clsx';
import invariant from 'tiny-invariant';

import Drasi from '~/components/Drasi';
import Filosofia from '~/components/Filosofia';
import PageHero from '~/components/heroes/Page';
import PortableText from '~/components/portableText/PortableText';
import Shop from '~/components/Shop';
import Subscription from '~/components/Subscription';
import {SanityPage} from '~/lib/sanity';
import {ColorTheme} from '~/lib/theme';
import {fetchGids, notFound, validateLocale} from '~/lib/utils';
import {PAGE_QUERY} from '~/queries/sanity/page';

type ComponentMap = {
  [key: string]: React.ComponentType<any>;
};

const COMPONENT_MAP: ComponentMap = {
  Filosofia,
  Shop,
  Drasi,
  Subscription,
  // add other custom components as you create more pages...
};

const seo: SeoHandleFunction<typeof loader> = ({data}) => ({
  title: data?.page?.seo?.title,
  description: data?.page?.seo?.description,
  media: data?.page?.seo?.image,
});

export const handle = {
  seo,
};

export async function loader({params, context}: LoaderArgs) {
  validateLocale({context, params});

  const {handle} = params;
  invariant(handle, 'Missing page handle');

  const cache = context.storefront.CacheCustom({
    mode: 'public',
    maxAge: 60,
    staleWhileRevalidate: 60,
  });

  const page = await context.sanity.query<SanityPage>({
    query: PAGE_QUERY,
    params: {
      slug: handle,
    },
    cache,
  });

  if (!page) {
    throw notFound();
  }

  // Resolve any references to products on the Storefront API
  const gids = await fetchGids({page, context});

  return json({page, gids});
}

export default function Page({showPageTitle = true}) {
  const {page} = useLoaderData<typeof loader>();

  // Get the component for this page
  const Component = COMPONENT_MAP[page.component];

  // This would handle a case when the component is not found in the COMPONENT_MAP
  if (!Component) {
    console.error(`No component found for "${page.component}"`);
    return null; // or return some kind of fallback component or message
  }

  // Only pass relevant data to the component
  const componentData = page.body;

  return (
    <ColorTheme value={page.colorTheme}>
      {/* Page hero */}
      {Component && page.hero && (
        <PageHero fallbackTitle={page.title} hero={page.hero} />
      )}

      {/* Body */}
      {Component ? (
        <Component data={page} showPageTitle={showPageTitle} />
      ) : (
        page.body && (
          <PortableText
            blocks={page.body}
            centered
            className={clsx('mx-auto max-w-[660px] px-4 pb-24 pt-8', 'md:px-8')}
          />
        )
      )}
    </ColorTheme>
  );
}
