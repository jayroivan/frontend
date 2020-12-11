import React, { Component } from 'react';
import { Button } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'

class Mensaje extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smShow: false,
    };
  }
    
render() {
  console.log(this.props.show)
  console.log(this.state.smShow)
  if(this.props.show !== this.state.smShow){
    this.setState({smShow: this.props.show})
  }
  return (
    <>
      <Modal
        size="sm"
        show={this.state.smShow}
        onHide={() => this.setState({smShow:false})}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Mensaje:
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Transaccion Exitosa!.</Modal.Body>
        <Modal.Footer><Button onClick={ () => window.location.reload(false)}>Aceptar</Button></Modal.Footer>
      </Modal>
    </>
  );
}
    
}
  
export default Mensaje