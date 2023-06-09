import clsx from 'clsx';
import React from 'react';

import AccordionBlock from '~/components/portableText/blocks/Accordion';

import Button from './elements/Button';
import List from './elements/List';
import TwoColumnLayout from './elements/TwoColumnLayout';
import Check from './icons/Check';

interface DrasiProps {
  data: any;
  showPageTitle?: boolean;
}

const Drasi: React.FC<DrasiProps> = () => {
  const accordionBlocks = [
    [
      {
        _key: '1',
        title: 'Accordion Group 1 Title 1',
        body: 'Accordion Group 1 Body 1',
      },
      {
        _key: '2',
        title: 'Accordion Group 1 Title 2',
        body: 'Accordion Group 1 Body 2',
      },
    ],
    [
      {
        _key: '3',
        title: 'Accordion Group 2 Title 1',
        body: 'Accordion Group 2 Body 1',
      },
      {
        _key: '4',
        title: 'Accordion Group 2 Title 2',
        body: 'Accordion Group 2 Body 2',
      },
    ],
    // Add more sets of title and body pairs as needed
  ];

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
              <h3 className="mb-4 text-xl font-bold">
                Το Philoselfie προάγει ενεργά την υγεία με τη δράση του*,
                συμβάλλοντας στα εξής:
              </h3>
              <p className="mb-12 text-sm">
                *Αποδεδειγμένοι ισχυρισμοί υγείας σύμφωνα με την EFSA
              </p>
            </>
          }
          column2={{
            src: 'https://cdn.shopify.com/s/files/1/0755/1808/3415/files/Screenshot_2023-06-06_at_1.07_2.png?v=1686302695',
            alt: 'Image Alt Text',
            width: 150,
            height: 157,
            key: 'column2',
          }}
          imageOnLeft={false}
          className=""
        />
        {accordionBlocks.map((groups) => (
          <AccordionBlock key={groups[0]._key} groups={groups} />
        ))}
      </div>
    </div>
  );
};

export default Drasi;
