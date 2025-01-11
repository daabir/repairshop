import { redirect } from "next/navigation"
// export const metadata = {
//     title: "Home",
// }

export default function Home(){
    // return <h2>Home</h2>
    redirect("/tickets")
}