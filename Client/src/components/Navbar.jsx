import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
   const navigate = useNavigate();

   const handlerLogout = () => {
      localStorage.clear();
      navigate("/login");
   };

   return (
      <nav className="bg-gray-800">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
               <div className="flex items-center">
                  <div className="flex-shrink-0">
                     <a href="/" className="text-white text-2xl font-semibold">HacktixId</a>
                  </div>
                  <div className="hidden md:block">
                     <div className="ml-10 flex items-baseline space-x-4">
                        <Link to={"/"} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                        <Link to={"/watchlist"} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Watchlist</Link>
                     </div>
                  </div>
               </div>
               <div className="hidden md:block">
                  <div className="ml-4 flex items-center md:ml-6">
                     <button onClick={handlerLogout} className="bg-red-500 text-white px-4 py-2 rounded-md text-sm font-medium">Logout</button>
                  </div>
               </div>
            </div>
         </div>

         <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
               <Link to={"/"} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
               <Link to={"/watchlist"} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Watchlist</Link>
            </div>
         </div>
      </nav>
   );
}
