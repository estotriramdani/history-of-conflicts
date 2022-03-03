import Head from 'next/head';
interface Props {
  children?: React.ReactNode;
}

export default function Layout(props: Props) {
  return (
    <>
      <Head>
        <title>History of Conflicts</title>
      </Head>
      <div className="min-h-screen bg-gradient-to-r from-violet-900 to-violet-800 font-mono text-white">
        {props.children}
      </div>
    </>
  );
}
