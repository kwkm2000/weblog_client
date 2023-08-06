import React, { FC } from "react";
import { Descendant, Element as SlateElement, Text } from "slate";

interface SlateToHtmlProps {
  value: Descendant[];
}

const nodeToHTML = (node: Descendant): string => {
  if (Text.isText(node)) {
    return node.text;
  }

  const element = node as SlateElement;
  const children = serialize(element.children);

  switch (element.type) {
    case "paragraph":
      return `<p>${children}</p>`;
    case "heading-one":
      return `<h1>${children}</h1>`;
    case "heading-two":
      return `<h2>${children}</h2>`;
    case "image":
      return `<div class="image"><img src="${element.url}"></div>`;
    default:
      return children;
  }
};

const serialize = (nodes: Descendant[]): string => {
  return nodes.map(nodeToHTML).join("");
};

// Descendant[]を受け取り、それをHTMLに変換して描画するReactコンポーネント
const SlateToHtml: FC<SlateToHtmlProps> = ({ value }) => {
  const html = serialize(value);
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default SlateToHtml;
