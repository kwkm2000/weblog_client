import React from "react";
import Head from "next/head";
import MainLayout from "../components/Layout/MainLayout/MainLayout";
import { Articles } from "../domain/repositories";
import { Article } from "../domain/models";
import { GetStaticProps, NextPage } from "next";
// import ArticleList from "../features/articles/components/ArticleList";
import ArticleList from "@/features/articles/components/ArticleList";

interface Props {
  articles: Article.Model[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const articles = await Articles.getALl();
  return {
    props: {
      articles,
    },
  };
};

const Home: NextPage<Props> = ({ articles }) => {
  return (
    <>
      <Head>
        <title>MIZUIRO LAB</title>
        <meta name="description" content="MIZUIRO LAB" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <h2 style={{ marginBottom: 20 }}>Posts</h2>
        <ArticleList articles={articles} />
      </MainLayout>
    </>
  );
};

export default Home;
