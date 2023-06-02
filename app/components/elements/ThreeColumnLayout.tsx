// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable hydrogen/prefer-image-component */
import clsx from 'clsx';
import React from 'react';

type ColumnData = {
  content: React.ReactNode;
  imageData?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

type ThreeColumnLayoutProps = {
  column1: ColumnData;
  column2: ColumnData;
  column3: ColumnData;
  className?: string;
};

export default function ThreeColumnLayout({
  column1,
  column2,
  column3,
  className,
}: ThreeColumnLayoutProps) {
  const renderColumn = (columnData: ColumnData) => {
    const {content, imageData} = columnData;

    return (
      <div className="w-full md:w-1/3">
        {imageData && (
          <div className="mb-4">
            <img
              src={imageData.src}
              alt={imageData.alt}
              width={imageData.width}
              height={imageData.height}
              className="rounded-lg"
            />
          </div>
        )}
        {content}
      </div>
    );
  };

  return (
    <div
      className={clsx(
        className,
        'flex flex-col justify-center md:flex-row md:items-center',
      )}
    >
      {renderColumn(column1)}
      {renderColumn(column2)}
      {renderColumn(column3)}
    </div>
  );
}
