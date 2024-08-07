import {
  ChevronDown
  } from "lucide-react"
  
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Link, useNavigate } from "react-router-dom"
  
function UserBox() {
  const navigate = useNavigate();
    return (
      <div className="">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
        <div className="flex items-center space-x-2 cursor-pointer">
          {/* <User className="h-6 w-6" /> */}
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <svg className="w-7 h-7 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 24H0V0h24v24z" fill="none"/>
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </div>
          <div className="flex flex-col items-start">
            <h4 className="text-white text-[0.7rem]">Rajeev patel</h4>
            <h4 className="text-white text-[0.7rem]">patelrajeev10342@gmail.com</h4>
            </div>
           <ChevronDown/>
                </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-full">
        <div className="max-w-sm mx-auto bg-hover rounded-lg overflow-hidden shadow-lg">
      <div className="p-4 flex items-center justify-between bg-hover gap-8">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 24H0V0h24v24z" fill="none"/>
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </div>
          <div className="ml-4">
            <div className="text-white font-semibold text-lg">Super Admin</div>
            <div className="text-white text-sm">anish@capitalnumbers.com</div>
          </div>
        </div>
        <button onClick={() => navigate("/login")} className="bg-gray-800 text-white px-3 py-1 rounded-lg shadow-md">Logout</button>
      </div>
      <div className="px-4 py-3 bg-white">
        <Link to="/edit-profile">
          <button className="text-hover font-semibold">Edit My Profile</button>
        </Link>
      </div>
    </div>
        </DropdownMenuContent>
      </DropdownMenu>
      </div>
    )
  }

  export default UserBox