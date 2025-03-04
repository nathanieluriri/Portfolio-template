"use client";
import Image from "next/image";
import { Loader2 } from "lucide-react";
import { useTheme } from "next-themes";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Padding } from "@/components/padding";
import { Skeleton } from "@/components/ui/skeleton";
import { useState, useEffect } from "react";
import { CircleX } from "lucide-react";

import { CircleCheckBig } from "lucide-react";
const apiUrlForContactForm = process.env.NEXT_PUBLIC_apiUrlForContactForm;
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function isValidEmail(email) {
  // Regular expression for validating an email
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Test the email against the pattern
  return emailPattern.test(email);
}

async function sendContact(
  firstName,
  lastName,
  subject,
  message,
  emailAddress
) {
  const url = apiUrlForContactForm;

  const data = {
    firstName: firstName,
    lastName: lastName,
    subject: subject,
    message: message,
    emailAddress: emailAddress,
  };

  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      console.log(`Error: ${response.statusText}`);
      return false;
    }

    const result = await response.json();
    console.log("Contact created:", result);
    return result;
  } catch (error) {
    console.error("Error creating contact:", error);
  }
}

async function sendMsg(
  firstName,
  lastName,
  message,
  email,
  subject,
  setFirstName,
  setLastName,
  setEmail,
  setSubject,
  setMessage
) {
  var res = await sendContact(firstName, lastName, subject, message, email);
  console.log(res);
  setLoading("disabled")
  if (res == false) {
    return false;
  } else {
    setFirstName("");
    setLastName("");
    setEmail("");
    setSubject("");
    setMessage("");
  }
}

export default function Page() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setLoading] = useState("disabled");

  const handleSubmit = async (event) => {
    // event.preventDefault();
    // Log the form field values to the console
    setLoading("loading");

    var res = await sendMsg(
      firstName,
      lastName,
      message,
      email,
      subject,
      setFirstName,
      setLastName,
      setEmail,
      setSubject,
      setMessage
    );
    if (res !== false) {
      setLoading("sent");
      await sleep(1000);
      setLoading("notloading");
    } else {
      setLoading("notsent");
      await sleep(2000);
      setLoading("notloading");
    }
  };
  const check = () => {
    setLoading("disabled");
    if (
      firstName.length > 1 &&
      isValidEmail(email) &&
      message.length > 1 &&
      lastName.length > 1 &&
      subject.length > 1
    ) {
      setLoading("notloading");
    }
  };
  return (
    <>
      <Padding />
      <Padding />
      <div className="md:w-full md:flex md:flex-row-reverse justify-center justify-self-center ">
        <div className="w-screen p-4 sm:hidden">
          <ContactImage />
        </div>
        <ContactImage className="hidden sm:block" />
        <Padding />
        <div className=" md:flex flex-col md:w-3/6 pl-5 ">
          <div className="flex flex-col md:w-full justify-center justify-self-center  self-center  items-center">
            <div className="flex flex-col w-4/5 justify-center justify-self-center gap-2 sm:text-center md:text-left sm:items-center md:items-start">
              <h1 className=" transition-all duration-100 bg-zinc-100 text-black text-xl font-medium me-2 px-1.5 py-1.5 rounded dark:bg-zinc-900 dark:text-white w-fit">
                Do you like coffee?
              </h1>
              <h4 className="transition-all duration-100 text-sm max-w-[550px]">
                Personally, I prefer tea (or soft serve), but I would love to
                connect with you regardless of your beverage preferences.
              </h4>
              <Padding />
            </div>
            <div className="flex flex-col w-4/5 justify-center justify-self-center gap-11 sm:text-center md:text-left sm:items-center md:items-start">
              <NameField
                firstName={firstName}
                lastName={lastName}
                setFirstName={setFirstName}
                setLastName={setLastName}
                check={check}
              />
              <EmailField email={email} setEmail={setEmail} check={check} />
              <SubjectField
                subject={subject}
                setSubject={setSubject}
                check={check}
              />
              <Message
                message={message}
                setMessage={setMessage}
                check={check}
              />
              <SubmitButton
                onClick={handleSubmit}
                isLoading={isLoading}
                setLoading={setLoading}
              />
              <Padding />
            </div>
          </div>
        </div>
      </div>
      <Padding />
      <Padding />
      <Padding />
      <Padding />
    </>
  );
}

export function SubmitButton({ onClick, isLoading }) {
  if (isLoading === "loading") {
    return (
      <Button disabled className="max-w-[250px]" variant="outline">
        <Loader2 className="animate-spin" />
        Please wait
      </Button>
    );
  }
  if (isLoading === "disabled") {
    return (
      <Button disabled className="max-w-[250px]" variant="outline">
        Please fill the form correctly
      </Button>
    );
  } else if (isLoading == "notloading") {
    return (
      <Button
        onClick={(e) => onClick(e)}
        className="max-w-[250px]"
        variant="outline"
      >
        Submit Message
      </Button>
    );
  } else if (isLoading == "sent") {
    return (
      <Button>
        <CircleCheckBig /> Sent Message Successfully
      </Button>
    );
  } else if (isLoading == "notsent") {
    return (
      <Button variant="destructive">
        <CircleX />
        Failed To Send Message
      </Button>
    );
  }
}

export function EmailField({ email, setEmail, check }) {
  return (
    <Input
      type="email"
      placeholder="Email"
      className="max-w-[550px]"
      value={email}
      onChange={(e) => {
        setEmail(e.target.value);
        check();
      }}
    />
  );
}
export function SubjectField({ subject, setSubject, check }) {
  return (
    <Input
      name="Subject"
      type="Subject"
      value={subject}
      onChange={(e) => {
        setSubject(e.target.value);
        check();
      }}
      placeholder="Subject"
      className="max-w-[550px]"
    />
  );
}

export function NameField({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  check,
}) {
  return (
    <div className="flex w-full max-w-lg items-center space-x-2">
      <Input
        name="FirstName"
        type="FirstName"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => {
          setFirstName(e.target.value);
          check();
        }}
      />
      <Input
        name="LastName"
        type="LastName"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => {
          setLastName(e.target.value);
          check();
        }}
      />
    </div>
  );
}

export function Message({ message, setMessage, check }) {
  return (
    <div className="w-full ">
      <textarea
        name="Message"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
          check();
        }}
        placeholder="Type your message here..."
        className=" disabled:cursor-not-allowed disabled:opacity-50  w-full max-w-[550px] min-h-[100px] bg-transparent rounded-md border border-input px-3 py-1 text-base shadow-sm "
      />
    </div>
  );
}

export function ContactImage({ className }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const { theme } = useTheme(); // Get the current theme (light or dark)
  const [imageSrc, setImageSrc] = useState("/contact_form_image.jpg");
  useEffect(() => {
    // Set image source based on theme
    if (theme === "dark") {
      setImageSrc("/contact_form_image.jpg"); // Dark theme image
    } else {
      setImageSrc("/contact_form_image_light.jpg"); // Light theme image
    }
  }, [theme]); // Update the image whenever the theme changes
  return (
    <>
      {!isLoaded && (
        <Skeleton className="md:w-3/6 transition-all duration-1000 dark:bg-zinc-900  md:h-full rounded  md:mr-11" />
      )}

      <Image
        src={imageSrc}
        alt="Contact form Image"
        width={500}
        height={500}
        className={`w-full md:w-3/6 transition-all duration-1000 dark:bg-zinc-900  md:h-full rounded  md:mr-11 ${className} ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setIsLoaded(true)}
      />
    </>
  );
}
