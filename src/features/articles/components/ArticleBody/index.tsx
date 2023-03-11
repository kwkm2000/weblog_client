import React from "react";
import styles from "./index.module.css";
import { Article } from "@/features/articles/models";
import draftToHtml from "draftjs-to-html";
import { formatDate } from "@/utility/formatDate";

interface Props {
  article: Article.Model;
}

const ArticleBody: React.FC<Props> = ({ article }) => {
  const markup = draftToHtml(article.text);

  return (
    <div className={styles.root}>
      <h2 className={styles.title}>{article.title}</h2>
      <p className={styles.date}>{formatDate(article.createdAt)}</p>
      <div
        className={styles.body}
        dangerouslySetInnerHTML={{ __html: markup }}
      ></div>
    </div>
  );
};

export default ArticleBody;
