"use client";

import Auth from "@/components/login-signup/Auth";
import Button from "@/components/ui/Button/Button";
import CustomImage from "@/components/ui/Image/Image";
import { useRouter } from "next/navigation";
import style from "../../components/login-signup/SignInForm.module.css";
import { useEffect } from "react";
import { AuthProvider, useAuth } from "@/context/AuthProvider";

const SignIn = () => {
  return (
    <AuthProvider>
      <SigninComponent />
    </AuthProvider>
  );
};

export default SignIn;

const SigninComponent = () => {
  const { userLoggedIn } = useAuth();

  const router = useRouter();
  useEffect(() => {
    document.title = "Sign In Page";
    if (userLoggedIn) {
      router.push("/");
    }
  }, [userLoggedIn]);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-evenly w-full gap-16 py-6 px-2 max-w-lg border border-zinc-400 shadow-sm relative">
        <div className="absolute top-4 left-4">
          <CustomImage
            onClick={() => {
              router.push("/");
            }}
            src={`/assets/icons/home.png`}
            width={40}
            height={40}
            classForDiv={
              "hover:bg-zinc-200 transition-all cursor-pointer p-2 rounded-full"
            }
          />
        </div>
        <h1 className="text-4xl font-semibold">Sign up</h1>
        <div className="w-full flex flex-col items-center gap-4">
          <Auth text={"Sign up with Google"} />
          <div className={style.line}>
            <div className={style.lineOn}></div>
            <span className={style.or}>Don’t have an Account?</span>
          </div>
          <Button
            onClick={() => {
              router.push("/signin");
            }}
            className={style.signUpBtn}
          >
            Sign-in
          </Button>
        </div>
      </div>
    </div>
  );
};
