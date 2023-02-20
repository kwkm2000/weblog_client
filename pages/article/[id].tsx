import React from "react";
import Head from "next/head";
import Link from "next/link";
import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";
import { useRouter } from "next/router";
import * as Article from "../../domain/models/article";
import { Articles } from "../../domain/repositories";
import dayjs from "dayjs";
import { ParsedUrlQuery } from "node:querystring";

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

export default function ArticleDetail() {
  const router = useRouter();
  const [id, setId] = React.useState<string>();
  const [article, setArticle] = React.useState<Article.Model>();
  const getArticle = React.useCallback(async () => {
    const article = await Articles.getOne(Number(id));
    setArticle(article);
  }, [setArticle, id]);
  const dateFormat = React.useCallback(
    (date: Date) => dayjs().format("YYYY/MM/DD"),
    []
  );

  React.useEffect(() => {
    if (router.asPath !== router.route) {
      const queryId = router.query.id;
      if (!queryId || Array.isArray(queryId)) {
        return;
      }

      setId(queryId);
    }
  }, [router]);

  React.useEffect(() => {
    if (!id) {
      return;
    }
    getArticle();
  }, [id, getArticle]);

  if (!article) {
    return;
  }

  return (
    <>
      <Head>
        <title>{article.title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h2>{article.title}</h2>
        <p>{dateFormat(article.createdAt)}</p>
        {article.text.blocks.map((block) => {
          return <p key={block.key}>{block.text}</p>;
        })}

        <p>
          <Link href="/">TOPへ</Link>
        </p>
      </main>
    </>
  );
}
