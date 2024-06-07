const { useRouter } = require("next/navigation");

const ShareWeatherInfo = () => {
  const router = useRouter();

  return (
    <div className="max-w-80 mx-auto w-1/2 flex flex-col gap-4 items-center justify-center rounded-md bg-zinc-300 m-4">
      <p className="text-center">You can share your weather info with others</p>
      <button
        className="rounded-lg bg-customColor text-white px-4 py-2"
        onClick={() => {
          router.push("/signin");
        }}
      >
        Please login
      </button>
      {/* <Auth /> */}
    </div>
  );
};

export default ShareWeatherInfo;
