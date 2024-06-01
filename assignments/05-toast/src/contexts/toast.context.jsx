import { createContext, useContext, useState } from "react";
import Toast from "../components/Toast/Toast";
import Toasts from "../components/Toasts";

const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  const value = {
    open: (options) => {
      const { id, title, content, delay } = options;
      setToasts((prevToasts) => [
        ...prevToasts,
        <Toast
          key={id}
          id={id}
          title={title}
          content={content}
          delay={delay}
        />,
      ]);
    },

    close: (id) => {
      setToasts((prevToasts) => {
        return prevToasts.filter((toast) => {
          return id !== toast.props.id;
        });
      });
    },
  };
  return (
    <ToastContext.Provider value={value}>
      {children}
      <Toasts>{toasts.length > 0 && toasts.map((toast) => toast)}</Toasts>
    </ToastContext.Provider>
  );
}
