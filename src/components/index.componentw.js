import React, { Component } from 'react';

export default class Index extends Component {

  constructor(props) {
      super(props);

    }
    render() {
      return (
        <div>
          <h3 align="center">Pagos y Cobros Seguros... Alguien en quien confiar, justo, personal y sencillo.</h3>
                    <div>
                    <img
                      src={require('../img/pay.png')}
                      alt="profile-img"
                      className="profile-img-card"
                      width="80%"
                    />
                    </div>
                    <div>
                    <img
                      src={require('../img/pays.png')}
                      alt="profile-img"
                      className="profile-img-card"
                      width="80%"
                    />
                    </div>
        </div>
      );
    }
  }