import React from "react";
import {  CloseButton, ModalBody } from "react-bootstrap";
import Modal from "react-modal";

const ModalLayout = ({ children,isModalOpen, closeModal }) => {
  const customStyles = {
    content: {
      top: '40%',
      left: '50%',
      right: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: 'auto'
    },
  };
  return (
    <>
     <Modal 
      isOpen={isModalOpen} 
      ariaHideApp={false}  
      style={customStyles}
     >
        <div style={{ textAlign: "right", position: "relative" }}>
            <CloseButton
            aria-label="Fechar"
            onClick={() => closeModal()}
            />
        </div>

        <ModalBody>
        {children}
        </ModalBody>
      </Modal>
    </>
  );
};

export default ModalLayout;