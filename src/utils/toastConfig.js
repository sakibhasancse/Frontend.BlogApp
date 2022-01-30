import { Slide, toast } from 'react-toastify';

export function toastCall(type, toastBody, position) {
  if (type === 'info') {
    toast.info(toastBody, {
      position
    });
  } else if (type === 'success') {
    toast.success(toastBody, {
      position
    });
  } else if (type === 'warning') {
    toast.warn(toastBody, {
      position
    });
  } else if (type === 'danger') {
    toast.error(toastBody, {
      position
    });
  } else if (type === 'dark') {
    toast.dark(toastBody, {
      position
    });
  } else {
    toast(toastBody || 'Demo toast', {
      position
    });
  }
}

// toast config
export function toastConfig() {
  toast.configure({
    transition: Slide,
    autoClose: 3000,
    hideProgressBar: true,
    newestOnTop: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: true
  });
}
