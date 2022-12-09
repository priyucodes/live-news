'use client';
import { useRouter } from 'next/navigation';
type Props = {
  article: Article;
};
const ReadMoreButton = ({ article }: Props) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
    // https://stackoverflow.com/questions/36961080/syntax-for-destructuring-arrays-into-function-parameters-in-es6
    const queryString = Object.entries(article)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');
    const url = `/article?${queryString}`;
    router.push(url);
  };
  return (
    <button
      className="bg-orange-400 h-10 rounded-b-lg dark:text-gray-900 hover:bg-orange-500"
      onClick={handleClick}
    >
      Read More
    </button>
  );
};
export default ReadMoreButton;
