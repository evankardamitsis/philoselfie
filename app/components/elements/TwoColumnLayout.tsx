// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable hydrogen/prefer-image-component */
import clsx from 'clsx';
import React from 'react';

type ImageData = {
  className?: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

type TwoColumnLayoutProps = {
  column1: React.ReactNode;
  column2?: React.ReactNode | ImageData;
  imageOnLeft?: boolean;
  className?: string;
};

export default function TwoColumnLayout({
  column1,
  column2,
  imageOnLeft = false,
  className,
}: TwoColumnLayoutProps) {
  const renderColumn2 = () => {
    if (column2 && typeof column2 === 'object' && 'src' in column2) {
      return (
        <div
          key="imageColumn"
          className={clsx('w-full', {
            'md:ml-14 md:mr-2 md:w-1/2': imageOnLeft,
            'md:ml-22 md:mr-4 md:w-1/2': !imageOnLeft,
          })}
        >
          <img
            src={column2.src}
            alt={column2.alt}
            width={column2.width}
            height={column2.height}
            className={column2.className ? column2.className : 'rounded-lg'}
          />
        </div>
      );
    } else if (column2) {
      return (
        <div key="column2" className="w-full md:ml-2 md:mr-4 md:w-1/2">
          {column2}
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div
      className={clsx(className, 'flex flex-col md:flex-row md:items-center')}
    >
      {imageOnLeft ? (
        <>
          {renderColumn2()}
          <div key="column1" className="w-full md:ml-2 md:mr-4 md:w-1/2">
            {column1}
          </div>
        </>
      ) : (
        <>
          <div key="column1" className="w-full md:ml-2 md:mr-4 md:w-1/2">
            {column1}
          </div>
          {renderColumn2()}
        </>
      )}
    </div>
  );
}
