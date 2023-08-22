import React from "react";
import styles from "./index.module.css";
import { Article } from "../../models";
import Link from "next/link";
import { formatDate } from "@/utility/formatDate";
import Image from "next/image";
import useGetFirstLine from "@/features/articles/components/hooks/useGetFirstLine";

interface Props {
  article: Article.Model;
}

const ArticleListFIrst: React.FC<Props> = ({ article }) => {
  const firstLine = useGetFirstLine(article);

  return (
    <div>
      <Link href={`/article/${article.id}`} className={styles.link}>
        {!!article.headerImage && (
          <div className={styles.imageWrapper}>
            <Image
              alt=""
              fill={true}
              src={article.headerImage}
              className={styles.image}
            />
          </div>
        )}
        <div className={styles.text}>
          <p>{article.title}</p>
          <p>{firstLine}</p>
          <p>{formatDate(article.createdAt)}</p>
        </div>
      </Link>
    </div>
  );
};

export default ArticleListFIrst;
