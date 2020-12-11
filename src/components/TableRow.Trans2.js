import React, { Component } from 'react';
import { Button } from 'react-bootstrap'
import axios from 'axios'
import Mensaje from './modal'

class TableRowTrans2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Modal: {show: false, message: ""}
    };
    this.transacion = this.transaccion.bind(this)
  }
  transaccion(obj) {
      obj.estado = "Completado"
      axios.put('https://saturno2020.herokuapp.com/trans/update/'+ obj.id, obj)
          .then(data => {
            this.setState({Modal:{show: true, message:"Completada"}})
            //window.location.reload(false);
          })
          .catch(err => console.log(err))
    }
  render() {
    

    return (
        <>
        <Mensaje show={this.state.Modal.show}/>
        <tr>
          <td>
            {this.props.obj.emisor}
          </td>
          <td>
            {this.props.obj.receptor}
          </td>
          <td>
            {this.props.obj.tipo}
          </td>
          <td>
            {this.props.obj.estado}
          </td>
          <td>
            {this.props.obj.correo}
          </td>
          <td>
            {this.props.obj.monto}
          </td>
          <td>
            <Button onClick={ () => this.transaccion(this.props.obj) } variant="primary">
              Pagar
            </Button>
          </td>
        </tr>
        </>
    );
  }
}

export default TableRowTrans2;