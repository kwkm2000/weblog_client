import React, { useCallback } from "react";
import styles from "./index.module.css";
import { Article } from "../../models";
import ArticleListCard from "@/features/articles/components/ArticleListCard";
import ArticleListFIrst from "@/features/articles/components/ArticleListFIrst";

interface Props {
  articles: Article.Model[];
}

const ArticleList: React.FC<Props> = ({ articles }) => {
  // const getFirstLineOFText = useCallback((article: Article.Model) => {
  //   return article.text.find((text) => {
  //     if (!text) {
  //       return false;
  //     }
  //   });
  // }, []);

  return (
    <div>
      {articles.length && (
        <div className={styles.articlesContainer}>
          {articles.map((article, index) => {
            return index === 0 ? (
              <div key={article.id} className={styles.articleFirst}>
                <ArticleListFIrst article={article} />
              </div>
            ) : (
              <div key={article.id} className={styles.articleCard}>
                <ArticleListCard article={article} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ArticleList;
