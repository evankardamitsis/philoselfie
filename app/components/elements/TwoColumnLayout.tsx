import clsx from 'clsx';
import React from 'react';

type TwoColumnLayoutProps = {
  column1: React.ReactNode;
  column2: React.ReactNode;
};

export default function TwoColumnLayout({
  column1,
  column2,
}: TwoColumnLayoutProps) {
  return (
    <div className="flex flex-col justify-center md:flex-row md:items-center">
      <div className="w-full md:ml-4 md:mr-2 md:w-1/2">{column1}</div>
      <div className="w-full md:ml-2 md:mr-4 md:w-1/2">{column2}</div>
    </div>
  );
}
