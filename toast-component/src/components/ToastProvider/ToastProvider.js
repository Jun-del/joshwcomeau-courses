import React from "react";
import UseKeyDown from "../../Hooks/UseKeyDown";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([
    {
      id: crypto.randomUUID(),
      message: "Oh no!",
      variant: "error",
    },
    {
      id: crypto.randomUUID(),
      message: "Logged in",
      variant: "success",
    },
  ]);

  function createToast(message, variant) {
    const nextToasts = [
      ...toasts,
      {
        id: crypto.randomUUID(),
        message,
        variant,
      },
    ];

    setToasts(nextToasts);
  }

  function handleDismiss(id) {
    const nextToasts = toasts.filter((toast) => {
      return toast.id !== id;
    });

    setToasts(nextToasts);
  }

  const handleEscape = React.useCallback(() => {
    setToasts([]);
  }, []);

  UseKeyDown("Escape", handleEscape);

  return (
    <ToastContext.Provider value={{ toasts, createToast, handleDismiss }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
