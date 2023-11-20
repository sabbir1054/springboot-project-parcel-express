import Swal from "sweetalert2";

export const notification = (title, desc, icon) => {
  Swal.fire({
    title: title,
    text: desc,
    icon: icon,
    showConfirmButton: false,
    timer: 1500,
  });
};
