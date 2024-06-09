"use client";
import { AuthProvider } from "@/context/AuthProvider";
import { auth } from "@/firebaseConfig/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const { default: SignInForm } = require("@/components/login-signup/Login");

const LoginPage = () => {
  const router = useRouter();

  useEffect(() => {
    document.title = "Login Page";
  }, []);

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
    <AuthProvider>
      <div className="flex flex-col items-center justify-center h-screen border">
        <SignInForm onSubmitCredentials={onSubmit} />
      </div>
    </AuthProvider>
  );
};

export default LoginPage;
