import { toast } from "react-toastify";
import { LoadingOutlined } from "@ant-design/icons";
import Swal from 'sweetalert2'

export const toastSuccess = (message) => {
  toast.success(message, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

export const toastError = (message) => {
  toast.error(message, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

export const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 20,
      color: "#fff",
      marginLeft: 10,
    }}
    spin
  />
);

export const confirmDelete = (title="Are you sure?",text="You won't be able to revert this!",confirmButtonText="Yes, delete it!") => {
  return Swal.fire({
      title: title,
      text: text,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: confirmButtonText
    })
}
