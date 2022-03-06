import { GetStaticPaths, GetStaticProps } from 'next';
import axios from 'axios';
import React, { useState } from 'react';
import { ResponseAPIPart, ResponseAPISections } from '../../interfaces';
import Layout from '../../components/containers/Layout';
import { useRouter } from 'next/router';
import { removeSlashOrDash } from '../../helpers';
import HeaderContainer from '../../components/containers/HeaderContainer';
import ListItems from '../../components/ListItems';
import useSWR from 'swr';
import fetcher from '../../utils/fetcher';
import AllPartsPagination from '../../components/AllParsPagination';
import ButtonSquare from '../../components/ButtonSquare';
import ButtonHome from '../../components/ButtonHome';

export default function Part(props: ResponseAPIPart) {
  const { data } = props;
  const router = useRouter();
  return (
    <Layout>
      <HeaderContainer className="gap-4">
        <div className="flex-1 lg:text-right">
          <h1 className="text-2xl">Part {router.query.part}</h1>
        </div>
        <div className="flex-1">
          <p>From {removeSlashOrDash(data[0].Date)}</p>
          <p>To {removeSlashOrDash(data[data.length - 1].Date)}</p>
        </div>
      </HeaderContainer>
      <AllPartsPagination
        currentNumber={(router.query.part as string) || '1'}
      />
      <ListItems data={data} />
      <div className="h-20" />
      <ButtonHome />
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const URL = process.env.NEXT_PUBLIC_API_URL;
  const response = await axios.get(`${URL}/parts?section=1`);
  const responseData: ResponseAPISections = await response.data;
  const paths = responseData.data.data.map((item) => {
    return { params: { part: item.id.toString() } };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const URL = process.env.NEXT_PUBLIC_API_URL;
  const response = await axios.get(`${URL}/parts/${params.part}`);
  const responseData: ResponseAPIPart = await response.data;
  return { props: responseData };
};
