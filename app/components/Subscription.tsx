// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable hydrogen/prefer-image-component */
import clsx from 'clsx';
import React from 'react';

import Button from './elements/Button';
import List from './elements/List';
import TwoColumnLayout from './elements/TwoColumnLayout';
import Check from './icons/Check';

interface SubscriptionProps {
  data: any;
  showPageTitle?: boolean;
}

const Subscription: React.FC<SubscriptionProps> = () => {
  return (
    <div>
      <div
        className={clsx(
          'flex w-full flex-col items-center rounded-b-xl bg-offWhite px-4 pb-4 pt-24',
        )}
      >
        <TwoColumnLayout
          column1={
            <>
              <h3 className="my-3 text-left text-2xl font-bold">
                Philoselfie - Health Elixir
              </h3>
              <h4 className="my-3 uppercase tracking-[.08em] text-secondaryText">
                Ελιξιριο πολυβιταμινων και μεταλλων με εκχυλισμα φυλλων ελιας.
              </h4>
              <p className=" my-6 text-sm leading-paragraph text-primaryText">
                Το Philoselfie εκφράζει απόλυτα την πλέον σύγχρονη διατροφική
                φιλοσοφία και εισάγει μια πρωτοποριακή διατροφική
                πραγματικότητα, με αποδεδειγμένα οφέλη σύμφωνα με τις αρχές της
                Ευρωπαϊκής Αρχής Ασφάλειας Τροφίμων. Η μελετημένη σύσταση και
                δοσολογία του, καθιστά τη συνεργική αλληλεπίδραση των συστατικών
                ισχυρότερη από αυτήν που θα είχε κάθε συστατικό μεμονωμένο.
              </p>
              <h5 className="my-3 text-sm font-bold">
                Δοσολογία: 1 κάψουλα/μέρα
              </h5>
              <h5 className="text-sm font-bold">
                Κάθε συσκευασία περιέχει 30 κάψουλες
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
                className="mt-12 w-96"
              />
              <div className="my-12 md:grid md:grid-cols-2 md:gap-4">
                <div className="p-6">
                  <h4 className="mt-3 text-left text-xl font-bold">
                    {' '}
                    <span className="text-decoration-line: mr-3 text-secondaryText line-through">
                      20.00€
                    </span>
                    17.99€/μήνα
                  </h4>
                  <p className="my-3 text-[12px]">
                    1 μπουκάλι θα αποστέλλεται κάθε 1 μήνα αυτόματα.
                  </p>
                  <p className="my-3 text-[12px]">
                    Μπορείς να διακόψεις τη συνδρομή σου οποιαδήποτε στιγμή.
                  </p>
                  <Button
                    to="https://checkout.stripe.com/c/pay/cs_test_b1jx0DsfWhvp1UPvQ8K7488Ig9QAq29HhH7GgHBNVnmvPhJTaw0bYsLSeS#fidkdWxOYHwnPyd1blpxYHZxWjA0SzBubWFNTD1sbkxPbzx9QmFxcUB0QlBTNmNqRGFAR1NVMlxwPEFPX2luaGwybkRgaWI3PXFfTTJhTGRdPTJpNmZXaWJTM29iRHxSPHZqVUhtX29HSW9MNTV9d3dLQnV9aicpJ3VpbGtuQH11anZgYUxhJz8ncWB2cVozakAzdVBmfFJiV3dnfGoydnYnKSd3YGNgd3dgd0p3bGJsayc%2FJ21xcXU%2FKippamZkaW1qdnE%2FNjU1NSoneCUl"
                    className="mt-6"
                  >
                    Ξεκίνα συνδρομή
                  </Button>
                </div>
                <div className="md:border-l-1 lg:border-gray-300 border-t p-6 md:border-l md:border-t-0">
                  <h4 className="mt-3 text-left text-xl font-bold"> 20.00€</h4>
                  <p className="my-3 text-[12px]">
                    Μεμονωμένη αγορά χωρίς συνδρομή
                  </p>
                  <p className="my-3 text-[12px] font-bold underline">
                    <a href="/pages/shop"> Δες όλα τα πακέτα χωρίς συνδρομή</a>
                  </p>{' '}
                  <Button
                    className="mt-6 border-2 bg-white text-offBlack md:w-2/3"
                    onClick={() => console.log('clicked')}
                  >
                    Μάθε περισσότερα
                  </Button>
                </div>
              </div>
            </>
          }
          column2={{
            src: 'https://cdn.shopify.com/s/files/1/0755/1808/3415/files/img-placeholder.jpg?v=1685629029',
            alt: 'Image Alt Text',
            width: 622,
            height: 568,
            key: 'column2',
          }}
          imageOnLeft={true}
          className="mx-5 md:ml-40"
        />
      </div>
    </div>
  );
};

export default Subscription;
