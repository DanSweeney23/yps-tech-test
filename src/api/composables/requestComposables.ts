import { baseUrl, useRequest } from "../config";
import type { Article } from "../models/article";

type ArticlesListRequestParams = {
  search?: string,
  page?: number,
  limit?: number
};

const liveGenerationRequest = useRequest<Article[]>((params: ArticlesListRequestParams) => {
  let requestParams = '?';

  if (params.search) requestParams += `search=${encodeURIComponent(params.search)}&`;
  if (params.page) requestParams += `page=${params.page}&`;
  if (params.limit) requestParams += `limit=${params.limit}`;

  return fetch(`${baseUrl}/Articles` + (requestParams !== '?' ? requestParams : ''))
});

export function useArticlesListRequest() {
  return { liveGenerationRequest };
};

export function useSingleArticleRequest() {
  const singleArticleRequest = useRequest<Article>((id: string) => fetch(`${baseUrl}/Articles/${id}`));
  return { singleArticleRequest }
};