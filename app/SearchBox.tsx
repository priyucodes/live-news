'use client';

import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

const SearchBox = () => {
  // https://blog.logrocket.com/use-state-url-persist-state-usesearchparams/
  const [input, setInput] = useState<string>('');
  // next/navigation is nextjs13 and next/router is next12
  const router = useRouter();
  // to use onSubmit we need client component, wont work on server.
  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) return;
    // dynamic route /search/{input},
    //  query param
    router.push(`/search?term=${input}`);
    // TL;DR: Best practice for RESTful API design is that path params are used to identify a specific resource or resources, while query parameters are used to sort/filter those resources.
    // https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams

    // %20 is the HTML encoded value for a space. URLs don't handle spaces, so they HTML/URL encode this value.
    // use decodeURI('string') to fix/decode the string.
  };
  return (
    <form
      onSubmit={handleSearch}
      className="max-w-6xl mx-auto flex justify-between items-center px-5"
    >
      <input
        type="text"
        placeholder="Search Keywords..."
        onChange={e => setInput(e.target.value)}
        value={input}
        className="w-full h-14 rounded-sm placeholder-gray-500 text-gray-500 outline-none flex-1 bg-transparent dark:text-orange-400"
      />
      <button
        type="submit"
        disabled={!input}
        className="text-orange-400 disabled:text-gray-400"
      >
        Search
      </button>
    </form>
  );
};
export default SearchBox;
