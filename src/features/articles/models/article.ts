import * as Tag from "../../../domain/models/tag";
import { Descendant } from "slate";

export interface Model {
  readonly id: number;
  readonly title: string;
  readonly text: Descendant[];
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly tags: Tag.Model[];
  readonly headerImage: string;
}

export type Value = Pick<Model, "title" | "text" | "tags">;
