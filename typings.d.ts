// https://stackoverflow.com/questions/51439843/unknown-vs-any
// https://www.typescriptlang.org/docs/handbook/basic-types.html
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
// https://stackoverflow.com/questions/67155108/what-is-the-difference-between-number-and-number-in-typescript

type Article = {
  author: string | null;
  category: string;
  country: string;
  description: string;
  image: string | null;
  language: string;
  published_at: string;
  source: string;
  title: string;
  url: string;
};
type Pagination = {
  count: Int;
  limit: Int;
  offset: Int;
  total: Int;
};

type NewsResponse = {
  pagination: Pagination;
  data: Article[];
};
// Can only be one of these strings
type Category =
  | 'general'
  | 'business'
  | 'entertainment'
  | 'health'
  | 'science'
  | 'sports'
  | 'technology';
