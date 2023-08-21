import React, { useCallback } from "react";
import styles from "./index.module.css";
import { Article } from "../../models";
import Link from "next/link";
import { formatDate } from "@/utility/formatDate";
import Image from "next/image";

interface Props {
  articles: Article.Model[];
}

const ArticleList: React.FC<Props> = ({ articles }) => {
  const getFirstLineOFText = useCallback((article: Article.Model) => {
    return article.text.find((text) => {
      if (!text) {
        return false;
      }
    });
  }, []);
  const [firstArticle, ...restArticles] = articles;

  return (
    <div>
      <div className={styles.topContents}>
        <div className={styles.topContentsImageWrapper}>
          <Image
            alt=""
            fill={true}
            src={firstArticle.headerImage}
            className={styles.topContentsImage}
          />
        </div>

        <div className="text">
          <p>{formatDate(firstArticle.createdAt)}</p>
          <p>
            <Link href={`/article/${firstArticle.id}`}>
              {firstArticle.title}
            </Link>
          </p>
        </div>
      </div>
      {restArticles.length && (
        <div className={styles.articlesContainer}>
          {restArticles.map((article) => {
            return (
              <div key={article.id} className={styles.articleListColumn}>
                <Link href={`/article/${article.id}`}>
                  {!!article.headerImage && (
                    <div className={styles.articleListImageWrapper}>
                      <Image
                        alt=""
                        fill={true}
                        src={article.headerImage}
                        className={styles.articleListImage}
                      />
                    </div>
                  )}
                  <p>{article.title}</p>
                  <p>{formatDate(article.createdAt)}</p>
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ArticleList;
