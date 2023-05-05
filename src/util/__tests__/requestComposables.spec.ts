import { describe, it, expect, vi } from 'vitest';
import { useArticlesListRequest, useSingleArticleRequest } from '../requestComposables';

global.fetch = vi.fn();

describe('useArticlesListRequest', () => {
  it('has correct url with no params', () => {
    const { articlesListRequest } = useArticlesListRequest();

    articlesListRequest.doRequest({});

    expect(global.fetch).toHaveBeenCalledWith('https://6141b2f5357db50017b3dc1a.mockapi.io/api/v1/Articles');
  })

  it('has correct url with search param only', () => {
    const { articlesListRequest } = useArticlesListRequest();

    articlesListRequest.doRequest({ search: 'test search' });

    expect(global.fetch).toHaveBeenCalledWith('https://6141b2f5357db50017b3dc1a.mockapi.io/api/v1/Articles?search=test%20search&');
  });

  it('has correct url with page param only', () => {
    const { articlesListRequest } = useArticlesListRequest();

    articlesListRequest.doRequest({ page: 3 });

    expect(global.fetch).toHaveBeenCalledWith('https://6141b2f5357db50017b3dc1a.mockapi.io/api/v1/Articles?page=3&');
  });

  it('has correct url with limit param only', () => {
    const { articlesListRequest } = useArticlesListRequest();

    articlesListRequest.doRequest({ limit: 7 });

    expect(global.fetch).toHaveBeenCalledWith('https://6141b2f5357db50017b3dc1a.mockapi.io/api/v1/Articles?limit=7');
  });

  it('has correct url with all params', () => {
    const { articlesListRequest } = useArticlesListRequest();

    articlesListRequest.doRequest({ search: 'search test', page: 1, limit: 9 });

    expect(global.fetch).toHaveBeenCalledWith('https://6141b2f5357db50017b3dc1a.mockapi.io/api/v1/Articles?search=search%20test&page=1&limit=9');
  });
});

describe('useArticlesListRequest', () => {
  it('has correct url with appropriate article id', () => {
    const { singleArticleRequest } = useSingleArticleRequest();

    singleArticleRequest.doRequest('19');

    expect(global.fetch).toHaveBeenCalledWith('https://6141b2f5357db50017b3dc1a.mockapi.io/api/v1/Articles/19');
  });
})