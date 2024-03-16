import Swal from "sweetalert2";

export function Success(message) {
   Swal.fire({
      title: "Good job!",
      text: message,
      icon: "success",
   });
}

export function Error(message) {
   Swal.fire({
      icon: "error",
      title: "Oops...",
      text: message,
   });
}
