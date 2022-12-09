import { SpinnerRoundOutlined } from 'spinners-react';

// If blocked by await and can load a loading state
// loading.tsx reserved name
// www.npmjs.com/package/react-loader-spinner
//www.davidhu.io/react-spinners/
//www.npmjs.com/package/spinners-react
const Loading = () => {
  return (
    <div className="animate-pulse font-serif text-lg text-gray-400 text-center p-10 flex flex-col justify-center items-center">
      Loading News Feed...
      <SpinnerRoundOutlined
        size={50}
        thickness={100}
        speed={100}
        color="#36ad47"
      />
    </div>
  );
};
export default Loading;
