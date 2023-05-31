import clsx from 'clsx';

import LinkButton from '~/components/elements/LinkButton';
import List from '~/components/elements/List';
import TwoColumnLayout from '~/components/elements/TwoColumnLayout';
import HeroContent from '~/components/heroes/HeroContent';
import type {SanityHeroHome} from '~/lib/sanity';

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
            </>
          }
          column2={<p>This is the content of column 2.</p>}
        />
      </div>
    </>
  );
}
