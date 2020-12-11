import React, { Component } from "react";
import AuthService from "../services/auth.service";

export default class ProfileAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentAdmin: null
    };
  }

  componentDidMount() {
    // set user
    const currentAdmin =  AuthService.getCurrentAdmin()
    this.setState({ currentAdmin: currentAdmin})
    console.log(currentAdmin)
  }
  

  render() {

    if (!this.state.currentAdmin) {
      return (
        <div className="container">
          <p>Loading ...</p>
        </div>
      )
    }

    const currentAdmin = this.state.currentAdmin

    return (
      <div className="container">
        <header className="jumbotron">
          <div className="col-md-12">
            <div className="col-md-4 float-left">
              <img
                src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                alt="profile-img"
                className="profile-img-card mx-auto"
                width="60%"
              />
            </div>
            <div className="col-md-12">
              <h3 className="display-5">
                <strong>{currentAdmin.names}</strong> 
              </h3>
                <p className="lead">
                  <strong>Rol:</strong>{" "}
                  {currentAdmin.username}
                </p>
                <p className="lead">
                  <strong>Direccion:</strong>{" "}
                  {currentAdmin.direction}
                </p>
                <p className="lead">
                  <strong>Email:</strong>{" "}
                  {currentAdmin.email}
                </p>
            </div>
          </div>
        </header>
      </div>
    );
  }
}