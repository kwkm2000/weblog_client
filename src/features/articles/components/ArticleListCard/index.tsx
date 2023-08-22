import React, { useCallback } from "react";
import styles from "./index.module.css";
import { Article } from "../../models";
import Link from "next/link";
import { formatDate } from "@/utility/formatDate";
import Image from "next/image";
import useGetFirstLine from "@/features/articles/components/hooks/useGetFirstLine";

interface Props {
  article: Article.Model;
}

const ArticleListCard: React.FC<Props> = ({ article }) => {
  const firstLine = useGetFirstLine(article);

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
        <p>{firstLine}</p>
        <p>{formatDate(article.createdAt)}</p>
      </Link>
    </div>
  );
};

export default ArticleListCard;
