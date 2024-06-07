import useInput from "@/hooks/use-Input";

import InputWithInvalidText from "../ui/Input/InputWithInvalidText";
import LoadingButton from "../ui/LoadingButton/LoadingButton";
import Button from "../ui/Button/Button";
import { useEffect, useState } from "react";
import {
  confirmPasswordValidation,
  emailValidation,
  fullNameValidation,
  passwordValidation,
} from "../InputValidations/InputValidations";
import { useRouter } from "next/navigation";
import style from "./SignInForm.module.css";
import { colorTheme } from "@/constants";
import Auth from "./Auth";

const SignUpForm = ({ onSubmitCredentials }) => {
  const [formIsValid, setFormIsValid] = useState(false);

  const router = useRouter();

  const emailInput = useInput({ validateValue: emailValidation });
  const nameInput = useInput({ validateValue: fullNameValidation });
  const passwordInput = useInput({ validateValue: passwordValidation });
  const confirmPasswordInput = useInput({
    validateValue: (value) =>
      confirmPasswordValidation(value, passwordInput.value),
  });

  useEffect(() => {
    setFormIsValid(
      emailInput.isValid &&
        passwordInput.isValid &&
        confirmPasswordInput.isValid &&
        nameInput.isValid
    );
  }, [
    emailInput.isValid,
    passwordInput.isValid,
    confirmPasswordInput.isValid,
    nameInput.isValid,
  ]);

  // const dispatch = useDispatch();

  const submitHandler = () => {
    onSubmitCredentials({
      email: emailInput.value.toLowerCase(),
      createPassword: confirmPasswordInput.value,
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
        mandatory={true}
      />
      <InputWithInvalidText
        ErrorMessage={"They are not same"}
        className={`${style.Input} `}
        placeholder="confirm your Password"
        inputFields={confirmPasswordInput}
        type="password"
        colorTheme={colorTheme.input}
        mandatory={true}
      />
    </div>
  );

  const EmailComponent = (
    <div className={style.Club} style={{ position: "relative" }}>
      <InputWithInvalidText
        ErrorMessage={"Invalid Name"}
        placeholder="Enter your Full Name"
        className={`${style.Input} `}
        inputFields={nameInput}
        type="text"
        colorTheme={colorTheme.input}
        mandatory={true}
      />
      <InputWithInvalidText
        ErrorMessage={"Invalid Email"}
        placeholder="Enter your Email"
        className={`${style.Input} `}
        inputFields={emailInput}
        type="email"
        colorTheme={colorTheme.input}
        mandatory={true}
      />
    </div>
  );

  return (
    <div className={`${style.card} ${style.signIn}`}>
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
        <span className={style.or}>Already have an account?</span>
      </div>
      <Button
        onClick={() => {
          router.push("/signin");
        }}
        className={style.signUpBtn}
      >
        Sign-in
      </Button>

      <span>Or</span>

      <Auth text={"Sign up with Google"} />
    </div>
  );
};
export default SignUpForm;
