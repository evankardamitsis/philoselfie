// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable hydrogen/prefer-image-component */
import clsx from 'clsx';
import React from 'react';

import Button from './elements/Button';
import List from './elements/List';
import TwoColumnLayout from './elements/TwoColumnLayout';
import Check from './icons/Check';

interface ShopProps {
  data: any;
  showPageTitle?: boolean;
}

const Shop: React.FC<ShopProps> = () => {
  return (
    <div>
      <div
        className={clsx(
          'absolute top-0 flex w-full flex-col items-center rounded-b-xl bg-offWhite px-4 pb-4 pt-24',
        )}
      >
        <TwoColumnLayout
          column1={
            <div className="rounded-lg md:mt-22 md:bg-[#EFF2F3] md:p-20">
              <h3 className="mb-7 text-left text-2xl font-bold leading-paragraph">
                Philoselfie - Health Elixir
              </h3>
              <h5 className="my-5 uppercase">
                Ελιξιριο πολυβιταμινων και μεταλλων με εκχυλισμα φυλλων ελιας.
              </h5>
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
                className="my-12 w-72"
              />
              <h4 className="mt-6 text-left text-lg font-bold">
                {' '}
                <span className="text-decoration-line: mr-3 text-secondaryText line-through">
                  20.00€
                </span>
                17.99€ / μήνα
              </h4>
              <Button
                className="my-8 w-full border-2 bg-black text-white md:w-1/3"
                to="/contact"
              >
                Ξεκίνα συνδρομή
              </Button>
            </div>
          }
          column2={{
            src: 'https://cdn.shopify.com/s/files/1/0755/1808/3415/files/img-placeholder.jpg?v=1685629029',
            alt: 'Image Alt Text',
            width: 950,
            height: 713,
            key: 'column2',
            className: 'rounded-lg',
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
              <Button className="mt-12">Ξεκίνα συνδρομή</Button>
            </>
          }
          column2={[
            <>
              <div className="flex flex-row justify-between" key="column2">
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
};

export default Shop;
