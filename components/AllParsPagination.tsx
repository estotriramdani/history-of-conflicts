import Link from 'next/link';
import { useState } from 'react';
import useSWR from 'swr';
import { ResponseAPISections } from '../interfaces';
import fetcher from '../utils/fetcher';
import ButtonSquare from './ButtonSquare';

export default function AllPartsPagination(props: { currentNumber: string }) {
  const { currentNumber } = props;
  const [showParts, setShowParts] = useState(false);
  const { data: parts } = useSWR<ResponseAPISections>(
    `${process.env.NEXT_PUBLIC_API_URL}/parts?section=1`,
    fetcher
  );
  return (
    <>
      <div className="mx-auto mt-4 w-full md:w-3/5">
        <button
          onClick={() => setShowParts((prevState) => !prevState)}
          className="flex h-12 w-full items-center justify-center rounded-sm bg-violet-700 text-white outline-none ring-violet-700/50 ring-offset-2 ring-offset-violet-800 hover:ring-2 focus:ring-2"
        >
          {!showParts ? 'Show' : 'Hide'} Parts
        </button>
      </div>
      {showParts && (
        <div className="mx-auto mt-4 flex w-full flex-wrap justify-center gap-2 md:w-3/5">
          {parts?.data.data.map((item, index) => (
            <ButtonSquare
              key={item.id}
              isAnchor
              isActive={item.id === +currentNumber}
              href={`/parts/${item.id}`}
            >
              {item.id}
            </ButtonSquare>
          ))}
        </div>
      )}
    </>
  );
}
