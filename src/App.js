import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Create from './components/create.component';
import Edit from './components/edit.component';
import Index from './components/index.component';
import AuthService from "./services/auth.service";
import Tarjeta from "./components/tarjeta.component";
import Dashboard from './components/dashboard';
import EditTarjeta from './components/edit.tarjeta'
import LoginAdmin from "./components/admin.component";
import Login from "./components/login.component";
import Profile from "./components/profile.component";
import ProfileAdmin from "./components/profile.admin.component";

class App extends Component {

  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showProfile: false,
      currentUser: undefined,
      currentAdmin: undefined
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();
    const admin = AuthService.getCurrentAdmin();

    if (user) {
      this.setState({
        currentUser: user,
        showProfile: true,
      });
    }
    if (admin) {
      this.setState({
        currentAdmin: admin,
        showProfile: true
      })
    }
  }

  logOut() {
    AuthService.logout();
  }
  logOutAdmin() {
    AuthService.logoutadmin();
  }

  render() {
    const { currentUser, currentAdmin } = this.state;

    return (
      <Router>
        <div className="container-fluid p-0">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">Fast Pay</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={''} className="nav-link"></Link>
                </li>
              <div className="navbar-nav mr-auto">
              {currentAdmin && (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/index"} className="nav-link">
                    Detalle Usuarios
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/profile/admin"} className="nav-link">
                    {currentAdmin.username}
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="/login/admin" className="nav-link" onClick={this.logOutAdmin}>
                    Cerrar Sesion
                  </a>
                </li>
              </div>
              )}
              {currentUser && (
                <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/dashboard"} className="nav-link">
                    Transacciones
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/profile"} className="nav-link">
                    {currentUser.username}
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="/login" className="nav-link" onClick={this.logOut}>
                    Cerrar Sesion
                  </a>
                </li>
              </div>
              )}
                {currentUser || currentAdmin ? (
              <div></div>
            ) : (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/login"} className="nav-link">
                    Iniciar Sesion
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/create"} className="nav-link">
                    Crear Cuenta
                  </Link>
                </li>
              </div>
            )}
            </div>
              </ul>
            </div>
          </nav>
          <Switch>
              <Route exact path='/create' component={ Create } />
              <Route path='/edit/:id' component={ Edit } />
              <Route path='/tarjeta/' component={ Tarjeta } />
              <Route path='/index' component={ Index } />
              <Route path="/editar/tarjeta/:id" component={ EditTarjeta } />
              <Route exact path="/login" component={ Login } />
              <Route exact path="/login/admin" component={ LoginAdmin } />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/profile/admin" component={ProfileAdmin} />
              <Route path="/dashboard" component={ Dashboard } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
