import Head from "next/head";
import Layout from "../components/layout";
import homeStyles from "../styles/Home.module.css";
import { useState } from "react";
import Link from "next/link";
// import { getSortedPostsData } from "../lib/posts";

import type { GetStaticProps } from "next";
import Header from "../components/header";

// export const getStaticProps: GetStaticProps = async () => {
//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// };

export default function Home(
  {
    //   allPostsData,
    // }: {
    //   allPostsData: {
    //     date: string;
    //     title: string;
    //     id: string;
    //   }[];
  }
) {
  return (
    <Layout home>
      <Head>
        <title>Next.js 練習App</title>
      </Head>
      <h1 className="text-3xl font-bold">Next.js 練習App</h1>
      <section className={homeStyles.title}>
        <Header />
      </section>
    </Layout>
  );
}
