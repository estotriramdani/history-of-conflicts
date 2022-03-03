import React from 'react';
import { ResponseAPISections } from '../interfaces';
import PartCard from './PartCard';
import SkeletonDiv from './SkeletonDiv';

interface Props {
  data: ResponseAPISections;
}

const Parts = (props: Props) => {
  const { data } = props;
  return (
    <div className="mx-auto mt-7 grid w-full grid-cols-1 gap-4 md:w-3/5 md:grid-cols-2">
      {data?.data.data.map((item) => (
        <PartCard data={item} key={item.id} />
      ))}
      {!data &&
        Array(6)
          .fill(0)
          .map((_, index) => (
            <SkeletonDiv className="h-20 rounded-sm" key={index} />
          ))}
    </div>
  );
};

export default Parts;
