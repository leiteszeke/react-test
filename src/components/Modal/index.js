// Dependencies
import React from "react";
import { createPortal } from "react-dom";
// Styled
import { Wrapper, Overlay } from "./styles";

const Modal = ({ children, container = "body" }) => {
  return createPortal(
    <>
      <Wrapper>{children}</Wrapper>
      <Overlay />
    </>,
    document.querySelector(container) || document.querySelector("body")
  );
};

export default Modal;
