import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Error, Success } from "../helpers/Alerts";

export default function LoginPage() {
   const navigate = useNavigate();
   const [inputUser, setInputUser] = useState({
      email: "",
      password: "",
   });

   const handlerInputUser = (event) => {
      const { name, value } = event.target;
      setInputUser({ ...inputUser, [name]: value });
   };

   const handlerSubmitLogin = async (event) => {
      event.preventDefault();
      try {
         const { data } = await axios({
            method: "post",
            url: "https://hacktixid.healtjoy.online/login",
            data: inputUser,
         });
         Success("Success login");
         localStorage.setItem("access_token", data.access_token);
         navigate("/"); // redirect to Home Page
      } catch (error) {
         console.log(error);
         const message = error.response.data.message;
         Error(message);
      }
   };

   return (
      <div className="flex flex-col items-center justify-center h-screen">
         <img src="https://i.imgur.com/NgNi6dl.png" alt="Hacktiv" className="h-20 w-auto mb-8" />
         <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-md">
            <h2 className="text-2xl font-bold text-center mb-4">
               Login to your Account <span className="badge bg-secondary">HacktixId</span>
            </h2>
            <form onSubmit={handlerSubmitLogin}>
               <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                     Email
                  </label>
                  <input
                     id="email"
                     name="email"
                     type="email"
                     onChange={handlerInputUser}
                     className="form-control appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                     placeholder="Email"
                  />
               </div>
               <div className="mb-6">
                  <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                     Password
                  </label>
                  <input
                     id="password"
                     name="password"
                     type="password"
                     onChange={handlerInputUser}
                     className="form-control appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                     placeholder="Password"
                  />
               </div>
               <button type="submit" className="btn btn-primary w-full">
                  Login
               </button>
            </form>
            <p className="text-center mt-4">
               Dont have an account?{" "}
               <Link to={"/register"} className="font-semibold text-blue-600">
                  Create an account
               </Link>
            </p>
         </div>
      </div>
   );
}
