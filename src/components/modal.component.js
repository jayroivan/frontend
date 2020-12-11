import React from 'react';
import { Button, Form } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import axios from 'axios';
import AuthService from "../services/auth.service";

function MyVerticallyCenteredModal(props) {
    const currentUser =  AuthService.getCurrentUser()
    const obj = {
        tipo: "",
        estado:"",
        correo: "",
        monto: "",
        receptor: "",
        emisor: ""
    }
    function transaccion() {
        axios.get('https://saturno2020.herokuapp.com/user/one/?correo=' + obj.correo ).then(res => {
          console.log(res)
          if(res === null){
            alert("Error")
          }
          if(res !== null) {
            if(obj.tipo === "Pago"){
              obj.estado = "Completado"
            }
            if(obj.tipo === "Cobro"){
                obj.estado = "Pendiente"
            }
            obj.receptor = res.data.apellido;
            obj.emisor = currentUser.last;
            axios.post('https://saturno2020.herokuapp.com/trans/create/'+ currentUser.id, obj)
                .then(res => {
                  alert("Transaccion Completada");
                  window.location.reload(false)
                })
                .catch(err => console.log(err))
            }}).catch(err => {
              alert("Correo Invalido!");
              
            })
          
    }
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Transacciones
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
                <Form.Group>
                    <Form.Label>Seleccione el Tipo: </Form.Label>
                    <Form.Control as="select" onChange={(evt) => { obj.tipo = evt.target.value; }}>
                    <option></option>
                    <option>Pago</option>
                    <option>Cobro</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                     <Form.Label>Correo: </Form.Label>
                     <Form.Control type="email" onChange={(evt) => { obj.correo = evt.target.value; }} placeholder="Ingrese Correo" />
                </Form.Group>
                <Form.Group>
                     <Form.Label>Monto: </Form.Label>
                     <Form.Control type="text" onChange={(evt) => { obj.monto = evt.target.value; }} placeholder="Ingrese Monto" />
                </Form.Group>
                <Button onClick={ transaccion } variant="primary">
                    Enviar
                </Button>
            </Form>
        </Modal.Body>
      </Modal>
    );
  }
  
  function Mymodal() {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <Button onClick={() => setModalShow(true)}>
          Pago o Cobro
        </Button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }

  export default Mymodal;