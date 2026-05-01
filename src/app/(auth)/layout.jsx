import Navbar from "@/component/shared/Navbar";

export default function layout({children}) {
  return (
    <div>
        <Navbar></Navbar>
        {children}
    </div>
  )
}
