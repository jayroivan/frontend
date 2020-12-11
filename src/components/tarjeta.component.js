import React, { Component } from 'react';
import axios from 'axios';
import AuthService from "../services/auth.service";

export default class Tarjeta extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeNumber = this.onChangeNumber.bind(this);
    this.onChangeMonth = this.onChangeMonth.bind(this);
    this.onChangeYear = this.onChangeYear.bind(this);
    this.onChangeCode = this.onChangeCode.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      currentUser: AuthService.getCurrentUser(),
      name: '',
      Number: '',
      Month:'',
      Year:'',
      Code:''
    }
  }
  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }
  onChangeNumber(e) {
    this.setState({
      Number: e.target.value
    })  
  }
  onChangeMonth(e) {
    this.setState({
      Month: e.target.value
    })
  }
  onChangeYear(e) {
    this.setState({
      Year: e.target.value
    })
  }
  onChangeCode(e) {
    this.setState({
      Code: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const { currentUser } = this.state;
    const obj = {
      name: this.state.name,
      Number: this.state.Number,
      Month: this.state.Month,
      Year: this.state.Year,
      Code: this.state.Code,
    };
    axios.post('https://saturno2020.herokuapp.com/tarjeta/create/'+currentUser.id, obj)
        .then(res => {
          console.log(res.data);
          this.props.history.push("/profile");
              window.location.reload();
        });
    
    this.setState({
      name: '',
      Number: '',
      Month:'',
      Year:'',
      Code:''
    })
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }} className="col-md-4 mx-auto">
            <h3 align="center">Agregar Tarjeta</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Nombre:  </label>
                    <input 
                      type="text" 
                      placeholder="Juan Perez"
                      className="form-control" 
                      value={this.state.name}
                      onChange={this.onChangeName}
                      />
                </div>
                <div className="form-group">
                    <label>Código: </label>
                    <input type="text" 
                      maxlength="16"
                      placeholder="1523 2365 2598 5456"
                      className="form-control"
                      value={this.state.Number}
                      onChange={this.onChangeNumber}
                      />
                </div>
                <div className="row">
                <div className="form-group col-sm">
                    <label>Mes: </label>
                    <input type="text" 
                      className="form-control"
                      placeholder="02"
                      value={this.state.Month}
                      onChange={this.onChangeMonth}
                      />
                </div>
                <div className="form-group col-sm">
                    <label>Año: </label>
                    <input type="text" 
                      className="form-control"
                      placeholder="2024"
                      value={this.state.Year}
                      onChange={this.onChangeYear}
                      />
                </div>
                <div className="form-group col-sm">
                    <label>Codigo: </label>
                    <input type="text" 
                      placeholder="152"
                      maxlength="3"
                      className="form-control"
                      value={this.state.Code}
                      onChange={this.onChangeCode}
                      />
                </div>
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