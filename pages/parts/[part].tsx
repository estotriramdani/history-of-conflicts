import { GetStaticPaths, GetStaticProps } from 'next';
import axios from 'axios';
import React from 'react';
import { ResponseAPIPart, ResponseAPISections } from '../../interfaces';
import Layout from '../../components/Layout';

export default function Part(props: ResponseAPIPart) {
  return <Layout>{JSON.stringify(props.data)}</Layout>;
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
