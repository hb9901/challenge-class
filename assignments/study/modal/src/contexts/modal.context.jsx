import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export function ModalProvider({ children }) {
  const [modalElement, setModalElement] = useState(null);
  const value = {
    open: (element) => {
      setModalElement(element);
    },
    // open: ({title, content}) => {
    //   const element = <Modal title={title} content={content}/>
    //   setModalElement(element);
    // },
    // open: (options) => {
    //   setModalElement(options);
    // },
    close: () => {
      setModalElement(null);
    },
  };
  return (
    <ModalContext.Provider value={value}>
      {children}
      {modalElement}
    </ModalContext.Provider>
    // <ModalContext.Provider value={value}>
    //   {children}
    //   {modalOptions && (
    //     modalElement
    //   )}
    // </ModalContext.Provider>
  );
}
