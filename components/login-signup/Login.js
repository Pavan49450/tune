import useInput from "@/hooks/use-Input";

import InputWithInvalidText from "../ui/Input/InputWithInvalidText";
import LoadingButton from "../ui/LoadingButton/LoadingButton";
import Button from "../ui/Button/Button";
import { useEffect, useState } from "react";
import {
  emailValidation,
  passwordValidation,
} from "../InputValidations/InputValidations";
import { useRouter } from "next/navigation";
import style from "./SignInForm.module.css";
import { colorTheme } from "@/constants";
import Auth from "./Auth";
import CustomImage from "../ui/Image/Image";

const SignInForm = ({ onSubmitCredentials }) => {
  const [formIsValid, setFormIsValid] = useState(false);

  const router = useRouter();

  const emailInput = useInput({ validateValue: emailValidation });
  const passwordInput = useInput({ validateValue: passwordValidation });

  useEffect(() => {
    setFormIsValid(emailInput.isValid);
  }, [emailInput.isValid, passwordInput.isValid]);

  // const dispatch = useDispatch();

  const submitHandler = () => {
    onSubmitCredentials({
      email: emailInput.value.toLowerCase(),
      createPassword: passwordInput.value,
    });
  };

  const PasswordComponent = (
    <div className={style.Club} style={{ position: "relative" }}>
      <InputWithInvalidText
        ErrorMessage={"Invalid Password"}
        className={`${style.Input} `}
        placeholder="Enter your Password"
        inputFields={passwordInput}
        type="password"
        colorTheme={colorTheme.input}
      />
    </div>
  );

  const EmailComponent = (
    <InputWithInvalidText
      ErrorMessage={"Invalid Email"}
      placeholder="Enter your Email"
      className={`${style.Input} `}
      inputFields={emailInput}
      type="email"
      colorTheme={colorTheme.input}
    />
  );

  return (
    <div
      className={`${style.card} ${style.signIn} border-2 border-zinc-400 shadow-sm relative`}
    >
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
      <h1 className="p-4 text-4xl font-semibold">Login</h1>

      <div style={{ width: "100%" }}>
        {EmailComponent}
        {PasswordComponent}
      </div>

      <LoadingButton
        className={formIsValid ? style.submitBtn : `${style.disabled}`}
        disabled={!formIsValid}
        style={{ backgroundColor: !formIsValid && "#ccc" }}
        text={"Login"}
        loaderColor="white"
        isLoading={false}
        onClick={submitHandler}
      />

      <div className={style.line}>
        <div className={style.lineOn}></div>
        <span className={style.or}>Don’t have an Account?</span>
      </div>
      <Button
        onClick={() => {
          router.push("/signup");
        }}
        className={style.signUpBtn}
      >
        Sign-up
      </Button>

      <span>Or</span>

      <Auth text={"Sign in with Google"} />
    </div>
  );
};
export default SignInForm;
