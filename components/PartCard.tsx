import Link from 'next/link';
import React from 'react';
import { removeSlashOrDash } from '../helpers';
import { PartInterface } from '../interfaces';

interface Props {
  data: PartInterface;
}

export default function PartCard(props: Props) {
  const { data } = props;
  return (
    <Link href={`/parts/${data.id}`}>
      <a className="block rounded-sm border-2 p-3 outline-white ring-white/40 ring-offset-2 ring-offset-violet-900 hover:ring">
        <p className="text-lg font-semibold">{data.name}</p>
        <p className="text-sm">
          From {removeSlashOrDash(data.from)} to {removeSlashOrDash(data.to)}
        </p>
      </a>
    </Link>
  );
}
