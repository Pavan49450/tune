"use client";

import Auth from "@/components/login-signup/Auth";
import SignUpForm from "@/components/login-signup/Signup";

const SignIn = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center w-full min-h-96 max-w-lg border border-zinc-200">
        {/* <h1 className="p-4 text-4xl font-semibold">Sign up</h1>
      <SignUpForm /> */}
        <Auth text={"Sign up with Google"} />
      </div>
    </div>
  );
};

export default SignIn;
