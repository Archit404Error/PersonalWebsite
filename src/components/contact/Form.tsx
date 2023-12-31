import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Input, Textarea } from "@nextui-org/react";
import { useState } from "react";

interface SubmitMessageProps {
  color: string;
  message: string;
  closeCallback: any;
}

const SubmitMessage = ({
  color,
  message,
  closeCallback,
}: SubmitMessageProps) => {
  return (
    <div
      className={`w-full bg-${color} flex flex-row justify-between p-3 mt-4 rounded-xl`}
    >
      <p className="text-white self-center">{message}</p>
      <FontAwesomeIcon
        icon={faTimesCircle}
        onClick={closeCallback}
        className="self-center text-xl"
      />
    </div>
  );
};

const SuccessMessage = ({ closeCallback }: { closeCallback: any }) => (
  <SubmitMessage
    color="green-500"
    message="Response recorded successfully! I will get back to you soon!"
    closeCallback={closeCallback}
  />
);

const ErrorMessage = ({
  message,
  closeCallback,
}: {
  message: string;
  closeCallback: any;
}) => (
  <SubmitMessage
    color="red-500"
    message={message}
    closeCallback={closeCallback}
  />
);

export const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const clearForm = () => {
    setName("");
    setEmail("");
    setDescription("");
    setSubmitSuccess(false);
    setSubmitError(false);
  };

  const emailIsValid = (email: string) => {
    return email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const submitForm = async () => {
    if (name === "") {
      setSubmitError(true);
      setErrorMessage("Please enter a name in order to submit.");
      return;
    } else if (!emailIsValid(email)) {
      setSubmitError(true);
      setErrorMessage("Please enter a valid email.");
      return;
    } else if (description === "") {
      setSubmitError(true);
      setErrorMessage("Please enter a valid description.");
      return;
    }

    const res = await fetch("/api/sendEmail", {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        description,
      }),
    });

    const resJson = await res.json();
    if (resJson.success) {
      setSubmitSuccess(true);
      setSubmitError(false);
    } else {
      setSubmitError(true);
      setErrorMessage("Unable to record response. Please try again later.");
      setSubmitSuccess(false);
    }
  };

  return (
    <div>
      <Input
        type="text"
        label="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        className="rounded-xl p-[0.1rem] bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 mb-4"
      />
      <Input
        type="email"
        label="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        className="rounded-xl p-[0.1rem] bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 mb-4"
      />
      <Textarea
        label="Description"
        placeholder="What would you like to discuss?"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        className="rounded-xl p-[0.1rem] bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 mb-4"
      />
      <div className="flex flex-row gap-3">
        <Button
          className="bg-blue-600 flex-1"
          onPress={() => {
            setSubmitError(false);
            setSubmitSuccess(false);
            submitForm();
          }}
        >
          <p className="font-bold">Submit</p>
        </Button>
        <Button className="bg-transparent flex-1" onPress={clearForm}>
          <p className="font-bold">Clear</p>
        </Button>
      </div>
      {submitSuccess && (
        <SuccessMessage closeCallback={() => setSubmitSuccess(false)} />
      )}
      {submitError && (
        <ErrorMessage
          message={errorMessage}
          closeCallback={() => setSubmitError(false)}
        />
      )}
    </div>
  );
};
