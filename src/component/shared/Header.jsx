
import logo from "@/assets/logo.png"
import { format } from "date-fns";
import Merque from "./Merque";
export default function Header() {
  return (
    <div>
      <div className="text-center p-10 space-y-3">
        <h1 className="font-bold text-2xl">Global <span className="text-purple-600 text-lg">Times News</span></h1>
      <h2 className="text-gray-500">Journalism Without Fear or Favour</h2>
      <p className="text-gray-500 font-bold ">
{format(new Date(), "EEEE, MMMM dd, yyyy")}
      </p>
      
      </div>
      <Merque></Merque>
    </div>
  )
}
