// slateCustomTypes.ts
import { BaseEditor } from "slate";
import { ReactEditor } from "slate-react";
import { HistoryEditor } from "slate-history";

export type CustomText = { text: string; bold?: boolean };

export type ImageElement = {
  type: "image";
  url: string;
  children: CustomText[];
};

export type CustomElement =
  | {
      type:
        | "paragraph"
        | "list-item"
        | "block-quote"
        | "bulleted-list"
        | "heading-one"
        | "heading-two"
        | "numbered-list"
        | "preformatted";
      children: CustomText[];
    }
  | ImageElement;

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor & HistoryEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}
