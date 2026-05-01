import { redirect } from "next/navigation";

const deafult_id = "01";

const Home = ()=>{
  redirect(`/mynews/${deafult_id}`)
}

export default Home
