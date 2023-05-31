import clsx from 'clsx';
import React from 'react';

type ListItemProps = {
  icon: React.ReactNode;
  text: string;
};

type ListProps = {
  items: ListItemProps[];
};

export default function List({items}: ListProps) {
  return (
    <ul className="space-y-4">
      {items.map((item, index) => (
        <li
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
