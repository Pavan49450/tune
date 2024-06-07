import Button from "@/components/ui/Button/Button";
import CustomDatePicker from "@/components/ui/DatePIcker/DatePIcker";
import { setDoc, doc, collection, addDoc } from "firebase/firestore";
import { db } from "@/firebaseConfig/firebaseConfig";
import { useAuth } from "@/context/AuthProvider";
import LoadingButton from "@/components/ui/LoadingButton/LoadingButton";
import Message from "@/components/ui/Popup/Message";
const {
  descriptionValidation,
  toDateValidation,
  ValueUndefinedValidations,
} = require("@/components/InputValidations/InputValidations");
const {
  default: InputWithInvalidText,
} = require("@/components/ui/Input/InputWithInvalidText");
const {
  default: CustomTextArea,
} = require("@/components/ui/TextArea/TextArea");
const { default: useInput } = require("@/hooks/use-Input");
const { useRouter } = require("next/navigation");
const { useState, useEffect } = require("react");

const WeatherInfoForm = ({ onSubmitInfo }) => {
  const [formIsValid, setFormIsValid] = useState(false);

  const [isLoading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const router = useRouter();

  const dateInput = useInput({ validateValue: ValueUndefinedValidations });
  const alertInput = useInput({ validateValue: descriptionValidation });
  const placeInput = useInput({ validateValue: descriptionValidation });

  useEffect(() => {
    setFormIsValid(
      dateInput.isValid && alertInput.isValid && placeInput.isValid
    );
  }, [dateInput.isValid, alertInput.isValid, placeInput.isValid]);

  const { currentUser } = useAuth();

  useEffect(() => {}, [currentUser]);

  const docRef = collection(db, "weatherInfo");

  const submitHandler = () => {
    console.log({
      alert: alertInput.value,
      date: dateInput.value,
      place: placeInput.value,
    });
    // onSubmitInfo({
    //   alert: alertInput.value,
    //   date: dateInput.value,
    //   place: placeInput.value,
    // });
    const SaveInfo = async () => {
      setLoading(true);
      if (currentUser) {
        await addDoc(docRef, {
          date: dateInput.value,
          place: placeInput.value,
          alert: alertInput.value,
          uid: currentUser.uid,
          email: currentUser.email,
          name: currentUser.displayName,
        });
      }
      setLoading(false);
      dateInput.reset();
      alertInput.reset();
      placeInput.reset();
      setMessage("Your info has been saved thanks for your help!");
      // alert("Your info has been saved thanks for your help!");
    };
    SaveInfo();
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <h2 className="mb-4 text-center bg-customColor rounded-xl px-2 text-white py-2">
        Please share your weather condition other info at your place here
      </h2>
      <InputWithInvalidText
        ErrorMessage={"Invalid Place"}
        placeholder="Enter Place"
        inputFields={placeInput}
        type="text"
      />
      <CustomDatePicker
        selectedDate={dateInput.value}
        onChange={(date) => dateInput.AssignValue(date)}
        isValid={dateInput.isValid}
        placeholderText={"Date"}
        errorMessage={"Invalid data"}
      />
      <CustomTextArea
        inputFields={alertInput}
        placeholder="Enter your info"
        name={"info"}
      />
      <div className="mt-8 w-full flex justify-end">
        <LoadingButton
          isLoading={isLoading}
          onClick={submitHandler}
          disabled={!formIsValid}
          text={"Upload info"}
        ></LoadingButton>
      </div>
      {message && (
        <Message
          message={message}
          onClose={() => {
            setMessage("");
          }}
          time={5}
        />
      )}
    </div>
  );
};

export default WeatherInfoForm;
