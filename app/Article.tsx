type Props = {
  article: Article;
};
const Article = ({ article }: Props) => {
  // We used normal img tag as we dont know the exact domain/url for the images. We could whitelist all in our nextconfig file but that would be a security risk. So we use the img tag instead of the Image component from next/image. This was written by copilot, dymn so cool.

  // const nextConfig = {
  //   images: {
  //     remotePatterns: [
  //       {
  //         protocol: "https",
  //         hostname: "**",
  //       },
  //     ],
  //   },
  // };

  // https://www.npmjs.com/package/translate, https://www.npmjs.com/package/translate-google translate text to english..
  return (
    <article className="bg-slate-100 dark:bg-slate-800 flex flex-col rounded-lg shadow-sm hover:scale-105 hover:shadow-lg hover:bg-slate-200 transition-all duration-200 ease-out">
      {article.image && (
        <img
          src={article.image}
          alt={article.title}
          className="h-56 w-full object-cover rounded-t-lg shadow-md"
        />
      )}
      <div className="flex-1 flex flex-col">
        <div className="flex-1 flex flex-col p-5">
          <h2 className="font-serif font-bold">{article.title}</h2>
          <section className="flex-1 mt-2">
            {/* truncate for 1 line but lineclamp for multiples */}
            <p className="text-xs line-clamp-2">{article.description}</p>
          </section>

          <footer className="text-xs text-right ml-auto flex space-x-1 pt-5 italic text-gray-400">
            <p>{article.source} -</p>
            <p>{article.published_at}</p>
          </footer>
        </div>

        {/* Read More  */}
      </div>
    </article>
  );
};
export default Article;
