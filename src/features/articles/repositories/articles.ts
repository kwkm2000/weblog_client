import { Article, Articles } from "@/features/articles/models";
import { axios } from "@/lib/axios";

export async function getALl(): Promise<Articles.Model> {
  return axios.get("/articles");
}

export async function getOne(id: number): Promise<Article.Model> {
  return axios.get(`/articles/${id}`);
}
