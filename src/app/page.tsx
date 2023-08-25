import Navbar from "@/components/Navbar"
import { prisma } from "@/lib/db"

export default function Home() {
  return (
    <div>
    <Navbar />
    
      <h1 className="text-red-600">Hello worlds</h1>
      </div>
      
  )
}
