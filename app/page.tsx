import { categories } from '../constants';
import fetchNews from '../lib/fetchNews';
import NewsList from './NewsList';

const Homepage = async () => {
  // fetch news data
  const news: NewsResponse = await fetchNews(categories.join(','));
  console.log(news);
  return (
    <div className="">
      <NewsList news={news} />
    </div>
  );
};
export default Homepage;
