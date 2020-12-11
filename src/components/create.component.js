import React, { Component } from 'react';
import axios from 'axios';
import AuthService from "../services/auth.service";

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeLast = this.onChangeLast.bind(this);
    this.onChangeDirection = this.onChangeDirection.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      last_name: '',
      direction:'',
      email:'',
      password:''
    }
  }
  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }
  onChangeLast(e) {
    this.setState({
      last_name: e.target.value
    })  
  }
  onChangeDirection(e) {
    this.setState({
      direction: e.target.value
    })
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      name: this.state.name,
      last_name: this.state.last_name,
      direction: this.state.direction,
      email: this.state.email,
      password: this.state.password,
    };
    var username = this.state.name
    var password = this.state.password
    axios.post('https://saturno2020.herokuapp.com/user/create', obj)
        .then(res => {
          console.log(username);
          console.log(password)
          AuthService.login(username, password).then(
            () => {
              console.log("Holaaaaa")
              this.props.history.push("/tarjeta");
              window.location.reload();
            })
          

        })


    this.setState({
      name: '',
      last_name: '',
      direction:'',
      email:'',
      password:''
    })
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }} className="col-md-4 mx-auto">
            <h3 align="center">Crear Nuevo Usuario</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Nombre de Usuario:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.name}
                      onChange={this.onChangeName}
                      />
                </div>
                <div className="form-group">
                    <label>Nombre Completo: </label>
                    <input type="text" 
                      className="form-control"
                      placeholder="Juan Antonio Perez Mejia"
                      value={this.state.last_name}
                      onChange={this.onChangeLast}
                      />
                </div>
                <div className="form-group">
                    <label>Direccion: </label>
                    <input type="text" 
                      className="form-control"
                      placeholder="Chalatenango"
                      value={this.state.direction}
                      onChange={this.onChangeDirection}
                      />
                </div>
                <div className="form-group">
                    <label>Email: </label>
                    <input type="email" 
                      className="form-control"
                      placeholder="juan@gmail.com"
                      value={this.state.email}
                      onChange={this.onChangeEmail}
                      />
                </div>
                <div className="form-group">
                    <label>Contraseña: </label>
                    <input type="password" 
                      className="form-control"
                      placeholder="********"
                      value={this.state.password}
                      onChange={this.onChangePassword}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" 
                      value="Registrar" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}