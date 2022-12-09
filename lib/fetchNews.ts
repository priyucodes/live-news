import { gql } from 'graphql-request';
import sortNewsByImage from './sortNewsByImage';

const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) => {
  const query = gql`
    query MyQuery(
      $access_key: String!
      $categories: String!
      $keywords: String
    ) {
      myQuery(
        access_key: $access_key
        categories: $categories
        countries: "in"
        sort: "published_desc"
        keywords: $keywords
      ) {
        data {
          author
          category
          country
          description
          image
          language
          published_at
          source
          title
          url
        }
        pagination {
          count
          offset
          total
          limit
        }
      }
    }
  `;

  // Fetch with caching...
  const res = await fetch(
    'https://tolu.stepzen.net/api/scaramouche/__graphql',
    {
      method: 'POST',
      // no-cache means SSR
      cache: isDynamic ? 'no-cache' : 'default',
      // if not dynamic then revalidate it 20s
      next: isDynamic ? { revalidate: 0 } : { revalidate: 20 },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
      },
      body: JSON.stringify({
        query,
        variables: {
          access_key: process.env.MEDIASTACK_API_KEY,
          categories: category,
          keywords: keywords,
        },
      }),
    }
  );

  console.log('Loading NEW DATA FROM API for category ->', category, keywords);

  const newsResponse = await res.json();
  console.log(newsResponse);
  // Sort by images vs not images present
  const news = sortNewsByImage(newsResponse.data.myQuery);

  return news;
};

export default fetchNews;

// https://graphql.org/learn/schema/
// Example Stepzen import (automatic graphql generation with types)
// It looks on the response and generate graphql type definitions
// sometimes while importing author(name) and image type are not correct so check it with the typings.d.ts to make sure everything is correct.
// stepzen import curl "http://api.mediastack.com/v1/news?access_key=secret&sources=business,sports"
