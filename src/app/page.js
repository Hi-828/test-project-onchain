import {allBlogs} from "contentlayer/generated";
import Dashboard from "../components/Home/Dashboard";

export default function Home() {
  
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <Dashboard blogs={allBlogs} />
    </main>
  )
}
