import React from "react";
import { useSelector } from "react-redux";
import TestModal from "../../../features/sandbox/TestModal";
import LoginForm from "../../../features/auth/LoginForm";
// import RegisterForm from "../../../features/auth/RegisterForm";

// allows to manage specific modals to display on page
export default function ModalManager() {
  // these are the modal types that will be looked up
  const modalLookup = {
    TestModal,
    LoginForm,
    // RegisterForm,
  };

  const currentModal = useSelector((state) => state.modals);
  let renderedModal;
  if (currentModal) {
    const { modalType, modalProps } = currentModal;
    const ModalComponent = modalLookup[modalType];
    renderedModal = <ModalComponent {...modalProps} />;
  }

  return <span>{renderedModal}</span>;
}
