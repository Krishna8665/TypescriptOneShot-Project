import Navbar from "@/components/Navbar";
import Notecard from "./components/NoteCard";

export default async function Home() {
  const response = await fetch(`${process.env.BACKEND_URL}/notes`)
  if(!response.ok){
    throw new Error('Error occured while fetching')
  }
  return(

    <Notecard />
  )
}