const { useRouter } = require("next/navigation");

const ShareWeatherInfo = () => {
  const router = useRouter();

  return (
    <div className="h-fit p-4 flex flex-col gap-4 items-center justify-center rounded-md bg-zinc-300">
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
