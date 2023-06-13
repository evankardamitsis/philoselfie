// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable hydrogen/prefer-image-component */

import clsx from 'clsx';
import React from 'react';

import Banner from '~/components/elements/Banner';
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
          'flex flex-col items-center rounded-b-xl bg-primaryLight px-4 pb-4 pt-24 md:px-8 md:pb-8 md:pt-34',
        )}
      >
        {/* Title */}
        {hero.title && (
          <h1
            className={clsx(
              'mb-7 max-w-[60rem] whitespace-pre-line text-center text-2xl md:text-3xl',
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
          <LinkButton link={hero.link} className="text-primaryLight" />
        )}

        {/* Hero content */}
        {hero.content && (
          <div className="mt-6 w-full md:mt-12 md:w-9/12">
            <HeroContent content={hero.content} />
          </div>
        )}
      </div>
      <div
        className={clsx(
          'flex flex-col items-center rounded-b-xl bg-offWhite px-4 pb-4 pt-24',
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
              <Button
                className="mt-12 border-2 bg-white text-offBlack md:w-1/3"
                to="/contact"
              >
                Μάθε περισσότερα
              </Button>
            </>
          }
          column2={{
            src: 'https://cdn.shopify.com/s/files/1/0755/1808/3415/files/img-placeholder.jpg?v=1685629029',
            alt: 'Image Alt Text',
            width: 550,
            height: 357,
            key: 'column2',
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
            key: 'column2',
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

              <Button className="mt-12 md:w-2/3" to="/pages/subscription">
                Ξεκίνα συνδρομή
              </Button>
            </>
          }
          column2={[
            <div className="flex flex-row justify-between" key="column2">
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
            </div>,
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
                  <h4 className="mt-3 text-center text-lg font-bold">19.99€</h4>
                  <Button className="mx-auto mt-6">Αγορά τώρα</Button>
                </div>
              ),
              imageData: {
                src: 'https://cdn.shopify.com/s/files/1/0755/1808/3415/files/img-placeholder.jpg?v=1685629029',
                alt: 'Image 1 Alt Text',
                width: 487,
                height: 284,
              },
              key: 'column1',
            }}
            column2={{
              content: (
                <div>
                  <h3 className="text-center font-bold">
                    3μηνο πακέτο χωρίς συνδρομή
                  </h3>
                  <p className="mt-2 text-center text-secondaryText">
                    3 συσκευασίες | 90 κάψουλες
                  </p>
                  <h4 className="mt-3 text-center text-lg font-bold">
                    {' '}
                    <span className="text-decoration-line: mr-3 text-secondaryText line-through">
                      60.00€
                    </span>
                    55.99€
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
              key: 'column2',
            }}
            column3={{
              content: (
                <div>
                  <h3 className="text-center font-bold">
                    6μηνο πακέτο χωρίς συνδρομή
                  </h3>
                  <p className="mt-2 text-center text-secondaryText">
                    6 συσκευασίες | 180 κάψουλες
                  </p>
                  <h4 className="mt-3 text-center text-lg font-bold">
                    {' '}
                    <span className="text-decoration-line: mr-3 text-secondaryText line-through">
                      120.00€
                    </span>
                    107.99€
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
              key: 'column3',
            }}
            className="gap-8"
          />
        </div>
        <div className="mb-12 mt-38 flex w-4/5 flex-col">
          <Banner
            className="rounded-lg bg-primaryLight p-12"
            image="https://cdn.shopify.com/s/files/1/0755/1808/3415/files/path314.png?v=1685717198"
            imagePosition="left"
            imageWidth={278}
            imageHeight={258}
          >
            <h2 className="mb-5 text-center text-2xl font-bold">
              Το 80%, ανώτερο του 100%.
            </h2>
            <p className="font-300">
              Το Philoselfie συνδυάζει το 80% της ΣΗΠ* των απαραίτητων βιταμινών
              και μετάλλων.
            </p>
            <Button className="mx-auto mt-12">Μάθε πως</Button>
          </Banner>
        </div>
        <TwoColumnLayout
          column1={
            <>
              <h3 className="mb-7 text-left text-2xl font-bold leading-paragraph md:w-3/4">
                Έχεις καιρό να πεις νιώθω ο εαυτός μου, νιώθω καλά;
              </h3>
              <h5 className="my-5">Η ΚΑΙΝΟΤΟΜΙΑ PHILOSELFIE</h5>
              <Button className="my-12">Μάθε περισσότερα</Button>
            </>
          }
          column2={[
            <>
              <p className="leading-paragraph md:w-2/3" key="column2">
                Το Philoselfie δεν μοιάζει με κανένα συμπλήρωμα διατροφής.
                Εκφράζει απόλυτα την πλέον σύγχρονη διατροφική φιλοσοφία και
                εισάγει μια πρωτοποριακή διατροφική πραγματικότητα, με
                αποδεδειγμένα οφέλη σύμφωνα με τις αρχές της Ευρωπαϊκής Αρχής
                Ασφάλειας Τροφίμων, με μελετημένη σύσταση και δοσολογία που
                καθιστά τη συνεργική αλληλεπίδραση των συστατικών ισχυρότερη από
                αυτήν που θα είχε κάθε συστατικό μεμονωμένο.
              </p>
            </>,
          ]}
          className="ml-10 mt-28 md:mx-auto md:flex md:w-4/5 md:flex-row md:items-center md:justify-center"
        />
        <div className="flex flex-col">
          <img
            alt="philoselphie tagline"
            src="https://cdn.shopify.com/s/files/1/0755/1808/3415/files/philo-heartx2.png?v=1686053894"
            className="mx-auto md:w-2/4"
          />
        </div>
      </div>
    </div>
  );
}
