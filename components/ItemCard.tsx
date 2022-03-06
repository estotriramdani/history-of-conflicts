import React from 'react';
import { PartItem } from '../interfaces';

export default function ItemCard(props: PartItem) {
  return (
    <div className="rounded border p-3">
      <div className="mb-2">
        <p className="mb-1 text-lg">{props.Headline}</p>
        <p>
          Date: <span className="font-bold">{props.Date}</span>
        </p>
        <p>Conflict type: {props['Conflict Type']}</p>
        <p>Country: {props.Country}</p>
        <p>Region: {props.Region}</p>
      </div>
      <p className="font-sans">{props.Description}</p>
      <p className="mt-2 font-serif text-sm italic">Sources: {props.Sources}</p>
    </div>
  );
}
