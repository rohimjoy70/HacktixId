import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function LayoutPage() {
  return (
    <>
      <div className="container">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
}
