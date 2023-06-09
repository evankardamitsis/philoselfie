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
          'flex w-full flex-col items-center rounded-b-xl bg-offWhite px-4 pb-4 pt-24',
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
              <h4 className="mt-6 text-left text-xl font-bold">
                {' '}
                <span className="text-decoration-line: mr-3 text-secondaryText line-through">
                  20.00€
                </span>
                17.99€ / μήνα
              </h4>
              <Button
                className="my-8 w-1/2 border-2 bg-black text-white"
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
              <h3 className="mb-7 text-left text-2xl font-bold leading-paragraph">
                3μηνο πακέτο χωρίς συνδρομή
              </h3>
              <h5 className="my-5 text-left text-[20px] uppercase">
                3 συσκευασιες | 90 καψουλες
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
              <h4 className="mt-6 text-left text-xl font-bold">
                {' '}
                <span className="text-decoration-line: mr-3 text-secondaryText line-through">
                  60.00€
                </span>
                55.99€ / μήνα
              </h4>
              <Button className=" mt-12 border-2 bg-black text-white">
                Αγορά τώρα
              </Button>
            </>
          }
          column2={{
            src: 'https://cdn.shopify.com/s/files/1/0755/1808/3415/files/Frame_112.png?v=1686295700',
            alt: '3 months philoselfie',
            width: 622,
            height: 568,
            key: 'column2',
          }}
          imageOnLeft={true}
          className="mt-38 md:gap-40"
        />
        <TwoColumnLayout
          column1={
            <>
              <h3 className="mb-7 text-left text-2xl font-bold leading-paragraph">
                6μηνο πακέτο χωρίς συνδρομή
              </h3>
              <h5 className="my-5 text-left text-[20px] uppercase">
                6 συσκευασιες | 180 καψουλες
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
              <h4 className="mt-6 text-left text-xl font-bold">
                {' '}
                <span className="text-decoration-line: mr-3 text-secondaryText line-through">
                  120.00€
                </span>
                117.99€ / μήνα
              </h4>
              <Button className=" mt-12 border-2 bg-black text-white">
                Αγορά τώρα
              </Button>
            </>
          }
          column2={{
            src: 'https://cdn.shopify.com/s/files/1/0755/1808/3415/files/Frame_112_1.png?v=1686296429',
            alt: '6 months philoselfie',
            width: 622,
            height: 568,
            key: 'column2',
          }}
          imageOnLeft={true}
          className="mt-38 md:gap-40"
        />
      </div>
    </div>
  );
};

export default Shop;
