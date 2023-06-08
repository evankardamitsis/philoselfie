import clsx from 'clsx';
import {useCallback} from 'react';

import CollectionGroup from '~/components/global/collectionGroup/CollectionGroup';
import {Link} from '~/components/Link';
import type {SanityMenuLink} from '~/lib/sanity';

/**
 * A component that defines the navigation for a web storefront
 */

type Props = {
  menuLinks: SanityMenuLink[];
};

export default function Navigation({menuLinks}: Props) {
  const renderLinks = useCallback(() => {
    return menuLinks?.map((link) => {
      if (link._type === 'collectionGroup') {
        return <CollectionGroup collectionGroup={link} key={link._key} />;
      }
      if (link._type === 'linkExternal') {
        return (
          <div className="flex items-center" key={link._key}>
            <a
              className="linkTextNavigation"
              href={link.url}
              rel="noreferrer"
              target={link.newWindow ? '_blank' : '_self'}
            >
              {link.title}
            </a>
          </div>
        );
      }
      if (link._type === 'linkInternal') {
        if (!link.slug) {
          return null;
        }

        return (
          <div className="flex items-center" key={link._key}>
            <Link className="linkTextNavigation" to={link.slug}>
              {link.title}
            </Link>
          </div>
        );
      }

      return null;
    });
  }, [menuLinks]);

  const shopLink = {
    _type: 'linkInternal',
    slug: '/shop',
    title: 'Shop',
    _key: 'shop-link',
  };

  return (
    <nav
      className={clsx(
        'relative hidden items-stretch justify-start gap-6 text-sm font-bold',
        'lg:flex',
      )}
    >
      <div className="flex items-center">
        <Link className="linkTextNavigation" to={shopLink.slug}>
          {shopLink.title}
        </Link>
      </div>
      {renderLinks()}
    </nav>
  );
}
