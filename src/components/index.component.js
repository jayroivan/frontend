import React, { Component } from 'react';
import axios from 'axios';
import TableRowTrans from './TableRow';

export default class Index extends Component {

  constructor(props) {
      super(props);
      this.state = {
        users: [],
        cuentas: [],
        trans: []
      };
    }
    componentDidMount(){
      axios.get('https://saturno2020.herokuapp.com/user/all')
        .then(response => {
          this.setState({ users: response.data.Users, cuentas: response.data.Cuentas, trans: response.data.Transacciones });
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    tabRow(){
      return this.state.users.map(function(object, i){
          return <TableRowTrans obj={object} key={i} />;
      });
    }

    render() {
      return (
        <div>
          <h3 align="center">Users Details</h3>
          <table className="table table-striped col-md-11 mx-auto" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>User Name</th>
                <th>Names</th>
                <th>Direction</th>
                <th>Email</th>
                <th>Account</th>
                <th>Transactions</th>
                <th colSpan="1">Action</th>
              </tr>
            </thead>
            <tbody>
              { this.tabRow() }
            </tbody>
          </table>
        </div>
      );
    }
  }