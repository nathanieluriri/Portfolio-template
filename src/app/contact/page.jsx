import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Padding } from "@/components/padding" 
export default function Page(){
    return (
        <>
    <div className="flex flex-col w-4/5 justify-center justify-self-center gap-2" >
    <h1 className=" transition-all duration-100 bg-zinc-100 text-black text-xl font-medium me-2 px-1.5 py-1.5 rounded dark:bg-zinc-900 dark:text-white w-fit">
       Do you like coffee?
       </h1>
       <h4 className="transition-all duration-100 text-sm">
       Personally, I prefer tea (or soft serve), but I would love to connect with you regardless of your beverage preferences. 
       </h4>
       <Padding/>
    </div>
       <div className="flex flex-col w-4/5 justify-center justify-self-center gap-11" >
     
       <NameField/>
        <EmailField/>
        <SubjectField/>
        <Message/>
        <SubmitButton/>
        <Padding/>
       </div>
        </>
    )
}

export function SubmitButton() {
  return <Button className="max-w-[250px]" variant="outline">Submit Message</Button>
}

export function EmailField() {
  return <Input type="email" placeholder="Email" />
}
export function SubjectField() {
    return <Input name="Subject" type="Subject" placeholder="Subject" />
  }

export function NameField() {
    return (
        <div className="flex w-full max-w-lg items-center space-x-2">
            <Input name="FirstName" type="FirstName" placeholder="First Name" />
            <Input name="LastName" type="LastName" placeholder="Last Name" />
        </div>
    )
  }
  
  


  export function Message() {
    return (<div className=" ">
        <textarea name="Message" placeholder="Type your message here..." className=" disabled:cursor-not-allowed disabled:opacity-50  w-full min-h-[100px] bg-transparent rounded-md border border-input px-3 py-1 text-base shadow-sm " />
    </div>)
  }
  
  