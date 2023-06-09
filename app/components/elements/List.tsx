import clsx from 'clsx';
import React from 'react';

type ListItemProps = {
  icon: React.ReactNode;
  text: string;
  className?: string;
};

type ListProps = {
  items: ListItemProps[];
  className?: string;
};

export default function List({items, className}: ListProps) {
  return (
    <ul className={clsx('space-y-4', className)}>
      {items.map((item, index) => (
        <li
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          className="mt-12 flex items-center space-x-2 text-primaryText"
        >
          <div className="mr-3 text-primaryLight">{item.icon}</div>
          <span className="text-sm text-black">{item.text}</span>
        </li>
      ))}
    </ul>
  );
}
