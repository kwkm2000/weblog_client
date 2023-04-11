import React from "react";
import styles from "./index.module.css";
import { Article } from "../../models";
import dayjs from "dayjs";
import Link from "next/link";
import { formatDate } from "@/utility/formatDate";

interface Props {
  articles: Article.Model[];
}

const ArticleList: React.FC<Props> = ({ articles }) => {
  return (
    <div>
      {articles.map((article) => {
        return (
          <div key={article.id} style={{ marginBottom: 20 }}>
            <p>{formatDate(article.createdAt)}</p>
            <p>
              <Link href={`/article/${article.id}`}>{article.title}</Link>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default ArticleList;
