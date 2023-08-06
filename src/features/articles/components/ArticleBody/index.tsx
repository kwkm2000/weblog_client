import React from "react";
import styles from "./index.module.css";
import { Article } from "@/features/articles/models";
import { formatDate } from "@/utility/formatDate";
import ArticleBodyConverter from "@/features/articles/components/ArticleBodyConverter";

interface Props {
  article: Article.Model;
}

const ArticleBody: React.FC<Props> = ({ article }) => {
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>{article.title}</h2>

      <p className={styles.date}>{formatDate(article.createdAt)}</p>
      <ArticleBodyConverter value={article.text} />
    </div>
  );
};

export default ArticleBody;
