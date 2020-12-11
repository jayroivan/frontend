import React, { Component } from "react";
import Mymodal from './modal.component';
import axios from 'axios';
import TableRow from './TableRow.Trans';
import TableRow2 from './TableRow.Trans2';
import AuthService from "../services/auth.service";
//import Alert from 'react-bootstrap/Alert' Alerta!!! //<Alert variant="danger">Peligroo</Alert> Alerta!!
//import { Button } from 'react-bootstrap'


export default class Dashboard extends Component {
    constructor(props) {
        super(props);
          this.state = {trans: [],
          currentUser: AuthService.getCurrentUser(),
          };
      }

      componentDidMount(){
        axios.get('https://saturno2020.herokuapp.com/trans/all/')
          .then(response => {
            this.setState({ trans: response.data });
          })
          .catch(function (error) {
            console.log(error);
          })
      }
      tabRow(){
        const currentUser = this.state.currentUser
        return this.state.trans.map(function(object, i){
          if ((object.cuenta === currentUser.account_id) || 
              (object.tipo === "Pago" && object.correo === currentUser.email) || 
              (object.estado === "Completado" && object.correo === currentUser.email)) {
            return <TableRow obj={object} key={i} />;
          }
          return null
        });
      }
      tabRow2(){
        const currentUser = this.state.currentUser
        return this.state.trans.map(function(object, i){
          if (object.correo === currentUser.email && object.cuenta !== currentUser.account_id && object.tipo !== "Pago" && object.estado === "Pendiente") {
            return <TableRow2 obj={object} key={i} />;
          }
          return null
        });
      };
render(){
        return (
            <div className="col-md-12 p-3">
                <div className="col-md-3 float-left">
                    <strong></strong>
                    <div className="p-3">
                    <img
                      src={require('../img/saturno.jpg')}
                      alt="profile-img"
                      className="profile-img-card"
                      width="80%"
                    />
                    </div>
                    <div className="mx-auto p-3">
                    <strong>Acciones:</strong>
                    <br/>
                      <Mymodal/>
                    </div>
                </div>
                <div className="row col-md-9">
                  <strong>Transacciones:</strong>
                    <div className="col-sm-12">
                      <strong>Realizadas:</strong>
                      <div>
                      <table className="table table-striped" style={{ marginTop: 20 }}>
                        <thead>
                          <tr>
                            <th>Emisor</th>
                            <th>Receptor</th>
                            <th>Tipo</th>
                            <th>Estado</th>
                            <th>Correo</th>
                            <th>Monto</th>
                          </tr>
                        </thead>
                        <tbody>
                          { this.tabRow() }
                        </tbody>
                      </table>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <strong>En proceso:</strong>
                      <div>
                      <table className="table table-striped" style={{ marginTop: 20 }}>
                        <thead>
                          <tr>
                            <th>Emisor</th>
                            <th>Receptor</th>
                            <th>Tipo</th>
                            <th>Estado</th>
                            <th>Correo</th>
                            <th>Monto</th>
                            <th colSpan="1">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          { this.tabRow2() }
                        </tbody>
                      </table>
                      </div>
                    </div>
                </div>
            </div>
        )
    }
}