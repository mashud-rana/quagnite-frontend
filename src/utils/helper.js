import {toast} from "react-toastify";
import {LoadingOutlined} from "@ant-design/icons";
import Swal from 'sweetalert2'
import {format} from "date-fns";

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


export const confirmAction = (
    onConfirm = null,
    id = null,
    title = "Are you sure?",
    text = "This action cannot be undone!",
    confirmButtonText = "Yes, delete it!",
) => {
    Swal.fire({
        title,
        text,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText
    }).then((result) => {
        if (result.isConfirmed && typeof onConfirm === "function") {
            if (id !== null) {
                onConfirm(id);
            } else {
                onConfirm();
            }
        }
    });
};

export const getLastTwoDigits = (num) => {
  // Ensure the number is positive and an integer
  num = Math.abs(parseInt(num, 10));
  
  if (num < 100) {
    // If it's already 2 digits, return it as is (with leading 0 if needed)
    return num.toString().padStart(2, '0');
  } else {
    // Otherwise, return the last two digits
    return (num % 100).toString().padStart(2, '0');
  }
}

// appendInFormData.js
export const appendInFormData = (data) => {
  const formData = new FormData();
  Object.keys(data).forEach((key) => {
    if(data[key] !== undefined && data[key] !== null) // Skip undefined or null values
    {

      formData.append(key, data[key]);
    }
  });
  return formData;
};

export const truncateHtml = (html, limit = 250) => {
    // Remove HTML tags to count plain text characters
    const plainText = html.replace(/<[^>]+>/g, "");
    if (plainText.length <= limit) return html;

    // Slice text safely
    const truncatedText = plainText.slice(0, limit) + "...";
    return truncatedText;
  };

export const formatDate = (datetime, getFormat = 'd M Y') => {
    return format(new Date(datetime), getFormat);
};
