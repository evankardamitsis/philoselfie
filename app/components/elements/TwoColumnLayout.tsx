/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable hydrogen/prefer-image-component */
import clsx from 'clsx';
import React from 'react';

type ImageData = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type TwoColumnLayoutProps = {
  column1: React.ReactNode;
  column2?: ImageData;
  imageOnLeft?: boolean;
};

export default function TwoColumnLayout({
  column1,
  column2,
  imageOnLeft = false,
}: TwoColumnLayoutProps) {
  const imageColumn = column2 ? (
    <div
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
        className="rounded-lg"
      />
    </div>
  ) : null;

  return (
    <div className="flex flex-col justify-center md:flex-row md:items-center">
      {imageOnLeft ? (
        <>
          {imageColumn}
          <div className="w-full md:ml-2 md:mr-4 md:w-1/2">{column1}</div>
        </>
      ) : (
        <>
          <div className="w-full md:ml-2 md:mr-4 md:w-1/2">{column1}</div>
          {imageColumn}
        </>
      )}
    </div>
  );
}
