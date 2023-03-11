import React from "react";
import Head from "next/head";
import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";
import * as Article from "../../features/articles/models/article";
import { Articles } from "../../features/articles/repositories";
import { ParsedUrlQuery } from "node:querystring";
import MainLayout from "@/components/Layout/MainLayout/MainLayout";
import ArticleBody from "@/features/articles/components/ArticleBody";

interface Params extends ParsedUrlQuery {
  id: string;
}

interface Props {
  article: Article.Model;
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}: GetStaticPropsContext) => {
  const article = await Articles.getOne(Number(params?.id));

  return {
    props: {
      article,
    },
  };
};
export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const articles = await Articles.getALl();
  const paths = articles.map((article) => {
    const { id } = article;

    return {
      params: {
        id: id.toString(),
      },
    };
  });

  return { paths, fallback: false };
};

export const ArticleDetail: NextPage<Props> = ({ article }) => {
  return (
    <>
      <Head>
        <title>{article.title} | MIZUIRO LAB</title>
        <meta name="description" content={article.title} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <ArticleBody article={article} />
      </MainLayout>
    </>
  );
};

export default ArticleDetail;
