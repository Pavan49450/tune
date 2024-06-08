import { useState, useEffect } from "react";
import { signInWithPopup, signOut } from "firebase/auth";
import Cookies from "universal-cookie";
import { auth, provider } from "@/firebaseConfig/firebaseConfig";
import CustomImage from "../ui/Image/Image";
import { useRouter } from "next/navigation";

const Auth = ({ setIsAuth, text }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        console.log(user);
      } else {
        setUser(null);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const cookies = new Cookies();

  const router = useRouter();

  const signInWithGoogleHandler = async () => {
    try {
      await signInWithPopup(auth, provider);
      cookies.set("auth-token", auth.currentUser.refreshToken);
      router.push("/");
      setIsAuth(true);
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };

  const signOutHandler = async () => {
    try {
      await signOut(auth);
      cookies.set("auth-token", null);
      setUser(null);

      setIsAuth(false);
    } catch (error) {
      console.error("Error during sign-out:", error);
    }
  };

  const authElements = {
    signInWithGoogleHandler: (
      <button
        onClick={signInWithGoogleHandler}
        className={`flex gap-2 justify-center px-4 py-2 items-center border w-full border-customColor `}
        style={{ width: "70%" }}
      >
        <CustomImage src={`/assets/icons/google.png`} width={30} height={30} />
        <span>{text}</span>
      </button>
    ),

    SignOutGoogle: (
      <button
        onClick={signOutHandler}
        className={`flex gap-2 justify-center px-4 py-2 items-center border w-full border-customColor `}
        style={{ width: "70%" }}
      >
        <span>Sign out</span>
      </button>
    ),
    user: user,
  };

  return (
    <button
      onClick={signInWithGoogleHandler}
      className={`flex gap-2 justify-center px-4 py-2 items-center hover:bg-zinc-200 transition-all active:scale-90 border w-full border-zinc-300 `}
      style={{ width: "70%" }}
    >
      <CustomImage src={`/assets/icons/google.png`} width={30} height={30} />
      <span>{text}</span>
    </button>
  );
};

export default Auth;
