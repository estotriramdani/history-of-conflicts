import React from 'react';
import { PartItem } from '../interfaces';
import ItemCard from './ItemCard';

export default function ListItems(props: { data: PartItem[] }) {
  return (
    <div className="mx-auto mt-4 grid w-full grid-cols-1 gap-4 md:w-3/5">
      {props.data.map((item, index) => (
        <ItemCard key={index + 1} {...item} />
      ))}
    </div>
  );
}
