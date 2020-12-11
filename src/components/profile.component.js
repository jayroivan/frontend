import React, { Component } from "react";
import { Link } from 'react-router-dom';
import AuthService from "../services/auth.service";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      currentTarjeta: null
    };
    this.getCard = this.getCard.bind(this);
  }

  componentDidMount() {
    // set user
    const currentUser =  AuthService.getCurrentUser()

    // set current card
    AuthService.getCurrentTarjeta(currentUser.account_id).then((data) => {
      this.setState({currentUser: currentUser, currentTarjeta: data})
    })
  }

  getCard () {
    const currentTarjeta = JSON.parse(this.state.currentTarjeta);
    return {
      id: currentTarjeta.id,
      name: currentTarjeta.nombre,
      Number: currentTarjeta.numero,
      Month: currentTarjeta.mes,
      Year: currentTarjeta.year,
      Code: currentTarjeta.codigo
    }
  }

  render() {

    if (!this.state.currentTarjeta || !this.state.currentUser) {
      return (
        <div className="container">
          <p>Loading ...</p>
        </div>
      )
    }

    const currentUser = this.state.currentUser
    const obj = this.getCard()

    return (
      <div className="container">
        <header className="jumbotron">
          <div className="col-md-12">
            <div className="col-md-4 float-left">
              <img
                src={require('../img/user.png')}
                alt="profile-img"
                className="profile-img-card mx-auto"
                width="60%"
              />
            </div>
            <div className="col-md-12">
              <h3 className="display-5">
                <strong>{currentUser.last}</strong> 
              </h3>
                <p className="lead">
                  <strong>Nombre de Usuario:</strong>{" "}
                  {currentUser.username}
                </p>
                <p className="lead">
                  <strong>Cuenta Numero:</strong>{" "}
                  {currentUser.account}
                </p>
                <p className="lead">
                  <strong>Direccion:</strong>{" "}
                  {currentUser.direction}
                </p>
                <p className="lead">
                  <strong>Email:</strong>{" "}
                  {currentUser.email}
                </p>
                <div className="justify-content-right">
                  <Link to={"/edit/"+currentUser.id} className="btn btn-primary float-right">Editar</Link>
                </div>
            </div>
          </div>
        </header>
        <div className="container col-md-12 mx-auto border p-5">
          <p className="text-center">
            <strong>Informacion de Tarjeta</strong>
          </p>
          <div className="col-md-8 mx-auto">
          <p className="text-center">
            <strong>Nombre: </strong>
            {obj.name}
          </p>
          <p className="text-center">
            <strong>Numero: </strong>
            {obj.Number}
          </p>
          </div>
          <div className="row col-md-6 mx-auto">
          <p className="col-sm">
            <strong>Mes: </strong>
            {obj.Month}
          </p>
          <p className="col-sm">
            <strong>Año: </strong>
            {obj.Year}
          </p>
          <p className="col-sm">
            <strong>Codigo: </strong>
            {obj.Code}
          </p>
          </div>
          <div>
            <Link to={"/editar/tarjeta/"+currentUser.account_id} className="btn btn-primary float-right">Editar</Link>
          </div>
        </div>
      </div>
    );
  }
}