import clsx from 'clsx';

import type {SanityShopPage} from '~/lib/sanity';
type ShopProps = {
  shopPage: SanityShopPage;
};

export default function ShopPage({shopPage}: ShopProps) {
  return (
    <div>
      <div
        className={clsx(
          'flex flex-col items-center rounded-b-xl bg-primaryLight px-4 pb-4 pt-24 md:px-8 md:pb-8 md:pt-34',
        )}
      >
        <h1>this is the shop</h1>
      </div>
    </div>
  );
}
