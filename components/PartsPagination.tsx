import React from 'react';
import { ResponseAPISections } from '../interfaces';
import ButtonSquare from './ButtonSquare';

interface Props {
  maxSection: number;
  section: number;
  setSection: (section: number) => void;
}

export default function PartsPagination(props: Props) {
  const { maxSection, section, setSection } = props;
  return (
    <>
      <div className="fixed bottom-0 left-0 mt-4 flex w-full justify-center gap-3 bg-violet-600 py-4 md:static md:bg-transparent">
        {Array(maxSection)
          .fill(0)
          .map((_, index) => (
            <ButtonSquare
              onClick={() => setSection(index + 1)}
              key={index}
              isActive={section === index + 1}
            >
              {index + 1}
            </ButtonSquare>
          ))}
      </div>
      <div className="h-20" />
    </>
  );
}
