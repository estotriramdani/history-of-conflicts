import { useState } from 'react';
import useSWR from 'swr';
import fetcher from '../utils/fetcher';
import { ResponseAPISections } from '../interfaces';
import ButtonSquare from '../components/ButtonSquare';
import HeaderHome from '../components/HeaderHome';
import Parts from '../components/Parts';
import PartsPagination from '../components/PartsPagination';
import Layout from '../components/Layout';

export default function Home() {
  const [section, setSection] = useState(1);
  const URL = `/api/parts?section=${section}&itemsPerSection=10`;
  const { data } = useSWR<ResponseAPISections>(URL, fetcher);
  return (
    <Layout>
      <main className="flex min-h-screen flex-col p-3">
        <HeaderHome />
        <Parts data={data} />
        <PartsPagination
          section={section}
          setSection={setSection}
          maxSection={data?.data.maxSection || 5}
        />
      </main>
    </Layout>
  );
}
