// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable hydrogen/prefer-image-component */
import {Image} from '@shopify/hydrogen';
import clsx from 'clsx';

import LinkButton from '~/components/elements/LinkButton';
import List from '~/components/elements/List';
import ThreeColumnLayout from '~/components/elements/ThreeColumnLayout';
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
    <div>
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
          'flex flex-col items-center rounded-b-xl bg-offWhite px-4 pb-4 pt-24',
          // 'md:ml-40 md:px-8 md:pb-8 md:pt-34',
        )}
      >
        <TwoColumnLayout
          column1={
            <>
              <h3 className="mb-7 text-left text-2xl font-bold leading-paragraph">
                Το Philoselfie δρα ορατά στο σώμα και την ψυχολογία*.
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
                src="https://cdn.shopify.com/s/files/1/0755/1808/3415/files/icons-claims_1.png?v=1685625482"
                alt="health-claims"
                className="mt-12 w-96"
              />
              <Button className="mt-12 border-2 bg-white text-offBlack">
                Μάθε περισσότερα
              </Button>
            </>
          }
          column2={{
            src: 'https://cdn.shopify.com/s/files/1/0755/1808/3415/files/img-placeholder.jpg?v=1685629029',
            alt: 'Image Alt Text',
            width: 550,
            height: 357,
          }}
          imageOnLeft={false}
          className="mx-5 md:ml-40"
        />
        <TwoColumnLayout
          column1={
            <>
              <h3 className="mb-7 text-center text-2xl font-bold leading-paragraph">
                Ολιστική Δράση
              </h3>
              <p className="mx-auto w-3/5 text-center text-sm leading-paragraph text-secondaryText">
                Μία μόνο κάψουλα Philoselfie την ημέρα υποστηρίζει 32 γενικές
                και 69 ειδικές ζωτικές λειτουργίες.
              </p>
              <Button className="mx-auto mt-12 border-2 bg-white text-offBlack">
                Μάθε πως
              </Button>
            </>
          }
          column2={{
            src: 'https://cdn.shopify.com/s/files/1/0755/1808/3415/files/home-feat-dyson.jpg?v=1685630263',
            alt: 'Image Alt Text',
            width: 450,
            height: 257,
          }}
          imageOnLeft={true}
          className="mt-38"
        />
        <TwoColumnLayout
          column1={
            <>
              <h3 className="mb-7 text-left text-2xl font-bold leading-paragraph">
                Βάλε το Philoselfie στη ζωή σου
              </h3>
              <h5 className="my-5">ΚΑΘΕ ΜΗΝΑ ΣΤΗΝ ΠΟΡΤΑ ΣΟΥ</h5>
              <p className="w-5/6 text-sm leading-paragraph text-secondaryText">
                Φρόντισε για τον εαυτό σου και εμείς φροντίζουμε να έχεις τον
                απόλυτο έλεγχο της συνδρομής σου μέσα από το προφίλ σου.
              </p>
              <Button className="mt-12">Ξεκίνα συνδρομή</Button>
            </>
          }
          column2={[
            <>
              <div className="flex flex-row justify-between">
                <List
                  key="list"
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
                  className="mt-12"
                />
                <div className="mr-[-60px]">
                  <img
                    key="image"
                    src="https://cdn.shopify.com/s/files/1/0755/1808/3415/files/brunch-icon.png?v=1685703695"
                    alt="Flower Alt Text"
                    width={290}
                    height={268}
                    className="flex content-end"
                  />
                </div>
              </div>
            </>,
          ]}
          imageOnLeft={false}
          className="mt-38 rounded-lg bg-primaryLight p-12"
        />
        <div className="mb-12 mt-38 flex flex-col">
          <h2 className="mb-7 text-center text-[30px] font-bold leading-paragraph">
            Health Elixir πακέτα
          </h2>
          <ThreeColumnLayout
            column1={{
              content: (
                <div>
                  <h3 className="text-center font-bold">Μηνιαίο</h3>
                  <p className="mt-2 text-center text-secondaryText">
                    1 συσκευασία | 30 κάψουλες
                  </p>
                  <h4 className="mt-3 text-center text-lg font-bold">
                    19.99€/μήνα
                  </h4>
                  <Button className="mx-auto mt-6">Αγορά τώρα</Button>
                </div>
              ),
              imageData: {
                src: 'https://cdn.shopify.com/s/files/1/0755/1808/3415/files/img-placeholder.jpg?v=1685629029',
                alt: 'Image 1 Alt Text',
                width: 487,
                height: 284,
              },
            }}
            column2={{
              content: (
                <div>
                  <h3 className="text-center font-bold">Μηνιαίο</h3>
                  <p className="mt-2 text-center text-secondaryText">
                    1 συσκευασία | 30 κάψουλες
                  </p>
                  <h4 className="mt-3 text-center text-lg font-bold">
                    19.99€/μήνα
                  </h4>
                  <Button className="mx-auto mt-6">Αγορά τώρα</Button>
                </div>
              ),
              imageData: {
                src: 'https://cdn.shopify.com/s/files/1/0755/1808/3415/files/img-placeholder.jpg?v=1685629029',
                alt: 'Image 1 Alt Text',
                width: 487,
                height: 284,
              },
            }}
            column3={{
              content: (
                <div>
                  <h3 className="text-center font-bold">Μηνιαίο</h3>
                  <p className="mt-2 text-center text-secondaryText">
                    1 συσκευασία | 30 κάψουλες
                  </p>
                  <h4 className="mt-3 text-center text-lg font-bold">
                    19.99€/μήνα
                  </h4>
                  <Button className="mx-auto mt-6">Αγορά τώρα</Button>
                </div>
              ),
              imageData: {
                src: 'https://cdn.shopify.com/s/files/1/0755/1808/3415/files/img-placeholder.jpg?v=1685629029',
                alt: 'Image 3 Alt Text',
                width: 487,
                height: 284,
              },
            }}
            className="gap-8"
          />
        </div>
      </div>
    </div>
  );
}
