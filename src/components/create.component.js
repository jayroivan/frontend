import React, { Component } from 'react';
import axios from 'axios';

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
    axios.post('http://localhost:8080/user/create', obj)
        .then(res => console.log(res.data));
    
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
        <div style={{ marginTop: 10 }} className="col-md-6 mx-auto">
            <h3 align="center">Add New User</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Name:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.name}
                      onChange={this.onChangeName}
                      />
                </div>
                <div className="form-group">
                    <label>Last Name: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.last_name}
                      onChange={this.onChangeLast}
                      />
                </div>
                <div className="form-group">
                    <label>Direction: </label>
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
                    <label>Password: </label>
                    <input type="password" 
                      className="form-control"
                      value={this.state.password}
                      onChange={this.onChangePassword}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" 
                      value="Register User" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}