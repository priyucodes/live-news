const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) => {
  // GraphQL Query
  // Fetch with caching...
  // Sort by images vs not images present
  // return;
};

export default fetchNews;

// https://graphql.org/learn/schema/
// Example Stepzen import (automatic graphql generation with types)
// It looks on the response and generate graphql type definitions
// sometimes while importing author(name) and image type are not correct so check it with the typings.d.ts to make sure everything is correct.
// stepzen import curl "http://api.mediastack.com/v1/news?access_key=secret&sources=business,sports"
