import {useLoaderData} from '@remix-run/react';
import {AnalyticsPageType, type SeoHandleFunction} from '@shopify/hydrogen';
import {json, type LoaderArgs} from '@shopify/remix-oxygen';
import clsx from 'clsx';

import {usePreviewComponent, usePreviewContext} from '~/lib/sanity';
import {SanityShopPage} from '~/lib/sanity';
import {fetchGids, notFound, validateLocale} from '~/lib/utils';
import {SHOP_PAGE_QUERY} from '~/queries/sanity/shop';

const seo: SeoHandleFunction<typeof loader> = ({data}) => ({
  title: data?.page?.seo?.title || 'Sanity x Hydrogen',
  description:
    data?.page?.seo?.description ||
    'A custom storefront powered by Hydrogen and Sanity',
});

export const handle = {
  seo,
};

export async function loader({context, params}: LoaderArgs) {
  validateLocale({context, params});

  const cache = context.storefront.CacheCustom({
    mode: 'public',
    maxAge: 60,
    staleWhileRevalidate: 60,
  });

  const page = await context.sanity.query<SanityShopPage>({
    query: SHOP_PAGE_QUERY,
    cache,
  });

  if (!page) {
    throw notFound();
  }

  // Resolve any references to products on the Storefront API
  const gids = await fetchGids({page, context});

  return json({
    page,
    gids,
    analytics: {
      pageType: AnalyticsPageType.home,
    },
  });
}

export default function Shop() {
  const {page} = useLoaderData<typeof loader>();
  const Component = usePreviewComponent<{page: SanityShopPage}>(Route, Preview);

  return <Component page={page} />;
}

function Route({page}: {page: SanityShopPage}) {
  // Render your own components using the page data
  return (
    <div>
      <h1>{page.title}</h1>
      {/* Render your custom components here */}
    </div>
  );
}

function Preview(props: {page: SanityShopPage}) {
  const {usePreview} = usePreviewContext()!;
  const page = usePreview(SHOP_PAGE_QUERY, undefined, props.page);

  return <Route page={page} />;
}
