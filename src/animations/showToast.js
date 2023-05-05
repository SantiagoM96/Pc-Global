import { toast } from "react-hot-toast";

export const showToast = (type, message, duration = 2500) => {
    const toastType = type === 'success' ? toast.success : toast.error;
    toastType(message, {
        position:  'bottom-right',
        duration,
        className: 'toastStyle'
    })
}