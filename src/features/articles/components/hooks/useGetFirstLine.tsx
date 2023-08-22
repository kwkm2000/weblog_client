import React from "react";
import { Article } from "@/features/articles/models";
import { CustomElement } from "@/slateCustomTypes";

const useGetFirstLine = (article: Article.Model) => {
  const paragraphElement = article.text.find((text) => {
    if (!("type" in text)) {
      return false;
    }
    return text.type === "paragraph";
  }) as CustomElement | undefined;

  if (!paragraphElement) {
    return "";
  }

  return paragraphElement.children[0].text;
};

export default useGetFirstLine;
