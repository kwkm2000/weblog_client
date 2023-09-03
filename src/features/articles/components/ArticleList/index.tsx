import React from "react";
import styles from "./index.module.css";
import { Article } from "@/features/articles/models";
import ArticleListCard from "@/features/articles/components/ArticleListCard";
import ArticleListFIrst from "@/features/articles/components/ArticleListFIrst";

interface Props {
  articles: Article.Model[];
}

const ArticleList: React.FC<Props> = ({ articles }) => {
  return (
    <>
      {articles.length && (
        <div className={styles.articlesContainer} data-testid="article-list">
          {articles.map((article, index) => {
            return index === 0 ? (
              <div key={article.id} className={styles.articleFirst}>
                <div className={styles.desktop}>
                  <ArticleListFIrst article={article} />
                </div>
                <div className={styles.mobile}>
                  <ArticleListCard article={article} />
                </div>
              </div>
            ) : (
              <div key={article.id} className={styles.articleCard}>
                <ArticleListCard article={article} />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default ArticleList;
