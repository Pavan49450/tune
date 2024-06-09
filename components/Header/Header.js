"use client";

import { useRouter } from "next/navigation";
import { doSignOut } from "../login-signup/AuthMethods";
import CustomImage from "../ui/Image/Image";

const { useAuth } = require("@/context/AuthProvider");

const Header = () => {
  const { userLoggedIn, currentUser } = useAuth();

  // useEffect(() => {
  //   console.log(currentUser);
  // });

  const router = useRouter();
  return (
    <div className=" max-w-7xl  mx-auto p-2 sm:p-4 pt-6 bg-customColor flex justify-between items-center flex-col gap-16 sm:gap-4 sm:flex-row">
      <div className="flex gap-3 items-end">
        <CustomImage
          src={`/assets/logo.png`}
          alt="logo"
          width={40}
          height={40}
          className="min-w-10"
        />
        <div className=" text-center w-fit flex gap-2 items-end">
          <span className="text-2xl sm:text-4xl text-white">TUNE </span>
          <span className="text-xl sm:text-2xl font-semibold">in</span>
        </div>
      </div>
      {userLoggedIn ? (
        <div className="flex gap-2 items-center w-full justify-end">
          <h2 className="text-white">Hi, {currentUser.displayName}</h2>

          <span
            className="bg-white py-2 px-4 rounded-2xl hover:bg-zinc-200 active:scale-90 transition-all cursor-pointer"
            onClick={doSignOut}
          >
            Sign out
          </span>
        </div>
      ) : (
        <span
          className="bg-white py-2 px-4 rounded-2xl hover:bg-zinc-200 active:scale-90 transition-all cursor-pointer"
          onClick={() => {
            router.push("/signin");
          }}
        >
          Sign in
        </span>
      )}
    </div>
  );
};

export default Header;
