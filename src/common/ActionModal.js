import React from 'react';
import {Button, Modal} from 'react-bootstrap';
// import './styles/timeline.scss';

export const ActionModal = ({showFlag, onClose, onOk, okButtonLabel, title, children}) => {
    return (
      <Modal show={showFlag} onHide={onClose}>
        {title && (
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
)}
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={onOk}>
            {okButtonLabel || 'Ok'}
          </Button>
        </Modal.Footer>
      </Modal>
    );
}
