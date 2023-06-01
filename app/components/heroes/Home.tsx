/* eslint-disable hydrogen/prefer-image-component */
import {Image} from '@shopify/hydrogen';
import clsx from 'clsx';

import LinkButton from '~/components/elements/LinkButton';
import List from '~/components/elements/List';
import TwoColumnLayout from '~/components/elements/TwoColumnLayout';
import HeroContent from '~/components/heroes/HeroContent';
import type {SanityHeroHome} from '~/lib/sanity';

import Button from '../elements/Button';
import Check from '../icons/Check';

type Props = {
  hero: SanityHeroHome;
};

export default function HomeHero({hero}: Props) {
  return (
    <>
      <div
        className={clsx(
          'flex flex-col items-center rounded-b-xl bg-primaryLight px-4 pb-4 pt-24',
          'md:px-8 md:pb-8 md:pt-34',
        )}
      >
        {/* Title */}
        {hero.title && (
          <h1
            className={clsx(
              'mb-7 max-w-[60rem] whitespace-pre-line text-center text-2xl',
              'md:text-3xl',
            )}
          >
            {hero.title}
          </h1>
        )}
        <h3 className="mb-7 text-center text-lg">
          Ελιξίριο πολυβιταμινών και μετάλλων με εκχύλισμα φύλλων ελιάς.
        </h3>

        {/* Link */}
        {hero.link && (
          <LinkButton link={hero.link} className=" text-primaryLight" />
        )}

        {/* Hero content */}
        {hero.content && (
          <div
            className={clsx(
              'mt-6 w-full', //
              'md:mt-12 md:w-9/12',
            )}
          >
            <HeroContent content={hero.content} />
          </div>
        )}
      </div>
      <div
        className={clsx(
          'flex flex-col items-center rounded-b-xl bg-white px-4 pb-4 pt-24',
          'md:px-8 md:pb-8 md:pt-34',
        )}
      >
        <TwoColumnLayout
          column1={
            <>
              <h3 className="leading-15 mb-7 text-left text-xl font-bold leading-paragraph">
                Με καθημερινή χρήση, το Philoselfie δρα ορατά στο σώμα και την
                ψυχολογία*.
              </h3>
              <p className="text-sm text-secondaryText">
                *Αποδεδειγμένοι ισχυρισμοί υγείας σύμφωνα με την EFSA
              </p>
              <List
                items={[
                  {icon: <Check />, text: 'Περισσότερη ενέργεια'},
                  {icon: <Check />, text: 'Καλύτερη διάθεση'},
                  {icon: <Check />, text: 'Ενισχυμένο ανοσοποιητικό'},
                  {icon: <Check />, text: 'Απολαυστικός ύπνος'},
                  {
                    icon: <Check />,
                    text: 'Βελτιωμένη κινητικότητα του εντέρου',
                  },
                ]}
              />
              <img
                src="https://cdn.shopify.com/s/files/1/0755/1808/3415/files/icons-claims.png?v=1685624491"
                alt="health-claims"
                className="mt-12 w-72"
              />
              <Button className="mt-12 border-2 bg-white text-offBlack">
                Μάθε περισσότερα
              </Button>
            </>
          }
          column2={{
            src: 'https://cdn.shopify.com/s/files/1/0755/1808/3415/files/Soap-Image5.png',
            alt: 'Image Alt Text',
            width: 550,
            height: 357,
          }}
          imageOnLeft={false}
        />
      </div>
    </>
  );
}
