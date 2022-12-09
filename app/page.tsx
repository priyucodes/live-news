import { categories } from '../constants';
import fetchNews from '../lib/fetchNews';
import NewsList from './NewsList';

const Homepage = async () => {
  // fetch news data
  const news: NewsResponse = await fetchNews(categories.join(','));

  // set timeout for 3seconds ( to check our loading state)
  // await new Promise(resolve => setTimeout(resolve, 3000));

  return (
    <div className="">
      <NewsList news={news} />
    </div>
  );
};
export default Homepage;
