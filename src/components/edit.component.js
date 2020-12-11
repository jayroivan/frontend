import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
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

  componentDidMount() {
      axios.get('https://saturno2020.herokuapp.com/user/one/'+this.props.match.params.id)
          .then(response => {
              this.setState(response.data);
          })
          .catch(function (error) {
              console.log(error);
          })
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
      nombre: this.state.name,
      apellido: this.state.last_name,
      direccion: this.state.direction,
      correo: this.state.email,
      contra: this.state.password,
    };
    axios.put('https://saturno2020.herokuapp.com/user/update/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));
    
    this.props.history.push('/profile');
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }} className="col-md-6 mx-auto">
            <h3 align="center">Actualizar Usuario</h3>
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
                      value={this.state.last_name}
                      onChange={this.onChangeLast}
                      />
                </div>
                <div className="form-group">
                    <label>Direccion: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.direction}
                      onChange={this.onChangeDirection}
                      />
                </div>
                <div className="form-group">
                    <label>Email: </label>
                    <input type="email" 
                      className="form-control"
                      value={this.state.email}
                      onChange={this.onChangeEmail}
                      />
                </div>
                <div className="form-group">
                    <label>Contraseña: </label>
                    <input disabled={true} type="password" 
                      className="form-control"
                      value={this.state.password}
                      onChange={this.onChangePassword}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" 
                      value="Actualizar Usuario" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}