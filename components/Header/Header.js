import { useRouter } from "next/navigation";
import { doSignOut } from "../login-signup/AuthMethods";
import { useEffect } from "react";

const { useAuth } = require("@/context/AuthProvider");

const Header = () => {
  const { userLoggedIn, currentUser } = useAuth();

  // useEffect(() => {
  //   console.log(currentUser);
  // });

  const router = useRouter();
  return (
    <div className=" max-w-7xl  mx-auto p-4 bg-customColor flex justify-between items-center">
      <h1 className=" text-center text-2xl text-white font-semibold">
        <span className="text-4xl">TUNE </span>
        in-to Weather
      </h1>
      {userLoggedIn ? (
        <div className="flex gap-2 items-center">
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
