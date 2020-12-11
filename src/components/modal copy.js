import React from 'react';
import { Button } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'

function Mensaje(props) {
  console.log(props.show)
    const [smShow, setSmShow] = React.useState(props.show);
    //setSmShow(props.show)
    return (
      <>
        <Modal
          size="sm"
          show={smShow}
          onHide={() => setSmShow(false)}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
              Transaccion:
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>Funciona</Modal.Body>
          <Modal.Footer><Button onClick={() => setSmShow(false)}>Aceptar</Button></Modal.Footer>
        </Modal>
      </>
    );
  }
  
export default Mensaje