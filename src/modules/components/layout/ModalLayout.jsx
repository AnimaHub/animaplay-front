import React from "react";
import { CloseButton, ModalBody } from "react-bootstrap";
import Modal from "react-modal";

const ModalLayout = ({children, isModalOpen, closeModal, height, width}) => {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      height: height,
      width: width,
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      border: 'none',
      boxShadow: '4px 1px 21px -1px rgb(0 0 0 / 33%)',
      maxWidth: 'calc(100% - 20px)',
      margin: '0 auto',
      padding: '20px'
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