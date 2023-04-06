import { toast } from "react-toastify";
const Toast = (type, message,timer=5000) => {
  if (type === "error") {
    return toast.error(message, {
      // position: "top-right",
      autoClose: timer,
      // toastId: id,
      // theme: "dark",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } else {
    return toast.success(message, {
      // position: "top-right",
      autoClose: timer,
      // toastId: id,
      // theme: "dark",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
};

export { Toast };

// import { toast } from "react-toastify";
// export function Toast(type, message) {
//   toast.error(message, {
//     // position: "top-right",
//     autoClose: 5000,
//     // toastId: id,
//     // theme: "dark",
//     hideProgressBar: false,
//     closeOnClick: true,
//     pauseOnHover: true,
//     draggable: true,
//     progress: undefined,
//   });
// }
