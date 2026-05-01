import Image from "next/image";
import logo from "@/assets/logo.png"
export default function Header() {
  return (
    <div>
      <div>
         <Image 
        src={logo}
        alt=""
        width={300}
        height={200}
      />
      <h2>Journalism Without Fear or Favour</h2>
      </div>
    </div>
  )
}
