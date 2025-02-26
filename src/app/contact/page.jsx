"use client";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Padding } from "@/components/padding";
import { Skeleton } from "@/components/ui/skeleton";
import { useState,useEffect } from "react";
export default function Page() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    // event.preventDefault();
    // Log the form field values to the console
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Subject:", subject);
    console.log("Message:", message);
    setFirstName('')
    setLastName('')
    setEmail('')
    setSubject('')
    setMessage('')
  };
  return (
    <>
      <Padding />
      <Padding />
      <div className="md:w-full md:flex md:flex-row-reverse justify-center justify-self-center ">
        <div className="w-screen p-4 sm:hidden"><ContactImage/>
        </div>
        <ContactImage className="hidden sm:block" />
        <Padding/>
        <div className=" md:flex flex-col md:w-3/6 pl-5 ">
          <div
            
            className="flex flex-col md:w-full justify-center justify-self-center  self-center  items-center"
          >
            <div className="flex flex-col w-4/5 justify-center justify-self-center gap-2">
              <h1 className=" transition-all duration-100 bg-zinc-100 text-black text-xl font-medium me-2 px-1.5 py-1.5 rounded dark:bg-zinc-900 dark:text-white w-fit">
                Do you like coffee?
              </h1>
              <h4 className="transition-all duration-100 text-sm max-w-[550px]">
                Personally, I prefer tea (or soft serve), but I would love to
                connect with you regardless of your beverage preferences.
              </h4>
              <Padding />
            </div>
            <div className="flex flex-col w-4/5 justify-center justify-self-center gap-11">
              <NameField firstName={firstName} lastName={lastName} setFirstName={setFirstName} setLastName={setLastName} />
              <EmailField email={email} setEmail={setEmail} />
              <SubjectField subject={subject} setSubject={setSubject} />
              <Message message={message} setMessage={setMessage} />
              <SubmitButton onClick={handleSubmit} />
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

export function SubmitButton( {onClick}) {
  return (
    <Button onClick={(e)=>onClick(e)} className="max-w-[250px]" variant="outline">
      Submit Message
    </Button>
  );
}

export function EmailField({ email, setEmail }) {
  return <Input type="email" placeholder="Email" className="max-w-[550px]"       value={email}
  onChange={(e) => setEmail(e.target.value)} />;
}
export function SubjectField({ subject, setSubject }) {
  return (
    <Input
      name="Subject"
      type="Subject"
      value={subject}
      onChange={(e) => setSubject(e.target.value)}
      placeholder="Subject"
      className="max-w-[550px]"
    />
  );
}

export function NameField({ firstName, setFirstName, lastName, setLastName }) {
  return (
    <div className="flex w-full max-w-lg items-center space-x-2">
      <Input name="FirstName" type="FirstName" placeholder="First Name"  value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <Input name="LastName" type="LastName" placeholder="Last Name"  value={lastName} onChange={(e) => setLastName(e.target.value)} />
    </div>
  );
}

export function Message({ message, setMessage }) {
  return (
    <div className=" ">
      <textarea
        name="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)} 
        placeholder="Type your message here..."
        className=" disabled:cursor-not-allowed disabled:opacity-50  w-full max-w-[550px] min-h-[100px] bg-transparent rounded-md border border-input px-3 py-1 text-base shadow-sm "
      />
    </div>
  );
}






export function ContactImage({className}) {
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
