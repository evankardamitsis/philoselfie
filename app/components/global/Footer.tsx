import {useMatches} from '@remix-run/react';
import clsx from 'clsx';

import LogoIcon from '~/components/icons/Logo';
import {Link} from '~/components/Link';
import PortableText from '~/components/portableText/PortableText';
import type {SanityLink} from '~/lib/sanity';

const firstColumnLinks = [
  {
    _key: 'link1',
    _type: 'linkExternal',
    url: 'https://example.com',
    title: 'Shop',
  },
  {
    _key: 'link2',
    _type: 'linkExternal',
    slug: 'https://example.gr',
    title: 'Σύνθεση',
  },
  {
    _key: 'link3',
    _type: 'linkExternal',
    slug: 'https://example.com',
    title: 'Δράση',
  },
  {
    _key: 'link4',
    _type: 'linkExternal',
    slug: 'https://example.com',
    title: 'Φιλοσοφία',
  },
  {
    _key: 'link5',
    _type: 'linkExternal',
    slug: 'https://example.com',
    title: 'Άρθρα',
  },
  {
    _key: 'link6',
    _type: 'linkExternal',
    slug: 'https://example.com',
    title: 'Επικοινωνία',
  },
  {
    _key: 'link7',
    _type: 'linkExternal',
    slug: 'https://example.com',
    title: 'Ο λογαριασμός μου',
  },
];

const secondColumnLinks = [
  {
    _key: 'link3',
    _type: 'linkExternal',
    url: 'https://example.com',
    title: 'External Link 2',
  },
  {
    _key: 'link4',
    _type: 'linkInternal',
    slug: '/internal-link-2',
    title: 'Internal Link 2',
  },
];

const renderColumnLinks = (links: any[]) => {
  return links.map((link) => {
    if (link._type === 'linkExternal') {
      return (
        <div className="mb-6" key={link._key}>
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
        <div className="mb-6" key={link._key}>
          <Link className="linkTextNavigation" to={link.slug}>
            {link.title}
          </Link>
        </div>
      );
    }
    return null;
  });
};

/**
 * A component that specifies the content of the footer on the website
 */
export default function Footer() {
  const [root] = useMatches();

  const layout = root.data?.layout;
  const {footer} = layout || {};

  const renderLinks = footer?.links?.map((link: SanityLink) => {
    if (link._type === 'linkExternal') {
      return (
        <div className="mb-6" key={link._key}>
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
        <div className="mb-6" key={link._key}>
          <Link className="linkTextNavigation" to={link.slug}>
            {link.title}
          </Link>
        </div>
      );
    }
    return null;
  });

  return (
    <footer className="-mt-overlap" role="contentinfo">
      {/* AVKA Footer */}
      <div
        className={clsx(
          'align-start relative overflow-hidden rounded-xl bg-primaryLight px-4 py-8',
          'md:px-8 md:py-10',
        )}
      >
        <div
          className={clsx(
            'mb-12 grid grid-cols-1 content-center items-center gap-4 border-t-2 md:grid-cols-2',
          )}
        >
          <h5 className="my-7 text-left text-xl font-bold leading-paragraph md:w-3/4">
            Κέρδισε 10% έκπτωση στην πρώτη σου παραγγελία με την εγγραφή σου στο
            newsletter μας 🔔
          </h5>
          <div className="klaviyo-form-Sxmmbd"></div>
        </div>
        <div
          className={clsx(
            'mb-12 grid grid-cols-1 gap-4 border-t-4 md:grid-cols-3',
          )}
        >
          <div className="flex flex-col">
            <LogoIcon width="200" />

            <h5 className="mb-7 text-left text-lg font-bold leading-paragraph md:w-3/4">
              ΕΛΙΞΙΡΙΟ ΠΟΛΥΒΙΤΑΜΙΝΩΝ ΚΑΙ ΜΕΤΑΛΛΩΝ ΜΕ ΕΚΧΥΛΙΣΜΑ ΦΥΛΛΩΝ ΕΛΙΑΣ
            </h5>
            <p className="w-full leading-paragraph md:w-2/3">
              Το Philoselfie δεν μοιάζει με κανένα συμπλήρωμα διατροφής.
              Εκφράζει απόλυτα την πλέον σύγχρονη διατροφική φιλοσοφία, με
              μελετημένη σύσταση και δοσολογία που καθιστά την αλληλεπίδραση των
              συστατικών ισχυρότερη από αυτήν που θα είχε κάθε συστατικό
              μεμονωμένο.
            </p>
          </div>
          <div className="mt-8 flex flex-col md:mt-12">
            <h5 className="mb-4 font-bold">Menu</h5>
            {renderColumnLinks(firstColumnLinks)}
          </div>
          <div className="mt-8 flex flex-col md:mt-12">
            <h5 className="mb-4 font-bold">Useful Links</h5>
            {renderLinks}
          </div>
        </div>
        <div className="border-t-2 border-slate-700 text-center">
          <p className="my-5 text-[12px]">
            Το Philoselfie είναι το συμπλήρωμα διατροφής νέας γενιάς που σε
            αγαπάει αποδεδειγμένα, καθώς οι ισχυρισμοί υγείας του είναι επίσημα
            τεκμηριωμένοι από την Ευρωπαϊκή Αρχή Ασφάλειας Τροφίμων (EFSA).
          </p>
        </div>
        {footer?.text && (
          <PortableText
            blocks={footer.text}
            className={clsx('text-xs', 'text-sm text-darkGray')}
          />
        )}
      </div>
      {/* Script to load Klaviyo */}
      <script
        async
        src="//static.klaviyo.com/onsite/js/klaviyo.js?company_id=V6h3S3"
      ></script>
    </footer>
  );
}
