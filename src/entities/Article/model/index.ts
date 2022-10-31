export type { Article } from './types/article';
export type { ArticleDetailsSchema } from './types/articleDetailsSchema';
export {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from './selectors';
export { fetchArticleById } from './services';
export { articleDetailsActions, articleDetailsReducer, articleDetailsName } from './slice';