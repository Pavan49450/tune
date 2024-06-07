"use client";
import { auth } from "@/firebaseConfig/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

const { default: SignInForm } = require("@/components/login-signup/Login");

const LoginPage = () => {
  const router = useRouter();
  const onSubmit = async (data) => {
    console.log(data);
    signInWithEmailAndPassword(auth, data.email, data.createPassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        router.push("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="p-4 text-4xl font-semibold">Login</h1>
      <SignInForm onSubmitCredentials={onSubmit} />
    </div>
  );
};

export default LoginPage;
