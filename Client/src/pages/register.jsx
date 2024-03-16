import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Error, Success } from "../helpers/Alerts";

export default function RegisterPage() {
   const [inputUser, setInputUser] = useState({
      email: "",
      password: "",
   });
   const navigate = useNavigate();

   const handlerInputUser = (event) => {
      const { name, value } = event.target;
      setInputUser({ ...inputUser, [name]: value });
   };

   const handlerSubmit = async (event) => {
      event.preventDefault();
      try {
         const { data } = await axios({
            method: "post",
            url: "http://localhost:3000/register",
            data: inputUser,
         });
         Success("Your account success to register");
         navigate("/login");
      } catch (error) {
         console.log(error);
         const message = error.response.data.message;
         Error(message);
      }
   };

   return (
      <div className="container mx-auto h-screen flex justify-center items-center">
         <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
            <img src="https://i.imgur.com/NgNi6dl.png" alt="Hacktiv" className="mx-auto h-20 w-auto mb-8" />
            <h2 className="text-2xl font-bold text-center mb-4">
               Create your account <span className="badge bg-secondary">HacktixId</span>
            </h2>
            <form onSubmit={handlerSubmit}>
               <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                     Email address
                  </label>
                  <input
                     name="email"
                     onChange={handlerInputUser}
                     type="email"
                     className="form-control appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                     aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" className="form-text">
                     We will never share your email with anyone else.
                  </div>
               </div>
               <div className="mb-6">
                  <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                     Password
                  </label>
                  <input name="password" onChange={handlerInputUser} type="password" className="form-control appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
               </div>
               <button type="submit" className="btn btn-primary w-full">
                  Register
               </button>
            </form>
            <p className="text-center mt-4">
               Already have an account?{" "}
               <Link to={"/login"} className="font-semibold text-blue-600">
                  Login Now
               </Link>
            </p>
         </div>
      </div>
   );
}
